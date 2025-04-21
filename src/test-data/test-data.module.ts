import { Module } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { TestDataController } from './test-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDataNameEntity, TestDataSchema } from './schema/test-data.schema';
import { applyCommonHooksSchema } from '../cultural-heritage-property/field-review-status/schema/apply-common-hooks.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TestDataNameEntity,
        useFactory: () => applyCommonHooksSchema(TestDataSchema),
      },
    ]),
  ],
  controllers: [TestDataController],
  providers: [TestDataService],
})
export class TestDataModule {}
