import { User } from '../../users/entities/user.entity';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { InstitutionModel } from '../../address/institutions/entities/institution.model';
import { JwtPayload } from '../../auth/strategies/jwt.payload';
import { ForbiddenException } from '@nestjs/common';
import { UserModel } from '../../users/models/user.model';

/**
 * Role hierarchy for permission checking
 * Higher index means higher privilege level
 */
const ROLE_HIERARCHY = {
  [UserRoles.employee]: 0,
  [UserRoles.manager]: 1,
  [UserRoles.administrator]: 2,
  [UserRoles.superAdmin]: 3,
};

/**
 * Determines if a user with a given role can create a user with another role
 *
 * @param userRole - The role of the user performing the action
 * @param targetRole - The role to be assigned to the target user
 * @returns Boolean indicating if the operation is allowed
 */
function canCreateRole(userRole: UserRoles, targetRole: UserRoles): boolean {
  // Users can only create users with roles of lower privilege level
  return ROLE_HIERARCHY[userRole] > ROLE_HIERARCHY[targetRole];
}

/**
 * Applies location constraints based on user role
 *
 * @param role - The user's role
 * @param source - The source object containing location data
 * @param target - The target object to apply constraints to
 * @param isInstitution - Whether the target is an institution (different field names)
 */
function applyLocationConstraints(
  role: UserRoles,
  source: User | JwtPayload,
  target: any,
  isInstitution = false,
): void {
  // Common fields for all restricted roles
  if (
    role === UserRoles.administrator ||
    role === UserRoles.manager ||
    role === UserRoles.employee
  ) {
    if (isInstitution) {
      target.country = source.nationality;
      target.province = source.province;
    } else {
      target.nationality = source.nationality;
      target.province = source.province;
    }
  }

  // Additional constraints for manager and employee roles
  if (role === UserRoles.manager || role === UserRoles.employee) {
    if (isInstitution) {
      target.municipality = source.municipal;
    } else {
      target.municipal = source.municipal;
    }
  }
}

/**
 * Applies user data constraints based on the current user's role
 *
 * @param user - The current user
 * @param rest - The user data to be constrained
 * @returns The constrained user data
 * @throws ForbiddenException if the user doesn't have permission to create the specified role
 */
export function getFieldOfUserData(
  user: User,
  rest: Partial<UserModel>,
): Partial<UserModel> {
  // Check role creation permissions
  if (rest.roles && !canCreateRole(user?.roles as UserRoles, rest.roles)) {
    throw new ForbiddenException(
      'You do not have permission to create this type of user.',
    );
  }

  // Apply location constraints based on a role
  applyLocationConstraints(user?.roles as UserRoles, user, rest);

  return rest;
}

/**
 * Applies institution data constraints based on the current user's role
 *
 * @param user - The current user's JWT payload
 * @param rest - The institution data to be constrained
 * @returns The constrained institution data
 */
export function getFieldOfInstitutionData(
  user: JwtPayload,
  rest: Partial<InstitutionModel>,
): Partial<InstitutionModel> {
  // Apply location constraints based on a role
  applyLocationConstraints(user.roles as UserRoles, user, rest, true);

  return rest;
}
