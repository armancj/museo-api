import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('cultural-notes')
@Controller('cultural-notes')
export class CulturalNotesController {
  constructor(private readonly culturalNotesService: CulturalNotesService) {}

  @Put(':uuid')
  create(
    @Param('uuid') uuid: string,
    @Body() createCulturalNoteDto: CreateCulturalNoteDto,
  ) {
    return this.culturalNotesService.create(uuid, createCulturalNoteDto);
  }

  @Get()
  findAll() {
    return this.culturalNotesService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.culturalNotesService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateCulturalNoteDto: UpdateCulturalNoteDto,
  ) {
    return this.culturalNotesService.update(uuid, updateCulturalNoteDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.culturalNotesService.remove(uuid);
  }
}
