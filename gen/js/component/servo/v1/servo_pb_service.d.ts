// package: viam.component.servo.v1
// file: component/servo/v1/servo.proto

import * as component_servo_v1_servo_pb from "../../../component/servo/v1/servo_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServoServiceMove = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_servo_v1_servo_pb.MoveRequest;
  readonly responseType: typeof component_servo_v1_servo_pb.MoveResponse;
};

type ServoServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_servo_v1_servo_pb.GetPositionRequest;
  readonly responseType: typeof component_servo_v1_servo_pb.GetPositionResponse;
};

type ServoServiceStop = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_servo_v1_servo_pb.StopRequest;
  readonly responseType: typeof component_servo_v1_servo_pb.StopResponse;
};

type ServoServiceIsMoving = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_servo_v1_servo_pb.IsMovingRequest;
  readonly responseType: typeof component_servo_v1_servo_pb.IsMovingResponse;
};

type ServoServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type ServoServiceGetGeometries = {
  readonly methodName: string;
  readonly service: typeof ServoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetGeometriesRequest;
  readonly responseType: typeof common_v1_common_pb.GetGeometriesResponse;
};

export class ServoService {
  static readonly serviceName: string;
  static readonly Move: ServoServiceMove;
  static readonly GetPosition: ServoServiceGetPosition;
  static readonly Stop: ServoServiceStop;
  static readonly IsMoving: ServoServiceIsMoving;
  static readonly DoCommand: ServoServiceDoCommand;
  static readonly GetGeometries: ServoServiceGetGeometries;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ServoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  move(
    requestMessage: component_servo_v1_servo_pb.MoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.MoveResponse|null) => void
  ): UnaryResponse;
  move(
    requestMessage: component_servo_v1_servo_pb.MoveRequest,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.MoveResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_servo_v1_servo_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_servo_v1_servo_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_servo_v1_servo_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_servo_v1_servo_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.StopResponse|null) => void
  ): UnaryResponse;
  isMoving(
    requestMessage: component_servo_v1_servo_pb.IsMovingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.IsMovingResponse|null) => void
  ): UnaryResponse;
  isMoving(
    requestMessage: component_servo_v1_servo_pb.IsMovingRequest,
    callback: (error: ServiceError|null, responseMessage: component_servo_v1_servo_pb.IsMovingResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  getGeometries(
    requestMessage: common_v1_common_pb.GetGeometriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetGeometriesResponse|null) => void
  ): UnaryResponse;
  getGeometries(
    requestMessage: common_v1_common_pb.GetGeometriesRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetGeometriesResponse|null) => void
  ): UnaryResponse;
}

