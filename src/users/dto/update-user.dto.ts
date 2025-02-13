import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Nuevo correo electrónico del usuario',
    example: 'nuevo@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'Nuevo número de teléfono móvil del usuario',
    example: '+34612345678',
    required: false,
  })
  mobile?: string;

  @ApiProperty({
    description: 'Nueva contraseña del usuario',
    example: 'nuevacontraseña',
    required: false,
  })
  password?: string;
}