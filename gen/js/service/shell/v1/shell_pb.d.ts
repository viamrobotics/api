// package: viam.service.shell.v1
// file: service/shell/v1/shell.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ShellRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDataIn(): string;
  setDataIn(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShellRequest): ShellRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellRequest;
  static deserializeBinaryFromReader(message: ShellRequest, reader: jspb.BinaryReader): ShellRequest;
}

export namespace ShellRequest {
  export type AsObject = {
    name: string,
    dataIn: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ShellResponse extends jspb.Message {
  getDataOut(): string;
  setDataOut(value: string): void;

  getDataErr(): string;
  setDataErr(value: string): void;

  getEof(): boolean;
  setEof(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShellResponse): ShellResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellResponse;
  static deserializeBinaryFromReader(message: ShellResponse, reader: jspb.BinaryReader): ShellResponse;
}

export namespace ShellResponse {
  export type AsObject = {
    dataOut: string,
    dataErr: string,
    eof: boolean,
  }
}

export class FileData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getIsDir(): boolean;
  setIsDir(value: boolean): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getEof(): boolean;
  setEof(value: boolean): void;

  hasModTime(): boolean;
  clearModTime(): void;
  getModTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): number;
  setMode(value: number): void;

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
    name: string,
    size: number,
    isDir: boolean,
    data: Uint8Array | string,
    eof: boolean,
    modTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mode: number,
  }
}

export class CopyFilesTophysicalDeviceRequestMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSourceType(): CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap];
  setSourceType(value: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap]): void;

  getDestination(): string;
  setDestination(value: string): void;

  getPreserve(): boolean;
  setPreserve(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesTophysicalDeviceRequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesTophysicalDeviceRequestMetadata): CopyFilesTophysicalDeviceRequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesTophysicalDeviceRequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesTophysicalDeviceRequestMetadata;
  static deserializeBinaryFromReader(message: CopyFilesTophysicalDeviceRequestMetadata, reader: jspb.BinaryReader): CopyFilesTophysicalDeviceRequestMetadata;
}

export namespace CopyFilesTophysicalDeviceRequestMetadata {
  export type AsObject = {
    name: string,
    sourceType: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap],
    destination: string,
    preserve: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CopyFilesTophysicalDeviceRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesTophysicalDeviceRequestMetadata | undefined;
  setMetadata(value?: CopyFilesTophysicalDeviceRequestMetadata): void;

  hasFileData(): boolean;
  clearFileData(): void;
  getFileData(): FileData | undefined;
  setFileData(value?: FileData): void;

  getRequestCase(): CopyFilesTophysicalDeviceRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesTophysicalDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesTophysicalDeviceRequest): CopyFilesTophysicalDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesTophysicalDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesTophysicalDeviceRequest;
  static deserializeBinaryFromReader(message: CopyFilesTophysicalDeviceRequest, reader: jspb.BinaryReader): CopyFilesTophysicalDeviceRequest;
}

export namespace CopyFilesTophysicalDeviceRequest {
  export type AsObject = {
    metadata?: CopyFilesTophysicalDeviceRequestMetadata.AsObject,
    fileData?: FileData.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    METADATA = 1,
    FILE_DATA = 2,
  }
}

export class CopyFilesTophysicalDeviceResponse extends jspb.Message {
  getAckLastFile(): boolean;
  setAckLastFile(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesTophysicalDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesTophysicalDeviceResponse): CopyFilesTophysicalDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesTophysicalDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesTophysicalDeviceResponse;
  static deserializeBinaryFromReader(message: CopyFilesTophysicalDeviceResponse, reader: jspb.BinaryReader): CopyFilesTophysicalDeviceResponse;
}

export namespace CopyFilesTophysicalDeviceResponse {
  export type AsObject = {
    ackLastFile: boolean,
  }
}

