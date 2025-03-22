import { Module } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { TestDataController } from './test-data.controller';

@Module({
  controllers: [TestDataController],
  providers: [TestDataService],
})
export class TestDataModule {}
