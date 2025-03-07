import { Command, CommandRunner } from 'nest-commander';
import { DescriptionInstrumentsService } from '../../nomenclator/description-instruments/description-instruments.service';
import { Logger } from '@nestjs/common';
import { CreateDescriptionInstrumentDto } from '../../nomenclator/description-instruments/dto/create-description-instrument.dto';
import { BaseSchema } from '../../common/schema/base.schema';

const defaultDescriptionInstruments: CreateDescriptionInstrumentDto[] = [
    { name: 'Guía', active: true },
    { name: 'Inventario', active: true },
    { name: 'Catálogo', active: true },
    { name: 'Índice', active: true },
    { name: 'Web', active: true },
    { name: 'Aplicación móvil', active: true },
    { name: 'Multimedia', active: true },
];

@Command({
    name: 'create:default-description-instruments',
    description: 'Insert default description instruments',
})
export class CreateDefaultDescriptionInstruments extends CommandRunner {
    private logger = new Logger(`create:default-description-instruments`);

    constructor(private readonly descriptionInstrumentsService: DescriptionInstrumentsService) {
        super();
    }

    async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
        this.logger.log('CreateDefaultDescriptionInstruments', passedParams);
        await Promise.allSettled(
            defaultDescriptionInstruments.map((descriptionInstrument) => {
                return this.descriptionInstrumentsService.create(descriptionInstrument);
            }),
        );

        this.logger.log(`Creating description instruments successfully`);
    }
}
