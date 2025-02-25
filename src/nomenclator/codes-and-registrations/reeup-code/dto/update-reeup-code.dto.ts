import { PartialType } from '@nestjs/swagger';
import { CreateReeupCodeDto } from './create-reeup-code.dto';

export class UpdateReeupCodeDto extends PartialType(CreateReeupCodeDto) {}
