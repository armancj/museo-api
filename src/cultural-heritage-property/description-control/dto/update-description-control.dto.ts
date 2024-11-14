import { PartialType } from '@nestjs/swagger';
import { CreateDescriptionControlDto } from './create-description-control.dto';

export class UpdateDescriptionControlDto extends PartialType(
  CreateDescriptionControlDto,
) {}
