// package: viam.service.worldstatestore.v1
// file: service/worldstatestore/v1/world_state_store.proto

import * as service_worldstatestore_v1_world_state_store_pb from "../../../service/worldstatestore/v1/world_state_store_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WorldStateStoreServiceListUUIDs = {
  readonly methodName: string;
  readonly service: typeof WorldStateStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_worldstatestore_v1_world_state_store_pb.ListUUIDsRequest;
  readonly responseType: typeof service_worldstatestore_v1_world_state_store_pb.ListUUIDsResponse;
};

type WorldStateStoreServiceGetTransform = {
  readonly methodName: string;
  readonly service: typeof WorldStateStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_worldstatestore_v1_world_state_store_pb.GetTransformRequest;
  readonly responseType: typeof service_worldstatestore_v1_world_state_store_pb.GetTransformResponse;
};

type WorldStateStoreServiceStreamTransformChanges = {
  readonly methodName: string;
  readonly service: typeof WorldStateStoreService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesRequest;
  readonly responseType: typeof service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesResponse;
};

type WorldStateStoreServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof WorldStateStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class WorldStateStoreService {
  static readonly serviceName: string;
  static readonly ListUUIDs: WorldStateStoreServiceListUUIDs;
  static readonly GetTransform: WorldStateStoreServiceGetTransform;
  static readonly StreamTransformChanges: WorldStateStoreServiceStreamTransformChanges;
  static readonly DoCommand: WorldStateStoreServiceDoCommand;
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

export class WorldStateStoreServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listUUIDs(
    requestMessage: service_worldstatestore_v1_world_state_store_pb.ListUUIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_worldstatestore_v1_world_state_store_pb.ListUUIDsResponse|null) => void
  ): UnaryResponse;
  listUUIDs(
    requestMessage: service_worldstatestore_v1_world_state_store_pb.ListUUIDsRequest,
    callback: (error: ServiceError|null, responseMessage: service_worldstatestore_v1_world_state_store_pb.ListUUIDsResponse|null) => void
  ): UnaryResponse;
  getTransform(
    requestMessage: service_worldstatestore_v1_world_state_store_pb.GetTransformRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_worldstatestore_v1_world_state_store_pb.GetTransformResponse|null) => void
  ): UnaryResponse;
  getTransform(
    requestMessage: service_worldstatestore_v1_world_state_store_pb.GetTransformRequest,
    callback: (error: ServiceError|null, responseMessage: service_worldstatestore_v1_world_state_store_pb.GetTransformResponse|null) => void
  ): UnaryResponse;
  streamTransformChanges(requestMessage: service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesRequest, metadata?: grpc.Metadata): ResponseStream<service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesResponse>;
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

