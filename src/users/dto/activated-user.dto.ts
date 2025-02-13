import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ActivatedUserDto {
  @IsBoolean()
  @ApiProperty({
    description: 'Estado de activación del usuario',
    example: true,
  })
  active: boolean;
}