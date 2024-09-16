import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedService } from './seed.service';
import {
  ProvinceNameEntity,
  ProvinceSchema,
} from '../province/schema/province.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProvinceNameEntity, schema: ProvinceSchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
