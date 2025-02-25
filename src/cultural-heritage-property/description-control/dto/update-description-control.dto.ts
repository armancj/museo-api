import { PartialType } from '@nestjs/swagger';
import { CreateDescriptionControlDto } from './create-description-control.dto';

/**
 * Data Transfer Object for updating a Description Control.
 * This DTO allows partial updates by making all the fields from CreateDescriptionControlDto optional.
 */
export class UpdateDescriptionControlDto extends PartialType(
  CreateDescriptionControlDto,
) {}
