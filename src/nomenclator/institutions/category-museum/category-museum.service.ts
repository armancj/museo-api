import { Injectable } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import {
  CategoryMuseumMongoModel,
  CategoryMuseumNameEntity,
} from './schema/category-museum.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryMuseum } from './entities/category-museum.entity';
import { CategoryMuseums } from './entities/museums.entity';
import { NotFoundException } from '@nestjs/common';
import { CategoryMuseumModel } from './model/category-museum.model';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from 'stream';
import { InstitutionsService } from 'src/address/institutions/institutions.service';
import { InstitutionType } from 'src/address/institutions/enum/institutions.enum';
import { FilterCategoryMuseumDto } from './dto/filter-category-museum.dto';


@Injectable()
export class CategoryMuseumService {
  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
    private readonly institutionService: InstitutionsService,
  ) {}

  async create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    const createdCategoryMuseum = await this.categoryMuseumRepository.create(
      createCategoryMuseumDto,
    );
    return CategoryMuseum.create(createdCategoryMuseum);
  }

  async findAll(filter?: FilterCategoryMuseumDto ) {
    const query: any = { deleted: false };

    if (filter?.active !== undefined) {
      query.active = filter.active;
    }

    if (filter.name) query.name = new RegExp(filter.name, 'i');

    if(filter.instituionUUID) { 
      const institutionCategory = await this.getCategoryByInstitutionId(filter.instituionUUID);
 console.log({institutionCategory})
    }

    const categoryMuseums = await this.categoryMuseumRepository
      .find(query)
      .exec();

    return CategoryMuseums.create(categoryMuseums).value;
  }

  async findOne(uuid: string): Promise<CategoryMuseumModel> {
    const CategoryMuseums = await this.getCategoryMuseum({
      uuid,
      deleted: false,
    });
    return CategoryMuseum.create(CategoryMuseums);
  }

  private async getCategoryMuseum(filter: Partial<CategoryMuseumModel>) {
    const categoryMuseum = await this.categoryMuseumRepository
      .findOne(filter)
      .exec();
    if (!categoryMuseum)
      throw new NotFoundException('Not found category museum');
    return categoryMuseum;
  }

  async update(uuid: string, updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    await this.findOne(uuid);
    await this.categoryMuseumRepository
      .updateOne({ uuid }, updateCategoryMuseumDto)
      .exec();
  }

  async remove(uuid: string) {
    const categoryMuseum = await this.findOne(uuid);
    const name = `${categoryMuseum.name}-${categoryMuseum.uuid}`;
    await this.categoryMuseumRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }

  async getCategoryByInstitutionId(institutionId: string) {
    const institution = await this.institutionService.findByUUID(institutionId);
    if (!institution) {
      throw new NotFoundException('Institution not found');
    }

    console.log(institution)
    switch (institution.institutionType) {
  
      case InstitutionType.MUSEUM:
        return  {
          name: 'Categoría Especial',
          active: true,
        };
      case InstitutionType.COMPLEX_MUSEUM:
        return {
          name: 'Categoría I',
         
          active: true,
        };
      case InstitutionType.MUSEUM_ROOMS:
        return [{
          name: 'Categoría II',
          
          active: true,
        }, {
          name: 'Categoría III',
          
          active: true,
        }];
      
      default:
        return;
    }
  }
}
