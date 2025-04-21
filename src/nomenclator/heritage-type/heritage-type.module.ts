import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeritageTypeService } from './heritage-type.service';
import { HeritageTypeController } from './heritage-type.controller';
import { HeritageTypeEntity, HeritageTypeSchema } from './schema/heritage-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: HeritageTypeEntity.name,
        schema: HeritageTypeSchema,
      },
    ]),
  ],
  controllers: [HeritageTypeController],
  providers: [HeritageTypeService],
  exports: [HeritageTypeService],
})
export class HeritageTypeModule {}