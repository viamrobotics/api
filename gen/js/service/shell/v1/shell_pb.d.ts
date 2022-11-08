// package: viam.service.shell.v1
// file: service/shell/v1/shell.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ShellRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDataIn(): string;
  setDataIn(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShellRequest): ShellRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellRequest;
  static deserializeBinaryFromReader(message: ShellRequest, reader: jspb.BinaryReader): ShellRequest;
}

export namespace ShellRequest {
  export type AsObject = {
    name: string,
    dataIn: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ShellResponse extends jspb.Message {
  getDataOut(): string;
  setDataOut(value: string): void;

  getDataErr(): string;
  setDataErr(value: string): void;

  getEof(): boolean;
  setEof(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShellResponse): ShellResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellResponse;
  static deserializeBinaryFromReader(message: ShellResponse, reader: jspb.BinaryReader): ShellResponse;
}

export namespace ShellResponse {
  export type AsObject = {
    dataOut: string,
    dataErr: string,
    eof: boolean,
  }
}

