import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestDatumDto } from './dto/create-test-datum.dto';
import { UpdateTestDatumDto } from './dto/update-test-datum.dto';
import { TestDatum } from './entities/test-datum.entity';
import { InjectModel } from '@nestjs/mongoose';
import {
  TestDataMongoModel,
  TestDataNameEntity,
} from './schema/test-data.schema';

@Injectable()
export class TestDataService {
  constructor(
    @InjectModel(TestDataNameEntity)
    private readonly testDataMongoRepo: TestDataMongoModel,
  ) {}

  async create(createTestDatumDto: CreateTestDatumDto) {
    const testData = await this.testDataMongoRepo.create(createTestDatumDto);
    return new TestDatum(testData);
  }

  async findAll() {
    const result = await this.testDataMongoRepo.find();
    return result.map((item) => new TestDatum(item));
  }

  async findOne(uuid: string) {
    const testData = await this.testDataMongoRepo.findOne({ uuid });
    if (!testData)
      throw new NotFoundException(`No test data found with uuid ${uuid}`);
    return new TestDatum(testData);
  }

  async update(uuid: string, updateTestDatumDto: UpdateTestDatumDto) {
    await this.findOne(uuid);
    return this.testDataMongoRepo.updateOne(
      { uuid },
      { ...updateTestDatumDto },
    );
  }

  async remove(uuid: string) {
    await this.findOne(uuid);
    await this.testDataMongoRepo.deleteOne({ uuid });
    return true;
  }
}
