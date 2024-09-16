import { IsBoolean } from 'class-validator';

export class ActivatedUserDto {
  @IsBoolean()
  active: boolean;
}
