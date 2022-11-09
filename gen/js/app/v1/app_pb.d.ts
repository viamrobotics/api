// package: viam.app.v1
// file: app/v1/app.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tagger_v1_tagger_pb from "../../tagger/v1/tagger_pb";

export class Robot extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  hasLastAccess(): boolean;
  clearLastAccess(): void;
  getLastAccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Robot.AsObject;
  static toObject(includeInstance: boolean, msg: Robot): Robot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Robot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Robot;
  static deserializeBinaryFromReader(message: Robot, reader: jspb.BinaryReader): Robot;
}

export namespace Robot {
  export type AsObject = {
    id: string,
    name: string,
    location: string,
    lastAccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RobotPart extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDnsName(): string;
  setDnsName(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getRobot(): string;
  setRobot(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  hasRobotConfig(): boolean;
  clearRobotConfig(): void;
  getRobotConfig(): google_protobuf_struct_pb.Struct | undefined;
  setRobotConfig(value?: google_protobuf_struct_pb.Struct): void;

  hasLastAccess(): boolean;
  clearLastAccess(): void;
  getLastAccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUserSuppliedInfo(): boolean;
  clearUserSuppliedInfo(): void;
  getUserSuppliedInfo(): google_protobuf_struct_pb.Struct | undefined;
  setUserSuppliedInfo(value?: google_protobuf_struct_pb.Struct): void;

  getMainPart(): boolean;
  setMainPart(value: boolean): void;

  getFqdn(): string;
  setFqdn(value: string): void;

  getLocalFqdn(): string;
  setLocalFqdn(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSecretsList(): void;
  getSecretsList(): Array<SharedSecret>;
  setSecretsList(value: Array<SharedSecret>): void;
  addSecrets(value?: SharedSecret, index?: number): SharedSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotPart.AsObject;
  static toObject(includeInstance: boolean, msg: RobotPart): RobotPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotPart;
  static deserializeBinaryFromReader(message: RobotPart, reader: jspb.BinaryReader): RobotPart;
}

export namespace RobotPart {
  export type AsObject = {
    id: string,
    name: string,
    dnsName: string,
    secret: string,
    robot: string,
    locationId: string,
    robotConfig?: google_protobuf_struct_pb.Struct.AsObject,
    lastAccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userSuppliedInfo?: google_protobuf_struct_pb.Struct.AsObject,
    mainPart: boolean,
    fqdn: string,
    localFqdn: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    secretsList: Array<SharedSecret.AsObject>,
  }
}

export class RobotPartHistoryEntry extends jspb.Message {
  getPart(): string;
  setPart(value: string): void;

  getRobot(): string;
  setRobot(value: string): void;

  hasWhen(): boolean;
  clearWhen(): void;
  getWhen(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWhen(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOld(): boolean;
  clearOld(): void;
  getOld(): RobotPart | undefined;
  setOld(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotPartHistoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RobotPartHistoryEntry): RobotPartHistoryEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotPartHistoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotPartHistoryEntry;
  static deserializeBinaryFromReader(message: RobotPartHistoryEntry, reader: jspb.BinaryReader): RobotPartHistoryEntry;
}

export namespace RobotPartHistoryEntry {
  export type AsObject = {
    part: string,
    robot: string,
    when?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    old?: RobotPart.AsObject,
  }
}

export class ListOrganizationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationsResponse extends jspb.Message {
  clearOrganizationsList(): void;
  getOrganizationsList(): Array<Organization>;
  setOrganizationsList(value: Array<Organization>): void;
  addOrganizations(value?: Organization, index?: number): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
  export type AsObject = {
    organizationsList: Array<Organization.AsObject>,
  }
}

export class Location extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    id: string,
    name: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateLocationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationRequest): CreateLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationRequest;
  static deserializeBinaryFromReader(message: CreateLocationRequest, reader: jspb.BinaryReader): CreateLocationRequest;
}

export namespace CreateLocationRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
  }
}

export class CreateLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationResponse): CreateLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationResponse;
  static deserializeBinaryFromReader(message: CreateLocationResponse, reader: jspb.BinaryReader): CreateLocationResponse;
}

