// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetDetectionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectionsRequest): GetDetectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectionsRequest;
  static deserializeBinaryFromReader(message: GetDetectionsRequest, reader: jspb.BinaryReader): GetDetectionsRequest;
}

export namespace GetDetectionsRequest {
  export type AsObject = {
    name: string,
    image: Uint8Array | string,
    width: number,
    height: number,
    mimeType: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetDetectionsResponse extends jspb.Message {
  clearDetectionsList(): void;
  getDetectionsList(): Array<Detection>;
  setDetectionsList(value: Array<Detection>): void;
  addDetections(value?: Detection, index?: number): Detection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectionsResponse): GetDetectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectionsResponse;
  static deserializeBinaryFromReader(message: GetDetectionsResponse, reader: jspb.BinaryReader): GetDetectionsResponse;
}

export namespace GetDetectionsResponse {
  export type AsObject = {
    detectionsList: Array<Detection.AsObject>,
  }
}

export class GetDetectionsFromCameraRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCameraName(): string;
  setCameraName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectionsFromCameraRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectionsFromCameraRequest): GetDetectionsFromCameraRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectionsFromCameraRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectionsFromCameraRequest;
  static deserializeBinaryFromReader(message: GetDetectionsFromCameraRequest, reader: jspb.BinaryReader): GetDetectionsFromCameraRequest;
}

export namespace GetDetectionsFromCameraRequest {
  export type AsObject = {
    name: string,
    cameraName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetDetectionsFromCameraResponse extends jspb.Message {
  clearDetectionsList(): void;
  getDetectionsList(): Array<Detection>;
  setDetectionsList(value: Array<Detection>): void;
  addDetections(value?: Detection, index?: number): Detection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectionsFromCameraResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectionsFromCameraResponse): GetDetectionsFromCameraResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectionsFromCameraResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectionsFromCameraResponse;
  static deserializeBinaryFromReader(message: GetDetectionsFromCameraResponse, reader: jspb.BinaryReader): GetDetectionsFromCameraResponse;
}

export namespace GetDetectionsFromCameraResponse {
  export type AsObject = {
    detectionsList: Array<Detection.AsObject>,
  }
}

export class Detection extends jspb.Message {
  hasXMin(): boolean;
  clearXMin(): void;
  getXMin(): number;
  setXMin(value: number): void;

  hasYMin(): boolean;
  clearYMin(): void;
  getYMin(): number;
  setYMin(value: number): void;

  hasXMax(): boolean;
  clearXMax(): void;
  getXMax(): number;
  setXMax(value: number): void;

  hasYMax(): boolean;
  clearYMax(): void;
  getYMax(): number;
  setYMax(value: number): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getClassName(): string;
  setClassName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Detection.AsObject;
  static toObject(includeInstance: boolean, msg: Detection): Detection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Detection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Detection;
  static deserializeBinaryFromReader(message: Detection, reader: jspb.BinaryReader): Detection;
}

export namespace Detection {
  export type AsObject = {
    xMin: number,
    yMin: number,
    xMax: number,
    yMax: number,
    confidence: number,
    className: string,
  }
}

export class GetClassificationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getN(): number;
  setN(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassificationsRequest): GetClassificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassificationsRequest;
  static deserializeBinaryFromReader(message: GetClassificationsRequest, reader: jspb.BinaryReader): GetClassificationsRequest;
}

export namespace GetClassificationsRequest {
  export type AsObject = {
    name: string,
    image: Uint8Array | string,
    width: number,
    height: number,
    mimeType: string,
    n: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetClassificationsResponse extends jspb.Message {
  clearClassificationsList(): void;
  getClassificationsList(): Array<Classification>;
  setClassificationsList(value: Array<Classification>): void;
  addClassifications(value?: Classification, index?: number): Classification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassificationsResponse): GetClassificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassificationsResponse;
  static deserializeBinaryFromReader(message: GetClassificationsResponse, reader: jspb.BinaryReader): GetClassificationsResponse;
}

export namespace GetClassificationsResponse {
  export type AsObject = {
    classificationsList: Array<Classification.AsObject>,
  }
}

export class GetClassificationsFromCameraRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCameraName(): string;
  setCameraName(value: string): void;

