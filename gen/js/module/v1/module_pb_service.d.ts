// package: viam.module.v1
// file: module/v1/module.proto

import * as module_v1_module_pb from "../../module/v1/module_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ModuleServiceAddComponent = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.AddComponentRequest;
  readonly responseType: typeof module_v1_module_pb.AddComponentResponse;
};

type ModuleServiceRemoveComponent = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.RemoveComponentRequest;
  readonly responseType: typeof module_v1_module_pb.RemoveComponentResponse;
};

type ModuleServiceReconfigureComponent = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.ReconfigureComponentRequest;
  readonly responseType: typeof module_v1_module_pb.ReconfigureComponentResponse;
};

type ModuleServiceCloseModule = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.CloseModuleRequest;
  readonly responseType: typeof module_v1_module_pb.CloseModuleResponse;
};

type ModuleServiceReady = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.ReadyRequest;
  readonly responseType: typeof module_v1_module_pb.ReadyResponse;
};

export class ModuleService {
  static readonly serviceName: string;
  static readonly AddComponent: ModuleServiceAddComponent;
  static readonly RemoveComponent: ModuleServiceRemoveComponent;
  static readonly ReconfigureComponent: ModuleServiceReconfigureComponent;
  static readonly CloseModule: ModuleServiceCloseModule;
  static readonly Ready: ModuleServiceReady;
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

export class ModuleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addComponent(
    requestMessage: module_v1_module_pb.AddComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.AddComponentResponse|null) => void
  ): UnaryResponse;
  addComponent(
    requestMessage: module_v1_module_pb.AddComponentRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.AddComponentResponse|null) => void
  ): UnaryResponse;
  removeComponent(
    requestMessage: module_v1_module_pb.RemoveComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.RemoveComponentResponse|null) => void
  ): UnaryResponse;
  removeComponent(
    requestMessage: module_v1_module_pb.RemoveComponentRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.RemoveComponentResponse|null) => void
  ): UnaryResponse;
  reconfigureComponent(
    requestMessage: module_v1_module_pb.ReconfigureComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureComponentResponse|null) => void
  ): UnaryResponse;
  reconfigureComponent(
    requestMessage: module_v1_module_pb.ReconfigureComponentRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureComponentResponse|null) => void
  ): UnaryResponse;
  closeModule(
    requestMessage: module_v1_module_pb.CloseModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.CloseModuleResponse|null) => void
  ): UnaryResponse;
  closeModule(
    requestMessage: module_v1_module_pb.CloseModuleRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.CloseModuleResponse|null) => void
  ): UnaryResponse;
  ready(
    requestMessage: module_v1_module_pb.ReadyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReadyResponse|null) => void
  ): UnaryResponse;
  ready(
    requestMessage: module_v1_module_pb.ReadyRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReadyResponse|null) => void
  ): UnaryResponse;
}

