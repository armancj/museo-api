import { forwardRef, Module } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { DescriptionControlService } from './description-control.service';
import { DescriptionControlController } from './description-control.controller';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CulturalHeritagePropertyEntity } from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { DescriptionControl } from './entities/description-control.entity';
import { DescriptionControlsEntity } from './entities/description-controls.entity';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property/cultural-heritage-property.module';

/**
 * Module that manages description controls, including operations for maintaining audit records.
 *
 * Provides the controller and service to handle description controls within the schema.
 */
@Module({
  imports: [
    forwardRef(() => CulturalHeritagePropertyModule), // Usar forwardRef para evitar una dependencia circular
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
