import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  InstitutionNameEntity,
  InstitutionMongoModel,
  InstitutionDocument,
} from './schema/institution.schema';
import { Institution } from './entities/institution.entity';
import { Institutions } from './entities/institutions.entity';
import { RootFilterQuery } from 'mongoose';

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectModel(InstitutionNameEntity)
    private institutionDocumentModel: InstitutionMongoModel,
  ) {}
  async create(createInstitutionDto: CreateInstitutionDto) {
    const institution =
      await this.institutionDocumentModel.create(createInstitutionDto);
    return Institution.create(institution);
  }

  async findAll() {
    const institutions = await this.institutionDocumentModel
      .find({ deleted: false })
      .exec();
    return Institutions.create(institutions).value;
  }

  async findOne(uuid: string) {
    const institution = await this.getInstitution({ uuid, deleted: false });
    if (!institution) throw new NotFoundException('Institution not found');
    return Institution.create(institution);
  }

  async update(uuid: string, updateInstitutionDto: UpdateInstitutionDto) {
    await this.findOne(uuid);
    await this.institutionDocumentModel
      .updateOne(
        { uuid },
        { ...updateInstitutionDto, updatedAt: new Date(Date.now()) },
      )
      .exec();
  }

  async remove(uuid: string) {
    await this.findOne(uuid);
    await this.institutionDocumentModel
      .updateOne({ uuid, deleted: false }, { deleted: true })
      .exec();
  }

  private async getInstitution(filter?: RootFilterQuery<InstitutionDocument>) {
    const institution = await this.institutionDocumentModel
      .findOne(filter)
      .exec();
    if (!institution) return null;
    return institution;
  }
}
