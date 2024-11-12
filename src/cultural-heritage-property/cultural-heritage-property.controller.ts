import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CulturalHeritagePropertyService} from "./cultural-heritage-property.service";
import {CreateCulturalPropertyDto} from "./dto/create-cultural-property.dto";

@ApiTags('CulturalProperty')
@Controller('cultural-heritage-property')
export class CulturalHeritagePropertyController {


    constructor(private readonly culturalHeritagePropertyService: CulturalHeritagePropertyService) {
    }

    @Post()
    async create(@Body() createCulturalPropertyDto: CreateCulturalPropertyDto){
        return this.culturalHeritagePropertyService.created(createCulturalPropertyDto);
    }


    @Get()
    async find() {
        return []
    }

    @Get(':uuid')
    async findOne(
        @Param('uuid') uuid: string) {
        return uuid
    }

    @Delete(':uuid')
    async remove(@Param('uuid') uuid: string): Promise<boolean> {
        return true;
    }
}
