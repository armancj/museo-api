import { PartialType } from '@nestjs/swagger';
import { CreateExtraInformationDto } from './create-extra-information.dto';

export class UpdateExtraInformationDto extends PartialType(CreateExtraInformationDto) {}
