import { Injectable } from '@nestjs/common';
import { CreateCommercialRegistrationDto } from './dto/create-commercial-registration.dto';
import { UpdateCommercialRegistrationDto } from './dto/update-commercial-registration.dto';

@Injectable()
export class CommercialRegistrationService {
  create(createCommercialRegistrationDto: CreateCommercialRegistrationDto) {
    return 'This action adds a new commercialRegistration';
  }

  findAll() {
    return `This action returns all commercialRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commercialRegistration`;
  }

  update(id: number, updateCommercialRegistrationDto: UpdateCommercialRegistrationDto) {
    return `This action updates a #${id} commercialRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} commercialRegistration`;
  }
}
