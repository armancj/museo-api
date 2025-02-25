import { PartialType } from '@nestjs/mapped-types';
import { CreateMuseumTypeDto } from './create-museum-type.dto';

export class UpdateMuseumTypeDto extends PartialType(CreateMuseumTypeDto) {}
