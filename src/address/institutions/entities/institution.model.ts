import { BaseModel } from '../../../common/interfaces/base.model';
import { NonFunctionProperties } from '../../../common/interfaces/manipulate-properties';
import { Classification, InstitutionType } from '../enum/institutions.enum';

export interface InstitutionModel extends BaseModel {
  name: string;
  street: string;
  number: string;
  referenceCode: string;
  betweenStreet1: string;
  betweenStreet2: string;
  district: string;
  locality: string;
  province: string;
  municipality: string;
  country: string;
  phone1: string;
  phone2?: string;
  email: string;
  website?: string;
  institutionType: InstitutionType;
  classification?: Classification;
  typology?: string;
  category?: string;
}

export type InstitutionPropertiesModel =
  NonFunctionProperties<InstitutionModel>;

export type InstitutionDtoPropertiesModel = Omit<
  InstitutionPropertiesModel,
  'uuid' | 'updatedAt' | 'createdAt' | 'deleted'
>;
