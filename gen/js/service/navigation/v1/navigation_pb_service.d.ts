// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

import * as service_navigation_v1_navigation_pb from "../../../service/navigation/v1/navigation_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NavigationServiceAddLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.AddLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.AddLocationResponse;
};

type NavigationServiceGetLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetLocationResponse;
};

type NavigationServiceListLocations = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.ListLocationsRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.ListLocationsResponse;
};

type NavigationServiceUpdateLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.UpdateLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.UpdateLocationResponse;
};

type NavigationServiceDeleteLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.DeleteLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.DeleteLocationResponse;
};

type NavigationServiceAddRoute = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.AddRouteRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.AddRouteResponse;
};

type NavigationServiceGetRoute = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetRouteRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetRouteResponse;
};

type NavigationServiceListRoutes = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.ListRoutesRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.ListRoutesResponse;
};

type NavigationServiceUpdateRoute = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.UpdateRouteRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.UpdateRouteResponse;
};

type NavigationServiceDeleteRoute = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.DeleteRouteRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.DeleteRouteResponse;
};

type NavigationServiceAddZone = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.AddZoneRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.AddZoneResponse;
};

type NavigationServiceGetZone = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetZoneRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetZoneResponse;
};

type NavigationServiceListZones = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.ListZonesRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.ListZonesResponse;
};

type NavigationServiceUpdateZone = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.UpdateZoneRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.UpdateZoneResponse;
};

type NavigationServiceDeleteZone = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.DeleteZoneRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.DeleteZoneResponse;
};

type NavigationServiceNavigateToLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.NavigateToLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.NavigateToLocationResponse;
};

type NavigationServiceNavigateToPoint = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.NavigateToPointRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.NavigateToPointResponse;
};

type NavigationServiceNavigateRoute = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.NavigateRouteRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.NavigateRouteResponse;
};

type NavigationServicePlanToPoint = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.PlanToPointRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.PlanToPointResponse;
};

type NavigationServicePlanToLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.PlanToLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.PlanToLocationResponse;
};

type NavigationServiceExecutePlan = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.ExecutePlanRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.ExecutePlanResponse;
};

type NavigationServiceGoToLocation = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GoToLocationRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GoToLocationResponse;
};

type NavigationServiceGoToPoint = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GoToPointRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GoToPointResponse;
};

type NavigationServiceSuspend = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.SuspendRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.SuspendResponse;
};

type NavigationServiceResume = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.ResumeRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.ResumeResponse;
};

type NavigationServiceCancel = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.CancelRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.CancelResponse;
};

type NavigationServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetPositionRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetPositionResponse;
};

type NavigationServiceGetNavigationStatus = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetNavigationStatusRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetNavigationStatusResponse;
};

type NavigationServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetPropertiesRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetPropertiesResponse;
};

type NavigationServiceGetCostmap = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_navigation_v1_navigation_pb.GetCostmapRequest;
  readonly responseType: typeof service_navigation_v1_navigation_pb.GetCostmapResponse;
};

type NavigationServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type NavigationServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof NavigationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetStatusRequest;
  readonly responseType: typeof common_v1_common_pb.GetStatusResponse;
};

