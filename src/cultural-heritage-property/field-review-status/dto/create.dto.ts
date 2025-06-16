import { OmitType } from '@nestjs/swagger';
import {
  FieldMetadataDtoForArrayString,
  FieldMetadataDtoForBoolean,
  FieldMetadataDtoForNumber,
  FieldMetadataDtoForString,
} from './field-metadata-string.dto';
import { FieldMetadataDateDto } from './FieldMetadataDateDto';

export function createDto<T extends new (...args: any[]) => any>(
  FieldMetadata: T,
): new () => Omit<InstanceType<T>, 'history' | 'modifiedBy'> {
  return OmitType(FieldMetadata, ['history', 'modifiedBy'] as const);
}

export const FieldMetadataDtoForStringWithoutHistory = createDto(FieldMetadataDtoForString);

export const FieldMetadataDtoForNumberWithoutHistory = createDto(FieldMetadataDtoForNumber);

export const FieldMetadataDtoForDateWithoutHistory = OmitType(FieldMetadataDateDto, ['history', 'modifiedBy'] as const);

export const FieldMetadataDtoForBooleanWithoutHistory = createDto(FieldMetadataDtoForBoolean);

export const FieldMetadataDtoForStringArrayWithoutHistory = createDto(
  FieldMetadataDtoForArrayString,
);
