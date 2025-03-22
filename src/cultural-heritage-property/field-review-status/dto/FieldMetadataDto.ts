import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO para representar metadatos de campos revisables.
 * @template T - Tipo de valor del campo.
 */
export class FieldMetadataDto<T> {
  @IsNotEmpty()
  value: T;

  @IsString()
  @IsNotEmpty()
  status: 'To Review' | 'Reviewed' | 'Has Issue';

  @IsString()
  comments?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChangeHistoryDto)
  history: Array<ChangeHistoryDto<T>>;
}

/**
 * DTO para representar la entrada del historial de cambios en los metadatos.
 */
export class ChangeHistoryDto<T> {
  @IsString()
  @IsNotEmpty()
  modifiedBy: string;

  @IsNotEmpty()
  previousValue: T;

  @IsNotEmpty()
  modifiedAt: Date;

  @IsString()
  comment?: string;
}
