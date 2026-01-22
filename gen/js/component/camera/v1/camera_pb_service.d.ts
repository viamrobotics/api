// package: viam.component.camera.v1
// file: component/camera/v1/camera.proto

import * as component_camera_v1_camera_pb from "../../../component/camera/v1/camera_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CameraServiceGetImages = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_camera_v1_camera_pb.GetImagesRequest;
  readonly responseType: typeof component_camera_v1_camera_pb.GetImagesResponse;
};

type CameraServiceGetPointCloud = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_camera_v1_camera_pb.GetPointCloudRequest;
  readonly responseType: typeof component_camera_v1_camera_pb.GetPointCloudResponse;
};

type CameraServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_camera_v1_camera_pb.GetPropertiesRequest;
  readonly responseType: typeof component_camera_v1_camera_pb.GetPropertiesResponse;
};

type CameraServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type CameraServiceGetGeometries = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetGeometriesRequest;
  readonly responseType: typeof common_v1_common_pb.GetGeometriesResponse;
};

export class CameraService {
  static readonly serviceName: string;
  static readonly GetImages: CameraServiceGetImages;
  static readonly GetPointCloud: CameraServiceGetPointCloud;
  static readonly GetProperties: CameraServiceGetProperties;
  static readonly DoCommand: CameraServiceDoCommand;
  static readonly GetGeometries: CameraServiceGetGeometries;
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

export class CameraServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getImages(
    requestMessage: component_camera_v1_camera_pb.GetImagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetImagesResponse|null) => void
  ): UnaryResponse;
  getImages(
    requestMessage: component_camera_v1_camera_pb.GetImagesRequest,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetImagesResponse|null) => void
  ): UnaryResponse;
  getPointCloud(
    requestMessage: component_camera_v1_camera_pb.GetPointCloudRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetPointCloudResponse|null) => void
  ): UnaryResponse;
  getPointCloud(
    requestMessage: component_camera_v1_camera_pb.GetPointCloudRequest,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetPointCloudResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_camera_v1_camera_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_camera_v1_camera_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetPropertiesResponse|null) => void
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
  getGeometries(
    requestMessage: common_v1_common_pb.GetGeometriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetGeometriesResponse|null) => void
  ): UnaryResponse;
  getGeometries(
    requestMessage: common_v1_common_pb.GetGeometriesRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetGeometriesResponse|null) => void
  ): UnaryResponse;
}

