import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class CommercialRegistration extends Document {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop()
    description?: string;
}

export const CommercialRegistrationSchema = SchemaFactory.createForClass(CommercialRegistration);
