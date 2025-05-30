// package: viam.app.datapipelines.v1
// file: app/datapipelines/v1/data_pipelines.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DataPipeline extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearMqlBinaryList(): void;
  getMqlBinaryList(): Array<Uint8Array | string>;
  getMqlBinaryList_asU8(): Array<Uint8Array>;
  getMqlBinaryList_asB64(): Array<string>;
  setMqlBinaryList(value: Array<Uint8Array | string>): void;
  addMqlBinary(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSchedule(): string;
  setSchedule(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipeline): DataPipeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipeline;
  static deserializeBinaryFromReader(message: DataPipeline, reader: jspb.BinaryReader): DataPipeline;
}

export namespace DataPipeline {
  export type AsObject = {
    id: string,
    organizationId: string,
    name: string,
    mqlBinaryList: Array<Uint8Array | string>,
    schedule: string,
    enabled: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDataPipelineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRequest): GetDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRequest, reader: jspb.BinaryReader): GetDataPipelineRequest;
}

export namespace GetDataPipelineRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetDataPipelineResponse extends jspb.Message {
  hasDataPipeline(): boolean;
  clearDataPipeline(): void;
  getDataPipeline(): DataPipeline | undefined;
  setDataPipeline(value?: DataPipeline): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineResponse): GetDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineResponse;
  static deserializeBinaryFromReader(message: GetDataPipelineResponse, reader: jspb.BinaryReader): GetDataPipelineResponse;
}

export namespace GetDataPipelineResponse {
  export type AsObject = {
    dataPipeline?: DataPipeline.AsObject,
  }
}

export class ListDataPipelinesRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesRequest): ListDataPipelinesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesRequest;
  static deserializeBinaryFromReader(message: ListDataPipelinesRequest, reader: jspb.BinaryReader): ListDataPipelinesRequest;
}

export namespace ListDataPipelinesRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class ListDataPipelinesResponse extends jspb.Message {
  clearDataPipelinesList(): void;
  getDataPipelinesList(): Array<DataPipeline>;
  setDataPipelinesList(value: Array<DataPipeline>): void;
  addDataPipelines(value?: DataPipeline, index?: number): DataPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesResponse): ListDataPipelinesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesResponse;
  static deserializeBinaryFromReader(message: ListDataPipelinesResponse, reader: jspb.BinaryReader): ListDataPipelinesResponse;
}

export namespace ListDataPipelinesResponse {
  export type AsObject = {
    dataPipelinesList: Array<DataPipeline.AsObject>,
  }
}

export class CreateDataPipelineRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearMqlBinaryList(): void;
  getMqlBinaryList(): Array<Uint8Array | string>;
  getMqlBinaryList_asU8(): Array<Uint8Array>;
  getMqlBinaryList_asB64(): Array<string>;
  setMqlBinaryList(value: Array<Uint8Array | string>): void;
  addMqlBinary(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSchedule(): string;
  setSchedule(value: string): void;

  hasEnableBackfill(): boolean;
  clearEnableBackfill(): void;
  getEnableBackfill(): boolean;
  setEnableBackfill(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRequest): CreateDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRequest, reader: jspb.BinaryReader): CreateDataPipelineRequest;
}

export namespace CreateDataPipelineRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    mqlBinaryList: Array<Uint8Array | string>,
    schedule: string,
    enableBackfill: boolean,
  }
}

export class CreateDataPipelineResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineResponse): CreateDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineResponse;
  static deserializeBinaryFromReader(message: CreateDataPipelineResponse, reader: jspb.BinaryReader): CreateDataPipelineResponse;
}

export namespace CreateDataPipelineResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateDataPipelineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearMqlBinaryList(): void;
  getMqlBinaryList(): Array<Uint8Array | string>;
  getMqlBinaryList_asU8(): Array<Uint8Array>;
  getMqlBinaryList_asB64(): Array<string>;
  setMqlBinaryList(value: Array<Uint8Array | string>): void;
  addMqlBinary(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSchedule(): string;
  setSchedule(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRequest): UpdateDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRequest, reader: jspb.BinaryReader): UpdateDataPipelineRequest;
}

export namespace UpdateDataPipelineRequest {
  export type AsObject = {
    id: string,
    name: string,
    mqlBinaryList: Array<Uint8Array | string>,
    schedule: string,
  }
}

