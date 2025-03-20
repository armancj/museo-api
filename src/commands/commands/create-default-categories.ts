import { CreateCategoryMuseumDto } from '../../nomenclator/institutions/category-museum/dto/create-category-museum.dto';
import { Command, CommandRunner } from 'nest-commander';
import { CategoryMuseumService } from '../../nomenclator/institutions/category-museum/category-museum.service';
import { Logger } from '@nestjs/common';

export const defaultCategories: CreateCategoryMuseumDto[] = [
  {
    name: 'Categoría Especial',
    description:
      'Solo la pueden ostentar los Museos y los Complejos Museológicos',
    active: true,
  },
  {
    name: 'Categoría I',
    description: 'Categoría para Extensiones de Museos',
    active: true,
  },
  {
    name: 'Categoría II',
    description: 'Categoría para otras instituciones',
    active: true,
  },
  {
    name: 'Categoría III',
    description: 'Categoría para otras instituciones 2.0',
    active: true,
  },
];

@Command({
  name: 'create:default-categories',
  description: 'Insert default categories based on institution type',
})
export class CreateDefaultCategories extends CommandRunner {
  private logger = new Logger(`create:default-categories`);

  constructor(private readonly categoryService: CategoryMuseumService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('CreateDefaultCategories', passedParams);
    await Promise.allSettled(
      defaultCategories.map((category) => {
        return this.categoryService.create(category);
      }),
    );

    this.logger.log(`Creating categories successfully`);
  }
}
