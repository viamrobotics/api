// package: viam.robot.v1
// file: robot/v1/robot.proto

import * as robot_v1_robot_pb from "../../robot/v1/robot_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RobotServiceGetOperations = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetOperationsRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetOperationsResponse;
};

type RobotServiceGetSessions = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetSessionsRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetSessionsResponse;
};

type RobotServiceResourceNames = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.ResourceNamesRequest;
  readonly responseType: typeof robot_v1_robot_pb.ResourceNamesResponse;
};

type RobotServiceResourceRPCSubtypes = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.ResourceRPCSubtypesRequest;
  readonly responseType: typeof robot_v1_robot_pb.ResourceRPCSubtypesResponse;
};

type RobotServiceCancelOperation = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.CancelOperationRequest;
  readonly responseType: typeof robot_v1_robot_pb.CancelOperationResponse;
};

type RobotServiceBlockForOperation = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.BlockForOperationRequest;
  readonly responseType: typeof robot_v1_robot_pb.BlockForOperationResponse;
};

type RobotServiceGetModelsFromModules = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetModelsFromModulesRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetModelsFromModulesResponse;
};

type RobotServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetStatusRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetStatusResponse;
};

type RobotServiceStreamStatus = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof robot_v1_robot_pb.StreamStatusRequest;
  readonly responseType: typeof robot_v1_robot_pb.StreamStatusResponse;
};

type RobotServiceStopAll = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.StopAllRequest;
  readonly responseType: typeof robot_v1_robot_pb.StopAllResponse;
};

type RobotServiceStartSession = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.StartSessionRequest;
  readonly responseType: typeof robot_v1_robot_pb.StartSessionResponse;
};

type RobotServiceSendSessionHeartbeat = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.SendSessionHeartbeatRequest;
  readonly responseType: typeof robot_v1_robot_pb.SendSessionHeartbeatResponse;
};

type RobotServiceLog = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.LogRequest;
  readonly responseType: typeof robot_v1_robot_pb.LogResponse;
};

type RobotServiceGetCloudMetadata = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetCloudMetadataRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetCloudMetadataResponse;
};

type RobotServiceRestartModule = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.RestartModuleRequest;
  readonly responseType: typeof robot_v1_robot_pb.RestartModuleResponse;
};

type RobotServiceShutdown = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.ShutdownRequest;
  readonly responseType: typeof robot_v1_robot_pb.ShutdownResponse;
};

type RobotServiceGetMachineStatus = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetMachineStatusRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetMachineStatusResponse;
};

type RobotServiceGetVersion = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetVersionRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetVersionResponse;
};

type RobotServiceTunnel = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof robot_v1_robot_pb.TunnelRequest;
  readonly responseType: typeof robot_v1_robot_pb.TunnelResponse;
};

type RobotServiceListTunnels = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.ListTunnelsRequest;
  readonly responseType: typeof robot_v1_robot_pb.ListTunnelsResponse;
};

type RobotServiceFrameSystemConfig = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.FrameSystemConfigRequest;
  readonly responseType: typeof robot_v1_robot_pb.FrameSystemConfigResponse;
};

type RobotServiceGetPose = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.GetPoseRequest;
  readonly responseType: typeof robot_v1_robot_pb.GetPoseResponse;
};

type RobotServiceTransformPose = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.TransformPoseRequest;
  readonly responseType: typeof robot_v1_robot_pb.TransformPoseResponse;
};

type RobotServiceTransformPCD = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.TransformPCDRequest;
  readonly responseType: typeof robot_v1_robot_pb.TransformPCDResponse;
};

