// package: viam.service.mlmodels.v1
// file: service/mlmodels/v1/mlmodels.proto

import * as service_mlmodels_v1_mlmodels_pb from "../../../service/mlmodels/v1/mlmodels_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MLModelServiceInfer = {
  readonly methodName: string;
  readonly service: typeof MLModelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_mlmodels_v1_mlmodels_pb.InferRequest;
  readonly responseType: typeof service_mlmodels_v1_mlmodels_pb.InferResponse;
};

type MLModelServiceMetadata = {
  readonly methodName: string;
  readonly service: typeof MLModelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_mlmodels_v1_mlmodels_pb.MetadataRequest;
  readonly responseType: typeof service_mlmodels_v1_mlmodels_pb.MetadataResponse;
};

export class MLModelService {
  static readonly serviceName: string;
  static readonly Infer: MLModelServiceInfer;
  static readonly Metadata: MLModelServiceMetadata;
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

export class MLModelServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  infer(
    requestMessage: service_mlmodels_v1_mlmodels_pb.InferRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_mlmodels_v1_mlmodels_pb.InferResponse|null) => void
  ): UnaryResponse;
  infer(
    requestMessage: service_mlmodels_v1_mlmodels_pb.InferRequest,
    callback: (error: ServiceError|null, responseMessage: service_mlmodels_v1_mlmodels_pb.InferResponse|null) => void
  ): UnaryResponse;
  metadata(
    requestMessage: service_mlmodels_v1_mlmodels_pb.MetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_mlmodels_v1_mlmodels_pb.MetadataResponse|null) => void
  ): UnaryResponse;
  metadata(
    requestMessage: service_mlmodels_v1_mlmodels_pb.MetadataRequest,
    callback: (error: ServiceError|null, responseMessage: service_mlmodels_v1_mlmodels_pb.MetadataResponse|null) => void
  ): UnaryResponse;
}

