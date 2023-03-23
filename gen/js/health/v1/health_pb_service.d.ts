// package: viam.health.v1
// file: health/v1/health.proto

import * as health_v1_health_pb from "../../health/v1/health_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HealthServiceCheck = {
  readonly methodName: string;
  readonly service: typeof HealthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof health_v1_health_pb.HealthServiceCheckRequest;
  readonly responseType: typeof health_v1_health_pb.HealthServiceCheckResponse;
};

export class HealthService {
  static readonly serviceName: string;
  static readonly Check: HealthServiceCheck;
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

export class HealthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  check(
    requestMessage: health_v1_health_pb.HealthServiceCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: health_v1_health_pb.HealthServiceCheckResponse|null) => void
  ): UnaryResponse;
  check(
    requestMessage: health_v1_health_pb.HealthServiceCheckRequest,
    callback: (error: ServiceError|null, responseMessage: health_v1_health_pb.HealthServiceCheckResponse|null) => void
  ): UnaryResponse;
}

