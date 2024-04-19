// package: viam.common.v1
// file: common/v1/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ResourceName extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSubtype(): string;
  setSubtype(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceName.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceName): ResourceName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceName;
  static deserializeBinaryFromReader(message: ResourceName, reader: jspb.BinaryReader): ResourceName;
}

export namespace ResourceName {
  export type AsObject = {
    namespace: string,
    type: string,
    subtype: string,
    name: string,
  }
}

export class BoardStatus extends jspb.Message {
  getAnalogsMap(): jspb.Map<string, AnalogStatus>;
  clearAnalogsMap(): void;
  getDigitalInterruptsMap(): jspb.Map<string, DigitalInterruptStatus>;
  clearDigitalInterruptsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoardStatus.AsObject;
  static toObject(includeInstance: boolean, msg: BoardStatus): BoardStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoardStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoardStatus;
  static deserializeBinaryFromReader(message: BoardStatus, reader: jspb.BinaryReader): BoardStatus;
}

export namespace BoardStatus {
  export type AsObject = {
    analogsMap: Array<[string, AnalogStatus.AsObject]>,
    digitalInterruptsMap: Array<[string, DigitalInterruptStatus.AsObject]>,
  }
}

export class AnalogStatus extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalogStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AnalogStatus): AnalogStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnalogStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalogStatus;
  static deserializeBinaryFromReader(message: AnalogStatus, reader: jspb.BinaryReader): AnalogStatus;
}

export namespace AnalogStatus {
  export type AsObject = {
    value: number,
  }
}

export class DigitalInterruptStatus extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalInterruptStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalInterruptStatus): DigitalInterruptStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigitalInterruptStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalInterruptStatus;
  static deserializeBinaryFromReader(message: DigitalInterruptStatus, reader: jspb.BinaryReader): DigitalInterruptStatus;
}

export namespace DigitalInterruptStatus {
  export type AsObject = {
    value: number,
  }
}

export class Pose extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getOX(): number;
  setOX(value: number): void;

  getOY(): number;
  setOY(value: number): void;

  getOZ(): number;
  setOZ(value: number): void;

  getTheta(): number;
  setTheta(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pose.AsObject;
  static toObject(includeInstance: boolean, msg: Pose): Pose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pose;
  static deserializeBinaryFromReader(message: Pose, reader: jspb.BinaryReader): Pose;
}

export namespace Pose {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    oX: number,
    oY: number,
    oZ: number,
    theta: number,
  }
}

export class Orientation extends jspb.Message {
  getOX(): number;
  setOX(value: number): void;

  getOY(): number;
  setOY(value: number): void;

  getOZ(): number;
  setOZ(value: number): void;

  getTheta(): number;
  setTheta(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orientation.AsObject;
  static toObject(includeInstance: boolean, msg: Orientation): Orientation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orientation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orientation;
  static deserializeBinaryFromReader(message: Orientation, reader: jspb.BinaryReader): Orientation;
}

export namespace Orientation {
  export type AsObject = {
    oX: number,
    oY: number,
    oZ: number,
    theta: number,
  }
}

export class PoseInFrame extends jspb.Message {
  getReferenceFrame(): string;
  setReferenceFrame(value: string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): Pose | undefined;
  setPose(value?: Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PoseInFrame.AsObject;
  static toObject(includeInstance: boolean, msg: PoseInFrame): PoseInFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PoseInFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PoseInFrame;
  static deserializeBinaryFromReader(message: PoseInFrame, reader: jspb.BinaryReader): PoseInFrame;
}

export namespace PoseInFrame {
  export type AsObject = {
    referenceFrame: string,
    pose?: Pose.AsObject,
  }
}

export class Vector3 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vector3.AsObject;
  static toObject(includeInstance: boolean, msg: Vector3): Vector3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vector3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vector3;
  static deserializeBinaryFromReader(message: Vector3, reader: jspb.BinaryReader): Vector3;
}

export namespace Vector3 {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Sphere extends jspb.Message {
  getRadiusMm(): number;
  setRadiusMm(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sphere.AsObject;
  static toObject(includeInstance: boolean, msg: Sphere): Sphere.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sphere, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sphere;
  static deserializeBinaryFromReader(message: Sphere, reader: jspb.BinaryReader): Sphere;
}

export namespace Sphere {
  export type AsObject = {
    radiusMm: number,
  }
}

export class Capsule extends jspb.Message {
  getRadiusMm(): number;
  setRadiusMm(value: number): void;

