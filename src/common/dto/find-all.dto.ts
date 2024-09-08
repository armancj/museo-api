import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class FindAllDto {
  @IsNumberString()
  @IsOptional()
  @ApiProperty({ type: 'string', default: '1' })
  page?: string;

  @IsNumberString()
  @IsOptional()
  @ApiProperty({ type: 'string', default: '10' })
  perPage?: string;
}
