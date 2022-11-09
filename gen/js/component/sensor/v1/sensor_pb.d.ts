// package: viam.component.sensor.v1
// file: component/sensor/v1/sensor.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetReadingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetReadingsResponse extends jspb.Message {
  getReadingsMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearReadingsMap(): void;
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
    readingsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

