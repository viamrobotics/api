// package: viam.component.board.v1
// file: component/board/v1/board.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class StatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRequest;
  static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): common_v1_common_pb.BoardStatus | undefined;
  setStatus(value?: common_v1_common_pb.BoardStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    status?: common_v1_common_pb.BoardStatus.AsObject,
  }
}

export class SetGPIORequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  getHigh(): boolean;
  setHigh(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGPIORequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetGPIORequest): SetGPIORequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGPIORequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGPIORequest;
  static deserializeBinaryFromReader(message: SetGPIORequest, reader: jspb.BinaryReader): SetGPIORequest;
}

export namespace SetGPIORequest {
  export type AsObject = {
    name: string,
    pin: string,
    high: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetGPIOResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGPIOResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetGPIOResponse): SetGPIOResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGPIOResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGPIOResponse;
  static deserializeBinaryFromReader(message: SetGPIOResponse, reader: jspb.BinaryReader): SetGPIOResponse;
}

export namespace SetGPIOResponse {
  export type AsObject = {
  }
}

export class GetGPIORequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGPIORequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGPIORequest): GetGPIORequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGPIORequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGPIORequest;
  static deserializeBinaryFromReader(message: GetGPIORequest, reader: jspb.BinaryReader): GetGPIORequest;
}

export namespace GetGPIORequest {
  export type AsObject = {
    name: string,
    pin: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetGPIOResponse extends jspb.Message {
  getHigh(): boolean;
  setHigh(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGPIOResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGPIOResponse): GetGPIOResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGPIOResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGPIOResponse;
  static deserializeBinaryFromReader(message: GetGPIOResponse, reader: jspb.BinaryReader): GetGPIOResponse;
}

export namespace GetGPIOResponse {
  export type AsObject = {
    high: boolean,
  }
}

export class PWMRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PWMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PWMRequest): PWMRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PWMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PWMRequest;
  static deserializeBinaryFromReader(message: PWMRequest, reader: jspb.BinaryReader): PWMRequest;
}

export namespace PWMRequest {
  export type AsObject = {
    name: string,
    pin: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PWMResponse extends jspb.Message {
  getDutyCyclePct(): number;
  setDutyCyclePct(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PWMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PWMResponse): PWMResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PWMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PWMResponse;
  static deserializeBinaryFromReader(message: PWMResponse, reader: jspb.BinaryReader): PWMResponse;
}

export namespace PWMResponse {
  export type AsObject = {
    dutyCyclePct: number,
  }
}

export class SetPWMRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  getDutyCyclePct(): number;
  setDutyCyclePct(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPWMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPWMRequest): SetPWMRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPWMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPWMRequest;
  static deserializeBinaryFromReader(message: SetPWMRequest, reader: jspb.BinaryReader): SetPWMRequest;
}

export namespace SetPWMRequest {
  export type AsObject = {
    name: string,
    pin: string,
    dutyCyclePct: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetPWMResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPWMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPWMResponse): SetPWMResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPWMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPWMResponse;
  static deserializeBinaryFromReader(message: SetPWMResponse, reader: jspb.BinaryReader): SetPWMResponse;
}

export namespace SetPWMResponse {
  export type AsObject = {
  }
}

export class PWMFrequencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PWMFrequencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PWMFrequencyRequest): PWMFrequencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PWMFrequencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PWMFrequencyRequest;
  static deserializeBinaryFromReader(message: PWMFrequencyRequest, reader: jspb.BinaryReader): PWMFrequencyRequest;
}

export namespace PWMFrequencyRequest {
  export type AsObject = {
    name: string,
    pin: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PWMFrequencyResponse extends jspb.Message {
  getFrequencyHz(): number;
  setFrequencyHz(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PWMFrequencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PWMFrequencyResponse): PWMFrequencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PWMFrequencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PWMFrequencyResponse;
  static deserializeBinaryFromReader(message: PWMFrequencyResponse, reader: jspb.BinaryReader): PWMFrequencyResponse;
}

export namespace PWMFrequencyResponse {
  export type AsObject = {
    frequencyHz: number,
  }
}

export class SetPWMFrequencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPin(): string;
  setPin(value: string): void;

  getFrequencyHz(): number;
  setFrequencyHz(value: number): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPWMFrequencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPWMFrequencyRequest): SetPWMFrequencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPWMFrequencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPWMFrequencyRequest;
  static deserializeBinaryFromReader(message: SetPWMFrequencyRequest, reader: jspb.BinaryReader): SetPWMFrequencyRequest;
}

export namespace SetPWMFrequencyRequest {
  export type AsObject = {
    name: string,
    pin: string,
    frequencyHz: number,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetPWMFrequencyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPWMFrequencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPWMFrequencyResponse): SetPWMFrequencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPWMFrequencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPWMFrequencyResponse;
  static deserializeBinaryFromReader(message: SetPWMFrequencyResponse, reader: jspb.BinaryReader): SetPWMFrequencyResponse;
}

export namespace SetPWMFrequencyResponse {
  export type AsObject = {
  }
}

export class ReadAnalogReaderRequest extends jspb.Message {
  getBoardName(): string;
  setBoardName(value: string): void;

  getAnalogReaderName(): string;
  setAnalogReaderName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAnalogReaderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAnalogReaderRequest): ReadAnalogReaderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAnalogReaderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAnalogReaderRequest;
  static deserializeBinaryFromReader(message: ReadAnalogReaderRequest, reader: jspb.BinaryReader): ReadAnalogReaderRequest;
}

export namespace ReadAnalogReaderRequest {
  export type AsObject = {
    boardName: string,
    analogReaderName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ReadAnalogReaderResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAnalogReaderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAnalogReaderResponse): ReadAnalogReaderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAnalogReaderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAnalogReaderResponse;
  static deserializeBinaryFromReader(message: ReadAnalogReaderResponse, reader: jspb.BinaryReader): ReadAnalogReaderResponse;
}

export namespace ReadAnalogReaderResponse {
  export type AsObject = {
    value: number,
  }
}

export class GetDigitalInterruptValueRequest extends jspb.Message {
  getBoardName(): string;
  setBoardName(value: string): void;

  getDigitalInterruptName(): string;
  setDigitalInterruptName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDigitalInterruptValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDigitalInterruptValueRequest): GetDigitalInterruptValueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDigitalInterruptValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDigitalInterruptValueRequest;
  static deserializeBinaryFromReader(message: GetDigitalInterruptValueRequest, reader: jspb.BinaryReader): GetDigitalInterruptValueRequest;
}

export namespace GetDigitalInterruptValueRequest {
  export type AsObject = {
    boardName: string,
    digitalInterruptName: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetDigitalInterruptValueResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDigitalInterruptValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDigitalInterruptValueResponse): GetDigitalInterruptValueResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDigitalInterruptValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDigitalInterruptValueResponse;
  static deserializeBinaryFromReader(message: GetDigitalInterruptValueResponse, reader: jspb.BinaryReader): GetDigitalInterruptValueResponse;
}

export namespace GetDigitalInterruptValueResponse {
  export type AsObject = {
    value: number,
  }
}

