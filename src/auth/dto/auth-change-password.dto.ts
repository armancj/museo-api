import { AuthVerifyCodeDto } from './auth-verify-code.dto';
import { IsString, MinLength } from 'class-validator';

export class AuthChangePasswordDto extends AuthVerifyCodeDto {
  @IsString()
  @MinLength(1)
  newPassword: string;
}
