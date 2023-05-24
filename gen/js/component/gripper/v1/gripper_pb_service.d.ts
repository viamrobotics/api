// package: viam.component.gripper.v1
// file: component/gripper/v1/gripper.proto

import * as component_gripper_v1_gripper_pb from "../../../component/gripper/v1/gripper_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GripperServiceOpen = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gripper_v1_gripper_pb.OpenRequest;
  readonly responseType: typeof component_gripper_v1_gripper_pb.OpenResponse;
};

type GripperServiceGrab = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gripper_v1_gripper_pb.GrabRequest;
  readonly responseType: typeof component_gripper_v1_gripper_pb.GrabResponse;
};

type GripperServiceStop = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gripper_v1_gripper_pb.StopRequest;
  readonly responseType: typeof component_gripper_v1_gripper_pb.StopResponse;
};

type GripperServiceIsMoving = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_gripper_v1_gripper_pb.IsMovingRequest;
  readonly responseType: typeof component_gripper_v1_gripper_pb.IsMovingResponse;
};

type GripperServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type GripperServiceGetGeometries = {
  readonly methodName: string;
  readonly service: typeof GripperService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetGeometriesRequest;
  readonly responseType: typeof common_v1_common_pb.GetGeometriesResponse;
};

export class GripperService {
  static readonly serviceName: string;
  static readonly Open: GripperServiceOpen;
  static readonly Grab: GripperServiceGrab;
  static readonly Stop: GripperServiceStop;
  static readonly IsMoving: GripperServiceIsMoving;
  static readonly DoCommand: GripperServiceDoCommand;
  static readonly GetGeometries: GripperServiceGetGeometries;
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

export class GripperServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  open(
    requestMessage: component_gripper_v1_gripper_pb.OpenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.OpenResponse|null) => void
  ): UnaryResponse;
  open(
    requestMessage: component_gripper_v1_gripper_pb.OpenRequest,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.OpenResponse|null) => void
  ): UnaryResponse;
  grab(
    requestMessage: component_gripper_v1_gripper_pb.GrabRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.GrabResponse|null) => void
  ): UnaryResponse;
  grab(
    requestMessage: component_gripper_v1_gripper_pb.GrabRequest,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.GrabResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_gripper_v1_gripper_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_gripper_v1_gripper_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.StopResponse|null) => void
  ): UnaryResponse;
  isMoving(
    requestMessage: component_gripper_v1_gripper_pb.IsMovingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.IsMovingResponse|null) => void
  ): UnaryResponse;
  isMoving(
    requestMessage: component_gripper_v1_gripper_pb.IsMovingRequest,
    callback: (error: ServiceError|null, responseMessage: component_gripper_v1_gripper_pb.IsMovingResponse|null) => void
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

