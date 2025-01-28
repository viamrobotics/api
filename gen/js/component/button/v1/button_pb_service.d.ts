// package: viam.component.button.v1
// file: component/button/v1/button.proto

import * as component_button_v1_button_pb from "../../../component/button/v1/button_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ButtonServicePush = {
  readonly methodName: string;
  readonly service: typeof ButtonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_button_v1_button_pb.PushRequest;
  readonly responseType: typeof component_button_v1_button_pb.PushResponse;
};

type ButtonServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof ButtonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class ButtonService {
  static readonly serviceName: string;
  static readonly Push: ButtonServicePush;
  static readonly DoCommand: ButtonServiceDoCommand;
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

export class ButtonServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  push(
    requestMessage: component_button_v1_button_pb.PushRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_button_v1_button_pb.PushResponse|null) => void
  ): UnaryResponse;
  push(
    requestMessage: component_button_v1_button_pb.PushRequest,
    callback: (error: ServiceError|null, responseMessage: component_button_v1_button_pb.PushResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
}

