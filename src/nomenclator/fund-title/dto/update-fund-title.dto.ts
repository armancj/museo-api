import { PartialType } from '@nestjs/swagger';
import { CreateFundTitleDto } from './create-fund-title.dto';

export class UpdateFundTitleDto extends PartialType(CreateFundTitleDto) {}