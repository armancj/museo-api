import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { ValueGrade } from '../enum/value-grade.enum';

export type ValueGradeDocument = ValueGradeEntity & Document;
export type ValueGradeMongoModel = Model<ValueGradeDocument>;

@Schema({ collection: 'value-grade' })
export class ValueGradeEntity extends BaseSchema {
  @Prop({
    type: String,
    enum: ValueGrade,
    required: true,
  })
  name: ValueGrade;

  @Prop({ required: true })
  description: string;
}

export const ValueGradeSchema = SchemaFactory.createForClass(
  ValueGradeEntity,
);
ValueGradeSchema.add(BaseSchemaFactory);