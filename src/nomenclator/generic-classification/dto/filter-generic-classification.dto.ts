import { IsEnum, IsOptional } from 'class-validator';
import { GenericClassification } from '../enum/generic-classification.enum';

export class FilterGenericClassificationDto {
  @IsOptional()
  @IsEnum(GenericClassification)
  name?: GenericClassification;
}
