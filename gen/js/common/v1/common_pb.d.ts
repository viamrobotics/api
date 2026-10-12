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

export class PoseCloud extends jspb.Message {
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
  toObject(includeInstance?: boolean): PoseCloud.AsObject;
  static toObject(includeInstance: boolean, msg: PoseCloud): PoseCloud.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PoseCloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PoseCloud;
  static deserializeBinaryFromReader(message: PoseCloud, reader: jspb.BinaryReader): PoseCloud;
}

export namespace PoseCloud {
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

export class PoseInFrame extends jspb.Message {
  getReferenceFrame(): string;
  setReferenceFrame(value: string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): Pose | undefined;
  setPose(value?: Pose): void;

  hasGoalCloud(): boolean;
  clearGoalCloud(): void;
  getGoalCloud(): PoseCloud | undefined;
  setGoalCloud(value?: PoseCloud): void;

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
    goalCloud?: PoseCloud.AsObject,
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

export class Mesh extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): void;

  getMesh(): Uint8Array | string;
  getMesh_asU8(): Uint8Array;
  getMesh_asB64(): string;
  setMesh(value: Uint8Array | string): void;

  hasOriginalFileSourcePathDiagnostic(): boolean;
  clearOriginalFileSourcePathDiagnostic(): void;
  getOriginalFileSourcePathDiagnostic(): string;
  setOriginalFileSourcePathDiagnostic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mesh.AsObject;
  static toObject(includeInstance: boolean, msg: Mesh): Mesh.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mesh, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mesh;
  static deserializeBinaryFromReader(message: Mesh, reader: jspb.BinaryReader): Mesh;
}

export namespace Mesh {
  export type AsObject = {
    contentType: string,
    mesh: Uint8Array | string,
    originalFileSourcePathDiagnostic: string,
  }
}

export class PointCloud extends jspb.Message {
  getPointCloud(): Uint8Array | string;
  getPointCloud_asU8(): Uint8Array;
  getPointCloud_asB64(): string;
  setPointCloud(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloud.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloud): PointCloud.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointCloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloud;
  static deserializeBinaryFromReader(message: PointCloud, reader: jspb.BinaryReader): PointCloud;
}

export namespace PointCloud {
  export type AsObject = {
    pointCloud: Uint8Array | string,
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

  hasMesh(): boolean;
  clearMesh(): void;
  getMesh(): Mesh | undefined;
  setMesh(value?: Mesh): void;

  hasPointcloud(): boolean;
  clearPointcloud(): void;
  getPointcloud(): PointCloud | undefined;
  setPointcloud(value?: PointCloud): void;

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
    mesh?: Mesh.AsObject,
    pointcloud?: PointCloud.AsObject,
    label: string,
  }

  export enum GeometryTypeCase {
    GEOMETRY_TYPE_NOT_SET = 0,
    SPHERE = 2,
    BOX = 3,
    CAPSULE = 5,
    MESH = 6,
    POINTCLOUD = 7,
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

export class GeoGeometry extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): GeoPoint | undefined;
  setLocation(value?: GeoPoint): void;

  clearGeometriesList(): void;
  getGeometriesList(): Array<Geometry>;
  setGeometriesList(value: Array<Geometry>): void;
  addGeometries(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoGeometry.AsObject;
  static toObject(includeInstance: boolean, msg: GeoGeometry): GeoGeometry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoGeometry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoGeometry;
  static deserializeBinaryFromReader(message: GeoGeometry, reader: jspb.BinaryReader): GeoGeometry;
}

export namespace GeoGeometry {
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

  getUuid(): Uint8Array | string;
  getUuid_asU8(): Uint8Array;
  getUuid_asB64(): string;
  setUuid(value: Uint8Array | string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

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
    uuid: Uint8Array | string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
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

export class GetStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
  static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetStatusResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
  static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
  export type AsObject = {
    result?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetKinematicsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIncludeCollisionMeshes(): boolean;
  setIncludeCollisionMeshes(value: boolean): void;

  getIncludeVisualMeshes(): boolean;
  setIncludeVisualMeshes(value: boolean): void;

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
    includeCollisionMeshes: boolean,
    includeVisualMeshes: boolean,
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

  getMeshesByUrdfFilepathMap(): jspb.Map<string, Mesh>;
  clearMeshesByUrdfFilepathMap(): void;
  hasModel(): boolean;
  clearModel(): void;
  getModel(): KinematicModel | undefined;
  setModel(value?: KinematicModel): void;

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
    meshesByUrdfFilepathMap: Array<[string, Mesh.AsObject]>,
    model?: KinematicModel.AsObject,
  }
}

export class KinematicModel extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearLinksList(): void;
  getLinksList(): Array<KinematicLink>;
  setLinksList(value: Array<KinematicLink>): void;
  addLinks(value?: KinematicLink, index?: number): KinematicLink;

