import { Module } from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CategoryMuseumController } from './category-museum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryMuseumNameEntity,
  CategoryMuseumSchema,
} from './schema/category-museum.schema';
import { InstitutionsModule } from 'src/address/institutions/institutions.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryMuseumNameEntity, schema: CategoryMuseumSchema },
    ]),
    InstitutionsModule,
  ],
  controllers: [CategoryMuseumController],
  providers: [CategoryMuseumService],
  exports: [CategoryMuseumService],
})
export class CategoryMuseumModule {}
