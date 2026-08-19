import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FILE_STORAGE_SERVICE_TOKEN } from './providers/file-storage-service.provider';
import { FileStorageServiceModel } from './model/file-storage-service.model';
import { FileUploadDto } from './dto/media-file-metadata';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../shared/event-emitter/event-emitter.const';
import { Request, Response } from 'express';
import { Auth } from '../auth/decorator';
import { UserRoles } from '../users/enum/user-roles.enum';
import {
  MAX_UPLOAD_BYTES,
  contentDispositionInline,
  parseByteRange,
  uploadFileFilter,
} from './file-storage.upload';

@ApiTags('FileStorage')
@Controller('file-storage')
export class FileStorageController {
  private readonly logger = new Logger(FileStorageController.name);

  constructor(
    @Inject(FILE_STORAGE_SERVICE_TOKEN)
    private readonly storageService: FileStorageServiceModel,
  ) {}
  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: MAX_UPLOAD_BYTES },
      fileFilter: uploadFileFilter,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File to store',
    type: FileUploadDto,
  })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    try {
      const fileStorage = await this.storageService.uploadFile(file, file.originalname);
      return { message: `File successfully uploaded id: ${fileStorage.id}` };
    } catch (err) {
      // The cause belongs in the log, not in the response body.
      this.logger.error(`Upload of "${file.originalname}" failed`, err as Error);
      throw new InternalServerErrorException('The file could not be stored.');
    }
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @OnEvent(EventEmitter.fileDelete)
  @Delete(':id')
  async deleteFile(@Param('id') fileId: string) {
    try {
      await this.storageService.deleteFile(fileId);
      return { message: 'File successfully deleted.' };
    } catch (err) {
      this.logger.error(`Delete of file ${fileId} failed`, err as Error);
      throw new NotFoundException('File not found.');
    }
  }

  // Left unauthenticated on purpose: the panel renders these ids straight into
  // <img src>, and the browser cannot attach an Authorization header there.
  // Locking it down requires signed URLs (see audit item API-01).
  @Get(':id')
  async getFile(@Param('id') fileId: string, @Req() req: Request, @Res() res: Response) {
    try {
      const file = await this.storageService.getFileMetadataById(fileId);

      if (!file) {
        throw new NotFoundException(`File with ID ${fileId} not found`);
      }

      const fileStream = await this.storageService.getFileStream(fileId);

      const mime =
        file.metadata?.mimeType || (file.metadata as any)?.mimetype || 'application/octet-stream';

      const filename = file.filename;
      const range = req.headers.range;

      if (!range || typeof range !== 'string') {
        res.writeHead(200, {
          'Content-Length': file.length,
          'Content-Type': mime,
          'Content-Disposition': contentDispositionInline(filename),
          'X-Content-Type-Options': 'nosniff',
        });

        return fileStream.pipe(res);
      }

      const parsed = parseByteRange(range, file.length);

      if (!parsed) {
        // RFC 7233: an unsatisfiable range gets 416 plus the real size.
        res.writeHead(416, { 'Content-Range': `bytes */${file.length}` });
        return res.end();
      }

      const { start, end } = parsed;

      res.writeHead(206, {
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
        'Content-Disposition': contentDispositionInline(filename),
        'X-Content-Type-Options': 'nosniff',
        'Content-Range': `bytes ${start}-${end}/${file.length}`,
        'Content-Type': mime,
      });

      fileStream.pipe(res);
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }
      this.logger.error(`Serving file ${fileId} failed`, err as Error);
      throw new NotFoundException('File not found.');
    }
  }
}
