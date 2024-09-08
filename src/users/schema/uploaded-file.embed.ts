import { Prop } from '@nestjs/mongoose';
import { UploadedFile } from '../models/user.model';

export class UploadedFileEmbed implements UploadedFile {
  @Prop()
  id: string;

  @Prop()
  nameFile: string;
}
