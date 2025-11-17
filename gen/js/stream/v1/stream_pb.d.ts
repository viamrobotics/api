// package: proto.stream.v1
// file: stream/v1/stream.proto

import * as jspb from "google-protobuf";

export class ListStreamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStreamsRequest): ListStreamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStreamsRequest;
  static deserializeBinaryFromReader(message: ListStreamsRequest, reader: jspb.BinaryReader): ListStreamsRequest;
}

export namespace ListStreamsRequest {
  export type AsObject = {
  }
}

export class ListStreamsResponse extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStreamsResponse): ListStreamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStreamsResponse;
  static deserializeBinaryFromReader(message: ListStreamsResponse, reader: jspb.BinaryReader): ListStreamsResponse;
}

export namespace ListStreamsResponse {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class AddStreamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddStreamRequest): AddStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddStreamRequest;
  static deserializeBinaryFromReader(message: AddStreamRequest, reader: jspb.BinaryReader): AddStreamRequest;
}

export namespace AddStreamRequest {
  export type AsObject = {
    name: string,
  }
}

export class AddStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddStreamResponse): AddStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddStreamResponse;
  static deserializeBinaryFromReader(message: AddStreamResponse, reader: jspb.BinaryReader): AddStreamResponse;
}

export namespace AddStreamResponse {
  export type AsObject = {
  }
}

export class RemoveStreamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveStreamRequest): RemoveStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveStreamRequest;
  static deserializeBinaryFromReader(message: RemoveStreamRequest, reader: jspb.BinaryReader): RemoveStreamRequest;
}

export namespace RemoveStreamRequest {
  export type AsObject = {
    name: string,
  }
}

export class RemoveStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveStreamResponse): RemoveStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveStreamResponse;
  static deserializeBinaryFromReader(message: RemoveStreamResponse, reader: jspb.BinaryReader): RemoveStreamResponse;
}

export namespace RemoveStreamResponse {
  export type AsObject = {
  }
}

export class Resolution extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resolution.AsObject;
  static toObject(includeInstance: boolean, msg: Resolution): Resolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resolution;
  static deserializeBinaryFromReader(message: Resolution, reader: jspb.BinaryReader): Resolution;
}

export namespace Resolution {
  export type AsObject = {
    width: number,
    height: number,
  }
}

export class GetStreamOptionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamOptionsRequest): GetStreamOptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStreamOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamOptionsRequest;
  static deserializeBinaryFromReader(message: GetStreamOptionsRequest, reader: jspb.BinaryReader): GetStreamOptionsRequest;
}

export namespace GetStreamOptionsRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetStreamOptionsResponse extends jspb.Message {
  clearResolutionsList(): void;
  getResolutionsList(): Array<Resolution>;
  setResolutionsList(value: Array<Resolution>): void;
  addResolutions(value?: Resolution, index?: number): Resolution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamOptionsResponse): GetStreamOptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStreamOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamOptionsResponse;
  static deserializeBinaryFromReader(message: GetStreamOptionsResponse, reader: jspb.BinaryReader): GetStreamOptionsResponse;
}

export namespace GetStreamOptionsResponse {
  export type AsObject = {
    resolutionsList: Array<Resolution.AsObject>,
  }
}

export class SetStreamOptionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasResolution(): boolean;
  clearResolution(): void;
  getResolution(): Resolution | undefined;
  setResolution(value?: Resolution): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamOptionsRequest): SetStreamOptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStreamOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamOptionsRequest;
  static deserializeBinaryFromReader(message: SetStreamOptionsRequest, reader: jspb.BinaryReader): SetStreamOptionsRequest;
}

export namespace SetStreamOptionsRequest {
  export type AsObject = {
    name: string,
    resolution?: Resolution.AsObject,
  }
}

export class SetStreamOptionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamOptionsResponse): SetStreamOptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStreamOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamOptionsResponse;
  static deserializeBinaryFromReader(message: SetStreamOptionsResponse, reader: jspb.BinaryReader): SetStreamOptionsResponse;
}

export namespace SetStreamOptionsResponse {
  export type AsObject = {
  }
}