export class NavigationService {
  static readonly serviceName: string;
  static readonly AddLocation: NavigationServiceAddLocation;
  static readonly GetLocation: NavigationServiceGetLocation;
  static readonly ListLocations: NavigationServiceListLocations;
  static readonly UpdateLocation: NavigationServiceUpdateLocation;
  static readonly DeleteLocation: NavigationServiceDeleteLocation;
  static readonly AddRoute: NavigationServiceAddRoute;
  static readonly GetRoute: NavigationServiceGetRoute;
  static readonly ListRoutes: NavigationServiceListRoutes;
  static readonly UpdateRoute: NavigationServiceUpdateRoute;
  static readonly DeleteRoute: NavigationServiceDeleteRoute;
  static readonly AddZone: NavigationServiceAddZone;
  static readonly GetZone: NavigationServiceGetZone;
  static readonly ListZones: NavigationServiceListZones;
  static readonly UpdateZone: NavigationServiceUpdateZone;
  static readonly DeleteZone: NavigationServiceDeleteZone;
  static readonly NavigateToLocation: NavigationServiceNavigateToLocation;
  static readonly NavigateToPoint: NavigationServiceNavigateToPoint;
  static readonly NavigateRoute: NavigationServiceNavigateRoute;
  static readonly PlanToPoint: NavigationServicePlanToPoint;
  static readonly PlanToLocation: NavigationServicePlanToLocation;
  static readonly ExecutePlan: NavigationServiceExecutePlan;
  static readonly GoToLocation: NavigationServiceGoToLocation;
  static readonly GoToPoint: NavigationServiceGoToPoint;
  static readonly Suspend: NavigationServiceSuspend;
  static readonly Resume: NavigationServiceResume;
  static readonly Cancel: NavigationServiceCancel;
  static readonly GetPosition: NavigationServiceGetPosition;
  static readonly GetNavigationStatus: NavigationServiceGetNavigationStatus;
  static readonly GetProperties: NavigationServiceGetProperties;
  static readonly GetCostmap: NavigationServiceGetCostmap;
  static readonly DoCommand: NavigationServiceDoCommand;
  static readonly GetStatus: NavigationServiceGetStatus;
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
  addLocation(
    requestMessage: service_navigation_v1_navigation_pb.AddLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddLocationResponse|null) => void
  ): UnaryResponse;
  addLocation(
    requestMessage: service_navigation_v1_navigation_pb.AddLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddLocationResponse|null) => void
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
  listLocations(
    requestMessage: service_navigation_v1_navigation_pb.ListLocationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  listLocations(
    requestMessage: service_navigation_v1_navigation_pb.ListLocationsRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  updateLocation(
    requestMessage: service_navigation_v1_navigation_pb.UpdateLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateLocationResponse|null) => void
  ): UnaryResponse;
  updateLocation(
    requestMessage: service_navigation_v1_navigation_pb.UpdateLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateLocationResponse|null) => void
  ): UnaryResponse;
  deleteLocation(
    requestMessage: service_navigation_v1_navigation_pb.DeleteLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteLocationResponse|null) => void
  ): UnaryResponse;
  deleteLocation(
    requestMessage: service_navigation_v1_navigation_pb.DeleteLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteLocationResponse|null) => void
  ): UnaryResponse;
  addRoute(
    requestMessage: service_navigation_v1_navigation_pb.AddRouteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddRouteResponse|null) => void
  ): UnaryResponse;
  addRoute(
    requestMessage: service_navigation_v1_navigation_pb.AddRouteRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddRouteResponse|null) => void
  ): UnaryResponse;
  getRoute(
    requestMessage: service_navigation_v1_navigation_pb.GetRouteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetRouteResponse|null) => void
  ): UnaryResponse;
  getRoute(
    requestMessage: service_navigation_v1_navigation_pb.GetRouteRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetRouteResponse|null) => void
  ): UnaryResponse;
  listRoutes(
    requestMessage: service_navigation_v1_navigation_pb.ListRoutesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListRoutesResponse|null) => void
  ): UnaryResponse;
  listRoutes(
    requestMessage: service_navigation_v1_navigation_pb.ListRoutesRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListRoutesResponse|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: service_navigation_v1_navigation_pb.UpdateRouteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateRouteResponse|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: service_navigation_v1_navigation_pb.UpdateRouteRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateRouteResponse|null) => void
  ): UnaryResponse;
  deleteRoute(
    requestMessage: service_navigation_v1_navigation_pb.DeleteRouteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteRouteResponse|null) => void
  ): UnaryResponse;
  deleteRoute(
    requestMessage: service_navigation_v1_navigation_pb.DeleteRouteRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteRouteResponse|null) => void
  ): UnaryResponse;
  addZone(
    requestMessage: service_navigation_v1_navigation_pb.AddZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddZoneResponse|null) => void
  ): UnaryResponse;
  addZone(
    requestMessage: service_navigation_v1_navigation_pb.AddZoneRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.AddZoneResponse|null) => void
  ): UnaryResponse;
  getZone(
    requestMessage: service_navigation_v1_navigation_pb.GetZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetZoneResponse|null) => void
  ): UnaryResponse;
  getZone(
    requestMessage: service_navigation_v1_navigation_pb.GetZoneRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetZoneResponse|null) => void
  ): UnaryResponse;
  listZones(
    requestMessage: service_navigation_v1_navigation_pb.ListZonesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListZonesResponse|null) => void
  ): UnaryResponse;
  listZones(
    requestMessage: service_navigation_v1_navigation_pb.ListZonesRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ListZonesResponse|null) => void
  ): UnaryResponse;
  updateZone(
    requestMessage: service_navigation_v1_navigation_pb.UpdateZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateZoneResponse|null) => void
  ): UnaryResponse;
  updateZone(
    requestMessage: service_navigation_v1_navigation_pb.UpdateZoneRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.UpdateZoneResponse|null) => void
  ): UnaryResponse;
  deleteZone(
    requestMessage: service_navigation_v1_navigation_pb.DeleteZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteZoneResponse|null) => void
  ): UnaryResponse;
  deleteZone(
    requestMessage: service_navigation_v1_navigation_pb.DeleteZoneRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.DeleteZoneResponse|null) => void
  ): UnaryResponse;
  navigateToLocation(
    requestMessage: service_navigation_v1_navigation_pb.NavigateToLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateToLocationResponse|null) => void
  ): UnaryResponse;
  navigateToLocation(
    requestMessage: service_navigation_v1_navigation_pb.NavigateToLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateToLocationResponse|null) => void
  ): UnaryResponse;
  navigateToPoint(
    requestMessage: service_navigation_v1_navigation_pb.NavigateToPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateToPointResponse|null) => void
  ): UnaryResponse;
  navigateToPoint(
    requestMessage: service_navigation_v1_navigation_pb.NavigateToPointRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateToPointResponse|null) => void
  ): UnaryResponse;
  navigateRoute(
    requestMessage: service_navigation_v1_navigation_pb.NavigateRouteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateRouteResponse|null) => void
  ): UnaryResponse;
  navigateRoute(
    requestMessage: service_navigation_v1_navigation_pb.NavigateRouteRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.NavigateRouteResponse|null) => void
  ): UnaryResponse;
  planToPoint(
    requestMessage: service_navigation_v1_navigation_pb.PlanToPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.PlanToPointResponse|null) => void
  ): UnaryResponse;
  planToPoint(
    requestMessage: service_navigation_v1_navigation_pb.PlanToPointRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.PlanToPointResponse|null) => void
  ): UnaryResponse;
  planToLocation(
    requestMessage: service_navigation_v1_navigation_pb.PlanToLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.PlanToLocationResponse|null) => void
  ): UnaryResponse;
  planToLocation(
    requestMessage: service_navigation_v1_navigation_pb.PlanToLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.PlanToLocationResponse|null) => void
  ): UnaryResponse;
  executePlan(
    requestMessage: service_navigation_v1_navigation_pb.ExecutePlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ExecutePlanResponse|null) => void
  ): UnaryResponse;
  executePlan(
    requestMessage: service_navigation_v1_navigation_pb.ExecutePlanRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ExecutePlanResponse|null) => void
  ): UnaryResponse;
  goToLocation(
    requestMessage: service_navigation_v1_navigation_pb.GoToLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GoToLocationResponse|null) => void
  ): UnaryResponse;
  goToLocation(
    requestMessage: service_navigation_v1_navigation_pb.GoToLocationRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GoToLocationResponse|null) => void
  ): UnaryResponse;
  goToPoint(
    requestMessage: service_navigation_v1_navigation_pb.GoToPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GoToPointResponse|null) => void
  ): UnaryResponse;
  goToPoint(
    requestMessage: service_navigation_v1_navigation_pb.GoToPointRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GoToPointResponse|null) => void
  ): UnaryResponse;
  suspend(
    requestMessage: service_navigation_v1_navigation_pb.SuspendRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.SuspendResponse|null) => void
  ): UnaryResponse;
  suspend(
    requestMessage: service_navigation_v1_navigation_pb.SuspendRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.SuspendResponse|null) => void
  ): UnaryResponse;
  resume(
    requestMessage: service_navigation_v1_navigation_pb.ResumeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ResumeResponse|null) => void
  ): UnaryResponse;
  resume(
    requestMessage: service_navigation_v1_navigation_pb.ResumeRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.ResumeResponse|null) => void
  ): UnaryResponse;
  cancel(
    requestMessage: service_navigation_v1_navigation_pb.CancelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.CancelResponse|null) => void
  ): UnaryResponse;
  cancel(
    requestMessage: service_navigation_v1_navigation_pb.CancelRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.CancelResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: service_navigation_v1_navigation_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: service_navigation_v1_navigation_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getNavigationStatus(
    requestMessage: service_navigation_v1_navigation_pb.GetNavigationStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetNavigationStatusResponse|null) => void
  ): UnaryResponse;
  getNavigationStatus(
    requestMessage: service_navigation_v1_navigation_pb.GetNavigationStatusRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetNavigationStatusResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: service_navigation_v1_navigation_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: service_navigation_v1_navigation_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getCostmap(
    requestMessage: service_navigation_v1_navigation_pb.GetCostmapRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetCostmapResponse|null) => void
  ): UnaryResponse;
  getCostmap(
    requestMessage: service_navigation_v1_navigation_pb.GetCostmapRequest,
    callback: (error: ServiceError|null, responseMessage: service_navigation_v1_navigation_pb.GetCostmapResponse|null) => void
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
  getStatus(
    requestMessage: common_v1_common_pb.GetStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: common_v1_common_pb.GetStatusRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetStatusResponse|null) => void
  ): UnaryResponse;
}

