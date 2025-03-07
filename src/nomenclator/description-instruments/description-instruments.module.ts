import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DescriptionInstrumentsService } from './description-instruments.service';
import { DescriptionInstrumentsController } from './description-instruments.controller';
import { DescriptionInstrument, DescriptionInstrumentSchema } from './schemas/description-instrument.schema';
import { InstitutionsModule } from '../../address/institutions/institutions.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: DescriptionInstrument.name, schema: DescriptionInstrumentSchema }]),
    InstitutionsModule,
  ],
  controllers: [DescriptionInstrumentsController],
  providers: [DescriptionInstrumentsService],
  exports: [DescriptionInstrumentsService],
})
export class DescriptionInstrumentsModule { }