export namespace CreateLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class ListLocationsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

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
    organizationId: string,
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

export class CreateLocationSecretRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationSecretRequest): CreateLocationSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationSecretRequest;
  static deserializeBinaryFromReader(message: CreateLocationSecretRequest, reader: jspb.BinaryReader): CreateLocationSecretRequest;
}

export namespace CreateLocationSecretRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class CreateLocationSecretResponse extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): LocationAuth | undefined;
  setAuth(value?: LocationAuth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationSecretResponse): CreateLocationSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationSecretResponse;
  static deserializeBinaryFromReader(message: CreateLocationSecretResponse, reader: jspb.BinaryReader): CreateLocationSecretResponse;
}

export namespace CreateLocationSecretResponse {
  export type AsObject = {
    auth?: LocationAuth.AsObject,
  }
}

export class DeleteLocationSecretRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  getSecretId(): string;
  setSecretId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationSecretRequest): DeleteLocationSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationSecretRequest;
  static deserializeBinaryFromReader(message: DeleteLocationSecretRequest, reader: jspb.BinaryReader): DeleteLocationSecretRequest;
}

export namespace DeleteLocationSecretRequest {
  export type AsObject = {
    locationId: string,
    secretId: string,
  }
}

export class DeleteLocationSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationSecretResponse): DeleteLocationSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationSecretResponse;
  static deserializeBinaryFromReader(message: DeleteLocationSecretResponse, reader: jspb.BinaryReader): DeleteLocationSecretResponse;
}

export namespace DeleteLocationSecretResponse {
  export type AsObject = {
  }
}

export class LocationAuth extends jspb.Message {
  getSecret(): string;
  setSecret(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  clearSecretsList(): void;
  getSecretsList(): Array<SharedSecret>;
  setSecretsList(value: Array<SharedSecret>): void;
  addSecrets(value?: SharedSecret, index?: number): SharedSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuth.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuth): LocationAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuth;
  static deserializeBinaryFromReader(message: LocationAuth, reader: jspb.BinaryReader): LocationAuth;
}

export namespace LocationAuth {
  export type AsObject = {
    secret: string,
    locationId: string,
    secretsList: Array<SharedSecret.AsObject>,
  }
}

export class SharedSecret extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): SharedSecret.StateMap[keyof SharedSecret.StateMap];
  setState(value: SharedSecret.StateMap[keyof SharedSecret.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSecret): SharedSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSecret;
  static deserializeBinaryFromReader(message: SharedSecret, reader: jspb.BinaryReader): SharedSecret;
}

export namespace SharedSecret {
  export type AsObject = {
    id: string,
    secret: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: SharedSecret.StateMap[keyof SharedSecret.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_ENABLED: 1;
    STATE_DISABLED: 2;
  }

  export const State: StateMap;
}

export class LocationAuthRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuthRequest): LocationAuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuthRequest;
  static deserializeBinaryFromReader(message: LocationAuthRequest, reader: jspb.BinaryReader): LocationAuthRequest;
}

export namespace LocationAuthRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class LocationAuthResponse extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): LocationAuth | undefined;
  setAuth(value?: LocationAuth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuthResponse): LocationAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuthResponse;
  static deserializeBinaryFromReader(message: LocationAuthResponse, reader: jspb.BinaryReader): LocationAuthResponse;
}

export namespace LocationAuthResponse {
  export type AsObject = {
    auth?: LocationAuth.AsObject,
  }
}

export class GetRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotRequest): GetRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotRequest;
  static deserializeBinaryFromReader(message: GetRobotRequest, reader: jspb.BinaryReader): GetRobotRequest;
}

export namespace GetRobotRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotResponse extends jspb.Message {
  hasRobot(): boolean;
  clearRobot(): void;
  getRobot(): Robot | undefined;
  setRobot(value?: Robot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotResponse): GetRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotResponse;
  static deserializeBinaryFromReader(message: GetRobotResponse, reader: jspb.BinaryReader): GetRobotResponse;
}

