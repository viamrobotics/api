// package: viam.component.audioout.v1
// file: component/audioout/v1/audioout.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class PlayRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAudioData(): Uint8Array | string;
  getAudioData_asU8(): Uint8Array;
  getAudioData_asB64(): string;
  setAudioData(value: Uint8Array | string): void;

  hasAudioInfo(): boolean;
  clearAudioInfo(): void;
  getAudioInfo(): common_v1_common_pb.AudioInfo | undefined;
  setAudioInfo(value?: common_v1_common_pb.AudioInfo): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayRequest): PlayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayRequest;
  static deserializeBinaryFromReader(message: PlayRequest, reader: jspb.BinaryReader): PlayRequest;
}

export namespace PlayRequest {
  export type AsObject = {
    name: string,
    audioData: Uint8Array | string,
    audioInfo?: common_v1_common_pb.AudioInfo.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PlayStreamRequest extends jspb.Message {
  hasInit(): boolean;
  clearInit(): void;
  getInit(): PlayStreamInit | undefined;
  setInit(value?: PlayStreamInit): void;

  hasAudioChunk(): boolean;
  clearAudioChunk(): void;
  getAudioChunk(): PlayStreamChunk | undefined;
  setAudioChunk(value?: PlayStreamChunk): void;

  getPayloadCase(): PlayStreamRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayStreamRequest): PlayStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayStreamRequest;
  static deserializeBinaryFromReader(message: PlayStreamRequest, reader: jspb.BinaryReader): PlayStreamRequest;
}

export namespace PlayStreamRequest {
  export type AsObject = {
    init?: PlayStreamInit.AsObject,
    audioChunk?: PlayStreamChunk.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    INIT = 1,
    AUDIO_CHUNK = 2,
  }
}

export class PlayStreamChunk extends jspb.Message {
  getAudioData(): Uint8Array | string;
  getAudioData_asU8(): Uint8Array;
  getAudioData_asB64(): string;
  setAudioData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayStreamChunk.AsObject;
  static toObject(includeInstance: boolean, msg: PlayStreamChunk): PlayStreamChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayStreamChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayStreamChunk;
  static deserializeBinaryFromReader(message: PlayStreamChunk, reader: jspb.BinaryReader): PlayStreamChunk;
}

export namespace PlayStreamChunk {
  export type AsObject = {
    audioData: Uint8Array | string,
  }
}

export class PlayStreamInit extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAudioInfo(): boolean;
  clearAudioInfo(): void;
  getAudioInfo(): common_v1_common_pb.AudioInfo | undefined;
  setAudioInfo(value?: common_v1_common_pb.AudioInfo): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayStreamInit.AsObject;
  static toObject(includeInstance: boolean, msg: PlayStreamInit): PlayStreamInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayStreamInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayStreamInit;
  static deserializeBinaryFromReader(message: PlayStreamInit, reader: jspb.BinaryReader): PlayStreamInit;
}

export namespace PlayStreamInit {
  export type AsObject = {
    name: string,
    audioInfo?: common_v1_common_pb.AudioInfo.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PlayResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayResponse): PlayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayResponse;
  static deserializeBinaryFromReader(message: PlayResponse, reader: jspb.BinaryReader): PlayResponse;
}

export namespace PlayResponse {
  export type AsObject = {
  }
}

export class PlayStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayStreamResponse): PlayStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayStreamResponse;
  static deserializeBinaryFromReader(message: PlayStreamResponse, reader: jspb.BinaryReader): PlayStreamResponse;
}

export namespace PlayStreamResponse {
  export type AsObject = {
  }
}

