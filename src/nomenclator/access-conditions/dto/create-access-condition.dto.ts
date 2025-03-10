import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AccessCondition } from '../../common/enums/access-condition.enum';

export class CreateAccessConditionDto {

  @ApiProperty({ enum: AccessCondition })
  @IsNotEmpty()
  @IsEnum(AccessCondition)
  type: AccessCondition;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
