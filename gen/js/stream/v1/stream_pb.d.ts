// package: proto.stream.v1
// file: proto/stream/v1/stream.proto

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

