import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociatedDocumentationService } from './associated-documentation.service';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';

@Controller('associated-documentation')
export class AssociatedDocumentationController {
  constructor(private readonly associatedDocumentationService: AssociatedDocumentationService) {}

  @Post()
  create(@Body() createAssociatedDocumentationDto: CreateAssociatedDocumentationDto) {
    return this.associatedDocumentationService.create(createAssociatedDocumentationDto);
  }

  @Get()
  findAll() {
    return this.associatedDocumentationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associatedDocumentationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto) {
    return this.associatedDocumentationService.update(+id, updateAssociatedDocumentationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associatedDocumentationService.remove(+id);
  }
}
