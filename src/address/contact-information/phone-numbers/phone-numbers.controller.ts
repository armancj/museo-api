import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';
import { CreatePhoneNumberDto } from './dto/create-phone-number.dto';
import { UpdatePhoneNumberDto } from './dto/update-phone-number.dto';
import { Auth } from '../../../auth/decorator';
import { UserRoles } from '../../../users/enum/user-roles.enum';

@Controller('phone-numbers')
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createPhoneNumberDto: CreatePhoneNumberDto) {
    return this.phoneNumbersService.create(createPhoneNumberDto);
  }

  @Get()
  findAll() {
    return this.phoneNumbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneNumbersService.findOne(+id);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneNumberDto: UpdatePhoneNumberDto) {
    return this.phoneNumbersService.update(+id, updatePhoneNumberDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneNumbersService.remove(+id);
  }
}
