import {
  FileStorageModel,
  FileStoragePropertiesModel,
} from '../model/file-storage.model';

export class FileStorage implements FileStorageModel {
  id: string;

  constructor(options: FileStoragePropertiesModel) {
    this.id = options.id;
  }
}
