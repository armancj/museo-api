import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { UserRoles } from "../../users/enum/user-roles.enum";

@ValidatorConstraint({ async: false })
class IsForbiddenForRolesConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        const [forbiddenRoles, requiredRoles] = args.constraints as [UserRoles[], UserRoles[]];
        const role = (args.object as any).roles;
        if (forbiddenRoles.includes(role)) {
            return value === undefined || value === null || value === '';
        }
        if (requiredRoles.includes(role)) {
            return value !== undefined && value !== null && value !== '';
        }
        return true;
    }

    defaultMessage(args: ValidationArguments): string {
        const [forbiddenRoles, requiredRoles] = args.constraints as [UserRoles[], UserRoles[]];
        const propertyName = args.property;
        const role = (args.object as any).roles;
        if (forbiddenRoles.includes(role)) {
            return `${propertyName} should not be provided for roles: ${forbiddenRoles.join(', ')}`;
        }
        if (requiredRoles.includes(role)) {
            return `${propertyName} is required for roles: ${requiredRoles.join(', ')}`;
        }
        return `${propertyName} has an invalid state.`;
    }
}

export function IsForbiddenForRoles(forbiddenRoles: UserRoles[], requiredRoles: UserRoles[], validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [forbiddenRoles, requiredRoles],
            validator: IsForbiddenForRolesConstraint,
        });
    };
}
