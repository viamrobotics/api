// package: robotreservation.v1
// file: robotreservation/v1/robot_reservation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StateProgress extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getDone(): boolean;
  setDone(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateProgress.AsObject;
  static toObject(includeInstance: boolean, msg: StateProgress): StateProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StateProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateProgress;
  static deserializeBinaryFromReader(message: StateProgress, reader: jspb.BinaryReader): StateProgress;
}

export namespace StateProgress {
  export type AsObject = {
    state: string,
    done: boolean,
  }
}

export class RobotReservation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserEmail(): string;
  setUserEmail(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getRobotId(): string;
  setRobotId(value: string): void;

  getPartId(): string;
  setPartId(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getReservationState(): string;
  setReservationState(value: string): void;

  clearProgressList(): void;
  getProgressList(): Array<StateProgress>;
  setProgressList(value: Array<StateProgress>): void;
  addProgress(value?: StateProgress, index?: number): StateProgress;

  hasLastStateUpdate(): boolean;
  clearLastStateUpdate(): void;
  getLastStateUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastStateUpdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStateDeadline(): boolean;
  clearStateDeadline(): void;
  getStateDeadline(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateDeadline(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndedOn(): boolean;
  clearEndedOn(): void;
  getEndedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotReservation.AsObject;
  static toObject(includeInstance: boolean, msg: RobotReservation): RobotReservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotReservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotReservation;
  static deserializeBinaryFromReader(message: RobotReservation, reader: jspb.BinaryReader): RobotReservation;
}

export namespace RobotReservation {
  export type AsObject = {
    id: string,
    userEmail: string,
    orgId: string,
    locationId: string,
    robotId: string,
    partId: string,
    priority: number,
    reservationState: string,
    progressList: Array<StateProgress.AsObject>,
    lastStateUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stateDeadline?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateRobotReservationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasLocationId(): boolean;
  clearLocationId(): void;
  getLocationId(): string;
  setLocationId(value: string): void;

  hasRobotId(): boolean;
  clearRobotId(): void;
  getRobotId(): string;
  setRobotId(value: string): void;

  hasPartId(): boolean;
  clearPartId(): void;
  getPartId(): string;
  setPartId(value: string): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): number;
  setPriority(value: number): void;

  hasReservationState(): boolean;
  clearReservationState(): void;
  getReservationState(): string;
  setReservationState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotReservationRequest): CreateRobotReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotReservationRequest;
  static deserializeBinaryFromReader(message: CreateRobotReservationRequest, reader: jspb.BinaryReader): CreateRobotReservationRequest;
}

export namespace CreateRobotReservationRequest {
  export type AsObject = {
    orgId: string,
    locationId: string,
    robotId: string,
    partId: string,
    priority: number,
    reservationState: string,
  }
}

export class CreateRobotReservationResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotReservationResponse): CreateRobotReservationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotReservationResponse;
  static deserializeBinaryFromReader(message: CreateRobotReservationResponse, reader: jspb.BinaryReader): CreateRobotReservationResponse;
}

export namespace CreateRobotReservationResponse {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotReservationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotReservationRequest): DeleteRobotReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotReservationRequest;
  static deserializeBinaryFromReader(message: DeleteRobotReservationRequest, reader: jspb.BinaryReader): DeleteRobotReservationRequest;
}

export namespace DeleteRobotReservationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotReservationResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotReservationResponse): DeleteRobotReservationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotReservationResponse;
  static deserializeBinaryFromReader(message: DeleteRobotReservationResponse, reader: jspb.BinaryReader): DeleteRobotReservationResponse;
}

export namespace DeleteRobotReservationResponse {
  export type AsObject = {
    id: string,
  }
}

export class ListRobotReservationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotReservationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotReservationsRequest): ListRobotReservationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotReservationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotReservationsRequest;
  static deserializeBinaryFromReader(message: ListRobotReservationsRequest, reader: jspb.BinaryReader): ListRobotReservationsRequest;
}

export namespace ListRobotReservationsRequest {
  export type AsObject = {
  }
}

export class ListRobotReservationsResponse extends jspb.Message {
  clearReservationsList(): void;
  getReservationsList(): Array<RobotReservation>;
  setReservationsList(value: Array<RobotReservation>): void;
  addReservations(value?: RobotReservation, index?: number): RobotReservation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotReservationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotReservationsResponse): ListRobotReservationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotReservationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotReservationsResponse;
  static deserializeBinaryFromReader(message: ListRobotReservationsResponse, reader: jspb.BinaryReader): ListRobotReservationsResponse;
}

export namespace ListRobotReservationsResponse {
  export type AsObject = {
    reservationsList: Array<RobotReservation.AsObject>,
  }
}

export class GetRobotReservationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotReservationRequest): GetRobotReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotReservationRequest;
  static deserializeBinaryFromReader(message: GetRobotReservationRequest, reader: jspb.BinaryReader): GetRobotReservationRequest;
}

export namespace GetRobotReservationRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotReservationResponse extends jspb.Message {
  hasReservation(): boolean;
  clearReservation(): void;
  getReservation(): RobotReservation | undefined;
  setReservation(value?: RobotReservation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotReservationResponse): GetRobotReservationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotReservationResponse;
  static deserializeBinaryFromReader(message: GetRobotReservationResponse, reader: jspb.BinaryReader): GetRobotReservationResponse;
}

