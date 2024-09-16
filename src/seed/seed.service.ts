import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataApiDefaultConst } from '../common/data/data-api-default.const';
import {
  ProvinceMongoModel,
  ProvinceNameEntity,
} from '../province/schema/province.schema';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(ProvinceNameEntity) private provinceModel: ProvinceMongoModel,
  ) {}

  async onModuleInit() {
    await this.seedProvinces();
  }

  async seedProvinces(): Promise<void> {
    const { provinces, country } = DataApiDefaultConst;

    for (const name of provinces) {
      await this.provinceModel
        .updateOne({ name, country }, { name, country }, { upsert: true })
        .exec();
    }
  }
}
