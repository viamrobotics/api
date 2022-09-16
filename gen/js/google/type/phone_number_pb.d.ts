// package: google.type
// file: google/type/phone_number.proto

import * as jspb from "google-protobuf";

export class PhoneNumber extends jspb.Message {
  hasE164Number(): boolean;
  clearE164Number(): void;
  getE164Number(): string;
  setE164Number(value: string): void;

  hasShortCode(): boolean;
  clearShortCode(): void;
  getShortCode(): PhoneNumber.ShortCode | undefined;
  setShortCode(value?: PhoneNumber.ShortCode): void;

  getExtension$(): string;
  setExtension$(value: string): void;

  getKindCase(): PhoneNumber.KindCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneNumber.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneNumber;
  static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
}

export namespace PhoneNumber {
  export type AsObject = {
    e164Number: string,
    shortCode?: PhoneNumber.ShortCode.AsObject,
    extension: string,
  }

  export class ShortCode extends jspb.Message {
    getRegionCode(): string;
    setRegionCode(value: string): void;

    getNumber(): string;
    setNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShortCode.AsObject;
    static toObject(includeInstance: boolean, msg: ShortCode): ShortCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShortCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShortCode;
    static deserializeBinaryFromReader(message: ShortCode, reader: jspb.BinaryReader): ShortCode;
  }

  export namespace ShortCode {
    export type AsObject = {
      regionCode: string,
      number: string,
    }
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    E164_NUMBER = 1,
    SHORT_CODE = 2,
  }
}