export namespace GetRobotReservationResponse {
  export type AsObject = {
    reservation?: RobotReservation.AsObject,
  }
}

export class RobotProcessorKeys extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotProcessorKeys.AsObject;
  static toObject(includeInstance: boolean, msg: RobotProcessorKeys): RobotProcessorKeys.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotProcessorKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotProcessorKeys;
  static deserializeBinaryFromReader(message: RobotProcessorKeys, reader: jspb.BinaryReader): RobotProcessorKeys;
}

export namespace RobotProcessorKeys {
  export type AsObject = {
  }
}

export class RobotProcessor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotProcessor.AsObject;
  static toObject(includeInstance: boolean, msg: RobotProcessor): RobotProcessor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotProcessor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotProcessor;
  static deserializeBinaryFromReader(message: RobotProcessor, reader: jspb.BinaryReader): RobotProcessor;
}

export namespace RobotProcessor {
  export type AsObject = {
    id: string,
  }
}

export class CreateRobotProcessorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotProcessorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotProcessorRequest): CreateRobotProcessorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotProcessorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotProcessorRequest;
  static deserializeBinaryFromReader(message: CreateRobotProcessorRequest, reader: jspb.BinaryReader): CreateRobotProcessorRequest;
}

export namespace CreateRobotProcessorRequest {
  export type AsObject = {
  }
}

export class CreateRobotProcessorResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotProcessorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotProcessorResponse): CreateRobotProcessorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotProcessorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotProcessorResponse;
  static deserializeBinaryFromReader(message: CreateRobotProcessorResponse, reader: jspb.BinaryReader): CreateRobotProcessorResponse;
}

export namespace CreateRobotProcessorResponse {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotProcessorRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotProcessorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotProcessorRequest): DeleteRobotProcessorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotProcessorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotProcessorRequest;
  static deserializeBinaryFromReader(message: DeleteRobotProcessorRequest, reader: jspb.BinaryReader): DeleteRobotProcessorRequest;
}

export namespace DeleteRobotProcessorRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotProcessorResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotProcessorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotProcessorResponse): DeleteRobotProcessorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotProcessorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotProcessorResponse;
  static deserializeBinaryFromReader(message: DeleteRobotProcessorResponse, reader: jspb.BinaryReader): DeleteRobotProcessorResponse;
}

export namespace DeleteRobotProcessorResponse {
  export type AsObject = {
    id: string,
  }
}

export class ListRobotProcessorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotProcessorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotProcessorsRequest): ListRobotProcessorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotProcessorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotProcessorsRequest;
  static deserializeBinaryFromReader(message: ListRobotProcessorsRequest, reader: jspb.BinaryReader): ListRobotProcessorsRequest;
}

export namespace ListRobotProcessorsRequest {
  export type AsObject = {
  }
}

export class ListRobotProcessorsResponse extends jspb.Message {
  clearProcessorsList(): void;
  getProcessorsList(): Array<RobotProcessor>;
  setProcessorsList(value: Array<RobotProcessor>): void;
  addProcessors(value?: RobotProcessor, index?: number): RobotProcessor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotProcessorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotProcessorsResponse): ListRobotProcessorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotProcessorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotProcessorsResponse;
  static deserializeBinaryFromReader(message: ListRobotProcessorsResponse, reader: jspb.BinaryReader): ListRobotProcessorsResponse;
}

export namespace ListRobotProcessorsResponse {
  export type AsObject = {
    processorsList: Array<RobotProcessor.AsObject>,
  }
}

export class TryProcessRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TryProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TryProcessRequest): TryProcessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TryProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TryProcessRequest;
  static deserializeBinaryFromReader(message: TryProcessRequest, reader: jspb.BinaryReader): TryProcessRequest;
}

export namespace TryProcessRequest {
  export type AsObject = {
  }
}

export class TryProcessResponse extends jspb.Message {
  getQueueEmpty(): boolean;
  setQueueEmpty(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TryProcessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TryProcessResponse): TryProcessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TryProcessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TryProcessResponse;
  static deserializeBinaryFromReader(message: TryProcessResponse, reader: jspb.BinaryReader): TryProcessResponse;
}

export namespace TryProcessResponse {
  export type AsObject = {
    queueEmpty: boolean,
  }
}

export class ProcessState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessState.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessState): ProcessState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessState;
  static deserializeBinaryFromReader(message: ProcessState, reader: jspb.BinaryReader): ProcessState;
}

export namespace ProcessState {
  export type AsObject = {
    id: string,
  }
}

export class UpdateProcessStateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProcessStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProcessStateRequest): UpdateProcessStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProcessStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProcessStateRequest;
  static deserializeBinaryFromReader(message: UpdateProcessStateRequest, reader: jspb.BinaryReader): UpdateProcessStateRequest;
}

export namespace UpdateProcessStateRequest {
  export type AsObject = {
    id: string,
  }
}

export class UpdateProcessStateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProcessStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProcessStateResponse): UpdateProcessStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProcessStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProcessStateResponse;
  static deserializeBinaryFromReader(message: UpdateProcessStateResponse, reader: jspb.BinaryReader): UpdateProcessStateResponse;
}

export namespace UpdateProcessStateResponse {
  export type AsObject = {
  }
}

