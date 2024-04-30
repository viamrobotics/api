// package: viam.app.agent.v1
// file: app/agent/v1/agent.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DeviceAgentConfigRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasHostInfo(): boolean;
  clearHostInfo(): void;
  getHostInfo(): HostInfo | undefined;
  setHostInfo(value?: HostInfo): void;

  getSubsystemVersionsMap(): jspb.Map<string, string>;
  clearSubsystemVersionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAgentConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAgentConfigRequest): DeviceAgentConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceAgentConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAgentConfigRequest;
  static deserializeBinaryFromReader(message: DeviceAgentConfigRequest, reader: jspb.BinaryReader): DeviceAgentConfigRequest;
}

export namespace DeviceAgentConfigRequest {
  export type AsObject = {
    id: string,
    hostInfo?: HostInfo.AsObject,
    subsystemVersionsMap: Array<[string, string]>,
  }
}

export class DeviceAgentConfigResponse extends jspb.Message {
  getSubsystemConfigsMap(): jspb.Map<string, DeviceSubsystemConfig>;
  clearSubsystemConfigsMap(): void;
  hasCheckInterval(): boolean;
  clearCheckInterval(): void;
  getCheckInterval(): google_protobuf_duration_pb.Duration | undefined;
  setCheckInterval(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAgentConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAgentConfigResponse): DeviceAgentConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceAgentConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAgentConfigResponse;
  static deserializeBinaryFromReader(message: DeviceAgentConfigResponse, reader: jspb.BinaryReader): DeviceAgentConfigResponse;
}

export namespace DeviceAgentConfigResponse {
  export type AsObject = {
    subsystemConfigsMap: Array<[string, DeviceSubsystemConfig.AsObject]>,
    checkInterval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class DeviceSubsystemConfig extends jspb.Message {
  hasUpdateInfo(): boolean;
  clearUpdateInfo(): void;
  getUpdateInfo(): SubsystemUpdateInfo | undefined;
  setUpdateInfo(value?: SubsystemUpdateInfo): void;

  getDisable(): boolean;
  setDisable(value: boolean): void;

  getForceRestart(): boolean;
  setForceRestart(value: boolean): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSubsystemConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSubsystemConfig): DeviceSubsystemConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSubsystemConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSubsystemConfig;
  static deserializeBinaryFromReader(message: DeviceSubsystemConfig, reader: jspb.BinaryReader): DeviceSubsystemConfig;
}

export namespace DeviceSubsystemConfig {
  export type AsObject = {
    updateInfo?: SubsystemUpdateInfo.AsObject,
    disable: boolean,
    forceRestart: boolean,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class HostInfo extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): void;

  getDistro(): string;
  setDistro(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HostInfo): HostInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HostInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostInfo;
  static deserializeBinaryFromReader(message: HostInfo, reader: jspb.BinaryReader): HostInfo;
}

export namespace HostInfo {
  export type AsObject = {
    platform: string,
    distro: string,
    tagsList: Array<string>,
  }
}

export class SubsystemUpdateInfo extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSha256(): Uint8Array | string;
  getSha256_asU8(): Uint8Array;
  getSha256_asB64(): string;
  setSha256(value: Uint8Array | string): void;

  getFormat(): PackageFormatMap[keyof PackageFormatMap];
  setFormat(value: PackageFormatMap[keyof PackageFormatMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubsystemUpdateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SubsystemUpdateInfo): SubsystemUpdateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubsystemUpdateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubsystemUpdateInfo;
  static deserializeBinaryFromReader(message: SubsystemUpdateInfo, reader: jspb.BinaryReader): SubsystemUpdateInfo;
}

export namespace SubsystemUpdateInfo {
  export type AsObject = {
    filename: string,
    url: string,
    version: string,
    sha256: Uint8Array | string,
    format: PackageFormatMap[keyof PackageFormatMap],
  }
}

export interface PackageFormatMap {
  PACKAGE_FORMAT_UNSPECIFIED: 0;
  PACKAGE_FORMAT_RAW: 1;
  PACKAGE_FORMAT_XZ: 2;
  PACKAGE_FORMAT_EXECUTABLE: 3;
  PACKAGE_FORMAT_XZ_EXECUTABLE: 4;
}

export const PackageFormat: PackageFormatMap;

