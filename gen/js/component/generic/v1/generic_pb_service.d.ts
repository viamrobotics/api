// package: viam.component.generic.v1
// file: component/generic/v1/generic.proto

import * as component_generic_v1_generic_pb from "../../../component/generic/v1/generic_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GenericServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof GenericService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_generic_v1_generic_pb.DoCommandRequest;
  readonly responseType: typeof component_generic_v1_generic_pb.DoCommandResponse;
};

export class GenericService {
  static readonly serviceName: string;
  static readonly DoCommand: GenericServiceDoCommand;
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

export class GenericServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  doCommand(
    requestMessage: component_generic_v1_generic_pb.DoCommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_generic_v1_generic_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: component_generic_v1_generic_pb.DoCommandRequest,
    callback: (error: ServiceError|null, responseMessage: component_generic_v1_generic_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
}

