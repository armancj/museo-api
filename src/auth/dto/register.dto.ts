import { CreateUserDto } from '../../users/dto/create-user.dto';
import { OmitType } from '@nestjs/swagger';

export class RegisterDto extends OmitType(CreateUserDto, [
] as const) {}
