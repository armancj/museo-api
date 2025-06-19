import {
  Classification,
  InstitutionType,
} from '../../../address/institutions/enum/institutions.enum';
import { CreateInstitutionDto } from '../../../address/institutions/dto/create-institution.dto';
import { UserRoles } from '../../../users/enum/user-roles.enum';
import { CreateUserDto } from '../../../users/dto/create-user.dto';

export class TestDataFactory {
  private static phoneCounter = 50000000;
  private static instCounter = 1;

  static phone = () =>
    `(+53) ${Math.floor(TestDataFactory.phoneCounter++ / 10000)}-${Math.floor((TestDataFactory.phoneCounter % 10000) / 100)}-${TestDataFactory.phoneCounter % 100}`;

  static institution = (
    name: string,
    email: string,
    province: string,
    municipality: string,
    classification: Classification,
  ): CreateInstitutionDto => ({
    name: `${name} ${TestDataFactory.instCounter++}`,
    street: 'Calle',
    number: '1',
    referenceCode: `REF-${TestDataFactory.instCounter}`,
    betweenStreet1: 'A',
    betweenStreet2: 'B',
    district: 'Distrito',
    locality: 'Centro',
    province,
    municipality,
    country: 'Cuba',
    phone1: TestDataFactory.phone(),
    email,
    institutionType: InstitutionType.MUSEUM,
    classification,
  });

  static user = (
    name: string,
    email: string,
    province: string,
    municipality: string,
    role: UserRoles,
    institutionId?: string,
  ): CreateUserDto => ({
    email,
    mobile: TestDataFactory.phone(),
    password: '123',
    address: `Dir ${name}`,
    lastName: name.split('-')[1] || name,
    name: name.split('-')[0],
    nationality: 'Cuba',
    province,
    municipal: municipality,
    roles: role,
    institutionId,
  });
}
