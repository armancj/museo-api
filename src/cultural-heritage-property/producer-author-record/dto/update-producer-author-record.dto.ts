import { PartialType } from '@nestjs/mapped-types';
import { CreateProducerAuthorRecordDto } from './create-producer-author-record.dto';

export class UpdateProducerAuthorRecordDto extends PartialType(
  CreateProducerAuthorRecordDto,
) {}
