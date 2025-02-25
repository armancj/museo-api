import { Test, TestingModule } from '@nestjs/testing';
import { CommercialRegistrationController } from './commercial-registration.controller';
import { CommercialRegistrationService } from './commercial-registration.service';

describe('CommercialRegistrationController', () => {
  let controller: CommercialRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommercialRegistrationController],
      providers: [CommercialRegistrationService],
    }).compile();

    controller = module.get<CommercialRegistrationController>(CommercialRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
