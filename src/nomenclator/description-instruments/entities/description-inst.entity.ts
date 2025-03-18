import { DescriptionInstrumentEntity } from './description-instrument.entity';

export class DescriptionInstruments {
  private constructor(public value: DescriptionInstrumentEntity[]) {}

  public static create(
    value: Partial<DescriptionInstrumentEntity>[],
  ): DescriptionInstruments {
    if (!Array.isArray(value))
      throw new TypeError('The description instruments is not an array');
    return new DescriptionInstruments(
      value
        .filter((data) => data)
        .map((data) => DescriptionInstrumentEntity.create(data)),
    );
  }
}
