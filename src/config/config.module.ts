import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule as ConfigEnvironmentModule } from '@nestjs/config';
import configuration from './configuration';
import { validationSchema } from './env-validation.schema';

@Module({
  imports: [
    ConfigEnvironmentModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    MongooseModule.forRoot(configuration().database.uri),
  ],
})
export class ConfigModule {}
