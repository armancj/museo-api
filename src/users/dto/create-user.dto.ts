import {
  IsEmail,
  IsString,
  IsOptional,
  IsMobilePhone,
  IsNotEmpty,
  IsEnum,
  ValidateIf, IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserPropertiesModel } from '../models/user.model';
import { UserRoles } from '../enum/user-roles.enum';
import {ApplyTransform} from "../../common/decorator/apply-transform.decorator";
import {toLowerCase} from "../../common/utils/to-lower-case";
import {IsForbiddenForRoles} from "../../auth/decorator/is-forbidden-for-roles-constraint.decorator";

export class CreateUserDto
  implements Omit<UserPropertiesModel, 'passwordHashed' | 'uuid'>
{
  @IsString()
  @ApplyTransform(toLowerCase)
  @IsEmail()
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

  @ValidateIf((dto) => dto?.roles !== UserRoles.superAdmin)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Cuba',
  })
  nationality: string;

  @ValidateIf((dto) => dto?.roles !== UserRoles.superAdmin)
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Las Tunas',
  })
  province: string;

  @ValidateIf(
    (dto) =>
        dto?.roles === UserRoles.employee ||
        dto?.roles === UserRoles.manager,
  )
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Jobabo',
  })
  municipal: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEnum(UserRoles)
  roles?: UserRoles;

  @IsString()
  @IsUUID()
  @IsForbiddenForRoles( [UserRoles.superAdmin, UserRoles.administrator], [UserRoles.employee, UserRoles.manager] )
  @IsNotEmpty()
  institutionId?: string;
}