export class CopyFilesFromphysicalDeviceRequestMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  getAllowRecursion(): boolean;
  setAllowRecursion(value: boolean): void;

  getPreserve(): boolean;
  setPreserve(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromphysicalDeviceRequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromphysicalDeviceRequestMetadata): CopyFilesFromphysicalDeviceRequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromphysicalDeviceRequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromphysicalDeviceRequestMetadata;
  static deserializeBinaryFromReader(message: CopyFilesFromphysicalDeviceRequestMetadata, reader: jspb.BinaryReader): CopyFilesFromphysicalDeviceRequestMetadata;
}

export namespace CopyFilesFromphysicalDeviceRequestMetadata {
  export type AsObject = {
    name: string,
    pathsList: Array<string>,
    allowRecursion: boolean,
    preserve: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CopyFilesFromphysicalDeviceRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesFromphysicalDeviceRequestMetadata | undefined;
  setMetadata(value?: CopyFilesFromphysicalDeviceRequestMetadata): void;

  hasAckLastFile(): boolean;
  clearAckLastFile(): void;
  getAckLastFile(): boolean;
  setAckLastFile(value: boolean): void;

  getRequestCase(): CopyFilesFromphysicalDeviceRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromphysicalDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromphysicalDeviceRequest): CopyFilesFromphysicalDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromphysicalDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromphysicalDeviceRequest;
  static deserializeBinaryFromReader(message: CopyFilesFromphysicalDeviceRequest, reader: jspb.BinaryReader): CopyFilesFromphysicalDeviceRequest;
}

export namespace CopyFilesFromphysicalDeviceRequest {
  export type AsObject = {
    metadata?: CopyFilesFromphysicalDeviceRequestMetadata.AsObject,
    ackLastFile: boolean,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    METADATA = 1,
    ACK_LAST_FILE = 2,
  }
}

export class CopyFilesFromphysicalDeviceResponseMetadata extends jspb.Message {
  getSourceType(): CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap];
  setSourceType(value: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromphysicalDeviceResponseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromphysicalDeviceResponseMetadata): CopyFilesFromphysicalDeviceResponseMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromphysicalDeviceResponseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromphysicalDeviceResponseMetadata;
  static deserializeBinaryFromReader(message: CopyFilesFromphysicalDeviceResponseMetadata, reader: jspb.BinaryReader): CopyFilesFromphysicalDeviceResponseMetadata;
}

export namespace CopyFilesFromphysicalDeviceResponseMetadata {
  export type AsObject = {
    sourceType: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap],
  }
}

export class CopyFilesFromphysicalDeviceResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesFromphysicalDeviceResponseMetadata | undefined;
  setMetadata(value?: CopyFilesFromphysicalDeviceResponseMetadata): void;

  hasFileData(): boolean;
  clearFileData(): void;
  getFileData(): FileData | undefined;
  setFileData(value?: FileData): void;

  getResponseCase(): CopyFilesFromphysicalDeviceResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromphysicalDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromphysicalDeviceResponse): CopyFilesFromphysicalDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromphysicalDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromphysicalDeviceResponse;
  static deserializeBinaryFromReader(message: CopyFilesFromphysicalDeviceResponse, reader: jspb.BinaryReader): CopyFilesFromphysicalDeviceResponse;
}

export namespace CopyFilesFromphysicalDeviceResponse {
  export type AsObject = {
    metadata?: CopyFilesFromphysicalDeviceResponseMetadata.AsObject,
    fileData?: FileData.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    METADATA = 1,
    FILE_DATA = 2,
  }
}

export interface CopyFilesSourceTypeMap {
  COPY_FILES_SOURCE_TYPE_UNSPECIFIED: 0;
  COPY_FILES_SOURCE_TYPE_SINGLE_FILE: 1;
  COPY_FILES_SOURCE_TYPE_SINGLE_DIRECTORY: 2;
  COPY_FILES_SOURCE_TYPE_MULTIPLE_FILES: 3;
}

export const CopyFilesSourceType: CopyFilesSourceTypeMap;

