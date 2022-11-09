// package: viam.component.camera.v1
// file: component/camera/v1/camera.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_httpbody_pb from "../../../google/api/httpbody_pb";

export class GetImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetImageRequest): GetImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImageRequest;
  static deserializeBinaryFromReader(message: GetImageRequest, reader: jspb.BinaryReader): GetImageRequest;
}

export namespace GetImageRequest {
  export type AsObject = {
    name: string,
    mimeType: string,
  }
}

export class GetImageResponse extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetImageResponse): GetImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImageResponse;
  static deserializeBinaryFromReader(message: GetImageResponse, reader: jspb.BinaryReader): GetImageResponse;
}

export namespace GetImageResponse {
  export type AsObject = {
    mimeType: string,
    image: Uint8Array | string,
  }
}

export class RenderFrameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenderFrameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenderFrameRequest): RenderFrameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenderFrameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenderFrameRequest;
  static deserializeBinaryFromReader(message: RenderFrameRequest, reader: jspb.BinaryReader): RenderFrameRequest;
}

export namespace RenderFrameRequest {
  export type AsObject = {
    name: string,
    mimeType: string,
  }
}

export class GetPointCloudRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudRequest): GetPointCloudRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudRequest;
  static deserializeBinaryFromReader(message: GetPointCloudRequest, reader: jspb.BinaryReader): GetPointCloudRequest;
}

export namespace GetPointCloudRequest {
  export type AsObject = {
    name: string,
    mimeType: string,
  }
}

export class GetPointCloudResponse extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): void;

  getPointCloud(): Uint8Array | string;
  getPointCloud_asU8(): Uint8Array;
  getPointCloud_asB64(): string;
  setPointCloud(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudResponse): GetPointCloudResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudResponse;
  static deserializeBinaryFromReader(message: GetPointCloudResponse, reader: jspb.BinaryReader): GetPointCloudResponse;
}

export namespace GetPointCloudResponse {
  export type AsObject = {
    mimeType: string,
    pointCloud: Uint8Array | string,
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
  }
}

export class GetPropertiesResponse extends jspb.Message {
  getSupportsPcd(): boolean;
  setSupportsPcd(value: boolean): void;

  hasIntrinsicParameters(): boolean;
  clearIntrinsicParameters(): void;
  getIntrinsicParameters(): IntrinsicParameters | undefined;
  setIntrinsicParameters(value?: IntrinsicParameters): void;

  hasDistortionParameters(): boolean;
  clearDistortionParameters(): void;
  getDistortionParameters(): DistortionParameters | undefined;
  setDistortionParameters(value?: DistortionParameters): void;

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
    supportsPcd: boolean,
    intrinsicParameters?: IntrinsicParameters.AsObject,
    distortionParameters?: DistortionParameters.AsObject,
  }
}

export class Webcams extends jspb.Message {
  clearWebcamsList(): void;
  getWebcamsList(): Array<Webcam>;
  setWebcamsList(value: Array<Webcam>): void;
  addWebcams(value?: Webcam, index?: number): Webcam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Webcams.AsObject;
  static toObject(includeInstance: boolean, msg: Webcams): Webcams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Webcams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Webcams;
  static deserializeBinaryFromReader(message: Webcams, reader: jspb.BinaryReader): Webcams;
}

export namespace Webcams {
  export type AsObject = {
    webcamsList: Array<Webcam.AsObject>,
  }
}

export class Webcam extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): void;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Webcam.AsObject;
  static toObject(includeInstance: boolean, msg: Webcam): Webcam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Webcam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Webcam;
  static deserializeBinaryFromReader(message: Webcam, reader: jspb.BinaryReader): Webcam;
}

export namespace Webcam {
  export type AsObject = {
    label: string,
    status: string,
    propertiesList: Array<Property.AsObject>,
  }
}

export class Property extends jspb.Message {
  getWidthPx(): number;
  setWidthPx(value: number): void;

  getHeightPx(): number;
  setHeightPx(value: number): void;

  getFrameFormat(): string;
  setFrameFormat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    widthPx: number,
    heightPx: number,
    frameFormat: string,
  }
}

export class IntrinsicParameters extends jspb.Message {
  getWidthPx(): number;
  setWidthPx(value: number): void;

  getHeightPx(): number;
  setHeightPx(value: number): void;

  getFocalXPx(): number;
  setFocalXPx(value: number): void;

  getFocalYPx(): number;
  setFocalYPx(value: number): void;

  getCenterXPx(): number;
  setCenterXPx(value: number): void;

  getCenterYPx(): number;
  setCenterYPx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntrinsicParameters.AsObject;
  static toObject(includeInstance: boolean, msg: IntrinsicParameters): IntrinsicParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntrinsicParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntrinsicParameters;
  static deserializeBinaryFromReader(message: IntrinsicParameters, reader: jspb.BinaryReader): IntrinsicParameters;
}

export namespace IntrinsicParameters {
  export type AsObject = {
    widthPx: number,
    heightPx: number,
    focalXPx: number,
    focalYPx: number,
    centerXPx: number,
    centerYPx: number,
  }
}

export class DistortionParameters extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  clearParametersList(): void;
  getParametersList(): Array<number>;
  setParametersList(value: Array<number>): void;
  addParameters(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistortionParameters.AsObject;
  static toObject(includeInstance: boolean, msg: DistortionParameters): DistortionParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistortionParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistortionParameters;
  static deserializeBinaryFromReader(message: DistortionParameters, reader: jspb.BinaryReader): DistortionParameters;
}

export namespace DistortionParameters {
  export type AsObject = {
    model: string,
    parametersList: Array<number>,
  }
}

