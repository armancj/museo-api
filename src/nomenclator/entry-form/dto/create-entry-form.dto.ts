import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EntryForm } from '../enum/entry-form.enum';

export class CreateEntryFormDto {
  @IsNotEmpty()
  @IsEnum(EntryForm)
  name: EntryForm;

  @IsNotEmpty()
  @IsString()
  description: string;
}