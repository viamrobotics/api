// package: viam.service.motion.v1
// file: service/motion/v1/motion.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class MoveRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): common_v1_common_pb.PoseInFrame | undefined;
  setDestination(value?: common_v1_common_pb.PoseInFrame): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  hasWorldState(): boolean;
  clearWorldState(): void;
  getWorldState(): common_v1_common_pb.WorldState | undefined;
  setWorldState(value?: common_v1_common_pb.WorldState): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveRequest): MoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveRequest;
  static deserializeBinaryFromReader(message: MoveRequest, reader: jspb.BinaryReader): MoveRequest;
}

export namespace MoveRequest {
  export type AsObject = {
    name: string,
    destination?: common_v1_common_pb.PoseInFrame.AsObject,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    worldState?: common_v1_common_pb.WorldState.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveResponse): MoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveResponse;
  static deserializeBinaryFromReader(message: MoveResponse, reader: jspb.BinaryReader): MoveResponse;
}

export namespace MoveResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class MoveSingleComponentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): common_v1_common_pb.PoseInFrame | undefined;
  setDestination(value?: common_v1_common_pb.PoseInFrame): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  hasWorldState(): boolean;
  clearWorldState(): void;
  getWorldState(): common_v1_common_pb.WorldState | undefined;
  setWorldState(value?: common_v1_common_pb.WorldState): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveSingleComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveSingleComponentRequest): MoveSingleComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveSingleComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveSingleComponentRequest;
  static deserializeBinaryFromReader(message: MoveSingleComponentRequest, reader: jspb.BinaryReader): MoveSingleComponentRequest;
}

export namespace MoveSingleComponentRequest {
  export type AsObject = {
    name: string,
    destination?: common_v1_common_pb.PoseInFrame.AsObject,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    worldState?: common_v1_common_pb.WorldState.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveSingleComponentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveSingleComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveSingleComponentResponse): MoveSingleComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveSingleComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveSingleComponentResponse;
  static deserializeBinaryFromReader(message: MoveSingleComponentResponse, reader: jspb.BinaryReader): MoveSingleComponentResponse;
}

export namespace MoveSingleComponentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetPoseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  getDestinationFrame(): string;
  setDestinationFrame(value: string): void;

  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPoseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPoseRequest): GetPoseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPoseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPoseRequest;
  static deserializeBinaryFromReader(message: GetPoseRequest, reader: jspb.BinaryReader): GetPoseRequest;
}

export namespace GetPoseRequest {
  export type AsObject = {
    name: string,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    destinationFrame: string,
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPoseResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.PoseInFrame | undefined;
  setPose(value?: common_v1_common_pb.PoseInFrame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPoseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPoseResponse): GetPoseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPoseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPoseResponse;
  static deserializeBinaryFromReader(message: GetPoseResponse, reader: jspb.BinaryReader): GetPoseResponse;
}

export namespace GetPoseResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.PoseInFrame.AsObject,
  }
}

