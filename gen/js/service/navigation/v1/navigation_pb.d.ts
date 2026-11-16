// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Position extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  hasGeoPose(): boolean;
  clearGeoPose(): void;
  getGeoPose(): common_v1_common_pb.GeoPose | undefined;
  setGeoPose(value?: common_v1_common_pb.GeoPose): void;

  getValueCase(): Position.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    pose?: common_v1_common_pb.Pose.AsObject,
    geoPose?: common_v1_common_pb.GeoPose.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    POSE = 1,
    GEO_POSE = 2,
  }
}

export class Location extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    name: string,
    position?: Position.AsObject,
  }
}

export class Waypoint extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): string;
  setLocation(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  getValueCase(): Waypoint.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Waypoint.AsObject;
  static toObject(includeInstance: boolean, msg: Waypoint): Waypoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Waypoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Waypoint;
  static deserializeBinaryFromReader(message: Waypoint, reader: jspb.BinaryReader): Waypoint;
}

export namespace Waypoint {
  export type AsObject = {
    location: string,
    position?: Position.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    LOCATION = 1,
    POSITION = 2,
  }
}

export class Route extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    name: string,
    waypointsList: Array<Waypoint.AsObject>,
  }
}

export class Zone extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): google_protobuf_struct_pb.Struct | undefined;
  setGeometry(value?: google_protobuf_struct_pb.Struct): void;

  hasMaxSpeed(): boolean;
  clearMaxSpeed(): void;
  getMaxSpeed(): number;
  setMaxSpeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    name: string,
    type: string,
    geometry?: google_protobuf_struct_pb.Struct.AsObject,
    maxSpeed: number,
  }
}

export class Plan extends jspb.Message {
  clearPathList(): void;
  getPathList(): Array<Position>;
  setPathList(value: Array<Position>): void;
  addPath(value?: Position, index?: number): Position;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): string;
  setLocation(value: string): void;

  getLengthM(): number;
  setLengthM(value: number): void;

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
    pathList: Array<Position.AsObject>,
    location: string,
    lengthM: number,
  }
}

export class Velocity extends jspb.Message {
  getLinearMPerSec(): number;
  setLinearMPerSec(value: number): void;

  getAngularDegPerSec(): number;
  setAngularDegPerSec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Velocity.AsObject;
  static toObject(includeInstance: boolean, msg: Velocity): Velocity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Velocity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Velocity;
  static deserializeBinaryFromReader(message: Velocity, reader: jspb.BinaryReader): Velocity;
}

export namespace Velocity {
  export type AsObject = {
    linearMPerSec: number,
    angularDegPerSec: number,
  }
}

export class NavError extends jspb.Message {
  getCode(): NavErrorCodeMap[keyof NavErrorCodeMap];
  setCode(value: NavErrorCodeMap[keyof NavErrorCodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavError.AsObject;
  static toObject(includeInstance: boolean, msg: NavError): NavError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavError;
  static deserializeBinaryFromReader(message: NavError, reader: jspb.BinaryReader): NavError;
}

export namespace NavError {
  export type AsObject = {
    code: NavErrorCodeMap[keyof NavErrorCodeMap],
    message: string,
  }
}

export class Progress extends jspb.Message {
  getDistanceRemainingM(): number;
  setDistanceRemainingM(value: number): void;

  clearPathList(): void;
  getPathList(): Array<Position>;
  setPathList(value: Array<Position>): void;
  addPath(value?: Position, index?: number): Position;

  getLengthM(): number;
  setLengthM(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    distanceRemainingM: number,
    pathList: Array<Position.AsObject>,
    lengthM: number,
  }
}

export class RouteProgress extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  getIndex(): number;
  setIndex(value: number): void;

  getLoop(): boolean;
  setLoop(value: boolean): void;

  getLap(): number;
  setLap(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteProgress.AsObject;
  static toObject(includeInstance: boolean, msg: RouteProgress): RouteProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteProgress;
  static deserializeBinaryFromReader(message: RouteProgress, reader: jspb.BinaryReader): RouteProgress;
}

export namespace RouteProgress {
  export type AsObject = {
    name: string,
    waypointsList: Array<Waypoint.AsObject>,
    index: number,
    loop: boolean,
    lap: number,
  }
}

export class GoalStatus extends jspb.Message {
  getState(): GoalStateMap[keyof GoalStateMap];
  setState(value: GoalStateMap[keyof GoalStateMap]): void;

  getMode(): NavModeMap[keyof NavModeMap];
  setMode(value: NavModeMap[keyof NavModeMap]): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Position | undefined;
  setTarget(value?: Position): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): string;
  setLocation(value: string): void;

  hasProgress(): boolean;
  clearProgress(): void;
  getProgress(): Progress | undefined;
  setProgress(value?: Progress): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): RouteProgress | undefined;
  setRoute(value?: RouteProgress): void;

