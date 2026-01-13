// package: viam.provisioning.v1
// file: provisioning/v1/provisioning.proto

import * as jspb from "google-protobuf";

export class ExitProvisioningRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitProvisioningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExitProvisioningRequest): ExitProvisioningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExitProvisioningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitProvisioningRequest;
  static deserializeBinaryFromReader(message: ExitProvisioningRequest, reader: jspb.BinaryReader): ExitProvisioningRequest;
}

export namespace ExitProvisioningRequest {
  export type AsObject = {
  }
}

export class ExitProvisioningResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitProvisioningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExitProvisioningResponse): ExitProvisioningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExitProvisioningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitProvisioningResponse;
  static deserializeBinaryFromReader(message: ExitProvisioningResponse, reader: jspb.BinaryReader): ExitProvisioningResponse;
}

export namespace ExitProvisioningResponse {
  export type AsObject = {
  }
}

export class GetSmartMachineStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartMachineStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartMachineStatusRequest): GetSmartMachineStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartMachineStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartMachineStatusRequest;
  static deserializeBinaryFromReader(message: GetSmartMachineStatusRequest, reader: jspb.BinaryReader): GetSmartMachineStatusRequest;
}

export namespace GetSmartMachineStatusRequest {
  export type AsObject = {
  }
}

export class GetSmartMachineStatusResponse extends jspb.Message {
  hasProvisioningInfo(): boolean;
  clearProvisioningInfo(): void;
  getProvisioningInfo(): ProvisioningInfo | undefined;
  setProvisioningInfo(value?: ProvisioningInfo): void;

  getHasSmartMachineCredentials(): boolean;
  setHasSmartMachineCredentials(value: boolean): void;

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

  getAgentVersion(): string;
  setAgentVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartMachineStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartMachineStatusResponse): GetSmartMachineStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartMachineStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartMachineStatusResponse;
  static deserializeBinaryFromReader(message: GetSmartMachineStatusResponse, reader: jspb.BinaryReader): GetSmartMachineStatusResponse;
}

export namespace GetSmartMachineStatusResponse {
  export type AsObject = {
    provisioningInfo?: ProvisioningInfo.AsObject,
    hasSmartMachineCredentials: boolean,
    isOnline: boolean,
    latestConnectionAttempt?: NetworkInfo.AsObject,
    errorsList: Array<string>,
    agentVersion: string,
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

export class SetSmartMachineCredentialsRequest extends jspb.Message {
  hasCloud(): boolean;
  clearCloud(): void;
  getCloud(): CloudConfig | undefined;
  setCloud(value?: CloudConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSmartMachineCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSmartMachineCredentialsRequest): SetSmartMachineCredentialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSmartMachineCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSmartMachineCredentialsRequest;
  static deserializeBinaryFromReader(message: SetSmartMachineCredentialsRequest, reader: jspb.BinaryReader): SetSmartMachineCredentialsRequest;
}

export namespace SetSmartMachineCredentialsRequest {
  export type AsObject = {
    cloud?: CloudConfig.AsObject,
  }
}

export class SetSmartMachineCredentialsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSmartMachineCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSmartMachineCredentialsResponse): SetSmartMachineCredentialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSmartMachineCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSmartMachineCredentialsResponse;
  static deserializeBinaryFromReader(message: SetSmartMachineCredentialsResponse, reader: jspb.BinaryReader): SetSmartMachineCredentialsResponse;
}

export namespace SetSmartMachineCredentialsResponse {
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

  hasApiKey(): boolean;
  clearApiKey(): void;
  getApiKey(): APIKey | undefined;
  setApiKey(value?: APIKey): void;

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
    apiKey?: APIKey.AsObject,
  }
}

export class APIKey extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKey.AsObject;
  static toObject(includeInstance: boolean, msg: APIKey): APIKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: APIKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKey;
  static deserializeBinaryFromReader(message: APIKey, reader: jspb.BinaryReader): APIKey;
}

export namespace APIKey {
  export type AsObject = {
    id: string,
    key: string,
  }
}

