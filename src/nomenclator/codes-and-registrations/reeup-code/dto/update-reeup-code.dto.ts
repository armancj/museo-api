import { PartialType } from '@nestjs/mapped-types';
import { CreateReeupCodeDto } from './create-reeup-code.dto';

export class UpdateReeupCodeDto extends PartialType(CreateReeupCodeDto) {}
