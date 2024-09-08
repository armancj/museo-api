import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import {apiEnv} from "./app.const";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: this.configService.get<string>(apiEnv.database.uri),
        };
    }
}
