import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { createFieldMetadataDto } from './field-metadata.dto';

export const FieldMetadataDtoForString = createFieldMetadataDto<string>({
  options: { type: 'string' },
  decorators: [IsString(), IsNotEmpty()],
});

export const FieldMetadataDtoForNumber = createFieldMetadataDto<string>({
  options: { type: 'number' },
  decorators: [IsNumber(), IsNotEmpty(), IsPositive()],
});

export const FieldMetadataDtoForArrayString = createFieldMetadataDto<string>({
  options: { type: 'string', isArray: true },
  decorators: [IsString({ each: true }), IsNotEmpty({ each: true })],
});

export const FieldMetadataDtoForEnum = (enumValues: any) =>
  createFieldMetadataDto<string>({
    options: { type: 'string', enum: enumValues },
    decorators: [IsEnum(enumValues), IsString(), IsNotEmpty()],
  });
