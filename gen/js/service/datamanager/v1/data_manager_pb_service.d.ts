// package: viam.service.datamanager.v1
// file: service/datamanager/v1/data_manager.proto

import * as service_datamanager_v1_data_manager_pb from "../../../service/datamanager/v1/data_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataManagerServiceSync = {
  readonly methodName: string;
  readonly service: typeof DataManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_datamanager_v1_data_manager_pb.SyncRequest;
  readonly responseType: typeof service_datamanager_v1_data_manager_pb.SyncResponse;
};

export class DataManagerService {
  static readonly serviceName: string;
  static readonly Sync: DataManagerServiceSync;
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

export class DataManagerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sync(
    requestMessage: service_datamanager_v1_data_manager_pb.SyncRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_datamanager_v1_data_manager_pb.SyncResponse|null) => void
  ): UnaryResponse;
  sync(
    requestMessage: service_datamanager_v1_data_manager_pb.SyncRequest,
    callback: (error: ServiceError|null, responseMessage: service_datamanager_v1_data_manager_pb.SyncResponse|null) => void
  ): UnaryResponse;
}

