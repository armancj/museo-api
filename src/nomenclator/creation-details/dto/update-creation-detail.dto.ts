import { PartialType } from '@nestjs/mapped-types';
import { CreateCreationDetailDto } from './create-creation-detail.dto';

export class UpdateCreationDetailDto extends PartialType(CreateCreationDetailDto) {}
