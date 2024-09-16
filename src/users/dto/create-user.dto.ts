import {
  IsEmail,
  IsString,
  IsOptional,
  IsMobilePhone,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserPropertiesModel } from '../models/user.model';
import { UserRoles } from '../enum/user-roles.enum';

export class CreateUserDto
  implements Omit<UserPropertiesModel, 'passwordHashed' | 'uuid'>
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

  @IsString()
  @IsOptional()
  @IsEnum(UserRoles)
  roles?: UserRoles;
}
