import { PartialType } from '@nestjs/swagger';
import { CreateGenericClassificationDto } from './create-generic-classification.dto';

export class UpdateGenericClassificationDto extends PartialType(CreateGenericClassificationDto) {}