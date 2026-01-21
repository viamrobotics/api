// package: google.iam.v1
// file: google/iam/v1/options.proto

import * as jspb from "google-protobuf";

export class GetPolicyOptions extends jspb.Message {
  getRequestedPolicyVersion(): number;
  setRequestedPolicyVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyOptions): GetPolicyOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyOptions;
  static deserializeBinaryFromReader(message: GetPolicyOptions, reader: jspb.BinaryReader): GetPolicyOptions;
}

export namespace GetPolicyOptions {
  export type AsObject = {
    requestedPolicyVersion: number,
  }
}

