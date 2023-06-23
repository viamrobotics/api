// package: viam.service.slam.v1
// file: service/slam/v1/slam.proto

import * as service_slam_v1_slam_pb from "../../../service/slam/v1/slam_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SLAMServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof SLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_slam_v1_slam_pb.GetPositionRequest;
  readonly responseType: typeof service_slam_v1_slam_pb.GetPositionResponse;
};

type SLAMServiceGetPointCloudMap = {
  readonly methodName: string;
  readonly service: typeof SLAMService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_slam_v1_slam_pb.GetPointCloudMapRequest;
  readonly responseType: typeof service_slam_v1_slam_pb.GetPointCloudMapResponse;
};

type SLAMServiceGetInternalState = {
  readonly methodName: string;
  readonly service: typeof SLAMService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_slam_v1_slam_pb.GetInternalStateRequest;
  readonly responseType: typeof service_slam_v1_slam_pb.GetInternalStateResponse;
};

type SLAMServiceGetLatestMapInfo = {
  readonly methodName: string;
  readonly service: typeof SLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_slam_v1_slam_pb.GetLatestMapInfoRequest;
  readonly responseType: typeof service_slam_v1_slam_pb.GetLatestMapInfoResponse;
};

type SLAMServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof SLAMService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class SLAMService {
  static readonly serviceName: string;
  static readonly GetPosition: SLAMServiceGetPosition;
  static readonly GetPointCloudMap: SLAMServiceGetPointCloudMap;
  static readonly GetInternalState: SLAMServiceGetInternalState;
  static readonly GetLatestMapInfo: SLAMServiceGetLatestMapInfo;
  static readonly DoCommand: SLAMServiceDoCommand;
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

export class SLAMServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPosition(
    requestMessage: service_slam_v1_slam_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_slam_v1_slam_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: service_slam_v1_slam_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: service_slam_v1_slam_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPointCloudMap(requestMessage: service_slam_v1_slam_pb.GetPointCloudMapRequest, metadata?: grpc.Metadata): ResponseStream<service_slam_v1_slam_pb.GetPointCloudMapResponse>;
  getInternalState(requestMessage: service_slam_v1_slam_pb.GetInternalStateRequest, metadata?: grpc.Metadata): ResponseStream<service_slam_v1_slam_pb.GetInternalStateResponse>;
  getLatestMapInfo(
    requestMessage: service_slam_v1_slam_pb.GetLatestMapInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_slam_v1_slam_pb.GetLatestMapInfoResponse|null) => void
  ): UnaryResponse;
  getLatestMapInfo(
    requestMessage: service_slam_v1_slam_pb.GetLatestMapInfoRequest,
    callback: (error: ServiceError|null, responseMessage: service_slam_v1_slam_pb.GetLatestMapInfoResponse|null) => void
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

