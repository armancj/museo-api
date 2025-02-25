import { PartialType } from '@nestjs/swagger';
import { CreateDescriptionUnitDto } from './create-description-unit.dto';

export class UpdateDescriptionUnitDto extends PartialType(CreateDescriptionUnitDto) {}
