// package: viam.service.worldstatestore.v1
// file: service/worldstatestore/v1/world_state_store.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ListUUIDsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUUIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUUIDsRequest): ListUUIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUUIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUUIDsRequest;
  static deserializeBinaryFromReader(message: ListUUIDsRequest, reader: jspb.BinaryReader): ListUUIDsRequest;
}

export namespace ListUUIDsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListUUIDsResponse extends jspb.Message {
  clearUuidsList(): void;
  getUuidsList(): Array<Uint8Array | string>;
  getUuidsList_asU8(): Array<Uint8Array>;
  getUuidsList_asB64(): Array<string>;
  setUuidsList(value: Array<Uint8Array | string>): void;
  addUuids(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUUIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUUIDsResponse): ListUUIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUUIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUUIDsResponse;
  static deserializeBinaryFromReader(message: ListUUIDsResponse, reader: jspb.BinaryReader): ListUUIDsResponse;
}

export namespace ListUUIDsResponse {
  export type AsObject = {
    uuidsList: Array<Uint8Array | string>,
  }
}

export class GetTransformRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUuid(): Uint8Array | string;
  getUuid_asU8(): Uint8Array;
  getUuid_asB64(): string;
  setUuid(value: Uint8Array | string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransformRequest): GetTransformRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransformRequest;
  static deserializeBinaryFromReader(message: GetTransformRequest, reader: jspb.BinaryReader): GetTransformRequest;
}

export namespace GetTransformRequest {
  export type AsObject = {
    name: string,
    uuid: Uint8Array | string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetTransformResponse extends jspb.Message {
  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): common_v1_common_pb.Transform | undefined;
  setTransform(value?: common_v1_common_pb.Transform): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransformResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransformResponse): GetTransformResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransformResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransformResponse;
  static deserializeBinaryFromReader(message: GetTransformResponse, reader: jspb.BinaryReader): GetTransformResponse;
}

export namespace GetTransformResponse {
  export type AsObject = {
    transform?: common_v1_common_pb.Transform.AsObject,
  }
}

export class ListTransformsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransformsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransformsRequest): ListTransformsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransformsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransformsRequest;
  static deserializeBinaryFromReader(message: ListTransformsRequest, reader: jspb.BinaryReader): ListTransformsRequest;
}

export namespace ListTransformsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListTransformsResponse extends jspb.Message {
  clearTransformsList(): void;
  getTransformsList(): Array<common_v1_common_pb.Transform>;
  setTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransformsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransformsResponse): ListTransformsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransformsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransformsResponse;
  static deserializeBinaryFromReader(message: ListTransformsResponse, reader: jspb.BinaryReader): ListTransformsResponse;
}

export namespace ListTransformsResponse {
  export type AsObject = {
    transformsList: Array<common_v1_common_pb.Transform.AsObject>,
  }
}

export class StreamTransformChangesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTransformChangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTransformChangesRequest): StreamTransformChangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTransformChangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTransformChangesRequest;
  static deserializeBinaryFromReader(message: StreamTransformChangesRequest, reader: jspb.BinaryReader): StreamTransformChangesRequest;
}

export namespace StreamTransformChangesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StreamTransformChangesResponse extends jspb.Message {
  getChangeType(): TransformChangeTypeMap[keyof TransformChangeTypeMap];
  setChangeType(value: TransformChangeTypeMap[keyof TransformChangeTypeMap]): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): common_v1_common_pb.Transform | undefined;
  setTransform(value?: common_v1_common_pb.Transform): void;

  hasUpdatedFields(): boolean;
  clearUpdatedFields(): void;
  getUpdatedFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdatedFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTransformChangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTransformChangesResponse): StreamTransformChangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTransformChangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTransformChangesResponse;
  static deserializeBinaryFromReader(message: StreamTransformChangesResponse, reader: jspb.BinaryReader): StreamTransformChangesResponse;
}

export namespace StreamTransformChangesResponse {
  export type AsObject = {
    changeType: TransformChangeTypeMap[keyof TransformChangeTypeMap],
    transform?: common_v1_common_pb.Transform.AsObject,
    updatedFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class TransformChange extends jspb.Message {
  getChangeType(): TransformChangeTypeMap[keyof TransformChangeTypeMap];
  setChangeType(value: TransformChangeTypeMap[keyof TransformChangeTypeMap]): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): common_v1_common_pb.Transform | undefined;
  setTransform(value?: common_v1_common_pb.Transform): void;

  hasUpdatedFields(): boolean;
  clearUpdatedFields(): void;
  getUpdatedFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdatedFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformChange.AsObject;
  static toObject(includeInstance: boolean, msg: TransformChange): TransformChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformChange;
  static deserializeBinaryFromReader(message: TransformChange, reader: jspb.BinaryReader): TransformChange;
}

export namespace TransformChange {
  export type AsObject = {
    changeType: TransformChangeTypeMap[keyof TransformChangeTypeMap],
    transform?: common_v1_common_pb.Transform.AsObject,
    updatedFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ApplyTransformChangesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearChangesList(): void;
  getChangesList(): Array<TransformChange>;
  setChangesList(value: Array<TransformChange>): void;
  addChanges(value?: TransformChange, index?: number): TransformChange;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyTransformChangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyTransformChangesRequest): ApplyTransformChangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyTransformChangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyTransformChangesRequest;
  static deserializeBinaryFromReader(message: ApplyTransformChangesRequest, reader: jspb.BinaryReader): ApplyTransformChangesRequest;
}

export namespace ApplyTransformChangesRequest {
  export type AsObject = {
    name: string,
    changesList: Array<TransformChange.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ApplyTransformChangesResponse extends jspb.Message {
  clearUuidsList(): void;
  getUuidsList(): Array<Uint8Array | string>;
  getUuidsList_asU8(): Array<Uint8Array>;
  getUuidsList_asB64(): Array<string>;
  setUuidsList(value: Array<Uint8Array | string>): void;
  addUuids(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyTransformChangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyTransformChangesResponse): ApplyTransformChangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyTransformChangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyTransformChangesResponse;
  static deserializeBinaryFromReader(message: ApplyTransformChangesResponse, reader: jspb.BinaryReader): ApplyTransformChangesResponse;
}

export namespace ApplyTransformChangesResponse {
  export type AsObject = {
    uuidsList: Array<Uint8Array | string>,
  }
}

export interface TransformChangeTypeMap {
  TRANSFORM_CHANGE_TYPE_UNSPECIFIED: 0;
  TRANSFORM_CHANGE_TYPE_ADDED: 1;
  TRANSFORM_CHANGE_TYPE_REMOVED: 2;
  TRANSFORM_CHANGE_TYPE_UPDATED: 3;
}

export const TransformChangeType: TransformChangeTypeMap;

