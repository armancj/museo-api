import { Module } from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CategoryMuseumController } from './category-museum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryMuseumNameEntity,
  CategoryMuseumSchema,
} from './schema/category-museum.schema';
import { CacheModule } from '../../cache/cache.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryMuseumNameEntity, schema: CategoryMuseumSchema },
    ]),
    CacheModule,
  ],
  controllers: [CategoryMuseumController],
  providers: [CategoryMuseumService],
  exports: [CategoryMuseumService],
})
export class CategoryMuseumModule {}
