import { CreateCategoryMuseumDto } from '../../nomenclator/institutions/category-museum/dto/create-category-museum.dto';
import { CommandRunner } from 'nest-commander';
import { CategoryMuseumService } from '../../nomenclator/institutions/category-museum/category-museum.service';
import { Logger } from '@nestjs/common';

const defaultCategories: CreateCategoryMuseumDto[] = [
  {
    name: 'Categoría Especial',
    description:
      'Solo la pueden ostentar los Museos y los Complejos Museológicos',
    active: true,
  },
];

export class CreateDefaultCategories extends CommandRunner {
  private logger = new Logger(`create:default-categories`);

  constructor(private readonly categoryService: CategoryMuseumService) {
    super();
  }

  async run(passedParams: string[]): Promise<void> {
    this.logger.log('CreateDefaultCategories', passedParams);
    await Promise.allSettled(
      defaultCategories.map((category) => {
        this.categoryService.create(category);
      }),
    );

    this.logger.log(`Creating categories successfully`);
  }
}
