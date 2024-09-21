import { IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export enum MediaType {
  MEDIA_PROFILE = 'MEDIA_PROFILE',
  MEDIA_DNI_ANV = 'MEDIA_DNI_ANV',
  MEDIA_DNI_REV = 'MEDIA_DNI_REV',
}

export class MediaFileMetadata {
  @IsString()
  user?: string;
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
