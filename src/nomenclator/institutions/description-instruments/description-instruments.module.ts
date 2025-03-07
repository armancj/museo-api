import { Module } from '@nestjs/common';
import { DescriptionInstrumentsService } from 'src/nomenclator/description-instruments/description-instruments.service';


@Module({
    providers: [DescriptionInstrumentsService],
    exports: [DescriptionInstrumentsService],
})
export class DescriptionInstrumentsModule { }
