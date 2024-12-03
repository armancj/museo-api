import { Module } from '@nestjs/common';
import { FieldReviewStatusService } from './field-review-status.service';
import { FieldReviewStatusController } from './field-review-status.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema
} from "../cultural-heritage-property/Schema/cultural-heritage-property";

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
  controllers: [FieldReviewStatusController],
  providers: [FieldReviewStatusService],
})
export class FieldReviewStatusModule {}
