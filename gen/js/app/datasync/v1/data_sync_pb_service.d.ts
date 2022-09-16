// package: viam.app.datasync.v1
// file: app/datasync/v1/data_sync.proto

import * as app_datasync_v1_data_sync_pb from "../../../app/datasync/v1/data_sync_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataSyncServiceUpload = {
  readonly methodName: string;
  readonly service: typeof DataSyncService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof app_datasync_v1_data_sync_pb.UploadRequest;
  readonly responseType: typeof app_datasync_v1_data_sync_pb.UploadResponse;
};

export class DataSyncService {
  static readonly serviceName: string;
  static readonly Upload: DataSyncServiceUpload;
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

export class DataSyncServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  upload(metadata?: grpc.Metadata): BidirectionalStream<app_datasync_v1_data_sync_pb.UploadRequest, app_datasync_v1_data_sync_pb.UploadResponse>;
}

