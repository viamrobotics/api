// package: viam.app.cloudslam.v1
// file: app/cloudslam/v1/cloud_slam.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StartMappingSessionRequest extends jspb.Message {
  hasSlamConfig(): boolean;
  clearSlamConfig(): void;
  getSlamConfig(): google_protobuf_struct_pb.Struct | undefined;
  setSlamConfig(value?: google_protobuf_struct_pb.Struct): void;

  getSlamVersion(): string;
  setSlamVersion(value: string): void;

  getMapName(): string;
  setMapName(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getViamServerVersion(): string;
  setViamServerVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMappingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartMappingSessionRequest): StartMappingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartMappingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMappingSessionRequest;
  static deserializeBinaryFromReader(message: StartMappingSessionRequest, reader: jspb.BinaryReader): StartMappingSessionRequest;
}

export namespace StartMappingSessionRequest {
  export type AsObject = {
    slamConfig?: google_protobuf_struct_pb.Struct.AsObject,
    slamVersion: string,
    mapName: string,
    organizationId: string,
    locationId: string,
    robotId: string,
    viamServerVersion: string,
  }
}

export class StartMappingSessionResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMappingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartMappingSessionResponse): StartMappingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartMappingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMappingSessionResponse;
  static deserializeBinaryFromReader(message: StartMappingSessionResponse, reader: jspb.BinaryReader): StartMappingSessionResponse;
}

export namespace StartMappingSessionResponse {
  export type AsObject = {
    sessionId: string,
  }
}

export class GetActiveMappingSessionsForRobotRequest extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveMappingSessionsForRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveMappingSessionsForRobotRequest): GetActiveMappingSessionsForRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveMappingSessionsForRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveMappingSessionsForRobotRequest;
  static deserializeBinaryFromReader(message: GetActiveMappingSessionsForRobotRequest, reader: jspb.BinaryReader): GetActiveMappingSessionsForRobotRequest;
}

export namespace GetActiveMappingSessionsForRobotRequest {
  export type AsObject = {
    robotId: string,
  }
}

export class GetActiveMappingSessionsForRobotResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveMappingSessionsForRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveMappingSessionsForRobotResponse): GetActiveMappingSessionsForRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveMappingSessionsForRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveMappingSessionsForRobotResponse;
  static deserializeBinaryFromReader(message: GetActiveMappingSessionsForRobotResponse, reader: jspb.BinaryReader): GetActiveMappingSessionsForRobotResponse;
}

export namespace GetActiveMappingSessionsForRobotResponse {
  export type AsObject = {
    sessionId: string,
  }
}

export class GetMappingSessionPointCloudRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingSessionPointCloudRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingSessionPointCloudRequest): GetMappingSessionPointCloudRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingSessionPointCloudRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingSessionPointCloudRequest;
  static deserializeBinaryFromReader(message: GetMappingSessionPointCloudRequest, reader: jspb.BinaryReader): GetMappingSessionPointCloudRequest;
}

export namespace GetMappingSessionPointCloudRequest {
  export type AsObject = {
    sessionId: string,
  }
}

export class GetMappingSessionPointCloudResponse extends jspb.Message {
  getMapUrl(): string;
  setMapUrl(value: string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingSessionPointCloudResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingSessionPointCloudResponse): GetMappingSessionPointCloudResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingSessionPointCloudResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingSessionPointCloudResponse;
  static deserializeBinaryFromReader(message: GetMappingSessionPointCloudResponse, reader: jspb.BinaryReader): GetMappingSessionPointCloudResponse;
}

export namespace GetMappingSessionPointCloudResponse {
  export type AsObject = {
    mapUrl: string,
    pose?: common_v1_common_pb.Pose.AsObject,
  }
}

export class ListMappingSessionsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMappingSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMappingSessionsRequest): ListMappingSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMappingSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMappingSessionsRequest;
  static deserializeBinaryFromReader(message: ListMappingSessionsRequest, reader: jspb.BinaryReader): ListMappingSessionsRequest;
}

export namespace ListMappingSessionsRequest {
  export type AsObject = {
    organizationId: string,
    locationId: string,
  }
}

export class ListMappingSessionsResponse extends jspb.Message {
  clearSessionList(): void;
  getSessionList(): Array<MappingMetadata>;
  setSessionList(value: Array<MappingMetadata>): void;
  addSession(value?: MappingMetadata, index?: number): MappingMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMappingSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMappingSessionsResponse): ListMappingSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMappingSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMappingSessionsResponse;
  static deserializeBinaryFromReader(message: ListMappingSessionsResponse, reader: jspb.BinaryReader): ListMappingSessionsResponse;
}

export namespace ListMappingSessionsResponse {
  export type AsObject = {
    sessionList: Array<MappingMetadata.AsObject>,
  }
}

export class StopMappingSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getSaveMap(): boolean;
  setSaveMap(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopMappingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopMappingSessionRequest): StopMappingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopMappingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopMappingSessionRequest;
  static deserializeBinaryFromReader(message: StopMappingSessionRequest, reader: jspb.BinaryReader): StopMappingSessionRequest;
}

export namespace StopMappingSessionRequest {
  export type AsObject = {
    sessionId: string,
    saveMap: boolean,
  }
}

export class StopMappingSessionResponse extends jspb.Message {
  getPackageId(): string;
  setPackageId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopMappingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopMappingSessionResponse): StopMappingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopMappingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopMappingSessionResponse;
  static deserializeBinaryFromReader(message: StopMappingSessionResponse, reader: jspb.BinaryReader): StopMappingSessionResponse;
}

export namespace StopMappingSessionResponse {
  export type AsObject = {
    packageId: string,
    version: string,
  }
}

export class MappingMetadata extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  hasTimeStartSubmitted(): boolean;
  clearTimeStartSubmitted(): void;
  getTimeStartSubmitted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeStartSubmitted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeCloudRunJobStarted(): boolean;
  clearTimeCloudRunJobStarted(): void;
  getTimeCloudRunJobStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeCloudRunJobStarted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeEndSubmitted(): boolean;
  clearTimeEndSubmitted(): void;
  getTimeEndSubmitted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeEndSubmitted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeCloudRunJobEnded(): boolean;
  clearTimeCloudRunJobEnded(): void;
  getTimeCloudRunJobEnded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeCloudRunJobEnded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEndStatus(): string;
  setEndStatus(value: string): void;

  getCloudRunJobId(): string;
  setCloudRunJobId(value: string): void;

  getViamServerVersion(): string;
  setViamServerVersion(value: string): void;

  getMapName(): string;
  setMapName(value: string): void;

  getSlamVersion(): string;
  setSlamVersion(value: string): void;

  getConfig(): string;
  setConfig(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MappingMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: MappingMetadata): MappingMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MappingMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MappingMetadata;
  static deserializeBinaryFromReader(message: MappingMetadata, reader: jspb.BinaryReader): MappingMetadata;
}

export namespace MappingMetadata {
  export type AsObject = {
    orgId: string,
    locationId: string,
    robotId: string,
    timeStartSubmitted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeCloudRunJobStarted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeEndSubmitted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeCloudRunJobEnded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endStatus: string,
    cloudRunJobId: string,
    viamServerVersion: string,
    mapName: string,
    slamVersion: string,
    config: string,
  }
}

