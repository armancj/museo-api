import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as sharp from 'sharp';
import { FILE_STORAGE_SERVICE_TOKEN } from '../providers/file-storage-service.provider';
import { FileStorageServiceModel } from '../model/file-storage-service.model';
import { MediaFileMetadata } from '../dto/media-file-metadata';
import { FileStorageModel } from '../model/file-storage.model';

@Injectable()
export class ImageProcessingPipe
  implements PipeTransform<Express.Multer.File, Promise<FileStorageModel>>
{
  constructor(
    @Inject(FILE_STORAGE_SERVICE_TOKEN)
    private readonly storageService: FileStorageServiceModel,
  ) {}

  async transform(
    file: Express.Multer.File,
    metadataArgument: ArgumentMetadata,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed types are: ${allowedMimeTypes.join(', ').replace(/image\//g, '')}`,
      );
    }

    const filename = `${Date.now()}-${file.originalname}.webp`;

    const metadata: MediaFileMetadata = {
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      uploadDate: new Date(),
      ...metadataArgument,
    } as MediaFileMetadata;

    const processedImageBuffer = await sharp(file.buffer)
      .resize(800)
      .webp({ effort: 3 })
      .toBuffer();

    return await this.storageService.uploadFile(
      { ...file, buffer: processedImageBuffer },
      filename,
      metadata,
    );
  }
}
