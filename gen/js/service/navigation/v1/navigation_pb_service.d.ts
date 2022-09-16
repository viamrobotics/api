// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

import * as service_navigation_v1_navigation_pb from "../../../service/navigation/v1/navigation_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NavigationServiceGetMode = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetModeRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetModeResponse;
};

type NavigationServiceSetMode = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.SetModeRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.SetModeResponse;
};

type NavigationServiceGetLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetLocationResponse;
};

type NavigationServiceGetWaypoints = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetWaypointsRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetWaypointsResponse;
};

type NavigationServiceAddWaypoint = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.AddWaypointRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.AddWaypointResponse;
};

type NavigationServiceRemoveWaypoint = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.RemoveWaypointRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.RemoveWaypointResponse;
};

export class NavigationService {
  static readonly serviceName: string;
  static readonly GetMode: NavigationServiceGetMode;
  static readonly SetMode: NavigationServiceSetMode;
  static readonly GetLocation: NavigationServiceGetLocation;
  static readonly GetWaypoints: NavigationServiceGetWaypoints;
  static readonly AddWaypoint: NavigationServiceAddWaypoint;
  static readonly RemoveWaypoint: NavigationServiceRemoveWaypoint;
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

export class NavigationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMode(
    requestMessage: service_navigation_v1_navigation_pb.GetModeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetModeResponse|null) => void
  ): UnaryResponse;
  getMode(
    requestMessage: service_navigation_v1_navigation_pb.GetModeRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetModeResponse|null) => void
  ): UnaryResponse;
  setMode(
    requestMessage: service_navigation_v1_navigation_pb.SetModeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.SetModeResponse|null) => void
  ): UnaryResponse;
  setMode(
    requestMessage: service_navigation_v1_navigation_pb.SetModeRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.SetModeResponse|null) => void
  ): UnaryResponse;
  getLocation(
    requestMessage: service_navigation_v1_navigation_pb.GetLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetLocationResponse|null) => void
  ): UnaryResponse;
  getLocation(
    requestMessage: service_navigation_v1_navigation_pb.GetLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetLocationResponse|null) => void
  ): UnaryResponse;
  getWaypoints(
    requestMessage: service_navigation_v1_navigation_pb.GetWaypointsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetWaypointsResponse|null) => void
  ): UnaryResponse;
  getWaypoints(
    requestMessage: service_navigation_v1_navigation_pb.GetWaypointsRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetWaypointsResponse|null) => void
  ): UnaryResponse;
  addWaypoint(
    requestMessage: service_navigation_v1_navigation_pb.AddWaypointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddWaypointResponse|null) => void
  ): UnaryResponse;
  addWaypoint(
    requestMessage: service_navigation_v1_navigation_pb.AddWaypointRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddWaypointResponse|null) => void
  ): UnaryResponse;
  removeWaypoint(
    requestMessage: service_navigation_v1_navigation_pb.RemoveWaypointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.RemoveWaypointResponse|null) => void
  ): UnaryResponse;
  removeWaypoint(
    requestMessage: service_navigation_v1_navigation_pb.RemoveWaypointRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.RemoveWaypointResponse|null) => void
  ): UnaryResponse;
}

