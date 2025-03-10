import { PartialType } from '@nestjs/swagger';
import { CreateDescriptionInstrumentDto } from './create-description-instrument.dto';

export class UpdateDescriptionInstrumentDto extends PartialType(CreateDescriptionInstrumentDto) {}