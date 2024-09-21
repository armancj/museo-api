import { FileStorageRepositoryModel } from '../model/file-storage-repository.model';
import { FileStorageMongoRepository } from '../repositories/file-storage-mongo.repository';
import {createProvider} from "../../common/utils/create-provider";

export const [FILE_STORAGE_REPOSITORY_TOKEN, FileStorageRepositoryProvider] =
  createProvider<FileStorageRepositoryModel>(FileStorageMongoRepository);
