import { Test, TestingModule } from '@nestjs/testing';
import { ReeupCodeService } from './reeup-code.service';

describe('ReeupCodeService', () => {
  let service: ReeupCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReeupCodeService],
    }).compile();

    service = module.get<ReeupCodeService>(ReeupCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
