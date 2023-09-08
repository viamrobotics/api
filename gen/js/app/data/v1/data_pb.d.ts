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

  clearOrganizationIdsList(): void;
  getOrganizationIdsList(): Array<string>;
  setOrganizationIdsList(value: Array<string>): void;
  addOrganizationIds(value: string, index?: number): string;

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

  clearBboxLabelsList(): void;
  getBboxLabelsList(): Array<string>;
  setBboxLabelsList(value: Array<string>): void;
  addBboxLabels(value: string, index?: number): string;

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
    method: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    locationIdsList: Array<string>,
    organizationIdsList: Array<string>,
    mimeTypeList: Array<string>,
    interval?: CaptureInterval.AsObject,
    tagsFilter?: TagsFilter.AsObject,
    bboxLabelsList: Array<string>,
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
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

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
    organizationId: string,
    locationId: string,
    robotName: string,
    robotId: string,
    partName: string,
    partId: string,
    componentType: string,
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

  getIncludeInternalData(): boolean;
  setIncludeInternalData(value: boolean): void;

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
    includeInternalData: boolean,
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

  getTotalSizeBytes(): number;
  setTotalSizeBytes(value: number): void;

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
    totalSizeBytes: number,
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

  getIncludeInternalData(): boolean;
  setIncludeInternalData(value: boolean): void;

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
    includeInternalData: boolean,
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

  getTotalSizeBytes(): number;
  setTotalSizeBytes(value: number): void;

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
    totalSizeBytes: number,
  }
}

export class BinaryID extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryID.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryID): BinaryID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryID;
  static deserializeBinaryFromReader(message: BinaryID, reader: jspb.BinaryReader): BinaryID;
}

export namespace BinaryID {
  export type AsObject = {
    fileId: string,
    organizationId: string,
    locationId: string,
  }
}

export class BinaryDataByIDsRequest extends jspb.Message {
  getIncludeBinary(): boolean;
  setIncludeBinary(value: boolean): void;

  clearBinaryIdsList(): void;
  getBinaryIdsList(): Array<BinaryID>;
  setBinaryIdsList(value: Array<BinaryID>): void;
  addBinaryIds(value?: BinaryID, index?: number): BinaryID;

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
    includeBinary: boolean,
    binaryIdsList: Array<BinaryID.AsObject>,
  }
}

export class BinaryDataByIDsResponse extends jspb.Message {
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
    dataList: Array<BinaryData.AsObject>,
    count: number,
  }
}

export class BoundingBox extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getXMinNormalized(): number;
  setXMinNormalized(value: number): void;

  getYMinNormalized(): number;
  setYMinNormalized(value: number): void;

  getXMaxNormalized(): number;
  setXMaxNormalized(value: number): void;

  getYMaxNormalized(): number;
  setYMaxNormalized(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBox): BoundingBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBox;
  static deserializeBinaryFromReader(message: BoundingBox, reader: jspb.BinaryReader): BoundingBox;
}

export namespace BoundingBox {
  export type AsObject = {
    id: string,
    label: string,
    xMinNormalized: number,
    yMinNormalized: number,
    xMaxNormalized: number,
    yMaxNormalized: number,
  }
}

export class Annotations extends jspb.Message {
  clearBboxesList(): void;
  getBboxesList(): Array<BoundingBox>;
  setBboxesList(value: Array<BoundingBox>): void;
  addBboxes(value?: BoundingBox, index?: number): BoundingBox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotations.AsObject;
  static toObject(includeInstance: boolean, msg: Annotations): Annotations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Annotations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotations;
  static deserializeBinaryFromReader(message: Annotations, reader: jspb.BinaryReader): Annotations;
}

export namespace Annotations {
  export type AsObject = {
    bboxesList: Array<BoundingBox.AsObject>,
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

  hasAnnotations(): boolean;
  clearAnnotations(): void;
  getAnnotations(): Annotations | undefined;
  setAnnotations(value?: Annotations): void;

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
    annotations?: Annotations.AsObject,
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
  }
}

export class DeleteTabularDataRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getDeleteOlderThanDays(): number;
  setDeleteOlderThanDays(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTabularDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTabularDataRequest): DeleteTabularDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTabularDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTabularDataRequest;
  static deserializeBinaryFromReader(message: DeleteTabularDataRequest, reader: jspb.BinaryReader): DeleteTabularDataRequest;
}

export namespace DeleteTabularDataRequest {
  export type AsObject = {
    organizationId: string,
    deleteOlderThanDays: number,
  }
}

export class DeleteTabularDataResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTabularDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTabularDataResponse): DeleteTabularDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTabularDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTabularDataResponse;
  static deserializeBinaryFromReader(message: DeleteTabularDataResponse, reader: jspb.BinaryReader): DeleteTabularDataResponse;
}

export namespace DeleteTabularDataResponse {
  export type AsObject = {
    deletedCount: number,
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
  }
}

