import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export type UserDocument = HydratedDocument<Auth>;

@Schema()
class Auth  {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  currentHashedRefreshToken?: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
export const AuthNameEntity = 'Auth';
export type AuthMongoModel = Model<Auth>;
