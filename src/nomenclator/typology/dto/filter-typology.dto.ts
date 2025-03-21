import { PickType } from '@nestjs/swagger';
import { UpdateTypologyDto } from './update-typology.dto';

export class FilterTypologyDto extends PickType(UpdateTypologyDto, [
  'active',
]) {}
