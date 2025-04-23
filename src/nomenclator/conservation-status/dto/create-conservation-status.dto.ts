import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ConservationStatus } from '../enum/conservation-status.enum';

export class CreateConservationStatusDto {
  @IsNotEmpty()
  @IsEnum(ConservationStatus)
  name: ConservationStatus;

  @IsNotEmpty()
  @IsString()
  description: string;
}
