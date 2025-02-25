import { Injectable } from '@nestjs/common';
import { CreateTaxIdentificationNumberDto } from './dto/create-tax-identification-number.dto';
import { UpdateTaxIdentificationNumberDto } from './dto/update-tax-identification-number.dto';

@Injectable()
export class TaxIdentificationNumberService {
  create(createTaxIdentificationNumberDto: CreateTaxIdentificationNumberDto) {
    return 'This action adds a new taxIdentificationNumber';
  }

  findAll() {
    return `This action returns all taxIdentificationNumber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxIdentificationNumber`;
  }

  update(id: number, updateTaxIdentificationNumberDto: UpdateTaxIdentificationNumberDto) {
    return `This action updates a #${id} taxIdentificationNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxIdentificationNumber`;
  }
}
