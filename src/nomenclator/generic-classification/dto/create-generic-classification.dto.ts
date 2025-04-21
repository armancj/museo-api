import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { GenericClassification } from '../enum/generic-classification.enum';

export class CreateGenericClassificationDto {
  @IsNotEmpty()
  @IsEnum(GenericClassification)
  name: GenericClassification;

  @IsNotEmpty()
  @IsString()
  description: string;
}