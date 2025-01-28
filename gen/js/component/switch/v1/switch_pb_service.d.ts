// package: viam.component.switch.v1
// file: component/switch/v1/switch.proto

import * as component_switch_v1_switch_pb from "../../../component/switch/v1/switch_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SwitchServiceSetPosition = {
  readonly methodName: string;
  readonly service: typeof SwitchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_switch_v1_switch_pb.SetPositionRequest;
  readonly responseType: typeof component_switch_v1_switch_pb.SetPositionResponse;
};

type SwitchServiceGetPosition = {
  readonly methodName: string;
  readonly service: typeof SwitchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_switch_v1_switch_pb.GetPositionRequest;
  readonly responseType: typeof component_switch_v1_switch_pb.GetPositionResponse;
};

type SwitchServiceGetNumberOfPositions = {
  readonly methodName: string;
  readonly service: typeof SwitchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_switch_v1_switch_pb.GetNumberOfPositionsRequest;
  readonly responseType: typeof component_switch_v1_switch_pb.GetNumberOfPositionsResponse;
};

type SwitchServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof SwitchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class SwitchService {
  static readonly serviceName: string;
  static readonly SetPosition: SwitchServiceSetPosition;
  static readonly GetPosition: SwitchServiceGetPosition;
  static readonly GetNumberOfPositions: SwitchServiceGetNumberOfPositions;
  static readonly DoCommand: SwitchServiceDoCommand;
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

export class SwitchServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setPosition(
    requestMessage: component_switch_v1_switch_pb.SetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.SetPositionResponse|null) => void
  ): UnaryResponse;
  setPosition(
    requestMessage: component_switch_v1_switch_pb.SetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.SetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_switch_v1_switch_pb.GetPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getPosition(
    requestMessage: component_switch_v1_switch_pb.GetPositionRequest,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.GetPositionResponse|null) => void
  ): UnaryResponse;
  getNumberOfPositions(
    requestMessage: component_switch_v1_switch_pb.GetNumberOfPositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.GetNumberOfPositionsResponse|null) => void
  ): UnaryResponse;
  getNumberOfPositions(
    requestMessage: component_switch_v1_switch_pb.GetNumberOfPositionsRequest,
    callback: (error: ServiceError|null, responseMessage: component_switch_v1_switch_pb.GetNumberOfPositionsResponse|null) => void
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
}

