// package: viam.component.generic.v1
// file: component/generic/v1/generic.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DoCommandRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): google_protobuf_struct_pb.Struct | undefined;
  setCommand(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DoCommandRequest): DoCommandRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoCommandRequest;
  static deserializeBinaryFromReader(message: DoCommandRequest, reader: jspb.BinaryReader): DoCommandRequest;
}

export namespace DoCommandRequest {
  export type AsObject = {
    name: string,
    command?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DoCommandResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoCommandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DoCommandResponse): DoCommandResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoCommandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoCommandResponse;
  static deserializeBinaryFromReader(message: DoCommandResponse, reader: jspb.BinaryReader): DoCommandResponse;
}

export namespace DoCommandResponse {
  export type AsObject = {
    result?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

