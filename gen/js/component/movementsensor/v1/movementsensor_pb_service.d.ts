// package: viam.component.movementsensor.v1
// file: component/movementsensor/v1/movementsensor.proto

import * as component_movementsensor_v1_movementsensor_pb from "../../../component/movementsensor/v1/movementsensor_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MovementSensorServiceGetLinearVelocity = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetLinearVelocityRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetLinearVelocityResponse;
};

type MovementSensorServiceGetAngularVelocity = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetAngularVelocityRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetAngularVelocityResponse;
};

type MovementSensorServiceGetCompassHeading = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetCompassHeadingRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetCompassHeadingResponse;
};

type MovementSensorServiceGetOrientation = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetOrientationRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetOrientationResponse;
};

type MovementSensorServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetPositionRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetPositionResponse;
};

type MovementSensorServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetPropertiesRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetPropertiesResponse;
};

type MovementSensorServiceGetAccuracy = {
  readonly methodName: string;
  readonly service: typeof MovementSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_movementsensor_v1_movementsensor_pb.GetAccuracyRequest;
  readonly responseType: typeof component_movementsensor_v1_movementsensor_pb.GetAccuracyResponse;
};

export class MovementSensorService {
  static readonly serviceName: string;
  static readonly GetLinearVelocity: MovementSensorServiceGetLinearVelocity;
  static readonly GetAngularVelocity: MovementSensorServiceGetAngularVelocity;
  static readonly GetCompassHeading: MovementSensorServiceGetCompassHeading;
  static readonly GetOrientation: MovementSensorServiceGetOrientation;
  static readonly GetPosition: MovementSensorServiceGetPosition;
  static readonly GetProperties: MovementSensorServiceGetProperties;
  static readonly GetAccuracy: MovementSensorServiceGetAccuracy;
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

export class MovementSensorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getLinearVelocity(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityResponse|null) => void
  ): UnaryResponse;
  getLinearVelocity(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityResponse|null) => void
  ): UnaryResponse;
  getAngularVelocity(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityResponse|null) => void
  ): UnaryResponse;
  getAngularVelocity(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityResponse|null) => void
  ): UnaryResponse;
  getCompassHeading(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingResponse|null) => void
  ): UnaryResponse;
  getCompassHeading(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingResponse|null) => void
  ): UnaryResponse;
  getOrientation(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetOrientationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetOrientationResponse|null) => void
  ): UnaryResponse;
  getOrientation(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetOrientationRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetOrientationResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getAccuracy(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetAccuracyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetAccuracyResponse|null) => void
  ): UnaryResponse;
  getAccuracy(
    requestMessage: component_movementsensor_v1_movementsensor_pb.GetAccuracyRequest,
    callback: (error: ServiceError|null, responseMessage: component_movementsensor_v1_movementsensor_pb.GetAccuracyResponse|null) => void
  ): UnaryResponse;
}

