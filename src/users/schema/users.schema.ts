import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { UserModel, UserPropertiesModel } from '../models/user.model';
import { UploadedFileEmbed } from './uploaded-file.embed';
import { UserRoles } from '../enum/user-roles.enum';
import {
  Institution,
  InstitutionNameEntity,
} from '../../address/institutions/schema/institution.schema';
import { Type } from 'class-transformer';

type UserDocument = HydratedDocument<User>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User implements UserModel {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  nationality?: string | null;

  @Prop()
  address?: string;

  @Prop()
  province?: string | null;

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
  municipal: string | null;

  @Prop()
  institutionId?: string | null;

  @Type(() => Institution)
  institution?: Institution;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('institution', {
  ref: InstitutionNameEntity,
  localField: 'institutionId',
  foreignField: 'uuid',
  justOne: true,
});

UserSchema.pre('save', function (next) {
  if (this.roles === UserRoles.superAdmin) {
    this.nationality = null;
    this.province = null;
    this.municipal = null;
    this.institutionId = null;
  }
  if (this.roles === UserRoles.administrator) {
    this.municipal = null;
    this.institutionId = null;
  }
  next();
});

const UserNameEntity = 'User';
type UserMongoModel = Model<UserDocument>;

export { UserSchema, UserNameEntity, UserMongoModel, UserDocument };
