import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  ProvinceMongoModel,
  ProvinceNameEntity,
} from './schema/province.schema';
import { Province } from './entities/province.entity';
import { Provinces } from './entities/provinces.entity';
import { DataApiDefaultConst } from '../common/data/data-api-default.const';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectModel(ProvinceNameEntity) private provinceModel: ProvinceMongoModel,
  ) {}

  async create(createProvinceDto: CreateProvinceDto): Promise<Province> {
    const createdProvince = await this.provinceModel.create(createProvinceDto);
    return Province.create(createdProvince);
  }

  async findAll(): Promise<Provinces> {
    const provinces = await this.provinceModel.find().exec();
    return Provinces.create(provinces);
  }

  async findOne(uuid: string): Promise<Province> {
    const province = await this.provinceModel.findOne({ uuid }).exec();

    if (!province) throw new NotFoundException('Not found Province');

    return Province.create(province);
  }
  async update(
    uuid: string,
    updateProvinceDto: UpdateProvinceDto,
  ): Promise<void> {
    await this.findOne(uuid);
    await this.provinceModel.updateOne({ uuid }, updateProvinceDto).exec();
  }

  async remove(uuid: string): Promise<void> {
    await this.findOne(uuid);
    await this.provinceModel.findOneAndDelete({ uuid });
  }
}
