// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DataRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  getSkip(): number;
  setSkip(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DataRequest): DataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRequest;
  static deserializeBinaryFromReader(message: DataRequest, reader: jspb.BinaryReader): DataRequest;
}

export namespace DataRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
    skip: number,
    limit: number,
  }
}

export class Filter extends jspb.Message {
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

  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  clearMimeTypeList(): void;
  getMimeTypeList(): Array<string>;
  setMimeTypeList(value: Array<string>): void;
  addMimeType(value: string, index?: number): string;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): CaptureInterval | undefined;
  setInterval(value?: CaptureInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
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
    orgIdsList: Array<string>,
    mimeTypeList: Array<string>,
    interval?: CaptureInterval.AsObject,
  }
}

export class CaptureMetadata extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getComponentType(): string;
  setComponentType(value: string): void;

  getComponentModel(): string;
  setComponentModel(value: string): void;

  getComponentName(): string;
  setComponentName(value: string): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getMethodParametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMethodParametersMap(): void;
  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaptureMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CaptureMetadata): CaptureMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaptureMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaptureMetadata;
  static deserializeBinaryFromReader(message: CaptureMetadata, reader: jspb.BinaryReader): CaptureMetadata;
}

export namespace CaptureMetadata {
  export type AsObject = {
    orgId: string,
    locationId: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    componentType: string,
    componentModel: string,
    componentName: string,
    methodName: string,
    methodParametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    tagsList: Array<string>,
    mimeType: string,
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

export class TabularDataByFilterRequest extends jspb.Message {
  hasDataRequest(): boolean;
  clearDataRequest(): void;
  getDataRequest(): DataRequest | undefined;
  setDataRequest(value?: DataRequest): void;

  getCountOnly(): boolean;
  setCountOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabularDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TabularDataByFilterRequest): TabularDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabularDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabularDataByFilterRequest;
  static deserializeBinaryFromReader(message: TabularDataByFilterRequest, reader: jspb.BinaryReader): TabularDataByFilterRequest;
}

export namespace TabularDataByFilterRequest {
  export type AsObject = {
    dataRequest?: DataRequest.AsObject,
    countOnly: boolean,
  }
}

export class TabularDataByFilterResponse extends jspb.Message {
  clearMetadataList(): void;
  getMetadataList(): Array<CaptureMetadata>;
  setMetadataList(value: Array<CaptureMetadata>): void;
  addMetadata(value?: CaptureMetadata, index?: number): CaptureMetadata;

  clearDataList(): void;
  getDataList(): Array<TabularData>;
  setDataList(value: Array<TabularData>): void;
  addData(value?: TabularData, index?: number): TabularData;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabularDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TabularDataByFilterResponse): TabularDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabularDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabularDataByFilterResponse;
  static deserializeBinaryFromReader(message: TabularDataByFilterResponse, reader: jspb.BinaryReader): TabularDataByFilterResponse;
}

export namespace TabularDataByFilterResponse {
  export type AsObject = {
    metadataList: Array<CaptureMetadata.AsObject>,
    dataList: Array<TabularData.AsObject>,
    count: number,
  }
}