  clearJointsList(): void;
  getJointsList(): Array<KinematicJoint>;
  setJointsList(value: Array<KinematicJoint>): void;
  addJoints(value?: KinematicJoint, index?: number): KinematicJoint;

  clearOutputFramesList(): void;
  getOutputFramesList(): Array<string>;
  setOutputFramesList(value: Array<string>): void;
  addOutputFrames(value: string, index?: number): string;

  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): KinematicProperties | undefined;
  setProperties(value?: KinematicProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KinematicModel.AsObject;
  static toObject(includeInstance: boolean, msg: KinematicModel): KinematicModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KinematicModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KinematicModel;
  static deserializeBinaryFromReader(message: KinematicModel, reader: jspb.BinaryReader): KinematicModel;
}

export namespace KinematicModel {
  export type AsObject = {
    name: string,
    linksList: Array<KinematicLink.AsObject>,
    jointsList: Array<KinematicJoint.AsObject>,
    outputFramesList: Array<string>,
    properties?: KinematicProperties.AsObject,
  }
}

export class KinematicLink extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): LinkPose | undefined;
  setPose(value?: LinkPose): void;

  clearCollisionList(): void;
  getCollisionList(): Array<Geometry>;
  setCollisionList(value: Array<Geometry>): void;
  addCollision(value?: Geometry, index?: number): Geometry;

  clearVisualList(): void;
  getVisualList(): Array<Geometry>;
  setVisualList(value: Array<Geometry>): void;
  addVisual(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KinematicLink.AsObject;
  static toObject(includeInstance: boolean, msg: KinematicLink): KinematicLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KinematicLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KinematicLink;
  static deserializeBinaryFromReader(message: KinematicLink, reader: jspb.BinaryReader): KinematicLink;
}

export namespace KinematicLink {
  export type AsObject = {
    id: string,
    parent: string,
    pose?: LinkPose.AsObject,
    collisionList: Array<Geometry.AsObject>,
    visualList: Array<Geometry.AsObject>,
  }
}

export class LinkPose extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): Vector3 | undefined;
  setTranslation(value?: Vector3): void;

  hasQuaternion(): boolean;
  clearQuaternion(): void;
  getQuaternion(): Quaternion | undefined;
  setQuaternion(value?: Quaternion): void;

  hasOrientationVector(): boolean;
  clearOrientationVector(): void;
  getOrientationVector(): Orientation | undefined;
  setOrientationVector(value?: Orientation): void;

  hasEulerAngles(): boolean;
  clearEulerAngles(): void;
  getEulerAngles(): EulerAngles | undefined;
  setEulerAngles(value?: EulerAngles): void;

  hasAxisAngles(): boolean;
  clearAxisAngles(): void;
  getAxisAngles(): AxisAngles | undefined;
  setAxisAngles(value?: AxisAngles): void;

  getOrientationCase(): LinkPose.OrientationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkPose.AsObject;
  static toObject(includeInstance: boolean, msg: LinkPose): LinkPose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkPose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkPose;
  static deserializeBinaryFromReader(message: LinkPose, reader: jspb.BinaryReader): LinkPose;
}

export namespace LinkPose {
  export type AsObject = {
    translation?: Vector3.AsObject,
    quaternion?: Quaternion.AsObject,
    orientationVector?: Orientation.AsObject,
    eulerAngles?: EulerAngles.AsObject,
    axisAngles?: AxisAngles.AsObject,
  }

  export enum OrientationCase {
    ORIENTATION_NOT_SET = 0,
    QUATERNION = 2,
    ORIENTATION_VECTOR = 3,
    EULER_ANGLES = 4,
    AXIS_ANGLES = 5,
  }
}

