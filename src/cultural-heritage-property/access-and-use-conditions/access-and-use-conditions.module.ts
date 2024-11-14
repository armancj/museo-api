import { Module } from '@nestjs/common';
import { AccessAndUseConditionsController } from './access-and-use-conditions.controller';
import {CommonRecordService} from "../shared/common-record-service.service";
import {getModelToken, MongooseModule} from "@nestjs/mongoose";
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema
} from "../cultural-heritage-property/Schema/cultural-heritage-property";
import {AccessAndUseCondition} from "./entities/access-and-use-condition.entity";
import {AccessAndUseConditionsEntity} from "./entities/access-and-use-conditions.entity";


@Module({
  imports:[MongooseModule.forFeature([
    {
      name: CulturalHeritagePropertyEntity,
      schema: CulturalHeritagePropertySchema,
    },
  ]),
  ],
  controllers: [AccessAndUseConditionsController],
  providers: [
    {
      provide: 'ACCESS_AND_USE_CONDITIONS_SERVICE',
      useFactory: (culturalHeritagePropertyModel) =>
          new CommonRecordService(
              culturalHeritagePropertyModel,
              AccessAndUseCondition,
              AccessAndUseConditionsEntity,
              'accessAndUseConditions'
          ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
  ],
})
export class AccessAndUseConditionsModule {}