  hasSuspendReason(): boolean;
  clearSuspendReason(): void;
  getSuspendReason(): string;
  setSuspendReason(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): NavError | undefined;
  setError(value?: NavError): void;

  hasStartedAt(): boolean;
  clearStartedAt(): void;
  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedAt(): boolean;
  clearFinishedAt(): void;
  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalStatus.AsObject;
  static toObject(includeInstance: boolean, msg: GoalStatus): GoalStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalStatus;
  static deserializeBinaryFromReader(message: GoalStatus, reader: jspb.BinaryReader): GoalStatus;
}

export namespace GoalStatus {
  export type AsObject = {
    state: GoalStateMap[keyof GoalStateMap],
    mode: NavModeMap[keyof NavModeMap],
    target?: Position.AsObject,
    location: string,
    progress?: Progress.AsObject,
    route?: RouteProgress.AsObject,
    suspendReason: string,
    error?: NavError.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Status extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  getLocalized(): boolean;
  setLocalized(value: boolean): void;

  hasVelocity(): boolean;
  clearVelocity(): void;
  getVelocity(): Velocity | undefined;
  setVelocity(value?: Velocity): void;

  hasGoal(): boolean;
  clearGoal(): void;
  getGoal(): GoalStatus | undefined;
  setGoal(value?: GoalStatus): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

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
    position?: Position.AsObject,
    localized: boolean,
    velocity?: Velocity.AsObject,
    goal?: GoalStatus.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Properties extends jspb.Message {
  getMapType(): MapTypeMap[keyof MapTypeMap];
  setMapType(value: MapTypeMap[keyof MapTypeMap]): void;

  getFootprintLengthM(): number;
  setFootprintLengthM(value: number): void;

  getFootprintWidthM(): number;
  setFootprintWidthM(value: number): void;

  getRobotRadiusM(): number;
  setRobotRadiusM(value: number): void;

  getPlanningSupported(): boolean;
  setPlanningSupported(value: boolean): void;

  getCostmapSupported(): boolean;
  setCostmapSupported(value: boolean): void;

  getZonesSupported(): boolean;
  setZonesSupported(value: boolean): void;

  getRoutesSupported(): boolean;
  setRoutesSupported(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Properties.AsObject;
  static toObject(includeInstance: boolean, msg: Properties): Properties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Properties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Properties;
  static deserializeBinaryFromReader(message: Properties, reader: jspb.BinaryReader): Properties;
}

export namespace Properties {
  export type AsObject = {
    mapType: MapTypeMap[keyof MapTypeMap],
    footprintLengthM: number,
    footprintWidthM: number,
    robotRadiusM: number,
    planningSupported: boolean,
    costmapSupported: boolean,
    zonesSupported: boolean,
    routesSupported: boolean,
  }
}

export class AddLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLocationRequest): AddLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLocationRequest;
  static deserializeBinaryFromReader(message: AddLocationRequest, reader: jspb.BinaryReader): AddLocationRequest;
}

export namespace AddLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    position?: Position.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLocationResponse): AddLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLocationResponse;
  static deserializeBinaryFromReader(message: AddLocationResponse, reader: jspb.BinaryReader): AddLocationResponse;
}

export namespace AddLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class GetLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
  static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
  static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class ListLocationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsRequest): ListLocationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsRequest;
  static deserializeBinaryFromReader(message: ListLocationsRequest, reader: jspb.BinaryReader): ListLocationsRequest;
}

export namespace ListLocationsRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListLocationsResponse extends jspb.Message {
  clearLocationsList(): void;
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): void;
  addLocations(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsResponse): ListLocationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsResponse;
  static deserializeBinaryFromReader(message: ListLocationsResponse, reader: jspb.BinaryReader): ListLocationsResponse;
}

export namespace ListLocationsResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
  }
}

