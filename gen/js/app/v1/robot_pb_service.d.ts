// package: viam.app.v1
// file: app/v1/physicalDevice.proto

import * as app_v1_physicalDevice_pb from "../../app/v1/physicalDevice_pb";
import {grpc} from "@improbable-eng/grpc-web";

type physicalDeviceServiceConfig = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_physicalDevice_pb.ConfigRequest;
  readonly responseType: typeof app_v1_physicalDevice_pb.ConfigResponse;
};

type physicalDeviceServiceCertificate = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_physicalDevice_pb.CertificateRequest;
  readonly responseType: typeof app_v1_physicalDevice_pb.CertificateResponse;
};

type physicalDeviceServiceLog = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_physicalDevice_pb.LogRequest;
  readonly responseType: typeof app_v1_physicalDevice_pb.LogResponse;
};

type physicalDeviceServiceNeedsRestart = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_physicalDevice_pb.NeedsRestartRequest;
  readonly responseType: typeof app_v1_physicalDevice_pb.NeedsRestartResponse;
};

export class physicalDeviceService {
  static readonly serviceName: string;
  static readonly Config: physicalDeviceServiceConfig;
  static readonly Certificate: physicalDeviceServiceCertificate;
  static readonly Log: physicalDeviceServiceLog;
  static readonly NeedsRestart: physicalDeviceServiceNeedsRestart;
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

export class physicalDeviceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  config(
    requestMessage: app_v1_physicalDevice_pb.ConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.ConfigResponse|null) => void
  ): UnaryResponse;
  config(
    requestMessage: app_v1_physicalDevice_pb.ConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.ConfigResponse|null) => void
  ): UnaryResponse;
  certificate(
    requestMessage: app_v1_physicalDevice_pb.CertificateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.CertificateResponse|null) => void
  ): UnaryResponse;
  certificate(
    requestMessage: app_v1_physicalDevice_pb.CertificateRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.CertificateResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: app_v1_physicalDevice_pb.LogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.LogResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: app_v1_physicalDevice_pb.LogRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.LogResponse|null) => void
  ): UnaryResponse;
  needsRestart(
    requestMessage: app_v1_physicalDevice_pb.NeedsRestartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.NeedsRestartResponse|null) => void
  ): UnaryResponse;
  needsRestart(
    requestMessage: app_v1_physicalDevice_pb.NeedsRestartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_physicalDevice_pb.NeedsRestartResponse|null) => void
  ): UnaryResponse;
}

