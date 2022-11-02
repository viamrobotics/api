// package: viam.module.v1
// file: module/v1/module.proto

import * as jspb from "google-protobuf";
import * as app_v1_robot_pb from "../../app/v1/robot_pb";
import * as robot_v1_robot_pb from "../../robot/v1/robot_pb";

export class AddComponentRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ComponentConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ComponentConfig): void;

  clearDependenciesList(): void;
  getDependenciesList(): Array<string>;
  setDependenciesList(value: Array<string>): void;
  addDependencies(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddComponentRequest): AddComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddComponentRequest;
  static deserializeBinaryFromReader(message: AddComponentRequest, reader: jspb.BinaryReader): AddComponentRequest;
}

export namespace AddComponentRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ComponentConfig.AsObject,
    dependenciesList: Array<string>,
  }
}

export class AddComponentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddComponentResponse): AddComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddComponentResponse;
  static deserializeBinaryFromReader(message: AddComponentResponse, reader: jspb.BinaryReader): AddComponentResponse;
}

export namespace AddComponentResponse {
  export type AsObject = {
  }
}

export class ReconfigureComponentRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ComponentConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ComponentConfig): void;

  clearDependenciesList(): void;
  getDependenciesList(): Array<string>;
  setDependenciesList(value: Array<string>): void;
  addDependencies(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureComponentRequest): ReconfigureComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureComponentRequest;
  static deserializeBinaryFromReader(message: ReconfigureComponentRequest, reader: jspb.BinaryReader): ReconfigureComponentRequest;
}

export namespace ReconfigureComponentRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ComponentConfig.AsObject,
    dependenciesList: Array<string>,
  }
}

export class ReconfigureComponentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureComponentResponse): ReconfigureComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureComponentResponse;
  static deserializeBinaryFromReader(message: ReconfigureComponentResponse, reader: jspb.BinaryReader): ReconfigureComponentResponse;
}

export namespace ReconfigureComponentResponse {
  export type AsObject = {
  }
}

export class AddServiceRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ServiceConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ServiceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddServiceRequest): AddServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddServiceRequest;
  static deserializeBinaryFromReader(message: AddServiceRequest, reader: jspb.BinaryReader): AddServiceRequest;
}

export namespace AddServiceRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ServiceConfig.AsObject,
  }
}

export class AddServiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddServiceResponse): AddServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddServiceResponse;
  static deserializeBinaryFromReader(message: AddServiceResponse, reader: jspb.BinaryReader): AddServiceResponse;
}

export namespace AddServiceResponse {
  export type AsObject = {
  }
}

export class ReconfigureServiceRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): app_v1_robot_pb.ServiceConfig | undefined;
  setConfig(value?: app_v1_robot_pb.ServiceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureServiceRequest): ReconfigureServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureServiceRequest;
  static deserializeBinaryFromReader(message: ReconfigureServiceRequest, reader: jspb.BinaryReader): ReconfigureServiceRequest;
}

export namespace ReconfigureServiceRequest {
  export type AsObject = {
    config?: app_v1_robot_pb.ServiceConfig.AsObject,
  }
}

export class ReconfigureServiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconfigureServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReconfigureServiceResponse): ReconfigureServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconfigureServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconfigureServiceResponse;
  static deserializeBinaryFromReader(message: ReconfigureServiceResponse, reader: jspb.BinaryReader): ReconfigureServiceResponse;
}

export namespace ReconfigureServiceResponse {
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
  }
}

export class ReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): void;

  hasHandlermap(): boolean;
  clearHandlermap(): void;
  getHandlermap(): HandlerMap | undefined;
  setHandlermap(value?: HandlerMap): void;

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
  }
}

