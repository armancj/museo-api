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
import { InstitutionModel } from './entities/institution.model';
import { EventEmitter2Adapter } from '../../shared/event-emitter/event-emitter.adapter';
import {getFieldOfInstitutionData, getFieldOfUserData} from "../../common/utils/get-field-of-user-data";
import {User} from "../../users/entities/user.entity";

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectModel(InstitutionNameEntity)
    private institutionDocumentModel: InstitutionMongoModel,
    private readonly eventEmitter: EventEmitter2Adapter,
  ) {}
  async create(createInstitutionDto: CreateInstitutionDto, user: User) {
    getFieldOfInstitutionData(user, createInstitutionDto);
    await this.validationData(createInstitutionDto);
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
    await this.validationData(updateInstitutionDto);
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

  private async validationData(institutionDto: Partial<InstitutionModel>) {
    const validationPromises = [];

    if (institutionDto.country) {
      validationPromises.push(
        this.eventEmitter.checkCountryExists(institutionDto.country),
      );
    }
    if (institutionDto.province) {
      validationPromises.push(
        this.eventEmitter.checkProvinceExists(institutionDto.province),
      );
    }
    if (institutionDto.municipality) {
      validationPromises.push(
        this.eventEmitter.checkMunicipalityExists(institutionDto.municipality),
      );
    }

    await Promise.all(validationPromises);
  }
}
