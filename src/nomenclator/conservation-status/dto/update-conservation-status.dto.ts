import { PartialType } from '@nestjs/swagger';
import { CreateConservationStatusDto } from './create-conservation-status.dto';

export class UpdateConservationStatusDto extends PartialType(CreateConservationStatusDto) {} 