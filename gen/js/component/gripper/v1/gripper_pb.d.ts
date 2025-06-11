// package: viam.component.gripper.v1
// file: component/gripper/v1/gripper.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class OpenRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenRequest): OpenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenRequest;
  static deserializeBinaryFromReader(message: OpenRequest, reader: jspb.BinaryReader): OpenRequest;
}

export namespace OpenRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OpenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenResponse): OpenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenResponse;
  static deserializeBinaryFromReader(message: OpenResponse, reader: jspb.BinaryReader): OpenResponse;
}

export namespace OpenResponse {
  export type AsObject = {
  }
}

export class GrabRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GrabRequest): GrabRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrabRequest;
  static deserializeBinaryFromReader(message: GrabRequest, reader: jspb.BinaryReader): GrabRequest;
}

export namespace GrabRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GrabResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GrabResponse): GrabResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrabResponse;
  static deserializeBinaryFromReader(message: GrabResponse, reader: jspb.BinaryReader): GrabResponse;
}

export namespace GrabResponse {
  export type AsObject = {
    success: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
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

export class IsMovingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMovingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsMovingRequest): IsMovingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsMovingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMovingRequest;
  static deserializeBinaryFromReader(message: IsMovingRequest, reader: jspb.BinaryReader): IsMovingRequest;
}

export namespace IsMovingRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsMovingResponse extends jspb.Message {
  getIsMoving(): boolean;
  setIsMoving(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMovingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsMovingResponse): IsMovingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsMovingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMovingResponse;
  static deserializeBinaryFromReader(message: IsMovingResponse, reader: jspb.BinaryReader): IsMovingResponse;
}

export namespace IsMovingResponse {
  export type AsObject = {
    isMoving: boolean,
  }
}

export class IsHoldingSomethingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsHoldingSomethingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsHoldingSomethingRequest): IsHoldingSomethingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsHoldingSomethingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsHoldingSomethingRequest;
  static deserializeBinaryFromReader(message: IsHoldingSomethingRequest, reader: jspb.BinaryReader): IsHoldingSomethingRequest;
}

export namespace IsHoldingSomethingRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class IsHoldingSomethingResponse extends jspb.Message {
  getIsHoldingSomething(): boolean;
  setIsHoldingSomething(value: boolean): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsHoldingSomethingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsHoldingSomethingResponse): IsHoldingSomethingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsHoldingSomethingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsHoldingSomethingResponse;
  static deserializeBinaryFromReader(message: IsHoldingSomethingResponse, reader: jspb.BinaryReader): IsHoldingSomethingResponse;
}

export namespace IsHoldingSomethingResponse {
  export type AsObject = {
    isHoldingSomething: boolean,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

