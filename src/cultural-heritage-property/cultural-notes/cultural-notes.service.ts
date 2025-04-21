import { Inject, Injectable } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';
import { CulturalNoteEntity } from './entities/cultural-note.entity';
import { CulturalNotesEntity } from './entities/cultural-notes.entity';
import {User} from "../../users/entities/user.entity";

/**
 * Service to manage cultural notes.
 *
 * This service provides methods for creating, retrieving, updating, and deleting
 * cultural notes associated with a specific cultural property identified by its UUID.
 */
@Injectable()
export class CulturalNotesService {
  constructor(
    @Inject('CULTURAL_NOTES_SERVICE')
    private readonly commonRecordService: CommonRecordService<
      any,
      CreateCulturalNoteDto,
      CulturalNoteEntity,
      CulturalNotesEntity
    >,
  ) {}

  /**
   * Creates a new cultural note.
   *
   * @param uuid The UUID of the cultural property
   * @param commonDto The data used to create the cultural note
   * @returns The created cultural note
   */
  create(uuid: string, commonDto: CreateCulturalNoteDto, user: User) {
    return this.commonRecordService.create(uuid, commonDto, user);
  }

  /**
   * Retrieves all cultural notes.
   *
   * @returns A list of cultural notes
   */
  findAll() {
    return this.commonRecordService.findAll();
  }

  /**
   * Retrieves a specific cultural note by UUID.
   *
   * @param uuid The UUID of the cultural property
   * @returns The cultural note associated with the given UUID
   */
  findOne(uuid: string) {
    return this.commonRecordService.findOne(uuid);
  }

  /**
   * Updates an existing cultural note.
   *
   * @param uuid The UUID of the cultural property
   * @param commonDto The updated data for the cultural note
   * @returns The updated cultural note
   */
  update(uuid: string, commonDto: UpdateCulturalNoteDto) {
    return this.commonRecordService.update(uuid, commonDto);
  }

  /**
   * Deletes a cultural note.
   *
   * @param uuid The UUID of the cultural property
   * @returns A response indicating success or failure of the deletion
   */
  remove(uuid: string) {
    return this.commonRecordService.remove(uuid);
  }
}
