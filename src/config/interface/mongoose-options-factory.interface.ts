import { MongooseModuleOptions } from '@nestjs/mongoose';

export interface MongooseOptionsFactoryInterface {
  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions;
}
