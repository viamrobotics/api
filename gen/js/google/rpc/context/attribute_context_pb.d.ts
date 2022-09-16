// package: google.rpc.context
// file: google/rpc/context/attribute_context.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AttributeContext extends jspb.Message {
  hasOrigin(): boolean;
  clearOrigin(): void;
  getOrigin(): AttributeContext.Peer | undefined;
  setOrigin(value?: AttributeContext.Peer): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): AttributeContext.Peer | undefined;
  setSource(value?: AttributeContext.Peer): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): AttributeContext.Peer | undefined;
  setDestination(value?: AttributeContext.Peer): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): AttributeContext.Request | undefined;
  setRequest(value?: AttributeContext.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): AttributeContext.Response | undefined;
  setResponse(value?: AttributeContext.Response): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): AttributeContext.Resource | undefined;
  setResource(value?: AttributeContext.Resource): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): AttributeContext.Api | undefined;
  setApi(value?: AttributeContext.Api): void;

  clearExtensionsList(): void;
  getExtensionsList(): Array<google_protobuf_any_pb.Any>;
  setExtensionsList(value: Array<google_protobuf_any_pb.Any>): void;
  addExtensions(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeContext.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeContext): AttributeContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributeContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeContext;
  static deserializeBinaryFromReader(message: AttributeContext, reader: jspb.BinaryReader): AttributeContext;
}

export namespace AttributeContext {
  export type AsObject = {
    origin?: AttributeContext.Peer.AsObject,
    source?: AttributeContext.Peer.AsObject,
    destination?: AttributeContext.Peer.AsObject,
    request?: AttributeContext.Request.AsObject,
    response?: AttributeContext.Response.AsObject,
    resource?: AttributeContext.Resource.AsObject,
    api?: AttributeContext.Api.AsObject,
    extensionsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }

  export class Peer extends jspb.Message {
    getIp(): string;
    setIp(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getPrincipal(): string;
    setPrincipal(value: string): void;

    getRegionCode(): string;
    setRegionCode(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Peer.AsObject;
    static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Peer;
    static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
  }

  export namespace Peer {
    export type AsObject = {
      ip: string,
      port: number,
      labelsMap: Array<[string, string]>,
      principal: string,
      regionCode: string,
    }
  }

  export class Api extends jspb.Message {
    getService(): string;
    setService(value: string): void;

    getOperation(): string;
    setOperation(value: string): void;

    getProtocol(): string;
    setProtocol(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Api.AsObject;
    static toObject(includeInstance: boolean, msg: Api): Api.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Api;
    static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
  }

  export namespace Api {
    export type AsObject = {
      service: string,
      operation: string,
      protocol: string,
      version: string,
    }
  }

  export class Auth extends jspb.Message {
    getPrincipal(): string;
    setPrincipal(value: string): void;

    clearAudiencesList(): void;
    getAudiencesList(): Array<string>;
    setAudiencesList(value: Array<string>): void;
    addAudiences(value: string, index?: number): string;

    getPresenter(): string;
    setPresenter(value: string): void;

    hasClaims(): boolean;
    clearClaims(): void;
    getClaims(): google_protobuf_struct_pb.Struct | undefined;
    setClaims(value?: google_protobuf_struct_pb.Struct): void;

    clearAccessLevelsList(): void;
    getAccessLevelsList(): Array<string>;
    setAccessLevelsList(value: Array<string>): void;
    addAccessLevels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Auth.AsObject;
    static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Auth;
    static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
  }

  export namespace Auth {
    export type AsObject = {
      principal: string,
      audiencesList: Array<string>,
      presenter: string,
      claims?: google_protobuf_struct_pb.Struct.AsObject,
      accessLevelsList: Array<string>,
    }
  }

  export class Request extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getMethod(): string;
    setMethod(value: string): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getPath(): string;
    setPath(value: string): void;

    getHost(): string;
    setHost(value: string): void;

    getScheme(): string;
    setScheme(value: string): void;

    getQuery(): string;
    setQuery(value: string): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getSize(): number;
    setSize(value: number): void;

    getProtocol(): string;
    setProtocol(value: string): void;

    getReason(): string;
    setReason(value: string): void;

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): AttributeContext.Auth | undefined;
    setAuth(value?: AttributeContext.Auth): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      id: string,
      method: string,
      headersMap: Array<[string, string]>,
      path: string,
      host: string,
      scheme: string,
      query: string,
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      size: number,
      protocol: string,
      reason: string,
      auth?: AttributeContext.Auth.AsObject,
    }
  }

  export class Response extends jspb.Message {
    getCode(): number;
    setCode(value: number): void;

    getSize(): number;
    setSize(value: number): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasBackendLatency(): boolean;
    clearBackendLatency(): void;
    getBackendLatency(): google_protobuf_duration_pb.Duration | undefined;
    setBackendLatency(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      code: number,
      size: number,
      headersMap: Array<[string, string]>,
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      backendLatency?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export class Resource extends jspb.Message {
    getService(): string;
    setService(value: string): void;

    getName(): string;
    setName(value: string): void;

    getType(): string;
    setType(value: string): void;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getUid(): string;
    setUid(value: string): void;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getDisplayName(): string;
    setDisplayName(value: string): void;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasDeleteTime(): boolean;
    clearDeleteTime(): void;
    getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getEtag(): string;
    setEtag(value: string): void;

    getLocation(): string;
    setLocation(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
  }

  export namespace Resource {
    export type AsObject = {
      service: string,
      name: string,
      type: string,
      labelsMap: Array<[string, string]>,
      uid: string,
      annotationsMap: Array<[string, string]>,
      displayName: string,
      createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      etag: string,
      location: string,
    }
  }
}

