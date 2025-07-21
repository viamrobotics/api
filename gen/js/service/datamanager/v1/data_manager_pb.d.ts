// package: viam.service.datamanager.v1
// file: service/datamanager/v1/data_manager.proto

import * as jspb from "google-protobuf";
import * as app_datasync_v1_data_sync_pb from "../../../app/datasync/v1/data_sync_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class SyncRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequest): SyncRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(message: SyncRequest, reader: jspb.BinaryReader): SyncRequest;
}

export namespace SyncRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SyncResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponse): SyncResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(message: SyncResponse, reader: jspb.BinaryReader): SyncResponse;
}

export namespace SyncResponse {
  export type AsObject = {
  }
}

export class UploadBinaryDataToDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBinaryData(): Uint8Array | string;
  getBinaryData_asU8(): Uint8Array;
  getBinaryData_asB64(): string;
  setBinaryData(value: Uint8Array | string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearDatasetIdsList(): void;
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  addDatasetIds(value: string, index?: number): string;

  getMimeType(): app_datasync_v1_data_sync_pb.MimeTypeMap[keyof app_datasync_v1_data_sync_pb.MimeTypeMap];
  setMimeType(value: app_datasync_v1_data_sync_pb.MimeTypeMap[keyof app_datasync_v1_data_sync_pb.MimeTypeMap]): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadBinaryDataToDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadBinaryDataToDatasetRequest): UploadBinaryDataToDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadBinaryDataToDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadBinaryDataToDatasetRequest;
  static deserializeBinaryFromReader(message: UploadBinaryDataToDatasetRequest, reader: jspb.BinaryReader): UploadBinaryDataToDatasetRequest;
}

export namespace UploadBinaryDataToDatasetRequest {
  export type AsObject = {
    name: string,
    binaryData: Uint8Array | string,
    tagsList: Array<string>,
    datasetIdsList: Array<string>,
    mimeType: app_datasync_v1_data_sync_pb.MimeTypeMap[keyof app_datasync_v1_data_sync_pb.MimeTypeMap],
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UploadBinaryDataToDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadBinaryDataToDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadBinaryDataToDatasetResponse): UploadBinaryDataToDatasetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadBinaryDataToDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadBinaryDataToDatasetResponse;
  static deserializeBinaryFromReader(message: UploadBinaryDataToDatasetResponse, reader: jspb.BinaryReader): UploadBinaryDataToDatasetResponse;
}

export namespace UploadBinaryDataToDatasetResponse {
  export type AsObject = {
  }
}