  getLengthMm(): number;
  setLengthMm(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Capsule.AsObject;
  static toObject(includeInstance: boolean, msg: Capsule): Capsule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Capsule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Capsule;
  static deserializeBinaryFromReader(message: Capsule, reader: jspb.BinaryReader): Capsule;
}

export namespace Capsule {
  export type AsObject = {
    radiusMm: number,
    lengthMm: number,
  }
}

export class RectangularPrism extends jspb.Message {
  hasDimsMm(): boolean;
  clearDimsMm(): void;
  getDimsMm(): Vector3 | undefined;
  setDimsMm(value?: Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RectangularPrism.AsObject;
  static toObject(includeInstance: boolean, msg: RectangularPrism): RectangularPrism.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RectangularPrism, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RectangularPrism;
  static deserializeBinaryFromReader(message: RectangularPrism, reader: jspb.BinaryReader): RectangularPrism;
}

export namespace RectangularPrism {
  export type AsObject = {
    dimsMm?: Vector3.AsObject,
  }
}

export class Geometry extends jspb.Message {
  hasCenter(): boolean;
  clearCenter(): void;
  getCenter(): Pose | undefined;
  setCenter(value?: Pose): void;

  hasSphere(): boolean;
  clearSphere(): void;
  getSphere(): Sphere | undefined;
  setSphere(value?: Sphere): void;

  hasBox(): boolean;
  clearBox(): void;
  getBox(): RectangularPrism | undefined;
  setBox(value?: RectangularPrism): void;

  hasCapsule(): boolean;
  clearCapsule(): void;
  getCapsule(): Capsule | undefined;
  setCapsule(value?: Capsule): void;

  getLabel(): string;
  setLabel(value: string): void;

  getGeometryTypeCase(): Geometry.GeometryTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Geometry.AsObject;
  static toObject(includeInstance: boolean, msg: Geometry): Geometry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Geometry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Geometry;
  static deserializeBinaryFromReader(message: Geometry, reader: jspb.BinaryReader): Geometry;
}

export namespace Geometry {
  export type AsObject = {
    center?: Pose.AsObject,
    sphere?: Sphere.AsObject,
    box?: RectangularPrism.AsObject,
    capsule?: Capsule.AsObject,
    label: string,
  }

  export enum GeometryTypeCase {
    GEOMETRY_TYPE_NOT_SET = 0,
    SPHERE = 2,
    BOX = 3,
    CAPSULE = 5,
  }
}

export class GeometriesInFrame extends jspb.Message {
  getReferenceFrame(): string;
  setReferenceFrame(value: string): void;

  clearGeometriesList(): void;
  getGeometriesList(): Array<Geometry>;
  setGeometriesList(value: Array<Geometry>): void;
  addGeometries(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeometriesInFrame.AsObject;
  static toObject(includeInstance: boolean, msg: GeometriesInFrame): GeometriesInFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeometriesInFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeometriesInFrame;
  static deserializeBinaryFromReader(message: GeometriesInFrame, reader: jspb.BinaryReader): GeometriesInFrame;
}

export namespace GeometriesInFrame {
  export type AsObject = {
    referenceFrame: string,
    geometriesList: Array<Geometry.AsObject>,
  }
}

export class PointCloudObject extends jspb.Message {
  getPointCloud(): Uint8Array | string;
  getPointCloud_asU8(): Uint8Array;
  getPointCloud_asB64(): string;
  setPointCloud(value: Uint8Array | string): void;

