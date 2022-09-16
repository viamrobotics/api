// package: viam.app.model.v1
// file: app/model/v1/model.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FileData extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileData.AsObject;
  static toObject(includeInstance: boolean, msg: FileData): FileData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileData;
  static deserializeBinaryFromReader(message: FileData, reader: jspb.BinaryReader): FileData;
}

export namespace FileData {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class UploadMetadata extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getAssociatedDataset(): string;
  setAssociatedDataset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMetadata): UploadMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMetadata;
  static deserializeBinaryFromReader(message: UploadMetadata, reader: jspb.BinaryReader): UploadMetadata;
}

export namespace UploadMetadata {
  export type AsObject = {
    orgId: string,
    modelName: string,
    associatedDataset: string,
  }
}

export class UploadRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): UploadMetadata | undefined;
  setMetadata(value?: UploadMetadata): void;

  hasFileContents(): boolean;
  clearFileContents(): void;
  getFileContents(): FileData | undefined;
  setFileContents(value?: FileData): void;

  getUploadPacketCase(): UploadRequest.UploadPacketCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    metadata?: UploadMetadata.AsObject,
    fileContents?: FileData.AsObject,
  }

  export enum UploadPacketCase {
    UPLOAD_PACKET_NOT_SET = 0,
    METADATA = 1,
    FILE_CONTENTS = 2,
  }
}

export class DeleteMetadata extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMetadata): DeleteMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMetadata;
  static deserializeBinaryFromReader(message: DeleteMetadata, reader: jspb.BinaryReader): DeleteMetadata;
}

export namespace DeleteMetadata {
  export type AsObject = {
    orgId: string,
    modelName: string,
  }
}

export class DeleteRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): DeleteMetadata | undefined;
  setMetadata(value?: DeleteMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    metadata?: DeleteMetadata.AsObject,
  }
}

export class DeployMetadata extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeployMetadata): DeployMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployMetadata;
  static deserializeBinaryFromReader(message: DeployMetadata, reader: jspb.BinaryReader): DeployMetadata;
}

export namespace DeployMetadata {
  export type AsObject = {
    modelName: string,
  }
}

export class DeployRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): DeployMetadata | undefined;
  setMetadata(value?: DeployMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployRequest): DeployRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployRequest;
  static deserializeBinaryFromReader(message: DeployRequest, reader: jspb.BinaryReader): DeployRequest;
}

export namespace DeployRequest {
  export type AsObject = {
    metadata?: DeployMetadata.AsObject,
  }
}

export class UploadResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadResponse;
  static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
  export type AsObject = {
    message: string,
    status: StatusMap[keyof StatusMap],
  }
}

export class DeleteResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    message: string,
    status: StatusMap[keyof StatusMap],
  }
}

export class DeployResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeployResponse): DeployResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployResponse;
  static deserializeBinaryFromReader(message: DeployResponse, reader: jspb.BinaryReader): DeployResponse;
}

export namespace DeployResponse {
  export type AsObject = {
    message: string,
    status: StatusMap[keyof StatusMap],
  }
}

export class SyncedModel extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getAssociatedDataset(): string;
  setAssociatedDataset(value: string): void;

  getBlobPath(): string;
  setBlobPath(value: string): void;

  hasSyncTime(): boolean;
  clearSyncTime(): void;
  getSyncTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSyncTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncedModel.AsObject;
  static toObject(includeInstance: boolean, msg: SyncedModel): SyncedModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncedModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncedModel;
  static deserializeBinaryFromReader(message: SyncedModel, reader: jspb.BinaryReader): SyncedModel;
}

export namespace SyncedModel {
  export type AsObject = {
    orgId: string,
    modelName: string,
    associatedDataset: string,
    blobPath: string,
    syncTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface StatusMap {
  UNSPECIFIED: 0;
  FAIL: 1;
  OK: 2;
}

export const Status: StatusMap;

