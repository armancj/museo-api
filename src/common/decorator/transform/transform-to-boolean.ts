import { Transform } from 'class-transformer';

export const TransformToBoolean = () =>
  Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    if (value !== 'true' || value !== 'false') return undefined;
    return value === 'true';
  });
