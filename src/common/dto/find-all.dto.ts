import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class FindAllDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ type: 'number', default: 1 })
  page?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ type: 'number', default: 10 })
  perPage?: number;
}
