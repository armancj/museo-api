import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FundTitleService } from './fund-title.service';
import { FundTitleController } from './fund-title.controller';
import { FundTitleEntity, FundTitleSchema } from './schema/fund-title.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FundTitleEntity.name,
        schema: FundTitleSchema,
      },
    ]),
  ],
  controllers: [FundTitleController],
  providers: [FundTitleService],
  exports: [FundTitleService],
})
export class FundTitleModule {}