export class UpdateLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  hasNewName(): boolean;
  clearNewName(): void;
  getNewName(): string;
  setNewName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationRequest): UpdateLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationRequest;
  static deserializeBinaryFromReader(message: UpdateLocationRequest, reader: jspb.BinaryReader): UpdateLocationRequest;
}

export namespace UpdateLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    position?: Position.AsObject,
    newName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationResponse): UpdateLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationResponse;
  static deserializeBinaryFromReader(message: UpdateLocationResponse, reader: jspb.BinaryReader): UpdateLocationResponse;
}

export namespace UpdateLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class DeleteLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationRequest): DeleteLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationRequest;
  static deserializeBinaryFromReader(message: DeleteLocationRequest, reader: jspb.BinaryReader): DeleteLocationRequest;
}

export namespace DeleteLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DeleteLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationResponse): DeleteLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationResponse;
  static deserializeBinaryFromReader(message: DeleteLocationResponse, reader: jspb.BinaryReader): DeleteLocationResponse;
}

export namespace DeleteLocationResponse {
  export type AsObject = {
  }
}

export class AddRouteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRouteName(): string;
  setRouteName(value: string): void;

  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRouteRequest): AddRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRouteRequest;
  static deserializeBinaryFromReader(message: AddRouteRequest, reader: jspb.BinaryReader): AddRouteRequest;
}

export namespace AddRouteRequest {
  export type AsObject = {
    name: string,
    routeName: string,
    waypointsList: Array<Waypoint.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddRouteResponse extends jspb.Message {
  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): Route | undefined;
  setRoute(value?: Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRouteResponse): AddRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRouteResponse;
  static deserializeBinaryFromReader(message: AddRouteResponse, reader: jspb.BinaryReader): AddRouteResponse;
}

export namespace AddRouteResponse {
  export type AsObject = {
    route?: Route.AsObject,
  }
}

export class GetRouteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRouteName(): string;
  setRouteName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRouteRequest): GetRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRouteRequest;
  static deserializeBinaryFromReader(message: GetRouteRequest, reader: jspb.BinaryReader): GetRouteRequest;
}

export namespace GetRouteRequest {
  export type AsObject = {
    name: string,
    routeName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetRouteResponse extends jspb.Message {
  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): Route | undefined;
  setRoute(value?: Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRouteResponse): GetRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRouteResponse;
  static deserializeBinaryFromReader(message: GetRouteResponse, reader: jspb.BinaryReader): GetRouteResponse;
}

export namespace GetRouteResponse {
  export type AsObject = {
    route?: Route.AsObject,
  }
}

export class ListRoutesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoutesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoutesRequest): ListRoutesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoutesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoutesRequest;
  static deserializeBinaryFromReader(message: ListRoutesRequest, reader: jspb.BinaryReader): ListRoutesRequest;
}

export namespace ListRoutesRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListRoutesResponse extends jspb.Message {
  clearRoutesList(): void;
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): void;
  addRoutes(value?: Route, index?: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoutesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoutesResponse): ListRoutesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoutesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoutesResponse;
  static deserializeBinaryFromReader(message: ListRoutesResponse, reader: jspb.BinaryReader): ListRoutesResponse;
}

export namespace ListRoutesResponse {
  export type AsObject = {
    routesList: Array<Route.AsObject>,
  }
}

export class WaypointList extends jspb.Message {
  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaypointList.AsObject;
  static toObject(includeInstance: boolean, msg: WaypointList): WaypointList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaypointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaypointList;
  static deserializeBinaryFromReader(message: WaypointList, reader: jspb.BinaryReader): WaypointList;
}

export namespace WaypointList {
  export type AsObject = {
    waypointsList: Array<Waypoint.AsObject>,
  }
}

export class UpdateRouteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRouteName(): string;
  setRouteName(value: string): void;

  hasNewName(): boolean;
  clearNewName(): void;
  getNewName(): string;
  setNewName(value: string): void;

  hasWaypoints(): boolean;
  clearWaypoints(): void;
  getWaypoints(): WaypointList | undefined;
  setWaypoints(value?: WaypointList): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRouteRequest): UpdateRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRouteRequest;
  static deserializeBinaryFromReader(message: UpdateRouteRequest, reader: jspb.BinaryReader): UpdateRouteRequest;
}

