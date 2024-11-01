import {
  InstitutionModel,
  InstitutionPropertiesModel,
} from './institution.model';
import { Classification, InstitutionType } from '../enum/institutions.enum';
import { Expose, plainToClass } from 'class-transformer';

export class Institution implements InstitutionModel {
  @Expose()
  betweenStreet1: string;

  @Expose()
  betweenStreet2: string;

  @Expose()
  category: string;

  @Expose()
  classification: Classification;

  @Expose()
  country: string;

  @Expose()
  createdAt: Date;

  @Expose()
  deleted: boolean;

  @Expose()
  district: string;

  @Expose()
  email: string;

  @Expose()
  institutionType: InstitutionType;

  @Expose()
  locality: string;

  @Expose()
  municipality: string;

  @Expose()
  name: string;

  @Expose()
  number: string;

  @Expose()
  phone1: string;

  @Expose()
  phone2: string;

  @Expose()
  province: string;

  @Expose()
  referenceCode: string;

  @Expose()
  street: string;

  @Expose()
  typology: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  website: string;

  constructor(options: InstitutionPropertiesModel) {
    Object.assign(this as InstitutionModel, options);
  }

  static create(options: InstitutionPropertiesModel): Institution {
    return plainToClass(Institution, options, {
      excludeExtraneousValues: true,
    });
  }
}
