import { Injectable } from '@nestjs/common';
import { CreateFieldReviewStatusDto } from './dto/create-field-review-status.dto';
import { UpdateFieldReviewStatusDto } from './dto/update-field-review-status.dto';

@Injectable()
export class FieldReviewStatusService {
  create(createFieldReviewStatusDto: CreateFieldReviewStatusDto) {
    return 'This action adds a new fieldReviewStatus';
  }

  findAll() {
    return `This action returns all fieldReviewStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldReviewStatus`;
  }

  update(id: number, updateFieldReviewStatusDto: UpdateFieldReviewStatusDto) {
    return `This action updates a #${id} fieldReviewStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldReviewStatus`;
  }
}
