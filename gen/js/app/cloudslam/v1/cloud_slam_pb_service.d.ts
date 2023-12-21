// package: viam.app.cloudslam.v1
// file: app/cloudslam/v1/cloud_slam.proto

import * as app_cloudslam_v1_cloud_slam_pb from "../../../app/cloudslam/v1/cloud_slam_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CloudSLAMServiceStartMappingSession = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.StartMappingSessionRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.StartMappingSessionResponse;
};

type CloudSLAMServiceGetActiveMappingSessionsForRobot = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotResponse;
};

type CloudSLAMServiceGetMappingSessionPointCloud = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudResponse;
};

type CloudSLAMServiceListMappingSessions = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsResponse;
};

type CloudSLAMServiceStopMappingSession = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.StopMappingSessionRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.StopMappingSessionResponse;
};

type CloudSLAMServiceGetMappingSessionMetadataByID = {
  readonly methodName: string;
  readonly service: typeof CloudSLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDRequest;
  readonly responseType: typeof app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDResponse;
};

export class CloudSLAMService {
  static readonly serviceName: string;
  static readonly StartMappingSession: CloudSLAMServiceStartMappingSession;
  static readonly GetActiveMappingSessionsForRobot: CloudSLAMServiceGetActiveMappingSessionsForRobot;
  static readonly GetMappingSessionPointCloud: CloudSLAMServiceGetMappingSessionPointCloud;
  static readonly ListMappingSessions: CloudSLAMServiceListMappingSessions;
  static readonly StopMappingSession: CloudSLAMServiceStopMappingSession;
  static readonly GetMappingSessionMetadataByID: CloudSLAMServiceGetMappingSessionMetadataByID;
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

export class CloudSLAMServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startMappingSession(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionResponse|null) => void
  ): UnaryResponse;
  startMappingSession(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionResponse|null) => void
  ): UnaryResponse;
  getActiveMappingSessionsForRobot(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotResponse|null) => void
  ): UnaryResponse;
  getActiveMappingSessionsForRobot(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotResponse|null) => void
  ): UnaryResponse;
  getMappingSessionPointCloud(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudResponse|null) => void
  ): UnaryResponse;
  getMappingSessionPointCloud(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudResponse|null) => void
  ): UnaryResponse;
  listMappingSessions(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsResponse|null) => void
  ): UnaryResponse;
  listMappingSessions(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsResponse|null) => void
  ): UnaryResponse;
  stopMappingSession(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionResponse|null) => void
  ): UnaryResponse;
  stopMappingSession(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionResponse|null) => void
  ): UnaryResponse;
  getMappingSessionMetadataByID(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDResponse|null) => void
  ): UnaryResponse;
  getMappingSessionMetadataByID(
    requestMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDRequest,
    callback: (error: ServiceError|null, responseMessage: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionMetadataByIDResponse|null) => void
  ): UnaryResponse;
}

