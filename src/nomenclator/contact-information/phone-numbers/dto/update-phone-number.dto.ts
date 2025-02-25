import { PartialType } from '@nestjs/swagger';
import { CreatePhoneNumberDto } from './create-phone-number.dto';

export class UpdatePhoneNumberDto extends PartialType(CreatePhoneNumberDto) {}
