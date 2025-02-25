import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommercialRegistrationService } from './commercial-registration.service';
import { CreateCommercialRegistrationDto } from './dto/create-commercial-registration.dto';
import { UpdateCommercialRegistrationDto } from './dto/update-commercial-registration.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Commercial Registration')
@Controller('commercial-registration')
export class CommercialRegistrationController {
  constructor(
    private readonly commercialRegistrationService: CommercialRegistrationService,
  ) {}

  @Post()
  create(
    @Body() createCommercialRegistrationDto: CreateCommercialRegistrationDto,
  ) {
    return this.commercialRegistrationService.create(
      createCommercialRegistrationDto,
    );
  }

  @Get()
  findAll() {
    return this.commercialRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commercialRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommercialRegistrationDto: UpdateCommercialRegistrationDto,
  ) {
    return this.commercialRegistrationService.update(
      +id,
      updateCommercialRegistrationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commercialRegistrationService.remove(+id);
  }
}
