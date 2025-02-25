import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {HydratedDocument, Model, Types} from 'mongoose';
import {BaseSchema, BaseSchemaFactory} from "../../../common/schema/base.schema";
import {FieldReviewStatusModel as FieldReviewStatusInterface} from "../models/field-review-status.model";


export type FieldReviewStatusDocument = HydratedDocument<FieldReviewStatusInterface>;

@Schema()
export class FieldReviewStatus extends BaseSchema {
    @Prop()
    isUnderReview: boolean;

    @Prop()
    isApproved: boolean;

    @Prop()
    reviewedBy: string;

    @Prop()
    reviewDate: Date;

    @Prop({ type: mongoose.Schema.Types.Mixed})
    currentValue: any;

    @Prop({ type: mongoose.Schema.Types.Mixed})
    previousValue: any;

    @Prop({default: 'system' })
    modifiedBy: string;

    @Prop({ default: Date.now })
    modificationDate: Date;

    @Prop()
    comment: string;

    @Prop({ type: String })
    fieldName: string;

    @Prop({ type: Types.ObjectId, ref: 'CulturalHeritageProperty' })
    culturalHeritageProperty: Types.ObjectId;
}

export const FieldReviewStatusSchema = SchemaFactory.createForClass(FieldReviewStatus);

FieldReviewStatusSchema.add(BaseSchemaFactory);

export const FieldReviewStatusEntity = 'FieldReviewStatus';
export type FieldReviewStatusModel =
    Model<FieldReviewStatusDocument>;