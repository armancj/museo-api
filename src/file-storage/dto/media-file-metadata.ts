import { ArgumentMetadata, Paramtype } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common/interfaces/type.interface';

export enum MediaType {
  MEDIA_PROFILE = 'MEDIA_PROFILE',
  MEDIA_DNI_ANV = 'MEDIA_DNI_ANV',
  MEDIA_DNI_REV = 'MEDIA_DNI_REV',
}

interface FileMetadata {
  originalName: string;
  mimeType: string;
  size: number;
  uploadDate: Date;
}
export interface CombinedMetadata extends FileMetadata, ArgumentMetadata {}
export class MediaFileMetadata implements CombinedMetadata {
  data: string | undefined;
  metatype: Type<any> | undefined;
  mimeType: string;
  originalName: string;
  size: number;
  type: Paramtype;
  uploadDate: Date;
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
