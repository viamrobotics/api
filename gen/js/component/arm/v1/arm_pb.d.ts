// package: viam.component.arm.v1
// file: component/arm/v1/arm.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetEndPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtraParams(): boolean;
  clearExtraParams(): void;
  getExtraParams(): google_protobuf_struct_pb.Struct | undefined;
  setExtraParams(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndPositionRequest): GetEndPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndPositionRequest;
  static deserializeBinaryFromReader(message: GetEndPositionRequest, reader: jspb.BinaryReader): GetEndPositionRequest;
}

export namespace GetEndPositionRequest {
  export type AsObject = {
    name: string,
    extraParams?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetEndPositionResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndPositionResponse): GetEndPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndPositionResponse;
  static deserializeBinaryFromReader(message: GetEndPositionResponse, reader: jspb.BinaryReader): GetEndPositionResponse;
}

export namespace GetEndPositionResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.Pose.AsObject,
  }
}

export class JointPositions extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointPositions.AsObject;
  static toObject(includeInstance: boolean, msg: JointPositions): JointPositions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointPositions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointPositions;
  static deserializeBinaryFromReader(message: JointPositions, reader: jspb.BinaryReader): JointPositions;
}

export namespace JointPositions {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class GetJointPositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJointPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJointPositionsRequest): GetJointPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJointPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJointPositionsRequest;
  static deserializeBinaryFromReader(message: GetJointPositionsRequest, reader: jspb.BinaryReader): GetJointPositionsRequest;
}

export namespace GetJointPositionsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetJointPositionsResponse extends jspb.Message {
  hasPositions(): boolean;
  clearPositions(): void;
  getPositions(): JointPositions | undefined;
  setPositions(value?: JointPositions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJointPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJointPositionsResponse): GetJointPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJointPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJointPositionsResponse;
  static deserializeBinaryFromReader(message: GetJointPositionsResponse, reader: jspb.BinaryReader): GetJointPositionsResponse;
}

export namespace GetJointPositionsResponse {
  export type AsObject = {
    positions?: JointPositions.AsObject,
  }
}

export class MoveToPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): common_v1_common_pb.Pose | undefined;
  setTo(value?: common_v1_common_pb.Pose): void;

  hasWorldState(): boolean;
  clearWorldState(): void;
  getWorldState(): common_v1_common_pb.WorldState | undefined;
  setWorldState(value?: common_v1_common_pb.WorldState): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveToPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveToPositionRequest): MoveToPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveToPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveToPositionRequest;
  static deserializeBinaryFromReader(message: MoveToPositionRequest, reader: jspb.BinaryReader): MoveToPositionRequest;
}

export namespace MoveToPositionRequest {
  export type AsObject = {
    name: string,
    to?: common_v1_common_pb.Pose.AsObject,
    worldState?: common_v1_common_pb.WorldState.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveToPositionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveToPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveToPositionResponse): MoveToPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveToPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveToPositionResponse;
  static deserializeBinaryFromReader(message: MoveToPositionResponse, reader: jspb.BinaryReader): MoveToPositionResponse;
}

export namespace MoveToPositionResponse {
  export type AsObject = {
  }
}

export class MoveToJointPositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPositions(): boolean;
  clearPositions(): void;
  getPositions(): JointPositions | undefined;
  setPositions(value?: JointPositions): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveToJointPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveToJointPositionsRequest): MoveToJointPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveToJointPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveToJointPositionsRequest;
  static deserializeBinaryFromReader(message: MoveToJointPositionsRequest, reader: jspb.BinaryReader): MoveToJointPositionsRequest;
}

export namespace MoveToJointPositionsRequest {
  export type AsObject = {
    name: string,
    positions?: JointPositions.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveToJointPositionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveToJointPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveToJointPositionsResponse): MoveToJointPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveToJointPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveToJointPositionsResponse;
  static deserializeBinaryFromReader(message: MoveToJointPositionsResponse, reader: jspb.BinaryReader): MoveToJointPositionsResponse;
}

export namespace MoveToJointPositionsResponse {
  export type AsObject = {
  }
}

export class StopRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRequest;
  static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopResponse;
  static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
  export type AsObject = {
  }
}

export class Status extends jspb.Message {
  hasEndPosition(): boolean;
  clearEndPosition(): void;
  getEndPosition(): common_v1_common_pb.Pose | undefined;
  setEndPosition(value?: common_v1_common_pb.Pose): void;

  hasJointPositions(): boolean;
  clearJointPositions(): void;
  getJointPositions(): JointPositions | undefined;
  setJointPositions(value?: JointPositions): void;

  getIsMoving(): boolean;
  setIsMoving(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    endPosition?: common_v1_common_pb.Pose.AsObject,
    jointPositions?: JointPositions.AsObject,
    isMoving: boolean,
  }
}

