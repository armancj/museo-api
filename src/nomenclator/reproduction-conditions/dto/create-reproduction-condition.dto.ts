import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ReproductionCondition } from '../../common/enums/reproduction-condition.enum';

export class CreateReproductionConditionDto {
  @ApiProperty({ enum: ReproductionCondition })
  @IsNotEmpty()
  @IsEnum(ReproductionCondition)
  type: ReproductionCondition;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
