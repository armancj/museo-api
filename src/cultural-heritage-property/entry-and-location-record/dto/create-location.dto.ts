import { LocationModel } from '../models/entry-and-location-record.model';
import { IsNotEmpty, IsString } from 'class-validator';

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
  @IsString()
  @IsNotEmpty()
  box: string;

  @IsString()
  @IsNotEmpty()
  exhibitionRoom: string;

  @IsString()
  @IsNotEmpty()
  fileFolder: string;

  @IsString()
  @IsNotEmpty()
  floor: string;

  @IsString()
  @IsNotEmpty()
  shelfDrawer: string;

  @IsString()
  @IsNotEmpty()
  showcaseShelf: string;

  @IsString()
  @IsNotEmpty()
  storage: string;
}
