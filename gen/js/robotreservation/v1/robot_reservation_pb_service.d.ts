// package: robotreservation.v1
// file: robotreservation/v1/robot_reservation.proto

import * as robotreservation_v1_robot_reservation_pb from "../../robotreservation/v1/robot_reservation_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RobotReservationServiceCreateRobotReservation = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.CreateRobotReservationRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.CreateRobotReservationResponse;
};

type RobotReservationServiceDeleteRobotReservation = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.DeleteRobotReservationRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.DeleteRobotReservationResponse;
};

type RobotReservationServiceListRobotReservations = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.ListRobotReservationsRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.ListRobotReservationsResponse;
};

type RobotReservationServiceGetRobotReservation = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.GetRobotReservationRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.GetRobotReservationResponse;
};

type RobotReservationServiceCreateRobotProcessor = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.CreateRobotProcessorRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.CreateRobotProcessorResponse;
};

type RobotReservationServiceDeleteRobotProcessor = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorResponse;
};

type RobotReservationServiceListRobotProcessors = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.ListRobotProcessorsRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.ListRobotProcessorsResponse;
};

type RobotReservationServiceTryProcess = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.TryProcessRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.TryProcessResponse;
};

type RobotReservationServiceUpdateProcessState = {
  readonly methodName: string;
  readonly service: typeof RobotReservationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof robotreservation_v1_robot_reservation_pb.UpdateProcessStateRequest;
  readonly responseType: typeof robotreservation_v1_robot_reservation_pb.UpdateProcessStateResponse;
};

export class RobotReservationService {
  static readonly serviceName: string;
  static readonly CreateRobotReservation: RobotReservationServiceCreateRobotReservation;
  static readonly DeleteRobotReservation: RobotReservationServiceDeleteRobotReservation;
  static readonly ListRobotReservations: RobotReservationServiceListRobotReservations;
  static readonly GetRobotReservation: RobotReservationServiceGetRobotReservation;
  static readonly CreateRobotProcessor: RobotReservationServiceCreateRobotProcessor;
  static readonly DeleteRobotProcessor: RobotReservationServiceDeleteRobotProcessor;
  static readonly ListRobotProcessors: RobotReservationServiceListRobotProcessors;
  static readonly TryProcess: RobotReservationServiceTryProcess;
  static readonly UpdateProcessState: RobotReservationServiceUpdateProcessState;
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

export class RobotReservationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.CreateRobotReservationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.CreateRobotReservationResponse|null) => void
  ): UnaryResponse;
  createRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.CreateRobotReservationRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.CreateRobotReservationResponse|null) => void
  ): UnaryResponse;
  deleteRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationResponse|null) => void
  ): UnaryResponse;
  deleteRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationResponse|null) => void
  ): UnaryResponse;
  listRobotReservations(
    requestMessage: robotreservation_v1_robot_reservation_pb.ListRobotReservationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.ListRobotReservationsResponse|null) => void
  ): UnaryResponse;
  listRobotReservations(
    requestMessage: robotreservation_v1_robot_reservation_pb.ListRobotReservationsRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.ListRobotReservationsResponse|null) => void
  ): UnaryResponse;
  getRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.GetRobotReservationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.GetRobotReservationResponse|null) => void
  ): UnaryResponse;
  getRobotReservation(
    requestMessage: robotreservation_v1_robot_reservation_pb.GetRobotReservationRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.GetRobotReservationResponse|null) => void
  ): UnaryResponse;
  createRobotProcessor(
    requestMessage: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorResponse|null) => void
  ): UnaryResponse;
  createRobotProcessor(
    requestMessage: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorResponse|null) => void
  ): UnaryResponse;
  deleteRobotProcessor(
    requestMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorResponse|null) => void
  ): UnaryResponse;
  deleteRobotProcessor(
    requestMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorResponse|null) => void
  ): UnaryResponse;
  listRobotProcessors(
    requestMessage: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsResponse|null) => void
  ): UnaryResponse;
  listRobotProcessors(
    requestMessage: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsResponse|null) => void
  ): UnaryResponse;
  tryProcess(
    requestMessage: robotreservation_v1_robot_reservation_pb.TryProcessRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.TryProcessResponse|null) => void
  ): UnaryResponse;
  tryProcess(
    requestMessage: robotreservation_v1_robot_reservation_pb.TryProcessRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.TryProcessResponse|null) => void
  ): UnaryResponse;
  updateProcessState(
    requestMessage: robotreservation_v1_robot_reservation_pb.UpdateProcessStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.UpdateProcessStateResponse|null) => void
  ): UnaryResponse;
  updateProcessState(
    requestMessage: robotreservation_v1_robot_reservation_pb.UpdateProcessStateRequest,
    callback: (error: ServiceError|null, responseMessage: robotreservation_v1_robot_reservation_pb.UpdateProcessStateResponse|null) => void
  ): UnaryResponse;
}

