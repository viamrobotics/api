// package: viam.app.mltraining.v1
// file: app/mltraining/v1/ml_training.proto

import * as app_mltraining_v1_ml_training_pb from "../../../app/mltraining/v1/ml_training_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MLTrainingServiceSubmitTrainingJob = {
  readonly methodName: string;
  readonly service: typeof MLTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_mltraining_v1_ml_training_pb.SubmitTrainingJobRequest;
  readonly responseType: typeof app_mltraining_v1_ml_training_pb.SubmitTrainingJobResponse;
};

type MLTrainingServiceGetTrainingJob = {
  readonly methodName: string;
  readonly service: typeof MLTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_mltraining_v1_ml_training_pb.GetTrainingJobRequest;
  readonly responseType: typeof app_mltraining_v1_ml_training_pb.GetTrainingJobResponse;
};

type MLTrainingServiceListTrainingJobs = {
  readonly methodName: string;
  readonly service: typeof MLTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_mltraining_v1_ml_training_pb.ListTrainingJobsRequest;
  readonly responseType: typeof app_mltraining_v1_ml_training_pb.ListTrainingJobsResponse;
};

type MLTrainingServiceCancelTrainingJob = {
  readonly methodName: string;
  readonly service: typeof MLTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_mltraining_v1_ml_training_pb.CancelTrainingJobRequest;
  readonly responseType: typeof app_mltraining_v1_ml_training_pb.CancelTrainingJobResponse;
};

export class MLTrainingService {
  static readonly serviceName: string;
  static readonly SubmitTrainingJob: MLTrainingServiceSubmitTrainingJob;
  static readonly GetTrainingJob: MLTrainingServiceGetTrainingJob;
  static readonly ListTrainingJobs: MLTrainingServiceListTrainingJobs;
  static readonly CancelTrainingJob: MLTrainingServiceCancelTrainingJob;
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

export class MLTrainingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  submitTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.SubmitTrainingJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.SubmitTrainingJobResponse|null) => void
  ): UnaryResponse;
  submitTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.SubmitTrainingJobRequest,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.SubmitTrainingJobResponse|null) => void
  ): UnaryResponse;
  getTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.GetTrainingJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.GetTrainingJobResponse|null) => void
  ): UnaryResponse;
  getTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.GetTrainingJobRequest,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.GetTrainingJobResponse|null) => void
  ): UnaryResponse;
  listTrainingJobs(
    requestMessage: app_mltraining_v1_ml_training_pb.ListTrainingJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.ListTrainingJobsResponse|null) => void
  ): UnaryResponse;
  listTrainingJobs(
    requestMessage: app_mltraining_v1_ml_training_pb.ListTrainingJobsRequest,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.ListTrainingJobsResponse|null) => void
  ): UnaryResponse;
  cancelTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.CancelTrainingJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.CancelTrainingJobResponse|null) => void
  ): UnaryResponse;
  cancelTrainingJob(
    requestMessage: app_mltraining_v1_ml_training_pb.CancelTrainingJobRequest,
    callback: (error: ServiceError|null, responseMessage: app_mltraining_v1_ml_training_pb.CancelTrainingJobResponse|null) => void
  ): UnaryResponse;
}

