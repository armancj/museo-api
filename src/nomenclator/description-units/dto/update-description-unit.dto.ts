import { PartialType } from '@nestjs/mapped-types';
import { CreateDescriptionUnitDto } from './create-description-unit.dto';

export class UpdateDescriptionUnitDto extends PartialType(CreateDescriptionUnitDto) {}
