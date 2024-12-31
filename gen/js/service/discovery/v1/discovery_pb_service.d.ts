// package: viam.service.discovery.v1
// file: service/discovery/v1/discovery.proto

import * as service_discovery_v1_discovery_pb from "../../../service/discovery/v1/discovery_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DiscoveryServiceDiscoverResources = {
  readonly methodName: string;
  readonly service: typeof DiscoveryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_discovery_v1_discovery_pb.DiscoverResourcesRequest;
  readonly responseType: typeof service_discovery_v1_discovery_pb.DiscoverResourcesResponse;
};

type DiscoveryServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof DiscoveryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class DiscoveryService {
  static readonly serviceName: string;
  static readonly DiscoverResources: DiscoveryServiceDiscoverResources;
  static readonly DoCommand: DiscoveryServiceDoCommand;
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

export class DiscoveryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  discoverResources(
    requestMessage: service_discovery_v1_discovery_pb.DiscoverResourcesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_discovery_v1_discovery_pb.DiscoverResourcesResponse|null) => void
  ): UnaryResponse;
  discoverResources(
    requestMessage: service_discovery_v1_discovery_pb.DiscoverResourcesRequest,
    callback: (error: ServiceError|null, responseMessage: service_discovery_v1_discovery_pb.DiscoverResourcesResponse|null) => void
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

