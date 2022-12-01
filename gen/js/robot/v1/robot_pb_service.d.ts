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

type RobotServiceDiscoverComponents = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.DiscoverComponentsRequest;
  readonly responseType: typeof robot_v1_robot_pb.DiscoverComponentsResponse;
};

type RobotServiceFrameSystemConfig = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.FrameSystemConfigRequest;
  readonly responseType: typeof robot_v1_robot_pb.FrameSystemConfigResponse;
};

type RobotServiceTransformPose = {
  readonly methodName: string;
  readonly service: typeof RobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robot_v1_robot_pb.TransformPoseRequest;
  readonly responseType: typeof robot_v1_robot_pb.TransformPoseResponse;
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

export class RobotService {
  static readonly serviceName: string;
  static readonly GetOperations: RobotServiceGetOperations;
  static readonly GetSessions: RobotServiceGetSessions;
  static readonly ResourceNames: RobotServiceResourceNames;
  static readonly ResourceRPCSubtypes: RobotServiceResourceRPCSubtypes;
  static readonly CancelOperation: RobotServiceCancelOperation;
  static readonly BlockForOperation: RobotServiceBlockForOperation;
  static readonly DiscoverComponents: RobotServiceDiscoverComponents;
  static readonly FrameSystemConfig: RobotServiceFrameSystemConfig;
  static readonly TransformPose: RobotServiceTransformPose;
  static readonly GetStatus: RobotServiceGetStatus;
  static readonly StreamStatus: RobotServiceStreamStatus;
  static readonly StopAll: RobotServiceStopAll;
  static readonly StartSession: RobotServiceStartSession;
  static readonly SendSessionHeartbeat: RobotServiceSendSessionHeartbeat;
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
  discoverComponents(
    requestMessage: robot_v1_robot_pb.DiscoverComponentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.DiscoverComponentsResponse|null) => void
  ): UnaryResponse;
  discoverComponents(
    requestMessage: robot_v1_robot_pb.DiscoverComponentsRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.DiscoverComponentsResponse|null) => void
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
  transformPose(
    requestMessage: robot_v1_robot_pb.TransformPoseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPoseResponse|null) => void
  ): UnaryResponse;
  transformPose(
    requestMessage: robot_v1_robot_pb.TransformPoseRequest,
    callback: (error: ServiceError|null, responseMessage: robot_v1_robot_pb.TransformPoseResponse|null) => void
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
}

