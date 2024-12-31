// package: viam.service.discovery.v1
// file: service/discovery/v1/discovery.proto

import * as jspb from "google-protobuf";
import * as app_v1_robot_pb from "../../../app/v1/robot_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DiscoverResourcesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoverResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoverResourcesRequest): DiscoverResourcesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoverResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoverResourcesRequest;
  static deserializeBinaryFromReader(message: DiscoverResourcesRequest, reader: jspb.BinaryReader): DiscoverResourcesRequest;
}

export namespace DiscoverResourcesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DiscoverResourcesResponse extends jspb.Message {
  clearDiscoveryList(): void;
  getDiscoveryList(): Array<app_v1_robot_pb.ComponentConfig>;
  setDiscoveryList(value: Array<app_v1_robot_pb.ComponentConfig>): void;
  addDiscovery(value?: app_v1_robot_pb.ComponentConfig, index?: number): app_v1_robot_pb.ComponentConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoverResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoverResourcesResponse): DiscoverResourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoverResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoverResourcesResponse;
  static deserializeBinaryFromReader(message: DiscoverResourcesResponse, reader: jspb.BinaryReader): DiscoverResourcesResponse;
}

export namespace DiscoverResourcesResponse {
  export type AsObject = {
    discoveryList: Array<app_v1_robot_pb.ComponentConfig.AsObject>,
  }
}

