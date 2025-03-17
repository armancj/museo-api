import { DescriptionInstrument } from './description-instrument.entity';

export class DescriptionInstruments {
  private constructor(public value: DescriptionInstrument[]) { }

  public static create(value: Partial<DescriptionInstrument>[]): DescriptionInstruments {
    if (!Array.isArray(value)) throw new TypeError('The description instruments is not an array');
    return new DescriptionInstruments(
      value.filter((data) => data).map((data) => DescriptionInstrument.create(data)),
    );
  }
}