  hasGeometries(): boolean;
  clearGeometries(): void;
  getGeometries(): GeometriesInFrame | undefined;
  setGeometries(value?: GeometriesInFrame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloudObject.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloudObject): PointCloudObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointCloudObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloudObject;
  static deserializeBinaryFromReader(message: PointCloudObject, reader: jspb.BinaryReader): PointCloudObject;
}

export namespace PointCloudObject {
  export type AsObject = {
    pointCloud: Uint8Array | string,
    geometries?: GeometriesInFrame.AsObject,
  }
}

export class GeoPoint extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPoint.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPoint): GeoPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPoint;
  static deserializeBinaryFromReader(message: GeoPoint, reader: jspb.BinaryReader): GeoPoint;
}

export namespace GeoPoint {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class GeoObstacle extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): GeoPoint | undefined;
  setLocation(value?: GeoPoint): void;

  clearGeometriesList(): void;
  getGeometriesList(): Array<Geometry>;
  setGeometriesList(value: Array<Geometry>): void;
  addGeometries(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoObstacle.AsObject;
  static toObject(includeInstance: boolean, msg: GeoObstacle): GeoObstacle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoObstacle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoObstacle;
  static deserializeBinaryFromReader(message: GeoObstacle, reader: jspb.BinaryReader): GeoObstacle;
}

export namespace GeoObstacle {
  export type AsObject = {
    location?: GeoPoint.AsObject,
    geometriesList: Array<Geometry.AsObject>,
  }
}

export class Transform extends jspb.Message {
  getReferenceFrame(): string;
  setReferenceFrame(value: string): void;

  hasPoseInObserverFrame(): boolean;
  clearPoseInObserverFrame(): void;
  getPoseInObserverFrame(): PoseInFrame | undefined;
  setPoseInObserverFrame(value?: PoseInFrame): void;

  hasPhysicalObject(): boolean;
  clearPhysicalObject(): void;
  getPhysicalObject(): Geometry | undefined;
  setPhysicalObject(value?: Geometry): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transform.AsObject;
  static toObject(includeInstance: boolean, msg: Transform): Transform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transform;
  static deserializeBinaryFromReader(message: Transform, reader: jspb.BinaryReader): Transform;
}

export namespace Transform {
  export type AsObject = {
    referenceFrame: string,
    poseInObserverFrame?: PoseInFrame.AsObject,
    physicalObject?: Geometry.AsObject,
  }
}

export class WorldState extends jspb.Message {
  clearObstaclesList(): void;
  getObstaclesList(): Array<GeometriesInFrame>;
  setObstaclesList(value: Array<GeometriesInFrame>): void;
  addObstacles(value?: GeometriesInFrame, index?: number): GeometriesInFrame;

