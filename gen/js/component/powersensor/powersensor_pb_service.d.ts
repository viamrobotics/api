// package: viam.component.powersensor.v1
// file: component/powersensor/powersensor.proto

import * as component_powersensor_powersensor_pb from "../../component/powersensor/powersensor_pb";
import * as common_v1_common_pb from "../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PowerSensorServiceGetVoltage = {
  readonly methodName: string;
  readonly service: typeof PowerSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_powersensor_powersensor_pb.GetVoltageRequest;
  readonly responseType: typeof component_powersensor_powersensor_pb.GetVoltageResponse;
};

type PowerSensorServiceGetCurrent = {
  readonly methodName: string;
  readonly service: typeof PowerSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_powersensor_powersensor_pb.GetCurrentRequest;
  readonly responseType: typeof component_powersensor_powersensor_pb.GetCurrentResponse;
};

type PowerSensorServiceGetPower = {
  readonly methodName: string;
  readonly service: typeof PowerSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_powersensor_powersensor_pb.GetPowerRequest;
  readonly responseType: typeof component_powersensor_powersensor_pb.GetPowerResponse;
};

type PowerSensorServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof PowerSensorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class PowerSensorService {
  static readonly serviceName: string;
  static readonly GetVoltage: PowerSensorServiceGetVoltage;
  static readonly GetCurrent: PowerSensorServiceGetCurrent;
  static readonly GetPower: PowerSensorServiceGetPower;
  static readonly DoCommand: PowerSensorServiceDoCommand;
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

export class PowerSensorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVoltage(
    requestMessage: component_powersensor_powersensor_pb.GetVoltageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetVoltageResponse|null) => void
  ): UnaryResponse;
  getVoltage(
    requestMessage: component_powersensor_powersensor_pb.GetVoltageRequest,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetVoltageResponse|null) => void
  ): UnaryResponse;
  getCurrent(
    requestMessage: component_powersensor_powersensor_pb.GetCurrentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetCurrentResponse|null) => void
  ): UnaryResponse;
  getCurrent(
    requestMessage: component_powersensor_powersensor_pb.GetCurrentRequest,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetCurrentResponse|null) => void
  ): UnaryResponse;
  getPower(
    requestMessage: component_powersensor_powersensor_pb.GetPowerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetPowerResponse|null) => void
  ): UnaryResponse;
  getPower(
    requestMessage: component_powersensor_powersensor_pb.GetPowerRequest,
    callback: (error: ServiceError|null, responseMessage: component_powersensor_powersensor_pb.GetPowerResponse|null) => void
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

