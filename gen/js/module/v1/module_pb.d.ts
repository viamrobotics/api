// package: viam.module.v1
// file: module/v1/module.proto

import * as jspb from "google-protobuf";
import * as app_v1_robot_pb from "../../app/v1/robot_pb";
import * as robot_v1_robot_pb from "../../robot/v1/robot_pb";

export class AddResourceRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ComponentConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ComponentConfig): void;

  clearDependenciesList(): void;
  getDependenciesList(): Array<string>;
  setDependenciesList(value: Array<string>): void;
  addDependencies(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddResourceRequest): AddResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResourceRequest;
  static deserializeBinaryFromReader(message: AddResourceRequest, reader: jspb.BinaryReader): AddResourceRequest;
}

export namespace AddResourceRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ComponentConfig.AsObject,
    dependenciesList: Array<string>,
  }
}

export class AddResourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddResourceResponse): AddResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResourceResponse;
  static deserializeBinaryFromReader(message: AddResourceResponse, reader: jspb.BinaryReader): AddResourceResponse;
}

export namespace AddResourceResponse {
  export type AsObject = {
  }
}

export class ReconfigureResourceRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ComponentConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ComponentConfig): void;

  clearDependenciesList(): void;
  getDependenciesList(): Array<string>;
  setDependenciesList(value: Array<string>): void;
  addDependencies(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureResourceRequest): ReconfigureResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureResourceRequest;
  static deserializeBinaryFromReader(message: ReconfigureResourceRequest, reader: jspb.BinaryReader): ReconfigureResourceRequest;
}

export namespace ReconfigureResourceRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ComponentConfig.AsObject,
    dependenciesList: Array<string>,
  }
}

export class ReconfigureResourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureResourceResponse): ReconfigureResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureResourceResponse;
  static deserializeBinaryFromReader(message: ReconfigureResourceResponse, reader: jspb.BinaryReader): ReconfigureResourceResponse;
}

export namespace ReconfigureResourceResponse {
  export type AsObject = {
  }
}

export class RemoveResourceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResourceRequest): RemoveResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResourceRequest;
  static deserializeBinaryFromReader(message: RemoveResourceRequest, reader: jspb.BinaryReader): RemoveResourceRequest;
}

export namespace RemoveResourceRequest {
  export type AsObject = {
    name: string,
  }
}

export class RemoveResourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResourceResponse): RemoveResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResourceResponse;
  static deserializeBinaryFromReader(message: RemoveResourceResponse, reader: jspb.BinaryReader): RemoveResourceResponse;
}

export namespace RemoveResourceResponse {
  export type AsObject = {
  }
}

export class HandlerDefinition extends jspb.Message {
  hasSubtype(): boolean;
  clearSubtype(): void;
  getSubtype(): robot_v1_robot_pb.ResourceRPCSubtype | undefined;
  setSubtype(value?: robot_v1_robot_pb.ResourceRPCSubtype): void;

  clearModelsList(): void;
  getModelsList(): Array<string>;
  setModelsList(value: Array<string>): void;
  addModels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerDefinition): HandlerDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerDefinition;
  static deserializeBinaryFromReader(message: HandlerDefinition, reader: jspb.BinaryReader): HandlerDefinition;
}

export namespace HandlerDefinition {
  export type AsObject = {
    subtype?: robot_v1_robot_pb.ResourceRPCSubtype.AsObject,
    modelsList: Array<string>,
  }
}

export class HandlerMap extends jspb.Message {
  clearHandlersList(): void;
  getHandlersList(): Array<HandlerDefinition>;
  setHandlersList(value: Array<HandlerDefinition>): void;
  addHandlers(value?: HandlerDefinition, index?: number): HandlerDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerMap.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerMap): HandlerMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerMap;
  static deserializeBinaryFromReader(message: HandlerMap, reader: jspb.BinaryReader): HandlerMap;
}

export namespace HandlerMap {
  export type AsObject = {
    handlersList: Array<HandlerDefinition.AsObject>,
  }
}

export class ReadyRequest extends jspb.Message {
  getParentAddress(): string;
  setParentAddress(value: string): void;

  getWebrtcOffer(): string;
  setWebrtcOffer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadyRequest): ReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadyRequest;
  static deserializeBinaryFromReader(message: ReadyRequest, reader: jspb.BinaryReader): ReadyRequest;
}

export namespace ReadyRequest {
  export type AsObject = {
    parentAddress: string,
    webrtcOffer: string,
  }
}

export class ReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): void;

  hasHandlermap(): boolean;
  clearHandlermap(): void;
  getHandlermap(): HandlerMap | undefined;
  setHandlermap(value?: HandlerMap): void;

  getWebrtcAnswer(): string;
  setWebrtcAnswer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadyResponse): ReadyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadyResponse;
  static deserializeBinaryFromReader(message: ReadyResponse, reader: jspb.BinaryReader): ReadyResponse;
}

export namespace ReadyResponse {
  export type AsObject = {
    ready: boolean,
    handlermap?: HandlerMap.AsObject,
    webrtcAnswer: string,
  }
}

export class ValidateConfigRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ComponentConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ComponentConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateConfigRequest): ValidateConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateConfigRequest;
  static deserializeBinaryFromReader(message: ValidateConfigRequest, reader: jspb.BinaryReader): ValidateConfigRequest;
}

export namespace ValidateConfigRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ComponentConfig.AsObject,
  }
}

export class ValidateConfigResponse extends jspb.Message {
  clearDependenciesList(): void;
  getDependenciesList(): Array<string>;
  setDependenciesList(value: Array<string>): void;
  addDependencies(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateConfigResponse): ValidateConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateConfigResponse;
  static deserializeBinaryFromReader(message: ValidateConfigResponse, reader: jspb.BinaryReader): ValidateConfigResponse;
}

export namespace ValidateConfigResponse {
  export type AsObject = {
    dependenciesList: Array<string>,
  }
}

