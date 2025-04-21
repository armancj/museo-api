import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateEntryFormDto } from './dto/create-entry-form.dto';
import { UpdateEntryFormDto } from './dto/update-entry-form.dto';
import { FilterEntryFormDto } from './dto/filter-entry-form.dto';
import { EntryFormEntity } from './entities/entry-form.entity';
import { EntryFormDocument, EntryFormMongoModel } from './schema/entry-form.schema';

@Injectable()
export class EntryFormService {
  constructor(
    @InjectModel(EntryFormEntity.name)
    private readonly entryFormRepository: EntryFormMongoModel,
  ) {}

  async create(createEntryFormDto: CreateEntryFormDto) {
    const createdEntryForm = await this.entryFormRepository.create(
      createEntryFormDto,
    );
    const entity = EntryFormEntity.create(createdEntryForm);
    
    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description
    };
  }

  async findAll(filter?: FilterEntryFormDto) {
    const query: RootFilterQuery<EntryFormDocument> = { deleted: false };

    if (filter?.name) {
      query.name = filter.name;
    }

    const entryForms = await this.entryFormRepository
      .find(query)
      .exec();

    return entryForms.map(entryForm => EntryFormEntity.create(entryForm));
  }

  async findOne(uuid: string) {
    const entryForm = await this.getEntryForm({
      uuid,
      deleted: false,
    });
    return EntryFormEntity.create(entryForm);
  }

  private async getEntryForm(filter: Partial<EntryFormEntity>) {
    const entryForm = await this.entryFormRepository
      .findOne(filter)
      .exec();
    if (!entryForm) {
      throw new NotFoundException('Entry form not found');
    }
    return entryForm;
  }

  async update(uuid: string, updateEntryFormDto: UpdateEntryFormDto) {
    await this.findOne(uuid);
    await this.entryFormRepository
      .updateOne({ uuid }, updateEntryFormDto)
      .exec();
  }

  async remove(uuid: string) {
    const entryForm = await this.findOne(uuid);
    const name = `${entryForm.name}-${entryForm.uuid}`;
    await this.entryFormRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}