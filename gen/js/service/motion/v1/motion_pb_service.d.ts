// package: viam.service.motion.v1
// file: service/motion/v1/motion.proto

import * as service_motion_v1_motion_pb from "../../../service/motion/v1/motion_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MotionServiceMove = {
  readonly methodName: string;
  readonly service: typeof MotionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_motion_v1_motion_pb.MoveRequest;
  readonly responseType: typeof service_motion_v1_motion_pb.MoveResponse;
};

type MotionServiceMoveSingleComponent = {
  readonly methodName: string;
  readonly service: typeof MotionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_motion_v1_motion_pb.MoveSingleComponentRequest;
  readonly responseType: typeof service_motion_v1_motion_pb.MoveSingleComponentResponse;
};

type MotionServiceGetPose = {
  readonly methodName: string;
  readonly service: typeof MotionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_motion_v1_motion_pb.GetPoseRequest;
  readonly responseType: typeof service_motion_v1_motion_pb.GetPoseResponse;
};

export class MotionService {
  static readonly serviceName: string;
  static readonly Move: MotionServiceMove;
  static readonly MoveSingleComponent: MotionServiceMoveSingleComponent;
  static readonly GetPose: MotionServiceGetPose;
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

export class MotionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  move(
    requestMessage: service_motion_v1_motion_pb.MoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.MoveResponse|null) => void
  ): UnaryResponse;
  move(
    requestMessage: service_motion_v1_motion_pb.MoveRequest,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.MoveResponse|null) => void
  ): UnaryResponse;
  moveSingleComponent(
    requestMessage: service_motion_v1_motion_pb.MoveSingleComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.MoveSingleComponentResponse|null) => void
  ): UnaryResponse;
  moveSingleComponent(
    requestMessage: service_motion_v1_motion_pb.MoveSingleComponentRequest,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.MoveSingleComponentResponse|null) => void
  ): UnaryResponse;
  getPose(
    requestMessage: service_motion_v1_motion_pb.GetPoseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.GetPoseResponse|null) => void
  ): UnaryResponse;
  getPose(
    requestMessage: service_motion_v1_motion_pb.GetPoseRequest,
    callback: (error: ServiceError|null, responseMessage: service_motion_v1_motion_pb.GetPoseResponse|null) => void
  ): UnaryResponse;
}

