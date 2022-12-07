// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Result extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
    message: string,
  }
}

export class DataRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  getLimit(): number;
  setLimit(value: number): void;

  getLast(): string;
  setLast(value: string): void;

  getSortOrder(): OrderMap[keyof OrderMap];
  setSortOrder(value: OrderMap[keyof OrderMap]): void;

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
    limit: number,
    last: string,
    sortOrder: OrderMap[keyof OrderMap],
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

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  clearLocationIdsList(): void;
  getLocationIdsList(): Array<string>;
  setLocationIdsList(value: Array<string>): void;
  addLocationIds(value: string, index?: number): string;

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

  hasTagsFilter(): boolean;
  clearTagsFilter(): void;
  getTagsFilter(): TagsFilter | undefined;
  setTagsFilter(value?: TagsFilter): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

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
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    locationIdsList: Array<string>,
    orgIdsList: Array<string>,
    mimeTypeList: Array<string>,
    interval?: CaptureInterval.AsObject,
    tagsFilter?: TagsFilter.AsObject,
    tagsList: Array<string>,
  }
}

export class TagsFilter extends jspb.Message {
  getType(): TagsFilterTypeMap[keyof TagsFilterTypeMap];
  setType(value: TagsFilterTypeMap[keyof TagsFilterTypeMap]): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TagsFilter): TagsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TagsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsFilter;
  static deserializeBinaryFromReader(message: TagsFilter, reader: jspb.BinaryReader): TagsFilter;
}

export namespace TagsFilter {
  export type AsObject = {
    type: TagsFilterTypeMap[keyof TagsFilterTypeMap],
    tagsList: Array<string>,
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

  getLast(): string;
  setLast(value: string): void;

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
    last: string,
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
  getBinary(): Uint8Array | string;
  getBinary_asU8(): Uint8Array;
  getBinary_asB64(): string;
  setBinary(value: Uint8Array | string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): BinaryMetadata | undefined;
  setMetadata(value?: BinaryMetadata): void;

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
    binary: Uint8Array | string,
    metadata?: BinaryMetadata.AsObject,
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
  clearDataList(): void;
  getDataList(): Array<BinaryData>;
  setDataList(value: Array<BinaryData>): void;
  addData(value?: BinaryData, index?: number): BinaryData;

  getCount(): number;
  setCount(value: number): void;

  getLast(): string;
  setLast(value: string): void;

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
    dataList: Array<BinaryData.AsObject>,
    count: number,
    last: string,
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
  clearDataList(): void;
  getDataList(): Array<BinaryData>;
  setDataList(value: Array<BinaryData>): void;
  addData(value?: BinaryData, index?: number): BinaryData;

  getCount(): number;
  setCount(value: number): void;

  getLast(): string;
  setLast(value: string): void;

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
    dataList: Array<BinaryData.AsObject>,
    count: number,
    last: string,
  }
}

export class BinaryMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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

  getFileName(): string;
  setFileName(value: string): void;

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
    id: string,
    captureMetadata?: CaptureMetadata.AsObject,
    timeRequested?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeReceived?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fileName: string,
    fileExt: string,
    uri: string,
  }
}

export class DeleteTabularDataByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTabularDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTabularDataByFilterRequest): DeleteTabularDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTabularDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTabularDataByFilterRequest;
  static deserializeBinaryFromReader(message: DeleteTabularDataByFilterRequest, reader: jspb.BinaryReader): DeleteTabularDataByFilterRequest;
}

export namespace DeleteTabularDataByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class DeleteTabularDataByFilterResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): Result | undefined;
  setResult(value?: Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTabularDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTabularDataByFilterResponse): DeleteTabularDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTabularDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTabularDataByFilterResponse;
  static deserializeBinaryFromReader(message: DeleteTabularDataByFilterResponse, reader: jspb.BinaryReader): DeleteTabularDataByFilterResponse;
}

export namespace DeleteTabularDataByFilterResponse {
  export type AsObject = {
    deletedCount: number,
    result?: Result.AsObject,
  }
}

export class DeleteBinaryDataByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBinaryDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBinaryDataByFilterRequest): DeleteBinaryDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBinaryDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBinaryDataByFilterRequest;
  static deserializeBinaryFromReader(message: DeleteBinaryDataByFilterRequest, reader: jspb.BinaryReader): DeleteBinaryDataByFilterRequest;
}

export namespace DeleteBinaryDataByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class DeleteBinaryDataByFilterResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): Result | undefined;
  setResult(value?: Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBinaryDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBinaryDataByFilterResponse): DeleteBinaryDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBinaryDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBinaryDataByFilterResponse;
  static deserializeBinaryFromReader(message: DeleteBinaryDataByFilterResponse, reader: jspb.BinaryReader): DeleteBinaryDataByFilterResponse;
}

export namespace DeleteBinaryDataByFilterResponse {
  export type AsObject = {
    deletedCount: number,
    result?: Result.AsObject,
  }
}

