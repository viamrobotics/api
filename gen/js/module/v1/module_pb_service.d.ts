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

type ModuleServiceReconfigureComponent = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.ReconfigureComponentRequest;
  readonly responseType: typeof module_v1_module_pb.ReconfigureComponentResponse;
};

type ModuleServiceAddService = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.AddServiceRequest;
  readonly responseType: typeof module_v1_module_pb.AddServiceResponse;
};

type ModuleServiceReconfigureService = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.ReconfigureServiceRequest;
  readonly responseType: typeof module_v1_module_pb.ReconfigureServiceResponse;
};

type ModuleServiceRemoveResource = {
  readonly methodName: string;
  readonly service: typeof ModuleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof module_v1_module_pb.RemoveResourceRequest;
  readonly responseType: typeof module_v1_module_pb.RemoveResourceResponse;
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
  static readonly ReconfigureComponent: ModuleServiceReconfigureComponent;
  static readonly AddService: ModuleServiceAddService;
  static readonly ReconfigureService: ModuleServiceReconfigureService;
  static readonly RemoveResource: ModuleServiceRemoveResource;
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
  reconfigureComponent(
    requestMessage: module_v1_module_pb.ReconfigureComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureComponentResponse|null) => void
  ): UnaryResponse;
  reconfigureComponent(
    requestMessage: module_v1_module_pb.ReconfigureComponentRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureComponentResponse|null) => void
  ): UnaryResponse;
  addService(
    requestMessage: module_v1_module_pb.AddServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.AddServiceResponse|null) => void
  ): UnaryResponse;
  addService(
    requestMessage: module_v1_module_pb.AddServiceRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.AddServiceResponse|null) => void
  ): UnaryResponse;
  reconfigureService(
    requestMessage: module_v1_module_pb.ReconfigureServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureServiceResponse|null) => void
  ): UnaryResponse;
  reconfigureService(
    requestMessage: module_v1_module_pb.ReconfigureServiceRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.ReconfigureServiceResponse|null) => void
  ): UnaryResponse;
  removeResource(
    requestMessage: module_v1_module_pb.RemoveResourceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.RemoveResourceResponse|null) => void
  ): UnaryResponse;
  removeResource(
    requestMessage: module_v1_module_pb.RemoveResourceRequest,
    callback: (error: ServiceError|null, responseMessage: module_v1_module_pb.RemoveResourceResponse|null) => void
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

