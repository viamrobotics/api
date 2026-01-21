// package: opentelemetry.proto.common.v1
// file: opentelemetry/proto/common/v1/common.proto

import * as jspb from "google-protobuf";

export class AnyValue extends jspb.Message {
  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasIntValue(): boolean;
  clearIntValue(): void;
  getIntValue(): number;
  setIntValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasArrayValue(): boolean;
  clearArrayValue(): void;
  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): void;

  hasKvlistValue(): boolean;
  clearKvlistValue(): void;
  getKvlistValue(): KeyValueList | undefined;
  setKvlistValue(value?: KeyValueList): void;

  hasBytesValue(): boolean;
  clearBytesValue(): void;
  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): void;

  getValueCase(): AnyValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyValue.AsObject;
  static toObject(includeInstance: boolean, msg: AnyValue): AnyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyValue;
  static deserializeBinaryFromReader(message: AnyValue, reader: jspb.BinaryReader): AnyValue;
}

export namespace AnyValue {
  export type AsObject = {
    stringValue: string,
    boolValue: boolean,
    intValue: number,
    doubleValue: number,
    arrayValue?: ArrayValue.AsObject,
    kvlistValue?: KeyValueList.AsObject,
    bytesValue: Uint8Array | string,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    BOOL_VALUE = 2,
    INT_VALUE = 3,
    DOUBLE_VALUE = 4,
    ARRAY_VALUE = 5,
    KVLIST_VALUE = 6,
    BYTES_VALUE = 7,
  }
}

export class ArrayValue extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<AnyValue>;
  setValuesList(value: Array<AnyValue>): void;
  addValues(value?: AnyValue, index?: number): AnyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<AnyValue.AsObject>,
  }
}

export class KeyValueList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<KeyValue>;
  setValuesList(value: Array<KeyValue>): void;
  addValues(value?: KeyValue, index?: number): KeyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueList.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueList): KeyValueList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueList;
  static deserializeBinaryFromReader(message: KeyValueList, reader: jspb.BinaryReader): KeyValueList;
}

export namespace KeyValueList {
  export type AsObject = {
    valuesList: Array<KeyValue.AsObject>,
  }
}

export class KeyValue extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): AnyValue | undefined;
  setValue(value?: AnyValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValue.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValue): KeyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValue;
  static deserializeBinaryFromReader(message: KeyValue, reader: jspb.BinaryReader): KeyValue;
}

export namespace KeyValue {
  export type AsObject = {
    key: string,
    value?: AnyValue.AsObject,
  }
}

export class InstrumentationScope extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<KeyValue>;
  setAttributesList(value: Array<KeyValue>): void;
  addAttributes(value?: KeyValue, index?: number): KeyValue;

  getDroppedAttributesCount(): number;
  setDroppedAttributesCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentationScope.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentationScope): InstrumentationScope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentationScope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentationScope;
  static deserializeBinaryFromReader(message: InstrumentationScope, reader: jspb.BinaryReader): InstrumentationScope;
}

export namespace InstrumentationScope {
  export type AsObject = {
    name: string,
    version: string,
    attributesList: Array<KeyValue.AsObject>,
    droppedAttributesCount: number,
  }
}

export class EntityRef extends jspb.Message {
  getSchemaUrl(): string;
  setSchemaUrl(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearIdKeysList(): void;
  getIdKeysList(): Array<string>;
  setIdKeysList(value: Array<string>): void;
  addIdKeys(value: string, index?: number): string;

  clearDescriptionKeysList(): void;
  getDescriptionKeysList(): Array<string>;
  setDescriptionKeysList(value: Array<string>): void;
  addDescriptionKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRef.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRef): EntityRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRef;
  static deserializeBinaryFromReader(message: EntityRef, reader: jspb.BinaryReader): EntityRef;
}

export namespace EntityRef {
  export type AsObject = {
    schemaUrl: string,
    type: string,
    idKeysList: Array<string>,
    descriptionKeysList: Array<string>,
  }
}

