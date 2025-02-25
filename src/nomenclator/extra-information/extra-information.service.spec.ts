import { Test, TestingModule } from '@nestjs/testing';
import { ExtraInformationService } from './extra-information.service';

describe('ExtraInformationService', () => {
  let service: ExtraInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraInformationService],
    }).compile();

    service = module.get<ExtraInformationService>(ExtraInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
