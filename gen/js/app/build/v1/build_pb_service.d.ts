// package: viam.app.build.v1
// file: app/build/v1/build.proto

import * as app_build_v1_build_pb from "../../../app/build/v1/build_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BuildServiceStartBuild = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.StartBuildRequest;
  readonly responseType: typeof app_build_v1_build_pb.StartBuildResponse;
};

type BuildServiceGetLogs = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_build_v1_build_pb.GetLogsRequest;
  readonly responseType: typeof app_build_v1_build_pb.GetLogsResponse;
};

type BuildServiceListJobs = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.ListJobsRequest;
  readonly responseType: typeof app_build_v1_build_pb.ListJobsResponse;
};

export class BuildService {
  static readonly serviceName: string;
  static readonly StartBuild: BuildServiceStartBuild;
  static readonly GetLogs: BuildServiceGetLogs;
  static readonly ListJobs: BuildServiceListJobs;
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

export class BuildServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startBuild(
    requestMessage: app_build_v1_build_pb.StartBuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartBuildResponse|null) => void
  ): UnaryResponse;
  startBuild(
    requestMessage: app_build_v1_build_pb.StartBuildRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartBuildResponse|null) => void
  ): UnaryResponse;
  getLogs(requestMessage: app_build_v1_build_pb.GetLogsRequest, metadata?: grpc.Metadata): ResponseStream<app_build_v1_build_pb.GetLogsResponse>;
  listJobs(
    requestMessage: app_build_v1_build_pb.ListJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListJobsResponse|null) => void
  ): UnaryResponse;
  listJobs(
    requestMessage: app_build_v1_build_pb.ListJobsRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListJobsResponse|null) => void
  ): UnaryResponse;
}

