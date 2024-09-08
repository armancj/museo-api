import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule as ConfigEnvironmentModule,  } from '@nestjs/config';
import { validationSchema } from './env-validation.schema';
import {MongooseConfigService} from "./mongoose-config.service";

@Module({
  imports: [
    ConfigEnvironmentModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useClass:  MongooseConfigService,
    }),
  ],
  providers: [MongooseConfigService],
})
export class ConfigModule {}