export class DeleteBinaryDataByIDsRequest extends jspb.Message {
  clearBinaryIdsList(): void;
  getBinaryIdsList(): Array<BinaryID>;
  setBinaryIdsList(value: Array<BinaryID>): void;
  addBinaryIds(value?: BinaryID, index?: number): BinaryID;

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
    binaryIdsList: Array<BinaryID.AsObject>,
  }
}

export class DeleteBinaryDataByIDsResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

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
  }
}

export class AddTagsToBinaryDataByIDsRequest extends jspb.Message {
  clearBinaryIdsList(): void;
  getBinaryIdsList(): Array<BinaryID>;
  setBinaryIdsList(value: Array<BinaryID>): void;
  addBinaryIds(value?: BinaryID, index?: number): BinaryID;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByIDsRequest): AddTagsToBinaryDataByIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByIDsRequest;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByIDsRequest, reader: jspb.BinaryReader): AddTagsToBinaryDataByIDsRequest;
}

export namespace AddTagsToBinaryDataByIDsRequest {
  export type AsObject = {
    binaryIdsList: Array<BinaryID.AsObject>,
    tagsList: Array<string>,
  }
}

export class AddTagsToBinaryDataByIDsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsToBinaryDataByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsToBinaryDataByIDsResponse): AddTagsToBinaryDataByIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTagsToBinaryDataByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsToBinaryDataByIDsResponse;
  static deserializeBinaryFromReader(message: AddTagsToBinaryDataByIDsResponse, reader: jspb.BinaryReader): AddTagsToBinaryDataByIDsResponse;
}

export namespace AddTagsToBinaryDataByIDsResponse {
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

export class RemoveTagsFromBinaryDataByIDsRequest extends jspb.Message {
  clearBinaryIdsList(): void;
  getBinaryIdsList(): Array<BinaryID>;
  setBinaryIdsList(value: Array<BinaryID>): void;
  addBinaryIds(value?: BinaryID, index?: number): BinaryID;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByIDsRequest): RemoveTagsFromBinaryDataByIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByIDsRequest;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByIDsRequest, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByIDsRequest;
}

export namespace RemoveTagsFromBinaryDataByIDsRequest {
  export type AsObject = {
    binaryIdsList: Array<BinaryID.AsObject>,
    tagsList: Array<string>,
  }
}

export class RemoveTagsFromBinaryDataByIDsResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsFromBinaryDataByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsFromBinaryDataByIDsResponse): RemoveTagsFromBinaryDataByIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTagsFromBinaryDataByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsFromBinaryDataByIDsResponse;
  static deserializeBinaryFromReader(message: RemoveTagsFromBinaryDataByIDsResponse, reader: jspb.BinaryReader): RemoveTagsFromBinaryDataByIDsResponse;
}

export namespace RemoveTagsFromBinaryDataByIDsResponse {
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

export class TagsByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagsByFilterRequest): TagsByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TagsByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsByFilterRequest;
  static deserializeBinaryFromReader(message: TagsByFilterRequest, reader: jspb.BinaryReader): TagsByFilterRequest;
}

export namespace TagsByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class TagsByFilterResponse extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TagsByFilterResponse): TagsByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TagsByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsByFilterResponse;
  static deserializeBinaryFromReader(message: TagsByFilterResponse, reader: jspb.BinaryReader): TagsByFilterResponse;
}

export namespace TagsByFilterResponse {
  export type AsObject = {
    tagsList: Array<string>,
  }
}

export class AddBoundingBoxToImageByIDRequest extends jspb.Message {
  hasBinaryId(): boolean;
  clearBinaryId(): void;
  getBinaryId(): BinaryID | undefined;
  setBinaryId(value?: BinaryID): void;

  getLabel(): string;
  setLabel(value: string): void;

  getXMinNormalized(): number;
  setXMinNormalized(value: number): void;

  getYMinNormalized(): number;
  setYMinNormalized(value: number): void;

  getXMaxNormalized(): number;
  setXMaxNormalized(value: number): void;

  getYMaxNormalized(): number;
  setYMaxNormalized(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBoundingBoxToImageByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBoundingBoxToImageByIDRequest): AddBoundingBoxToImageByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBoundingBoxToImageByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBoundingBoxToImageByIDRequest;
  static deserializeBinaryFromReader(message: AddBoundingBoxToImageByIDRequest, reader: jspb.BinaryReader): AddBoundingBoxToImageByIDRequest;
}

export namespace AddBoundingBoxToImageByIDRequest {
  export type AsObject = {
    binaryId?: BinaryID.AsObject,
    label: string,
    xMinNormalized: number,
    yMinNormalized: number,
    xMaxNormalized: number,
    yMaxNormalized: number,
  }
}

export class AddBoundingBoxToImageByIDResponse extends jspb.Message {
  getBboxId(): string;
  setBboxId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBoundingBoxToImageByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBoundingBoxToImageByIDResponse): AddBoundingBoxToImageByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBoundingBoxToImageByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBoundingBoxToImageByIDResponse;
  static deserializeBinaryFromReader(message: AddBoundingBoxToImageByIDResponse, reader: jspb.BinaryReader): AddBoundingBoxToImageByIDResponse;
}