export namespace UpdateRouteRequest {
  export type AsObject = {
    name: string,
    routeName: string,
    newName: string,
    waypoints?: WaypointList.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateRouteResponse extends jspb.Message {
  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): Route | undefined;
  setRoute(value?: Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRouteResponse): UpdateRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRouteResponse;
  static deserializeBinaryFromReader(message: UpdateRouteResponse, reader: jspb.BinaryReader): UpdateRouteResponse;
}

export namespace UpdateRouteResponse {
  export type AsObject = {
    route?: Route.AsObject,
  }
}

export class DeleteRouteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRouteName(): string;
  setRouteName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRouteRequest): DeleteRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRouteRequest;
  static deserializeBinaryFromReader(message: DeleteRouteRequest, reader: jspb.BinaryReader): DeleteRouteRequest;
}

export namespace DeleteRouteRequest {
  export type AsObject = {
    name: string,
    routeName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DeleteRouteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRouteResponse): DeleteRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRouteResponse;
  static deserializeBinaryFromReader(message: DeleteRouteResponse, reader: jspb.BinaryReader): DeleteRouteResponse;
}

export namespace DeleteRouteResponse {
  export type AsObject = {
  }
}

export class AddZoneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZoneName(): string;
  setZoneName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): google_protobuf_struct_pb.Struct | undefined;
  setGeometry(value?: google_protobuf_struct_pb.Struct): void;

  hasMaxSpeed(): boolean;
  clearMaxSpeed(): void;
  getMaxSpeed(): number;
  setMaxSpeed(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddZoneRequest): AddZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddZoneRequest;
  static deserializeBinaryFromReader(message: AddZoneRequest, reader: jspb.BinaryReader): AddZoneRequest;
}

export namespace AddZoneRequest {
  export type AsObject = {
    name: string,
    zoneName: string,
    type: string,
    geometry?: google_protobuf_struct_pb.Struct.AsObject,
    maxSpeed: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddZoneResponse extends jspb.Message {
  hasZone(): boolean;
  clearZone(): void;
  getZone(): Zone | undefined;
  setZone(value?: Zone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddZoneResponse): AddZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddZoneResponse;
  static deserializeBinaryFromReader(message: AddZoneResponse, reader: jspb.BinaryReader): AddZoneResponse;
}

export namespace AddZoneResponse {
  export type AsObject = {
    zone?: Zone.AsObject,
  }
}

export class GetZoneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZoneName(): string;
  setZoneName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneRequest): GetZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneRequest;
  static deserializeBinaryFromReader(message: GetZoneRequest, reader: jspb.BinaryReader): GetZoneRequest;
}

export namespace GetZoneRequest {
  export type AsObject = {
    name: string,
    zoneName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetZoneResponse extends jspb.Message {
  hasZone(): boolean;
  clearZone(): void;
  getZone(): Zone | undefined;
  setZone(value?: Zone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneResponse): GetZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneResponse;
  static deserializeBinaryFromReader(message: GetZoneResponse, reader: jspb.BinaryReader): GetZoneResponse;
}

export namespace GetZoneResponse {
  export type AsObject = {
    zone?: Zone.AsObject,
  }
}

export class ListZonesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListZonesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListZonesRequest): ListZonesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListZonesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListZonesRequest;
  static deserializeBinaryFromReader(message: ListZonesRequest, reader: jspb.BinaryReader): ListZonesRequest;
}

export namespace ListZonesRequest {
  export type AsObject = {
    name: string,
    type: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListZonesResponse extends jspb.Message {
  clearZonesList(): void;
  getZonesList(): Array<Zone>;
  setZonesList(value: Array<Zone>): void;
  addZones(value?: Zone, index?: number): Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListZonesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListZonesResponse): ListZonesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListZonesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListZonesResponse;
  static deserializeBinaryFromReader(message: ListZonesResponse, reader: jspb.BinaryReader): ListZonesResponse;
}

export namespace ListZonesResponse {
  export type AsObject = {
    zonesList: Array<Zone.AsObject>,
  }
}

export class UpdateZoneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZoneName(): string;
  setZoneName(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): string;
  setType(value: string): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): google_protobuf_struct_pb.Struct | undefined;
  setGeometry(value?: google_protobuf_struct_pb.Struct): void;

  hasMaxSpeed(): boolean;
  clearMaxSpeed(): void;
  getMaxSpeed(): number;
  setMaxSpeed(value: number): void;

  hasNewName(): boolean;
  clearNewName(): void;
  getNewName(): string;
  setNewName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateZoneRequest): UpdateZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateZoneRequest;
  static deserializeBinaryFromReader(message: UpdateZoneRequest, reader: jspb.BinaryReader): UpdateZoneRequest;
}

