import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';

@Controller('cultural-notes')
export class CulturalNotesController {
  constructor(private readonly culturalNotesService: CulturalNotesService) {}

  @Post()
  create(@Body() createCulturalNoteDto: CreateCulturalNoteDto) {
    return this.culturalNotesService.create(createCulturalNoteDto);
  }

  @Get()
  findAll() {
    return this.culturalNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.culturalNotesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCulturalNoteDto: UpdateCulturalNoteDto,
  ) {
    return this.culturalNotesService.update(+id, updateCulturalNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.culturalNotesService.remove(+id);
  }
}
