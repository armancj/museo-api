import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { DescriptionControlService } from './description-control.service';
import { DescriptionControlController } from './description-control.controller';
import { CommonRecordService } from '../shared/common-record-service.service';
import { ExtendedDescriptionControlEntity } from './entities/extended-description-control.entity';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { DescriptionControl } from "./entities/description-control.entity";
import { DescriptionControlsEntity } from "./entities/description-controls.entity";

/**
 * Module that manages description controls, including operations for maintaining audit records.
 *
 * Provides the controller and service to handle description controls within the schema.
 */
@Module({
  imports: [
    /**
     * Imports the Mongoose module with the description control schema.
     */
    MongooseModule.forFeature([
      {
        name: CulturalHeritagePropertyEntity,
        schema: CulturalHeritagePropertySchema,
      },
    ]),
  ],
  controllers: [
    /**
     * Controller for handling HTTP requests related to description controls.
     */
    DescriptionControlController,
  ],
  providers: [
    /**
     * Provider for `CommonRecordService` configured for managing description controls.
     *
     * The service is injected using a factory pattern with the description control model,
     * and is registered with the token `'DESCRIPTION_CONTROL_SERVICE'`.
     */
    {
      provide: 'DESCRIPTION_CONTROL_SERVICE',
      useFactory: (descriptionControlModel) =>
        new CommonRecordService(
          descriptionControlModel,
          DescriptionControl,
          DescriptionControlsEntity,
          'descriptionControl',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    /**
     * Service for handling the business logic of description controls.
     */
    DescriptionControlService,
  ],
})
export class DescriptionControlModule {}
