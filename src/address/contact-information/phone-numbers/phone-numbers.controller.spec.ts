import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumbersController } from './phone-numbers.controller';
import { PhoneNumbersService } from './phone-numbers.service';

describe('PhoneNumbersController', () => {
  let controller: PhoneNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumbersController],
      providers: [PhoneNumbersService],
    }).compile();

    controller = module.get<PhoneNumbersController>(PhoneNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
