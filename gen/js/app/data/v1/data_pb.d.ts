// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class QueryRequest extends jspb.Message {
  hasFilters(): boolean;
  clearFilters(): void;
  getFilters(): Filters | undefined;
  setFilters(value?: Filters): void;

  getType(): DataTypeMap[keyof DataTypeMap];
  setType(value: DataTypeMap[keyof DataTypeMap]): void;

  getSkip(): number;
  setSkip(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getCountOnly(): boolean;
  setCountOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    filters?: Filters.AsObject,
    type: DataTypeMap[keyof DataTypeMap],
    skip: number,
    limit: number,
    countOnly: boolean,
  }
}

export class Filters extends jspb.Message {
  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filters.AsObject;
  static toObject(includeInstance: boolean, msg: Filters): Filters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filters;
  static deserializeBinaryFromReader(message: Filters, reader: jspb.BinaryReader): Filters;
}

export namespace Filters {
  export type AsObject = {
    componentName: string,
    componentType: string,
    componentModel: string,
    method: string,
    tagsList: Array<string>,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    locationId: string,
    orgId: string,
    interval?: CaptureInterval.AsObject,
  }
}

export class CaptureInterval extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaptureInterval.AsObject;
  static toObject(includeInstance: boolean, msg: CaptureInterval): CaptureInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaptureInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaptureInterval;
  static deserializeBinaryFromReader(message: CaptureInterval, reader: jspb.BinaryReader): CaptureInterval;
}

export namespace CaptureInterval {
  export type AsObject = {
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class QueryResponse extends jspb.Message {
  clearTabularList(): void;
  getTabularList(): Array<TabularMetadata>;
  setTabularList(value: Array<TabularMetadata>): void;
  addTabular(value?: TabularMetadata, index?: number): TabularMetadata;

  clearBinaryList(): void;
  getBinaryList(): Array<BinaryMetadata>;
  setBinaryList(value: Array<BinaryMetadata>): void;
  addBinary(value?: BinaryMetadata, index?: number): BinaryMetadata;

  clearFileList(): void;
  getFileList(): Array<FileMetadata>;
  setFileList(value: Array<FileMetadata>): void;
  addFile(value?: FileMetadata, index?: number): FileMetadata;

  getTabularCount(): number;
  setTabularCount(value: number): void;

  getBinaryCount(): number;
  setBinaryCount(value: number): void;

  getFileCount(): number;
  setFileCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    tabularList: Array<TabularMetadata.AsObject>,
    binaryList: Array<BinaryMetadata.AsObject>,
    fileList: Array<FileMetadata.AsObject>,
    tabularCount: number,
    binaryCount: number,
    fileCount: number,
  }
}

export class TabularMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  getFileSizeBytes(): number;
  setFileSizeBytes(value: number): void;

  getNumReadings(): number;
  setNumReadings(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabularMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TabularMetadata): TabularMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabularMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabularMetadata;
  static deserializeBinaryFromReader(message: TabularMetadata, reader: jspb.BinaryReader): TabularMetadata;
}

export namespace TabularMetadata {
  export type AsObject = {
    id: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    componentName: string,
    componentType: string,
    componentModel: string,
    method: string,
    tagsList: Array<string>,
    interval?: CaptureInterval.AsObject,
    fileSizeBytes: number,
    numReadings: number,
  }
}

export class BinaryMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  getFileSizeBytes(): number;
  setFileSizeBytes(value: number): void;

  getFileId(): string;
  setFileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryMetadata): BinaryMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryMetadata;
  static deserializeBinaryFromReader(message: BinaryMetadata, reader: jspb.BinaryReader): BinaryMetadata;
}

export namespace BinaryMetadata {
  export type AsObject = {
    id: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    componentName: string,
    componentType: string,
    componentModel: string,
    method: string,
    tagsList: Array<string>,
    interval?: CaptureInterval.AsObject,
    fileSizeBytes: number,
    fileId: string,
  }
}

export class FileMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  hasSyncTime(): boolean;
  clearSyncTime(): void;
  getSyncTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSyncTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFileSizeBytes(): number;
  setFileSizeBytes(value: number): void;

  getFileId(): string;
  setFileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    id: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    syncTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fileSizeBytes: number,
    fileId: string,
  }
}

export interface DataTypeMap {
  DATA_TYPE_UNSPECIFIED: 0;
  DATA_TYPE_BINARY_SENSOR: 1;
  DATA_TYPE_TABULAR_SENSOR: 2;
  DATA_TYPE_FILE: 3;
}

export const DataType: DataTypeMap;