export namespace UpdateZoneRequest {
  export type AsObject = {
    name: string,
    zoneName: string,
    type: string,
    geometry?: google_protobuf_struct_pb.Struct.AsObject,
    maxSpeed: number,
    newName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateZoneResponse extends jspb.Message {
  hasZone(): boolean;
  clearZone(): void;
  getZone(): Zone | undefined;
  setZone(value?: Zone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateZoneResponse): UpdateZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateZoneResponse;
  static deserializeBinaryFromReader(message: UpdateZoneResponse, reader: jspb.BinaryReader): UpdateZoneResponse;
}

export namespace UpdateZoneResponse {
  export type AsObject = {
    zone?: Zone.AsObject,
  }
}

export class DeleteZoneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZoneName(): string;
  setZoneName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteZoneRequest): DeleteZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteZoneRequest;
  static deserializeBinaryFromReader(message: DeleteZoneRequest, reader: jspb.BinaryReader): DeleteZoneRequest;
}

export namespace DeleteZoneRequest {
  export type AsObject = {
    name: string,
    zoneName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DeleteZoneResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteZoneResponse): DeleteZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteZoneResponse;
  static deserializeBinaryFromReader(message: DeleteZoneResponse, reader: jspb.BinaryReader): DeleteZoneResponse;
}

export namespace DeleteZoneResponse {
  export type AsObject = {
  }
}

export class NavigateToLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateToLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateToLocationRequest): NavigateToLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateToLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateToLocationRequest;
  static deserializeBinaryFromReader(message: NavigateToLocationRequest, reader: jspb.BinaryReader): NavigateToLocationRequest;
}

export namespace NavigateToLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class NavigateToLocationResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateToLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateToLocationResponse): NavigateToLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateToLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateToLocationResponse;
  static deserializeBinaryFromReader(message: NavigateToLocationResponse, reader: jspb.BinaryReader): NavigateToLocationResponse;
}

export namespace NavigateToLocationResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class NavigateToPointRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): Position | undefined;
  setDestination(value?: Position): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateToPointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateToPointRequest): NavigateToPointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateToPointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateToPointRequest;
  static deserializeBinaryFromReader(message: NavigateToPointRequest, reader: jspb.BinaryReader): NavigateToPointRequest;
}

export namespace NavigateToPointRequest {
  export type AsObject = {
    name: string,
    destination?: Position.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class NavigateToPointResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateToPointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateToPointResponse): NavigateToPointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateToPointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateToPointResponse;
  static deserializeBinaryFromReader(message: NavigateToPointResponse, reader: jspb.BinaryReader): NavigateToPointResponse;
}

export namespace NavigateToPointResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class NavigateRouteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRouteName(): string;
  setRouteName(value: string): void;

  clearWaypointsList(): void;
  getWaypointsList(): Array<Waypoint>;
  setWaypointsList(value: Array<Waypoint>): void;
  addWaypoints(value?: Waypoint, index?: number): Waypoint;

  getStartIndex(): number;
  setStartIndex(value: number): void;

  getStartNearest(): boolean;
  setStartNearest(value: boolean): void;

  getLoop(): boolean;
  setLoop(value: boolean): void;

  getWait(): boolean;
  setWait(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateRouteRequest): NavigateRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateRouteRequest;
  static deserializeBinaryFromReader(message: NavigateRouteRequest, reader: jspb.BinaryReader): NavigateRouteRequest;
}

export namespace NavigateRouteRequest {
  export type AsObject = {
    name: string,
    routeName: string,
    waypointsList: Array<Waypoint.AsObject>,
    startIndex: number,
    startNearest: boolean,
    loop: boolean,
    wait: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class NavigateRouteResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigateRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NavigateRouteResponse): NavigateRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavigateRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigateRouteResponse;
  static deserializeBinaryFromReader(message: NavigateRouteResponse, reader: jspb.BinaryReader): NavigateRouteResponse;
}