export class Quaternion extends jspb.Message {
  getW(): number;
  setW(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quaternion.AsObject;
  static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quaternion;
  static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
  export type AsObject = {
    w: number,
    x: number,
    y: number,
    z: number,
  }
}

export class EulerAngles extends jspb.Message {
  getRoll(): number;
  setRoll(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EulerAngles.AsObject;
  static toObject(includeInstance: boolean, msg: EulerAngles): EulerAngles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EulerAngles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EulerAngles;
  static deserializeBinaryFromReader(message: EulerAngles, reader: jspb.BinaryReader): EulerAngles;
}

export namespace EulerAngles {
  export type AsObject = {
    roll: number,
    pitch: number,
    yaw: number,
  }
}

export class AxisAngles extends jspb.Message {
  getRx(): number;
  setRx(value: number): void;

  getRy(): number;
  setRy(value: number): void;

  getRz(): number;
  setRz(value: number): void;

  getTheta(): number;
  setTheta(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AxisAngles.AsObject;
  static toObject(includeInstance: boolean, msg: AxisAngles): AxisAngles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AxisAngles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AxisAngles;
  static deserializeBinaryFromReader(message: AxisAngles, reader: jspb.BinaryReader): AxisAngles;
}

export namespace AxisAngles {
  export type AsObject = {
    rx: number,
    ry: number,
    rz: number,
    theta: number,
  }
}

export class KinematicJoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getType(): JointTypeMap[keyof JointTypeMap];
  setType(value: JointTypeMap[keyof JointTypeMap]): void;

  hasAxis(): boolean;
  clearAxis(): void;
  getAxis(): Vector3 | undefined;
  setAxis(value?: Vector3): void;

  hasLimits(): boolean;
  clearLimits(): void;
  getLimits(): JointLimits | undefined;
  setLimits(value?: JointLimits): void;

  hasMimic(): boolean;
  clearMimic(): void;
  getMimic(): MimicJoint | undefined;
  setMimic(value?: MimicJoint): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): Geometry | undefined;
  setGeometry(value?: Geometry): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KinematicJoint.AsObject;
  static toObject(includeInstance: boolean, msg: KinematicJoint): KinematicJoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KinematicJoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KinematicJoint;
  static deserializeBinaryFromReader(message: KinematicJoint, reader: jspb.BinaryReader): KinematicJoint;
}

export namespace KinematicJoint {
  export type AsObject = {
    id: string,
    parent: string,
    type: JointTypeMap[keyof JointTypeMap],
    axis?: Vector3.AsObject,
    limits?: JointLimits.AsObject,
    mimic?: MimicJoint.AsObject,
    geometry?: Geometry.AsObject,
  }
}

export class JointLimits extends jspb.Message {
  hasMin(): boolean;
  clearMin(): void;
  getMin(): number;
  setMin(value: number): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): number;
  setMax(value: number): void;

  hasMaxVelocity(): boolean;
  clearMaxVelocity(): void;
  getMaxVelocity(): number;
  setMaxVelocity(value: number): void;

  hasMaxAcceleration(): boolean;
  clearMaxAcceleration(): void;
  getMaxAcceleration(): number;
  setMaxAcceleration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointLimits.AsObject;
  static toObject(includeInstance: boolean, msg: JointLimits): JointLimits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointLimits;
  static deserializeBinaryFromReader(message: JointLimits, reader: jspb.BinaryReader): JointLimits;
}

export namespace JointLimits {
  export type AsObject = {
    min: number,
    max: number,
    maxVelocity: number,
    maxAcceleration: number,
  }
}

export class MimicJoint extends jspb.Message {
  getJoint(): string;
  setJoint(value: string): void;

  getMultiplier(): number;
  setMultiplier(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimicJoint.AsObject;
  static toObject(includeInstance: boolean, msg: MimicJoint): MimicJoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimicJoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimicJoint;
  static deserializeBinaryFromReader(message: MimicJoint, reader: jspb.BinaryReader): MimicJoint;
}

export namespace MimicJoint {
  export type AsObject = {
    joint: string,
    multiplier: number,
    offset: number,
  }
}

export class KinematicProperties extends jspb.Message {
  hasOperatingFreqHz(): boolean;
  clearOperatingFreqHz(): void;
  getOperatingFreqHz(): number;
  setOperatingFreqHz(value: number): void;

