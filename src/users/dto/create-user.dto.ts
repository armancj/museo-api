import {
  IsEmail,
  IsString,
  IsDate,
  IsOptional,
  IsMobilePhone,
  IsBoolean,
  IsNotEmpty,

} from 'class-validator';

import { Type } from 'class-transformer';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { UploadedFile, UserPropertiesModel } from "../models/user.model";
import { UserRoles } from "../enum/user-roles.enum";


export class CreateUserDto
  implements
    UserPropertiesModel
{
  approvalStatus: string;
  avatar: UploadedFile;
  deleted: boolean;
  forgotUid: string;
  isEmailValid: boolean;
  passwordHashed: string;
  uuid: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: '12345678z',
  })
  socialSecurity: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: '57655929N',
  })
  dni: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'example@example.com',
  })
  email: string;

  @IsMobilePhone('es-ES')
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: '+34612345678',
  })
  mobile: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: '43434',
  })
  zipCode: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'ES76207700240031025758',
  })
  accountNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'secretpassword1',
  })
  password: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'YourAddressHere',
  })
  address: string;


  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: '1990-01-01',
  })
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'YourLastName',
  })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'YourName',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'YourNationality',
  })
  nationality: string;

  @IsString()
  @IsOptional()
  observations?: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Melilla',
  })
  province: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'YourReferralSource',
  })
  referralSource?: string;

  @ApiProperty({ type: 'string', enum: ['true', 'false'], required: false })
  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsString()
  @IsOptional()
  roles?: UserRoles;
}


