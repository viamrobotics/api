// package: viam.component.base.v1
// file: component/base/v1/base.proto

import * as component_base_v1_base_pb from "../../../component/base/v1/base_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BaseServiceMoveStraight = {
  readonly methodName: string;
  readonly service: typeof BaseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_base_v1_base_pb.MoveStraightRequest;
  readonly responseType: typeof component_base_v1_base_pb.MoveStraightResponse;
};

type BaseServiceSpin = {
  readonly methodName: string;
  readonly service: typeof BaseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_base_v1_base_pb.SpinRequest;
  readonly responseType: typeof component_base_v1_base_pb.SpinResponse;
};

type BaseServiceSetPower = {
  readonly methodName: string;
  readonly service: typeof BaseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_base_v1_base_pb.SetPowerRequest;
  readonly responseType: typeof component_base_v1_base_pb.SetPowerResponse;
};

type BaseServiceSetVelocity = {
  readonly methodName: string;
  readonly service: typeof BaseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_base_v1_base_pb.SetVelocityRequest;
  readonly responseType: typeof component_base_v1_base_pb.SetVelocityResponse;
};

type BaseServiceStop = {
  readonly methodName: string;
  readonly service: typeof BaseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_base_v1_base_pb.StopRequest;
  readonly responseType: typeof component_base_v1_base_pb.StopResponse;
};

export class BaseService {
  static readonly serviceName: string;
  static readonly MoveStraight: BaseServiceMoveStraight;
  static readonly Spin: BaseServiceSpin;
  static readonly SetPower: BaseServiceSetPower;
  static readonly SetVelocity: BaseServiceSetVelocity;
  static readonly Stop: BaseServiceStop;
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

export class BaseServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  moveStraight(
    requestMessage: component_base_v1_base_pb.MoveStraightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.MoveStraightResponse|null) => void
  ): UnaryResponse;
  moveStraight(
    requestMessage: component_base_v1_base_pb.MoveStraightRequest,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.MoveStraightResponse|null) => void
  ): UnaryResponse;
  spin(
    requestMessage: component_base_v1_base_pb.SpinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SpinResponse|null) => void
  ): UnaryResponse;
  spin(
    requestMessage: component_base_v1_base_pb.SpinRequest,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SpinResponse|null) => void
  ): UnaryResponse;
  setPower(
    requestMessage: component_base_v1_base_pb.SetPowerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SetPowerResponse|null) => void
  ): UnaryResponse;
  setPower(
    requestMessage: component_base_v1_base_pb.SetPowerRequest,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SetPowerResponse|null) => void
  ): UnaryResponse;
  setVelocity(
    requestMessage: component_base_v1_base_pb.SetVelocityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SetVelocityResponse|null) => void
  ): UnaryResponse;
  setVelocity(
    requestMessage: component_base_v1_base_pb.SetVelocityRequest,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.SetVelocityResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_base_v1_base_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_base_v1_base_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_base_v1_base_pb.StopResponse|null) => void
  ): UnaryResponse;
}

