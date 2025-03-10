import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDescriptionInstrumentDto {
  @ApiProperty({ example: 'Guitar', description: 'The name of the description instrument' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'A string instrument', description: 'The description of the instrument', required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ example: true, description: 'The active status of the description instrument', required: false })
  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}