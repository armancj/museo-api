import { Readable } from 'stream';
import { FileStorageModel } from './file-storage.model';
import { FileMetadataModel } from './file-metadata.model';
import {MediaFileMetadata} from "../dto/media-file-metadata";

export interface FileStorageServiceModel {
  uploadFile(
    file: Express.Multer.File,
    filename: string,
    metadata?: MediaFileMetadata,
  ): Promise<FileStorageModel>;

  getFileMetadataById(id: string): Promise<FileMetadataModel>;

  deleteFile(fileId: string): Promise<void>;

  getFileStream(fileId: string): Promise<Readable>;

  getFileAsBase64(fileId: string): Promise<string>;
}
