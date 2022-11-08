// package: viam.component.posetracker.v1
// file: component/posetracker/v1/pose_tracker.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetPosesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearBodyNamesList(): void;
  getBodyNamesList(): Array<string>;
  setBodyNamesList(value: Array<string>): void;
  addBodyNames(value: string, index?: number): string;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPosesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPosesRequest): GetPosesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPosesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPosesRequest;
  static deserializeBinaryFromReader(message: GetPosesRequest, reader: jspb.BinaryReader): GetPosesRequest;
}

export namespace GetPosesRequest {
  export type AsObject = {
    name: string,
    bodyNamesList: Array<string>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPosesResponse extends jspb.Message {
  getBodyPosesMap(): jspb.Map<string, common_v1_common_pb.PoseInFrame>;
  clearBodyPosesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPosesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPosesResponse): GetPosesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPosesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPosesResponse;
  static deserializeBinaryFromReader(message: GetPosesResponse, reader: jspb.BinaryReader): GetPosesResponse;
}

export namespace GetPosesResponse {
  export type AsObject = {
    bodyPosesMap: Array<[string, common_v1_common_pb.PoseInFrame.AsObject]>,
  }
}

