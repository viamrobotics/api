// package: viam.app.build.v1
// file: app/build/v1/build.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StartBuildRequest extends jspb.Message {
  getRepo(): string;
  setRepo(value: string): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): string;
  setRef(value: string): void;

  clearPlatformsList(): void;
  getPlatformsList(): Array<string>;
  setPlatformsList(value: Array<string>): void;
  addPlatforms(value: string, index?: number): string;

  getModuleId(): string;
  setModuleId(value: string): void;

  getModuleVersion(): string;
  setModuleVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartBuildRequest): StartBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBuildRequest;
  static deserializeBinaryFromReader(message: StartBuildRequest, reader: jspb.BinaryReader): StartBuildRequest;
}

export namespace StartBuildRequest {
  export type AsObject = {
    repo: string,
    ref: string,
    platformsList: Array<string>,
    moduleId: string,
    moduleVersion: string,
  }
}

export class StartBuildResponse extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartBuildResponse): StartBuildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBuildResponse;
  static deserializeBinaryFromReader(message: StartBuildResponse, reader: jspb.BinaryReader): StartBuildResponse;
}

export namespace StartBuildResponse {
  export type AsObject = {
    buildId: string,
  }
}

export class GetLogsRequest extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsRequest): GetLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsRequest;
  static deserializeBinaryFromReader(message: GetLogsRequest, reader: jspb.BinaryReader): GetLogsRequest;
}

export namespace GetLogsRequest {
  export type AsObject = {
    buildId: string,
    platform: string,
  }
}

export class GetLogsResponse extends jspb.Message {
  getBuildStep(): string;
  setBuildStep(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsResponse): GetLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsResponse;
  static deserializeBinaryFromReader(message: GetLogsResponse, reader: jspb.BinaryReader): GetLogsResponse;
}

export namespace GetLogsResponse {
  export type AsObject = {
    buildStep: string,
    data: string,
  }
}

export class JobInfo extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getStatus(): JobStatusMap[keyof JobStatusMap];
  setStatus(value: JobStatusMap[keyof JobStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobInfo): JobInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInfo;
  static deserializeBinaryFromReader(message: JobInfo, reader: jspb.BinaryReader): JobInfo;
}

export namespace JobInfo {
  export type AsObject = {
    buildId: string,
    platform: string,
    version: string,
    status: JobStatusMap[keyof JobStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  hasMaxJobsLength(): boolean;
  clearMaxJobsLength(): void;
  getMaxJobsLength(): number;
  setMaxJobsLength(value: number): void;

  hasBuildId(): boolean;
  clearBuildId(): void;
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    moduleId: string,
    maxJobsLength: number,
    buildId: string,
  }
}

export class ListJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<JobInfo>;
  setJobsList(value: Array<JobInfo>): void;
  addJobs(value?: JobInfo, index?: number): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<JobInfo.AsObject>,
  }
}

export interface JobStatusMap {
  JOB_STATUS_UNSPECIFIED: 0;
  JOB_STATUS_IN_PROGRESS: 1;
  JOB_STATUS_FAILED: 2;
  JOB_STATUS_DONE: 3;
}

export const JobStatus: JobStatusMap;

