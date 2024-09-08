import { Instantiable } from '../interfaces/instantiable';

/**
 * Checks by its generic if the class corresponds to its abstraction
 * @param value
 * @returns {Instantiable<T>}
 */
export const verifyInject = <T>(value: Instantiable<T>): Instantiable<T> =>
  value;
