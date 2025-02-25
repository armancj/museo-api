import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

/**
 * Generic service for handling CRUD operations on a MongoDB model with embedded data.
 *
 * @template T - Mongoose Document type.
 * @template CreateDto - DTO type for creating records.
 * @template RecordEntity - Type of the single record entity.
 * @template RecordsEntity - Type of the bulk records entity.
 */
@Injectable()
export class CommonRecordService<
  T extends Document,
  CreateDto,
  RecordEntity,
  RecordsEntity,
> {
  /**
   * Constructor for `CommonRecordService`.
   *
   * @param model - Mongoose model injected via `@InjectModel`.
   * @param singleEntityClass - Class type for creating a single record entity instance.
   * @param bulkEntityClass - Class type for creating a bulk records entity instance.
   * @param embeddedFieldName - Name of the embedded field in the document to be managed.
   */
  constructor(
    @InjectModel('') private readonly model: Model<T>,
    private readonly singleEntityClass: new (...args: any[]) => RecordEntity,
    private readonly bulkEntityClass: new (...args: any[]) => RecordsEntity,
    private readonly embeddedFieldName: string,
  ) {}

  /**
   * Creates a new record by updating the embedded field in the document.
   *
   * @param uuid - Unique identifier of the document.
   * @param createDto - Data transfer object for creating a new record.
   * @returns A promise that resolves to the created `RecordEntity`.
   */
  async create(uuid: string, createDto: CreateDto): Promise<RecordEntity> {
    return this.updateRecord(uuid, createDto);
  }

  /**
   * Retrieves all non-deleted records and maps them to the bulk entity class.
   *
   * @returns A promise that resolves to an array of `RecordsEntity`.
   */
  async findAll(): Promise<RecordsEntity[]> {
    const records = await this.model.find({ deleted: false }).lean().exec();
    return this.bulkEntityClass['create'](records);
  }

  /**
   * Retrieves a single non-deleted record by its UUID and maps it to the single entity class.
   *
   * @param uuid - Unique identifier of the document.
   * @returns A promise that resolves to the found `RecordEntity`.
   * @throws {NotFoundException} If the record or embedded data is not found.
   */
  async findOne(uuid: string): Promise<RecordEntity> {
    const record = await this.model
      .findOne({ uuid, deleted: false })
      .lean()
      .exec();
    if (!record) throw new NotFoundException('Not Found record');

    const embeddedData = record[this.embeddedFieldName];
    if (!embeddedData)
      throw new NotFoundException(
        `Not Found data for ${this.embeddedFieldName}`,
      );

    return this.singleEntityClass['create'](embeddedData);
  }

  /**
   * Updates an existing record by its UUID.
   *
   * @param uuid - Unique identifier of the document.
   * @param updateDto - Partial DTO for updating the record.
   * @returns A promise that resolves to the updated `RecordEntity`.
   */
  async update(
    uuid: string,
    updateDto: Partial<CreateDto>,
  ): Promise<RecordEntity> {
    await this.findOne(uuid);
    return this.updateRecord(uuid, updateDto);
  }

  /**
   * Removes the embedded field from the document by its UUID.
   *
   * @param uuid - Unique identifier of the document.
   * @returns A promise that resolves when the field is removed.
   */
  async remove(uuid: string): Promise<void> {
    await this.findOne(uuid);
    await this.model.updateOne(
      { uuid },
      { $unset: { [this.embeddedFieldName]: 1 } as any },
    );
  }

  /**
   * Helper method to update the embedded field in a document.
   *
   * @param uuid - Unique identifier of the document.
   * @param updateDto - Partial DTO for updating the embedded field.
   * @returns A promise that resolves to the updated `RecordEntity`.
   * @throws {NotFoundException} If the record is not found.
   */
  private async updateRecord(
    uuid: string,
    updateDto: Partial<CreateDto>,
  ): Promise<RecordEntity> {
    const updatedRecord = await this.model
      .findOneAndUpdate(
        { uuid, deleted: false },
        { $set: { [this.embeddedFieldName]: updateDto } as any },
        { new: true },
      )
      .lean()
      .exec();

    if (!updatedRecord) throw new NotFoundException('Not Found record');

    return this.singleEntityClass['create'](
      updatedRecord[this.embeddedFieldName],
    );
  }
}
