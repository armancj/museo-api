import { IsIn, IsString } from 'class-validator';

export enum MediaType {
  MEDIA_PROFILE = 'MEDIA_PROFILE',
  MEDIA_DNI_ANV = 'MEDIA_DNI_ANV',
  MEDIA_DNI_REV = 'MEDIA_DNI_REV',
}

export class MediaFileMetadata {
  @IsIn([
    MediaType.MEDIA_DNI_ANV,
    MediaType.MEDIA_DNI_REV,
    MediaType.MEDIA_PROFILE,
  ])
  reference: MediaType;
  @IsString()
  user?: string;
}
