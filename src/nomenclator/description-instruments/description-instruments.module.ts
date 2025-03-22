import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DescriptionInstrumentsService } from './description-instruments.service';
import { DescriptionInstrumentsController } from './description-instruments.controller';
import {
  DescriptionInstrumentNameEntity,
  DescriptionInstrumentSchema,
} from './schemas/description-instrument.schema';
import { InstitutionsModule } from '../../address';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DescriptionInstrumentNameEntity,
        schema: DescriptionInstrumentSchema,
      },
    ]),
    InstitutionsModule,
  ],
  controllers: [DescriptionInstrumentsController],
  providers: [DescriptionInstrumentsService],
  exports: [DescriptionInstrumentsService],
})
export class DescriptionInstrumentsModule {}
