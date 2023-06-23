// package: viam.service.slam.v1
// file: service/slam/v1/slam.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
  }
}

export class GetPositionResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  getComponentReference(): string;
  setComponentReference(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

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
    pose?: common_v1_common_pb.Pose.AsObject,
    componentReference: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPointCloudMapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudMapRequest): GetPointCloudMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudMapRequest;
  static deserializeBinaryFromReader(message: GetPointCloudMapRequest, reader: jspb.BinaryReader): GetPointCloudMapRequest;
}

export namespace GetPointCloudMapRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPointCloudMapResponse extends jspb.Message {
  getPointCloudPcdChunk(): Uint8Array | string;
  getPointCloudPcdChunk_asU8(): Uint8Array;
  getPointCloudPcdChunk_asB64(): string;
  setPointCloudPcdChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudMapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudMapResponse): GetPointCloudMapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudMapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudMapResponse;
  static deserializeBinaryFromReader(message: GetPointCloudMapResponse, reader: jspb.BinaryReader): GetPointCloudMapResponse;
}

export namespace GetPointCloudMapResponse {
  export type AsObject = {
    pointCloudPcdChunk: Uint8Array | string,
  }
}

export class GetInternalStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInternalStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInternalStateRequest): GetInternalStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInternalStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInternalStateRequest;
  static deserializeBinaryFromReader(message: GetInternalStateRequest, reader: jspb.BinaryReader): GetInternalStateRequest;
}

export namespace GetInternalStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetInternalStateResponse extends jspb.Message {
  getInternalStateChunk(): Uint8Array | string;
  getInternalStateChunk_asU8(): Uint8Array;
  getInternalStateChunk_asB64(): string;
  setInternalStateChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInternalStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInternalStateResponse): GetInternalStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInternalStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInternalStateResponse;
  static deserializeBinaryFromReader(message: GetInternalStateResponse, reader: jspb.BinaryReader): GetInternalStateResponse;
}

export namespace GetInternalStateResponse {
  export type AsObject = {
    internalStateChunk: Uint8Array | string,
  }
}

export class GetLatestMapInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestMapInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestMapInfoRequest): GetLatestMapInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestMapInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestMapInfoRequest;
  static deserializeBinaryFromReader(message: GetLatestMapInfoRequest, reader: jspb.BinaryReader): GetLatestMapInfoRequest;
}

export namespace GetLatestMapInfoRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetLatestMapInfoResponse extends jspb.Message {
  hasLastMapUpdate(): boolean;
  clearLastMapUpdate(): void;
  getLastMapUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMapUpdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestMapInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestMapInfoResponse): GetLatestMapInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestMapInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestMapInfoResponse;
  static deserializeBinaryFromReader(message: GetLatestMapInfoResponse, reader: jspb.BinaryReader): GetLatestMapInfoResponse;
}

export namespace GetLatestMapInfoResponse {
  export type AsObject = {
    lastMapUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

