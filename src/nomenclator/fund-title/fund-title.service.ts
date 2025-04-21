import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateFundTitleDto } from './dto/create-fund-title.dto';
import { UpdateFundTitleDto } from './dto/update-fund-title.dto';
import { FilterFundTitleDto } from './dto/filter-fund-title.dto';
import { FundTitleEntity } from './entities/fund-title.entity';
import { FundTitleDocument, FundTitleMongoModel } from './schema/fund-title.schema';

@Injectable()
export class FundTitleService {
  constructor(
    @InjectModel(FundTitleEntity.name)
    private readonly fundTitleRepository: FundTitleMongoModel,
  ) {}

  async create(createFundTitleDto: CreateFundTitleDto) {
    const createdFundTitle = await this.fundTitleRepository.create(
      createFundTitleDto,
    );
    const entity = FundTitleEntity.create(createdFundTitle);
    
    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description
    };
  }

  async findAll(filter?: FilterFundTitleDto) {
    const query: RootFilterQuery<FundTitleDocument> = { deleted: false };

    if (filter?.name) {
      query.name = filter.name;
    }

    const fundTitles = await this.fundTitleRepository
      .find(query)
      .exec();

    return fundTitles.map(fundTitle => FundTitleEntity.create(fundTitle));
  }

  async findOne(uuid: string) {
    const fundTitle = await this.getFundTitle({
      uuid,
      deleted: false,
    });
    return FundTitleEntity.create(fundTitle);
  }

  private async getFundTitle(filter: Partial<FundTitleEntity>) {
    const fundTitle = await this.fundTitleRepository
      .findOne(filter)
      .exec();
    if (!fundTitle) {
      throw new NotFoundException('Fund title not found');
    }
    return fundTitle;
  }

  async update(uuid: string, updateFundTitleDto: UpdateFundTitleDto) {
    await this.findOne(uuid);
    await this.fundTitleRepository
      .updateOne({ uuid }, updateFundTitleDto)
      .exec();
  }

  async remove(uuid: string) {
    const fundTitle = await this.findOne(uuid);
    const name = `${fundTitle.name}-${fundTitle.uuid}`;
    await this.fundTitleRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}