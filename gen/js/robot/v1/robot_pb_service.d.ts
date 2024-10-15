// package: viam.physicalDevice.v1
// file: physicalDevice/v1/physicalDevice.proto

import * as physicalDevice_v1_physicalDevice_pb from "../../physicalDevice/v1/physicalDevice_pb";
import {grpc} from "@improbable-eng/grpc-web";

type physicalDeviceServiceGetOperations = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.GetOperationsRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.GetOperationsResponse;
};

type physicalDeviceServiceGetSessions = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.GetSessionsRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.GetSessionsResponse;
};

type physicalDeviceServiceResourceNames = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.ResourceNamesRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.ResourceNamesResponse;
};

type physicalDeviceServiceResourceRPCSubtypes = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesResponse;
};

type physicalDeviceServiceCancelOperation = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.CancelOperationRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.CancelOperationResponse;
};

type physicalDeviceServiceBlockForOperation = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.BlockForOperationRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.BlockForOperationResponse;
};

type physicalDeviceServiceDiscoverComponents = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.DiscoverComponentsRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.DiscoverComponentsResponse;
};

type physicalDeviceServiceFrameSystemConfig = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.FrameSystemConfigRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.FrameSystemConfigResponse;
};

type physicalDeviceServiceTransformPose = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.TransformPoseRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.TransformPoseResponse;
};

type physicalDeviceServiceTransformPCD = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.TransformPCDRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.TransformPCDResponse;
};

type physicalDeviceServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.GetStatusRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.GetStatusResponse;
};

type physicalDeviceServiceStreamStatus = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.StreamStatusRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.StreamStatusResponse;
};

type physicalDeviceServiceStopAll = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.StopAllRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.StopAllResponse;
};

type physicalDeviceServiceStartSession = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.StartSessionRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.StartSessionResponse;
};

type physicalDeviceServiceSendSessionHeartbeat = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatResponse;
};

type physicalDeviceServiceLog = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.LogRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.LogResponse;
};

type physicalDeviceServiceGetCloudMetadata = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.GetCloudMetadataRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.GetCloudMetadataResponse;
};

type physicalDeviceServiceRestartModule = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.RestartModuleRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.RestartModuleResponse;
};

type physicalDeviceServiceShutdown = {
  readonly methodName: string;
  readonly service: typeof physicalDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof physicalDevice_v1_physicalDevice_pb.ShutdownRequest;
  readonly responseType: typeof physicalDevice_v1_physicalDevice_pb.ShutdownResponse;
};

