// package: viam.service.mlmodel.v1
// file: service/mlmodel/v1/mlmodel.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class InferRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasInputTensors(): boolean;
  clearInputTensors(): void;
  getInputTensors(): FlatTensors | undefined;
  setInputTensors(value?: FlatTensors): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

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
    inputTensors?: FlatTensors.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class InferResponse extends jspb.Message {
  hasOutputTensors(): boolean;
  clearOutputTensors(): void;
  getOutputTensors(): FlatTensors | undefined;
  setOutputTensors(value?: FlatTensors): void;

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
    outputTensors?: FlatTensors.AsObject,
  }
}

export class MetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

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
    extra?: google_protobuf_struct_pb.Struct.AsObject,
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

  clearShapeList(): void;
  getShapeList(): Array<number>;
  setShapeList(value: Array<number>): void;
  addShape(value: number, index?: number): number;

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
    shapeList: Array<number>,
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

export class FlatTensorDataInt8 extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataInt8.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataInt8): FlatTensorDataInt8.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataInt8, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataInt8;
  static deserializeBinaryFromReader(message: FlatTensorDataInt8, reader: jspb.BinaryReader): FlatTensorDataInt8;
}

export namespace FlatTensorDataInt8 {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class FlatTensorDataUInt8 extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataUInt8.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataUInt8): FlatTensorDataUInt8.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataUInt8, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataUInt8;
  static deserializeBinaryFromReader(message: FlatTensorDataUInt8, reader: jspb.BinaryReader): FlatTensorDataUInt8;
}

export namespace FlatTensorDataUInt8 {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class FlatTensorDataInt16 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataInt16.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataInt16): FlatTensorDataInt16.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataInt16, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataInt16;
  static deserializeBinaryFromReader(message: FlatTensorDataInt16, reader: jspb.BinaryReader): FlatTensorDataInt16;
}

export namespace FlatTensorDataInt16 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataUInt16 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataUInt16.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataUInt16): FlatTensorDataUInt16.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataUInt16, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataUInt16;
  static deserializeBinaryFromReader(message: FlatTensorDataUInt16, reader: jspb.BinaryReader): FlatTensorDataUInt16;
}

export namespace FlatTensorDataUInt16 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataInt32 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataInt32.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataInt32): FlatTensorDataInt32.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataInt32, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataInt32;
  static deserializeBinaryFromReader(message: FlatTensorDataInt32, reader: jspb.BinaryReader): FlatTensorDataInt32;
}

export namespace FlatTensorDataInt32 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataUInt32 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataUInt32.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataUInt32): FlatTensorDataUInt32.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataUInt32, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataUInt32;
  static deserializeBinaryFromReader(message: FlatTensorDataUInt32, reader: jspb.BinaryReader): FlatTensorDataUInt32;
}

export namespace FlatTensorDataUInt32 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataInt64 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataInt64.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataInt64): FlatTensorDataInt64.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataInt64, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataInt64;
  static deserializeBinaryFromReader(message: FlatTensorDataInt64, reader: jspb.BinaryReader): FlatTensorDataInt64;
}

export namespace FlatTensorDataInt64 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataUInt64 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataUInt64.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataUInt64): FlatTensorDataUInt64.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataUInt64, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataUInt64;
  static deserializeBinaryFromReader(message: FlatTensorDataUInt64, reader: jspb.BinaryReader): FlatTensorDataUInt64;
}

export namespace FlatTensorDataUInt64 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataFloat extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataFloat.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataFloat): FlatTensorDataFloat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataFloat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataFloat;
  static deserializeBinaryFromReader(message: FlatTensorDataFloat, reader: jspb.BinaryReader): FlatTensorDataFloat;
}

export namespace FlatTensorDataFloat {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensorDataDouble extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensorDataDouble.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensorDataDouble): FlatTensorDataDouble.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensorDataDouble, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensorDataDouble;
  static deserializeBinaryFromReader(message: FlatTensorDataDouble, reader: jspb.BinaryReader): FlatTensorDataDouble;
}

export namespace FlatTensorDataDouble {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FlatTensor extends jspb.Message {
  clearShapeList(): void;
  getShapeList(): Array<number>;
  setShapeList(value: Array<number>): void;
  addShape(value: number, index?: number): number;

