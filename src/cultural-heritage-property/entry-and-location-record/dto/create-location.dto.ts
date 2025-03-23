import { LocationModel } from '../models/entry-and-location-record.model';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForStringWithoutHistory } from '../../field-review-status/dto/create.dto';

/**
 * Data Transfer Object (DTO) for creating a new location.
 * This class serves as a schema for defining, validating,
 * and transferring data related to a specific location entity.
 * Implements the structure of the LocationModel interface.
 *
 * Each property in the class is type-validated and constrained
 * to ensure data consistency and correctness. Primarily used in
 * operations such as creating or validating location-related input data.
 *
 * Validation decorators like @IsString and @IsNotEmpty ensure that
 * the provided data for each field follows the expected format and is not empty.
 *
 * The @Type decorator is used to explicitly define the transformation to
 * the property type, facilitating validation and serialization.
 */
export class CreateLocationDto implements LocationModel {
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  box: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  exhibitionRoom: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  fileFolder: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  floor: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  shelfDrawer: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  showcaseShelf: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  storage: FieldMetadata<string>;
}
