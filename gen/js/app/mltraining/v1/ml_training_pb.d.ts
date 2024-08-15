// package: viam.app.mltraining.v1
// file: app/mltraining/v1/ml_training.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as tagger_v1_tagger_pb from "../../../tagger/v1/tagger_pb";

export class SubmitTrainingJobRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  getModelType(): ModelTypeMap[keyof ModelTypeMap];
  setModelType(value: ModelTypeMap[keyof ModelTypeMap]): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTrainingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTrainingJobRequest): SubmitTrainingJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTrainingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTrainingJobRequest;
  static deserializeBinaryFromReader(message: SubmitTrainingJobRequest, reader: jspb.BinaryReader): SubmitTrainingJobRequest;
}

export namespace SubmitTrainingJobRequest {
  export type AsObject = {
    datasetId: string,
    organizationId: string,
    modelName: string,
    modelVersion: string,
    modelType: ModelTypeMap[keyof ModelTypeMap],
    tagsList: Array<string>,
  }
}

export class SubmitTrainingJobResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTrainingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTrainingJobResponse): SubmitTrainingJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTrainingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTrainingJobResponse;
  static deserializeBinaryFromReader(message: SubmitTrainingJobResponse, reader: jspb.BinaryReader): SubmitTrainingJobResponse;
}

export namespace SubmitTrainingJobResponse {
  export type AsObject = {
    id: string,
  }
}

export class SubmitCustomTrainingJobRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  getRegistryItemId(): string;
  setRegistryItemId(value: string): void;

  getRegistryItemVersion(): string;
  setRegistryItemVersion(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCustomTrainingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCustomTrainingJobRequest): SubmitCustomTrainingJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitCustomTrainingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCustomTrainingJobRequest;
  static deserializeBinaryFromReader(message: SubmitCustomTrainingJobRequest, reader: jspb.BinaryReader): SubmitCustomTrainingJobRequest;
}

export namespace SubmitCustomTrainingJobRequest {
  export type AsObject = {
    datasetId: string,
    registryItemId: string,
    registryItemVersion: string,
    organizationId: string,
    modelName: string,
    modelVersion: string,
  }
}

export class SubmitCustomTrainingJobResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCustomTrainingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCustomTrainingJobResponse): SubmitCustomTrainingJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitCustomTrainingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCustomTrainingJobResponse;
  static deserializeBinaryFromReader(message: SubmitCustomTrainingJobResponse, reader: jspb.BinaryReader): SubmitCustomTrainingJobResponse;
}

export namespace SubmitCustomTrainingJobResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetTrainingJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrainingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrainingJobRequest): GetTrainingJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrainingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrainingJobRequest;
  static deserializeBinaryFromReader(message: GetTrainingJobRequest, reader: jspb.BinaryReader): GetTrainingJobRequest;
}

export namespace GetTrainingJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTrainingJobResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): TrainingJobMetadata | undefined;
  setMetadata(value?: TrainingJobMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrainingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrainingJobResponse): GetTrainingJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrainingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrainingJobResponse;
  static deserializeBinaryFromReader(message: GetTrainingJobResponse, reader: jspb.BinaryReader): GetTrainingJobResponse;
}

export namespace GetTrainingJobResponse {
  export type AsObject = {
    metadata?: TrainingJobMetadata.AsObject,
  }
}

export class ListTrainingJobsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getStatus(): TrainingStatusMap[keyof TrainingStatusMap];
  setStatus(value: TrainingStatusMap[keyof TrainingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrainingJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrainingJobsRequest): ListTrainingJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTrainingJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrainingJobsRequest;
  static deserializeBinaryFromReader(message: ListTrainingJobsRequest, reader: jspb.BinaryReader): ListTrainingJobsRequest;
}

export namespace ListTrainingJobsRequest {
  export type AsObject = {
    organizationId: string,
    status: TrainingStatusMap[keyof TrainingStatusMap],
  }
}

export class ListTrainingJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<TrainingJobMetadata>;
  setJobsList(value: Array<TrainingJobMetadata>): void;
  addJobs(value?: TrainingJobMetadata, index?: number): TrainingJobMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrainingJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrainingJobsResponse): ListTrainingJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTrainingJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrainingJobsResponse;
  static deserializeBinaryFromReader(message: ListTrainingJobsResponse, reader: jspb.BinaryReader): ListTrainingJobsResponse;
}

export namespace ListTrainingJobsResponse {
  export type AsObject = {
    jobsList: Array<TrainingJobMetadata.AsObject>,
  }
}

export class TrainingJobMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  getModelType(): ModelTypeMap[keyof ModelTypeMap];
  setModelType(value: ModelTypeMap[keyof ModelTypeMap]): void;

  getModelFramework(): ModelFrameworkMap[keyof ModelFrameworkMap];
  setModelFramework(value: ModelFrameworkMap[keyof ModelFrameworkMap]): void;

  getIsCustomJob(): boolean;
  setIsCustomJob(value: boolean): void;

  getRegistryItemId(): string;
  setRegistryItemId(value: string): void;

  getRegistryItemVersion(): string;
  setRegistryItemVersion(value: string): void;

  getStatus(): TrainingStatusMap[keyof TrainingStatusMap];
  setStatus(value: TrainingStatusMap[keyof TrainingStatusMap]): void;

  hasErrorStatus(): boolean;
  clearErrorStatus(): void;
  getErrorStatus(): google_rpc_status_pb.Status | undefined;
  setErrorStatus(value?: google_rpc_status_pb.Status): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTrainingStarted(): boolean;
  clearTrainingStarted(): void;
  getTrainingStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTrainingStarted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTrainingEnded(): boolean;
  clearTrainingEnded(): void;
  getTrainingEnded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTrainingEnded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSyncedModelId(): string;
  setSyncedModelId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingJobMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingJobMetadata): TrainingJobMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrainingJobMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingJobMetadata;
  static deserializeBinaryFromReader(message: TrainingJobMetadata, reader: jspb.BinaryReader): TrainingJobMetadata;
}

