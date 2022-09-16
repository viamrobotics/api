// package: viam.component.audioinput.v1
// file: component/audioinput/v1/audioinput.proto

import * as component_audioinput_v1_audioinput_pb from "../../../component/audioinput/v1/audioinput_pb";
import * as google_api_httpbody_pb from "../../../google/api/httpbody_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AudioInputServiceChunks = {
  readonly methodName: string;
  readonly service: typeof AudioInputService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof component_audioinput_v1_audioinput_pb.ChunksRequest;
  readonly responseType: typeof component_audioinput_v1_audioinput_pb.ChunksResponse;
};

type AudioInputServiceProperties = {
  readonly methodName: string;
  readonly service: typeof AudioInputService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_audioinput_v1_audioinput_pb.PropertiesRequest;
  readonly responseType: typeof component_audioinput_v1_audioinput_pb.PropertiesResponse;
};

type AudioInputServiceRecord = {
  readonly methodName: string;
  readonly service: typeof AudioInputService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_audioinput_v1_audioinput_pb.RecordRequest;
  readonly responseType: typeof google_api_httpbody_pb.HttpBody;
};

export class AudioInputService {
  static readonly serviceName: string;
  static readonly Chunks: AudioInputServiceChunks;
  static readonly Properties: AudioInputServiceProperties;
  static readonly Record: AudioInputServiceRecord;
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

export class AudioInputServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chunks(requestMessage: component_audioinput_v1_audioinput_pb.ChunksRequest, metadata?: grpc.Metadata): ResponseStream<component_audioinput_v1_audioinput_pb.ChunksResponse>;
  properties(
    requestMessage: component_audioinput_v1_audioinput_pb.PropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_audioinput_v1_audioinput_pb.PropertiesResponse|null) => void
  ): UnaryResponse;
  properties(
    requestMessage: component_audioinput_v1_audioinput_pb.PropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: component_audioinput_v1_audioinput_pb.PropertiesResponse|null) => void
  ): UnaryResponse;
  record(
    requestMessage: component_audioinput_v1_audioinput_pb.RecordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_api_httpbody_pb.HttpBody|null) => void
  ): UnaryResponse;
  record(
    requestMessage: component_audioinput_v1_audioinput_pb.RecordRequest,
    callback: (error: ServiceError|null, responseMessage: google_api_httpbody_pb.HttpBody|null) => void
  ): UnaryResponse;
}

