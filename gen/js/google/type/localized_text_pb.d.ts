// package: google.type
// file: google/type/localized_text.proto

import * as jspb from "google-protobuf";

export class LocalizedText extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedText.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedText): LocalizedText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalizedText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedText;
  static deserializeBinaryFromReader(message: LocalizedText, reader: jspb.BinaryReader): LocalizedText;
}

export namespace LocalizedText {
  export type AsObject = {
    text: string,
    languageCode: string,
  }
}

