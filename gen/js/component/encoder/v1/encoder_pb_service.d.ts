// package: viam.component.encoder.v1
// file: component/encoder/v1/encoder.proto

import * as component_encoder_v1_encoder_pb from "../../../component/encoder/v1/encoder_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EncoderServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof EncoderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_encoder_v1_encoder_pb.GetPositionRequest;
  readonly responseType: typeof component_encoder_v1_encoder_pb.GetPositionResponse;
};

type EncoderServiceResetPosition = {
  readonly methodName: string;
  readonly service: typeof EncoderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_encoder_v1_encoder_pb.ResetPositionRequest;
  readonly responseType: typeof component_encoder_v1_encoder_pb.ResetPositionResponse;
};

type EncoderServiceGetProperties = {
  readonly methodName: string;
  readonly service: typeof EncoderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_encoder_v1_encoder_pb.GetPropertiesRequest;
  readonly responseType: typeof component_encoder_v1_encoder_pb.GetPropertiesResponse;
};

type EncoderServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof EncoderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

type EncoderServiceGetGeometries = {
  readonly methodName: string;
  readonly service: typeof EncoderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.GetGeometriesRequest;
  readonly responseType: typeof common_v1_common_pb.GetGeometriesResponse;
};

export class EncoderService {
  static readonly serviceName: string;
  static readonly GetPosition: EncoderServiceGetPosition;
  static readonly ResetPosition: EncoderServiceResetPosition;
  static readonly GetProperties: EncoderServiceGetProperties;
  static readonly DoCommand: EncoderServiceDoCommand;
  static readonly GetGeometries: EncoderServiceGetGeometries;
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

export class EncoderServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPosition(
    requestMessage: component_encoder_v1_encoder_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_encoder_v1_encoder_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  resetPosition(
    requestMessage: component_encoder_v1_encoder_pb.ResetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.ResetPositionResponse|null) => void
  ): UnaryResponse;
  resetPosition(
    requestMessage: component_encoder_v1_encoder_pb.ResetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.ResetPositionResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_encoder_v1_encoder_pb.GetPropertiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.GetPropertiesResponse|null) => void
  ): UnaryResponse;
  getProperties(
    requestMessage: component_encoder_v1_encoder_pb.GetPropertiesRequest,
    callback: (error: ServiceError|null, responseMessage: component_encoder_v1_encoder_pb.GetPropertiesResponse|null) => void
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

