// package: viam.service.lerobot.v1
// file: service/lerobot/v1/lerobot.proto

import * as service_lerobot_v1_lerobot_pb from "../../../service/lerobot/v1/lerobot_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LeRobotServiceStartRecording = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.StartRecordingRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.StartRecordingResponse;
};

type LeRobotServiceStopRecording = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.StopRecordingRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.StopRecordingResponse;
};

type LeRobotServiceRecordEpisode = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.RecordEpisodeRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.RecordEpisodeResponse;
};

type LeRobotServiceReplayEpisode = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.ReplayEpisodeRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.ReplayEpisodeResponse;
};

type LeRobotServiceStartTeleoperation = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.StartTeleoperationRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.StartTeleoperationResponse;
};

type LeRobotServiceStopTeleoperation = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.StopTeleoperationRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.StopTeleoperationResponse;
};

type LeRobotServiceLoadPolicy = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.LoadPolicyRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.LoadPolicyResponse;
};

type LeRobotServiceRunPolicyEpisode = {
  readonly methodName: string;
  readonly service: typeof LeRobotService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_lerobot_v1_lerobot_pb.RunPolicyEpisodeRequest;
  readonly responseType: typeof service_lerobot_v1_lerobot_pb.RunPolicyEpisodeResponse;
};

export class LeRobotService {
  static readonly serviceName: string;
  static readonly StartRecording: LeRobotServiceStartRecording;
  static readonly StopRecording: LeRobotServiceStopRecording;
  static readonly RecordEpisode: LeRobotServiceRecordEpisode;
  static readonly ReplayEpisode: LeRobotServiceReplayEpisode;
  static readonly StartTeleoperation: LeRobotServiceStartTeleoperation;
  static readonly StopTeleoperation: LeRobotServiceStopTeleoperation;
  static readonly LoadPolicy: LeRobotServiceLoadPolicy;
  static readonly RunPolicyEpisode: LeRobotServiceRunPolicyEpisode;
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

export class LeRobotServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startRecording(
    requestMessage: service_lerobot_v1_lerobot_pb.StartRecordingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StartRecordingResponse|null) => void
  ): UnaryResponse;
  startRecording(
    requestMessage: service_lerobot_v1_lerobot_pb.StartRecordingRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StartRecordingResponse|null) => void
  ): UnaryResponse;
  stopRecording(
    requestMessage: service_lerobot_v1_lerobot_pb.StopRecordingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StopRecordingResponse|null) => void
  ): UnaryResponse;
  stopRecording(
    requestMessage: service_lerobot_v1_lerobot_pb.StopRecordingRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StopRecordingResponse|null) => void
  ): UnaryResponse;
  recordEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.RecordEpisodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.RecordEpisodeResponse|null) => void
  ): UnaryResponse;
  recordEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.RecordEpisodeRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.RecordEpisodeResponse|null) => void
  ): UnaryResponse;
  replayEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.ReplayEpisodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.ReplayEpisodeResponse|null) => void
  ): UnaryResponse;
  replayEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.ReplayEpisodeRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.ReplayEpisodeResponse|null) => void
  ): UnaryResponse;
  startTeleoperation(
    requestMessage: service_lerobot_v1_lerobot_pb.StartTeleoperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StartTeleoperationResponse|null) => void
  ): UnaryResponse;
  startTeleoperation(
    requestMessage: service_lerobot_v1_lerobot_pb.StartTeleoperationRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StartTeleoperationResponse|null) => void
  ): UnaryResponse;
  stopTeleoperation(
    requestMessage: service_lerobot_v1_lerobot_pb.StopTeleoperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StopTeleoperationResponse|null) => void
  ): UnaryResponse;
  stopTeleoperation(
    requestMessage: service_lerobot_v1_lerobot_pb.StopTeleoperationRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.StopTeleoperationResponse|null) => void
  ): UnaryResponse;
  loadPolicy(
    requestMessage: service_lerobot_v1_lerobot_pb.LoadPolicyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.LoadPolicyResponse|null) => void
  ): UnaryResponse;
  loadPolicy(
    requestMessage: service_lerobot_v1_lerobot_pb.LoadPolicyRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.LoadPolicyResponse|null) => void
  ): UnaryResponse;
  runPolicyEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeResponse|null) => void
  ): UnaryResponse;
  runPolicyEpisode(
    requestMessage: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeRequest,
    callback: (error: ServiceError|null, responseMessage: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeResponse|null) => void
  ): UnaryResponse;
}

