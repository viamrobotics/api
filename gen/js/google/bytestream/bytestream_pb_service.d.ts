// package: google.bytestream
// file: google/bytestream/bytestream.proto

import * as google_bytestream_bytestream_pb from "../../google/bytestream/bytestream_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ByteStreamRead = {
  readonly methodName: string;
  readonly service: typeof ByteStream;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_bytestream_bytestream_pb.ReadRequest;
  readonly responseType: typeof google_bytestream_bytestream_pb.ReadResponse;
};

type ByteStreamWrite = {
  readonly methodName: string;
  readonly service: typeof ByteStream;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof google_bytestream_bytestream_pb.WriteRequest;
  readonly responseType: typeof google_bytestream_bytestream_pb.WriteResponse;
};

type ByteStreamQueryWriteStatus = {
  readonly methodName: string;
  readonly service: typeof ByteStream;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_bytestream_bytestream_pb.QueryWriteStatusRequest;
  readonly responseType: typeof google_bytestream_bytestream_pb.QueryWriteStatusResponse;
};

export class ByteStream {
  static readonly serviceName: string;
  static readonly Read: ByteStreamRead;
  static readonly Write: ByteStreamWrite;
  static readonly QueryWriteStatus: ByteStreamQueryWriteStatus;
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

export class ByteStreamClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  read(requestMessage: google_bytestream_bytestream_pb.ReadRequest, metadata?: grpc.Metadata): ResponseStream<google_bytestream_bytestream_pb.ReadResponse>;
  write(metadata?: grpc.Metadata): RequestStream<google_bytestream_bytestream_pb.WriteRequest>;
  queryWriteStatus(
    requestMessage: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_bytestream_bytestream_pb.QueryWriteStatusResponse|null) => void
  ): UnaryResponse;
  queryWriteStatus(
    requestMessage: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
    callback: (error: ServiceError|null, responseMessage: google_bytestream_bytestream_pb.QueryWriteStatusResponse|null) => void
  ): UnaryResponse;
}