export namespace TrainingJobMetadata {
  export type AsObject = {
    id: string,
    datasetId: string,
    organizationId: string,
    modelName: string,
    modelVersion: string,
    modelType: ModelTypeMap[keyof ModelTypeMap],
    modelFramework: ModelFrameworkMap[keyof ModelFrameworkMap],
    isCustomJob: boolean,
    registryItemId: string,
    registryItemVersion: string,
    status: TrainingStatusMap[keyof TrainingStatusMap],
    errorStatus?: google_rpc_status_pb.Status.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    trainingStarted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    trainingEnded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    syncedModelId: string,
    tagsList: Array<string>,
  }
}

export class CancelTrainingJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTrainingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTrainingJobRequest): CancelTrainingJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTrainingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTrainingJobRequest;
  static deserializeBinaryFromReader(message: CancelTrainingJobRequest, reader: jspb.BinaryReader): CancelTrainingJobRequest;
}

export namespace CancelTrainingJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class CancelTrainingJobResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTrainingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTrainingJobResponse): CancelTrainingJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTrainingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTrainingJobResponse;
  static deserializeBinaryFromReader(message: CancelTrainingJobResponse, reader: jspb.BinaryReader): CancelTrainingJobResponse;
}

export namespace CancelTrainingJobResponse {
  export type AsObject = {
  }
}

export class DeleteCompletedTrainingJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompletedTrainingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompletedTrainingJobRequest): DeleteCompletedTrainingJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompletedTrainingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompletedTrainingJobRequest;
  static deserializeBinaryFromReader(message: DeleteCompletedTrainingJobRequest, reader: jspb.BinaryReader): DeleteCompletedTrainingJobRequest;
}

export namespace DeleteCompletedTrainingJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCompletedTrainingJobResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompletedTrainingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompletedTrainingJobResponse): DeleteCompletedTrainingJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompletedTrainingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompletedTrainingJobResponse;
  static deserializeBinaryFromReader(message: DeleteCompletedTrainingJobResponse, reader: jspb.BinaryReader): DeleteCompletedTrainingJobResponse;
}

export namespace DeleteCompletedTrainingJobResponse {
  export type AsObject = {
  }
}

export class TrainingJobLogEntry extends jspb.Message {
  getLevel(): string;
  setLevel(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingJobLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingJobLogEntry): TrainingJobLogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrainingJobLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingJobLogEntry;
  static deserializeBinaryFromReader(message: TrainingJobLogEntry, reader: jspb.BinaryReader): TrainingJobLogEntry;
}

export namespace TrainingJobLogEntry {
  export type AsObject = {
    level: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    message: string,
  }
}

export class GetTrainingJobLogsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrainingJobLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrainingJobLogsRequest): GetTrainingJobLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrainingJobLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrainingJobLogsRequest;
  static deserializeBinaryFromReader(message: GetTrainingJobLogsRequest, reader: jspb.BinaryReader): GetTrainingJobLogsRequest;
}

export namespace GetTrainingJobLogsRequest {
  export type AsObject = {
    id: string,
    pageToken: string,
    orgId: string,
  }
}

export class GetTrainingJobLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<TrainingJobLogEntry>;
  setLogsList(value: Array<TrainingJobLogEntry>): void;
  addLogs(value?: TrainingJobLogEntry, index?: number): TrainingJobLogEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrainingJobLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrainingJobLogsResponse): GetTrainingJobLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrainingJobLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrainingJobLogsResponse;
  static deserializeBinaryFromReader(message: GetTrainingJobLogsResponse, reader: jspb.BinaryReader): GetTrainingJobLogsResponse;
}

export namespace GetTrainingJobLogsResponse {
  export type AsObject = {
    logsList: Array<TrainingJobLogEntry.AsObject>,
    nextPageToken: string,
  }
}

export interface ModelTypeMap {
  MODEL_TYPE_UNSPECIFIED: 0;
  MODEL_TYPE_SINGLE_LABEL_CLASSIFICATION: 1;
  MODEL_TYPE_MULTI_LABEL_CLASSIFICATION: 2;
  MODEL_TYPE_OBJECT_DETECTION: 3;
}

export const ModelType: ModelTypeMap;

export interface ModelFrameworkMap {
  MODEL_FRAMEWORK_UNSPECIFIED: 0;
  MODEL_FRAMEWORK_TFLITE: 1;
  MODEL_FRAMEWORK_TENSORFLOW: 2;
  MODEL_FRAMEWORK_PYTORCH: 3;
  MODEL_FRAMEWORK_ONNX: 4;
}

export const ModelFramework: ModelFrameworkMap;

export interface TrainingStatusMap {
  TRAINING_STATUS_UNSPECIFIED: 0;
  TRAINING_STATUS_PENDING: 1;
  TRAINING_STATUS_IN_PROGRESS: 2;
  TRAINING_STATUS_COMPLETED: 3;
  TRAINING_STATUS_FAILED: 4;
  TRAINING_STATUS_CANCELED: 5;
  TRAINING_STATUS_CANCELING: 6;
}

export const TrainingStatus: TrainingStatusMap;

