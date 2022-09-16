// package: viam.app.v1
// file: app/v1/robot.proto

import * as app_v1_robot_pb from "../../app/v1/robot_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RobotServiceConfig = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_robot_pb.ConfigRequest;
  readonly responseType: typeof app_v1_robot_pb.ConfigResponse;
};

type RobotServiceCertificate = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_robot_pb.CertificateRequest;
  readonly responseType: typeof app_v1_robot_pb.CertificateResponse;
};

type RobotServiceLog = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_robot_pb.LogRequest;
  readonly responseType: typeof app_v1_robot_pb.LogResponse;
};

type RobotServiceNeedsRestart = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_robot_pb.NeedsRestartRequest;
  readonly responseType: typeof app_v1_robot_pb.NeedsRestartResponse;
};

export class RobotService {
  static readonly serviceName: string;
  static readonly Config: RobotServiceConfig;
  static readonly Certificate: RobotServiceCertificate;
  static readonly Log: RobotServiceLog;
  static readonly NeedsRestart: RobotServiceNeedsRestart;
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

export class RobotServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  config(
    requestMessage: app_v1_robot_pb.ConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.ConfigResponse|null) => void
  ): UnaryResponse;
  config(
    requestMessage: app_v1_robot_pb.ConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.ConfigResponse|null) => void
  ): UnaryResponse;
  certificate(
    requestMessage: app_v1_robot_pb.CertificateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.CertificateResponse|null) => void
  ): UnaryResponse;
  certificate(
    requestMessage: app_v1_robot_pb.CertificateRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.CertificateResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: app_v1_robot_pb.LogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.LogResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: app_v1_robot_pb.LogRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.LogResponse|null) => void
  ): UnaryResponse;
  needsRestart(
    requestMessage: app_v1_robot_pb.NeedsRestartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.NeedsRestartResponse|null) => void
  ): UnaryResponse;
  needsRestart(
    requestMessage: app_v1_robot_pb.NeedsRestartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_robot_pb.NeedsRestartResponse|null) => void
  ): UnaryResponse;
}

