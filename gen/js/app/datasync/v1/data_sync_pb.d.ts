// package: viam.app.datasync.v1
// file: app/datasync/v1/data_sync.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tagger_v1_tagger_pb from "../../../tagger/v1/tagger_pb";

export class SensorMetadata extends jspb.Message {
  hasTimeRequested(): boolean;
  clearTimeRequested(): void;
  getTimeRequested(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeRequested(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeReceived(): boolean;
  clearTimeReceived(): void;
  getTimeReceived(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeReceived(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SensorMetadata): SensorMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorMetadata;
  static deserializeBinaryFromReader(message: SensorMetadata, reader: jspb.BinaryReader): SensorMetadata;
}

export namespace SensorMetadata {
  export type AsObject = {
    timeRequested?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeReceived?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SensorData extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): SensorMetadata | undefined;
  setMetadata(value?: SensorMetadata): void;

  hasStruct(): boolean;
  clearStruct(): void;
  getStruct(): google_protobuf_struct_pb.Struct | undefined;
  setStruct(value?: google_protobuf_struct_pb.Struct): void;

  hasBinary(): boolean;
  clearBinary(): void;
  getBinary(): Uint8Array | string;
  getBinary_asU8(): Uint8Array;
  getBinary_asB64(): string;
  setBinary(value: Uint8Array | string): void;

  getDataCase(): SensorData.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorData.AsObject;
  static toObject(includeInstance: boolean, msg: SensorData): SensorData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorData;
  static deserializeBinaryFromReader(message: SensorData, reader: jspb.BinaryReader): SensorData;
}

export namespace SensorData {
  export type AsObject = {
    metadata?: SensorMetadata.AsObject,
    struct?: google_protobuf_struct_pb.Struct.AsObject,
    binary: Uint8Array | string,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STRUCT = 2,
    BINARY = 3,
  }
}

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
  getPartId(): string;
  setPartId(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getType(): DataTypeMap[keyof DataTypeMap];
  setType(value: DataTypeMap[keyof DataTypeMap]): void;

  getFileName(): string;
  setFileName(value: string): void;

  getMethodParametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMethodParametersMap(): void;
  getFileExtension(): string;
  setFileExtension(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getSessionId(): string;
  setSessionId(value: string): void;

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
    partId: string,
    componentType: string,
    componentName: string,
    componentModel: string,
    methodName: string,
    type: DataTypeMap[keyof DataTypeMap],
    fileName: string,
    methodParametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fileExtension: string,
    tagsList: Array<string>,
    sessionId: string,
  }
}

export class UploadRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): UploadMetadata | undefined;
  setMetadata(value?: UploadMetadata): void;

  hasSensorContents(): boolean;
  clearSensorContents(): void;
  getSensorContents(): SensorData | undefined;
  setSensorContents(value?: SensorData): void;

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
    sensorContents?: SensorData.AsObject,
    fileContents?: FileData.AsObject,
  }

  export enum UploadPacketCase {
    UPLOAD_PACKET_NOT_SET = 0,
    METADATA = 1,
    SENSOR_CONTENTS = 2,
    FILE_CONTENTS = 3,
  }
}

export class UploadResponse extends jspb.Message {
  getRequestsWritten(): number;
  setRequestsWritten(value: number): void;

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
    requestsWritten: number,
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

export class DataCaptureMetadata extends jspb.Message {
  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getType(): DataTypeMap[keyof DataTypeMap];
  setType(value: DataTypeMap[keyof DataTypeMap]): void;

  getMethodParametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMethodParametersMap(): void;
  getFileExtension(): string;
  setFileExtension(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCaptureMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DataCaptureMetadata): DataCaptureMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataCaptureMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCaptureMetadata;
  static deserializeBinaryFromReader(message: DataCaptureMetadata, reader: jspb.BinaryReader): DataCaptureMetadata;
}

export namespace DataCaptureMetadata {
  export type AsObject = {
    componentType: string,
    componentName: string,
    componentModel: string,
    methodName: string,
    type: DataTypeMap[keyof DataTypeMap],
    methodParametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fileExtension: string,
    tagsList: Array<string>,
    sessionId: string,
  }
}

export class TabularCapture extends jspb.Message {
  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getBlobPath(): string;
  setBlobPath(value: string): void;

  clearColumnNamesList(): void;
  getColumnNamesList(): Array<string>;
  setColumnNamesList(value: Array<string>): void;
  addColumnNames(value: string, index?: number): string;

  getMethodParametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMethodParametersMap(): void;
  getFileId(): string;
  setFileId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  getFileSizeBytes(): number;
  setFileSizeBytes(value: number): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabularCapture.AsObject;
  static toObject(includeInstance: boolean, msg: TabularCapture): TabularCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabularCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabularCapture;
  static deserializeBinaryFromReader(message: TabularCapture, reader: jspb.BinaryReader): TabularCapture;
}

export namespace TabularCapture {
  export type AsObject = {
    interval?: CaptureInterval.AsObject,
    orgId: string,
    robotId: string,
    partId: string,
    locationId: string,
    componentName: string,
    componentType: string,
    componentModel: string,
    methodName: string,
    blobPath: string,
    columnNamesList: Array<string>,
    methodParametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fileId: string,
    tagsList: Array<string>,
    messageCount: number,
    fileSizeBytes: number,
    sessionId: string,
    mimeType: string,
    id: string,
  }
}

export class BinaryCapture extends jspb.Message {
  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getBlobPath(): string;
  setBlobPath(value: string): void;

  getMethodParametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMethodParametersMap(): void;
  getFileId(): string;
  setFileId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getFileSizeBytes(): number;
  setFileSizeBytes(value: number): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileExt(): string;
  setFileExt(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryCapture.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryCapture): BinaryCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryCapture;
  static deserializeBinaryFromReader(message: BinaryCapture, reader: jspb.BinaryReader): BinaryCapture;
}

export namespace BinaryCapture {
  export type AsObject = {
    interval?: CaptureInterval.AsObject,
    orgId: string,
    robotId: string,
    partId: string,
    locationId: string,
    componentName: string,
    componentType: string,
    componentModel: string,
    methodName: string,
    blobPath: string,
    methodParametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fileId: string,
    tagsList: Array<string>,
    fileSizeBytes: number,
    sessionId: string,
    mimeType: string,
    fileName: string,
    fileExt: string,
    id: string,
  }
}

export interface DataTypeMap {
  DATA_TYPE_UNSPECIFIED: 0;
  DATA_TYPE_BINARY_SENSOR: 1;
  DATA_TYPE_TABULAR_SENSOR: 2;
  DATA_TYPE_FILE: 3;
}

export const DataType: DataTypeMap;

