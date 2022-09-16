// package: viam.component.gantry.v1
// file: component/gantry/v1/gantry.proto

import * as component_gantry_v1_gantry_pb from "../../../component/gantry/v1/gantry_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GantryServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof GantryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gantry_v1_gantry_pb.GetPositionRequest;
  readonly responseType: typeof component_gantry_v1_gantry_pb.GetPositionResponse;
};

type GantryServiceMoveToPosition = {
  readonly methodName: string;
  readonly service: typeof GantryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gantry_v1_gantry_pb.MoveToPositionRequest;
  readonly responseType: typeof component_gantry_v1_gantry_pb.MoveToPositionResponse;
};

type GantryServiceGetLengths = {
  readonly methodName: string;
  readonly service: typeof GantryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gantry_v1_gantry_pb.GetLengthsRequest;
  readonly responseType: typeof component_gantry_v1_gantry_pb.GetLengthsResponse;
};

type GantryServiceStop = {
  readonly methodName: string;
  readonly service: typeof GantryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gantry_v1_gantry_pb.StopRequest;
  readonly responseType: typeof component_gantry_v1_gantry_pb.StopResponse;
};

export class GantryService {
  static readonly serviceName: string;
  static readonly GetPosition: GantryServiceGetPosition;
  static readonly MoveToPosition: GantryServiceMoveToPosition;
  static readonly GetLengths: GantryServiceGetLengths;
  static readonly Stop: GantryServiceStop;
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

export class GantryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPosition(
    requestMessage: component_gantry_v1_gantry_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_gantry_v1_gantry_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  moveToPosition(
    requestMessage: component_gantry_v1_gantry_pb.MoveToPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.MoveToPositionResponse|null) => void
  ): UnaryResponse;
  moveToPosition(
    requestMessage: component_gantry_v1_gantry_pb.MoveToPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.MoveToPositionResponse|null) => void
  ): UnaryResponse;
  getLengths(
    requestMessage: component_gantry_v1_gantry_pb.GetLengthsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.GetLengthsResponse|null) => void
  ): UnaryResponse;
  getLengths(
    requestMessage: component_gantry_v1_gantry_pb.GetLengthsRequest,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.GetLengthsResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_gantry_v1_gantry_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_gantry_v1_gantry_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_gantry_v1_gantry_pb.StopResponse|null) => void
  ): UnaryResponse;
}

