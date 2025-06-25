// package: viam.provisioning.v1
// file: provisioning/v1/provisioning.proto

import * as provisioning_v1_provisioning_pb from "../../provisioning/v1/provisioning_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProvisioningServiceGetSmartMachineStatus = {
  readonly methodName: string;
  readonly service: typeof ProvisioningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provisioning_v1_provisioning_pb.GetSmartMachineStatusRequest;
  readonly responseType: typeof provisioning_v1_provisioning_pb.GetSmartMachineStatusResponse;
};

type ProvisioningServiceSetNetworkCredentials = {
  readonly methodName: string;
  readonly service: typeof ProvisioningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provisioning_v1_provisioning_pb.SetNetworkCredentialsRequest;
  readonly responseType: typeof provisioning_v1_provisioning_pb.SetNetworkCredentialsResponse;
};

type ProvisioningServiceSetSmartMachineCredentials = {
  readonly methodName: string;
  readonly service: typeof ProvisioningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provisioning_v1_provisioning_pb.SetSmartMachineCredentialsRequest;
  readonly responseType: typeof provisioning_v1_provisioning_pb.SetSmartMachineCredentialsResponse;
};

type ProvisioningServiceGetNetworkList = {
  readonly methodName: string;
  readonly service: typeof ProvisioningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provisioning_v1_provisioning_pb.GetNetworkListRequest;
  readonly responseType: typeof provisioning_v1_provisioning_pb.GetNetworkListResponse;
};

type ProvisioningServiceExitProvisioning = {
  readonly methodName: string;
  readonly service: typeof ProvisioningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provisioning_v1_provisioning_pb.ExitProvisioningRequest;
  readonly responseType: typeof provisioning_v1_provisioning_pb.ExitProvisioningResponse;
};

export class ProvisioningService {
  static readonly serviceName: string;
  static readonly GetSmartMachineStatus: ProvisioningServiceGetSmartMachineStatus;
  static readonly SetNetworkCredentials: ProvisioningServiceSetNetworkCredentials;
  static readonly SetSmartMachineCredentials: ProvisioningServiceSetSmartMachineCredentials;
  static readonly GetNetworkList: ProvisioningServiceGetNetworkList;
  static readonly ExitProvisioning: ProvisioningServiceExitProvisioning;
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

export class ProvisioningServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSmartMachineStatus(
    requestMessage: provisioning_v1_provisioning_pb.GetSmartMachineStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.GetSmartMachineStatusResponse|null) => void
  ): UnaryResponse;
  getSmartMachineStatus(
    requestMessage: provisioning_v1_provisioning_pb.GetSmartMachineStatusRequest,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.GetSmartMachineStatusResponse|null) => void
  ): UnaryResponse;
  setNetworkCredentials(
    requestMessage: provisioning_v1_provisioning_pb.SetNetworkCredentialsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.SetNetworkCredentialsResponse|null) => void
  ): UnaryResponse;
  setNetworkCredentials(
    requestMessage: provisioning_v1_provisioning_pb.SetNetworkCredentialsRequest,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.SetNetworkCredentialsResponse|null) => void
  ): UnaryResponse;
  setSmartMachineCredentials(
    requestMessage: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsResponse|null) => void
  ): UnaryResponse;
  setSmartMachineCredentials(
    requestMessage: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsRequest,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsResponse|null) => void
  ): UnaryResponse;
  getNetworkList(
    requestMessage: provisioning_v1_provisioning_pb.GetNetworkListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.GetNetworkListResponse|null) => void
  ): UnaryResponse;
  getNetworkList(
    requestMessage: provisioning_v1_provisioning_pb.GetNetworkListRequest,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.GetNetworkListResponse|null) => void
  ): UnaryResponse;
  exitProvisioning(
    requestMessage: provisioning_v1_provisioning_pb.ExitProvisioningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.ExitProvisioningResponse|null) => void
  ): UnaryResponse;
  exitProvisioning(
    requestMessage: provisioning_v1_provisioning_pb.ExitProvisioningRequest,
    callback: (error: ServiceError|null, responseMessage: provisioning_v1_provisioning_pb.ExitProvisioningResponse|null) => void
  ): UnaryResponse;
}

