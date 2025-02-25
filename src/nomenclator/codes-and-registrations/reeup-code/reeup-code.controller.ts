import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReeupCodeService } from './reeup-code.service';
import { CreateReeupCodeDto } from './dto/create-reeup-code.dto';
import { UpdateReeupCodeDto } from './dto/update-reeup-code.dto';

@Controller('reeup-code')
export class ReeupCodeController {
  constructor(private readonly reeupCodeService: ReeupCodeService) {}

  @Post()
  create(@Body() createReeupCodeDto: CreateReeupCodeDto) {
    return this.reeupCodeService.create(createReeupCodeDto);
  }

  @Get()
  findAll() {
    return this.reeupCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reeupCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReeupCodeDto: UpdateReeupCodeDto) {
    return this.reeupCodeService.update(+id, updateReeupCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reeupCodeService.remove(+id);
  }
}