export class RobotService {
  static readonly serviceName: string;
  static readonly GetOperations: RobotServiceGetOperations;
  static readonly GetSessions: RobotServiceGetSessions;
  static readonly ResourceNames: RobotServiceResourceNames;
  static readonly ResourceRPCSubtypes: RobotServiceResourceRPCSubtypes;
  static readonly CancelOperation: RobotServiceCancelOperation;
  static readonly BlockForOperation: RobotServiceBlockForOperation;
  static readonly GetModelsFromModules: RobotServiceGetModelsFromModules;
  static readonly GetStatus: RobotServiceGetStatus;
  static readonly StreamStatus: RobotServiceStreamStatus;
  static readonly StopAll: RobotServiceStopAll;
  static readonly StartSession: RobotServiceStartSession;
  static readonly SendSessionHeartbeat: RobotServiceSendSessionHeartbeat;
  static readonly Log: RobotServiceLog;
  static readonly GetCloudMetadata: RobotServiceGetCloudMetadata;
  static readonly RestartModule: RobotServiceRestartModule;
  static readonly Shutdown: RobotServiceShutdown;
  static readonly GetMachineStatus: RobotServiceGetMachineStatus;
  static readonly GetVersion: RobotServiceGetVersion;
  static readonly Tunnel: RobotServiceTunnel;
  static readonly ListTunnels: RobotServiceListTunnels;
  static readonly FrameSystemConfig: RobotServiceFrameSystemConfig;
  static readonly GetPose: RobotServiceGetPose;
  static readonly TransformPose: RobotServiceTransformPose;
  static readonly TransformPCD: RobotServiceTransformPCD;
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

export class RobotServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getOperations(
    requestMessage: robot_v1_robot_pb.GetOperationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetOperationsResponse|null) => void
  ): UnaryResponse;
  getOperations(
    requestMessage: robot_v1_robot_pb.GetOperationsRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetOperationsResponse|null) => void
  ): UnaryResponse;
  getSessions(
    requestMessage: robot_v1_robot_pb.GetSessionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetSessionsResponse|null) => void
  ): UnaryResponse;
  getSessions(
    requestMessage: robot_v1_robot_pb.GetSessionsRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetSessionsResponse|null) => void
  ): UnaryResponse;
  resourceNames(
    requestMessage: robot_v1_robot_pb.ResourceNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ResourceNamesResponse|null) => void
  ): UnaryResponse;
  resourceNames(
    requestMessage: robot_v1_robot_pb.ResourceNamesRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ResourceNamesResponse|null) => void
  ): UnaryResponse;
  resourceRPCSubtypes(
    requestMessage: robot_v1_robot_pb.ResourceRPCSubtypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ResourceRPCSubtypesResponse|null) => void
  ): UnaryResponse;
  resourceRPCSubtypes(
    requestMessage: robot_v1_robot_pb.ResourceRPCSubtypesRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ResourceRPCSubtypesResponse|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: robot_v1_robot_pb.CancelOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.CancelOperationResponse|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: robot_v1_robot_pb.CancelOperationRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.CancelOperationResponse|null) => void
  ): UnaryResponse;
  blockForOperation(
    requestMessage: robot_v1_robot_pb.BlockForOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.BlockForOperationResponse|null) => void
  ): UnaryResponse;
  blockForOperation(
    requestMessage: robot_v1_robot_pb.BlockForOperationRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.BlockForOperationResponse|null) => void
  ): UnaryResponse;
  getModelsFromModules(
    requestMessage: robot_v1_robot_pb.GetModelsFromModulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetModelsFromModulesResponse|null) => void
  ): UnaryResponse;
  getModelsFromModules(
    requestMessage: robot_v1_robot_pb.GetModelsFromModulesRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetModelsFromModulesResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: robot_v1_robot_pb.GetStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: robot_v1_robot_pb.GetStatusRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
  streamStatus(requestMessage: robot_v1_robot_pb.StreamStatusRequest, metadata?: grpc.Metadata): ResponseStream<robot_v1_robot_pb.StreamStatusResponse>;
  stopAll(
    requestMessage: robot_v1_robot_pb.StopAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.StopAllResponse|null) => void
  ): UnaryResponse;
  stopAll(
    requestMessage: robot_v1_robot_pb.StopAllRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.StopAllResponse|null) => void
  ): UnaryResponse;
  startSession(
    requestMessage: robot_v1_robot_pb.StartSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.StartSessionResponse|null) => void
  ): UnaryResponse;
  startSession(
    requestMessage: robot_v1_robot_pb.StartSessionRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.StartSessionResponse|null) => void
  ): UnaryResponse;
  sendSessionHeartbeat(
    requestMessage: robot_v1_robot_pb.SendSessionHeartbeatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.SendSessionHeartbeatResponse|null) => void
  ): UnaryResponse;
  sendSessionHeartbeat(
    requestMessage: robot_v1_robot_pb.SendSessionHeartbeatRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.SendSessionHeartbeatResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: robot_v1_robot_pb.LogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.LogResponse|null) => void
  ): UnaryResponse;
  log(
    requestMessage: robot_v1_robot_pb.LogRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.LogResponse|null) => void
  ): UnaryResponse;
  getCloudMetadata(
    requestMessage: robot_v1_robot_pb.GetCloudMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetCloudMetadataResponse|null) => void
  ): UnaryResponse;
  getCloudMetadata(
    requestMessage: robot_v1_robot_pb.GetCloudMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetCloudMetadataResponse|null) => void
  ): UnaryResponse;
  restartModule(
    requestMessage: robot_v1_robot_pb.RestartModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.RestartModuleResponse|null) => void
  ): UnaryResponse;
  restartModule(
    requestMessage: robot_v1_robot_pb.RestartModuleRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.RestartModuleResponse|null) => void
  ): UnaryResponse;
  shutdown(
    requestMessage: robot_v1_robot_pb.ShutdownRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ShutdownResponse|null) => void
  ): UnaryResponse;
  shutdown(
    requestMessage: robot_v1_robot_pb.ShutdownRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ShutdownResponse|null) => void
  ): UnaryResponse;
  getMachineStatus(
    requestMessage: robot_v1_robot_pb.GetMachineStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetMachineStatusResponse|null) => void
  ): UnaryResponse;
  getMachineStatus(
    requestMessage: robot_v1_robot_pb.GetMachineStatusRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetMachineStatusResponse|null) => void
  ): UnaryResponse;
  getVersion(
    requestMessage: robot_v1_robot_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetVersionResponse|null) => void
  ): UnaryResponse;
  getVersion(
    requestMessage: robot_v1_robot_pb.GetVersionRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetVersionResponse|null) => void
  ): UnaryResponse;
  tunnel(metadata?: grpc.Metadata): BidirectionalStream<robot_v1_robot_pb.TunnelRequest, robot_v1_robot_pb.TunnelResponse>;
  listTunnels(
    requestMessage: robot_v1_robot_pb.ListTunnelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ListTunnelsResponse|null) => void
  ): UnaryResponse;
  listTunnels(
    requestMessage: robot_v1_robot_pb.ListTunnelsRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.ListTunnelsResponse|null) => void
  ): UnaryResponse;
  frameSystemConfig(
    requestMessage: robot_v1_robot_pb.FrameSystemConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.FrameSystemConfigResponse|null) => void
  ): UnaryResponse;
  frameSystemConfig(
    requestMessage: robot_v1_robot_pb.FrameSystemConfigRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.FrameSystemConfigResponse|null) => void
  ): UnaryResponse;
  getPose(
    requestMessage: robot_v1_robot_pb.GetPoseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetPoseResponse|null) => void
  ): UnaryResponse;
  getPose(
    requestMessage: robot_v1_robot_pb.GetPoseRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.GetPoseResponse|null) => void
  ): UnaryResponse;
  transformPose(
    requestMessage: robot_v1_robot_pb.TransformPoseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPoseResponse|null) => void
  ): UnaryResponse;
  transformPose(
    requestMessage: robot_v1_robot_pb.TransformPoseRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPoseResponse|null) => void
  ): UnaryResponse;
  transformPCD(
    requestMessage: robot_v1_robot_pb.TransformPCDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPCDResponse|null) => void
  ): UnaryResponse;
  transformPCD(
    requestMessage: robot_v1_robot_pb.TransformPCDRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPCDResponse|null) => void
  ): UnaryResponse;
}

