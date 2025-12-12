// package: viam.service.video.v1
// file: service/video/v1/video.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetVideoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVideoCodec(): string;
  setVideoCodec(value: string): void;

  getVideoContainer(): string;
  setVideoContainer(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVideoRequest): GetVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVideoRequest;
  static deserializeBinaryFromReader(message: GetVideoRequest, reader: jspb.BinaryReader): GetVideoRequest;
}

export namespace GetVideoRequest {
  export type AsObject = {
    name: string,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    videoCodec: string,
    videoContainer: string,
    requestId: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetVideoResponse extends jspb.Message {
  getVideoData(): Uint8Array | string;
  getVideoData_asU8(): Uint8Array;
  getVideoData_asB64(): string;
  setVideoData(value: Uint8Array | string): void;

  getVideoContainer(): string;
  setVideoContainer(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVideoResponse): GetVideoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVideoResponse;
  static deserializeBinaryFromReader(message: GetVideoResponse, reader: jspb.BinaryReader): GetVideoResponse;
}

export namespace GetVideoResponse {
  export type AsObject = {
    videoData: Uint8Array | string,
    videoContainer: string,
    requestId: string,
  }
}