export class physicalDeviceService {
  static readonly serviceName: string;
  static readonly GetOperations: physicalDeviceServiceGetOperations;
  static readonly GetSessions: physicalDeviceServiceGetSessions;
  static readonly ResourceNames: physicalDeviceServiceResourceNames;
  static readonly ResourceRPCSubtypes: physicalDeviceServiceResourceRPCSubtypes;
  static readonly CancelOperation: physicalDeviceServiceCancelOperation;
  static readonly BlockForOperation: physicalDeviceServiceBlockForOperation;
  static readonly DiscoverComponents: physicalDeviceServiceDiscoverComponents;
  static readonly FrameSystemConfig: physicalDeviceServiceFrameSystemConfig;
  static readonly TransformPose: physicalDeviceServiceTransformPose;
  static readonly TransformPCD: physicalDeviceServiceTransformPCD;
  static readonly GetStatus: physicalDeviceServiceGetStatus;
  static readonly StreamStatus: physicalDeviceServiceStreamStatus;
  static readonly StopAll: physicalDeviceServiceStopAll;
  static readonly StartSession: physicalDeviceServiceStartSession;
  static readonly SendSessionHeartbeat: physicalDeviceServiceSendSessionHeartbeat;
  static readonly Log: physicalDeviceServiceLog;
  static readonly GetCloudMetadata: physicalDeviceServiceGetCloudMetadata;
  static readonly RestartModule: physicalDeviceServiceRestartModule;
  static readonly Shutdown: physicalDeviceServiceShutdown;
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

export class physicalDeviceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getOperations(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetOperationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetOperationsResponse|null) => void
  ): UnaryResponse;
  getOperations(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetOperationsRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetOperationsResponse|null) => void
  ): UnaryResponse;
  getSessions(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetSessionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetSessionsResponse|null) => void
  ): UnaryResponse;
  getSessions(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetSessionsRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetSessionsResponse|null) => void
  ): UnaryResponse;
  resourceNames(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ResourceNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ResourceNamesResponse|null) => void
  ): UnaryResponse;
  resourceNames(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ResourceNamesRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ResourceNamesResponse|null) => void
  ): UnaryResponse;
  resourceRPCSubtypes(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesResponse|null) => void
  ): UnaryResponse;
  resourceRPCSubtypes(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesResponse|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: physicalDevice_v1_physicalDevice_pb.CancelOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.CancelOperationResponse|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: physicalDevice_v1_physicalDevice_pb.CancelOperationRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.CancelOperationResponse|null) => void
  ): UnaryResponse;
  blockForOperation(
    requestMessage: physicalDevice_v1_physicalDevice_pb.BlockForOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.BlockForOperationResponse|null) => void
  ): UnaryResponse;
  blockForOperation(
    requestMessage: physicalDevice_v1_physicalDevice_pb.BlockForOperationRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.BlockForOperationResponse|null) => void
  ): UnaryResponse;
  discoverComponents(
    requestMessage: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsResponse|null) => void
  ): UnaryResponse;
  discoverComponents(
    requestMessage: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsResponse|null) => void
  ): UnaryResponse;
  frameSystemConfig(
    requestMessage: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigResponse|null) => void
  ): UnaryResponse;
  frameSystemConfig(
    requestMessage: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigResponse|null) => void
  ): UnaryResponse;
  transformPose(
    requestMessage: physicalDevice_v1_physicalDevice_pb.TransformPoseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.TransformPoseResponse|null) => void
  ): UnaryResponse;
  transformPose(
    requestMessage: physicalDevice_v1_physicalDevice_pb.TransformPoseRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.TransformPoseResponse|null) => void
  ): UnaryResponse;
  transformPCD(
    requestMessage: physicalDevice_v1_physicalDevice_pb.TransformPCDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.TransformPCDResponse|null) => void
  ): UnaryResponse;
  transformPCD(
    requestMessage: physicalDevice_v1_physicalDevice_pb.TransformPCDRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.TransformPCDResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetStatusRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
  streamStatus(requestMessage: physicalDevice_v1_physicalDevice_pb.StreamStatusRequest, metadata?: grpc.Metadata): ResponseStream<physicalDevice_v1_physicalDevice_pb.StreamStatusResponse>;
  stopAll(
    requestMessage: physicalDevice_v1_physicalDevice_pb.StopAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.StopAllResponse|null) => void
  ): UnaryResponse;
  stopAll(
    requestMessage: physicalDevice_v1_physicalDevice_pb.StopAllRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.StopAllResponse|null) => void
  ): UnaryResponse;
  startSession(
    requestMessage: physicalDevice_v1_physicalDevice_pb.StartSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.StartSessionResponse|null) => void
  ): UnaryResponse;
  startSession(
    requestMessage: physicalDevice_v1_physicalDevice_pb.StartSessionRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.StartSessionResponse|null) => void
  ): UnaryResponse;
  sendSessionHeartbeat(
    requestMessage: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatResponse|null) => void
  ): UnaryResponse;
  sendSessionHeartbeat(
    requestMessage: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: physicalDevice_v1_physicalDevice_pb.LogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.LogResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: physicalDevice_v1_physicalDevice_pb.LogRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.LogResponse|null) => void
  ): UnaryResponse;
  getCloudMetadata(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataResponse|null) => void
  ): UnaryResponse;
  getCloudMetadata(
    requestMessage: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataResponse|null) => void
  ): UnaryResponse;
  restartModule(
    requestMessage: physicalDevice_v1_physicalDevice_pb.RestartModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.RestartModuleResponse|null) => void
  ): UnaryResponse;
  restartModule(
    requestMessage: physicalDevice_v1_physicalDevice_pb.RestartModuleRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.RestartModuleResponse|null) => void
  ): UnaryResponse;
  shutdown(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ShutdownRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ShutdownResponse|null) => void
  ): UnaryResponse;
  shutdown(
    requestMessage: physicalDevice_v1_physicalDevice_pb.ShutdownRequest,
    callback: (error: ServiceError|null, responseMessage: physicalDevice_v1_physicalDevice_pb.ShutdownResponse|null) => void
  ): UnaryResponse;
}

