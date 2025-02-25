import { PartialType } from '@nestjs/swagger';
import { CreateCommercialRegistrationDto } from './create-commercial-registration.dto';

export class UpdateCommercialRegistrationDto extends PartialType(CreateCommercialRegistrationDto) {}
