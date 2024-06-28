// package: viam.component.encoder.v1
// file: component/encoder/v1/encoder.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as tagger_v1_tagger_pb from "../../../tagger/v1/tagger_pb";

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPositionType(): boolean;
  clearPositionType(): void;
  getPositionType(): PositionTypeMap[keyof PositionTypeMap];
  setPositionType(value: PositionTypeMap[keyof PositionTypeMap]): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
    name: string,
    positionType: PositionTypeMap[keyof PositionTypeMap],
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPositionResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getPositionType(): PositionTypeMap[keyof PositionTypeMap];
  setPositionType(value: PositionTypeMap[keyof PositionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    value: number,
    positionType: PositionTypeMap[keyof PositionTypeMap],
  }
}

export class ResetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPositionRequest): ResetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPositionRequest;
  static deserializeBinaryFromReader(message: ResetPositionRequest, reader: jspb.BinaryReader): ResetPositionRequest;
}

export namespace ResetPositionRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ResetPositionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPositionResponse): ResetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPositionResponse;
  static deserializeBinaryFromReader(message: ResetPositionResponse, reader: jspb.BinaryReader): ResetPositionResponse;
}

export namespace ResetPositionResponse {
  export type AsObject = {
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesRequest): GetPropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesRequest;
  static deserializeBinaryFromReader(message: GetPropertiesRequest, reader: jspb.BinaryReader): GetPropertiesRequest;
}

export namespace GetPropertiesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPropertiesResponse extends jspb.Message {
  getTicksCountSupported(): boolean;
  setTicksCountSupported(value: boolean): void;

  getAngleDegreesSupported(): boolean;
  setAngleDegreesSupported(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesResponse): GetPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesResponse;
  static deserializeBinaryFromReader(message: GetPropertiesResponse, reader: jspb.BinaryReader): GetPropertiesResponse;
}

export namespace GetPropertiesResponse {
  export type AsObject = {
    ticksCountSupported: boolean,
    angleDegreesSupported: boolean,
  }
}

export interface PositionTypeMap {
  POSITION_TYPE_UNSPECIFIED: 0;
  POSITION_TYPE_TICKS_COUNT: 1;
  POSITION_TYPE_ANGLE_DEGREES: 2;
}

export const PositionType: PositionTypeMap;