export namespace NavigateRouteResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class PlanToPointRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): Position | undefined;
  setDestination(value?: Position): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): Position | undefined;
  setStart(value?: Position): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanToPointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlanToPointRequest): PlanToPointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanToPointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanToPointRequest;
  static deserializeBinaryFromReader(message: PlanToPointRequest, reader: jspb.BinaryReader): PlanToPointRequest;
}

export namespace PlanToPointRequest {
  export type AsObject = {
    name: string,
    destination?: Position.AsObject,
    start?: Position.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PlanToPointResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): Plan | undefined;
  setPlan(value?: Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanToPointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlanToPointResponse): PlanToPointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanToPointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanToPointResponse;
  static deserializeBinaryFromReader(message: PlanToPointResponse, reader: jspb.BinaryReader): PlanToPointResponse;
}

export namespace PlanToPointResponse {
  export type AsObject = {
    plan?: Plan.AsObject,
  }
}

export class PlanToLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): Position | undefined;
  setStart(value?: Position): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanToLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlanToLocationRequest): PlanToLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanToLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanToLocationRequest;
  static deserializeBinaryFromReader(message: PlanToLocationRequest, reader: jspb.BinaryReader): PlanToLocationRequest;
}

export namespace PlanToLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    start?: Position.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PlanToLocationResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): Plan | undefined;
  setPlan(value?: Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanToLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlanToLocationResponse): PlanToLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanToLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanToLocationResponse;
  static deserializeBinaryFromReader(message: PlanToLocationResponse, reader: jspb.BinaryReader): PlanToLocationResponse;
}

export namespace PlanToLocationResponse {
  export type AsObject = {
    plan?: Plan.AsObject,
  }
}

export class ExecutePlanRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): Plan | undefined;
  setPlan(value?: Plan): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePlanRequest): ExecutePlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePlanRequest;
  static deserializeBinaryFromReader(message: ExecutePlanRequest, reader: jspb.BinaryReader): ExecutePlanRequest;
}

export namespace ExecutePlanRequest {
  export type AsObject = {
    name: string,
    plan?: Plan.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ExecutePlanResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePlanResponse): ExecutePlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePlanResponse;
  static deserializeBinaryFromReader(message: ExecutePlanResponse, reader: jspb.BinaryReader): ExecutePlanResponse;
}

export namespace ExecutePlanResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class GoToLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  hasWait(): boolean;
  clearWait(): void;
  getWait(): boolean;
  setWait(value: boolean): void;

  hasLinearMPerSec(): boolean;
  clearLinearMPerSec(): void;
  getLinearMPerSec(): number;
  setLinearMPerSec(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoToLocationRequest): GoToLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToLocationRequest;
  static deserializeBinaryFromReader(message: GoToLocationRequest, reader: jspb.BinaryReader): GoToLocationRequest;
}

export namespace GoToLocationRequest {
  export type AsObject = {
    name: string,
    locationName: string,
    wait: boolean,
    linearMPerSec: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GoToLocationResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoToLocationResponse): GoToLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToLocationResponse;
  static deserializeBinaryFromReader(message: GoToLocationResponse, reader: jspb.BinaryReader): GoToLocationResponse;
}

export namespace GoToLocationResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class GoToPointRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): Position | undefined;
  setDestination(value?: Position): void;

  hasWait(): boolean;
  clearWait(): void;
  getWait(): boolean;
  setWait(value: boolean): void;

  hasLinearMPerSec(): boolean;
  clearLinearMPerSec(): void;
  getLinearMPerSec(): number;
  setLinearMPerSec(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToPointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoToPointRequest): GoToPointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToPointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToPointRequest;
  static deserializeBinaryFromReader(message: GoToPointRequest, reader: jspb.BinaryReader): GoToPointRequest;
}

export namespace GoToPointRequest {
  export type AsObject = {
    name: string,
    destination?: Position.AsObject,
    wait: boolean,
    linearMPerSec: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GoToPointResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToPointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoToPointResponse): GoToPointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToPointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToPointResponse;
  static deserializeBinaryFromReader(message: GoToPointResponse, reader: jspb.BinaryReader): GoToPointResponse;
}

export namespace GoToPointResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class SuspendRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendRequest): SuspendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendRequest;
  static deserializeBinaryFromReader(message: SuspendRequest, reader: jspb.BinaryReader): SuspendRequest;
}

