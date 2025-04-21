import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { FilterSectionDto } from './dto/filter-section.dto';
import { SectionEntity } from './entities/section.entity';
import { SectionDocument, SectionMongoModel } from './schema/section.schema';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(SectionEntity.name)
    private readonly sectionRepository: SectionMongoModel,
  ) {}

  async create(createSectionDto: CreateSectionDto) {
    const createdSection = await this.sectionRepository.create(
      createSectionDto,
    );
    const entity = SectionEntity.create(createdSection);
    
    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description
    };
  }

  async findAll(filter?: FilterSectionDto) {
    const query: RootFilterQuery<SectionDocument> = { deleted: false };

    if (filter?.name) {
      query.name = filter.name;
    }

    const sections = await this.sectionRepository
      .find(query)
      .exec();

    return sections.map(section => SectionEntity.create(section));
  }

  async findOne(uuid: string) {
    const section = await this.getSection({
      uuid,
      deleted: false,
    });
    return SectionEntity.create(section);
  }

  private async getSection(filter: Partial<SectionEntity>) {
    const section = await this.sectionRepository
      .findOne(filter)
      .exec();
    if (!section) {
      throw new NotFoundException('Section not found');
    }
    return section;
  }

  async update(uuid: string, updateSectionDto: UpdateSectionDto) {
    await this.findOne(uuid);
    await this.sectionRepository
      .updateOne({ uuid }, updateSectionDto)
      .exec();
  }

  async remove(uuid: string) {
    const section = await this.findOne(uuid);
    const name = `${section.name}-${section.uuid}`;
    await this.sectionRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}