export namespace GetRobotResponse {
  export type AsObject = {
    robot?: Robot.AsObject,
  }
}

export class GetRobotPartsRequest extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartsRequest): GetRobotPartsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartsRequest;
  static deserializeBinaryFromReader(message: GetRobotPartsRequest, reader: jspb.BinaryReader): GetRobotPartsRequest;
}

export namespace GetRobotPartsRequest {
  export type AsObject = {
    robotId: string,
  }
}

export class GetRobotPartsResponse extends jspb.Message {
  clearPartsList(): void;
  getPartsList(): Array<RobotPart>;
  setPartsList(value: Array<RobotPart>): void;
  addParts(value?: RobotPart, index?: number): RobotPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartsResponse): GetRobotPartsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartsResponse;
  static deserializeBinaryFromReader(message: GetRobotPartsResponse, reader: jspb.BinaryReader): GetRobotPartsResponse;
}

export namespace GetRobotPartsResponse {
  export type AsObject = {
    partsList: Array<RobotPart.AsObject>,
  }
}

export class GetRobotPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartRequest): GetRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartRequest;
  static deserializeBinaryFromReader(message: GetRobotPartRequest, reader: jspb.BinaryReader): GetRobotPartRequest;
}

export namespace GetRobotPartRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotPartResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  getConfigJson(): string;
  setConfigJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartResponse): GetRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartResponse;
  static deserializeBinaryFromReader(message: GetRobotPartResponse, reader: jspb.BinaryReader): GetRobotPartResponse;
}

export namespace GetRobotPartResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
    configJson: string,
  }
}

export class GetRobotPartLogsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getErrorsOnly(): boolean;
  setErrorsOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartLogsRequest): GetRobotPartLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartLogsRequest;
  static deserializeBinaryFromReader(message: GetRobotPartLogsRequest, reader: jspb.BinaryReader): GetRobotPartLogsRequest;
}

export namespace GetRobotPartLogsRequest {
  export type AsObject = {
    id: string,
    errorsOnly: boolean,
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

export class GetRobotPartLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<LogEntry>;
  setLogsList(value: Array<LogEntry>): void;
  addLogs(value?: LogEntry, index?: number): LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartLogsResponse): GetRobotPartLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartLogsResponse;
  static deserializeBinaryFromReader(message: GetRobotPartLogsResponse, reader: jspb.BinaryReader): GetRobotPartLogsResponse;
}

export namespace GetRobotPartLogsResponse {
  export type AsObject = {
    logsList: Array<LogEntry.AsObject>,
  }
}

export class TailRobotPartLogsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getErrorsOnly(): boolean;
  setErrorsOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TailRobotPartLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TailRobotPartLogsRequest): TailRobotPartLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TailRobotPartLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TailRobotPartLogsRequest;
  static deserializeBinaryFromReader(message: TailRobotPartLogsRequest, reader: jspb.BinaryReader): TailRobotPartLogsRequest;
}

export namespace TailRobotPartLogsRequest {
  export type AsObject = {
    id: string,
    errorsOnly: boolean,
  }
}

export class TailRobotPartLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<LogEntry>;
  setLogsList(value: Array<LogEntry>): void;
  addLogs(value?: LogEntry, index?: number): LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TailRobotPartLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TailRobotPartLogsResponse): TailRobotPartLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TailRobotPartLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TailRobotPartLogsResponse;
  static deserializeBinaryFromReader(message: TailRobotPartLogsResponse, reader: jspb.BinaryReader): TailRobotPartLogsResponse;
}

export namespace TailRobotPartLogsResponse {
  export type AsObject = {
    logsList: Array<LogEntry.AsObject>,
  }
}

export class GetRobotPartHistoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartHistoryRequest): GetRobotPartHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartHistoryRequest;
  static deserializeBinaryFromReader(message: GetRobotPartHistoryRequest, reader: jspb.BinaryReader): GetRobotPartHistoryRequest;
}

