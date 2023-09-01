// package: viam.component.powersensor.v1
// file: component/powersensor/v1/powersensor.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetVoltageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoltageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoltageRequest): GetVoltageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoltageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoltageRequest;
  static deserializeBinaryFromReader(message: GetVoltageRequest, reader: jspb.BinaryReader): GetVoltageRequest;
}

export namespace GetVoltageRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetVoltageResponse extends jspb.Message {
  getVolts(): number;
  setVolts(value: number): void;

  getIsAc(): boolean;
  setIsAc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoltageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoltageResponse): GetVoltageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoltageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoltageResponse;
  static deserializeBinaryFromReader(message: GetVoltageResponse, reader: jspb.BinaryReader): GetVoltageResponse;
}

export namespace GetVoltageResponse {
  export type AsObject = {
    volts: number,
    isAc: boolean,
  }
}

export class GetCurrentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentRequest): GetCurrentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentRequest;
  static deserializeBinaryFromReader(message: GetCurrentRequest, reader: jspb.BinaryReader): GetCurrentRequest;
}

export namespace GetCurrentRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetCurrentResponse extends jspb.Message {
  getAmperes(): number;
  setAmperes(value: number): void;

  getIsAc(): boolean;
  setIsAc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentResponse): GetCurrentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentResponse;
  static deserializeBinaryFromReader(message: GetCurrentResponse, reader: jspb.BinaryReader): GetCurrentResponse;
}

export namespace GetCurrentResponse {
  export type AsObject = {
    amperes: number,
    isAc: boolean,
  }
}

export class GetPowerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPowerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPowerRequest): GetPowerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPowerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPowerRequest;
  static deserializeBinaryFromReader(message: GetPowerRequest, reader: jspb.BinaryReader): GetPowerRequest;
}

export namespace GetPowerRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPowerResponse extends jspb.Message {
  getWatts(): number;
  setWatts(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPowerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPowerResponse): GetPowerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPowerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPowerResponse;
  static deserializeBinaryFromReader(message: GetPowerResponse, reader: jspb.BinaryReader): GetPowerResponse;
}

export namespace GetPowerResponse {
  export type AsObject = {
    watts: number,
  }
}

