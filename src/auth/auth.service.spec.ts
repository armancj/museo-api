import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthMongoRepository } from './repositories/auth-mongo.repository';
import { EventEmitter2Adapter } from '../shared/event-emitter/event-emitter.adapter';
import { Auth } from './entities/auth.entity';

const FIVE_MINUTES_MS = 5 * 60 * 1000;

describe('AuthService - password recovery flow', () => {
  let service: AuthService;
  let authRepository: jest.Mocked<Pick<AuthMongoRepository, 'findOneAuth' | 'updateOneAuth'>>;
  let eventEmitter: jest.Mocked<Pick<EventEmitter2Adapter, 'emit' | 'emitAsync'>>;

  const buildAuth = (expireCodeDate: number): Auth =>
    Auth.create({
      uuid: 'user-uuid',
      email: 'user@example.com',
      code: 12345,
      expireCodeDate,
    });

  beforeEach(async () => {
    authRepository = {
      findOneAuth: jest.fn(),
      updateOneAuth: jest.fn().mockResolvedValue({ uuid: 'user-uuid' }),
    };
    eventEmitter = {
      emit: jest.fn().mockReturnValue(true),
      emitAsync: jest.fn().mockReturnValue(of(true)),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: { sign: jest.fn().mockReturnValue('signed-token') } },
        { provide: ConfigService, useValue: { get: jest.fn().mockReturnValue('test-value') } },
        { provide: AuthMongoRepository, useValue: authRepository },
        { provide: EventEmitter2Adapter, useValue: eventEmitter },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  describe('verifyCode', () => {
    it('rejects an unknown code', async () => {
      authRepository.findOneAuth.mockResolvedValue(null);

      await expect(
        service.verifyCode({ code: 12345, email: 'user@example.com' }),
      ).rejects.toThrow(BadRequestException);
    });

    it('rejects an expired code', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now() - FIVE_MINUTES_MS - 1000));

      await expect(
        service.verifyCode({ code: 12345, email: 'user@example.com' }),
      ).rejects.toThrow('The verification code has expired.');
    });

    it('accepts a fresh code', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now()));

      await expect(
        service.verifyCode({ code: 12345, email: 'user@example.com' }),
      ).resolves.toBe(true);
    });
  });

  describe('changePassword', () => {
    const payload = {
      code: 12345,
      email: 'user@example.com',
      newPassword: 'new-password',
    };

    it('rejects an unknown code', async () => {
      authRepository.findOneAuth.mockResolvedValue(null);

      await expect(service.changePassword(payload)).rejects.toThrow(BadRequestException);
    });

    // Regression guard for API-02: an expired code used to be accepted here.
    it('rejects an expired code', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now() - FIVE_MINUTES_MS - 1000));

      await expect(service.changePassword(payload)).rejects.toThrow(
        'The verification code has expired.',
      );
      expect(eventEmitter.emitAsync).not.toHaveBeenCalled();
    });

    it('changes the password when the code is fresh', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now()));

      await expect(service.changePassword(payload)).resolves.toBe(true);
      expect(eventEmitter.emitAsync).toHaveBeenCalled();
    });

    // Regression guard for API-02: the code used to stay valid after a successful reset.
    it('invalidates the code after a successful change', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now()));

      await service.changePassword(payload);

      expect(authRepository.updateOneAuth).toHaveBeenCalledWith(
        { uuid: 'user-uuid' },
        expect.objectContaining({ expireCodeDate: 0 }),
      );
    });

    // Regression guard for API-03: a failing update used to be reported as success.
    it('propagates a failure from the user update', async () => {
      authRepository.findOneAuth.mockResolvedValue(buildAuth(Date.now()));
      eventEmitter.emitAsync.mockReturnValue(throwError(() => new Error('update failed')));

      await expect(service.changePassword(payload)).rejects.toThrow('update failed');
      expect(authRepository.updateOneAuth).not.toHaveBeenCalled();
    });
  });
});
