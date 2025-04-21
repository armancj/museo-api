import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateValueGradeDto } from './dto/create-value-grade.dto';
import { UpdateValueGradeDto } from './dto/update-value-grade.dto';
import { FilterValueGradeDto } from './dto/filter-value-grade.dto';
import { ValueGradeEntity } from './entities/value-grade.entity';
import { ValueGradeDocument, ValueGradeMongoModel } from './schema/value-grade.schema';

@Injectable()
export class ValueGradeService {
  constructor(
    @InjectModel(ValueGradeEntity.name)
    private readonly valueGradeRepository: ValueGradeMongoModel,
  ) {}

  async create(createValueGradeDto: CreateValueGradeDto) {
    const createdValueGrade = await this.valueGradeRepository.create(
      createValueGradeDto,
    );
    const entity = ValueGradeEntity.create(createdValueGrade);
    
    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description
    };
  }

  async findAll(filter?: FilterValueGradeDto) {
    const query: RootFilterQuery<ValueGradeDocument> = { deleted: false };

    if (filter?.name) {
      query.name = filter.name;
    }

    const valueGrades = await this.valueGradeRepository
      .find(query)
      .exec();

    return valueGrades.map(valueGrade => ValueGradeEntity.create(valueGrade));
  }

  async findOne(uuid: string) {
    const valueGrade = await this.getValueGrade({
      uuid,
      deleted: false,
    });
    return ValueGradeEntity.create(valueGrade);
  }

  private async getValueGrade(filter: Partial<ValueGradeEntity>) {
    const valueGrade = await this.valueGradeRepository
      .findOne(filter)
      .exec();
    if (!valueGrade) {
      throw new NotFoundException('Value grade not found');
    }
    return valueGrade;
  }

  async update(uuid: string, updateValueGradeDto: UpdateValueGradeDto) {
    await this.findOne(uuid);
    await this.valueGradeRepository
      .updateOne({ uuid }, updateValueGradeDto)
      .exec();
  }

  async remove(uuid: string) {
    const valueGrade = await this.findOne(uuid);
    const name = `${valueGrade.name}-${valueGrade.uuid}`;
    await this.valueGradeRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}