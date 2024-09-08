type EitherValue<L, R> =
  | { kind: 'left'; leftValue: L }
  | { kind: 'right'; rightValue: R };

export class Either<L, R> {
  private constructor(private readonly value: EitherValue<L, R>) {}

  isLeft(): boolean {
    return this.value.kind === 'left';
  }

  isRight(): boolean {
    return this.value.kind === 'right';
  }

  fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
    return this.value.kind === 'left' ? leftFn(this.value.leftValue) : rightFn(this.value.rightValue);
  }

  map<T>(fn: (r: R) => T): Either<L, T> {
    return this.flatMap((r) => Either.right(fn(r)));
  }

  flatMap<T>(fn: (right: R) => Either<L, T>): Either<L, T> {
    return this.fold(
      (leftValue) => Either.left(leftValue),
      (rightValue) => fn(rightValue),
    );
  }

  getOrThrow(errorMessage?: string): R {
    let result: R;
    this.fold(
      () => { throw new Error(errorMessage || 'An error has occurred: ' + this.value); },
      (rightValue) => { result = rightValue; }
    );
    return result!;
  }


  getOrElse(defaultValue: R): R {
    return this.fold(
      () => defaultValue,
      (someValue) => someValue,
    );
  }

  static left<L, R>(value: L): Either<L, R> {
    return new Either<L, R>({ kind: 'left', leftValue: value });
  }

  static right<L, R>(value: R): Either<L, R> {
    return new Either<L, R>({ kind: 'right', rightValue: value });
  }
}
