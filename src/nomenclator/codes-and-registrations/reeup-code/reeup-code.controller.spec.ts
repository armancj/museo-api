import { Test, TestingModule } from '@nestjs/testing';
import { ReeupCodeController } from './reeup-code.controller';
import { ReeupCodeService } from './reeup-code.service';

describe('ReeupCodeController', () => {
  let controller: ReeupCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReeupCodeController],
      providers: [ReeupCodeService],
    }).compile();

    controller = module.get<ReeupCodeController>(ReeupCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
