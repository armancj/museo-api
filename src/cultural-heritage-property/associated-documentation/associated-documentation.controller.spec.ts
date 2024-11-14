import { Test, TestingModule } from '@nestjs/testing';
import { AssociatedDocumentationController } from './associated-documentation.controller';
import { AssociatedDocumentationService } from './associated-documentation.service';

describe('AssociatedDocumentationController', () => {
  let controller: AssociatedDocumentationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociatedDocumentationController],
      providers: [AssociatedDocumentationService],
    }).compile();

    controller = module.get<AssociatedDocumentationController>(AssociatedDocumentationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
