
import { FileStorageServiceModel } from '../model/file-storage-service.model';
import { FileStorageService } from '../file-storage.service';
import {createProvider} from "../../common/utils/create-provider";

export const [FILE_STORAGE_SERVICE_TOKEN, FileStorageServiceProvider] =
  createProvider<FileStorageServiceModel>(FileStorageService);
