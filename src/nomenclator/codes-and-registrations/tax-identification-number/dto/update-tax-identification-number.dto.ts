import { PartialType } from '@nestjs/swagger';
import { CreateTaxIdentificationNumberDto } from './create-tax-identification-number.dto';

export class UpdateTaxIdentificationNumberDto extends PartialType(CreateTaxIdentificationNumberDto) {}
