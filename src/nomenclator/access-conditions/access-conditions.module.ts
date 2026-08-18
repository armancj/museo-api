import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessConditionsService } from './access-conditions.service';
import { AccessConditionsController } from './access-conditions.controller';
import {
  AccessConditionSchemaFactory,
  AccessConditionNameEntity,
} from './schema/access-condition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccessConditionNameEntity,
        schema: AccessConditionSchemaFactory,
      },
    ]),
  ],
  controllers: [AccessConditionsController],
  providers: [AccessConditionsService],
  exports: [AccessConditionsService],
})
export class AccessConditionsModule {}