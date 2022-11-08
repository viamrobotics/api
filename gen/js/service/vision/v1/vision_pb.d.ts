// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetModelParameterSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getModelType(): string;
  setModelType(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelParameterSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelParameterSchemaRequest): GetModelParameterSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelParameterSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelParameterSchemaRequest;
  static deserializeBinaryFromReader(message: GetModelParameterSchemaRequest, reader: jspb.BinaryReader): GetModelParameterSchemaRequest;
}

export namespace GetModelParameterSchemaRequest {
  export type AsObject = {
    name: string,
    modelType: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetModelParameterSchemaResponse extends jspb.Message {
  getModelParameterSchema(): Uint8Array | string;
  getModelParameterSchema_asU8(): Uint8Array;
  getModelParameterSchema_asB64(): string;
  setModelParameterSchema(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelParameterSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelParameterSchemaResponse): GetModelParameterSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelParameterSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelParameterSchemaResponse;
  static deserializeBinaryFromReader(message: GetModelParameterSchemaResponse, reader: jspb.BinaryReader): GetModelParameterSchemaResponse;
}

export namespace GetModelParameterSchemaResponse {
  export type AsObject = {
    modelParameterSchema: Uint8Array | string,
  }
}

export class GetDetectorNamesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectorNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectorNamesRequest): GetDetectorNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectorNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectorNamesRequest;
  static deserializeBinaryFromReader(message: GetDetectorNamesRequest, reader: jspb.BinaryReader): GetDetectorNamesRequest;
}

export namespace GetDetectorNamesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetDetectorNamesResponse extends jspb.Message {
  clearDetectorNamesList(): void;
  getDetectorNamesList(): Array<string>;
  setDetectorNamesList(value: Array<string>): void;
  addDetectorNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetectorNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetectorNamesResponse): GetDetectorNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetectorNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetectorNamesResponse;
  static deserializeBinaryFromReader(message: GetDetectorNamesResponse, reader: jspb.BinaryReader): GetDetectorNamesResponse;
}

export namespace GetDetectorNamesResponse {
  export type AsObject = {
    detectorNamesList: Array<string>,
  }
}

export class AddDetectorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDetectorName(): string;
  setDetectorName(value: string): void;

  getDetectorModelType(): string;
  setDetectorModelType(value: string): void;

  hasDetectorParameters(): boolean;
  clearDetectorParameters(): void;
  getDetectorParameters(): google_protobuf_struct_pb.Struct | undefined;
  setDetectorParameters(value?: google_protobuf_struct_pb.Struct): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDetectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDetectorRequest): AddDetectorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDetectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDetectorRequest;
  static deserializeBinaryFromReader(message: AddDetectorRequest, reader: jspb.BinaryReader): AddDetectorRequest;
}

export namespace AddDetectorRequest {
  export type AsObject = {
    name: string,
    detectorName: string,
    detectorModelType: string,
    detectorParameters?: google_protobuf_struct_pb.Struct.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddDetectorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDetectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddDetectorResponse): AddDetectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDetectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDetectorResponse;
  static deserializeBinaryFromReader(message: AddDetectorResponse, reader: jspb.BinaryReader): AddDetectorResponse;
}

export namespace AddDetectorResponse {
  export type AsObject = {
  }
}

export class RemoveDetectorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDetectorName(): string;
  setDetectorName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDetectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDetectorRequest): RemoveDetectorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDetectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDetectorRequest;
  static deserializeBinaryFromReader(message: RemoveDetectorRequest, reader: jspb.BinaryReader): RemoveDetectorRequest;
}

export namespace RemoveDetectorRequest {
  export type AsObject = {
    name: string,
    detectorName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RemoveDetectorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDetectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDetectorResponse): RemoveDetectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDetectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDetectorResponse;
  static deserializeBinaryFromReader(message: RemoveDetectorResponse, reader: jspb.BinaryReader): RemoveDetectorResponse;
}

export namespace RemoveDetectorResponse {
  export type AsObject = {
  }
}

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

  getDetectorName(): string;
  setDetectorName(value: string): void;

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
    detectorName: string,
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

  getDetectorName(): string;
  setDetectorName(value: string): void;

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
    detectorName: string,
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

export class GetClassifierNamesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassifierNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassifierNamesRequest): GetClassifierNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassifierNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassifierNamesRequest;
  static deserializeBinaryFromReader(message: GetClassifierNamesRequest, reader: jspb.BinaryReader): GetClassifierNamesRequest;
}

export namespace GetClassifierNamesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetClassifierNamesResponse extends jspb.Message {
  clearClassifierNamesList(): void;
  getClassifierNamesList(): Array<string>;
  setClassifierNamesList(value: Array<string>): void;
  addClassifierNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClassifierNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClassifierNamesResponse): GetClassifierNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClassifierNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClassifierNamesResponse;
  static deserializeBinaryFromReader(message: GetClassifierNamesResponse, reader: jspb.BinaryReader): GetClassifierNamesResponse;
}

export namespace GetClassifierNamesResponse {
  export type AsObject = {
    classifierNamesList: Array<string>,
  }
}

