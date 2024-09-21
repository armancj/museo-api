import {Module} from '@nestjs/common';
import {FileStorageController} from './file-storage.controller';
import {FileStorageRepositoryProvider} from './providers/file-storage-repository.provider';
import {FileStorageServiceProvider} from './providers/file-storage-service.provider';

import {ConfigService} from "@nestjs/config";
import {MongoGridConnection} from "./mongo-grid/mongo.gridfs";

@Module({
    providers: [
        {
            provide: MongoGridConnection,
            useFactory: (configService: ConfigService) => MongoGridConnection.getInstance(configService),
            inject: [ConfigService],
        },
        FileStorageServiceProvider,
        FileStorageRepositoryProvider],
    controllers: [FileStorageController],
    exports: [FileStorageServiceProvider],
})
export class FileStorageModule {
}
