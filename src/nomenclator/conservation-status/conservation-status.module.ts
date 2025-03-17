import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConservationStatusService } from './conservation-status.service';
import { ConservationStatusController } from './conservation-status.controller';
import { ConservationStatusEntity, ConservationStatusSchema } from './schema/conservation-status.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConservationStatusEntity.name,
        schema: ConservationStatusSchema,
      },
    ]),
  ],
  controllers: [ConservationStatusController],
  providers: [ConservationStatusService],
  exports: [ConservationStatusService],
})
export class ConservationStatusModule {} 