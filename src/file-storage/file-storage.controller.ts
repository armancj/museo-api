import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiBody, ApiConsumes, ApiTags} from '@nestjs/swagger';
import { FILE_STORAGE_SERVICE_TOKEN } from './providers/file-storage-service.provider';
import { FileStorageServiceModel } from './model/file-storage-service.model';
import {FileUploadDto} from "./dto/media-file-metadata";
import {OnEvent} from "@nestjs/event-emitter";
import {EventEmitter} from "../shared/event-emitter/event-emitter.const";


@ApiTags('file-storage')
@Controller('file-storage')
export class FileStorageController {
  constructor(
    @Inject(FILE_STORAGE_SERVICE_TOKEN)
    private readonly storageService: FileStorageServiceModel,
  ) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: FileUploadDto,
  ) {
    try {
      const fileStorage = await this.storageService.uploadFile(
        file,
        file.originalname,
      );
      return { message: `File successfully uploaded id: ${fileStorage.id}` };
    } catch (err) {
      throw new NotFoundException('File not found.');
    }
  }

  @OnEvent(EventEmitter.fileDelete)
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

      const mime = file.metadata.mimeType;
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
