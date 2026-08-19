import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './role-guard';
import { UserRoles } from '../../users/enum/user-roles.enum';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: { getAllAndOverride: jest.Mock };

  const contextWithUser = (user: unknown): ExecutionContext =>
    ({
      getHandler: () => jest.fn(),
      getClass: () => jest.fn(),
      switchToHttp: () => ({ getRequest: () => ({ user }) }),
    }) as unknown as ExecutionContext;

  beforeEach(() => {
    reflector = { getAllAndOverride: jest.fn() };
    guard = new RolesGuard(reflector as unknown as Reflector);
  });

  it('allows the request when the handler declares no roles', () => {
    reflector.getAllAndOverride.mockReturnValue(undefined);

    expect(guard.canActivate(contextWithUser({ roles: undefined }))).toBe(true);
  });

  it('allows the request when the user role is one of the required roles', () => {
    reflector.getAllAndOverride.mockReturnValue([
      UserRoles.administrator,
      UserRoles.superAdmin,
    ]);

    expect(
      guard.canActivate(contextWithUser({ roles: UserRoles.administrator })),
    ).toBe(true);
  });

  it('denies the request when the user role is not required', () => {
    reflector.getAllAndOverride.mockReturnValue([UserRoles.administrator]);

    expect(
      guard.canActivate(contextWithUser({ roles: UserRoles.employee })),
    ).toBe(false);
  });

  // Regression guard for API-22: 'super Administrador' contains 'Administrador',
  // so substring matching granted access that was never declared.
  it('denies a role that merely contains a required role as a substring', () => {
    reflector.getAllAndOverride.mockReturnValue([UserRoles.administrator]);

    expect(
      guard.canActivate(contextWithUser({ roles: UserRoles.superAdmin })),
    ).toBe(false);
  });

  // Regression guard for API-22: an absent user used to throw a TypeError
  // instead of being rejected.
  it('denies the request when there is no authenticated user', () => {
    reflector.getAllAndOverride.mockReturnValue([UserRoles.administrator]);

    expect(guard.canActivate(contextWithUser(undefined))).toBe(false);
  });
});
