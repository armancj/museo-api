import { PartialType } from '@nestjs/mapped-types';
import { CreateHeritageOfficeDto } from './create-heritage-office.dto';

export class UpdateHeritageOfficeDto extends PartialType(CreateHeritageOfficeDto) {}
