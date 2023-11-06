// package: proto.stream.v1
// file: stream/v1/stream.proto

import * as stream_v1_stream_pb from "../../stream/v1/stream_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StreamServiceListStreams = {
  readonly methodName: string;
  readonly service: typeof StreamService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stream_v1_stream_pb.ListStreamsRequest;
  readonly responseType: typeof stream_v1_stream_pb.ListStreamsResponse;
};

type StreamServiceAddStream = {
  readonly methodName: string;
  readonly service: typeof StreamService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stream_v1_stream_pb.AddStreamRequest;
  readonly responseType: typeof stream_v1_stream_pb.AddStreamResponse;
};

type StreamServiceRemoveStream = {
  readonly methodName: string;
  readonly service: typeof StreamService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stream_v1_stream_pb.RemoveStreamRequest;
  readonly responseType: typeof stream_v1_stream_pb.RemoveStreamResponse;
};

export class StreamService {
  static readonly serviceName: string;
  static readonly ListStreams: StreamServiceListStreams;
  static readonly AddStream: StreamServiceAddStream;
  static readonly RemoveStream: StreamServiceRemoveStream;
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

export class StreamServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listStreams(
    requestMessage: stream_v1_stream_pb.ListStreamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.ListStreamsResponse|null) => void
  ): UnaryResponse;
  listStreams(
    requestMessage: stream_v1_stream_pb.ListStreamsRequest,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.ListStreamsResponse|null) => void
  ): UnaryResponse;
  addStream(
    requestMessage: stream_v1_stream_pb.AddStreamRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.AddStreamResponse|null) => void
  ): UnaryResponse;
  addStream(
    requestMessage: stream_v1_stream_pb.AddStreamRequest,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.AddStreamResponse|null) => void
  ): UnaryResponse;
  removeStream(
    requestMessage: stream_v1_stream_pb.RemoveStreamRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.RemoveStreamResponse|null) => void
  ): UnaryResponse;
  removeStream(
    requestMessage: stream_v1_stream_pb.RemoveStreamRequest,
    callback: (error: ServiceError|null, responseMessage: stream_v1_stream_pb.RemoveStreamResponse|null) => void
  ): UnaryResponse;
}

