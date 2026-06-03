// package: viam.app.dataset.v1
// file: app/dataset/v1/dataset.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Dataset extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  hasTimeCreated(): boolean;
  clearTimeCreated(): void;
  getTimeCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): DatasetTypeMap[keyof DatasetTypeMap];
  setType(value: DatasetTypeMap[keyof DatasetTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    id: string,
    name: string,
    organizationId: string,
    timeCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: DatasetTypeMap[keyof DatasetTypeMap],
  }
}

export class CreateDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DatasetTypeMap[keyof DatasetTypeMap];
  setType(value: DatasetTypeMap[keyof DatasetTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    name: string,
    organizationId: string,
    type: DatasetTypeMap[keyof DatasetTypeMap],
  }
}

export class CreateDatasetResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetResponse): CreateDatasetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetResponse;
  static deserializeBinaryFromReader(message: CreateDatasetResponse, reader: jspb.BinaryReader): CreateDatasetResponse;
}

export namespace CreateDatasetResponse {
  export type AsObject = {
    id: string,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetResponse): DeleteDatasetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetResponse;
  static deserializeBinaryFromReader(message: DeleteDatasetResponse, reader: jspb.BinaryReader): DeleteDatasetResponse;
}

export namespace DeleteDatasetResponse {
  export type AsObject = {
  }
}

export class RenameDatasetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameDatasetRequest): RenameDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameDatasetRequest;
  static deserializeBinaryFromReader(message: RenameDatasetRequest, reader: jspb.BinaryReader): RenameDatasetRequest;
}

export namespace RenameDatasetRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class RenameDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameDatasetResponse): RenameDatasetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameDatasetResponse;
  static deserializeBinaryFromReader(message: RenameDatasetResponse, reader: jspb.BinaryReader): RenameDatasetResponse;
}

export namespace RenameDatasetResponse {
  export type AsObject = {
  }
}

export class ListDatasetsByOrganizationIDRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DatasetTypeMap[keyof DatasetTypeMap];
  setType(value: DatasetTypeMap[keyof DatasetTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsByOrganizationIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsByOrganizationIDRequest): ListDatasetsByOrganizationIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsByOrganizationIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsByOrganizationIDRequest;
  static deserializeBinaryFromReader(message: ListDatasetsByOrganizationIDRequest, reader: jspb.BinaryReader): ListDatasetsByOrganizationIDRequest;
}

export namespace ListDatasetsByOrganizationIDRequest {
  export type AsObject = {
    organizationId: string,
    type: DatasetTypeMap[keyof DatasetTypeMap],
  }
}

export class ListDatasetsByOrganizationIDResponse extends jspb.Message {
  clearDatasetsList(): void;
  getDatasetsList(): Array<Dataset>;
  setDatasetsList(value: Array<Dataset>): void;
  addDatasets(value?: Dataset, index?: number): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsByOrganizationIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsByOrganizationIDResponse): ListDatasetsByOrganizationIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsByOrganizationIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsByOrganizationIDResponse;
  static deserializeBinaryFromReader(message: ListDatasetsByOrganizationIDResponse, reader: jspb.BinaryReader): ListDatasetsByOrganizationIDResponse;
}

export namespace ListDatasetsByOrganizationIDResponse {
  export type AsObject = {
    datasetsList: Array<Dataset.AsObject>,
  }
}

export class ListDatasetsByIDsRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsByIDsRequest): ListDatasetsByIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsByIDsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsByIDsRequest, reader: jspb.BinaryReader): ListDatasetsByIDsRequest;
}

export namespace ListDatasetsByIDsRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class ListDatasetsByIDsResponse extends jspb.Message {
  clearDatasetsList(): void;
  getDatasetsList(): Array<Dataset>;
  setDatasetsList(value: Array<Dataset>): void;
  addDatasets(value?: Dataset, index?: number): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsByIDsResponse): ListDatasetsByIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsByIDsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsByIDsResponse, reader: jspb.BinaryReader): ListDatasetsByIDsResponse;
}

