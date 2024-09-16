import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CountryNameEntity, CountrySchema} from "./schema/country.schema";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CountryNameEntity, schema: CountrySchema },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
