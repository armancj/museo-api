import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ChangeHistoryDto } from './change-history.dto';

/**
 * DTO para representar metadatos de campos revisables.
 * @template T - Tipo de valor del campo.
 */
export class FieldMetadataDto<T> {
  @ApiProperty({})
  @IsNotEmpty()
  value: T;

  @ApiProperty({ enum: ['To Review', 'Reviewed', 'Has Issue'] })
  @IsString()
  @IsNotEmpty()
  status: 'To Review' | 'Reviewed' | 'Has Issue';

  @ApiProperty()
  @IsString()
  comments?: string;

  @ApiProperty({
    type: () => [ChangeHistoryDto],
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChangeHistoryDto)
  history: Array<ChangeHistoryDto>;
}
