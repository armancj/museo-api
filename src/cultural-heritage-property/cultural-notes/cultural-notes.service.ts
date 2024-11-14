import { Injectable } from '@nestjs/common';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';

@Injectable()
export class CulturalNotesService {
  create(createCulturalNoteDto: CreateCulturalNoteDto) {
    return 'This action adds a new culturalNote';
  }

  findAll() {
    return `This action returns all culturalNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} culturalNote`;
  }

  update(id: number, updateCulturalNoteDto: UpdateCulturalNoteDto) {
    return `This action updates a #${id} culturalNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} culturalNote`;
  }
}
