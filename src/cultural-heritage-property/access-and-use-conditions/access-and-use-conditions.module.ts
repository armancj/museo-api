import { forwardRef, Module } from '@nestjs/common';
import { AccessAndUseConditionsController } from './access-and-use-conditions.controller';
import { CommonRecordService } from '../shared/common-record-service.service';
import { getModelToken } from '@nestjs/mongoose';
import { CulturalHeritagePropertyEntity } from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { AccessAndUseCondition } from './entities/access-and-use-condition.entity';
import { AccessAndUseConditionsEntity } from './entities/access-and-use-conditions.entity';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property/cultural-heritage-property.module';

/**
 * Module for managing access and use conditions of cultural heritage properties.
 */
@Module({
  imports: [
    forwardRef(() => CulturalHeritagePropertyModule), // Usar forwardRef para evitar una dependencia circular
  ],
  controllers: [AccessAndUseConditionsController],
  providers: [
    {
      /**
       * Provider for `CommonRecordService` configured for managing access and use conditions.
       *
       * The service is injected using a factory pattern with the cultural heritage property model,
       * and is registered with the token `'ACCESS_AND_USE_CONDITIONS_SERVICE'`.
       */
      provide: 'ACCESS_AND_USE_CONDITIONS_SERVICE',
      useFactory: culturalHeritagePropertyModel =>
        new CommonRecordService(
          culturalHeritagePropertyModel,
          AccessAndUseCondition,
          AccessAndUseConditionsEntity,
          'accessAndUseConditions',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
  ],
  exports: ['ACCESS_AND_USE_CONDITIONS_SERVICE'],
})
export class AccessAndUseConditionsModule {}
