import { PartialType } from '@nestjs/mapped-types';
import { CreateCommercialRegistrationDto } from './create-commercial-registration.dto';

export class UpdateCommercialRegistrationDto extends PartialType(CreateCommercialRegistrationDto) {}
