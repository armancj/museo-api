import { Module } from '@nestjs/common';
import { FieldReviewStatusService } from './field-review-status.service';
import { FieldReviewStatusController } from './field-review-status.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema
} from "../cultural-heritage-property/Schema/cultural-heritage-property";
import {FieldReviewStatusEntity, FieldReviewStatusSchema} from "./schema/field-review-status.schema";

@Module({
  imports: [
    /**
     * Imports the Mongoose module with the field review status entity schema.
     */
    MongooseModule.forFeature([
      {
        name: FieldReviewStatusEntity,
        schema: FieldReviewStatusSchema,
      },
    ]),
  ],
  controllers: [FieldReviewStatusController],
  providers: [FieldReviewStatusService],
})
export class FieldReviewStatusModule {}
