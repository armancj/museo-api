import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedService } from './seed.service';
import {
  MunicipalitiesNameEntity,
  MunicipalitiesSchema,
} from '../address/municipality/schema/municipalities.schema';
import {
  CountryNameEntity,
  CountrySchema,
} from '../address/country/schema/country.schema';
import {
  ProvinceNameEntity,
  ProvinceSchema,
} from '../address/province/schema/province.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProvinceNameEntity, schema: ProvinceSchema },
      { name: CountryNameEntity, schema: CountrySchema },
      { name: MunicipalitiesNameEntity, schema: MunicipalitiesSchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
