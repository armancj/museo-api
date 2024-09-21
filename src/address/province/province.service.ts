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
import { ProvinceModel } from './entities/province.model';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../../shared/event-emitter/event-emitter.const';
import { EventEmitter2Adapter } from '../../shared/event-emitter/event-emitter.adapter';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectModel(ProvinceNameEntity) private provinceModel: ProvinceMongoModel,
    private readonly eventEmitter: EventEmitter2Adapter,
  ) {}

  async create(createProvinceDto: CreateProvinceDto): Promise<Province> {
    await this.eventEmitter.checkCountryExists(createProvinceDto.country);
    const createdProvince = await this.provinceModel.create(createProvinceDto);
    return Province.create(createdProvince);
  }

  async findAll(filter: UpdateProvinceDto): Promise<Province[]> {
    const provinces = await this.provinceModel
      .find({ ...filter, deleted: false })
      .exec();
    return Provinces.create(provinces).value;
  }

  async findOne(uuid: string, filter?: UpdateProvinceDto): Promise<Province> {
    const province = await this.getOneProvince({
      uuid,
      deleted: false,
      ...(filter as ProvinceModel),
    });

    return Province.create(province);
  }

  @OnEvent(EventEmitter.provinceFound)
  private async getOneProvince(params: Partial<ProvinceModel>) {
    const province = await this.provinceModel.findOne(params).exec();

    if (!province) throw new NotFoundException('Not found Province');
    return province;
  }

  async update(
    uuid: string,
    updateProvinceDto: UpdateProvinceDto,
  ): Promise<void> {
    await this.findOne(uuid);

    if (updateProvinceDto?.country)
      await this.eventEmitter.checkCountryExists(updateProvinceDto.country);

    await this.provinceModel.updateOne({ uuid }, updateProvinceDto).exec();
  }

  async remove(uuid: string): Promise<void> {
    await this.findOne(uuid);
    await this.provinceModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }
}
