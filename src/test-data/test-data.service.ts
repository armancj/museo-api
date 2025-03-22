import { Injectable } from '@nestjs/common';
import { CreateTestDatumDto } from './dto/create-test-datum.dto';
import { UpdateTestDatumDto } from './dto/update-test-datum.dto';
import { TestDatum } from './entities/test-datum.entity';

@Injectable()
export class TestDataService {
  create(createTestDatumDto: CreateTestDatumDto) {
    return new TestDatum(createTestDatumDto);
  }

  findAll() {
    return `This action returns all testData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testDatum`;
  }

  update(id: number, updateTestDatumDto: UpdateTestDatumDto) {
    return new TestDatum(updateTestDatumDto);
  }

  remove(id: number) {
    return `This action removes a #${id} testDatum`;
  }
}
