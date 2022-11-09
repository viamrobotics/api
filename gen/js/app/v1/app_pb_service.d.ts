// package: viam.app.v1
// file: app/v1/app.proto

import * as app_v1_app_pb from "../../app/v1/app_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AppServiceCreateLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateLocationRequest;
  readonly responseType: typeof app_v1_app_pb.CreateLocationResponse;
};

type AppServiceListOrganizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListOrganizationsRequest;
  readonly responseType: typeof app_v1_app_pb.ListOrganizationsResponse;
};

type AppServiceListLocations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListLocationsRequest;
  readonly responseType: typeof app_v1_app_pb.ListLocationsResponse;
};

type AppServiceLocationAuth = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.LocationAuthRequest;
  readonly responseType: typeof app_v1_app_pb.LocationAuthResponse;
};

type AppServiceCreateLocationSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateLocationSecretRequest;
  readonly responseType: typeof app_v1_app_pb.CreateLocationSecretResponse;
};

type AppServiceDeleteLocationSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteLocationSecretRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteLocationSecretResponse;
};

type AppServiceGetRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotResponse;
};

type AppServiceGetRobotParts = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartsRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartsResponse;
};

type AppServiceGetRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartResponse;
};

type AppServiceGetRobotPartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartLogsResponse;
};

type AppServiceTailRobotPartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_v1_app_pb.TailRobotPartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.TailRobotPartLogsResponse;
};

type AppServiceGetRobotPartHistory = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartHistoryRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartHistoryResponse;
};

type AppServiceUpdateRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotPartResponse;
};

type AppServiceNewRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.NewRobotPartResponse;
};

type AppServiceDeleteRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotPartResponse;
};

type AppServiceMarkPartAsMain = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.MarkPartAsMainRequest;
  readonly responseType: typeof app_v1_app_pb.MarkPartAsMainResponse;
};

type AppServiceCreateRobotPartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateRobotPartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.CreateRobotPartSecretResponse;
};

type AppServiceDeleteRobotPartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotPartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotPartSecretResponse;
};

type AppServiceFindRobots = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.FindRobotsRequest;
  readonly responseType: typeof app_v1_app_pb.FindRobotsResponse;
};

type AppServiceNewRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewRobotRequest;
  readonly responseType: typeof app_v1_app_pb.NewRobotResponse;
};

type AppServiceUpdateRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotResponse;
};

type AppServiceDeleteRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotResponse;
};

