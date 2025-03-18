import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypologyModel } from '../model/typology.model';

export class CreateTypologyDto
  implements
    Omit<TypologyModel, 'createdAt' | 'updatedAt' | 'deleted' | 'uuid'>
{
  @ApiProperty({ example: 'Wind', description: 'The name of the typology' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'Wind instruments classification',
    description: 'The description of the typology',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    example: true,
    description: 'The active status of the typology',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}
