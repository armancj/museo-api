import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DescriptionInstrumentsService } from './description-instruments.service';
import { DescriptionInstrumentsController } from './description-instruments.controller';
import { DescriptionInstrument, DescriptionInstrumentSchema } from './schemas/description-instrument.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DescriptionInstrument.name, schema: DescriptionInstrumentSchema }]),
    // Add any additional modules here if needed
  ],
  controllers: [DescriptionInstrumentsController],
  providers: [DescriptionInstrumentsService],
  exports: [DescriptionInstrumentsService],
})
export class DescriptionInstrumentsModule {}
