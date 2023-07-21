// package: viam.app.datasync.v1
// file: app/datasync/v1/data_sync.proto

import * as app_datasync_v1_data_sync_pb from "../../../app/datasync/v1/data_sync_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataSyncServiceDataCaptureUpload = {
  readonly methodName: string;
  readonly service: typeof DataSyncService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datasync_v1_data_sync_pb.DataCaptureUploadRequest;
  readonly responseType: typeof app_datasync_v1_data_sync_pb.DataCaptureUploadResponse;
};

type DataSyncServiceFileUpload = {
  readonly methodName: string;
  readonly service: typeof DataSyncService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_datasync_v1_data_sync_pb.FileUploadRequest;
  readonly responseType: typeof app_datasync_v1_data_sync_pb.FileUploadResponse;
};

type DataSyncServiceStreamingDataCaptureUpload = {
  readonly methodName: string;
  readonly service: typeof DataSyncService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_datasync_v1_data_sync_pb.StreamingDataCaptureUploadRequest;
  readonly responseType: typeof app_datasync_v1_data_sync_pb.StreamingDataCaptureUploadResponse;
};

export class DataSyncService {
  static readonly serviceName: string;
  static readonly DataCaptureUpload: DataSyncServiceDataCaptureUpload;
  static readonly FileUpload: DataSyncServiceFileUpload;
  static readonly StreamingDataCaptureUpload: DataSyncServiceStreamingDataCaptureUpload;
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
  dataCaptureUpload(
    requestMessage: app_datasync_v1_data_sync_pb.DataCaptureUploadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datasync_v1_data_sync_pb.DataCaptureUploadResponse|null) => void
  ): UnaryResponse;
  dataCaptureUpload(
    requestMessage: app_datasync_v1_data_sync_pb.DataCaptureUploadRequest,
    callback: (error: ServiceError|null, responseMessage: app_datasync_v1_data_sync_pb.DataCaptureUploadResponse|null) => void
  ): UnaryResponse;
  fileUpload(metadata?: grpc.Metadata): RequestStream<app_datasync_v1_data_sync_pb.FileUploadRequest>;
  streamingDataCaptureUpload(metadata?: grpc.Metadata): RequestStream<app_datasync_v1_data_sync_pb.StreamingDataCaptureUploadRequest>;
}

