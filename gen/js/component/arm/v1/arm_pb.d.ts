// package: viam.component.arm.v1
// file: component/arm/v1/arm.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetEndPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

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
    extra?: google_protobuf_struct_pb.Struct.AsObject,
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

export class StreamJointPositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasFps(): boolean;
  clearFps(): void;
  getFps(): number;
  setFps(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamJointPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamJointPositionsRequest): StreamJointPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamJointPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamJointPositionsRequest;
  static deserializeBinaryFromReader(message: StreamJointPositionsRequest, reader: jspb.BinaryReader): StreamJointPositionsRequest;
}

export namespace StreamJointPositionsRequest {
  export type AsObject = {
    name: string,
    fps: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StreamJointPositionsResponse extends jspb.Message {
  hasPositions(): boolean;
  clearPositions(): void;
  getPositions(): JointPositions | undefined;
  setPositions(value?: JointPositions): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamJointPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamJointPositionsResponse): StreamJointPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamJointPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamJointPositionsResponse;
  static deserializeBinaryFromReader(message: StreamJointPositionsResponse, reader: jspb.BinaryReader): StreamJointPositionsResponse;
}

export namespace StreamJointPositionsResponse {
  export type AsObject = {
    positions?: JointPositions.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sequence: number,
  }
}

export class MoveToPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): common_v1_common_pb.Pose | undefined;
  setTo(value?: common_v1_common_pb.Pose): void;

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

export class MoveThroughJointPositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPositionsList(): void;
  getPositionsList(): Array<JointPositions>;
  setPositionsList(value: Array<JointPositions>): void;
  addPositions(value?: JointPositions, index?: number): JointPositions;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): MoveOptions | undefined;
  setOptions(value?: MoveOptions): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveThroughJointPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveThroughJointPositionsRequest): MoveThroughJointPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveThroughJointPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveThroughJointPositionsRequest;
  static deserializeBinaryFromReader(message: MoveThroughJointPositionsRequest, reader: jspb.BinaryReader): MoveThroughJointPositionsRequest;
}

export namespace MoveThroughJointPositionsRequest {
  export type AsObject = {
    name: string,
    positionsList: Array<JointPositions.AsObject>,
    options?: MoveOptions.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveThroughJointPositionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveThroughJointPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveThroughJointPositionsResponse): MoveThroughJointPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveThroughJointPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveThroughJointPositionsResponse;
  static deserializeBinaryFromReader(message: MoveThroughJointPositionsResponse, reader: jspb.BinaryReader): MoveThroughJointPositionsResponse;
}

export namespace MoveThroughJointPositionsResponse {
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

export class IsMovingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMovingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsMovingRequest): IsMovingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsMovingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMovingRequest;
  static deserializeBinaryFromReader(message: IsMovingRequest, reader: jspb.BinaryReader): IsMovingRequest;
}

export namespace IsMovingRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsMovingResponse extends jspb.Message {
  getIsMoving(): boolean;
  setIsMoving(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMovingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsMovingResponse): IsMovingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsMovingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMovingResponse;
  static deserializeBinaryFromReader(message: IsMovingResponse, reader: jspb.BinaryReader): IsMovingResponse;
}

export namespace IsMovingResponse {
  export type AsObject = {
    isMoving: boolean,
  }
}

export class MoveOptions extends jspb.Message {
  hasMaxVelDegsPerSec(): boolean;
  clearMaxVelDegsPerSec(): void;
  getMaxVelDegsPerSec(): number;
  setMaxVelDegsPerSec(value: number): void;

  hasMaxAccDegsPerSec2(): boolean;
  clearMaxAccDegsPerSec2(): void;
  getMaxAccDegsPerSec2(): number;
  setMaxAccDegsPerSec2(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOptions): MoveOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOptions;
  static deserializeBinaryFromReader(message: MoveOptions, reader: jspb.BinaryReader): MoveOptions;
}

export namespace MoveOptions {
  export type AsObject = {
    maxVelDegsPerSec: number,
    maxAccDegsPerSec2: number,
  }
}

