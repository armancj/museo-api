import { Transform } from 'class-transformer';

export const TransformToObject = () =>
  Transform(({ value }) => {
    try {
      return JSON.parse(value);
    } catch (err) {
      return undefined;
    }
  });