export class AppService {
  static readonly serviceName: string;
  static readonly CreateLocation: AppServiceCreateLocation;
  static readonly ListOrganizations: AppServiceListOrganizations;
  static readonly ListLocations: AppServiceListLocations;
  static readonly LocationAuth: AppServiceLocationAuth;
  static readonly CreateLocationSecret: AppServiceCreateLocationSecret;
  static readonly DeleteLocationSecret: AppServiceDeleteLocationSecret;
  static readonly GetRobot: AppServiceGetRobot;
  static readonly GetRobotParts: AppServiceGetRobotParts;
  static readonly GetRobotPart: AppServiceGetRobotPart;
  static readonly GetRobotPartLogs: AppServiceGetRobotPartLogs;
  static readonly TailRobotPartLogs: AppServiceTailRobotPartLogs;
  static readonly GetRobotPartHistory: AppServiceGetRobotPartHistory;
  static readonly UpdateRobotPart: AppServiceUpdateRobotPart;
  static readonly NewRobotPart: AppServiceNewRobotPart;
  static readonly DeleteRobotPart: AppServiceDeleteRobotPart;
  static readonly MarkPartAsMain: AppServiceMarkPartAsMain;
  static readonly CreateRobotPartSecret: AppServiceCreateRobotPartSecret;
  static readonly DeleteRobotPartSecret: AppServiceDeleteRobotPartSecret;
  static readonly FindRobots: AppServiceFindRobots;
  static readonly NewRobot: AppServiceNewRobot;
  static readonly UpdateRobot: AppServiceUpdateRobot;
  static readonly DeleteRobot: AppServiceDeleteRobot;
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

export class AppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLocation(
    requestMessage: app_v1_app_pb.CreateLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationResponse|null) => void
  ): UnaryResponse;
  createLocation(
    requestMessage: app_v1_app_pb.CreateLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationResponse|null) => void
  ): UnaryResponse;
  listOrganizations(
    requestMessage: app_v1_app_pb.ListOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsResponse|null) => void
  ): UnaryResponse;
  listOrganizations(
    requestMessage: app_v1_app_pb.ListOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsResponse|null) => void
  ): UnaryResponse;
  listLocations(
    requestMessage: app_v1_app_pb.ListLocationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  listLocations(
    requestMessage: app_v1_app_pb.ListLocationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  locationAuth(
    requestMessage: app_v1_app_pb.LocationAuthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.LocationAuthResponse|null) => void
  ): UnaryResponse;
  locationAuth(
    requestMessage: app_v1_app_pb.LocationAuthRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.LocationAuthResponse|null) => void
  ): UnaryResponse;
  createLocationSecret(
    requestMessage: app_v1_app_pb.CreateLocationSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationSecretResponse|null) => void
  ): UnaryResponse;
  createLocationSecret(
    requestMessage: app_v1_app_pb.CreateLocationSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationSecretResponse|null) => void
  ): UnaryResponse;
  deleteLocationSecret(
    requestMessage: app_v1_app_pb.DeleteLocationSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationSecretResponse|null) => void
  ): UnaryResponse;
  deleteLocationSecret(
    requestMessage: app_v1_app_pb.DeleteLocationSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationSecretResponse|null) => void
  ): UnaryResponse;
  getRobot(
    requestMessage: app_v1_app_pb.GetRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotResponse|null) => void
  ): UnaryResponse;
  getRobot(
    requestMessage: app_v1_app_pb.GetRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotResponse|null) => void
  ): UnaryResponse;
  getRobotParts(
    requestMessage: app_v1_app_pb.GetRobotPartsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartsResponse|null) => void
  ): UnaryResponse;
  getRobotParts(
    requestMessage: app_v1_app_pb.GetRobotPartsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartsResponse|null) => void
  ): UnaryResponse;
  getRobotPart(
    requestMessage: app_v1_app_pb.GetRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartResponse|null) => void
  ): UnaryResponse;
  getRobotPart(
    requestMessage: app_v1_app_pb.GetRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartResponse|null) => void
  ): UnaryResponse;
  getRobotPartLogs(
    requestMessage: app_v1_app_pb.GetRobotPartLogsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartLogsResponse|null) => void
  ): UnaryResponse;
  getRobotPartLogs(
    requestMessage: app_v1_app_pb.GetRobotPartLogsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartLogsResponse|null) => void
  ): UnaryResponse;
  tailRobotPartLogs(requestMessage: app_v1_app_pb.TailRobotPartLogsRequest, metadata?: grpc.Metadata): ResponseStream<app_v1_app_pb.TailRobotPartLogsResponse>;
  getRobotPartHistory(
    requestMessage: app_v1_app_pb.GetRobotPartHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartHistoryResponse|null) => void
  ): UnaryResponse;
  getRobotPartHistory(
    requestMessage: app_v1_app_pb.GetRobotPartHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartHistoryResponse|null) => void
  ): UnaryResponse;
  updateRobotPart(
    requestMessage: app_v1_app_pb.UpdateRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartResponse|null) => void
  ): UnaryResponse;
  updateRobotPart(
    requestMessage: app_v1_app_pb.UpdateRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartResponse|null) => void
  ): UnaryResponse;
  newRobotPart(
    requestMessage: app_v1_app_pb.NewRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotPartResponse|null) => void
  ): UnaryResponse;
  newRobotPart(
    requestMessage: app_v1_app_pb.NewRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotPartResponse|null) => void
  ): UnaryResponse;
  deleteRobotPart(
    requestMessage: app_v1_app_pb.DeleteRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartResponse|null) => void
  ): UnaryResponse;
  deleteRobotPart(
    requestMessage: app_v1_app_pb.DeleteRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartResponse|null) => void
  ): UnaryResponse;
  markPartAsMain(
    requestMessage: app_v1_app_pb.MarkPartAsMainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartAsMainResponse|null) => void
  ): UnaryResponse;
  markPartAsMain(
    requestMessage: app_v1_app_pb.MarkPartAsMainRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartAsMainResponse|null) => void
  ): UnaryResponse;
  createRobotPartSecret(
    requestMessage: app_v1_app_pb.CreateRobotPartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  createRobotPartSecret(
    requestMessage: app_v1_app_pb.CreateRobotPartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  deleteRobotPartSecret(
    requestMessage: app_v1_app_pb.DeleteRobotPartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  deleteRobotPartSecret(
    requestMessage: app_v1_app_pb.DeleteRobotPartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  findRobots(
    requestMessage: app_v1_app_pb.FindRobotsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.FindRobotsResponse|null) => void
  ): UnaryResponse;
  findRobots(
    requestMessage: app_v1_app_pb.FindRobotsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.FindRobotsResponse|null) => void
  ): UnaryResponse;
  newRobot(
    requestMessage: app_v1_app_pb.NewRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotResponse|null) => void
  ): UnaryResponse;
  newRobot(
    requestMessage: app_v1_app_pb.NewRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotResponse|null) => void
  ): UnaryResponse;
  updateRobot(
    requestMessage: app_v1_app_pb.UpdateRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotResponse|null) => void
  ): UnaryResponse;
  updateRobot(
    requestMessage: app_v1_app_pb.UpdateRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotResponse|null) => void
  ): UnaryResponse;
  deleteRobot(
    requestMessage: app_v1_app_pb.DeleteRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotResponse|null) => void
  ): UnaryResponse;
  deleteRobot(
    requestMessage: app_v1_app_pb.DeleteRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotResponse|null) => void
  ): UnaryResponse;
}