  hasMaxLinearTcpSpeedMmPerSec(): boolean;
  clearMaxLinearTcpSpeedMmPerSec(): void;
  getMaxLinearTcpSpeedMmPerSec(): number;
  setMaxLinearTcpSpeedMmPerSec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KinematicProperties.AsObject;
  static toObject(includeInstance: boolean, msg: KinematicProperties): KinematicProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KinematicProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KinematicProperties;
  static deserializeBinaryFromReader(message: KinematicProperties, reader: jspb.BinaryReader): KinematicProperties;
}

export namespace KinematicProperties {
  export type AsObject = {
    operatingFreqHz: number,
    maxLinearTcpSpeedMmPerSec: number,
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

export class Get3DModelsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Get3DModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: Get3DModelsRequest): Get3DModelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Get3DModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Get3DModelsRequest;
  static deserializeBinaryFromReader(message: Get3DModelsRequest, reader: jspb.BinaryReader): Get3DModelsRequest;
}

export namespace Get3DModelsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Get3DModelsResponse extends jspb.Message {
  getModelsMap(): jspb.Map<string, Mesh>;
  clearModelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Get3DModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Get3DModelsResponse): Get3DModelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Get3DModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Get3DModelsResponse;
  static deserializeBinaryFromReader(message: Get3DModelsResponse, reader: jspb.BinaryReader): Get3DModelsResponse;
}

export namespace Get3DModelsResponse {
  export type AsObject = {
    modelsMap: Array<[string, Mesh.AsObject]>,
  }
}

export class GetWorldPoseResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): Pose | undefined;
  setPose(value?: Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorldPoseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorldPoseResponse): GetWorldPoseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorldPoseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorldPoseResponse;
  static deserializeBinaryFromReader(message: GetWorldPoseResponse, reader: jspb.BinaryReader): GetWorldPoseResponse;
}

export namespace GetWorldPoseResponse {
  export type AsObject = {
    pose?: Pose.AsObject,
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

export class AudioInfo extends jspb.Message {
  getCodec(): string;
  setCodec(value: string): void;

  getSampleRateHz(): number;
  setSampleRateHz(value: number): void;

  getNumChannels(): number;
  setNumChannels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AudioInfo): AudioInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioInfo;
  static deserializeBinaryFromReader(message: AudioInfo, reader: jspb.BinaryReader): AudioInfo;
}

export namespace AudioInfo {
  export type AsObject = {
    codec: string,
    sampleRateHz: number,
    numChannels: number,
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesRequest): GetPropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesRequest;
  static deserializeBinaryFromReader(message: GetPropertiesRequest, reader: jspb.BinaryReader): GetPropertiesRequest;
}

export namespace GetPropertiesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPropertiesResponse extends jspb.Message {
  clearSupportedCodecsList(): void;
  getSupportedCodecsList(): Array<string>;
  setSupportedCodecsList(value: Array<string>): void;
  addSupportedCodecs(value: string, index?: number): string;

  getSampleRateHz(): number;
  setSampleRateHz(value: number): void;

  getNumChannels(): number;
  setNumChannels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPropertiesResponse): GetPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPropertiesResponse;
  static deserializeBinaryFromReader(message: GetPropertiesResponse, reader: jspb.BinaryReader): GetPropertiesResponse;
}

export namespace GetPropertiesResponse {
  export type AsObject = {
    supportedCodecsList: Array<string>,
    sampleRateHz: number,
    numChannels: number,
  }
}

  export const safetyHeartbeatMonitored: jspb.ExtensionFieldInfo<boolean>;

export interface KinematicsFileFormatMap {
  KINEMATICS_FILE_FORMAT_UNSPECIFIED: 0;
  KINEMATICS_FILE_FORMAT_SVA: 1;
  KINEMATICS_FILE_FORMAT_URDF: 2;
}

export const KinematicsFileFormat: KinematicsFileFormatMap;

export interface JointTypeMap {
  JOINT_TYPE_UNSPECIFIED: 0;
  JOINT_TYPE_REVOLUTE: 1;
  JOINT_TYPE_PRISMATIC: 2;
  JOINT_TYPE_CONTINUOUS: 3;
}

export const JointType: JointTypeMap;

