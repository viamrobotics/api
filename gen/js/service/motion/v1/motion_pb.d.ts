// package: viam.service.motion.v1
// file: service/motion/v1/motion.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

export class ObstacleDetector extends jspb.Message {
  hasVisionService(): boolean;
  clearVisionService(): void;
  getVisionService(): common_v1_common_pb.ResourceName | undefined;
  setVisionService(value?: common_v1_common_pb.ResourceName): void;

  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): common_v1_common_pb.ResourceName | undefined;
  setCamera(value?: common_v1_common_pb.ResourceName): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObstacleDetector.AsObject;
  static toObject(includeInstance: boolean, msg: ObstacleDetector): ObstacleDetector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObstacleDetector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObstacleDetector;
  static deserializeBinaryFromReader(message: ObstacleDetector, reader: jspb.BinaryReader): ObstacleDetector;
}

export namespace ObstacleDetector {
  export type AsObject = {
    visionService?: common_v1_common_pb.ResourceName.AsObject,
    camera?: common_v1_common_pb.ResourceName.AsObject,
  }
}

export class MotionConfiguration extends jspb.Message {
  clearObstacleDetectorsList(): void;
  getObstacleDetectorsList(): Array<ObstacleDetector>;
  setObstacleDetectorsList(value: Array<ObstacleDetector>): void;
  addObstacleDetectors(value?: ObstacleDetector, index?: number): ObstacleDetector;

  hasPositionPollingFrequencyHz(): boolean;
  clearPositionPollingFrequencyHz(): void;
  getPositionPollingFrequencyHz(): number;
  setPositionPollingFrequencyHz(value: number): void;

  hasObstaclePollingFrequencyHz(): boolean;
  clearObstaclePollingFrequencyHz(): void;
  getObstaclePollingFrequencyHz(): number;
  setObstaclePollingFrequencyHz(value: number): void;

  hasPlanDeviationM(): boolean;
  clearPlanDeviationM(): void;
  getPlanDeviationM(): number;
  setPlanDeviationM(value: number): void;

  hasLinearMPerSec(): boolean;
  clearLinearMPerSec(): void;
  getLinearMPerSec(): number;
  setLinearMPerSec(value: number): void;

  hasAngularDegsPerSec(): boolean;
  clearAngularDegsPerSec(): void;
  getAngularDegsPerSec(): number;
  setAngularDegsPerSec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotionConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: MotionConfiguration): MotionConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MotionConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotionConfiguration;
  static deserializeBinaryFromReader(message: MotionConfiguration, reader: jspb.BinaryReader): MotionConfiguration;
}

