// package: viam.component.movementsensor.v1
// file: component/movementsensor/v1/movementsensor.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetLinearVelocityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinearVelocityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinearVelocityRequest): GetLinearVelocityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinearVelocityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinearVelocityRequest;
  static deserializeBinaryFromReader(message: GetLinearVelocityRequest, reader: jspb.BinaryReader): GetLinearVelocityRequest;
}

export namespace GetLinearVelocityRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetLinearVelocityResponse extends jspb.Message {
  hasLinearVelocity(): boolean;
  clearLinearVelocity(): void;
  getLinearVelocity(): common_v1_common_pb.Vector3 | undefined;
  setLinearVelocity(value?: common_v1_common_pb.Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinearVelocityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinearVelocityResponse): GetLinearVelocityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinearVelocityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinearVelocityResponse;
  static deserializeBinaryFromReader(message: GetLinearVelocityResponse, reader: jspb.BinaryReader): GetLinearVelocityResponse;
}

export namespace GetLinearVelocityResponse {
  export type AsObject = {
    linearVelocity?: common_v1_common_pb.Vector3.AsObject,
  }
}

export class GetAngularVelocityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAngularVelocityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAngularVelocityRequest): GetAngularVelocityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAngularVelocityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAngularVelocityRequest;
  static deserializeBinaryFromReader(message: GetAngularVelocityRequest, reader: jspb.BinaryReader): GetAngularVelocityRequest;
}

export namespace GetAngularVelocityRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetAngularVelocityResponse extends jspb.Message {
  hasAngularVelocity(): boolean;
  clearAngularVelocity(): void;
  getAngularVelocity(): common_v1_common_pb.Vector3 | undefined;
  setAngularVelocity(value?: common_v1_common_pb.Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAngularVelocityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAngularVelocityResponse): GetAngularVelocityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAngularVelocityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAngularVelocityResponse;
  static deserializeBinaryFromReader(message: GetAngularVelocityResponse, reader: jspb.BinaryReader): GetAngularVelocityResponse;
}

export namespace GetAngularVelocityResponse {
  export type AsObject = {
    angularVelocity?: common_v1_common_pb.Vector3.AsObject,
  }
}

export class GetCompassHeadingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompassHeadingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompassHeadingRequest): GetCompassHeadingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompassHeadingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompassHeadingRequest;
  static deserializeBinaryFromReader(message: GetCompassHeadingRequest, reader: jspb.BinaryReader): GetCompassHeadingRequest;
}

export namespace GetCompassHeadingRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetCompassHeadingResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompassHeadingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompassHeadingResponse): GetCompassHeadingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompassHeadingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompassHeadingResponse;
  static deserializeBinaryFromReader(message: GetCompassHeadingResponse, reader: jspb.BinaryReader): GetCompassHeadingResponse;
}

export namespace GetCompassHeadingResponse {
  export type AsObject = {
    value: number,
  }
}

export class GetOrientationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrientationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrientationRequest): GetOrientationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrientationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrientationRequest;
  static deserializeBinaryFromReader(message: GetOrientationRequest, reader: jspb.BinaryReader): GetOrientationRequest;
}

export namespace GetOrientationRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetOrientationResponse extends jspb.Message {
  hasOrientation(): boolean;
  clearOrientation(): void;
  getOrientation(): common_v1_common_pb.Orientation | undefined;
  setOrientation(value?: common_v1_common_pb.Orientation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrientationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrientationResponse): GetOrientationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrientationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrientationResponse;
  static deserializeBinaryFromReader(message: GetOrientationResponse, reader: jspb.BinaryReader): GetOrientationResponse;
}

export namespace GetOrientationResponse {
  export type AsObject = {
    orientation?: common_v1_common_pb.Orientation.AsObject,
  }
}

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPositionResponse extends jspb.Message {
  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): common_v1_common_pb.GeoPoint | undefined;
  setCoordinate(value?: common_v1_common_pb.GeoPoint): void;

  getAltitudeMm(): number;
  setAltitudeMm(value: number): void;

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
    coordinate?: common_v1_common_pb.GeoPoint.AsObject,
    altitudeMm: number,
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
  getLinearVelocitySupported(): boolean;
  setLinearVelocitySupported(value: boolean): void;

  getAngularVelocitySupported(): boolean;
  setAngularVelocitySupported(value: boolean): void;

  getOrientationSupported(): boolean;
  setOrientationSupported(value: boolean): void;

  getPositionSupported(): boolean;
  setPositionSupported(value: boolean): void;

  getCompassHeadingSupported(): boolean;
  setCompassHeadingSupported(value: boolean): void;

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
    linearVelocitySupported: boolean,
    angularVelocitySupported: boolean,
    orientationSupported: boolean,
    positionSupported: boolean,
    compassHeadingSupported: boolean,
  }
}

export class GetAccuracyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccuracyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccuracyRequest): GetAccuracyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccuracyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccuracyRequest;
  static deserializeBinaryFromReader(message: GetAccuracyRequest, reader: jspb.BinaryReader): GetAccuracyRequest;
}

export namespace GetAccuracyRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetAccuracyResponse extends jspb.Message {
  getAccuracyMmMap(): jspb.Map<string, number>;
  clearAccuracyMmMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccuracyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccuracyResponse): GetAccuracyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccuracyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccuracyResponse;
  static deserializeBinaryFromReader(message: GetAccuracyResponse, reader: jspb.BinaryReader): GetAccuracyResponse;
}

export namespace GetAccuracyResponse {
  export type AsObject = {
    accuracyMmMap: Array<[string, number]>,
  }
}