export namespace AddBoundingBoxToImageByIDResponse {
  export type AsObject = {
    bboxId: string,
  }
}

export class RemoveBoundingBoxFromImageByIDRequest extends jspb.Message {
  hasBinaryId(): boolean;
  clearBinaryId(): void;
  getBinaryId(): BinaryID | undefined;
  setBinaryId(value?: BinaryID): void;

  getBboxId(): string;
  setBboxId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBoundingBoxFromImageByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBoundingBoxFromImageByIDRequest): RemoveBoundingBoxFromImageByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveBoundingBoxFromImageByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBoundingBoxFromImageByIDRequest;
  static deserializeBinaryFromReader(message: RemoveBoundingBoxFromImageByIDRequest, reader: jspb.BinaryReader): RemoveBoundingBoxFromImageByIDRequest;
}

export namespace RemoveBoundingBoxFromImageByIDRequest {
  export type AsObject = {
    binaryId?: BinaryID.AsObject,
    bboxId: string,
  }
}

export class RemoveBoundingBoxFromImageByIDResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBoundingBoxFromImageByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBoundingBoxFromImageByIDResponse): RemoveBoundingBoxFromImageByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveBoundingBoxFromImageByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBoundingBoxFromImageByIDResponse;
  static deserializeBinaryFromReader(message: RemoveBoundingBoxFromImageByIDResponse, reader: jspb.BinaryReader): RemoveBoundingBoxFromImageByIDResponse;
}

export namespace RemoveBoundingBoxFromImageByIDResponse {
  export type AsObject = {
  }
}

export class BoundingBoxLabelsByFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBoxLabelsByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBoxLabelsByFilterRequest): BoundingBoxLabelsByFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBoxLabelsByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBoxLabelsByFilterRequest;
  static deserializeBinaryFromReader(message: BoundingBoxLabelsByFilterRequest, reader: jspb.BinaryReader): BoundingBoxLabelsByFilterRequest;
}

export namespace BoundingBoxLabelsByFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class BoundingBoxLabelsByFilterResponse extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBoxLabelsByFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBoxLabelsByFilterResponse): BoundingBoxLabelsByFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBoxLabelsByFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBoxLabelsByFilterResponse;
  static deserializeBinaryFromReader(message: BoundingBoxLabelsByFilterResponse, reader: jspb.BinaryReader): BoundingBoxLabelsByFilterResponse;
}

export namespace BoundingBoxLabelsByFilterResponse {
  export type AsObject = {
    labelsList: Array<string>,
  }
}

export class ConfigureDatabaseUserRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureDatabaseUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureDatabaseUserRequest): ConfigureDatabaseUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureDatabaseUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureDatabaseUserRequest;
  static deserializeBinaryFromReader(message: ConfigureDatabaseUserRequest, reader: jspb.BinaryReader): ConfigureDatabaseUserRequest;
}

export namespace ConfigureDatabaseUserRequest {
  export type AsObject = {
    organizationId: string,
    password: string,
  }
}

export class ConfigureDatabaseUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureDatabaseUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureDatabaseUserResponse): ConfigureDatabaseUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureDatabaseUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureDatabaseUserResponse;
  static deserializeBinaryFromReader(message: ConfigureDatabaseUserResponse, reader: jspb.BinaryReader): ConfigureDatabaseUserResponse;
}

export namespace ConfigureDatabaseUserResponse {
  export type AsObject = {
  }
}

export class GetDatabaseConnectionRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseConnectionRequest): GetDatabaseConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatabaseConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseConnectionRequest;
  static deserializeBinaryFromReader(message: GetDatabaseConnectionRequest, reader: jspb.BinaryReader): GetDatabaseConnectionRequest;
}

export namespace GetDatabaseConnectionRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class GetDatabaseConnectionResponse extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseConnectionResponse): GetDatabaseConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatabaseConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseConnectionResponse;
  static deserializeBinaryFromReader(message: GetDatabaseConnectionResponse, reader: jspb.BinaryReader): GetDatabaseConnectionResponse;
}

export namespace GetDatabaseConnectionResponse {
  export type AsObject = {
    hostname: string,
  }
}

export interface OrderMap {
  ORDER_UNSPECIFIED: 0;
  ORDER_DESCENDING: 1;
  ORDER_ASCENDING: 2;
}

export const Order: OrderMap;

export interface TagsFilterTypeMap {
  TAGS_FILTER_TYPE_UNSPECIFIED: 0;
  TAGS_FILTER_TYPE_MATCH_BY_OR: 1;
  TAGS_FILTER_TYPE_TAGGED: 2;
  TAGS_FILTER_TYPE_UNTAGGED: 3;
}

export const TagsFilterType: TagsFilterTypeMap;

