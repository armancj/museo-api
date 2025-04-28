import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateGenericClassificationDto } from '../../nomenclator/generic-classification/dto/create-generic-classification.dto';
import { GenericClassification } from '../../nomenclator/generic-classification/enum/generic-classification.enum';
import { GenericClassificationService } from '../../nomenclator/generic-classification/generic-classification.service';

// Create default generic classifications based on the GenericClassification enum
const defaultGenericClassifications: CreateGenericClassificationDto[] = [
  {
    name: GenericClassification.DOCUMENT,
    description: 'Clasificación genérica para documentos',
  },
  {
    name: GenericClassification.BOOK,
    description: 'Clasificación genérica para libros',
  },
  {
    name: GenericClassification.MANUSCRIPT,
    description: 'Clasificación genérica para manuscritos',
  },
  {
    name: GenericClassification.PHOTOGRAPH,
    description: 'Clasificación genérica para fotografías',
  },
  {
    name: GenericClassification.MAP,
    description: 'Clasificación genérica para mapas',
  },
  {
    name: GenericClassification.ARTWORK,
    description: 'Clasificación genérica para obras de arte',
  },
  {
    name: GenericClassification.ARTIFACT,
    description: 'Clasificación genérica para artefactos',
  },
  {
    name: GenericClassification.AUDIO,
    description: 'Clasificación genérica para archivos de audio',
  },
  {
    name: GenericClassification.VIDEO,
    description: 'Clasificación genérica para archivos de video',
  },
  {
    name: GenericClassification.DIGITAL,
    description: 'Clasificación genérica para archivos digitales',
  },
  {
    name: GenericClassification.OTHER,
    description: 'Otras clasificaciones genéricas no categorizadas',
  },
];

@Command({
  name: 'create:default-generic-classifications',
  description: 'Insert default generic classifications',
})
export class CreateDefaultGenericClassifications extends CommandRunner {
  private readonly logger = new Logger(`create:default-generic-classifications`);

  constructor(
    private readonly genericClassificationService: GenericClassificationService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default generic classifications...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultGenericClassifications.map((classification) => {
        return this.genericClassificationService.create(classification);
      }),
    );

    this.logger.log('Default generic classifications created successfully');
  }
}