export namespace SuspendRequest {
  export type AsObject = {
    name: string,
    reason: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SuspendResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendResponse): SuspendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendResponse;
  static deserializeBinaryFromReader(message: SuspendResponse, reader: jspb.BinaryReader): SuspendResponse;
}

export namespace SuspendResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class ResumeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeRequest): ResumeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeRequest;
  static deserializeBinaryFromReader(message: ResumeRequest, reader: jspb.BinaryReader): ResumeRequest;
}

export namespace ResumeRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ResumeResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeResponse): ResumeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeResponse;
  static deserializeBinaryFromReader(message: ResumeResponse, reader: jspb.BinaryReader): ResumeResponse;
}

export namespace ResumeResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class CancelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CancelResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPositionResponse extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    position?: Position.AsObject,
  }
}

export class GetNavigationStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNavigationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNavigationStatusRequest): GetNavigationStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNavigationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNavigationStatusRequest;
  static deserializeBinaryFromReader(message: GetNavigationStatusRequest, reader: jspb.BinaryReader): GetNavigationStatusRequest;
}

export namespace GetNavigationStatusRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetNavigationStatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNavigationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNavigationStatusResponse): GetNavigationStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNavigationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNavigationStatusResponse;
  static deserializeBinaryFromReader(message: GetNavigationStatusResponse, reader: jspb.BinaryReader): GetNavigationStatusResponse;
}

export namespace GetNavigationStatusResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class GetPropertiesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
  }
}

export class GetPropertiesResponse extends jspb.Message {
  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): Properties | undefined;
  setProperties(value?: Properties): void;

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
    properties?: Properties.AsObject,
  }
}

export class GetCostmapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLayer(): string;
  setLayer(value: string): void;

  getStride(): number;
  setStride(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCostmapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCostmapRequest): GetCostmapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCostmapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCostmapRequest;
  static deserializeBinaryFromReader(message: GetCostmapRequest, reader: jspb.BinaryReader): GetCostmapRequest;
}

export namespace GetCostmapRequest {
  export type AsObject = {
    name: string,
    layer: string,
    stride: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetCostmapResponse extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  getLayer(): string;
  setLayer(value: string): void;

  getNavBackend(): string;
  setNavBackend(value: string): void;

  getOriginX(): number;
  setOriginX(value: number): void;

  getOriginY(): number;
  setOriginY(value: number): void;

  getResolution(): number;
  setResolution(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getEncoding(): string;
  setEncoding(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCostmapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCostmapResponse): GetCostmapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCostmapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCostmapResponse;
  static deserializeBinaryFromReader(message: GetCostmapResponse, reader: jspb.BinaryReader): GetCostmapResponse;
}

export namespace GetCostmapResponse {
  export type AsObject = {
    available: boolean,
    layer: string,
    navBackend: string,
    originX: number,
    originY: number,
    resolution: number,
    width: number,
    height: number,
    encoding: string,
    data: Uint8Array | string,
  }
}

export interface MapTypeMap {
  MAP_TYPE_UNSPECIFIED: 0;
  MAP_TYPE_LOCAL: 1;
  MAP_TYPE_GPS: 2;
}

export const MapType: MapTypeMap;

export interface GoalStateMap {
  GOAL_STATE_UNSPECIFIED: 0;
  GOAL_STATE_ACTIVE: 1;
  GOAL_STATE_SUSPENDED: 2;
  GOAL_STATE_SUCCEEDED: 3;
  GOAL_STATE_FAILED: 4;
  GOAL_STATE_CANCELED: 5;
}

export const GoalState: GoalStateMap;

export interface NavModeMap {
  NAV_MODE_UNSPECIFIED: 0;
  NAV_MODE_PLANNED: 1;
  NAV_MODE_DIRECT: 2;
  NAV_MODE_ROUTE: 3;
}

export const NavMode: NavModeMap;

export interface NavErrorCodeMap {
  NAV_ERROR_CODE_UNSPECIFIED: 0;
  NAV_ERROR_CODE_NO_PATH: 1;
  NAV_ERROR_CODE_BLOCKED: 2;
  NAV_ERROR_CODE_LOCALIZATION_LOST: 3;
  NAV_ERROR_CODE_BASE_ERROR: 4;
  NAV_ERROR_CODE_TIMEOUT: 5;
  NAV_ERROR_CODE_OTHER: 6;
}

export const NavErrorCode: NavErrorCodeMap;

