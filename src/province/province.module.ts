import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvinceNameEntity, ProvinceSchema } from './schema/province.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProvinceNameEntity, schema: ProvinceSchema },
    ]),
  ],
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
