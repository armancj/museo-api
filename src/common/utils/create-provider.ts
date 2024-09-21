import { Provider } from '@nestjs/common';
import { Instantiable } from '../interfaces/instantiable';

export const createProvider = <T>(
  useClass: Instantiable<T>,
): [symbol, Provider] => {
  const token = Symbol(useClass.name);
  const provider: Provider = {
    provide: token,
    useClass: useClass,
  };
  return [token, provider];
};
