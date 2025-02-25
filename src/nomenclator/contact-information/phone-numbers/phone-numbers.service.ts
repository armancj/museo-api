import { Injectable } from '@nestjs/common';
import { CreatePhoneNumberDto } from './dto/create-phone-number.dto';
import { UpdatePhoneNumberDto } from './dto/update-phone-number.dto';

@Injectable()
export class PhoneNumbersService {
  create(createPhoneNumberDto: CreatePhoneNumberDto) {
    return 'This action adds a new phoneNumber';
  }

  findAll() {
    return `This action returns all phoneNumbers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneNumber`;
  }

  update(id: number, updatePhoneNumberDto: UpdatePhoneNumberDto) {
    return `This action updates a #${id} phoneNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} phoneNumber`;
  }
}
