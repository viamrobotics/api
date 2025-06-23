// package: viam.component.switch.v1
// file: component/switch/v1/switch.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class SetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPositionRequest): SetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPositionRequest;
  static deserializeBinaryFromReader(message: SetPositionRequest, reader: jspb.BinaryReader): SetPositionRequest;
}

export namespace SetPositionRequest {
  export type AsObject = {
    name: string,
    position: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetPositionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPositionResponse): SetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPositionResponse;
  static deserializeBinaryFromReader(message: SetPositionResponse, reader: jspb.BinaryReader): SetPositionResponse;
}

export namespace SetPositionResponse {
  export type AsObject = {
  }
}

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPositionResponse extends jspb.Message {
  getPosition(): number;
  setPosition(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    position: number,
  }
}

export class GetNumberOfPositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNumberOfPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNumberOfPositionsRequest): GetNumberOfPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNumberOfPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNumberOfPositionsRequest;
  static deserializeBinaryFromReader(message: GetNumberOfPositionsRequest, reader: jspb.BinaryReader): GetNumberOfPositionsRequest;
}

export namespace GetNumberOfPositionsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetNumberOfPositionsResponse extends jspb.Message {
  getNumberOfPositions(): number;
  setNumberOfPositions(value: number): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNumberOfPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNumberOfPositionsResponse): GetNumberOfPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNumberOfPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNumberOfPositionsResponse;
  static deserializeBinaryFromReader(message: GetNumberOfPositionsResponse, reader: jspb.BinaryReader): GetNumberOfPositionsResponse;
}

export namespace GetNumberOfPositionsResponse {
  export type AsObject = {
    numberOfPositions: number,
    labelsList: Array<string>,
  }
}

