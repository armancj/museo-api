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
import { ApiProperty } from '@nestjs/swagger';
import {  UserPropertiesModel } from "../models/user.model";
import { UserRoles } from "../enum/user-roles.enum";


export class CreateUserDto
  implements
    Omit<UserPropertiesModel, 'passwordHashed' | '_id'>
{
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'example@example.com',
  })
  email: string;

  @IsMobilePhone()
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
    example: 'Cuba',
  })
  nationality: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Las Tunas',
  })
  province: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Jobabo',
  })
  municipal: string;

  @ApiProperty({ type: 'string', enum: ['true', 'false'], required: false })
  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsString()
  @IsOptional()
  roles?: UserRoles;
}


