import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import {
  UserPropertiesModel,
} from '../models/user.model';
import { UploadedFileEmbed } from './uploaded-file.embed';


export type UserDocument = HydratedDocument<User>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User implements UserPropertiesModel {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  dateOfBirth?: Date;

  @Prop()
  nationality?: string;

  @Prop()
  address?: string;

  @Prop()
  province?: string;

  @Prop()
  referralSource?: string;

  @Prop({ required: false })
  observations?: string;


  @Prop()
  socialSecurity?: string;

  @Prop({ type: String, unique: true, sparse: true })
  dni?: string;

  @Prop({ type: String, unique: true, sparse: true })
  email: string;

  @Prop()
  mobile?: string;

  @Prop()
  zipCode?: string;

  @Prop()
  accountNumber?: string;

  @Prop()
  passwordHashed: string;

  @Prop({ default: true })
  active?: boolean;

  @Prop({ default: false })
  deleted?: boolean;

  @Prop()
  forgotUid?: string;

  @Prop({ default: false })
  isEmailValid?: boolean;

  @Prop({ type: UploadedFileEmbed })
  avatar?: UploadedFileEmbed;

  @Prop({ type: UploadedFileEmbed })
  dniFaceA?: UploadedFileEmbed;

  @Prop({ type: UploadedFileEmbed })
  dniFaceB?: UploadedFileEmbed;

  @Prop({ default: 'Employee' })
  roles?: string;

  @Prop()
  approvalStatus?: string;

  @Prop()
  jobPositionIds?: string[];


}

const UserSchema = SchemaFactory.createForClass(User);

const UserNameEntity = 'User';
type UserMongoModel = Model<User>;

export { UserSchema, UserNameEntity, UserMongoModel };
