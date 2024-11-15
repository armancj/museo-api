import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for Extreme Dates.
 * This DTO represents the start and end dates associated with a cultural record.
 */
export class ExtremeDatesDto {
  /**
   * Start date of the cultural record.
   */
  @IsDate()
  @Type(() => Date)
  start: Date;

  /**
   * End date of the cultural record.
   */
  @IsDate()
  @Type(() => Date)
  end: Date;
}