export namespace GetRobotPartHistoryRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotPartHistoryResponse extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<RobotPartHistoryEntry>;
  setHistoryList(value: Array<RobotPartHistoryEntry>): void;
  addHistory(value?: RobotPartHistoryEntry, index?: number): RobotPartHistoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartHistoryResponse): GetRobotPartHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartHistoryResponse;
  static deserializeBinaryFromReader(message: GetRobotPartHistoryResponse, reader: jspb.BinaryReader): GetRobotPartHistoryResponse;
}

export namespace GetRobotPartHistoryResponse {
  export type AsObject = {
    historyList: Array<RobotPartHistoryEntry.AsObject>,
  }
}

export class UpdateRobotPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasRobotConfig(): boolean;
  clearRobotConfig(): void;
  getRobotConfig(): google_protobuf_struct_pb.Struct | undefined;
  setRobotConfig(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotPartRequest): UpdateRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotPartRequest;
  static deserializeBinaryFromReader(message: UpdateRobotPartRequest, reader: jspb.BinaryReader): UpdateRobotPartRequest;
}

export namespace UpdateRobotPartRequest {
  export type AsObject = {
    id: string,
    name: string,
    robotConfig?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateRobotPartResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotPartResponse): UpdateRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotPartResponse;
  static deserializeBinaryFromReader(message: UpdateRobotPartResponse, reader: jspb.BinaryReader): UpdateRobotPartResponse;
}

export namespace UpdateRobotPartResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
  }
}

export class NewRobotPartRequest extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotPartRequest): NewRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotPartRequest;
  static deserializeBinaryFromReader(message: NewRobotPartRequest, reader: jspb.BinaryReader): NewRobotPartRequest;
}

export namespace NewRobotPartRequest {
  export type AsObject = {
    robotId: string,
    partName: string,
  }
}

export class NewRobotPartResponse extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotPartResponse): NewRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotPartResponse;
  static deserializeBinaryFromReader(message: NewRobotPartResponse, reader: jspb.BinaryReader): NewRobotPartResponse;
}

export namespace NewRobotPartResponse {
  export type AsObject = {
    partId: string,
  }
}

export class DeleteRobotPartRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartRequest): DeleteRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartRequest;
  static deserializeBinaryFromReader(message: DeleteRobotPartRequest, reader: jspb.BinaryReader): DeleteRobotPartRequest;
}

export namespace DeleteRobotPartRequest {
  export type AsObject = {
    partId: string,
  }
}

export class DeleteRobotPartResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartResponse): DeleteRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartResponse;
  static deserializeBinaryFromReader(message: DeleteRobotPartResponse, reader: jspb.BinaryReader): DeleteRobotPartResponse;
}

export namespace DeleteRobotPartResponse {
  export type AsObject = {
  }
}

export class Fragment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): google_protobuf_struct_pb.Struct | undefined;
  setFragment(value?: google_protobuf_struct_pb.Struct): void;

  getOrganizationOwner(): string;
  setOrganizationOwner(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fragment.AsObject;
  static toObject(includeInstance: boolean, msg: Fragment): Fragment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fragment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fragment;
  static deserializeBinaryFromReader(message: Fragment, reader: jspb.BinaryReader): Fragment;
}

export namespace Fragment {
  export type AsObject = {
    id: string,
    name: string,
    fragment?: google_protobuf_struct_pb.Struct.AsObject,
    organizationOwner: string,
    pb_public: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FindRobotsRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRobotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRobotsRequest): FindRobotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRobotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRobotsRequest;
  static deserializeBinaryFromReader(message: FindRobotsRequest, reader: jspb.BinaryReader): FindRobotsRequest;
}

export namespace FindRobotsRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class FindRobotsResponse extends jspb.Message {
  clearRobotsList(): void;
  getRobotsList(): Array<Robot>;
  setRobotsList(value: Array<Robot>): void;
  addRobots(value?: Robot, index?: number): Robot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRobotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindRobotsResponse): FindRobotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRobotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRobotsResponse;
  static deserializeBinaryFromReader(message: FindRobotsResponse, reader: jspb.BinaryReader): FindRobotsResponse;
}

export namespace FindRobotsResponse {
  export type AsObject = {
    robotsList: Array<Robot.AsObject>,
  }
}

