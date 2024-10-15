// package: viam.provisioning.v1
// file: provisioning/v1/provisioning.proto

import * as jspb from "google-protobuf";

export class GetSmartphysicalDeviceStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartphysicalDeviceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartphysicalDeviceStatusRequest): GetSmartphysicalDeviceStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartphysicalDeviceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartphysicalDeviceStatusRequest;
  static deserializeBinaryFromReader(message: GetSmartphysicalDeviceStatusRequest, reader: jspb.BinaryReader): GetSmartphysicalDeviceStatusRequest;
}

export namespace GetSmartphysicalDeviceStatusRequest {
  export type AsObject = {
  }
}

export class GetSmartphysicalDeviceStatusResponse extends jspb.Message {
  hasProvisioningInfo(): boolean;
  clearProvisioningInfo(): void;
  getProvisioningInfo(): ProvisioningInfo | undefined;
  setProvisioningInfo(value?: ProvisioningInfo): void;

  getHasSmartphysicalDeviceCredentials(): boolean;
  setHasSmartphysicalDeviceCredentials(value: boolean): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  hasLatestConnectionAttempt(): boolean;
  clearLatestConnectionAttempt(): void;
  getLatestConnectionAttempt(): NetworkInfo | undefined;
  setLatestConnectionAttempt(value?: NetworkInfo): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartphysicalDeviceStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartphysicalDeviceStatusResponse): GetSmartphysicalDeviceStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartphysicalDeviceStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartphysicalDeviceStatusResponse;
  static deserializeBinaryFromReader(message: GetSmartphysicalDeviceStatusResponse, reader: jspb.BinaryReader): GetSmartphysicalDeviceStatusResponse;
}

export namespace GetSmartphysicalDeviceStatusResponse {
  export type AsObject = {
    provisioningInfo?: ProvisioningInfo.AsObject,
    hasSmartphysicalDeviceCredentials: boolean,
    isOnline: boolean,
    latestConnectionAttempt?: NetworkInfo.AsObject,
    errorsList: Array<string>,
  }
}

export class SetNetworkCredentialsRequest extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getSsid(): string;
  setSsid(value: string): void;

  getPsk(): string;
  setPsk(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNetworkCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNetworkCredentialsRequest): SetNetworkCredentialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNetworkCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNetworkCredentialsRequest;
  static deserializeBinaryFromReader(message: SetNetworkCredentialsRequest, reader: jspb.BinaryReader): SetNetworkCredentialsRequest;
}

export namespace SetNetworkCredentialsRequest {
  export type AsObject = {
    type: string,
    ssid: string,
    psk: string,
  }
}

export class SetNetworkCredentialsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNetworkCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetNetworkCredentialsResponse): SetNetworkCredentialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNetworkCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNetworkCredentialsResponse;
  static deserializeBinaryFromReader(message: SetNetworkCredentialsResponse, reader: jspb.BinaryReader): SetNetworkCredentialsResponse;
}

export namespace SetNetworkCredentialsResponse {
  export type AsObject = {
  }
}

export class SetSmartphysicalDeviceCredentialsRequest extends jspb.Message {
  hasCloud(): boolean;
  clearCloud(): void;
  getCloud(): CloudConfig | undefined;
  setCloud(value?: CloudConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSmartphysicalDeviceCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSmartphysicalDeviceCredentialsRequest): SetSmartphysicalDeviceCredentialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSmartphysicalDeviceCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSmartphysicalDeviceCredentialsRequest;
  static deserializeBinaryFromReader(message: SetSmartphysicalDeviceCredentialsRequest, reader: jspb.BinaryReader): SetSmartphysicalDeviceCredentialsRequest;
}

export namespace SetSmartphysicalDeviceCredentialsRequest {
  export type AsObject = {
    cloud?: CloudConfig.AsObject,
  }
}

export class SetSmartphysicalDeviceCredentialsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSmartphysicalDeviceCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSmartphysicalDeviceCredentialsResponse): SetSmartphysicalDeviceCredentialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSmartphysicalDeviceCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSmartphysicalDeviceCredentialsResponse;
  static deserializeBinaryFromReader(message: SetSmartphysicalDeviceCredentialsResponse, reader: jspb.BinaryReader): SetSmartphysicalDeviceCredentialsResponse;
}

export namespace SetSmartphysicalDeviceCredentialsResponse {
  export type AsObject = {
  }
}

export class GetNetworkListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkListRequest): GetNetworkListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkListRequest;
  static deserializeBinaryFromReader(message: GetNetworkListRequest, reader: jspb.BinaryReader): GetNetworkListRequest;
}

export namespace GetNetworkListRequest {
  export type AsObject = {
  }
}

export class GetNetworkListResponse extends jspb.Message {
  clearNetworksList(): void;
  getNetworksList(): Array<NetworkInfo>;
  setNetworksList(value: Array<NetworkInfo>): void;
  addNetworks(value?: NetworkInfo, index?: number): NetworkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkListResponse): GetNetworkListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkListResponse;
  static deserializeBinaryFromReader(message: GetNetworkListResponse, reader: jspb.BinaryReader): GetNetworkListResponse;
}

export namespace GetNetworkListResponse {
  export type AsObject = {
    networksList: Array<NetworkInfo.AsObject>,
  }
}

export class ProvisioningInfo extends jspb.Message {
  getFragmentId(): string;
  setFragmentId(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getManufacturer(): string;
  setManufacturer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvisioningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProvisioningInfo): ProvisioningInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProvisioningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvisioningInfo;
  static deserializeBinaryFromReader(message: ProvisioningInfo, reader: jspb.BinaryReader): ProvisioningInfo;
}

export namespace ProvisioningInfo {
  export type AsObject = {
    fragmentId: string,
    model: string,
    manufacturer: string,
  }
}

export class NetworkInfo extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getSsid(): string;
  setSsid(value: string): void;

  getSecurity(): string;
  setSecurity(value: string): void;

  getSignal(): number;
  setSignal(value: number): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  getLastError(): string;
  setLastError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfo;
  static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
  export type AsObject = {
    type: string,
    ssid: string,
    security: string,
    signal: number,
    connected: boolean,
    lastError: string,
  }
}

export class CloudConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getAppAddress(): string;
  setAppAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CloudConfig): CloudConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudConfig;
  static deserializeBinaryFromReader(message: CloudConfig, reader: jspb.BinaryReader): CloudConfig;
}

export namespace CloudConfig {
  export type AsObject = {
    id: string,
    secret: string,
    appAddress: string,
  }
}

