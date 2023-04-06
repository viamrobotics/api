// package: viam.service.mlmodel.v1
// file: service/mlmodel/v1/mlmodel.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class InferRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasInputData(): boolean;
  clearInputData(): void;
  getInputData(): google_protobuf_struct_pb.Struct | undefined;
  setInputData(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InferRequest): InferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferRequest;
  static deserializeBinaryFromReader(message: InferRequest, reader: jspb.BinaryReader): InferRequest;
}

export namespace InferRequest {
  export type AsObject = {
    name: string,
    inputData?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class InferResponse extends jspb.Message {
  hasOutputData(): boolean;
  clearOutputData(): void;
  getOutputData(): google_protobuf_struct_pb.Struct | undefined;
  setOutputData(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InferResponse): InferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferResponse;
  static deserializeBinaryFromReader(message: InferResponse, reader: jspb.BinaryReader): InferResponse;
}

export namespace InferResponse {
  export type AsObject = {
    outputData?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataRequest): MetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataRequest;
  static deserializeBinaryFromReader(message: MetadataRequest, reader: jspb.BinaryReader): MetadataRequest;
}

export namespace MetadataRequest {
  export type AsObject = {
    name: string,
  }
}

export class MetadataResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataResponse): MetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataResponse;
  static deserializeBinaryFromReader(message: MetadataResponse, reader: jspb.BinaryReader): MetadataResponse;
}

export namespace MetadataResponse {
  export type AsObject = {
    metadata?: Metadata.AsObject,
  }
}

export class Metadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearInputInfoList(): void;
  getInputInfoList(): Array<TensorInfo>;
  setInputInfoList(value: Array<TensorInfo>): void;
  addInputInfo(value?: TensorInfo, index?: number): TensorInfo;

  clearOutputInfoList(): void;
  getOutputInfoList(): Array<TensorInfo>;
  setOutputInfoList(value: Array<TensorInfo>): void;
  addOutputInfo(value?: TensorInfo, index?: number): TensorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    name: string,
    type: string,
    description: string,
    inputInfoList: Array<TensorInfo.AsObject>,
    outputInfoList: Array<TensorInfo.AsObject>,
  }
}

export class TensorInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDataType(): string;
  setDataType(value: string): void;

  getNDim(): number;
  setNDim(value: number): void;

  clearAssociatedFilesList(): void;
  getAssociatedFilesList(): Array<File>;
  setAssociatedFilesList(value: Array<File>): void;
  addAssociatedFiles(value?: File, index?: number): File;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TensorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TensorInfo): TensorInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TensorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TensorInfo;
  static deserializeBinaryFromReader(message: TensorInfo, reader: jspb.BinaryReader): TensorInfo;
}

export namespace TensorInfo {
  export type AsObject = {
    name: string,
    description: string,
    dataType: string,
    nDim: number,
    associatedFilesList: Array<File.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class File extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelType(): LabelTypeMap[keyof LabelTypeMap];
  setLabelType(value: LabelTypeMap[keyof LabelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    name: string,
    description: string,
    labelType: LabelTypeMap[keyof LabelTypeMap],
  }
}

export interface LabelTypeMap {
  LABEL_TYPE_UNSPECIFIED: 0;
  LABEL_TYPE_TENSOR_VALUE: 1;
  LABEL_TYPE_TENSOR_AXIS: 2;
}

export const LabelType: LabelTypeMap;

