import { CreateUserDto } from '../../users/dto/create-user.dto';
import { PickType } from '@nestjs/swagger';

export class LoginDto extends PickType(CreateUserDto, [
  'password',
  'email',
] as const) {}
