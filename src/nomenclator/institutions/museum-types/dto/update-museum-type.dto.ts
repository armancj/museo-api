import { PartialType } from '@nestjs/swagger';
import { CreateMuseumTypeDto } from './create-museum-type.dto';

export class UpdateMuseumTypeDto extends PartialType(CreateMuseumTypeDto) {}
