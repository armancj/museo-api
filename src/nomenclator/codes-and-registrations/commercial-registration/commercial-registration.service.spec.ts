import { Test, TestingModule } from '@nestjs/testing';
import { CommercialRegistrationService } from './commercial-registration.service';

describe('CommercialRegistrationService', () => {
  let service: CommercialRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommercialRegistrationService],
    }).compile();

    service = module.get<CommercialRegistrationService>(CommercialRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
