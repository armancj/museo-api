import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CulturalHeritagePropertyEntity, CulturalHeritagePropertyModel} from "./schema/cultural-heritage-property";
import {CreateCulturalPropertyDto} from "./dto/create-cultural-property.dto";

@Injectable()
export class CulturalHeritagePropertyService {
    constructor(
        @InjectModel(CulturalHeritagePropertyEntity) private readonly culturalHeritagePropertyModel: CulturalHeritagePropertyModel,
    ) {}

    created(createCulturalPropertyDto: CreateCulturalPropertyDto) {
        return createCulturalPropertyDto;
    }
}
