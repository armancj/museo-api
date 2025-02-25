import { Injectable } from '@nestjs/common';
import { CreateExtraInformationDto } from './dto/create-extra-information.dto';
import { UpdateExtraInformationDto } from './dto/update-extra-information.dto';

@Injectable()
export class ExtraInformationService {
  create(createExtraInformationDto: CreateExtraInformationDto) {
    return 'This action adds a new extraInformation';
  }

  findAll() {
    return `This action returns all extraInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extraInformation`;
  }

  update(id: number, updateExtraInformationDto: UpdateExtraInformationDto) {
    return `This action updates a #${id} extraInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} extraInformation`;
  }
}
