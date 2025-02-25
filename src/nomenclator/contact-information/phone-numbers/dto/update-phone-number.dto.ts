import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneNumberDto } from './create-phone-number.dto';

export class UpdatePhoneNumberDto extends PartialType(CreatePhoneNumberDto) {}
