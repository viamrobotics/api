// package: viam.component.motor.v1
// file: component/motor/v1/motor.proto

import * as component_motor_v1_motor_pb from "../../../component/motor/v1/motor_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MotorServiceSetPower = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.SetPowerRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.SetPowerResponse;
};

type MotorServiceGoFor = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.GoForRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.GoForResponse;
};

type MotorServiceGoTo = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.GoToRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.GoToResponse;
};

type MotorServiceResetZeroPosition = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.ResetZeroPositionRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.ResetZeroPositionResponse;
};

type MotorServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.GetPositionRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.GetPositionResponse;
};

type MotorServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.GetPropertiesRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.GetPropertiesResponse;
};

type MotorServiceStop = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.StopRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.StopResponse;
};

type MotorServiceIsPowered = {
  readonly methodName: string;
  readonly service: typeof MotorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_motor_v1_motor_pb.IsPoweredRequest;
  readonly responseType: typeof component_motor_v1_motor_pb.IsPoweredResponse;
};

export class MotorService {
  static readonly serviceName: string;
  static readonly SetPower: MotorServiceSetPower;
  static readonly GoFor: MotorServiceGoFor;
  static readonly GoTo: MotorServiceGoTo;
  static readonly ResetZeroPosition: MotorServiceResetZeroPosition;
  static readonly GetPosition: MotorServiceGetPosition;
  static readonly GetProperties: MotorServiceGetProperties;
  static readonly Stop: MotorServiceStop;
  static readonly IsPowered: MotorServiceIsPowered;
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

export class MotorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setPower(
    requestMessage: component_motor_v1_motor_pb.SetPowerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.SetPowerResponse|null) => void
  ): UnaryResponse;
  setPower(
    requestMessage: component_motor_v1_motor_pb.SetPowerRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.SetPowerResponse|null) => void
  ): UnaryResponse;
  goFor(
    requestMessage: component_motor_v1_motor_pb.GoForRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GoForResponse|null) => void
  ): UnaryResponse;
  goFor(
    requestMessage: component_motor_v1_motor_pb.GoForRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GoForResponse|null) => void
  ): UnaryResponse;
  goTo(
    requestMessage: component_motor_v1_motor_pb.GoToRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GoToResponse|null) => void
  ): UnaryResponse;
  goTo(
    requestMessage: component_motor_v1_motor_pb.GoToRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GoToResponse|null) => void
  ): UnaryResponse;
  resetZeroPosition(
    requestMessage: component_motor_v1_motor_pb.ResetZeroPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.ResetZeroPositionResponse|null) => void
  ): UnaryResponse;
  resetZeroPosition(
    requestMessage: component_motor_v1_motor_pb.ResetZeroPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.ResetZeroPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_motor_v1_motor_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_motor_v1_motor_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_motor_v1_motor_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_motor_v1_motor_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_motor_v1_motor_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_motor_v1_motor_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.StopResponse|null) => void
  ): UnaryResponse;
  isPowered(
    requestMessage: component_motor_v1_motor_pb.IsPoweredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.IsPoweredResponse|null) => void
  ): UnaryResponse;
  isPowered(
    requestMessage: component_motor_v1_motor_pb.IsPoweredRequest,
    callback: (error: ServiceError|null, responseMessage: component_motor_v1_motor_pb.IsPoweredResponse|null) => void
  ): UnaryResponse;
}

