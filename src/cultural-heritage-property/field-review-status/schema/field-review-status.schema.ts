import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {BaseSchema} from "../../../common/schema/base.schema";
import {FieldReviewStatusModel} from "../models/field-review-status.model";

export type FieldReviewStatusDocument = FieldReviewStatus & Document;

@Schema()
export class FieldReviewStatus extends BaseSchema implements FieldReviewStatusModel{
    @Prop()
    isUnderReview: boolean;

    @Prop()
    isApproved: boolean;

    @Prop()
    reviewedBy: string;

    @Prop()
    reviewDate: Date;

    @Prop()
    previousValue: any;

    @Prop()
    modifiedBy: string;

    @Prop()
    modificationDate: Date;

    @Prop()
    comment: string;
}

export const FieldReviewStatusSchema = SchemaFactory.createForClass(FieldReviewStatus);
