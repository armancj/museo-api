import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Model} from 'mongoose';
import {
  UserPropertiesModel,
} from '../models/user.model';
import { UploadedFileEmbed } from './uploaded-file.embed';
import {UserRoles} from "../enum/user-roles.enum";


type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements UserPropertiesModel {

  @Prop({ unique: true })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  nationality?: string;

  @Prop()
  address?: string;

  @Prop()
  province?: string;

  @Prop({ type: String, unique: true, sparse: true })
  email: string;

  @Prop({ type: String, unique: true, sparse: true })
  mobile: string;

  @Prop()
  passwordHashed: string;

  @Prop({ default: true })
  active?: boolean;

  @Prop({ default: false })
  deleted?: boolean;

  @Prop({ type: UploadedFileEmbed })
  avatar?: UploadedFileEmbed;

  @Prop({ default: UserRoles.employee })
  roles?: UserRoles;

  @Prop()
  municipal: string;
}

const UserSchema = SchemaFactory.createForClass(User);

const UserNameEntity = 'User';
type UserMongoModel = Model<UserDocument>;

export { UserSchema, UserNameEntity, UserMongoModel, UserDocument };
