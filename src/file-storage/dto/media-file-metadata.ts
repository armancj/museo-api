import { IsIn, IsString } from 'class-validator';



export class MediaFileMetadata {
  @IsString()
  user?: string;
}
