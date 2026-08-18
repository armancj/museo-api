import {
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
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FILE_STORAGE_SERVICE_TOKEN } from './providers/file-storage-service.provider';
import { FileStorageServiceModel } from './model/file-storage-service.model';
import { FileUploadDto } from './dto/media-file-metadata';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../shared/event-emitter/event-emitter.const';
import { Request, Response } from 'express';
import { Auth } from '../auth/decorator';
import { UserRoles } from '../users/enum/user-roles.enum';

@ApiTags('FileStorage')
@Controller('file-storage')
export class FileStorageController {
  constructor(
    @Inject(FILE_STORAGE_SERVICE_TOKEN)
    private readonly storageService: FileStorageServiceModel,
  ) {}
  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const fileStorage = await this.storageService.uploadFile(file, file.originalname);
      return { message: `File successfully uploaded id: ${fileStorage.id}` };
    } catch (err) {
      throw new NotFoundException('File not found. ' + err);
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
      console.log(err);
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
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new NotFoundException('File not found. ' + err);
    }
  }
}
