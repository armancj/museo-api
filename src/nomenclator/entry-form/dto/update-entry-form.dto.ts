import { PartialType } from '@nestjs/swagger';
import { CreateEntryFormDto } from './create-entry-form.dto';

export class UpdateEntryFormDto extends PartialType(CreateEntryFormDto) {}
