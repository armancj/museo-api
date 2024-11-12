import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CulturalHeritagePropertyEntity, CulturalHeritagePropertyModel} from "./cultural-record/Schema/cultural-heritage-property";
import {CreateCulturalPropertyDto} from "./dto/create-cultural-property.dto";

@Injectable()
export class CulturalHeritagePropertyService {
    constructor(
        @InjectModel(CulturalHeritagePropertyEntity) private readonly culturalHeritagePropertyModel: CulturalHeritagePropertyModel,
    ) {}

    async created(createCulturalPropertyDto: CreateCulturalPropertyDto) {
        return this.culturalHeritagePropertyModel.create({...createCulturalPropertyDto});
    }

    async find() {
        return this.culturalHeritagePropertyModel.find({deleted: false}).exec();
    }

    async findOne(uuid: string) {
        const culturalProperty = await this.culturalHeritagePropertyModel.findOne({uuid, deleted: false}).exec();
        if(!culturalProperty) throw new NotFoundException('Cultural property heritage not found')
        return culturalProperty;
    }

    async remove(uuid: string) {
        await this.findOne(uuid);
        await this.culturalHeritagePropertyModel.updateOne({uuid, deleted: false}, {deleted: true}).exec()
    }
}
