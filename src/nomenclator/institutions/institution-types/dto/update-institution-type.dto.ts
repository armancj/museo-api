import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionTypeDto } from './create-institution-type.dto';

export class UpdateInstitutionTypeDto extends PartialType(CreateInstitutionTypeDto) {}