export class AddClassifierRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getClassifierName(): string;
  setClassifierName(value: string): void;

  getClassifierModelType(): string;
  setClassifierModelType(value: string): void;

  hasClassifierParameters(): boolean;
  clearClassifierParameters(): void;
  getClassifierParameters(): google_protobuf_struct_pb.Struct | undefined;
  setClassifierParameters(value?: google_protobuf_struct_pb.Struct): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddClassifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddClassifierRequest): AddClassifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddClassifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddClassifierRequest;
  static deserializeBinaryFromReader(message: AddClassifierRequest, reader: jspb.BinaryReader): AddClassifierRequest;
}

export namespace AddClassifierRequest {
  export type AsObject = {
    name: string,
    classifierName: string,
    classifierModelType: string,
    classifierParameters?: google_protobuf_struct_pb.Struct.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddClassifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddClassifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddClassifierResponse): AddClassifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddClassifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddClassifierResponse;
  static deserializeBinaryFromReader(message: AddClassifierResponse, reader: jspb.BinaryReader): AddClassifierResponse;
}

export namespace AddClassifierResponse {
  export type AsObject = {
  }
}

export class RemoveClassifierRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getClassifierName(): string;
  setClassifierName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveClassifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveClassifierRequest): RemoveClassifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveClassifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveClassifierRequest;
  static deserializeBinaryFromReader(message: RemoveClassifierRequest, reader: jspb.BinaryReader): RemoveClassifierRequest;
}

export namespace RemoveClassifierRequest {
  export type AsObject = {
    name: string,
    classifierName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RemoveClassifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveClassifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveClassifierResponse): RemoveClassifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveClassifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveClassifierResponse;
  static deserializeBinaryFromReader(message: RemoveClassifierResponse, reader: jspb.BinaryReader): RemoveClassifierResponse;
}

export namespace RemoveClassifierResponse {
  export type AsObject = {
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

  getClassifierName(): string;
  setClassifierName(value: string): void;

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
    classifierName: string,
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

  getClassifierName(): string;
  setClassifierName(value: string): void;

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
    classifierName: string,
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

export class GetSegmenterNamesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSegmenterNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSegmenterNamesRequest): GetSegmenterNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSegmenterNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSegmenterNamesRequest;
  static deserializeBinaryFromReader(message: GetSegmenterNamesRequest, reader: jspb.BinaryReader): GetSegmenterNamesRequest;
}

export namespace GetSegmenterNamesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetSegmenterNamesResponse extends jspb.Message {
  clearSegmenterNamesList(): void;
  getSegmenterNamesList(): Array<string>;
  setSegmenterNamesList(value: Array<string>): void;
  addSegmenterNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSegmenterNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSegmenterNamesResponse): GetSegmenterNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSegmenterNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSegmenterNamesResponse;
  static deserializeBinaryFromReader(message: GetSegmenterNamesResponse, reader: jspb.BinaryReader): GetSegmenterNamesResponse;
}

export namespace GetSegmenterNamesResponse {
  export type AsObject = {
    segmenterNamesList: Array<string>,
  }
}

export class AddSegmenterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSegmenterName(): string;
  setSegmenterName(value: string): void;

  getSegmenterModelType(): string;
  setSegmenterModelType(value: string): void;

  hasSegmenterParameters(): boolean;
  clearSegmenterParameters(): void;
  getSegmenterParameters(): google_protobuf_struct_pb.Struct | undefined;
  setSegmenterParameters(value?: google_protobuf_struct_pb.Struct): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSegmenterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSegmenterRequest): AddSegmenterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSegmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSegmenterRequest;
  static deserializeBinaryFromReader(message: AddSegmenterRequest, reader: jspb.BinaryReader): AddSegmenterRequest;
}

export namespace AddSegmenterRequest {
  export type AsObject = {
    name: string,
    segmenterName: string,
    segmenterModelType: string,
    segmenterParameters?: google_protobuf_struct_pb.Struct.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddSegmenterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSegmenterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSegmenterResponse): AddSegmenterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSegmenterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSegmenterResponse;
  static deserializeBinaryFromReader(message: AddSegmenterResponse, reader: jspb.BinaryReader): AddSegmenterResponse;
}

export namespace AddSegmenterResponse {
  export type AsObject = {
  }
}

export class RemoveSegmenterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSegmenterName(): string;
  setSegmenterName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSegmenterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSegmenterRequest): RemoveSegmenterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSegmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSegmenterRequest;
  static deserializeBinaryFromReader(message: RemoveSegmenterRequest, reader: jspb.BinaryReader): RemoveSegmenterRequest;
}

export namespace RemoveSegmenterRequest {
  export type AsObject = {
    name: string,
    segmenterName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RemoveSegmenterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSegmenterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSegmenterResponse): RemoveSegmenterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSegmenterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSegmenterResponse;
  static deserializeBinaryFromReader(message: RemoveSegmenterResponse, reader: jspb.BinaryReader): RemoveSegmenterResponse;
}

export namespace RemoveSegmenterResponse {
  export type AsObject = {
  }
}

export class GetObjectPointCloudsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCameraName(): string;
  setCameraName(value: string): void;

  getSegmenterName(): string;
  setSegmenterName(value: string): void;

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
    segmenterName: string,
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

