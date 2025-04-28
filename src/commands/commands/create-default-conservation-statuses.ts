import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateConservationStatusDto } from '../../nomenclator/conservation-status/dto/create-conservation-status.dto';
import { ConservationStatus } from '../../nomenclator/conservation-status/enum/conservation-status.enum';
import { ConservationStatusService } from '../../nomenclator/conservation-status/conservation-status.service';

// Create default conservation statuses based on the ConservationStatus enum
const defaultConservationStatuses: CreateConservationStatusDto[] = [
  {
    name: ConservationStatus.GOOD,
    description: 'Estado de conservación bueno',
  },
  {
    name: ConservationStatus.REGULAR,
    description: 'Estado de conservación regular',
  },
  {
    name: ConservationStatus.REGULAR_PAPER_ACIDITY,
    description: 'Estado de conservación regular por acidez del papel',
  },
  {
    name: ConservationStatus.REGULAR_DRYNESS,
    description: 'Estado de conservación regular por sequedad',
  },
  {
    name: ConservationStatus.REGULAR_RODENTS,
    description: 'Estado de conservación regular por daño de roedores',
  },
  {
    name: ConservationStatus.REGULAR_FOXING,
    description: 'Estado de conservación regular por foxing (manchas de óxido)',
  },
  {
    name: ConservationStatus.REGULAR_DEGRADING_INK,
    description: 'Estado de conservación regular por degradación de tinta',
  },
  {
    name: ConservationStatus.REGULAR_DISCOLORATION,
    description: 'Estado de conservación regular por decoloración',
  },
  {
    name: ConservationStatus.REGULAR_INSECTS,
    description: 'Estado de conservación regular por daño de insectos',
  },
  {
    name: ConservationStatus.REGULAR_PARTIAL_FIRE_DAMAGE,
    description: 'Estado de conservación regular por daño parcial de fuego',
  },
  {
    name: ConservationStatus.REGULAR_LOCAL_DAMAGE_BY_ATTACHMENTS,
    description: 'Estado de conservación regular por daño local de adjuntos',
  },
  {
    name: ConservationStatus.REGULAR_CONTAMINATION,
    description: 'Estado de conservación regular por contaminación',
  },
  {
    name: ConservationStatus.REGULAR_FUNGI,
    description: 'Estado de conservación regular por hongos',
  },
  {
    name: ConservationStatus.REGULAR_PARTIAL_BREAKAGE,
    description: 'Estado de conservación regular por rotura parcial',
  },
  {
    name: ConservationStatus.REGULAR_HUMIDITY,
    description: 'Estado de conservación regular por humedad',
  },
  {
    name: ConservationStatus.REGULAR_DUST,
    description: 'Estado de conservación regular por polvo',
  },
  {
    name: ConservationStatus.REGULAR_BACTERIA,
    description: 'Estado de conservación regular por bacterias',
  },
  {
    name: ConservationStatus.REGULAR_PARTIAL_TEAR,
    description: 'Estado de conservación regular por desgarro parcial',
  },
  {
    name: ConservationStatus.BAD,
    description: 'Estado de conservación malo',
  },
  {
    name: ConservationStatus.BAD_PAPER_ACIDITY,
    description: 'Estado de conservación malo por acidez del papel',
  },
  {
    name: ConservationStatus.BAD_DRYNESS,
    description: 'Estado de conservación malo por sequedad',
  },
  {
    name: ConservationStatus.BAD_RODENTS,
    description: 'Estado de conservación malo por daño de roedores',
  },
  {
    name: ConservationStatus.BAD_FOXING,
    description: 'Estado de conservación malo por foxing (manchas de óxido)',
  },
  {
    name: ConservationStatus.BAD_DEGRADING_INK,
    description: 'Estado de conservación malo por degradación de tinta',
  },
  {
    name: ConservationStatus.BAD_DISCOLORATION,
    description: 'Estado de conservación malo por decoloración',
  },
  {
    name: ConservationStatus.BAD_INSECTS,
    description: 'Estado de conservación malo por daño de insectos',
  },
  {
    name: ConservationStatus.BAD_PARTIAL_FIRE_DAMAGE,
    description: 'Estado de conservación malo por daño parcial de fuego',
  },
  {
    name: ConservationStatus.BAD_LOCAL_DAMAGE_BY_ATTACHMENTS,
    description: 'Estado de conservación malo por daño local de adjuntos',
  },
  {
    name: ConservationStatus.BAD_CONTAMINATION,
    description: 'Estado de conservación malo por contaminación',
  },
  {
    name: ConservationStatus.BAD_FUNGI,
    description: 'Estado de conservación malo por hongos',
  },
  {
    name: ConservationStatus.BAD_PARTIAL_BREAKAGE,
    description: 'Estado de conservación malo por rotura parcial',
  },
  {
    name: ConservationStatus.BAD_HUMIDITY,
    description: 'Estado de conservación malo por humedad',
  },
  {
    name: ConservationStatus.BAD_DUST,
    description: 'Estado de conservación malo por polvo',
  },
  {
    name: ConservationStatus.BAD_BACTERIA,
    description: 'Estado de conservación malo por bacterias',
  },
  {
    name: ConservationStatus.BAD_PARTIAL_TEAR,
    description: 'Estado de conservación malo por desgarro parcial',
  },
];

@Command({
  name: 'create:default-conservation-statuses',
  description: 'Insert default conservation statuses',
})
export class CreateDefaultConservationStatuses extends CommandRunner {
  private readonly logger = new Logger(`create:default-conservation-statuses`);

  constructor(
    private readonly conservationStatusService: ConservationStatusService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default conservation statuses...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultConservationStatuses.map((status) => {
        return this.conservationStatusService.create(status);
      }),
    );

    this.logger.log('Default conservation statuses created successfully');
  }
}