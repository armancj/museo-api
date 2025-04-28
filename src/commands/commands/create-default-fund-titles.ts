import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateFundTitleDto } from '../../nomenclator/fund-title/dto/create-fund-title.dto';
import { FundTitle } from '../../nomenclator/fund-title/enum/fund-title.enum';
import { FundTitleService } from '../../nomenclator/fund-title/fund-title.service';

// Create default fund titles based on the FundTitle enum
const defaultFundTitles: CreateFundTitleDto[] = [
  {
    name: FundTitle.ARCHIVE,
    description: 'Título de fondo para archivos',
  },
  {
    name: FundTitle.COLLECTION,
    description: 'Título de fondo para colecciones generales',
  },
  {
    name: FundTitle.LIBRARY,
    description: 'Título de fondo para bibliotecas',
  },
  {
    name: FundTitle.MUSEUM,
    description: 'Título de fondo para museos',
  },
  {
    name: FundTitle.GALLERY,
    description: 'Título de fondo para galerías',
  },
  {
    name: FundTitle.PRIVATE_COLLECTION,
    description: 'Título de fondo para colecciones privadas',
  },
  {
    name: FundTitle.INSTITUTIONAL_COLLECTION,
    description: 'Título de fondo para colecciones institucionales',
  },
  {
    name: FundTitle.THEMATIC_COLLECTION,
    description: 'Título de fondo para colecciones temáticas',
  },
  {
    name: FundTitle.HISTORICAL_COLLECTION,
    description: 'Título de fondo para colecciones históricas',
  },
  {
    name: FundTitle.SPECIAL_COLLECTION,
    description: 'Título de fondo para colecciones especiales',
  },
  {
    name: FundTitle.RESEARCH_COLLECTION,
    description: 'Título de fondo para colecciones de investigación',
  },
  {
    name: FundTitle.EDUCATIONAL_COLLECTION,
    description: 'Título de fondo para colecciones educativas',
  },
  {
    name: FundTitle.OTHER,
    description: 'Otros títulos de fondo no categorizados',
  },
];

@Command({
  name: 'create:default-fund-titles',
  description: 'Insert default fund titles',
})
export class CreateDefaultFundTitles extends CommandRunner {
  private readonly logger = new Logger(`create:default-fund-titles`);

  constructor(
    private readonly fundTitleService: FundTitleService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default fund titles...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultFundTitles.map((fundTitle) => {
        return this.fundTitleService.create(fundTitle);
      }),
    );

    this.logger.log('Default fund titles created successfully');
  }
}