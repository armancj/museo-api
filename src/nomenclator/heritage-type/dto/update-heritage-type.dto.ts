import { PartialType } from '@nestjs/swagger';
import { CreateHeritageTypeDto } from './create-heritage-type.dto';

export class UpdateHeritageTypeDto extends PartialType(CreateHeritageTypeDto) {}
