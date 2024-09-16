import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { BaseModel } from '../interfaces/base.model';

@Schema()
export class BaseSchema implements BaseModel {
  @Prop({ default: crypto.randomUUID() })
  uuid: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: false })
  deleted: boolean;
}

export const BaseSchemaFactory = SchemaFactory.createForClass(BaseSchema);