export class NewRobotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotRequest): NewRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotRequest;
  static deserializeBinaryFromReader(message: NewRobotRequest, reader: jspb.BinaryReader): NewRobotRequest;
}

export namespace NewRobotRequest {
  export type AsObject = {
    name: string,
    location: string,
  }
}

export class NewRobotResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotResponse): NewRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotResponse;
  static deserializeBinaryFromReader(message: NewRobotResponse, reader: jspb.BinaryReader): NewRobotResponse;
}

export namespace NewRobotResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotRequest): UpdateRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotRequest;
  static deserializeBinaryFromReader(message: UpdateRobotRequest, reader: jspb.BinaryReader): UpdateRobotRequest;
}

export namespace UpdateRobotRequest {
  export type AsObject = {
    id: string,
    name: string,
    location: string,
  }
}

export class UpdateRobotResponse extends jspb.Message {
  hasRobot(): boolean;
  clearRobot(): void;
  getRobot(): Robot | undefined;
  setRobot(value?: Robot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotResponse): UpdateRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotResponse;
  static deserializeBinaryFromReader(message: UpdateRobotResponse, reader: jspb.BinaryReader): UpdateRobotResponse;
}

export namespace UpdateRobotResponse {
  export type AsObject = {
    robot?: Robot.AsObject,
  }
}

export class DeleteRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotRequest): DeleteRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotRequest;
  static deserializeBinaryFromReader(message: DeleteRobotRequest, reader: jspb.BinaryReader): DeleteRobotRequest;
}

export namespace DeleteRobotRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotResponse): DeleteRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotResponse;
  static deserializeBinaryFromReader(message: DeleteRobotResponse, reader: jspb.BinaryReader): DeleteRobotResponse;
}

export namespace DeleteRobotResponse {
  export type AsObject = {
  }
}

export class MarkPartAsMainRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartAsMainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartAsMainRequest): MarkPartAsMainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartAsMainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartAsMainRequest;
  static deserializeBinaryFromReader(message: MarkPartAsMainRequest, reader: jspb.BinaryReader): MarkPartAsMainRequest;
}

export namespace MarkPartAsMainRequest {
  export type AsObject = {
    partId: string,
  }
}

export class MarkPartAsMainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartAsMainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartAsMainResponse): MarkPartAsMainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartAsMainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartAsMainResponse;
  static deserializeBinaryFromReader(message: MarkPartAsMainResponse, reader: jspb.BinaryReader): MarkPartAsMainResponse;
}

export namespace MarkPartAsMainResponse {
  export type AsObject = {
  }
}

export class CreateRobotPartSecretRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotPartSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotPartSecretRequest): CreateRobotPartSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotPartSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotPartSecretRequest;
  static deserializeBinaryFromReader(message: CreateRobotPartSecretRequest, reader: jspb.BinaryReader): CreateRobotPartSecretRequest;
}

export namespace CreateRobotPartSecretRequest {
  export type AsObject = {
    partId: string,
  }
}

export class CreateRobotPartSecretResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotPartSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotPartSecretResponse): CreateRobotPartSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotPartSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotPartSecretResponse;
  static deserializeBinaryFromReader(message: CreateRobotPartSecretResponse, reader: jspb.BinaryReader): CreateRobotPartSecretResponse;
}

export namespace CreateRobotPartSecretResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
  }
}

export class DeleteRobotPartSecretRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  getSecretId(): string;
  setSecretId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartSecretRequest): DeleteRobotPartSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartSecretRequest;
  static deserializeBinaryFromReader(message: DeleteRobotPartSecretRequest, reader: jspb.BinaryReader): DeleteRobotPartSecretRequest;
}

export namespace DeleteRobotPartSecretRequest {
  export type AsObject = {
    partId: string,
    secretId: string,
  }
}

export class DeleteRobotPartSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartSecretResponse): DeleteRobotPartSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartSecretResponse;
  static deserializeBinaryFromReader(message: DeleteRobotPartSecretResponse, reader: jspb.BinaryReader): DeleteRobotPartSecretResponse;
}

export namespace DeleteRobotPartSecretResponse {
  export type AsObject = {
  }
}