export class DeleteBinaryDataByIDsRequest extends jspb.Message {
  clearFileIdsList(): void;
  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): void;
  addFileIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBinaryDataByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBinaryDataByIDsRequest): DeleteBinaryDataByIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBinaryDataByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBinaryDataByIDsRequest;
  static deserializeBinaryFromReader(message: DeleteBinaryDataByIDsRequest, reader: jspb.BinaryReader): DeleteBinaryDataByIDsRequest;
}

export namespace DeleteBinaryDataByIDsRequest {
  export type AsObject = {
    fileIdsList: Array<string>,
  }
}

export class DeleteBinaryDataByIDsResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): Result | undefined;
  setResult(value?: Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBinaryDataByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBinaryDataByIDsResponse): DeleteBinaryDataByIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBinaryDataByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBinaryDataByIDsResponse;
  static deserializeBinaryFromReader(message: DeleteBinaryDataByIDsResponse, reader: jspb.BinaryReader): DeleteBinaryDataByIDsResponse;
}

export namespace DeleteBinaryDataByIDsResponse {
  export type AsObject = {
    deletedCount: number,
    result?: Result.AsObject,
  }
}

export class AddTagsToBinaryDataByFileIDsRequest extends jspb.Message {
  clearFileIdsList(): void;
  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): void;
  addFileIds(value: string, index?: number): string;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByFileIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByFileIDsRequest): AddTagsToBinaryDataByFileIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByFileIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByFileIDsRequest;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByFileIDsRequest, reader: jspb.BinaryReader): AddTagsToBinaryDataByFileIDsRequest;
}

export namespace AddTagsToBinaryDataByFileIDsRequest {
  export type AsObject = {
    fileIdsList: Array<string>,
    tagsList: Array<string>,
  }
}

export class AddTagsToBinaryDataByFileIDsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByFileIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByFileIDsResponse): AddTagsToBinaryDataByFileIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByFileIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByFileIDsResponse;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByFileIDsResponse, reader: jspb.BinaryReader): AddTagsToBinaryDataByFileIDsResponse;
}

export namespace AddTagsToBinaryDataByFileIDsResponse {
  export type AsObject = {
  }
}

export class AddTagsToBinaryDataByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByFilterRequest): AddTagsToBinaryDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByFilterRequest;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByFilterRequest, reader: jspb.BinaryReader): AddTagsToBinaryDataByFilterRequest;
}

export namespace AddTagsToBinaryDataByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
    tagsList: Array<string>,
  }
}

export class AddTagsToBinaryDataByFilterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByFilterResponse): AddTagsToBinaryDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByFilterResponse;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByFilterResponse, reader: jspb.BinaryReader): AddTagsToBinaryDataByFilterResponse;
}

export namespace AddTagsToBinaryDataByFilterResponse {
  export type AsObject = {
  }
}

export class RemoveTagsFromBinaryDataByFileIDsRequest extends jspb.Message {
  clearFileIdsList(): void;
  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): void;
  addFileIds(value: string, index?: number): string;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByFileIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByFileIDsRequest): RemoveTagsFromBinaryDataByFileIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByFileIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByFileIDsRequest;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByFileIDsRequest, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByFileIDsRequest;
}

export namespace RemoveTagsFromBinaryDataByFileIDsRequest {
  export type AsObject = {
    fileIdsList: Array<string>,
    tagsList: Array<string>,
  }
}

export class RemoveTagsFromBinaryDataByFileIDsResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByFileIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByFileIDsResponse): RemoveTagsFromBinaryDataByFileIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByFileIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByFileIDsResponse;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByFileIDsResponse, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByFileIDsResponse;
}

export namespace RemoveTagsFromBinaryDataByFileIDsResponse {
  export type AsObject = {
    deletedCount: number,
  }
}

export class RemoveTagsFromBinaryDataByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByFilterRequest): RemoveTagsFromBinaryDataByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByFilterRequest;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByFilterRequest, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByFilterRequest;
}

export namespace RemoveTagsFromBinaryDataByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
    tagsList: Array<string>,
  }
}

export class RemoveTagsFromBinaryDataByFilterResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByFilterResponse): RemoveTagsFromBinaryDataByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByFilterResponse;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByFilterResponse, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByFilterResponse;
}

export namespace RemoveTagsFromBinaryDataByFilterResponse {
  export type AsObject = {
    deletedCount: number,
  }
}

export interface OrderMap {
  ORDER_UNSPECIFIED: 0;
  ORDER_DESCENDING: 1;
  ORDER_ASCENDING: 2;
}

export const Order: OrderMap;

export interface StatusMap {
  STATUS_UNSPECIFIED: 0;
  STATUS_PARTIAL_SUCCESS: 1;
  STATUS_SUCCESS: 2;
}

export const Status: StatusMap;

export interface TagsFilterTypeMap {
  TAGS_FILTER_TYPE_UNSPECIFIED: 0;
  TAGS_FILTER_TYPE_MATCH_BY_OR: 1;
  TAGS_FILTER_TYPE_TAGGED: 2;
  TAGS_FILTER_TYPE_UNTAGGED: 3;
}

export const TagsFilterType: TagsFilterTypeMap;

