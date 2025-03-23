import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForStringArrayWithoutHistory,
  FieldMetadataDtoForStringWithoutHistory,
} from '../../field-review-status/dto/create.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * DTO for creating access and use conditions.
 * Defines the necessary fields required for creating an access and use condition entry.
 */
export class CreateAccessAndUseConditionDto {
  /**
   * Conditions related to access permissions.
   * Each string in the array should specify a distinct access condition.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  accessConditions: FieldMetadata<string[]>;

  /**
   * Conditions related to reproduction permissions.
   * Ensure each entry in the array specifies a clear reproduction condition.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  reproductionConditions: FieldMetadata<string[]>;

  /**
   * Technical requirements necessary for fulfilling access conditions.
   * A singular string that specifies the technical prerequisites.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  technicalRequirements: FieldMetadata<string>;
}
