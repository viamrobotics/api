// package: viam.service.lerobot.v1
// file: service/lerobot/v1/lerobot.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class RecordEpisodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDatasetName(): string;
  setDatasetName(value: string): void;

  getEpisodeIndex(): number;
  setEpisodeIndex(value: number): void;

  getSource(): RecordingSourceMap[keyof RecordingSourceMap];
  setSource(value: RecordingSourceMap[keyof RecordingSourceMap]): void;

  getWarmupTimeS(): number;
  setWarmupTimeS(value: number): void;

  getEpisodeTimeS(): number;
  setEpisodeTimeS(value: number): void;

  getResetTimeS(): number;
  setResetTimeS(value: number): void;

  getFps(): number;
  setFps(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getTask(): string;
  setTask(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEpisodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEpisodeRequest): RecordEpisodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEpisodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEpisodeRequest;
  static deserializeBinaryFromReader(message: RecordEpisodeRequest, reader: jspb.BinaryReader): RecordEpisodeRequest;
}

export namespace RecordEpisodeRequest {
  export type AsObject = {
    name: string,
    datasetName: string,
    episodeIndex: number,
    source: RecordingSourceMap[keyof RecordingSourceMap],
    warmupTimeS: number,
    episodeTimeS: number,
    resetTimeS: number,
    fps: number,
    tagsList: Array<string>,
    task: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RecordEpisodeResponse extends jspb.Message {
  getNumFrames(): number;
  setNumFrames(value: number): void;

  getActualDurationS(): number;
  setActualDurationS(value: number): void;

  getEpisodePath(): string;
  setEpisodePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEpisodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEpisodeResponse): RecordEpisodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEpisodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEpisodeResponse;
  static deserializeBinaryFromReader(message: RecordEpisodeResponse, reader: jspb.BinaryReader): RecordEpisodeResponse;
}

export namespace RecordEpisodeResponse {
  export type AsObject = {
    numFrames: number,
    actualDurationS: number,
    episodePath: string,
  }
}

export class StartRecordingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDatasetName(): string;
  setDatasetName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartRecordingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartRecordingRequest): StartRecordingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartRecordingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartRecordingRequest;
  static deserializeBinaryFromReader(message: StartRecordingRequest, reader: jspb.BinaryReader): StartRecordingRequest;
}

export namespace StartRecordingRequest {
  export type AsObject = {
    name: string,
    datasetName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StartRecordingResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartRecordingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartRecordingResponse): StartRecordingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartRecordingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartRecordingResponse;
  static deserializeBinaryFromReader(message: StartRecordingResponse, reader: jspb.BinaryReader): StartRecordingResponse;
}

export namespace StartRecordingResponse {
  export type AsObject = {
    sessionId: string,
  }
}

export class StopRecordingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRecordingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRecordingRequest): StopRecordingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRecordingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRecordingRequest;
  static deserializeBinaryFromReader(message: StopRecordingRequest, reader: jspb.BinaryReader): StopRecordingRequest;
}

export namespace StopRecordingRequest {
  export type AsObject = {
    name: string,
    sessionId: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopRecordingResponse extends jspb.Message {
  getDurationS(): number;
  setDurationS(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRecordingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopRecordingResponse): StopRecordingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRecordingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRecordingResponse;
  static deserializeBinaryFromReader(message: StopRecordingResponse, reader: jspb.BinaryReader): StopRecordingResponse;
}

export namespace StopRecordingResponse {
  export type AsObject = {
    durationS: number,
  }
}

export class ReplayEpisodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDatasetName(): string;
  setDatasetName(value: string): void;

  getEpisodeIndex(): number;
  setEpisodeIndex(value: number): void;

  getFps(): number;
  setFps(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplayEpisodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplayEpisodeRequest): ReplayEpisodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplayEpisodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplayEpisodeRequest;
  static deserializeBinaryFromReader(message: ReplayEpisodeRequest, reader: jspb.BinaryReader): ReplayEpisodeRequest;
}

export namespace ReplayEpisodeRequest {
  export type AsObject = {
    name: string,
    datasetName: string,
    episodeIndex: number,
    fps: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ReplayEpisodeResponse extends jspb.Message {
  getNumFramesReplayed(): number;
  setNumFramesReplayed(value: number): void;

  getDurationS(): number;
  setDurationS(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplayEpisodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplayEpisodeResponse): ReplayEpisodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplayEpisodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplayEpisodeResponse;
  static deserializeBinaryFromReader(message: ReplayEpisodeResponse, reader: jspb.BinaryReader): ReplayEpisodeResponse;
}

export namespace ReplayEpisodeResponse {
  export type AsObject = {
    numFramesReplayed: number,
    durationS: number,
  }
}

export class StartTeleoperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTeleopDeviceType(): string;
  setTeleopDeviceType(value: string): void;

  getFps(): number;
  setFps(value: number): void;

  getDisplayCameras(): boolean;
  setDisplayCameras(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTeleoperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartTeleoperationRequest): StartTeleoperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTeleoperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTeleoperationRequest;
  static deserializeBinaryFromReader(message: StartTeleoperationRequest, reader: jspb.BinaryReader): StartTeleoperationRequest;
}

export namespace StartTeleoperationRequest {
  export type AsObject = {
    name: string,
    teleopDeviceType: string,
    fps: number,
    displayCameras: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StartTeleoperationResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTeleoperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartTeleoperationResponse): StartTeleoperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTeleoperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTeleoperationResponse;
  static deserializeBinaryFromReader(message: StartTeleoperationResponse, reader: jspb.BinaryReader): StartTeleoperationResponse;
}

export namespace StartTeleoperationResponse {
  export type AsObject = {
    sessionId: string,
  }
}

export class StopTeleoperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTeleoperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopTeleoperationRequest): StopTeleoperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopTeleoperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTeleoperationRequest;
  static deserializeBinaryFromReader(message: StopTeleoperationRequest, reader: jspb.BinaryReader): StopTeleoperationRequest;
}

