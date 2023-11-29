// package: viam.app.agent.v1
// file: app/agent/v1/agent.proto

import * as app_agent_v1_agent_pb from "../../../app/agent/v1/agent_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentAppServiceGetAgentConfig = {
  readonly methodName: string;
  readonly service: typeof AgentAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_agent_v1_agent_pb.GetAgentConfigRequest;
  readonly responseType: typeof app_agent_v1_agent_pb.GetAgentConfigResponse;
};

type AgentAppServiceUpdateAgentConfig = {
  readonly methodName: string;
  readonly service: typeof AgentAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_agent_v1_agent_pb.UpdateAgentConfigRequest;
  readonly responseType: typeof app_agent_v1_agent_pb.UpdateAgentConfigResponse;
};

export class AgentAppService {
  static readonly serviceName: string;
  static readonly GetAgentConfig: AgentAppServiceGetAgentConfig;
  static readonly UpdateAgentConfig: AgentAppServiceUpdateAgentConfig;
}

type AgentDeviceServiceDeviceAgentConfig = {
  readonly methodName: string;
  readonly service: typeof AgentDeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_agent_v1_agent_pb.DeviceAgentConfigRequest;
  readonly responseType: typeof app_agent_v1_agent_pb.DeviceAgentConfigResponse;
};

export class AgentDeviceService {
  static readonly serviceName: string;
  static readonly DeviceAgentConfig: AgentDeviceServiceDeviceAgentConfig;
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

export class AgentAppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAgentConfig(
    requestMessage: app_agent_v1_agent_pb.GetAgentConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.GetAgentConfigResponse|null) => void
  ): UnaryResponse;
  getAgentConfig(
    requestMessage: app_agent_v1_agent_pb.GetAgentConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.GetAgentConfigResponse|null) => void
  ): UnaryResponse;
  updateAgentConfig(
    requestMessage: app_agent_v1_agent_pb.UpdateAgentConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.UpdateAgentConfigResponse|null) => void
  ): UnaryResponse;
  updateAgentConfig(
    requestMessage: app_agent_v1_agent_pb.UpdateAgentConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.UpdateAgentConfigResponse|null) => void
  ): UnaryResponse;
}

export class AgentDeviceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deviceAgentConfig(
    requestMessage: app_agent_v1_agent_pb.DeviceAgentConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.DeviceAgentConfigResponse|null) => void
  ): UnaryResponse;
  deviceAgentConfig(
    requestMessage: app_agent_v1_agent_pb.DeviceAgentConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_agent_v1_agent_pb.DeviceAgentConfigResponse|null) => void
  ): UnaryResponse;
}

