import { PartialType } from '@nestjs/mapped-types';
import { CreateExtraInformationDto } from './create-extra-information.dto';

export class UpdateExtraInformationDto extends PartialType(CreateExtraInformationDto) {}
