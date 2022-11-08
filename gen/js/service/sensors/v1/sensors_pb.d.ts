// package: viam.service.sensors.v1
// file: service/sensors/v1/sensors.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetSensorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSensorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSensorsRequest): GetSensorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSensorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSensorsRequest;
  static deserializeBinaryFromReader(message: GetSensorsRequest, reader: jspb.BinaryReader): GetSensorsRequest;
}

export namespace GetSensorsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetSensorsResponse extends jspb.Message {
  clearSensorNamesList(): void;
  getSensorNamesList(): Array<common_v1_common_pb.ResourceName>;
  setSensorNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addSensorNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSensorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSensorsResponse): GetSensorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSensorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSensorsResponse;
  static deserializeBinaryFromReader(message: GetSensorsResponse, reader: jspb.BinaryReader): GetSensorsResponse;
}

export namespace GetSensorsResponse {
  export type AsObject = {
    sensorNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
  }
}

export class GetReadingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearSensorNamesList(): void;
  getSensorNamesList(): Array<common_v1_common_pb.ResourceName>;
  setSensorNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addSensorNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadingsRequest): GetReadingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadingsRequest;
  static deserializeBinaryFromReader(message: GetReadingsRequest, reader: jspb.BinaryReader): GetReadingsRequest;
}

export namespace GetReadingsRequest {
  export type AsObject = {
    name: string,
    sensorNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Readings extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  getReadingsMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearReadingsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Readings.AsObject;
  static toObject(includeInstance: boolean, msg: Readings): Readings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Readings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Readings;
  static deserializeBinaryFromReader(message: Readings, reader: jspb.BinaryReader): Readings;
}

export namespace Readings {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    readingsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class GetReadingsResponse extends jspb.Message {
  clearReadingsList(): void;
  getReadingsList(): Array<Readings>;
  setReadingsList(value: Array<Readings>): void;
  addReadings(value?: Readings, index?: number): Readings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadingsResponse): GetReadingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadingsResponse;
  static deserializeBinaryFromReader(message: GetReadingsResponse, reader: jspb.BinaryReader): GetReadingsResponse;
}

export namespace GetReadingsResponse {
  export type AsObject = {
    readingsList: Array<Readings.AsObject>,
  }
}

