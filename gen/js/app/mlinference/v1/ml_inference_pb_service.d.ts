// package: viam.app.mlinference.v1
// file: app/mlinference/v1/ml_inference.proto

import * as app_mlinference_v1_ml_inference_pb from "../../../app/mlinference/v1/ml_inference_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MLInferenceServiceGetInference = {
  readonly methodName: string;
  readonly service: typeof MLInferenceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_mlinference_v1_ml_inference_pb.GetInferenceRequest;
  readonly responseType: typeof app_mlinference_v1_ml_inference_pb.GetInferenceResponse;
};

export class MLInferenceService {
  static readonly serviceName: string;
  static readonly GetInference: MLInferenceServiceGetInference;
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

export class MLInferenceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getInference(
    requestMessage: app_mlinference_v1_ml_inference_pb.GetInferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_mlinference_v1_ml_inference_pb.GetInferenceResponse|null) => void
  ): UnaryResponse;
  getInference(
    requestMessage: app_mlinference_v1_ml_inference_pb.GetInferenceRequest,
    callback: (error: ServiceError|null, responseMessage: app_mlinference_v1_ml_inference_pb.GetInferenceResponse|null) => void
  ): UnaryResponse;
}

