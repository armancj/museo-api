import { Module } from '@nestjs/common';
import { FileStorageController } from './file-storage.controller';
import { FileStorageService } from "./file-storage.service";
import { FileStorageMongoRepository } from "./repositories/file-storage-mongo.repository";

@Module({
  providers: [FileStorageService, FileStorageMongoRepository],
  controllers: [FileStorageController],
  exports: [ FileStorageService, FileStorageMongoRepository],
})
export class FileStorageModule {}
