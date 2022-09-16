// package: viam.component.base.v1
// file: component/base/v1/base.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class MoveStraightRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDistanceMm(): number;
  setDistanceMm(value: number): void;

  getMmPerSec(): number;
  setMmPerSec(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveStraightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveStraightRequest): MoveStraightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveStraightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveStraightRequest;
  static deserializeBinaryFromReader(message: MoveStraightRequest, reader: jspb.BinaryReader): MoveStraightRequest;
}

export namespace MoveStraightRequest {
  export type AsObject = {
    name: string,
    distanceMm: number,
    mmPerSec: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveStraightResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveStraightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveStraightResponse): MoveStraightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveStraightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveStraightResponse;
  static deserializeBinaryFromReader(message: MoveStraightResponse, reader: jspb.BinaryReader): MoveStraightResponse;
}

export namespace MoveStraightResponse {
  export type AsObject = {
  }
}

export class SpinRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAngleDeg(): number;
  setAngleDeg(value: number): void;

  getDegsPerSec(): number;
  setDegsPerSec(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpinRequest): SpinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpinRequest;
  static deserializeBinaryFromReader(message: SpinRequest, reader: jspb.BinaryReader): SpinRequest;
}

export namespace SpinRequest {
  export type AsObject = {
    name: string,
    angleDeg: number,
    degsPerSec: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SpinResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpinResponse): SpinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpinResponse;
  static deserializeBinaryFromReader(message: SpinResponse, reader: jspb.BinaryReader): SpinResponse;
}

export namespace SpinResponse {
  export type AsObject = {
  }
}

export class StopRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRequest;
  static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopResponse;
  static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
  export type AsObject = {
  }
}

export class SetPowerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasLinear(): boolean;
  clearLinear(): void;
  getLinear(): common_v1_common_pb.Vector3 | undefined;
  setLinear(value?: common_v1_common_pb.Vector3): void;

  hasAngular(): boolean;
  clearAngular(): void;
  getAngular(): common_v1_common_pb.Vector3 | undefined;
  setAngular(value?: common_v1_common_pb.Vector3): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPowerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPowerRequest): SetPowerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPowerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPowerRequest;
  static deserializeBinaryFromReader(message: SetPowerRequest, reader: jspb.BinaryReader): SetPowerRequest;
}

export namespace SetPowerRequest {
  export type AsObject = {
    name: string,
    linear?: common_v1_common_pb.Vector3.AsObject,
    angular?: common_v1_common_pb.Vector3.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetPowerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPowerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPowerResponse): SetPowerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPowerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPowerResponse;
  static deserializeBinaryFromReader(message: SetPowerResponse, reader: jspb.BinaryReader): SetPowerResponse;
}

export namespace SetPowerResponse {
  export type AsObject = {
  }
}

export class SetVelocityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasLinear(): boolean;
  clearLinear(): void;
  getLinear(): common_v1_common_pb.Vector3 | undefined;
  setLinear(value?: common_v1_common_pb.Vector3): void;

  hasAngular(): boolean;
  clearAngular(): void;
  getAngular(): common_v1_common_pb.Vector3 | undefined;
  setAngular(value?: common_v1_common_pb.Vector3): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetVelocityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetVelocityRequest): SetVelocityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetVelocityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetVelocityRequest;
  static deserializeBinaryFromReader(message: SetVelocityRequest, reader: jspb.BinaryReader): SetVelocityRequest;
}

export namespace SetVelocityRequest {
  export type AsObject = {
    name: string,
    linear?: common_v1_common_pb.Vector3.AsObject,
    angular?: common_v1_common_pb.Vector3.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetVelocityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetVelocityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetVelocityResponse): SetVelocityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetVelocityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetVelocityResponse;
  static deserializeBinaryFromReader(message: SetVelocityResponse, reader: jspb.BinaryReader): SetVelocityResponse;
}

export namespace SetVelocityResponse {
  export type AsObject = {
  }
}

