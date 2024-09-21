import { Inject, Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { ObjectId } from 'mongodb';
import {MongoGridConnection} from "../mongo-grid/mongo.gridfs";
import {FileStorageRepositoryModel} from "../model/file-storage-repository.model";
import {MediaFileMetadata} from "../dto/media-file-metadata";
import {FileStorageModel} from "../model/file-storage.model";
import {FileMetadataModel} from "../model/file-metadata.model";
import {FileStorage} from "../entities/file-storage";

@Injectable()
export class FileStorageMongoRepository implements FileStorageRepositoryModel {
  constructor(
      @Inject(MongoGridConnection)
      private readonly mongoGridConnection: MongoGridConnection,
  ) {}

  uploadFile(
      file: Express.Multer.File,
      filename: string,
      metadata: MediaFileMetadata,
  ): Promise<FileStorageModel> {
    const readableStream = new Readable({
      read() {
        this.push(file.buffer);
        this.push(null);
      },
    });

    const uploadStream = this.mongoGridConnection
        .getGridFSBucket()
        .openUploadStream(filename, {
          metadata: {
            ...metadata,
            mimetype: file.mimetype,
          },
        });

    readableStream.pipe(uploadStream);

    return new Promise<FileStorage>((resolve, reject) => {
      uploadStream.on('finish', () => {
        uploadStream.end();
        const fileStorage = new FileStorage({ id: uploadStream.id.toString(), filename: uploadStream.filename.toString() });
        resolve(fileStorage);
      });
      uploadStream.on('error', (err) => {
        uploadStream.end();
        reject(err);
      });
    });
  }

  async getFileMetadataById(id: string): Promise<FileMetadataModel> {
    const fileId = new ObjectId(id);
    return await this.mongoGridConnection
        .getDb()
        .collection('fs.files')
        .findOne({ _id: fileId });
  }

  async deleteFile(fileId: string): Promise<void> {
    const objectId = new ObjectId(fileId);
    return await this.mongoGridConnection.getGridFSBucket().delete(objectId);
  }

  async getFileStream(fileId: string): Promise<Readable> {
    const objectId = new ObjectId(fileId);
    return this.mongoGridConnection
        .getGridFSBucket()
        .openDownloadStream(objectId);
  }
}
