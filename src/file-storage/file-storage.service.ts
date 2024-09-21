import { Inject, Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { FileMetadataModel } from './model/file-metadata.model';
import { FileStorageServiceModel } from './model/file-storage-service.model';
import { FileStorageModel } from './model/file-storage.model';
import { FILE_STORAGE_REPOSITORY_TOKEN } from './providers/file-storage-repository.provider';
import { FileStorageRepositoryModel } from './model/file-storage-repository.model';
import {MediaFileMetadata} from "./dto/media-file-metadata";
import {OnEvent} from "@nestjs/event-emitter";
import {EventEmitter} from "../shared/event-emitter/event-emitter.const";

@Injectable()
export class FileStorageService implements FileStorageServiceModel {
  constructor(
    @Inject(FILE_STORAGE_REPOSITORY_TOKEN)
    private readonly fileStorageRepository: FileStorageRepositoryModel,
  ) {}

  uploadFile = async (
    file: Express.Multer.File,
    filename: string,
    metadata?: MediaFileMetadata,
  ): Promise<FileStorageModel> => {
    return await this.fileStorageRepository.uploadFile(
      file,
      filename,
      metadata,
    );
  };

  getFileMetadataById = async (id: string): Promise<FileMetadataModel> => {
    return await this.fileStorageRepository.getFileMetadataById(id);
  };


  deleteFile = async (fileId: string): Promise<void> => {
    return await this.fileStorageRepository.deleteFile(fileId);
  };

  getFileStream = async (fileId: string): Promise<Readable> => {
    return await this.fileStorageRepository.getFileStream(fileId);
  };

  async getFileAsBase64(fileId: string): Promise<string> {
    const fileStream = await this.getFileStream(fileId);

    const chunks: Uint8Array[] = [];
    for await (const chunk of fileStream) {
      chunks.push(new Uint8Array(chunk));
    }

    const fileContent = Buffer.concat(chunks);
    return fileContent.toString('base64');
  }
}
