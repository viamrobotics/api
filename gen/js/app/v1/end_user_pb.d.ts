// package: viam.app.v1
// file: app/v1/end_user.proto

import * as jspb from "google-protobuf";

export class IsLegalAcceptedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsLegalAcceptedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsLegalAcceptedRequest): IsLegalAcceptedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsLegalAcceptedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsLegalAcceptedRequest;
  static deserializeBinaryFromReader(message: IsLegalAcceptedRequest, reader: jspb.BinaryReader): IsLegalAcceptedRequest;
}

export namespace IsLegalAcceptedRequest {
  export type AsObject = {
  }
}

export class IsLegalAcceptedResponse extends jspb.Message {
  getAcceptedLegal(): boolean;
  setAcceptedLegal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsLegalAcceptedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsLegalAcceptedResponse): IsLegalAcceptedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsLegalAcceptedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsLegalAcceptedResponse;
  static deserializeBinaryFromReader(message: IsLegalAcceptedResponse, reader: jspb.BinaryReader): IsLegalAcceptedResponse;
}

export namespace IsLegalAcceptedResponse {
  export type AsObject = {
    acceptedLegal: boolean,
  }
}

export class AcceptLegalRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLegalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLegalRequest): AcceptLegalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLegalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLegalRequest;
  static deserializeBinaryFromReader(message: AcceptLegalRequest, reader: jspb.BinaryReader): AcceptLegalRequest;
}

export namespace AcceptLegalRequest {
  export type AsObject = {
  }
}

export class AcceptLegalResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLegalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLegalResponse): AcceptLegalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLegalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLegalResponse;
  static deserializeBinaryFromReader(message: AcceptLegalResponse, reader: jspb.BinaryReader): AcceptLegalResponse;
}

export namespace AcceptLegalResponse {
  export type AsObject = {
  }
}

export class RegisterAuthApplicationRequest extends jspb.Message {
  getApplicationName(): string;
  setApplicationName(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  clearOriginUrisList(): void;
  getOriginUrisList(): Array<string>;
  setOriginUrisList(value: Array<string>): void;
  addOriginUris(value: string, index?: number): string;

  clearRedirectUrisList(): void;
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): void;
  addRedirectUris(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAuthApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAuthApplicationRequest): RegisterAuthApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAuthApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAuthApplicationRequest;
  static deserializeBinaryFromReader(message: RegisterAuthApplicationRequest, reader: jspb.BinaryReader): RegisterAuthApplicationRequest;
}

export namespace RegisterAuthApplicationRequest {
  export type AsObject = {
    applicationName: string,
    orgId: string,
    originUrisList: Array<string>,
    redirectUrisList: Array<string>,
  }
}

export class RegisterAuthApplicationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAuthApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAuthApplicationResponse): RegisterAuthApplicationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAuthApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAuthApplicationResponse;
  static deserializeBinaryFromReader(message: RegisterAuthApplicationResponse, reader: jspb.BinaryReader): RegisterAuthApplicationResponse;
}

export namespace RegisterAuthApplicationResponse {
  export type AsObject = {
  }
}

