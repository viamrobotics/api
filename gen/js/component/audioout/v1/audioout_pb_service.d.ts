// package: viam.component.audioout.v1
// file: component/audioout/v1/audioout.proto

import * as component_audioout_v1_audioout_pb from "../../../component/audioout/v1/audioout_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AudioOutServicePlay = {
  readonly methodName: string;
  readonly service: typeof AudioOutService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_audioout_v1_audioout_pb.PlayRequest;
  readonly responseType: typeof component_audioout_v1_audioout_pb.PlayResponse;
};

type AudioOutServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof AudioOutService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetPropertiesRequest;
  readonly responseType: typeof common_v1_common_pb.GetPropertiesResponse;
};

type AudioOutServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof AudioOutService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type AudioOutServiceGetGeometries = {
  readonly methodName: string;
  readonly service: typeof AudioOutService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetGeometriesRequest;
  readonly responseType: typeof common_v1_common_pb.GetGeometriesResponse;
};

export class AudioOutService {
  static readonly serviceName: string;
  static readonly Play: AudioOutServicePlay;
  static readonly GetProperties: AudioOutServiceGetProperties;
  static readonly DoCommand: AudioOutServiceDoCommand;
  static readonly GetGeometries: AudioOutServiceGetGeometries;
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

export class AudioOutServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  play(
    requestMessage: component_audioout_v1_audioout_pb.PlayRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_audioout_v1_audioout_pb.PlayResponse|null) => void
  ): UnaryResponse;
  play(
    requestMessage: component_audioout_v1_audioout_pb.PlayRequest,
    callback: (error: ServiceError|null, responseMessage: component_audioout_v1_audioout_pb.PlayResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: common_v1_common_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: common_v1_common_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.GetPropertiesResponse|null) => void
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

