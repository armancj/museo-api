import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { SectionEntity, SectionSchema } from './schema/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SectionEntity.name,
        schema: SectionSchema,
      },
    ]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}