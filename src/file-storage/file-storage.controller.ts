import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { FileStorageServiceModel } from './model/file-storage-service.model';
import { MediaFileMetadata } from "./dto/media-file-metadata";

@ApiTags('file-storage')
@Controller('file-storage')
export class FileStorageController {
  constructor(
    private readonly storageService: FileStorageServiceModel,
  ) {}
  @Post('upload')
  @UseInterceptors()
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: MediaFileMetadata,
  ) {
    try {
      const fileStorage = await this.storageService.uploadFile(
        file,
        file.originalname,
        body,
      );
      return { message: `File successfully uploaded id: ${fileStorage.id}` };
    } catch (err) {
      throw new NotFoundException('File not found.');
    }
  }

  @Delete(':id')
  async deleteFile(@Param('id') fileId: string) {
    try {
      await this.storageService.deleteFile(fileId);
      return { message: 'File successfully deleted.' };
    } catch (err) {
      throw new NotFoundException('File not found.');
    }
  }

  @Get(':id')
  async getFile(@Param('id') fileId: string, @Req() req, @Res() res) {
    try {
      const file = await this.storageService.getFileMetadataById(fileId);
      const fileStream = await this.storageService.getFileStream(fileId);

      const mime = file.metadata.mimetype;
      const filename = file.filename;
      const range = req.headers.range;

      if (!range || typeof range !== 'string') {
        res.writeHead(200, {
          'Content-Length': file.length,
          'Content-Type': mime,
        });

        return fileStream.pipe(res);
      }

      const parts = range.replace(/bytes=/, '').split('-');
      const partialStart = parts[0];
      const partialEnd = parts[1];

      const start = parseInt(partialStart, 10);
      const end = partialEnd ? parseInt(partialEnd, 10) : file.length - 1;
      const chunkSize = end - start + 1;

      res.writeHead(206, {
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Disposition': `inline;filename=${filename}`,
        'Content-Range': `bytes ${start}-${end}/${file.length}`,
        'Content-Type': mime,
      });

      fileStream.pipe(res);
    } catch (err) {
      throw new NotFoundException('File not found.');
    }
  }
}
