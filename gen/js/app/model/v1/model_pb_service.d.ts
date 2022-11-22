// package: viam.app.model.v1
// file: app/model/v1/model.proto

import * as app_model_v1_model_pb from "../../../app/model/v1/model_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ModelServiceUpload = {
  readonly methodName: string;
  readonly service: typeof ModelService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_model_v1_model_pb.UploadRequest;
  readonly responseType: typeof app_model_v1_model_pb.UploadResponse;
};

type ModelServiceDelete = {
  readonly methodName: string;
  readonly service: typeof ModelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_model_v1_model_pb.DeleteRequest;
  readonly responseType: typeof app_model_v1_model_pb.DeleteResponse;
};

type ModelServiceDeploy = {
  readonly methodName: string;
  readonly service: typeof ModelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_model_v1_model_pb.DeployRequest;
  readonly responseType: typeof app_model_v1_model_pb.DeployResponse;
};

type ModelServiceInfo = {
  readonly methodName: string;
  readonly service: typeof ModelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_model_v1_model_pb.InfoRequest;
  readonly responseType: typeof app_model_v1_model_pb.InfoResponse;
};

export class ModelService {
  static readonly serviceName: string;
  static readonly Upload: ModelServiceUpload;
  static readonly Delete: ModelServiceDelete;
  static readonly Deploy: ModelServiceDeploy;
  static readonly Info: ModelServiceInfo;
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

export class ModelServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  upload(metadata?: grpc.Metadata): RequestStream<app_model_v1_model_pb.UploadRequest>;
  delete(
    requestMessage: app_model_v1_model_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: app_model_v1_model_pb.DeleteRequest,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  deploy(
    requestMessage: app_model_v1_model_pb.DeployRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.DeployResponse|null) => void
  ): UnaryResponse;
  deploy(
    requestMessage: app_model_v1_model_pb.DeployRequest,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.DeployResponse|null) => void
  ): UnaryResponse;
  info(
    requestMessage: app_model_v1_model_pb.InfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.InfoResponse|null) => void
  ): UnaryResponse;
  info(
    requestMessage: app_model_v1_model_pb.InfoRequest,
    callback: (error: ServiceError|null, responseMessage: app_model_v1_model_pb.InfoResponse|null) => void
  ): UnaryResponse;
}

