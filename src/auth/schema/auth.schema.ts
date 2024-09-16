import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { AuthPropertiesModel } from '../repositories/auth.model';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
class Auth implements AuthPropertiesModel {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  currentHashedRefreshToken?: string;

  @Prop()
  code?: number;

  @Prop()
  email?: string;

  @Prop()
  expireCodeDate?: number;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
export const AuthNameEntity = 'Auth';
export type AuthMongoModel = Model<AuthDocument>;
