import { PartialType } from '@nestjs/swagger';
import { CreateProducerAuthorRecordDto } from './create-producer-author-record.dto';

export class UpdateProducerAuthorRecordDto extends PartialType(
  CreateProducerAuthorRecordDto,
) {}
