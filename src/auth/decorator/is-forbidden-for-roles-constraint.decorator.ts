import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { UserRoles } from "../../users/enum/user-roles.enum";

/**
 * Custom validation constraint that checks if a property value is forbidden for specific user roles,
 * or if it's required for other roles.
 */
@ValidatorConstraint({ async: false })
class IsForbiddenForRolesConstraint implements ValidatorConstraintInterface {
    /**
     * Method to validate the property value based on the user roles.
     * @param value - The value of the property being validated.
     * @param args - Additional validation arguments.
     * @returns boolean - True if the validation passes, otherwise false.
     */
    validate(value: any, args: ValidationArguments): boolean {
        const [forbiddenRoles, validators] = args.constraints as [UserRoles[], Array<(object: any) => boolean>];
        const allRoles = Object.values(UserRoles);
        const requiredRoles = allRoles.filter(role => !forbiddenRoles.includes(role as UserRoles));
        const role = (args.object as any).roles;

        if (forbiddenRoles.includes(role)) {
            return value === undefined || value === null || value === '';
        }
        if (requiredRoles.includes(role)) {
            return validators.every(validator => validator(value));
        }
        return true;
    }

    /**
     * Method to generate a default error message if the validation fails.
     * @param args - Additional validation arguments.
     * @returns string - The error message.
     */
    defaultMessage(args: ValidationArguments): string {
        const [forbiddenRoles] = args.constraints as [UserRoles[]];
        const allRoles = Object.values(UserRoles);
        const requiredRoles = allRoles.filter(role => !forbiddenRoles.includes(role as UserRoles));
        const propertyName = args.property;
        const role = (args.object as any).roles;

        if (forbiddenRoles.includes(role)) {
            return `${propertyName} should not be provided for roles: ${forbiddenRoles.join(', ')}`;
        }
        if (requiredRoles.includes(role)) {
            return `${propertyName} is required and should not be empty for roles: ${requiredRoles.join(', ')}`;
        }
        return `${propertyName} has an invalid state.`;
    }
}

/**
 * Decorator function to apply the custom validation constraint.
 * @param forbiddenRoles - An array of roles for which the property value is forbidden.
 * @param validators - An array of additional validation functions to apply.
 * @param validationOptions - Optional validation options.
 * @returns function - A function to register the decorator.
 */
export function IsForbiddenForRoles(
    forbiddenRoles: UserRoles[],
    validators: any = [],
    validationOptions?: ValidationOptions
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [forbiddenRoles, validators],
            validator: IsForbiddenForRolesConstraint,
        });
    };
}
