type None = { kind: 'none' };
type Some<Data> = { kind: 'some'; someValue: Data };

type MaybeValue<Data> = None | Some<Data>;

export class Maybe<Data> {
  private constructor(private readonly value: MaybeValue<Data>) {}

  isDefined(): boolean {
    return this.value.kind === 'some';
  }

  isEmpty(): boolean {
    return this.value.kind === 'none';
  }

  fold<T>(noneFn: () => T, someFn: (someValue: Data) => T): T {
    return this.value.kind === 'none' ? noneFn() : someFn(this.value.someValue);
  }

  get(): Data {
    return this.getOrThrow();
  }

  getOrElse(defaultValue: Data): Data {
    return this.fold(
      () => defaultValue,
      (someValue) => someValue,
    );
  }

  flatMap<T>(f: (wrapped: Data) => Maybe<T>): Maybe<T> {
    return this.fold(
      () => Maybe.none(),
      (someValue) => f(someValue),
    );
  }

  map<T>(f: (wrapped: Data) => T): Maybe<T> {
    return this.flatMap((data) => Maybe.fromValue(f(data)));
  }

  getOrThrow(errorMessage?: string | Error): Data {
    if (this.isEmpty()) {
      if (typeof errorMessage === 'string') {
        throw new Error(errorMessage || 'Value is empty');
      }
      throw errorMessage;
    }
    return (this.value as Some<Data>).someValue;
  }

  static some<Data>(value: Data): Maybe<Data> {
    if (value === undefined || value === null) {
      throw new Error('Provided value must not be empty');
    }
    return new Maybe({ kind: 'some', someValue: value });
  }

  static none<Data>(): Maybe<Data> {
    return new Maybe({ kind: 'none' });
  }

  static fromValue<Data>(value: Data | undefined | null): Maybe<Data> {
    return value === undefined || value === null
      ? Maybe.none()
      : Maybe.some(value);
  }
}
