// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

import * as service_vision_v1_vision_pb from "../../../service/vision/v1/vision_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VisionServiceGetDetectionsFromCamera = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetDetectionsFromCameraRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetDetectionsFromCameraResponse;
};

type VisionServiceGetDetections = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetDetectionsRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetDetectionsResponse;
};

type VisionServiceGetClassificationsFromCamera = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetClassificationsFromCameraRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetClassificationsFromCameraResponse;
};

type VisionServiceGetClassifications = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetClassificationsRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetClassificationsResponse;
};

type VisionServiceGetObjectPointClouds = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetObjectPointCloudsRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetObjectPointCloudsResponse;
};

type VisionServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class VisionService {
  static readonly serviceName: string;
  static readonly GetDetectionsFromCamera: VisionServiceGetDetectionsFromCamera;
  static readonly GetDetections: VisionServiceGetDetections;
  static readonly GetClassificationsFromCamera: VisionServiceGetClassificationsFromCamera;
  static readonly GetClassifications: VisionServiceGetClassifications;
  static readonly GetObjectPointClouds: VisionServiceGetObjectPointClouds;
  static readonly DoCommand: VisionServiceDoCommand;
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

export class VisionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getDetectionsFromCamera(
    requestMessage: service_vision_v1_vision_pb.GetDetectionsFromCameraRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectionsFromCameraResponse|null) => void
  ): UnaryResponse;
  getDetectionsFromCamera(
    requestMessage: service_vision_v1_vision_pb.GetDetectionsFromCameraRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectionsFromCameraResponse|null) => void
  ): UnaryResponse;
  getDetections(
    requestMessage: service_vision_v1_vision_pb.GetDetectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectionsResponse|null) => void
  ): UnaryResponse;
  getDetections(
    requestMessage: service_vision_v1_vision_pb.GetDetectionsRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectionsResponse|null) => void
  ): UnaryResponse;
  getClassificationsFromCamera(
    requestMessage: service_vision_v1_vision_pb.GetClassificationsFromCameraRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassificationsFromCameraResponse|null) => void
  ): UnaryResponse;
  getClassificationsFromCamera(
    requestMessage: service_vision_v1_vision_pb.GetClassificationsFromCameraRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassificationsFromCameraResponse|null) => void
  ): UnaryResponse;
  getClassifications(
    requestMessage: service_vision_v1_vision_pb.GetClassificationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassificationsResponse|null) => void
  ): UnaryResponse;
  getClassifications(
    requestMessage: service_vision_v1_vision_pb.GetClassificationsRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassificationsResponse|null) => void
  ): UnaryResponse;
  getObjectPointClouds(
    requestMessage: service_vision_v1_vision_pb.GetObjectPointCloudsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetObjectPointCloudsResponse|null) => void
  ): UnaryResponse;
  getObjectPointClouds(
    requestMessage: service_vision_v1_vision_pb.GetObjectPointCloudsRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetObjectPointCloudsResponse|null) => void
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

