import { Transform } from 'class-transformer';
import { isArray } from 'class-validator';

export const TransformToArray = () =>
  Transform(({ value }) => {
    if (typeof value === 'string')
      try {
        value = JSON.parse(value);
      } catch (error) {
        value = value
          .replace(/^\[|]|"|"$/g, '')
          .split(',')
          .map((item: any) => item.trim());
      }
    return isArray(value) ? value : value;
  });
