import { Module } from '@nestjs/common';
import { AssociatedDocumentationService } from './associated-documentation.service';
import { AssociatedDocumentationController } from './associated-documentation.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { CommonRecordService } from '../shared/common-record-service.service';
import { AccessAndUseCondition } from '../access-and-use-conditions/entities/access-and-use-condition.entity';
import { AccessAndUseConditionsEntity } from '../access-and-use-conditions/entities/access-and-use-conditions.entity';

@Module({
  imports: [
    /**
     * Imports the Mongoose module with the cultural heritage property schema.
     */
    MongooseModule.forFeature([
      {
        name: CulturalHeritagePropertyEntity,
        schema: CulturalHeritagePropertySchema,
      },
    ]),
  ],
  controllers: [AssociatedDocumentationController],
  providers: [
    {
      /**
       * Provider for `CommonRecordService` configured for managing access and use conditions.
       *
       * The service is injected using a factory pattern with the cultural heritage property model,
       * and is registered with the token `'ACCESS_AND_USE_CONDITIONS_SERVICE'`.
       */
      provide: 'ASSOCIATED_DOCUMENTATION_SERVICE',
      useFactory: (culturalHeritagePropertyModel) =>
        new CommonRecordService(
          culturalHeritagePropertyModel,
          AccessAndUseCondition,
          AccessAndUseConditionsEntity,
          'accessAndUseConditions',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    AssociatedDocumentationService,
  ],
})
export class AssociatedDocumentationModule {}
