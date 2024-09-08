import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserNameEntity, UserSchema } from './schema/users.schema';
import { HandledErrorModule } from "../shared/handled-error/handled-error.module";
import { FileStorageModule } from "../file-storage/file-storage.module";
import { SharedModule } from "../shared/shared.module";
import {UsersService} from "./users.service";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserNameEntity, schema: UserSchema }]),
    HandledErrorModule,
    FileStorageModule,
    SharedModule,
  ],
  controllers: [UsersController],
  providers: [ UsersService],
  exports: [],
})
export class UsersModule {}
