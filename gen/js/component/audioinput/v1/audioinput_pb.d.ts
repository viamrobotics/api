// package: viam.component.audioinput.v1
// file: component/audioinput/v1/audioinput.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_httpbody_pb from "../../../google/api/httpbody_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class RecordRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordRequest): RecordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordRequest;
  static deserializeBinaryFromReader(message: RecordRequest, reader: jspb.BinaryReader): RecordRequest;
}

export namespace RecordRequest {
  export type AsObject = {
    name: string,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class AudioChunkInfo extends jspb.Message {
  getSampleFormat(): SampleFormatMap[keyof SampleFormatMap];
  setSampleFormat(value: SampleFormatMap[keyof SampleFormatMap]): void;

  getChannels(): number;
  setChannels(value: number): void;

  getSamplingRate(): number;
  setSamplingRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioChunkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AudioChunkInfo): AudioChunkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioChunkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioChunkInfo;
  static deserializeBinaryFromReader(message: AudioChunkInfo, reader: jspb.BinaryReader): AudioChunkInfo;
}

export namespace AudioChunkInfo {
  export type AsObject = {
    sampleFormat: SampleFormatMap[keyof SampleFormatMap],
    channels: number,
    samplingRate: number,
  }
}

export class AudioChunk extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLength(): number;
  setLength(value: number): void;

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
    data: Uint8Array | string,
    length: number,
  }
}

export class ChunksRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSampleFormat(): SampleFormatMap[keyof SampleFormatMap];
  setSampleFormat(value: SampleFormatMap[keyof SampleFormatMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChunksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChunksRequest): ChunksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChunksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChunksRequest;
  static deserializeBinaryFromReader(message: ChunksRequest, reader: jspb.BinaryReader): ChunksRequest;
}

export namespace ChunksRequest {
  export type AsObject = {
    name: string,
    sampleFormat: SampleFormatMap[keyof SampleFormatMap],
  }
}

export class ChunksResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): AudioChunkInfo | undefined;
  setInfo(value?: AudioChunkInfo): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): AudioChunk | undefined;
  setChunk(value?: AudioChunk): void;

  getTypeCase(): ChunksResponse.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChunksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChunksResponse): ChunksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChunksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChunksResponse;
  static deserializeBinaryFromReader(message: ChunksResponse, reader: jspb.BinaryReader): ChunksResponse;
}

export namespace ChunksResponse {
  export type AsObject = {
    info?: AudioChunkInfo.AsObject,
    chunk?: AudioChunk.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    INFO = 1,
    CHUNK = 2,
  }
}

export class PropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertiesRequest): PropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertiesRequest;
  static deserializeBinaryFromReader(message: PropertiesRequest, reader: jspb.BinaryReader): PropertiesRequest;
}

export namespace PropertiesRequest {
  export type AsObject = {
    name: string,
  }
}

export class PropertiesResponse extends jspb.Message {
  getChannelCount(): number;
  setChannelCount(value: number): void;

  hasLatency(): boolean;
  clearLatency(): void;
  getLatency(): google_protobuf_duration_pb.Duration | undefined;
  setLatency(value?: google_protobuf_duration_pb.Duration): void;

  getSampleRate(): number;
  setSampleRate(value: number): void;

  getSampleSize(): number;
  setSampleSize(value: number): void;

  getIsBigEndian(): boolean;
  setIsBigEndian(value: boolean): void;

  getIsFloat(): boolean;
  setIsFloat(value: boolean): void;

  getIsInterleaved(): boolean;
  setIsInterleaved(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertiesResponse): PropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertiesResponse;
  static deserializeBinaryFromReader(message: PropertiesResponse, reader: jspb.BinaryReader): PropertiesResponse;
}

export namespace PropertiesResponse {
  export type AsObject = {
    channelCount: number,
    latency?: google_protobuf_duration_pb.Duration.AsObject,
    sampleRate: number,
    sampleSize: number,
    isBigEndian: boolean,
    isFloat: boolean,
    isInterleaved: boolean,
  }
}

export interface SampleFormatMap {
  SAMPLE_FORMAT_UNSPECIFIED: 0;
  SAMPLE_FORMAT_INT16_INTERLEAVED: 1;
  SAMPLE_FORMAT_FLOAT32_INTERLEAVED: 2;
}

export const SampleFormat: SampleFormatMap;

