import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionCategoriesController } from './institution-categories.controller';

describe('InstitutionCategoriesController', () => {
  let controller: InstitutionCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionCategoriesController],
    }).compile();

    controller = module.get<InstitutionCategoriesController>(InstitutionCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
