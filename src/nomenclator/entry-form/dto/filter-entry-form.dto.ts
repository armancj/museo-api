import { IsEnum, IsOptional } from 'class-validator';
import { EntryForm } from '../enum/entry-form.enum';

export class FilterEntryFormDto {
  @IsOptional()
  @IsEnum(EntryForm)
  name?: EntryForm;
}