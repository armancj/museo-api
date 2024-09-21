import {CombinedMetadata} from "../dto/media-file-metadata";

export interface FileMetadataModel {
  metadata: CombinedMetadata;
  filename: string;
  length: number;
}
