import { Test, TestingModule } from '@nestjs/testing';
import { CategoryMuseumController } from './category-museum.controller';
import { CategoryMuseumService } from './category-museum.service';

describe('CategoryMuseumController', () => {
  let controller: CategoryMuseumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryMuseumController],
      providers: [CategoryMuseumService],
    }).compile();

    controller = module.get<CategoryMuseumController>(CategoryMuseumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
