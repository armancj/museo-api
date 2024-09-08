import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsAdult(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'The date of birth must correspond to an adult.',
        ...validationOptions,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!(value instanceof Date)) {
            return false;
          }
          const today = new Date();
          const age = today.getFullYear() - value.getFullYear();
          const monthDifference = today.getMonth() - value.getMonth();
          const dayDifference = today.getDate() - value.getDate();
          return (
            age > 18 ||
            (age === 18 &&
              (monthDifference > 0 ||
                (monthDifference === 0 && dayDifference >= 0)))
          );
        },
      },
    });
  };
}
