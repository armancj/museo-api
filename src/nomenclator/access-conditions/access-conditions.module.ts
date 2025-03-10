import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessConditionsService } from './access-conditions.service';
import { AccessConditionsController } from './access-conditions.controller';
import { AccessConditionEntity, AccessConditionSchema } from './entities/access-condition.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccessConditionEntity.name, schema: AccessConditionSchema },
    ]),
  ],
  controllers: [AccessConditionsController],
  providers: [AccessConditionsService],
  exports: [AccessConditionsService],
})
export class AccessConditionsModule {}
