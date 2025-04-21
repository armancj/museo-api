import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { FundTitle } from '../enum/fund-title.enum';

export class CreateFundTitleDto {
  @IsNotEmpty()
  @IsEnum(FundTitle)
  name: FundTitle;

  @IsNotEmpty()
  @IsString()
  description: string;
}