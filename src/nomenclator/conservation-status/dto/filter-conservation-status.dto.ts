import { IsEnum, IsOptional } from 'class-validator';
import { ConservationStatus } from '../enum/conservation-status.enum';

export class FilterConservationStatusDto {
  @IsOptional()
  @IsEnum(ConservationStatus)
  name?: ConservationStatus;
}
