/**
 * Entity class representing extreme dates.
 *
 * This class encapsulates a time range with a start and an end date, providing
 * methods to instantiate and manage these dates effectively.
 */
export class ExtremeDatesEntity {
  /** The start date of the period */
  start: Date;

  /** The end date of the period */
  end: Date;

  /**
   * Constructs an `ExtremeDatesEntity` instance with provided start and end dates.
   *
   * @param option - Object containing start and end dates.
   */
  constructor(option: { start: Date; end: Date }) {
    this.start = new Date(option.start);
    this.end = new Date(option.end);
  }

  /**
   * Factory method to create a new `ExtremeDatesEntity` instance.
   *
   * @param option - Object containing start and end dates.
   * @returns A new instance of `ExtremeDatesEntity`.
   */
  static create(option: { start: Date; end: Date }): ExtremeDatesEntity {
    return new ExtremeDatesEntity(option);
  }
}
