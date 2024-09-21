import { Readable } from 'stream';
import { FileMetadataModel } from '../model/file-metadata.model';
import { FileStorageModel } from '../model/file-storage.model';

export class FileStorageMockService {
  uploadFile(): Promise<FileStorageModel> {
    return Promise.resolve({ id: 'avatar' });
  }
  getFileMetadataById(): Promise<FileMetadataModel> {
    return Promise.resolve({
      filename: 'filename',
      length: 1000,
      metadata: {
        mimetype: 'jpg',
      },
    });
  }
  deleteFile(): Promise<void> {
    return Promise.resolve();
  }
  getFileStream(): Promise<Readable> {
    return Promise.resolve(new Readable());
  }
  getFileAsBase64(): Promise<string> {
    return Promise.resolve('base64');
  }
}
