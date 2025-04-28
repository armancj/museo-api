import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateHeritageTypeDto } from '../../nomenclator/heritage-type/dto/create-heritage-type.dto';
import { HeritageType } from '../../nomenclator/heritage-type/enum/heritage-type.enum';
import { HeritageTypeService } from '../../nomenclator/heritage-type/heritage-type.service';

// Create default heritage types based on the HeritageType enum
const defaultHeritageTypes: CreateHeritageTypeDto[] = [
  {
    name: HeritageType.CULTURAL,
    description: 'Tipo de patrimonio cultural',
  },
  {
    name: HeritageType.NATURAL,
    description: 'Tipo de patrimonio natural',
  },
  {
    name: HeritageType.MIXED,
    description: 'Tipo de patrimonio mixto (cultural y natural)',
  },
  {
    name: HeritageType.TANGIBLE,
    description: 'Tipo de patrimonio tangible',
  },
  {
    name: HeritageType.INTANGIBLE,
    description: 'Tipo de patrimonio intangible',
  },
  {
    name: HeritageType.MOVABLE,
    description: 'Tipo de patrimonio mueble',
  },
  {
    name: HeritageType.IMMOVABLE,
    description: 'Tipo de patrimonio inmueble',
  },
  {
    name: HeritageType.DOCUMENTARY,
    description: 'Tipo de patrimonio documental',
  },
  {
    name: HeritageType.DIGITAL,
    description: 'Tipo de patrimonio digital',
  },
  {
    name: HeritageType.INDUSTRIAL,
    description: 'Tipo de patrimonio industrial',
  },
  {
    name: HeritageType.ARCHAEOLOGICAL,
    description: 'Tipo de patrimonio arqueológico',
  },
  {
    name: HeritageType.UNDERWATER,
    description: 'Tipo de patrimonio subacuático',
  },
  {
    name: HeritageType.WORLD,
    description: 'Tipo de patrimonio mundial',
  },
  {
    name: HeritageType.NATIONAL,
    description: 'Tipo de patrimonio nacional',
  },
  {
    name: HeritageType.LOCAL,
    description: 'Tipo de patrimonio local',
  },
  {
    name: HeritageType.OTHER,
    description: 'Otros tipos de patrimonio no categorizados',
  },
];

@Command({
  name: 'create:default-heritage-types',
  description: 'Insert default heritage types',
})
export class CreateDefaultHeritageTypes extends CommandRunner {
  private readonly logger = new Logger(`create:default-heritage-types`);

  constructor(
    private readonly heritageTypeService: HeritageTypeService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default heritage types...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultHeritageTypes.map((heritageType) => {
        return this.heritageTypeService.create(heritageType);
      }),
    );

    this.logger.log('Default heritage types created successfully');
  }
}