// package: viam.component.servo.v1
// file: component/servo/v1/servo.proto

import * as component_servo_v1_servo_pb from "../../../component/servo/v1/servo_pb";
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

export class ServoService {
  static readonly serviceName: string;
  static readonly Move: ServoServiceMove;
  static readonly GetPosition: ServoServiceGetPosition;
  static readonly Stop: ServoServiceStop;
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
}

