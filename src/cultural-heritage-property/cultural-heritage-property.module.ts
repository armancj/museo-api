import { Module } from '@nestjs/common';
import { EntryAndLocationRecordModule } from './entry-and-location-record/entry-and-location-record.module';
import { ProducerAuthorRecordModule } from './producer-author-record/producer-author-record.module';
import { CulturalRecordModule } from './cultural-record/cultural-record.module';
import {MongooseModule} from "@nestjs/mongoose";
import {CulturalHeritagePropertyEntity, CulturalHeritagePropertySchema} from "./cultural-record/Schema/cultural-heritage-property";
import { CulturalHeritagePropertyController } from './cultural-heritage-property.controller';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CulturalHeritagePropertyEntity, schema: CulturalHeritagePropertySchema }]),
    EntryAndLocationRecordModule,
    ProducerAuthorRecordModule,
    CulturalRecordModule,
  ],
  controllers: [CulturalHeritagePropertyController],
  providers: [CulturalHeritagePropertyService],
})
export class CulturalHeritagePropertyModule {}
