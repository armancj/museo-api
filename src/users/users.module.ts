import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserNameEntity, UserSchema } from './schema/users.schema';
import { HandledErrorModule } from '../shared/handled-error/handled-error.module';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users.service';
import { UserMongoRepository } from './repositories/user-mongo.repository';
import { FileStorageModule } from '../file-storage/file-storage.module';
import {InstitutionNameEntity, InstitutionSchema} from "../address/institutions/schema/institution.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: InstitutionNameEntity, schema: InstitutionSchema }, { name: UserNameEntity, schema: UserSchema }]),
    HandledErrorModule,
    FileStorageModule,
    SharedModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UserMongoRepository],
  exports: [UsersService],
})
export class UsersModule {}
