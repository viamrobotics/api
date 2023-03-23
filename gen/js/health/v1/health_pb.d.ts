// package: viam.health.v1
// file: health/v1/health.proto

import * as jspb from "google-protobuf";

export class HealthServiceCheckRequest extends jspb.Message {
  getService(): ServiceMap[keyof ServiceMap];
  setService(value: ServiceMap[keyof ServiceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthServiceCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthServiceCheckRequest): HealthServiceCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthServiceCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthServiceCheckRequest;
  static deserializeBinaryFromReader(message: HealthServiceCheckRequest, reader: jspb.BinaryReader): HealthServiceCheckRequest;
}

export namespace HealthServiceCheckRequest {
  export type AsObject = {
    service: ServiceMap[keyof ServiceMap],
  }
}

export class HealthServiceCheckResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthServiceCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthServiceCheckResponse): HealthServiceCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthServiceCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthServiceCheckResponse;
  static deserializeBinaryFromReader(message: HealthServiceCheckResponse, reader: jspb.BinaryReader): HealthServiceCheckResponse;
}

export namespace HealthServiceCheckResponse {
  export type AsObject = {
    status: string,
  }
}

export interface ServiceMap {
  SERVICE_ALL_UNSPECIFIED: 0;
  SERVICE_APP: 1;
  SERVICE_DATASYNC: 2;
  SERVICE_PACKAGESERVER: 3;
  SERVICE_ROBOTSERVICE: 4;
  SERVICE_DATAMANAGEMENT: 5;
  SERVICE_DNS: 6;
}

export const Service: ServiceMap;

