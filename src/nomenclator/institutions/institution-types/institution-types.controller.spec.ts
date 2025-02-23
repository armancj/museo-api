import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionTypesController } from './institution-types.controller';

describe('InstitutionTypesController', () => {
  let controller: InstitutionTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionTypesController],
    }).compile();

    controller = module.get<InstitutionTypesController>(InstitutionTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
