// package: viam.service.shell.v1
// file: service/shell/v1/shell.proto

import * as service_shell_v1_shell_pb from "../../../service/shell/v1/shell_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ShellServiceShell = {
  readonly methodName: string;
  readonly service: typeof ShellService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof service_shell_v1_shell_pb.ShellRequest;
  readonly responseType: typeof service_shell_v1_shell_pb.ShellResponse;
};

export class ShellService {
  static readonly serviceName: string;
  static readonly Shell: ShellServiceShell;
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

export class ShellServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  shell(metadata?: grpc.Metadata): BidirectionalStream<service_shell_v1_shell_pb.ShellRequest, service_shell_v1_shell_pb.ShellResponse>;
}