export class TabularData extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  getMetadataIndex(): number;
  setMetadataIndex(value: number): void;

  hasTimeRequested(): boolean;
  clearTimeRequested(): void;
  getTimeRequested(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeRequested(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeReceived(): boolean;
  clearTimeReceived(): void;
  getTimeReceived(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeReceived(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabularData.AsObject;
  static toObject(includeInstance: boolean, msg: TabularData): TabularData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabularData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabularData;
  static deserializeBinaryFromReader(message: TabularData, reader: jspb.BinaryReader): TabularData;
}

export namespace TabularData {
  export type AsObject = {
    data?: google_protobuf_struct_pb.Struct.AsObject,
    metadataIndex: number,
    timeRequested?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeReceived?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BinaryData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBinary(): Uint8Array | string;
  getBinary_asU8(): Uint8Array;
  getBinary_asB64(): string;
  setBinary(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryData.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryData): BinaryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryData;
  static deserializeBinaryFromReader(message: BinaryData, reader: jspb.BinaryReader): BinaryData;
}

export namespace BinaryData {
  export type AsObject = {
    id: string,
    binary: Uint8Array | string,
  }
}

export class BinaryDataByFilterRequest extends jspb.Message {
  hasDataRequest(): boolean;
  clearDataRequest(): void;
  getDataRequest(): DataRequest | undefined;
  setDataRequest(value?: DataRequest): void;

  getIncludeBinary(): boolean;
  setIncludeBinary(value: boolean): void;

  getCountOnly(): boolean;
  setCountOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryDataByFilterRequest): BinaryDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryDataByFilterRequest;
  static deserializeBinaryFromReader(message: BinaryDataByFilterRequest, reader: jspb.BinaryReader): BinaryDataByFilterRequest;
}

export namespace BinaryDataByFilterRequest {
  export type AsObject = {
    dataRequest?: DataRequest.AsObject,
    includeBinary: boolean,
    countOnly: boolean,
  }
}

export class BinaryDataByFilterResponse extends jspb.Message {
  clearMetadataList(): void;
  getMetadataList(): Array<BinaryMetadata>;
  setMetadataList(value: Array<BinaryMetadata>): void;
  addMetadata(value?: BinaryMetadata, index?: number): BinaryMetadata;

  clearDataList(): void;
  getDataList(): Array<BinaryData>;
  setDataList(value: Array<BinaryData>): void;
  addData(value?: BinaryData, index?: number): BinaryData;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryDataByFilterResponse): BinaryDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryDataByFilterResponse;
  static deserializeBinaryFromReader(message: BinaryDataByFilterResponse, reader: jspb.BinaryReader): BinaryDataByFilterResponse;
}

export namespace BinaryDataByFilterResponse {
  export type AsObject = {
    metadataList: Array<BinaryMetadata.AsObject>,
    dataList: Array<BinaryData.AsObject>,
    count: number,
  }
}

export class BinaryDataByIDsRequest extends jspb.Message {
  clearFileIdsList(): void;
  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): void;
  addFileIds(value: string, index?: number): string;

  getIncludeBinary(): boolean;
  setIncludeBinary(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryDataByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryDataByIDsRequest): BinaryDataByIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryDataByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryDataByIDsRequest;
  static deserializeBinaryFromReader(message: BinaryDataByIDsRequest, reader: jspb.BinaryReader): BinaryDataByIDsRequest;
}

export namespace BinaryDataByIDsRequest {
  export type AsObject = {
    fileIdsList: Array<string>,
    includeBinary: boolean,
  }
}

export class BinaryDataByIDsResponse extends jspb.Message {
  clearMetadataList(): void;
  getMetadataList(): Array<CaptureMetadata>;
  setMetadataList(value: Array<CaptureMetadata>): void;
  addMetadata(value?: CaptureMetadata, index?: number): CaptureMetadata;

  clearDataList(): void;
  getDataList(): Array<BinaryData>;
  setDataList(value: Array<BinaryData>): void;
  addData(value?: BinaryData, index?: number): BinaryData;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryDataByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryDataByIDsResponse): BinaryDataByIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryDataByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryDataByIDsResponse;
  static deserializeBinaryFromReader(message: BinaryDataByIDsResponse, reader: jspb.BinaryReader): BinaryDataByIDsResponse;
}

export namespace BinaryDataByIDsResponse {
  export type AsObject = {
    metadataList: Array<CaptureMetadata.AsObject>,
    dataList: Array<BinaryData.AsObject>,
    count: number,
  }
}

export class BinaryMetadata extends jspb.Message {
  hasCaptureMetadata(): boolean;
  clearCaptureMetadata(): void;
  getCaptureMetadata(): CaptureMetadata | undefined;
  setCaptureMetadata(value?: CaptureMetadata): void;

  hasTimeRequested(): boolean;
  clearTimeRequested(): void;
  getTimeRequested(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeRequested(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeReceived(): boolean;
  clearTimeReceived(): void;
  getTimeReceived(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeReceived(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getFileExt(): string;
  setFileExt(value: string): void;

  getUri(): string;
  setUri(value: string): void;

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
    captureMetadata?: CaptureMetadata.AsObject,
    timeRequested?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeReceived?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    fileExt: string,
    uri: string,
  }
}

