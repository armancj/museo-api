import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { RolesGuard } from '../guard/role-guard';
import { Forbidden, Unauthorized } from '../../common/dto/exception.dto';

interface UseGuardOptions {
  roles?: UserRoles[];
}

export function Auth({ ...roles }: UseGuardOptions = {}) {
  const rolesDescription = roles?.roles ? roles.roles.join(', ') : 'All';
  const decorators = [
    UseGuards(JwtAuthGuard),
    SetMetadata('roles', roles.roles),
    UseGuards(RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: 'Unauthorized',
      type: Unauthorized,
    }),
    ApiForbiddenResponse({
      description: `Forbidden for users without roles: ${rolesDescription}`,
      type: Forbidden,
    }),
  ];

  return applyDecorators(...decorators);
}
