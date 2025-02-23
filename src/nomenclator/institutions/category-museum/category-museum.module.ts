import { Module } from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CategoryMuseumController } from './category-museum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryMuseumNameEntity, CategoryMuseumSchema } from './schema/category-museum.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CategoryMuseumNameEntity, schema: CategoryMuseumSchema }]),
  ],
  controllers: [CategoryMuseumController],
  providers: [CategoryMuseumService],
})
export class CategoryMuseumModule {}
