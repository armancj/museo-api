import { QueryBuilder } from '../schema/TypedQueryBuilder';
import { JwtPayload } from '../../auth/strategies/jwt.payload';
import { UserRoles } from '../../users/enum/user-roles.enum';

export function applyTerritorialFilters<T>(
  queryBuilder: QueryBuilder<T>,
  user?: JwtPayload,
): QueryBuilder<T> {
  if (!user) return queryBuilder;

  switch (user.roles) {
    case UserRoles.superAdmin:
      // Super admin ve todo
      break;

    case UserRoles.administrator:
      queryBuilder.where('producerAuthor.province.value', user.province);
      break;

    case UserRoles.manager:
      queryBuilder
        .where('producerAuthor.province.value', user.province)
        .where('producerAuthor.municipality.value', user.municipal);
      break;

    case UserRoles.employee:
      queryBuilder
        .where('producerAuthor.province.value', user.province)
        .where('producerAuthor.municipality.value', user.municipal)
        .where('institutionId', user.institutionId);
      break;

    default:
      queryBuilder.where('_id', null); // No ve nada
      break;
  }

  return queryBuilder;
}

export function applyProvinceFilter<T>(
  queryBuilder: QueryBuilder<T>,
  province?: string,
): QueryBuilder<T> {
  return queryBuilder.when(!!province, builder =>
    builder.where('producerAuthor.province.value', province!),
  );
}

export function applyMunicipalityFilter<T>(
  queryBuilder: QueryBuilder<T>,
  municipality?: string,
): QueryBuilder<T> {
  return queryBuilder.when(!!municipality, builder =>
    builder.where('producerAuthor.municipality.value', municipality!),
  );
}

export function applyInstitutionFilter<T>(
  queryBuilder: QueryBuilder<T>,
  institutionId?: string,
): QueryBuilder<T> {
  return queryBuilder.when(!!institutionId, builder =>
    builder.where('institutionId', institutionId!),
  );
}