export namespace ListDatasetsByIDsResponse {
  export type AsObject = {
    datasetsList: Array<Dataset.AsObject>,
  }
}

export class MergeDatasetsRequest extends jspb.Message {
  clearDatasetIdsList(): void;
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  addDatasetIds(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeDatasetsRequest): MergeDatasetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeDatasetsRequest;
  static deserializeBinaryFromReader(message: MergeDatasetsRequest, reader: jspb.BinaryReader): MergeDatasetsRequest;
}

export namespace MergeDatasetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    name: string,
    organizationId: string,
  }
}

export class MergeDatasetsResponse extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MergeDatasetsResponse): MergeDatasetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeDatasetsResponse;
  static deserializeBinaryFromReader(message: MergeDatasetsResponse, reader: jspb.BinaryReader): MergeDatasetsResponse;
}

export namespace MergeDatasetsResponse {
  export type AsObject = {
    datasetId: string,
  }
}

export class StartSequenceDatasetExportRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSequenceDatasetExportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartSequenceDatasetExportRequest): StartSequenceDatasetExportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSequenceDatasetExportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSequenceDatasetExportRequest;
  static deserializeBinaryFromReader(message: StartSequenceDatasetExportRequest, reader: jspb.BinaryReader): StartSequenceDatasetExportRequest;
}

export namespace StartSequenceDatasetExportRequest {
  export type AsObject = {
    datasetId: string,
  }
}

export class StartSequenceDatasetExportResponse extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSequenceDatasetExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartSequenceDatasetExportResponse): StartSequenceDatasetExportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSequenceDatasetExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSequenceDatasetExportResponse;
  static deserializeBinaryFromReader(message: StartSequenceDatasetExportResponse, reader: jspb.BinaryReader): StartSequenceDatasetExportResponse;
}

export namespace StartSequenceDatasetExportResponse {
  export type AsObject = {
    jobId: string,
  }
}

export class GetSequenceDatasetExportRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSequenceDatasetExportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSequenceDatasetExportRequest): GetSequenceDatasetExportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSequenceDatasetExportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSequenceDatasetExportRequest;
  static deserializeBinaryFromReader(message: GetSequenceDatasetExportRequest, reader: jspb.BinaryReader): GetSequenceDatasetExportRequest;
}

export namespace GetSequenceDatasetExportRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class GetSequenceDatasetExportResponse extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getStatus(): SequenceDatasetExportStatusMap[keyof SequenceDatasetExportStatusMap];
  setStatus(value: SequenceDatasetExportStatusMap[keyof SequenceDatasetExportStatusMap]): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  hasExpiresAt(): boolean;
  clearExpiresAt(): void;
  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSequenceDatasetExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSequenceDatasetExportResponse): GetSequenceDatasetExportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSequenceDatasetExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSequenceDatasetExportResponse;
  static deserializeBinaryFromReader(message: GetSequenceDatasetExportResponse, reader: jspb.BinaryReader): GetSequenceDatasetExportResponse;
}

export namespace GetSequenceDatasetExportResponse {
  export type AsObject = {
    jobId: string,
    status: SequenceDatasetExportStatusMap[keyof SequenceDatasetExportStatusMap],
    downloadUrl: string,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorMessage: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface DatasetTypeMap {
  DATASET_TYPE_BINARY_DATA: 0;
  DATASET_TYPE_SEQUENCE_DATA: 1;
}

export const DatasetType: DatasetTypeMap;

export interface SequenceDatasetExportStatusMap {
  SEQUENCE_DATASET_EXPORT_STATUS_UNSPECIFIED: 0;
  SEQUENCE_DATASET_EXPORT_STATUS_RUNNING: 1;
  SEQUENCE_DATASET_EXPORT_STATUS_COMPLETED: 2;
  SEQUENCE_DATASET_EXPORT_STATUS_FAILED: 3;
}

export const SequenceDatasetExportStatus: SequenceDatasetExportStatusMap;

