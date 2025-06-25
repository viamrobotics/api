// package: viam.app.mlinference.v1
// file: app/mlinference/v1/ml_inference.proto

import * as jspb from "google-protobuf";
import * as app_data_v1_data_pb from "../../../app/data/v1/data_pb";
import * as service_mlmodel_v1_mlmodel_pb from "../../../service/mlmodel/v1/mlmodel_pb";

export class GetInferenceRequest extends jspb.Message {
  getRegistryItemId(): string;
  setRegistryItemId(value: string): void;

  getRegistryItemVersion(): string;
  setRegistryItemVersion(value: string): void;

  hasBinaryId(): boolean;
  clearBinaryId(): void;
  getBinaryId(): app_data_v1_data_pb.BinaryID | undefined;
  setBinaryId(value?: app_data_v1_data_pb.BinaryID): void;

  getBinaryDataId(): string;
  setBinaryDataId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

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
    binaryId?: app_data_v1_data_pb.BinaryID.AsObject,
    binaryDataId: string,
    organizationId: string,
  }
}

export class GetInferenceResponse extends jspb.Message {
  hasOutputTensors(): boolean;
  clearOutputTensors(): void;
  getOutputTensors(): service_mlmodel_v1_mlmodel_pb.FlatTensors | undefined;
  setOutputTensors(value?: service_mlmodel_v1_mlmodel_pb.FlatTensors): void;

  hasAnnotations(): boolean;
  clearAnnotations(): void;
  getAnnotations(): app_data_v1_data_pb.Annotations | undefined;
  setAnnotations(value?: app_data_v1_data_pb.Annotations): void;

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
    outputTensors?: service_mlmodel_v1_mlmodel_pb.FlatTensors.AsObject,
    annotations?: app_data_v1_data_pb.Annotations.AsObject,
  }
}

