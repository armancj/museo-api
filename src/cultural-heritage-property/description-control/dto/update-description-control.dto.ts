import { PartialType } from '@nestjs/mapped-types';
import { CreateDescriptionControlDto } from './create-description-control.dto';

export class UpdateDescriptionControlDto extends PartialType(CreateDescriptionControlDto) {}