  getN(): number;
  setN(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassificationsFromCameraRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassificationsFromCameraRequest): GetClassificationsFromCameraRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassificationsFromCameraRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassificationsFromCameraRequest;
  static deserializeBinaryFromReader(message: GetClassificationsFromCameraRequest, reader: jspb.BinaryReader): GetClassificationsFromCameraRequest;
}

export namespace GetClassificationsFromCameraRequest {
  export type AsObject = {
    name: string,
    cameraName: string,
    n: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetClassificationsFromCameraResponse extends jspb.Message {
  clearClassificationsList(): void;
  getClassificationsList(): Array<Classification>;
  setClassificationsList(value: Array<Classification>): void;
  addClassifications(value?: Classification, index?: number): Classification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassificationsFromCameraResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassificationsFromCameraResponse): GetClassificationsFromCameraResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassificationsFromCameraResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassificationsFromCameraResponse;
  static deserializeBinaryFromReader(message: GetClassificationsFromCameraResponse, reader: jspb.BinaryReader): GetClassificationsFromCameraResponse;
}

export namespace GetClassificationsFromCameraResponse {
  export type AsObject = {
    classificationsList: Array<Classification.AsObject>,
  }
}

export class Classification extends jspb.Message {
  getClassName(): string;
  setClassName(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Classification.AsObject;
  static toObject(includeInstance: boolean, msg: Classification): Classification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Classification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Classification;
  static deserializeBinaryFromReader(message: Classification, reader: jspb.BinaryReader): Classification;
}

export namespace Classification {
  export type AsObject = {
    className: string,
    confidence: number,
  }
}

export class GetObjectPointCloudsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCameraName(): string;
  setCameraName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectPointCloudsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectPointCloudsRequest): GetObjectPointCloudsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectPointCloudsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectPointCloudsRequest;
  static deserializeBinaryFromReader(message: GetObjectPointCloudsRequest, reader: jspb.BinaryReader): GetObjectPointCloudsRequest;
}

export namespace GetObjectPointCloudsRequest {
  export type AsObject = {
    name: string,
    cameraName: string,
    mimeType: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetObjectPointCloudsResponse extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): void;

  clearObjectsList(): void;
  getObjectsList(): Array<common_v1_common_pb.PointCloudObject>;
  setObjectsList(value: Array<common_v1_common_pb.PointCloudObject>): void;
  addObjects(value?: common_v1_common_pb.PointCloudObject, index?: number): common_v1_common_pb.PointCloudObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectPointCloudsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectPointCloudsResponse): GetObjectPointCloudsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectPointCloudsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectPointCloudsResponse;
  static deserializeBinaryFromReader(message: GetObjectPointCloudsResponse, reader: jspb.BinaryReader): GetObjectPointCloudsResponse;
}

export namespace GetObjectPointCloudsResponse {
  export type AsObject = {
    mimeType: string,
    objectsList: Array<common_v1_common_pb.PointCloudObject.AsObject>,
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesRequest): GetPropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesRequest;
  static deserializeBinaryFromReader(message: GetPropertiesRequest, reader: jspb.BinaryReader): GetPropertiesRequest;
}

export namespace GetPropertiesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPropertiesResponse extends jspb.Message {
  getClassificationsSupported(): boolean;
  setClassificationsSupported(value: boolean): void;

  getDetectionsSupported(): boolean;
  setDetectionsSupported(value: boolean): void;

  getObjectPointCloudsSupported(): boolean;
  setObjectPointCloudsSupported(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesResponse): GetPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesResponse;
  static deserializeBinaryFromReader(message: GetPropertiesResponse, reader: jspb.BinaryReader): GetPropertiesResponse;
}

export namespace GetPropertiesResponse {
  export type AsObject = {
    classificationsSupported: boolean,
    detectionsSupported: boolean,
    objectPointCloudsSupported: boolean,
  }
}

