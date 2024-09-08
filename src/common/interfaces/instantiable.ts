/*
 * TypeScript allows declaring the type of function in two different ways:
 * Function type: () ⇒ number
 * Object type with a call signature: { (): number }
 * The function type syntax is generally preferred for being more concise.
 */
export type Instantiable<T> = new (...arg: any[]) => T; // Fix:  new (...arg: any[]) => T this is before: { new (...arg: any[]): T }
