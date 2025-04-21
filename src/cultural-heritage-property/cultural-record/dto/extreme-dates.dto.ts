import {IsDate, IsNotEmpty} from 'class-validator';
import { Type } from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

/**
 * Data Transfer Object for Extreme Dates.
 * This DTO represents the start and end dates associated with a cultural record.
 */
export class ExtremeDatesDto {
  /**
   * Start date of the cultural record.
   */
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  start: Date;

  /**
   * End date of the cultural record.
   */
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  end: Date;
}
