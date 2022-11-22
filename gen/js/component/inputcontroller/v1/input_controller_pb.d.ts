// package: viam.component.inputcontroller.v1
// file: component/inputcontroller/v1/input_controller.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetControlsRequest extends jspb.Message {
  getController(): string;
  setController(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetControlsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetControlsRequest): GetControlsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetControlsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetControlsRequest;
  static deserializeBinaryFromReader(message: GetControlsRequest, reader: jspb.BinaryReader): GetControlsRequest;
}

export namespace GetControlsRequest {
  export type AsObject = {
    controller: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetControlsResponse extends jspb.Message {
  clearControlsList(): void;
  getControlsList(): Array<string>;
  setControlsList(value: Array<string>): void;
  addControls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetControlsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetControlsResponse): GetControlsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetControlsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetControlsResponse;
  static deserializeBinaryFromReader(message: GetControlsResponse, reader: jspb.BinaryReader): GetControlsResponse;
}

export namespace GetControlsResponse {
  export type AsObject = {
    controlsList: Array<string>,
  }
}

export class GetEventsRequest extends jspb.Message {
  getController(): string;
  setController(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsRequest): GetEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsRequest;
  static deserializeBinaryFromReader(message: GetEventsRequest, reader: jspb.BinaryReader): GetEventsRequest;
}

export namespace GetEventsRequest {
  export type AsObject = {
    controller: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetEventsResponse extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsResponse): GetEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsResponse;
  static deserializeBinaryFromReader(message: GetEventsResponse, reader: jspb.BinaryReader): GetEventsResponse;
}

export namespace GetEventsResponse {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
  }
}

export class TriggerEventRequest extends jspb.Message {
  getController(): string;
  setController(value: string): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): Event | undefined;
  setEvent(value?: Event): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerEventRequest): TriggerEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerEventRequest;
  static deserializeBinaryFromReader(message: TriggerEventRequest, reader: jspb.BinaryReader): TriggerEventRequest;
}

export namespace TriggerEventRequest {
  export type AsObject = {
    controller: string,
    event?: Event.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class TriggerEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerEventResponse): TriggerEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerEventResponse;
  static deserializeBinaryFromReader(message: TriggerEventResponse, reader: jspb.BinaryReader): TriggerEventResponse;
}

export namespace TriggerEventResponse {
  export type AsObject = {
  }
}

export class Event extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEvent(): string;
  setEvent(value: string): void;

  getControl(): string;
  setControl(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    event: string,
    control: string,
    value: number,
  }
}

export class StreamEventsRequest extends jspb.Message {
  getController(): string;
  setController(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<StreamEventsRequest.Events>;
  setEventsList(value: Array<StreamEventsRequest.Events>): void;
  addEvents(value?: StreamEventsRequest.Events, index?: number): StreamEventsRequest.Events;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamEventsRequest): StreamEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamEventsRequest;
  static deserializeBinaryFromReader(message: StreamEventsRequest, reader: jspb.BinaryReader): StreamEventsRequest;
}

export namespace StreamEventsRequest {
  export type AsObject = {
    controller: string,
    eventsList: Array<StreamEventsRequest.Events.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Events extends jspb.Message {
    getControl(): string;
    setControl(value: string): void;

    clearEventsList(): void;
    getEventsList(): Array<string>;
    setEventsList(value: Array<string>): void;
    addEvents(value: string, index?: number): string;

    clearCancelledEventsList(): void;
    getCancelledEventsList(): Array<string>;
    setCancelledEventsList(value: Array<string>): void;
    addCancelledEvents(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Events.AsObject;
    static toObject(includeInstance: boolean, msg: Events): Events.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Events, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Events;
    static deserializeBinaryFromReader(message: Events, reader: jspb.BinaryReader): Events;
  }

  export namespace Events {
    export type AsObject = {
      control: string,
      eventsList: Array<string>,
      cancelledEventsList: Array<string>,
    }
  }
}

export class StreamEventsResponse extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): Event | undefined;
  setEvent(value?: Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamEventsResponse): StreamEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamEventsResponse;
  static deserializeBinaryFromReader(message: StreamEventsResponse, reader: jspb.BinaryReader): StreamEventsResponse;
}

export namespace StreamEventsResponse {
  export type AsObject = {
    event?: Event.AsObject,
  }
}

export class Status extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
  }
}

