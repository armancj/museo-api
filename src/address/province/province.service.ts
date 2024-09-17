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

@Injectable()
export class ProvinceService {
  constructor(
    @InjectModel(ProvinceNameEntity) private provinceModel: ProvinceMongoModel,
  ) {}

  async create(createProvinceDto: CreateProvinceDto): Promise<Province> {
    const createdProvince = await this.provinceModel.create(createProvinceDto);
    return Province.create(createdProvince);
  }

  async findAll(filter: UpdateProvinceDto): Promise<Province[]> {
    const provinces = await this.provinceModel.find({ ...filter, deleted: false }).exec();
    return Provinces.create(provinces).value;
  }

  async findOne(uuid: string, filter?: UpdateProvinceDto): Promise<Province> {
    const province = await this.provinceModel
      .findOne({ uuid, deleted: false, ...filter })
      .exec();

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
    await this.provinceModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }
}
