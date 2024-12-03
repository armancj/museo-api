import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FieldReviewStatusService } from './field-review-status.service';
import { CreateFieldReviewStatusDto } from './dto/create-field-review-status.dto';
import { UpdateFieldReviewStatusDto } from './dto/update-field-review-status.dto';

@Controller('field-review-status')
export class FieldReviewStatusController {
  constructor(private readonly fieldReviewStatusService: FieldReviewStatusService) {}

  @Post()
  create(@Body() createFieldReviewStatusDto: CreateFieldReviewStatusDto) {
    return this.fieldReviewStatusService.create(createFieldReviewStatusDto);
  }

  @Get()
  findAll() {
    return this.fieldReviewStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldReviewStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldReviewStatusDto: UpdateFieldReviewStatusDto) {
    return this.fieldReviewStatusService.update(+id, updateFieldReviewStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldReviewStatusService.remove(+id);
  }
}
