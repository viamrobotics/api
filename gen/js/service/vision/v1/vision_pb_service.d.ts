// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

import * as service_vision_v1_vision_pb from "../../../service/vision/v1/vision_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VisionServiceGetModelParameterSchema = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetModelParameterSchemaRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetModelParameterSchemaResponse;
};

type VisionServiceGetDetectorNames = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetDetectorNamesRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetDetectorNamesResponse;
};

type VisionServiceAddDetector = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.AddDetectorRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.AddDetectorResponse;
};

type VisionServiceRemoveDetector = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.RemoveDetectorRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.RemoveDetectorResponse;
};

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

type VisionServiceGetClassifierNames = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetClassifierNamesRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetClassifierNamesResponse;
};

type VisionServiceAddClassifier = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.AddClassifierRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.AddClassifierResponse;
};

type VisionServiceRemoveClassifier = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.RemoveClassifierRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.RemoveClassifierResponse;
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

type VisionServiceGetSegmenterNames = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetSegmenterNamesRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetSegmenterNamesResponse;
};

type VisionServiceAddSegmenter = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.AddSegmenterRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.AddSegmenterResponse;
};

type VisionServiceRemoveSegmenter = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.RemoveSegmenterRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.RemoveSegmenterResponse;
};

type VisionServiceGetObjectPointClouds = {
  readonly methodName: string;
  readonly service: typeof VisionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_vision_v1_vision_pb.GetObjectPointCloudsRequest;
  readonly responseType: typeof service_vision_v1_vision_pb.GetObjectPointCloudsResponse;
};

export class VisionService {
  static readonly serviceName: string;
  static readonly GetModelParameterSchema: VisionServiceGetModelParameterSchema;
  static readonly GetDetectorNames: VisionServiceGetDetectorNames;
  static readonly AddDetector: VisionServiceAddDetector;
  static readonly RemoveDetector: VisionServiceRemoveDetector;
  static readonly GetDetectionsFromCamera: VisionServiceGetDetectionsFromCamera;
  static readonly GetDetections: VisionServiceGetDetections;
  static readonly GetClassifierNames: VisionServiceGetClassifierNames;
  static readonly AddClassifier: VisionServiceAddClassifier;
  static readonly RemoveClassifier: VisionServiceRemoveClassifier;
  static readonly GetClassificationsFromCamera: VisionServiceGetClassificationsFromCamera;
  static readonly GetClassifications: VisionServiceGetClassifications;
  static readonly GetSegmenterNames: VisionServiceGetSegmenterNames;
  static readonly AddSegmenter: VisionServiceAddSegmenter;
  static readonly RemoveSegmenter: VisionServiceRemoveSegmenter;
  static readonly GetObjectPointClouds: VisionServiceGetObjectPointClouds;
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
  getModelParameterSchema(
    requestMessage: service_vision_v1_vision_pb.GetModelParameterSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetModelParameterSchemaResponse|null) => void
  ): UnaryResponse;
  getModelParameterSchema(
    requestMessage: service_vision_v1_vision_pb.GetModelParameterSchemaRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetModelParameterSchemaResponse|null) => void
  ): UnaryResponse;
  getDetectorNames(
    requestMessage: service_vision_v1_vision_pb.GetDetectorNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectorNamesResponse|null) => void
  ): UnaryResponse;
  getDetectorNames(
    requestMessage: service_vision_v1_vision_pb.GetDetectorNamesRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetDetectorNamesResponse|null) => void
  ): UnaryResponse;
  addDetector(
    requestMessage: service_vision_v1_vision_pb.AddDetectorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddDetectorResponse|null) => void
  ): UnaryResponse;
  addDetector(
    requestMessage: service_vision_v1_vision_pb.AddDetectorRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddDetectorResponse|null) => void
  ): UnaryResponse;
  removeDetector(
    requestMessage: service_vision_v1_vision_pb.RemoveDetectorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveDetectorResponse|null) => void
  ): UnaryResponse;
  removeDetector(
    requestMessage: service_vision_v1_vision_pb.RemoveDetectorRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveDetectorResponse|null) => void
  ): UnaryResponse;
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
  getClassifierNames(
    requestMessage: service_vision_v1_vision_pb.GetClassifierNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassifierNamesResponse|null) => void
  ): UnaryResponse;
  getClassifierNames(
    requestMessage: service_vision_v1_vision_pb.GetClassifierNamesRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetClassifierNamesResponse|null) => void
  ): UnaryResponse;
  addClassifier(
    requestMessage: service_vision_v1_vision_pb.AddClassifierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddClassifierResponse|null) => void
  ): UnaryResponse;
  addClassifier(
    requestMessage: service_vision_v1_vision_pb.AddClassifierRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddClassifierResponse|null) => void
  ): UnaryResponse;
  removeClassifier(
    requestMessage: service_vision_v1_vision_pb.RemoveClassifierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveClassifierResponse|null) => void
  ): UnaryResponse;
  removeClassifier(
    requestMessage: service_vision_v1_vision_pb.RemoveClassifierRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveClassifierResponse|null) => void
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
  getSegmenterNames(
    requestMessage: service_vision_v1_vision_pb.GetSegmenterNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetSegmenterNamesResponse|null) => void
  ): UnaryResponse;
  getSegmenterNames(
    requestMessage: service_vision_v1_vision_pb.GetSegmenterNamesRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.GetSegmenterNamesResponse|null) => void
  ): UnaryResponse;
  addSegmenter(
    requestMessage: service_vision_v1_vision_pb.AddSegmenterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddSegmenterResponse|null) => void
  ): UnaryResponse;
  addSegmenter(
    requestMessage: service_vision_v1_vision_pb.AddSegmenterRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.AddSegmenterResponse|null) => void
  ): UnaryResponse;
  removeSegmenter(
    requestMessage: service_vision_v1_vision_pb.RemoveSegmenterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveSegmenterResponse|null) => void
  ): UnaryResponse;
  removeSegmenter(
    requestMessage: service_vision_v1_vision_pb.RemoveSegmenterRequest,
    callback: (error: ServiceError|null, responseMessage: service_vision_v1_vision_pb.RemoveSegmenterResponse|null) => void
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
}

