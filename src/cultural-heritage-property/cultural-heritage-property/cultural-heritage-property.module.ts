import { Module } from '@nestjs/common';
import { EntryAndLocationRecordModule } from '../entry-and-location-record/entry-and-location-record.module';
import { ProducerAuthorRecordModule } from '../producer-author-record/producer-author-record.module';
import { CulturalRecordModule } from '../cultural-record/cultural-record.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from './Schema/cultural-heritage-property';
import { CulturalHeritagePropertyController } from './cultural-heritage-property.controller';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';
import { AccessAndUseConditionsModule } from '../access-and-use-conditions/access-and-use-conditions.module';
import { AssociatedDocumentationModule } from '../associated-documentation/associated-documentation.module';
import { DescriptionControlModule } from '../description-control/description-control.module';
import { CulturalNotesModule } from '../cultural-notes/cultural-notes.module';
import { applyCommonHooksSchema } from '../field-review-status/schema/apply-common-hooks.schema';

@Module({
  imports: [
    /**
     * Imports the Mongoose module with the cultural heritage property schema.
     */
    MongooseModule.forFeatureAsync([
      {
        name: CulturalHeritagePropertyEntity,
        useFactory: () => {
          return applyCommonHooksSchema(CulturalHeritagePropertySchema); // Aplica los hooks al esquema
        },
      },
    ]),
    EntryAndLocationRecordModule,
    ProducerAuthorRecordModule,
    CulturalRecordModule,
    AccessAndUseConditionsModule,
    AssociatedDocumentationModule,
    DescriptionControlModule,
    CulturalNotesModule,
  ],
  controllers: [CulturalHeritagePropertyController],
  providers: [CulturalHeritagePropertyService],
  exports: [MongooseModule, CulturalHeritagePropertyService],
})
export class CulturalHeritagePropertyModule {}
