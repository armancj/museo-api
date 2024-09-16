import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AuthVerifyCodeDto {
  @IsNumber()
  @IsNotEmpty()
  code: number;

  @IsString()
  @IsEmail()
  email: string;
}
