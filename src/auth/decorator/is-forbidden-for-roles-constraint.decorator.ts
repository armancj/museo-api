import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import {UserRoles} from "../../users/enum/user-roles.enum";

@ValidatorConstraint({ async: false })
class IsForbiddenForRolesConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        const [forbiddenRoles] = args.constraints as [UserRoles[]];
        const userRoles = (args.object as any).roles;

        // Asegurarse de que roles no sea undefined o null
        if (!userRoles) return true;

        // Check if any of the user's roles are forbidden for this property
        for (const role of forbiddenRoles) {
            if (userRoles.includes(role)) {
                return false;
            }
        }
        return true;
    }

    defaultMessage(args: ValidationArguments): string {
        const [forbiddenRoles] = args.constraints as [UserRoles[]];
        return `${args.property} is forbidden for roles: ${forbiddenRoles.join(', ')}`;
    }
}

export function IsForbiddenForRoles(
    forbiddenRoles: UserRoles[],
    validationOptions?: ValidationOptions,
) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [forbiddenRoles],
            validator: IsForbiddenForRolesConstraint,
        });
    };
}
