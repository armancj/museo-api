import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxIdentificationNumberDto } from './create-tax-identification-number.dto';

export class UpdateTaxIdentificationNumberDto extends PartialType(CreateTaxIdentificationNumberDto) {}