  clearTransformsList(): void;
  getTransformsList(): Array<Transform>;
  setTransformsList(value: Array<Transform>): void;
  addTransforms(value?: Transform, index?: number): Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldState.AsObject;
  static toObject(includeInstance: boolean, msg: WorldState): WorldState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldState;
  static deserializeBinaryFromReader(message: WorldState, reader: jspb.BinaryReader): WorldState;
}

export namespace WorldState {
  export type AsObject = {
    obstaclesList: Array<GeometriesInFrame.AsObject>,
    transformsList: Array<Transform.AsObject>,
  }
}

export class ActuatorStatus extends jspb.Message {
  getIsMoving(): boolean;
  setIsMoving(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActuatorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ActuatorStatus): ActuatorStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActuatorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActuatorStatus;
  static deserializeBinaryFromReader(message: ActuatorStatus, reader: jspb.BinaryReader): ActuatorStatus;
}

export namespace ActuatorStatus {
  export type AsObject = {
    isMoving: boolean,
  }
}

export class ResponseMetadata extends jspb.Message {
  hasCapturedAt(): boolean;
  clearCapturedAt(): void;
  getCapturedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCapturedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseMetadata): ResponseMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseMetadata;
  static deserializeBinaryFromReader(message: ResponseMetadata, reader: jspb.BinaryReader): ResponseMetadata;
}

export namespace ResponseMetadata {
  export type AsObject = {
    capturedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DoCommandRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): google_protobuf_struct_pb.Struct | undefined;
  setCommand(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DoCommandRequest): DoCommandRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoCommandRequest;
  static deserializeBinaryFromReader(message: DoCommandRequest, reader: jspb.BinaryReader): DoCommandRequest;
}

export namespace DoCommandRequest {
  export type AsObject = {
    name: string,
    command?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DoCommandResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoCommandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DoCommandResponse): DoCommandResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoCommandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoCommandResponse;
  static deserializeBinaryFromReader(message: DoCommandResponse, reader: jspb.BinaryReader): DoCommandResponse;
}

export namespace DoCommandResponse {
  export type AsObject = {
    result?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetKinematicsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKinematicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKinematicsRequest): GetKinematicsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKinematicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKinematicsRequest;
  static deserializeBinaryFromReader(message: GetKinematicsRequest, reader: jspb.BinaryReader): GetKinematicsRequest;
}

export namespace GetKinematicsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetKinematicsResponse extends jspb.Message {
  getFormat(): KinematicsFileFormatMap[keyof KinematicsFileFormatMap];
  setFormat(value: KinematicsFileFormatMap[keyof KinematicsFileFormatMap]): void;

  getKinematicsData(): Uint8Array | string;
  getKinematicsData_asU8(): Uint8Array;
  getKinematicsData_asB64(): string;
  setKinematicsData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKinematicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKinematicsResponse): GetKinematicsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKinematicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKinematicsResponse;
  static deserializeBinaryFromReader(message: GetKinematicsResponse, reader: jspb.BinaryReader): GetKinematicsResponse;
}

export namespace GetKinematicsResponse {
  export type AsObject = {
    format: KinematicsFileFormatMap[keyof KinematicsFileFormatMap],
    kinematicsData: Uint8Array | string,
  }
}

export class GetGeometriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeometriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeometriesRequest): GetGeometriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGeometriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeometriesRequest;
  static deserializeBinaryFromReader(message: GetGeometriesRequest, reader: jspb.BinaryReader): GetGeometriesRequest;
}

export namespace GetGeometriesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetGeometriesResponse extends jspb.Message {
  clearGeometriesList(): void;
  getGeometriesList(): Array<Geometry>;
  setGeometriesList(value: Array<Geometry>): void;
  addGeometries(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeometriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeometriesResponse): GetGeometriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGeometriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeometriesResponse;
  static deserializeBinaryFromReader(message: GetGeometriesResponse, reader: jspb.BinaryReader): GetGeometriesResponse;
}

export namespace GetGeometriesResponse {
  export type AsObject = {
    geometriesList: Array<Geometry.AsObject>,
  }
}

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

export class LogEntry extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getLevel(): string;
  setLevel(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLoggerName(): string;
  setLoggerName(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasCaller(): boolean;
  clearCaller(): void;
  getCaller(): google_protobuf_struct_pb.Struct | undefined;
  setCaller(value?: google_protobuf_struct_pb.Struct): void;

  getStack(): string;
  setStack(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<google_protobuf_struct_pb.Struct>;
  setFieldsList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addFields(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    host: string,
    level: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    loggerName: string,
    message: string,
    caller?: google_protobuf_struct_pb.Struct.AsObject,
    stack: string,
    fieldsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
  }
}

  export const safetyHeartbeatMonitored: jspb.ExtensionFieldInfo<boolean>;

export interface KinematicsFileFormatMap {
  KINEMATICS_FILE_FORMAT_UNSPECIFIED: 0;
  KINEMATICS_FILE_FORMAT_SVA: 1;
  KINEMATICS_FILE_FORMAT_URDF: 2;
}

export const KinematicsFileFormat: KinematicsFileFormatMap;

