import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxIdentificationNumberService } from './tax-identification-number.service';
import { CreateTaxIdentificationNumberDto } from './dto/create-tax-identification-number.dto';
import { UpdateTaxIdentificationNumberDto } from './dto/update-tax-identification-number.dto';

@Controller('tax-identification-number')
export class TaxIdentificationNumberController {
  constructor(private readonly taxIdentificationNumberService: TaxIdentificationNumberService) {}

  @Post()
  create(@Body() createTaxIdentificationNumberDto: CreateTaxIdentificationNumberDto) {
    return this.taxIdentificationNumberService.create(createTaxIdentificationNumberDto);
  }

  @Get()
  findAll() {
    return this.taxIdentificationNumberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxIdentificationNumberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxIdentificationNumberDto: UpdateTaxIdentificationNumberDto) {
    return this.taxIdentificationNumberService.update(+id, updateTaxIdentificationNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxIdentificationNumberService.remove(+id);
  }
}
