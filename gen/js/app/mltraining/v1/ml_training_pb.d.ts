// package: viam.app.mltraining.v1
// file: app/mltraining/v1/ml_training.proto

import * as jspb from "google-protobuf";
import * as app_data_v1_data_pb from "../../../app/data/v1/data_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tagger_v1_tagger_pb from "../../../tagger/v1/tagger_pb";

export class SubmitTrainingJobRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): app_data_v1_data_pb.Filter | undefined;
  setFilter(value?: app_data_v1_data_pb.Filter): void;

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
    filter?: app_data_v1_data_pb.Filter.AsObject,
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
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): SubmitTrainingJobRequest | undefined;
  setRequest(value?: SubmitTrainingJobRequest): void;

  getStatus(): TrainingStatusMap[keyof TrainingStatusMap];
  setStatus(value: TrainingStatusMap[keyof TrainingStatusMap]): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSyncedModelId(): string;
  setSyncedModelId(value: string): void;

  getUserEmail(): string;
  setUserEmail(value: string): void;

  getId(): string;
  setId(value: string): void;

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
    request?: SubmitTrainingJobRequest.AsObject,
    status: TrainingStatusMap[keyof TrainingStatusMap],
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    syncedModelId: string,
    userEmail: string,
    id: string,
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

export interface ModelTypeMap {
  MODEL_TYPE_UNSPECIFIED: 0;
  MODEL_TYPE_SINGLE_LABEL_CLASSIFICATION: 1;
  MODEL_TYPE_MULTI_LABEL_CLASSIFICATION: 2;
  MODEL_TYPE_OBJECT_DETECTION: 3;
}

export const ModelType: ModelTypeMap;

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

