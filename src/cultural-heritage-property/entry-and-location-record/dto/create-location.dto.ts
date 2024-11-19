import { LocationModel } from '../models/entry-and-location-record.model';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO for creating a location.
 * @typedef {Object} CreateLocationDto
 * @property {string} box - The box where the item is stored.
 * @property {string} exhibitionRoom - The exhibition room where the item is displayed.
 * @property {string} fileFolder - The file folder where the item is archived.
 * @property {string} floor - The floor where the item is located.
 * @property {string} shelfDrawer - The shelf drawer where the item is kept.
 * @property {string} showcaseShelf - The showcase shelf where the item is exhibit.
 * @property {string} storage - The storage area where the item is stored.
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
