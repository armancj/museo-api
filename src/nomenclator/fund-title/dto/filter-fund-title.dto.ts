import { IsEnum, IsOptional } from 'class-validator';
import { FundTitle } from '../enum/fund-title.enum';

export class FilterFundTitleDto {
  @IsOptional()
  @IsEnum(FundTitle)
  name?: FundTitle;
}