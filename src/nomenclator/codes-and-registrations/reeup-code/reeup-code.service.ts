import { Injectable } from '@nestjs/common';
import { CreateReeupCodeDto } from './dto/create-reeup-code.dto';
import { UpdateReeupCodeDto } from './dto/update-reeup-code.dto';

@Injectable()
export class ReeupCodeService {
  create(createReeupCodeDto: CreateReeupCodeDto) {
    return 'This action adds a new reeupCode';
  }

  findAll() {
    return `This action returns all reeupCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reeupCode`;
  }

  update(id: number, updateReeupCodeDto: UpdateReeupCodeDto) {
    return `This action updates a #${id} reeupCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} reeupCode`;
  }
}
