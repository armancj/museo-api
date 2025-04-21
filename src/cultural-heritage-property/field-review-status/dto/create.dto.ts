import { OmitType } from '@nestjs/swagger';
import {
  FieldMetadataDtoForArrayString,
  FieldMetadataDtoForBoolean,
  FieldMetadataDtoForDate,
  FieldMetadataDtoForNumber,
  FieldMetadataDtoForString,
} from './field-metadata-string.dto';

export function createDto<T extends new (...args: any[]) => any>(
  FieldMetadata: T,
): new () => Omit<InstanceType<T>, 'history' | 'modifiedBy'> {
  return OmitType(FieldMetadata, ['history', 'modifiedBy'] as const);
}

export const FieldMetadataDtoForStringWithoutHistory = createDto(
  FieldMetadataDtoForString,
);

export const FieldMetadataDtoForNumberWithoutHistory = createDto(
  FieldMetadataDtoForNumber,
);

export const FieldMetadataDtoForDateWithoutHistory = createDto(
  FieldMetadataDtoForDate,
);

export const FieldMetadataDtoForBooleanWithoutHistory = createDto(
  FieldMetadataDtoForBoolean,
);

export const FieldMetadataDtoForStringArrayWithoutHistory = createDto(
  FieldMetadataDtoForArrayString,
);
