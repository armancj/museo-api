import { PickType } from '@nestjs/swagger';
import { UpdateHeritageTypeDto } from './update-heritage-type.dto';

export class FilterHeritageTypeDto extends PickType(UpdateHeritageTypeDto, [
  'name',
] as const) {}
