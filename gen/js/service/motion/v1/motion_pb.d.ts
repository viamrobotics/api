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

  hasConstraints(): boolean;
  clearConstraints(): void;
  getConstraints(): Constraints | undefined;
  setConstraints(value?: Constraints): void;

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
    constraints?: Constraints.AsObject,
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

export class MoveOnMapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): common_v1_common_pb.Pose | undefined;
  setDestination(value?: common_v1_common_pb.Pose): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  hasSlamServiceName(): boolean;
  clearSlamServiceName(): void;
  getSlamServiceName(): common_v1_common_pb.ResourceName | undefined;
  setSlamServiceName(value?: common_v1_common_pb.ResourceName): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnMapRequest): MoveOnMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnMapRequest;
  static deserializeBinaryFromReader(message: MoveOnMapRequest, reader: jspb.BinaryReader): MoveOnMapRequest;
}

export namespace MoveOnMapRequest {
  export type AsObject = {
    name: string,
    destination?: common_v1_common_pb.Pose.AsObject,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    slamServiceName?: common_v1_common_pb.ResourceName.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveOnMapResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnMapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnMapResponse): MoveOnMapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnMapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnMapResponse;
  static deserializeBinaryFromReader(message: MoveOnMapResponse, reader: jspb.BinaryReader): MoveOnMapResponse;
}

export namespace MoveOnMapResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class MoveOnGlobeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): common_v1_common_pb.GeoPoint | undefined;
  setDestination(value?: common_v1_common_pb.GeoPoint): void;

  hasHeading(): boolean;
  clearHeading(): void;
  getHeading(): number;
  setHeading(value: number): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  hasMovementSensorName(): boolean;
  clearMovementSensorName(): void;
  getMovementSensorName(): common_v1_common_pb.ResourceName | undefined;
  setMovementSensorName(value?: common_v1_common_pb.ResourceName): void;

  clearObstaclesList(): void;
  getObstaclesList(): Array<common_v1_common_pb.GeoObstacle>;
  setObstaclesList(value: Array<common_v1_common_pb.GeoObstacle>): void;
  addObstacles(value?: common_v1_common_pb.GeoObstacle, index?: number): common_v1_common_pb.GeoObstacle;

  hasLinearMetersPerSec(): boolean;
  clearLinearMetersPerSec(): void;
  getLinearMetersPerSec(): number;
  setLinearMetersPerSec(value: number): void;

  hasAngularDegPerSec(): boolean;
  clearAngularDegPerSec(): void;
  getAngularDegPerSec(): number;
  setAngularDegPerSec(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnGlobeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnGlobeRequest): MoveOnGlobeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnGlobeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnGlobeRequest;
  static deserializeBinaryFromReader(message: MoveOnGlobeRequest, reader: jspb.BinaryReader): MoveOnGlobeRequest;
}

export namespace MoveOnGlobeRequest {
  export type AsObject = {
    name: string,
    destination?: common_v1_common_pb.GeoPoint.AsObject,
    heading: number,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    movementSensorName?: common_v1_common_pb.ResourceName.AsObject,
    obstaclesList: Array<common_v1_common_pb.GeoObstacle.AsObject>,
    linearMetersPerSec: number,
    angularDegPerSec: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveOnGlobeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnGlobeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnGlobeResponse): MoveOnGlobeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnGlobeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnGlobeResponse;
  static deserializeBinaryFromReader(message: MoveOnGlobeResponse, reader: jspb.BinaryReader): MoveOnGlobeResponse;
}

export namespace MoveOnGlobeResponse {
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

export class Constraints extends jspb.Message {
  clearLinearConstraintList(): void;
  getLinearConstraintList(): Array<LinearConstraint>;
  setLinearConstraintList(value: Array<LinearConstraint>): void;
  addLinearConstraint(value?: LinearConstraint, index?: number): LinearConstraint;

