// package: viam.component.testecho.v1
// file: component/testecho/v1/testecho.proto

import * as component_testecho_v1_testecho_pb from "../../../component/testecho/v1/testecho_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TestEchoServiceEcho = {
  readonly methodName: string;
  readonly service: typeof TestEchoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_testecho_v1_testecho_pb.EchoRequest;
  readonly responseType: typeof component_testecho_v1_testecho_pb.EchoResponse;
};

type TestEchoServiceEchoMultiple = {
  readonly methodName: string;
  readonly service: typeof TestEchoService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof component_testecho_v1_testecho_pb.EchoMultipleRequest;
  readonly responseType: typeof component_testecho_v1_testecho_pb.EchoMultipleResponse;
};

type TestEchoServiceEchoBiDi = {
  readonly methodName: string;
  readonly service: typeof TestEchoService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof component_testecho_v1_testecho_pb.EchoBiDiRequest;
  readonly responseType: typeof component_testecho_v1_testecho_pb.EchoBiDiResponse;
};

type TestEchoServiceStop = {
  readonly methodName: string;
  readonly service: typeof TestEchoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_testecho_v1_testecho_pb.StopRequest;
  readonly responseType: typeof component_testecho_v1_testecho_pb.StopResponse;
};

export class TestEchoService {
  static readonly serviceName: string;
  static readonly Echo: TestEchoServiceEcho;
  static readonly EchoMultiple: TestEchoServiceEchoMultiple;
  static readonly EchoBiDi: TestEchoServiceEchoBiDi;
  static readonly Stop: TestEchoServiceStop;
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

export class TestEchoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  echo(
    requestMessage: component_testecho_v1_testecho_pb.EchoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_testecho_v1_testecho_pb.EchoResponse|null) => void
  ): UnaryResponse;
  echo(
    requestMessage: component_testecho_v1_testecho_pb.EchoRequest,
    callback: (error: ServiceError|null, responseMessage: component_testecho_v1_testecho_pb.EchoResponse|null) => void
  ): UnaryResponse;
  echoMultiple(requestMessage: component_testecho_v1_testecho_pb.EchoMultipleRequest, metadata?: grpc.Metadata): ResponseStream<component_testecho_v1_testecho_pb.EchoMultipleResponse>;
  echoBiDi(metadata?: grpc.Metadata): BidirectionalStream<component_testecho_v1_testecho_pb.EchoBiDiRequest, component_testecho_v1_testecho_pb.EchoBiDiResponse>;
  stop(
    requestMessage: component_testecho_v1_testecho_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_testecho_v1_testecho_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_testecho_v1_testecho_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_testecho_v1_testecho_pb.StopResponse|null) => void
  ): UnaryResponse;
}