export namespace StopTeleoperationRequest {
  export type AsObject = {
    name: string,
    sessionId: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopTeleoperationResponse extends jspb.Message {
  getDurationS(): number;
  setDurationS(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTeleoperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopTeleoperationResponse): StopTeleoperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopTeleoperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTeleoperationResponse;
  static deserializeBinaryFromReader(message: StopTeleoperationResponse, reader: jspb.BinaryReader): StopTeleoperationResponse;
}

export namespace StopTeleoperationResponse {
  export type AsObject = {
    durationS: number,
  }
}

export class LoadPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPolicyRepoId(): string;
  setPolicyRepoId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadPolicyRequest): LoadPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadPolicyRequest;
  static deserializeBinaryFromReader(message: LoadPolicyRequest, reader: jspb.BinaryReader): LoadPolicyRequest;
}

export namespace LoadPolicyRequest {
  export type AsObject = {
    name: string,
    policyRepoId: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class LoadPolicyResponse extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): void;

  getPolicyType(): string;
  setPolicyType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadPolicyResponse): LoadPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadPolicyResponse;
  static deserializeBinaryFromReader(message: LoadPolicyResponse, reader: jspb.BinaryReader): LoadPolicyResponse;
}

export namespace LoadPolicyResponse {
  export type AsObject = {
    policyId: string,
    policyType: string,
  }
}

export class RunPolicyEpisodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPolicyId(): string;
  setPolicyId(value: string): void;

  getMaxSteps(): number;
  setMaxSteps(value: number): void;

  getFps(): number;
  setFps(value: number): void;

  getRecordToDataset(): boolean;
  setRecordToDataset(value: boolean): void;

  getDatasetName(): string;
  setDatasetName(value: string): void;

  getEpisodeIndex(): number;
  setEpisodeIndex(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPolicyEpisodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPolicyEpisodeRequest): RunPolicyEpisodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPolicyEpisodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPolicyEpisodeRequest;
  static deserializeBinaryFromReader(message: RunPolicyEpisodeRequest, reader: jspb.BinaryReader): RunPolicyEpisodeRequest;
}

export namespace RunPolicyEpisodeRequest {
  export type AsObject = {
    name: string,
    policyId: string,
    maxSteps: number,
    fps: number,
    recordToDataset: boolean,
    datasetName: string,
    episodeIndex: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RunPolicyEpisodeResponse extends jspb.Message {
  getNumSteps(): number;
  setNumSteps(value: number): void;

  getDurationS(): number;
  setDurationS(value: number): void;

  getEpisodePath(): string;
  setEpisodePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPolicyEpisodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunPolicyEpisodeResponse): RunPolicyEpisodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPolicyEpisodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPolicyEpisodeResponse;
  static deserializeBinaryFromReader(message: RunPolicyEpisodeResponse, reader: jspb.BinaryReader): RunPolicyEpisodeResponse;
}

export namespace RunPolicyEpisodeResponse {
  export type AsObject = {
    numSteps: number,
    durationS: number,
    episodePath: string,
  }
}

export interface RecordingSourceMap {
  RECORDING_SOURCE_UNSPECIFIED: 0;
  RECORDING_SOURCE_TELEOPERATION: 1;
  RECORDING_SOURCE_POLICY: 2;
}

export const RecordingSource: RecordingSourceMap;

