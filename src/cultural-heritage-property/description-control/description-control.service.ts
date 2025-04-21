import { Injectable, Inject } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateDescriptionControlDto } from './dto/create-description-control.dto';
import { UpdateDescriptionControlDto } from './dto/update-description-control.dto';
import { DescriptionControl } from './entities/description-control.entity';
import { DescriptionControlsEntity } from './entities/description-controls.entity';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class DescriptionControlService {
    constructor(
        @Inject('DESCRIPTION_CONTROL_SERVICE')
        private readonly commonRecordService: CommonRecordService<
            any,
            CreateDescriptionControlDto,
            DescriptionControl,
            DescriptionControlsEntity
        >,
    ) {
    }

    /**
     * Creates a new description control record, associating it with a UUID.
     *
     * @param uuid - The UUID to associate with the new description control.
     * @param createDescriptionControlDto - Data transfer object containing the description control details.
     * @param user
     * @returns {Promise<DescriptionControl>} - Promise resolving to the created description control.
     */
    create(
        uuid: string, createDescriptionControlDto: CreateDescriptionControlDto, user: User,
  ): Promise<DescriptionControl> {
    return this.commonRecordService.create(uuid, createDescriptionControlDto, user);
  }

  /**
   * Retrieves all description control records.
   *
   * @returns {Promise<DescriptionControlsEntity[]>} - Promise resolving to an array of description control records.
   */
  findAll(): Promise<DescriptionControlsEntity[]> {
    return this.commonRecordService.findAll();
  }

  /**
   * Retrieves a description control record by its UUID.
   *
   * @param uuid - The UUID of the description control to retrieve.
   * @returns {Promise<DescriptionControl>} - Promise resolving to the found description control record.
   */
  findOne(uuid: string): Promise<DescriptionControl> {
    return this.commonRecordService.findOne(uuid);
  }

  /**
   * Updates an existing description control record by UUID.
   *
   * @param uuid - The UUID of the description control to update.
   * @param updateDescriptionControlDto - Data transfer object containing the updated details.
   * @returns {Promise<DescriptionControl>} - Promise resolving to the updated description control record.
   */
  update(
    uuid: string,
    updateDescriptionControlDto: UpdateDescriptionControlDto,
  ): Promise<DescriptionControl> {
    return this.commonRecordService.update(uuid, updateDescriptionControlDto);
  }

  /**
   * Removes a description control record by UUID.
   *
   * @param uuid - The UUID of the description control to remove.
   * @returns {Promise<void>} - Promise resolving upon successful removal.
   */
  remove(uuid: string): Promise<void> {
    return this.commonRecordService.remove(uuid);
  }
}
