import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataApiDefaultConst } from '../common/data/data-api-default.const';
import {
  ProvinceMongoModel,
  ProvinceNameEntity,
} from '../address/province/schema/province.schema';
import {
  CountryMongoModel,
  CountryNameEntity,
} from '../address/country/schema/country.schema';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(ProvinceNameEntity) private provinceModel: ProvinceMongoModel,
    @InjectModel(CountryNameEntity)
    private countryDocumentModel: CountryMongoModel,
  ) {}

  async onModuleInit() {
    await this.seedProvinces();
  }

  async seedProvinces(): Promise<void> {
    const { provinces, country } = DataApiDefaultConst;

    await this.countryDocumentModel
      .updateOne(
        { name: country },
        { uuid: crypto.randomUUID(), name: country },
        { upsert: true },
      )
      .exec();

    for (const province of provinces) {
      const uuid = crypto.randomUUID();
      const name = province.name;
      await this.provinceModel
        .updateOne({ name, country }, { uuid, country, name }, { upsert: true })
        .exec();
    }
  }
}
