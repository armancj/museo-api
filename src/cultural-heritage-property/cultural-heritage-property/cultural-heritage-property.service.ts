import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertyModel,
} from './Schema/cultural-heritage-property';
import { CreateCulturalPropertyDto } from './dto/create-cultural-property.dto';
import { CulturalHeritageProperty } from './entity/cultural-heritage-property.entity';
import { CulturalHeritagePropertiesEntity } from './entity/cultural-heritage-properties.entity';
import { QueryBuilder } from '../../common/schema/TypedQueryBuilder';
import { applyTerritorialFilters } from '../../common/filters/apply-territorial.filter';
import { JwtPayload } from '../../auth/strategies/jwt.payload';

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

  async find(user?: JwtPayload) {
    const filter = applyTerritorialFilters(
      new QueryBuilder<CulturalHeritageProperty>(),
      user,
    ).build();

    const culturalProperties = await this.culturalHeritagePropertyModel
      .find(filter)
      .sort({ updatedAt: 'descending' })
      .exec();

    return CulturalHeritagePropertiesEntity.create([culturalProperties[1]]);
  }

  async findOne(uuid: string) {
    const culturalProperty = await this.culturalHeritagePropertyModel
      .findOne({ uuid, deleted: false })
      .exec();
    if (!culturalProperty) throw new NotFoundException('Cultural property heritage not found');
    return CulturalHeritageProperty.create(culturalProperty);
  }

  async remove(uuid: string) {
    await this.findOne(uuid);
    await this.culturalHeritagePropertyModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }

  async removePermanent(uuid: string) {
    await this.culturalHeritagePropertyModel.deleteOne({ uuid }).exec();
  }
}
