// package: viam.component.arm.v1
// file: component/arm/v1/arm.proto

import * as component_arm_v1_arm_pb from "../../../component/arm/v1/arm_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ArmServiceGetEndPosition = {
  readonly methodName: string;
  readonly service: typeof ArmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_arm_v1_arm_pb.GetEndPositionRequest;
  readonly responseType: typeof component_arm_v1_arm_pb.GetEndPositionResponse;
};

type ArmServiceMoveToPosition = {
  readonly methodName: string;
  readonly service: typeof ArmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_arm_v1_arm_pb.MoveToPositionRequest;
  readonly responseType: typeof component_arm_v1_arm_pb.MoveToPositionResponse;
};

type ArmServiceGetJointPositions = {
  readonly methodName: string;
  readonly service: typeof ArmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_arm_v1_arm_pb.GetJointPositionsRequest;
  readonly responseType: typeof component_arm_v1_arm_pb.GetJointPositionsResponse;
};

type ArmServiceMoveToJointPositions = {
  readonly methodName: string;
  readonly service: typeof ArmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_arm_v1_arm_pb.MoveToJointPositionsRequest;
  readonly responseType: typeof component_arm_v1_arm_pb.MoveToJointPositionsResponse;
};

type ArmServiceStop = {
  readonly methodName: string;
  readonly service: typeof ArmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_arm_v1_arm_pb.StopRequest;
  readonly responseType: typeof component_arm_v1_arm_pb.StopResponse;
};

export class ArmService {
  static readonly serviceName: string;
  static readonly GetEndPosition: ArmServiceGetEndPosition;
  static readonly MoveToPosition: ArmServiceMoveToPosition;
  static readonly GetJointPositions: ArmServiceGetJointPositions;
  static readonly MoveToJointPositions: ArmServiceMoveToJointPositions;
  static readonly Stop: ArmServiceStop;
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

export class ArmServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getEndPosition(
    requestMessage: component_arm_v1_arm_pb.GetEndPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.GetEndPositionResponse|null) => void
  ): UnaryResponse;
  getEndPosition(
    requestMessage: component_arm_v1_arm_pb.GetEndPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.GetEndPositionResponse|null) => void
  ): UnaryResponse;
  moveToPosition(
    requestMessage: component_arm_v1_arm_pb.MoveToPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.MoveToPositionResponse|null) => void
  ): UnaryResponse;
  moveToPosition(
    requestMessage: component_arm_v1_arm_pb.MoveToPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.MoveToPositionResponse|null) => void
  ): UnaryResponse;
  getJointPositions(
    requestMessage: component_arm_v1_arm_pb.GetJointPositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.GetJointPositionsResponse|null) => void
  ): UnaryResponse;
  getJointPositions(
    requestMessage: component_arm_v1_arm_pb.GetJointPositionsRequest,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.GetJointPositionsResponse|null) => void
  ): UnaryResponse;
  moveToJointPositions(
    requestMessage: component_arm_v1_arm_pb.MoveToJointPositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.MoveToJointPositionsResponse|null) => void
  ): UnaryResponse;
  moveToJointPositions(
    requestMessage: component_arm_v1_arm_pb.MoveToJointPositionsRequest,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.MoveToJointPositionsResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_arm_v1_arm_pb.StopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.StopResponse|null) => void
  ): UnaryResponse;
  stop(
    requestMessage: component_arm_v1_arm_pb.StopRequest,
    callback: (error: ServiceError|null, responseMessage: component_arm_v1_arm_pb.StopResponse|null) => void
  ): UnaryResponse;
}

