import { Controller, Get, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from "@nestjs/common";
import { AssociatedDocumentationService } from './associated-documentation.service';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';

@Controller('associated-documentation')
export class AssociatedDocumentationController {
  constructor(private readonly associatedDocumentationService: AssociatedDocumentationService) {}

  @Put()
  create(@Body() createAssociatedDocumentationDto: CreateAssociatedDocumentationDto) {
    return this.associatedDocumentationService.create(createAssociatedDocumentationDto);
  }

  @Get()
  findAll() {
    return this.associatedDocumentationService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.associatedDocumentationService.findOne(+uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto) {
    return this.associatedDocumentationService.update(uuid, updateAssociatedDocumentationDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.associatedDocumentationService.remove(uuid);
  }
}