  clearOrientationConstraintList(): void;
  getOrientationConstraintList(): Array<OrientationConstraint>;
  setOrientationConstraintList(value: Array<OrientationConstraint>): void;
  addOrientationConstraint(value?: OrientationConstraint, index?: number): OrientationConstraint;

  clearCollisionSpecificationList(): void;
  getCollisionSpecificationList(): Array<CollisionSpecification>;
  setCollisionSpecificationList(value: Array<CollisionSpecification>): void;
  addCollisionSpecification(value?: CollisionSpecification, index?: number): CollisionSpecification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constraints.AsObject;
  static toObject(includeInstance: boolean, msg: Constraints): Constraints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Constraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constraints;
  static deserializeBinaryFromReader(message: Constraints, reader: jspb.BinaryReader): Constraints;
}

export namespace Constraints {
  export type AsObject = {
    linearConstraintList: Array<LinearConstraint.AsObject>,
    orientationConstraintList: Array<OrientationConstraint.AsObject>,
    collisionSpecificationList: Array<CollisionSpecification.AsObject>,
  }
}

export class LinearConstraint extends jspb.Message {
  hasLineToleranceMm(): boolean;
  clearLineToleranceMm(): void;
  getLineToleranceMm(): number;
  setLineToleranceMm(value: number): void;

  hasOrientationToleranceDegs(): boolean;
  clearOrientationToleranceDegs(): void;
  getOrientationToleranceDegs(): number;
  setOrientationToleranceDegs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: LinearConstraint): LinearConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinearConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearConstraint;
  static deserializeBinaryFromReader(message: LinearConstraint, reader: jspb.BinaryReader): LinearConstraint;
}

export namespace LinearConstraint {
  export type AsObject = {
    lineToleranceMm: number,
    orientationToleranceDegs: number,
  }
}

export class OrientationConstraint extends jspb.Message {
  hasOrientationToleranceDegs(): boolean;
  clearOrientationToleranceDegs(): void;
  getOrientationToleranceDegs(): number;
  setOrientationToleranceDegs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrientationConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: OrientationConstraint): OrientationConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrientationConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrientationConstraint;
  static deserializeBinaryFromReader(message: OrientationConstraint, reader: jspb.BinaryReader): OrientationConstraint;
}

export namespace OrientationConstraint {
  export type AsObject = {
    orientationToleranceDegs: number,
  }
}

export class CollisionSpecification extends jspb.Message {
  clearAllowsList(): void;
  getAllowsList(): Array<CollisionSpecification.AllowedFrameCollisions>;
  setAllowsList(value: Array<CollisionSpecification.AllowedFrameCollisions>): void;
  addAllows(value?: CollisionSpecification.AllowedFrameCollisions, index?: number): CollisionSpecification.AllowedFrameCollisions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollisionSpecification.AsObject;
  static toObject(includeInstance: boolean, msg: CollisionSpecification): CollisionSpecification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollisionSpecification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollisionSpecification;
  static deserializeBinaryFromReader(message: CollisionSpecification, reader: jspb.BinaryReader): CollisionSpecification;
}

export namespace CollisionSpecification {
  export type AsObject = {
    allowsList: Array<CollisionSpecification.AllowedFrameCollisions.AsObject>,
  }

  export class AllowedFrameCollisions extends jspb.Message {
    getFrame1(): string;
    setFrame1(value: string): void;

    getFrame2(): string;
    setFrame2(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllowedFrameCollisions.AsObject;
    static toObject(includeInstance: boolean, msg: AllowedFrameCollisions): AllowedFrameCollisions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllowedFrameCollisions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllowedFrameCollisions;
    static deserializeBinaryFromReader(message: AllowedFrameCollisions, reader: jspb.BinaryReader): AllowedFrameCollisions;
  }

  export namespace AllowedFrameCollisions {
    export type AsObject = {
      frame1: string,
      frame2: string,
    }
  }
}

