import { Module } from '@nestjs/common';
import { AssociatedDocumentationService } from './associated-documentation.service';
import { AssociatedDocumentationController } from './associated-documentation.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { CommonRecordService } from '../shared/common-record-service.service';
import { AssociatedDocumentationEntity } from './entities/associated-documentation.entity';
import { AssociatedDocumentationsEntity } from './entities/associated-documentations.entity';

/**
 * Module that manages associated documentation.
 *
 * Provides the controller and service to handle associated documentation within
 * the cultural heritage property schema. It also sets up the provider for `CommonRecordService`
 * to interact with the associated documentation data in a standardized way.
 */
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
    /**
     * Provider for `CommonRecordService` configured for managing associated documentation.
     *
     * The service is injected using a factory pattern with the cultural heritage property model,
     * and is registered with the token `'ASSOCIATED_DOCUMENTATION_SERVICE'`.
     */
    {
      provide: 'ASSOCIATED_DOCUMENTATION_SERVICE',
      useFactory: (culturalHeritagePropertyModel) =>
        new CommonRecordService(
          culturalHeritagePropertyModel,
          AssociatedDocumentationEntity,
          AssociatedDocumentationsEntity,
          'associatedDocumentation',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    /**
     * Service for handling the business logic of associated documentation.
     */
    AssociatedDocumentationService,
  ],
})
export class AssociatedDocumentationModule {}
