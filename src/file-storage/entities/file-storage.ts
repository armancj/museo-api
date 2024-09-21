import {
  FileStorageModel,
  FileStoragePropertiesModel,
} from '../model/file-storage.model';
import {options} from "joi";

export class FileStorage implements FileStorageModel {
  id: string;
  filename: string;


  constructor(options: FileStoragePropertiesModel) {
    this.id = options.id;
    this.filename = options.filename;
  }
}
