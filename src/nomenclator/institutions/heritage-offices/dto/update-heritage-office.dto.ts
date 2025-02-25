import { PartialType } from '@nestjs/swagger';
import { CreateHeritageOfficeDto } from './create-heritage-office.dto';

export class UpdateHeritageOfficeDto extends PartialType(CreateHeritageOfficeDto) {}
