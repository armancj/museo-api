import { PartialType } from '@nestjs/swagger';
import { CreateTypologyDto } from './create-typology.dto';

export class UpdateTypologyDto extends PartialType(CreateTypologyDto) {}