export namespace MotionConfiguration {
  export type AsObject = {
    obstacleDetectorsList: Array<ObstacleDetector.AsObject>,
    positionPollingFrequencyHz: number,
    obstaclePollingFrequencyHz: number,
    planDeviationM: number,
    linearMPerSec: number,
    angularDegsPerSec: number,
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

  hasMotionConfiguration(): boolean;
  clearMotionConfiguration(): void;
  getMotionConfiguration(): MotionConfiguration | undefined;
  setMotionConfiguration(value?: MotionConfiguration): void;

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
    motionConfiguration?: MotionConfiguration.AsObject,
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

export class MoveOnGlobeNewRequest extends jspb.Message {
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

  hasMotionConfiguration(): boolean;
  clearMotionConfiguration(): void;
  getMotionConfiguration(): MotionConfiguration | undefined;
  setMotionConfiguration(value?: MotionConfiguration): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnGlobeNewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnGlobeNewRequest): MoveOnGlobeNewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnGlobeNewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnGlobeNewRequest;
  static deserializeBinaryFromReader(message: MoveOnGlobeNewRequest, reader: jspb.BinaryReader): MoveOnGlobeNewRequest;
}

export namespace MoveOnGlobeNewRequest {
  export type AsObject = {
    name: string,
    destination?: common_v1_common_pb.GeoPoint.AsObject,
    heading: number,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    movementSensorName?: common_v1_common_pb.ResourceName.AsObject,
    obstaclesList: Array<common_v1_common_pb.GeoObstacle.AsObject>,
    motionConfiguration?: MotionConfiguration.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class MoveOnGlobeNewResponse extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveOnGlobeNewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveOnGlobeNewResponse): MoveOnGlobeNewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveOnGlobeNewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveOnGlobeNewResponse;
  static deserializeBinaryFromReader(message: MoveOnGlobeNewResponse, reader: jspb.BinaryReader): MoveOnGlobeNewResponse;
}

export namespace MoveOnGlobeNewResponse {
  export type AsObject = {
    executionId: string,
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

export class StopPlanRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopPlanRequest): StopPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopPlanRequest;
  static deserializeBinaryFromReader(message: StopPlanRequest, reader: jspb.BinaryReader): StopPlanRequest;
}

export namespace StopPlanRequest {
  export type AsObject = {
    name: string,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopPlanResponse): StopPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopPlanResponse;
  static deserializeBinaryFromReader(message: StopPlanResponse, reader: jspb.BinaryReader): StopPlanResponse;
}

export namespace StopPlanResponse {
  export type AsObject = {
  }
}

export class ListPlanStatusesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOnlyActivePlans(): boolean;
  setOnlyActivePlans(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlanStatusesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlanStatusesRequest): ListPlanStatusesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPlanStatusesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlanStatusesRequest;
  static deserializeBinaryFromReader(message: ListPlanStatusesRequest, reader: jspb.BinaryReader): ListPlanStatusesRequest;
}

export namespace ListPlanStatusesRequest {
  export type AsObject = {
    name: string,
    onlyActivePlans: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListPlanStatusesResponse extends jspb.Message {
  clearPlanStatusesWithIdsList(): void;
  getPlanStatusesWithIdsList(): Array<PlanStatusWithID>;
  setPlanStatusesWithIdsList(value: Array<PlanStatusWithID>): void;
  addPlanStatusesWithIds(value?: PlanStatusWithID, index?: number): PlanStatusWithID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlanStatusesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlanStatusesResponse): ListPlanStatusesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPlanStatusesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlanStatusesResponse;
  static deserializeBinaryFromReader(message: ListPlanStatusesResponse, reader: jspb.BinaryReader): ListPlanStatusesResponse;
}

export namespace ListPlanStatusesResponse {
  export type AsObject = {
    planStatusesWithIdsList: Array<PlanStatusWithID.AsObject>,
  }
}

export class GetPlanRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  getLastPlanOnly(): boolean;
  setLastPlanOnly(value: boolean): void;

  hasExecutionId(): boolean;
  clearExecutionId(): void;
  getExecutionId(): string;
  setExecutionId(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanRequest): GetPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanRequest;
  static deserializeBinaryFromReader(message: GetPlanRequest, reader: jspb.BinaryReader): GetPlanRequest;
}

export namespace GetPlanRequest {
  export type AsObject = {
    name: string,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    lastPlanOnly: boolean,
    executionId: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPlanResponse extends jspb.Message {
  hasCurrentPlanWithStatus(): boolean;
  clearCurrentPlanWithStatus(): void;
  getCurrentPlanWithStatus(): PlanWithStatus | undefined;
  setCurrentPlanWithStatus(value?: PlanWithStatus): void;

  clearReplanHistoryList(): void;
  getReplanHistoryList(): Array<PlanWithStatus>;
  setReplanHistoryList(value: Array<PlanWithStatus>): void;
  addReplanHistory(value?: PlanWithStatus, index?: number): PlanWithStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanResponse): GetPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanResponse;
  static deserializeBinaryFromReader(message: GetPlanResponse, reader: jspb.BinaryReader): GetPlanResponse;
}

export namespace GetPlanResponse {
  export type AsObject = {
    currentPlanWithStatus?: PlanWithStatus.AsObject,
    replanHistoryList: Array<PlanWithStatus.AsObject>,
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

export class PlanWithStatus extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): Plan | undefined;
  setPlan(value?: Plan): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): PlanStatus | undefined;
  setStatus(value?: PlanStatus): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<PlanStatus>;
  setStatusHistoryList(value: Array<PlanStatus>): void;
  addStatusHistory(value?: PlanStatus, index?: number): PlanStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanWithStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PlanWithStatus): PlanWithStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanWithStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanWithStatus;
  static deserializeBinaryFromReader(message: PlanWithStatus, reader: jspb.BinaryReader): PlanWithStatus;
}

