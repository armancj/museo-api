import { PartialType } from '@nestjs/swagger';
import { CreateInstitutionTypeDto } from './create-institution-type.dto';

export class UpdateInstitutionTypeDto extends PartialType(CreateInstitutionTypeDto) {}
