// package: viam.app.mlinference.v1
// file: app/mlinference/v1/ml_inference.proto

import * as jspb from "google-protobuf";

export class GetInferenceRequest extends jspb.Message {
  getRegistryItemId(): string;
  setRegistryItemId(value: string): void;

  getRegistryItemVersion(): string;
  setRegistryItemVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInferenceRequest): GetInferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInferenceRequest;
  static deserializeBinaryFromReader(message: GetInferenceRequest, reader: jspb.BinaryReader): GetInferenceRequest;
}

export namespace GetInferenceRequest {
  export type AsObject = {
    registryItemId: string,
    registryItemVersion: string,
  }
}

export class GetInferenceResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInferenceResponse): GetInferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInferenceResponse;
  static deserializeBinaryFromReader(message: GetInferenceResponse, reader: jspb.BinaryReader): GetInferenceResponse;
}

export namespace GetInferenceResponse {
  export type AsObject = {
    response: string,
  }
}

