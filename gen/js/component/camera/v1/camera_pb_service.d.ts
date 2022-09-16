// package: viam.component.camera.v1
// file: component/camera/v1/camera.proto

import * as component_camera_v1_camera_pb from "../../../component/camera/v1/camera_pb";
import * as google_api_httpbody_pb from "../../../google/api/httpbody_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CameraServiceGetImage = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_camera_v1_camera_pb.GetImageRequest;
  readonly responseType: typeof component_camera_v1_camera_pb.GetImageResponse;
};

type CameraServiceRenderFrame = {
  readonly methodName: string;
  readonly service: typeof CameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_camera_v1_camera_pb.RenderFrameRequest;
  readonly responseType: typeof google_api_httpbody_pb.HttpBody;
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

export class CameraService {
  static readonly serviceName: string;
  static readonly GetImage: CameraServiceGetImage;
  static readonly RenderFrame: CameraServiceRenderFrame;
  static readonly GetPointCloud: CameraServiceGetPointCloud;
  static readonly GetProperties: CameraServiceGetProperties;
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
  getImage(
    requestMessage: component_camera_v1_camera_pb.GetImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetImageResponse|null) => void
  ): UnaryResponse;
  getImage(
    requestMessage: component_camera_v1_camera_pb.GetImageRequest,
    callback: (error: ServiceError|null, responseMessage: component_camera_v1_camera_pb.GetImageResponse|null) => void
  ): UnaryResponse;
  renderFrame(
    requestMessage: component_camera_v1_camera_pb.RenderFrameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_api_httpbody_pb.HttpBody|null) => void
  ): UnaryResponse;
  renderFrame(
    requestMessage: component_camera_v1_camera_pb.RenderFrameRequest,
    callback: (error: ServiceError|null, responseMessage: google_api_httpbody_pb.HttpBody|null) => void
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
}

