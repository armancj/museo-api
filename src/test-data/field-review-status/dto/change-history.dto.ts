import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO para representar la entrada del historial de cambios en los metadatos.
 */
export class ChangeHistoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  modifiedBy: string;

  @ApiProperty({})
  @IsNotEmpty()
  previousValue: any;

  @ApiProperty()
  @IsNotEmpty()
  modifiedAt: Date;

  @ApiProperty({ required: false })
  @IsString()
  comment?: string;
}
