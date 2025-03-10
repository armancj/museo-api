import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { ReproductionConditionsController } from './reproduction-conditions.controller';
import { ReproductionConditionEntity, ReproductionConditionSchema } from './entities/reproduction-condition.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReproductionConditionEntity.name, schema: ReproductionConditionSchema },
    ]),
  ],
  controllers: [ReproductionConditionsController],
  providers: [ReproductionConditionsService],
  exports: [ReproductionConditionsService],
})
export class ReproductionConditionsModule {}
