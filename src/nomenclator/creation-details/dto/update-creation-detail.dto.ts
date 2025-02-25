import { PartialType } from '@nestjs/swagger';
import { CreateCreationDetailDto } from './create-creation-detail.dto';

export class UpdateCreationDetailDto extends PartialType(CreateCreationDetailDto) {}
