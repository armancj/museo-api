import {NonFunctionProperties} from "../../common/interfaces/manipulate-properties";


export interface FileStorageModel {
  id: string;
}

export type FileStoragePropertiesModel =
  NonFunctionProperties<FileStorageModel>;
