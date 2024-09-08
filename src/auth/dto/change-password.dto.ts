import { IsString, IsUUID, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsUUID()
  @MinLength(1)
  forgotUid: string;

  @IsString()
  @MinLength(1)
  password: string;
}
