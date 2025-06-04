/*
 * TypeScript allows declaring the type of function in two different ways:
 * Function type: () ⇒ number
 * Object type with a call signature: { (): number }
 * The function type syntax is generally preferred for being more concise.
 */
export type Instantiable<T, Args extends unknown[] = unknown[]> = new (
  ...args: Args
) => T;

/**
 * Interface for classes with a static create method
 */
export interface WithStaticCreate<T, CreateArgs = unknown> {
  create(data: CreateArgs): T;
}

/**
 * Type for a class that has both a constructor and a static create method
 */
export type InstantiableWithCreate<
  T,
  Args extends unknown[] = unknown[],
  CreateArgs = unknown,
> = Instantiable<T, Args> & WithStaticCreate<T, CreateArgs>;