export namespace PlanWithStatus {
  export type AsObject = {
    plan?: Plan.AsObject,
    status?: PlanStatus.AsObject,
    statusHistoryList: Array<PlanStatus.AsObject>,
  }
}

export class PlanStatusWithID extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  getExecutionId(): string;
  setExecutionId(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): PlanStatus | undefined;
  setStatus(value?: PlanStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanStatusWithID.AsObject;
  static toObject(includeInstance: boolean, msg: PlanStatusWithID): PlanStatusWithID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanStatusWithID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanStatusWithID;
  static deserializeBinaryFromReader(message: PlanStatusWithID, reader: jspb.BinaryReader): PlanStatusWithID;
}

export namespace PlanStatusWithID {
  export type AsObject = {
    planId: string,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    executionId: string,
    status?: PlanStatus.AsObject,
  }
}

export class PlanStatus extends jspb.Message {
  getState(): PlanStateMap[keyof PlanStateMap];
  setState(value: PlanStateMap[keyof PlanStateMap]): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PlanStatus): PlanStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanStatus;
  static deserializeBinaryFromReader(message: PlanStatus, reader: jspb.BinaryReader): PlanStatus;
}

export namespace PlanStatus {
  export type AsObject = {
    state: PlanStateMap[keyof PlanStateMap],
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reason: string,
  }
}

export class Plan extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasComponentName(): boolean;
  clearComponentName(): void;
  getComponentName(): common_v1_common_pb.ResourceName | undefined;
  setComponentName(value?: common_v1_common_pb.ResourceName): void;

  getExecutionId(): string;
  setExecutionId(value: string): void;

  clearStepsList(): void;
  getStepsList(): Array<PlanStep>;
  setStepsList(value: Array<PlanStep>): void;
  addSteps(value?: PlanStep, index?: number): PlanStep;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    id: string,
    componentName?: common_v1_common_pb.ResourceName.AsObject,
    executionId: string,
    stepsList: Array<PlanStep.AsObject>,
  }
}

export class PlanStep extends jspb.Message {
  getStepMap(): jspb.Map<string, ComponentState>;
  clearStepMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanStep.AsObject;
  static toObject(includeInstance: boolean, msg: PlanStep): PlanStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanStep;
  static deserializeBinaryFromReader(message: PlanStep, reader: jspb.BinaryReader): PlanStep;
}

export namespace PlanStep {
  export type AsObject = {
    stepMap: Array<[string, ComponentState.AsObject]>,
  }
}

export class ComponentState extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentState.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentState): ComponentState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentState;
  static deserializeBinaryFromReader(message: ComponentState, reader: jspb.BinaryReader): ComponentState;
}

export namespace ComponentState {
  export type AsObject = {
    pose?: common_v1_common_pb.Pose.AsObject,
  }
}

export interface PlanStateMap {
  PLAN_STATE_UNSPECIFIED: 0;
  PLAN_STATE_IN_PROGRESS: 1;
  PLAN_STATE_STOPPED: 2;
  PLAN_STATE_SUCCEEDED: 3;
  PLAN_STATE_FAILED: 4;
}

export const PlanState: PlanStateMap;

