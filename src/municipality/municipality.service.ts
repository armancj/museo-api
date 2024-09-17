import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  MunicipalitiesMongoModel,
  MunicipalitiesNameEntity,
} from './schema/municipalities.schema';
import { Municipality } from './entities/municipality.entity';
import { Municipalities } from './entities/municipalities.entity';
import { Province } from '../province/entities/province.entity';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectModel(MunicipalitiesNameEntity)
    private readonly municipalitiesMongoModel: MunicipalitiesMongoModel,
  ) {}

  async create(createMunicipalityDto: CreateMunicipalityDto) {
    const createMunicipality = await this.municipalitiesMongoModel.create(
      createMunicipalityDto,
    );
    return Municipality.create(createMunicipality);
  }

  async findAll() {
    const municipalities = await this.municipalitiesMongoModel
      .find({ deleted: false })
      .exec();
    return Municipalities.create(municipalities).value;
  }

  async findOne(uuid: string) {
    const municipality = await this.municipalitiesMongoModel
      .findOne({ uuid, deleted: false })
      .exec();

    if (!municipality) throw new NotFoundException('Not found municipality');

    return Municipality.create(municipality);
  }

  async update(
    uuid: string,
    updateMunicipalityDto: UpdateMunicipalityDto,
  ): Promise<void> {
    await this.findOne(uuid);
    await this.municipalitiesMongoModel
      .updateOne({ uuid }, updateMunicipalityDto)
      .exec();
  }

  async remove(uuid: string): Promise<void> {
    await this.findOne(uuid);
    await this.municipalitiesMongoModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }
}
