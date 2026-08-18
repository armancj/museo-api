import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionControlController } from './description-control.controller';
import { DescriptionControlService } from './description-control.service';

describe('DescriptionControlController', () => {
  let controller: DescriptionControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionControlController],
      providers: [
        {
          provide: DescriptionControlService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DescriptionControlController>(DescriptionControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
