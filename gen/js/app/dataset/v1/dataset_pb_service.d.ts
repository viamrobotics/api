// package: viam.app.dataset.v1
// file: app/dataset/v1/dataset.proto

import * as app_dataset_v1_dataset_pb from "../../../app/dataset/v1/dataset_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DatasetServiceCreateDataset = {
  readonly methodName: string;
  readonly service: typeof DatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_dataset_v1_dataset_pb.CreateDatasetRequest;
  readonly responseType: typeof app_dataset_v1_dataset_pb.CreateDatasetResponse;
};

type DatasetServiceDeleteDataset = {
  readonly methodName: string;
  readonly service: typeof DatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_dataset_v1_dataset_pb.DeleteDatasetRequest;
  readonly responseType: typeof app_dataset_v1_dataset_pb.DeleteDatasetResponse;
};

type DatasetServiceRenameDataset = {
  readonly methodName: string;
  readonly service: typeof DatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_dataset_v1_dataset_pb.RenameDatasetRequest;
  readonly responseType: typeof app_dataset_v1_dataset_pb.RenameDatasetResponse;
};

type DatasetServiceListDatasetsByOrganizationID = {
  readonly methodName: string;
  readonly service: typeof DatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDRequest;
  readonly responseType: typeof app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDResponse;
};

type DatasetServiceListDatasetsByIDs = {
  readonly methodName: string;
  readonly service: typeof DatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_dataset_v1_dataset_pb.ListDatasetsByIDsRequest;
  readonly responseType: typeof app_dataset_v1_dataset_pb.ListDatasetsByIDsResponse;
};

export class DatasetService {
  static readonly serviceName: string;
  static readonly CreateDataset: DatasetServiceCreateDataset;
  static readonly DeleteDataset: DatasetServiceDeleteDataset;
  static readonly RenameDataset: DatasetServiceRenameDataset;
  static readonly ListDatasetsByOrganizationID: DatasetServiceListDatasetsByOrganizationID;
  static readonly ListDatasetsByIDs: DatasetServiceListDatasetsByIDs;
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

export class DatasetServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createDataset(
    requestMessage: app_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.CreateDatasetResponse|null) => void
  ): UnaryResponse;
  createDataset(
    requestMessage: app_dataset_v1_dataset_pb.CreateDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.CreateDatasetResponse|null) => void
  ): UnaryResponse;
  deleteDataset(
    requestMessage: app_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.DeleteDatasetResponse|null) => void
  ): UnaryResponse;
  deleteDataset(
    requestMessage: app_dataset_v1_dataset_pb.DeleteDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.DeleteDatasetResponse|null) => void
  ): UnaryResponse;
  renameDataset(
    requestMessage: app_dataset_v1_dataset_pb.RenameDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.RenameDatasetResponse|null) => void
  ): UnaryResponse;
  renameDataset(
    requestMessage: app_dataset_v1_dataset_pb.RenameDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.RenameDatasetResponse|null) => void
  ): UnaryResponse;
  listDatasetsByOrganizationID(
    requestMessage: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDResponse|null) => void
  ): UnaryResponse;
  listDatasetsByOrganizationID(
    requestMessage: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDRequest,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDResponse|null) => void
  ): UnaryResponse;
  listDatasetsByIDs(
    requestMessage: app_dataset_v1_dataset_pb.ListDatasetsByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.ListDatasetsByIDsResponse|null) => void
  ): UnaryResponse;
  listDatasetsByIDs(
    requestMessage: app_dataset_v1_dataset_pb.ListDatasetsByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_dataset_v1_dataset_pb.ListDatasetsByIDsResponse|null) => void
  ): UnaryResponse;
}

