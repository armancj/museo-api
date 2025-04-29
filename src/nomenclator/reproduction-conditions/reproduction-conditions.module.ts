import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { ReproductionConditionsController } from './reproduction-conditions.controller';
import {
  ReproductionConditionSchemaFactory,
  ReproductionConditionNameEntity,
} from './schema/reproduction-condition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ReproductionConditionNameEntity,
        schema: ReproductionConditionSchemaFactory,
      },
    ]),
  ],
  controllers: [ReproductionConditionsController],
  providers: [ReproductionConditionsService],
  exports: [ReproductionConditionsService],
})
export class ReproductionConditionsModule {}
