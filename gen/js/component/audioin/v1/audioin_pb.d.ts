// package: viam.component.audioin.v1
// file: component/audioin/v1/audioin.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetAudioRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): void;

  getCodec(): string;
  setCodec(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getPreviousTimestampNanoseconds(): number;
  setPreviousTimestampNanoseconds(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAudioRequest): GetAudioRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAudioRequest;
  static deserializeBinaryFromReader(message: GetAudioRequest, reader: jspb.BinaryReader): GetAudioRequest;
}

export namespace GetAudioRequest {
  export type AsObject = {
    name: string,
    durationSeconds: number,
    codec: string,
    requestId: string,
    previousTimestampNanoseconds: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetAudioResponse extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioChunk | undefined;
  setAudio(value?: AudioChunk): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAudioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAudioResponse): GetAudioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAudioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAudioResponse;
  static deserializeBinaryFromReader(message: GetAudioResponse, reader: jspb.BinaryReader): GetAudioResponse;
}

export namespace GetAudioResponse {
  export type AsObject = {
    audio?: AudioChunk.AsObject,
    requestId: string,
  }
}

export class AudioChunk extends jspb.Message {
  getAudioData(): Uint8Array | string;
  getAudioData_asU8(): Uint8Array;
  getAudioData_asB64(): string;
  setAudioData(value: Uint8Array | string): void;

  hasAudioInfo(): boolean;
  clearAudioInfo(): void;
  getAudioInfo(): common_v1_common_pb.AudioInfo | undefined;
  setAudioInfo(value?: common_v1_common_pb.AudioInfo): void;

  getStartTimestampNanoseconds(): number;
  setStartTimestampNanoseconds(value: number): void;

  getEndTimestampNanoseconds(): number;
  setEndTimestampNanoseconds(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioChunk.AsObject;
  static toObject(includeInstance: boolean, msg: AudioChunk): AudioChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioChunk;
  static deserializeBinaryFromReader(message: AudioChunk, reader: jspb.BinaryReader): AudioChunk;
}

export namespace AudioChunk {
  export type AsObject = {
    audioData: Uint8Array | string,
    audioInfo?: common_v1_common_pb.AudioInfo.AsObject,
    startTimestampNanoseconds: number,
    endTimestampNanoseconds: number,
    sequence: number,
  }
}

