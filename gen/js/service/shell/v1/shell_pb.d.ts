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

export class CopyFilesToMachineRequestMetadata extends jspb.Message {
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
  toObject(includeInstance?: boolean): CopyFilesToMachineRequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesToMachineRequestMetadata): CopyFilesToMachineRequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesToMachineRequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesToMachineRequestMetadata;
  static deserializeBinaryFromReader(message: CopyFilesToMachineRequestMetadata, reader: jspb.BinaryReader): CopyFilesToMachineRequestMetadata;
}

export namespace CopyFilesToMachineRequestMetadata {
  export type AsObject = {
    name: string,
    sourceType: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap],
    destination: string,
    preserve: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CopyFilesToMachineRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesToMachineRequestMetadata | undefined;
  setMetadata(value?: CopyFilesToMachineRequestMetadata): void;

  hasFileData(): boolean;
  clearFileData(): void;
  getFileData(): FileData | undefined;
  setFileData(value?: FileData): void;

  getRequestCase(): CopyFilesToMachineRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesToMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesToMachineRequest): CopyFilesToMachineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesToMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesToMachineRequest;
  static deserializeBinaryFromReader(message: CopyFilesToMachineRequest, reader: jspb.BinaryReader): CopyFilesToMachineRequest;
}

export namespace CopyFilesToMachineRequest {
  export type AsObject = {
    metadata?: CopyFilesToMachineRequestMetadata.AsObject,
    fileData?: FileData.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    METADATA = 1,
    FILE_DATA = 2,
  }
}

export class CopyFilesToMachineResponse extends jspb.Message {
  getAckLastFile(): boolean;
  setAckLastFile(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesToMachineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesToMachineResponse): CopyFilesToMachineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesToMachineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesToMachineResponse;
  static deserializeBinaryFromReader(message: CopyFilesToMachineResponse, reader: jspb.BinaryReader): CopyFilesToMachineResponse;
}

export namespace CopyFilesToMachineResponse {
  export type AsObject = {
    ackLastFile: boolean,
  }
}

export class CopyFilesFromMachineRequestMetadata extends jspb.Message {
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
  toObject(includeInstance?: boolean): CopyFilesFromMachineRequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromMachineRequestMetadata): CopyFilesFromMachineRequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromMachineRequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromMachineRequestMetadata;
  static deserializeBinaryFromReader(message: CopyFilesFromMachineRequestMetadata, reader: jspb.BinaryReader): CopyFilesFromMachineRequestMetadata;
}

export namespace CopyFilesFromMachineRequestMetadata {
  export type AsObject = {
    name: string,
    pathsList: Array<string>,
    allowRecursion: boolean,
    preserve: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CopyFilesFromMachineRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesFromMachineRequestMetadata | undefined;
  setMetadata(value?: CopyFilesFromMachineRequestMetadata): void;

  hasAckLastFile(): boolean;
  clearAckLastFile(): void;
  getAckLastFile(): boolean;
  setAckLastFile(value: boolean): void;

  getRequestCase(): CopyFilesFromMachineRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromMachineRequest): CopyFilesFromMachineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromMachineRequest;
  static deserializeBinaryFromReader(message: CopyFilesFromMachineRequest, reader: jspb.BinaryReader): CopyFilesFromMachineRequest;
}

export namespace CopyFilesFromMachineRequest {
  export type AsObject = {
    metadata?: CopyFilesFromMachineRequestMetadata.AsObject,
    ackLastFile: boolean,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    METADATA = 1,
    ACK_LAST_FILE = 2,
  }
}

export class CopyFilesFromMachineResponseMetadata extends jspb.Message {
  getSourceType(): CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap];
  setSourceType(value: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromMachineResponseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromMachineResponseMetadata): CopyFilesFromMachineResponseMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromMachineResponseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromMachineResponseMetadata;
  static deserializeBinaryFromReader(message: CopyFilesFromMachineResponseMetadata, reader: jspb.BinaryReader): CopyFilesFromMachineResponseMetadata;
}

export namespace CopyFilesFromMachineResponseMetadata {
  export type AsObject = {
    sourceType: CopyFilesSourceTypeMap[keyof CopyFilesSourceTypeMap],
  }
}

export class CopyFilesFromMachineResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CopyFilesFromMachineResponseMetadata | undefined;
  setMetadata(value?: CopyFilesFromMachineResponseMetadata): void;

  hasFileData(): boolean;
  clearFileData(): void;
  getFileData(): FileData | undefined;
  setFileData(value?: FileData): void;

  getResponseCase(): CopyFilesFromMachineResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFilesFromMachineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFilesFromMachineResponse): CopyFilesFromMachineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFilesFromMachineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFilesFromMachineResponse;
  static deserializeBinaryFromReader(message: CopyFilesFromMachineResponse, reader: jspb.BinaryReader): CopyFilesFromMachineResponse;
}

export namespace CopyFilesFromMachineResponse {
  export type AsObject = {
    metadata?: CopyFilesFromMachineResponseMetadata.AsObject,
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