export class UpdateDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineResponse): UpdateDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineResponse;
  static deserializeBinaryFromReader(message: UpdateDataPipelineResponse, reader: jspb.BinaryReader): UpdateDataPipelineResponse;
}

export namespace UpdateDataPipelineResponse {
  export type AsObject = {
  }
}

export class DeleteDataPipelineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRequest): DeleteDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRequest, reader: jspb.BinaryReader): DeleteDataPipelineRequest;
}

export namespace DeleteDataPipelineRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineResponse): DeleteDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineResponse;
  static deserializeBinaryFromReader(message: DeleteDataPipelineResponse, reader: jspb.BinaryReader): DeleteDataPipelineResponse;
}

export namespace DeleteDataPipelineResponse {
  export type AsObject = {
  }
}

export class EnableDataPipelineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableDataPipelineRequest): EnableDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableDataPipelineRequest;
  static deserializeBinaryFromReader(message: EnableDataPipelineRequest, reader: jspb.BinaryReader): EnableDataPipelineRequest;
}

export namespace EnableDataPipelineRequest {
  export type AsObject = {
    id: string,
  }
}

export class EnableDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableDataPipelineResponse): EnableDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableDataPipelineResponse;
  static deserializeBinaryFromReader(message: EnableDataPipelineResponse, reader: jspb.BinaryReader): EnableDataPipelineResponse;
}

export namespace EnableDataPipelineResponse {
  export type AsObject = {
  }
}

export class DisableDataPipelineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableDataPipelineRequest): DisableDataPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableDataPipelineRequest;
  static deserializeBinaryFromReader(message: DisableDataPipelineRequest, reader: jspb.BinaryReader): DisableDataPipelineRequest;
}

export namespace DisableDataPipelineRequest {
  export type AsObject = {
    id: string,
  }
}

export class DisableDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableDataPipelineResponse): DisableDataPipelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableDataPipelineResponse;
  static deserializeBinaryFromReader(message: DisableDataPipelineResponse, reader: jspb.BinaryReader): DisableDataPipelineResponse;
}

export namespace DisableDataPipelineResponse {
  export type AsObject = {
  }
}

export class ListDataPipelineRunsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsRequest): ListDataPipelineRunsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsRequest, reader: jspb.BinaryReader): ListDataPipelineRunsRequest;
}

export namespace ListDataPipelineRunsRequest {
  export type AsObject = {
    id: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelineRunsResponse extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): void;

  clearRunsList(): void;
  getRunsList(): Array<DataPipelineRun>;
  setRunsList(value: Array<DataPipelineRun>): void;
  addRuns(value?: DataPipelineRun, index?: number): DataPipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsResponse): ListDataPipelineRunsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsResponse, reader: jspb.BinaryReader): ListDataPipelineRunsResponse;
}

export namespace ListDataPipelineRunsResponse {
  export type AsObject = {
    pipelineId: string,
    runsList: Array<DataPipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class DataPipelineRun extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDataStartTime(): boolean;
  clearDataStartTime(): void;
  getDataStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDataEndTime(): boolean;
  clearDataEndTime(): void;
  getDataEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): DataPipelineRunStatusMap[keyof DataPipelineRunStatusMap];
  setStatus(value: DataPipelineRunStatusMap[keyof DataPipelineRunStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRun): DataPipelineRun.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRun;
  static deserializeBinaryFromReader(message: DataPipelineRun, reader: jspb.BinaryReader): DataPipelineRun;
}

export namespace DataPipelineRun {
  export type AsObject = {
    id: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: DataPipelineRunStatusMap[keyof DataPipelineRunStatusMap],
  }
}

export interface DataPipelineRunStatusMap {
  DATA_PIPELINE_RUN_STATUS_UNSPECIFIED: 0;
  DATA_PIPELINE_RUN_STATUS_SCHEDULED: 1;
  DATA_PIPELINE_RUN_STATUS_STARTED: 2;
  DATA_PIPELINE_RUN_STATUS_COMPLETED: 3;
  DATA_PIPELINE_RUN_STATUS_FAILED: 4;
}

export const DataPipelineRunStatus: DataPipelineRunStatusMap;

