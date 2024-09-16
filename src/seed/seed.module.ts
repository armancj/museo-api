import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedService } from './seed.service';
import {
  ProvinceNameEntity,
  ProvinceSchema,
} from '../province/schema/province.schema';
import {CountryNameEntity, CountrySchema} from "../country/schema/country.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProvinceNameEntity, schema: ProvinceSchema },
      { name: CountryNameEntity, schema: CountrySchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
