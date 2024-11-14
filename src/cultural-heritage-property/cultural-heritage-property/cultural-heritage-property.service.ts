import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertyModel,
} from './Schema/cultural-heritage-property';
import { CreateCulturalPropertyDto } from './dto/create-cultural-property.dto';
import { CulturalHeritageProperty } from './entity/cultural-heritage-property.entity';
import { CulturalHeritagePropertiesEntity } from './entity/cultural-heritage-properties.entity';

@Injectable()
export class CulturalHeritagePropertyService {
  constructor(
    @InjectModel(CulturalHeritagePropertyEntity)
    private readonly culturalHeritagePropertyModel: CulturalHeritagePropertyModel,
  ) {}

  async created(createCulturalPropertyDto: CreateCulturalPropertyDto) {
    const culturalProperty = await this.culturalHeritagePropertyModel.create({
      ...createCulturalPropertyDto,
    });
    return CulturalHeritageProperty.create(culturalProperty);
  }

  async find() {
    const culturalProperties = await this.culturalHeritagePropertyModel
      .find({ deleted: false })
      .exec();

    return CulturalHeritagePropertiesEntity.create(culturalProperties);
  }

  async findOne(uuid: string) {
    const culturalProperty = await this.culturalHeritagePropertyModel
      .findOne({ uuid, deleted: false })
      .exec();
    if (!culturalProperty)
      throw new NotFoundException('Cultural property heritage not found');
    return CulturalHeritageProperty.create(culturalProperty);
  }

  async remove(uuid: string) {
    await this.findOne(uuid);
    await this.culturalHeritagePropertyModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }
}