  hasInt8Tensor(): boolean;
  clearInt8Tensor(): void;
  getInt8Tensor(): FlatTensorDataInt8 | undefined;
  setInt8Tensor(value?: FlatTensorDataInt8): void;

  hasUint8Tensor(): boolean;
  clearUint8Tensor(): void;
  getUint8Tensor(): FlatTensorDataUInt8 | undefined;
  setUint8Tensor(value?: FlatTensorDataUInt8): void;

  hasInt16Tensor(): boolean;
  clearInt16Tensor(): void;
  getInt16Tensor(): FlatTensorDataInt16 | undefined;
  setInt16Tensor(value?: FlatTensorDataInt16): void;

  hasUint16Tensor(): boolean;
  clearUint16Tensor(): void;
  getUint16Tensor(): FlatTensorDataUInt16 | undefined;
  setUint16Tensor(value?: FlatTensorDataUInt16): void;

  hasInt32Tensor(): boolean;
  clearInt32Tensor(): void;
  getInt32Tensor(): FlatTensorDataInt32 | undefined;
  setInt32Tensor(value?: FlatTensorDataInt32): void;

  hasUint32Tensor(): boolean;
  clearUint32Tensor(): void;
  getUint32Tensor(): FlatTensorDataUInt32 | undefined;
  setUint32Tensor(value?: FlatTensorDataUInt32): void;

  hasInt64Tensor(): boolean;
  clearInt64Tensor(): void;
  getInt64Tensor(): FlatTensorDataInt64 | undefined;
  setInt64Tensor(value?: FlatTensorDataInt64): void;

  hasUint64Tensor(): boolean;
  clearUint64Tensor(): void;
  getUint64Tensor(): FlatTensorDataUInt64 | undefined;
  setUint64Tensor(value?: FlatTensorDataUInt64): void;

  hasFloatTensor(): boolean;
  clearFloatTensor(): void;
  getFloatTensor(): FlatTensorDataFloat | undefined;
  setFloatTensor(value?: FlatTensorDataFloat): void;

  hasDoubleTensor(): boolean;
  clearDoubleTensor(): void;
  getDoubleTensor(): FlatTensorDataDouble | undefined;
  setDoubleTensor(value?: FlatTensorDataDouble): void;

  getTensorCase(): FlatTensor.TensorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensor.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensor): FlatTensor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensor;
  static deserializeBinaryFromReader(message: FlatTensor, reader: jspb.BinaryReader): FlatTensor;
}

export namespace FlatTensor {
  export type AsObject = {
    shapeList: Array<number>,
    int8Tensor?: FlatTensorDataInt8.AsObject,
    uint8Tensor?: FlatTensorDataUInt8.AsObject,
    int16Tensor?: FlatTensorDataInt16.AsObject,
    uint16Tensor?: FlatTensorDataUInt16.AsObject,
    int32Tensor?: FlatTensorDataInt32.AsObject,
    uint32Tensor?: FlatTensorDataUInt32.AsObject,
    int64Tensor?: FlatTensorDataInt64.AsObject,
    uint64Tensor?: FlatTensorDataUInt64.AsObject,
    floatTensor?: FlatTensorDataFloat.AsObject,
    doubleTensor?: FlatTensorDataDouble.AsObject,
  }

  export enum TensorCase {
    TENSOR_NOT_SET = 0,
    INT8_TENSOR = 2,
    UINT8_TENSOR = 3,
    INT16_TENSOR = 4,
    UINT16_TENSOR = 5,
    INT32_TENSOR = 6,
    UINT32_TENSOR = 7,
    INT64_TENSOR = 8,
    UINT64_TENSOR = 9,
    FLOAT_TENSOR = 10,
    DOUBLE_TENSOR = 11,
  }
}

export class FlatTensors extends jspb.Message {
  getTensorsMap(): jspb.Map<string, FlatTensor>;
  clearTensorsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatTensors.AsObject;
  static toObject(includeInstance: boolean, msg: FlatTensors): FlatTensors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlatTensors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatTensors;
  static deserializeBinaryFromReader(message: FlatTensors, reader: jspb.BinaryReader): FlatTensors;
}

export namespace FlatTensors {
  export type AsObject = {
    tensorsMap: Array<[string, FlatTensor.AsObject]>,
  }
}

export interface LabelTypeMap {
  LABEL_TYPE_UNSPECIFIED: 0;
  LABEL_TYPE_TENSOR_VALUE: 1;
  LABEL_TYPE_TENSOR_AXIS: 2;
}

export const LabelType: LabelTypeMap;

