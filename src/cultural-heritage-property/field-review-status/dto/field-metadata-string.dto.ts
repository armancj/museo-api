import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';
import { createFieldMetadataDto } from './field-metadata.dto';

export const FieldMetadataDtoForString = createFieldMetadataDto<string>({
  options: { type: 'string', default: 'Here is a text', isArray: false },
  decorators: [IsString(), IsNotEmpty()],
});

export const FieldMetadataDtoForNumber = createFieldMetadataDto<string>({
  options: { type: 'number', default: 0 },
  decorators: [IsNumber(), IsNotEmpty(), Min(0)],
});

export const FieldMetadataDtoForBoolean = createFieldMetadataDto<string>({
  options: { type: 'boolean' },
  decorators: [IsBoolean(), IsNotEmpty()],
});

export const FieldMetadataDtoForDate = createFieldMetadataDto<string>({
  options: { type: () => Date },
  decorators: [IsDate(), IsNotEmpty()],
});

export const FieldMetadataDtoForArrayString = createFieldMetadataDto<string>({
  options: { type: 'string', isArray: true, default: ['Here is a text'] },
  decorators: [IsString({ each: true }), IsNotEmpty({ each: true })],
});

export const FieldMetadataDtoForEnum = (enumValues: any) =>
  createFieldMetadataDto<string>({
    options: { type: 'string', enum: enumValues },
    decorators: [IsEnum(enumValues), IsString(), IsNotEmpty()],
  });
