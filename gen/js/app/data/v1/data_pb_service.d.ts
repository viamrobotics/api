// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as app_data_v1_data_pb from "../../../app/data/v1/data_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataServiceTabularDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.TabularDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.TabularDataByFilterResponse;
};

type DataServiceBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.BinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.BinaryDataByFilterResponse;
};

type DataServiceBinaryDataByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.BinaryDataByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.BinaryDataByIDsResponse;
};

type DataServiceDeleteTabularDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteTabularDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteTabularDataByFilterResponse;
};

type DataServiceDeleteBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteBinaryDataByFilterResponse;
};

type DataServiceDeleteBinaryDataByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteBinaryDataByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteBinaryDataByIDsResponse;
};

type DataServiceAddAnnotationsToBinaryDataByFileIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsResponse;
};

type DataServiceAddAnnotationsToBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterResponse;
};

type DataServiceRemoveAnnotationsFromBinaryDataByFileIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsResponse;
};

type DataServiceRemoveAnnotationsFromBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterResponse;
};

export class DataService {
  static readonly serviceName: string;
  static readonly TabularDataByFilter: DataServiceTabularDataByFilter;
  static readonly BinaryDataByFilter: DataServiceBinaryDataByFilter;
  static readonly BinaryDataByIDs: DataServiceBinaryDataByIDs;
  static readonly DeleteTabularDataByFilter: DataServiceDeleteTabularDataByFilter;
  static readonly DeleteBinaryDataByFilter: DataServiceDeleteBinaryDataByFilter;
  static readonly DeleteBinaryDataByIDs: DataServiceDeleteBinaryDataByIDs;
  static readonly AddAnnotationsToBinaryDataByFileIDs: DataServiceAddAnnotationsToBinaryDataByFileIDs;
  static readonly AddAnnotationsToBinaryDataByFilter: DataServiceAddAnnotationsToBinaryDataByFilter;
  static readonly RemoveAnnotationsFromBinaryDataByFileIDs: DataServiceRemoveAnnotationsFromBinaryDataByFileIDs;
  static readonly RemoveAnnotationsFromBinaryDataByFilter: DataServiceRemoveAnnotationsFromBinaryDataByFilter;
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

export class DataServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  tabularDataByFilter(
    requestMessage: app_data_v1_data_pb.TabularDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataByFilterResponse|null) => void
  ): UnaryResponse;
  tabularDataByFilter(
    requestMessage: app_data_v1_data_pb.TabularDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataByFilterResponse|null) => void
  ): UnaryResponse;
  binaryDataByFilter(
    requestMessage: app_data_v1_data_pb.BinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  binaryDataByFilter(
    requestMessage: app_data_v1_data_pb.BinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  binaryDataByIDs(
    requestMessage: app_data_v1_data_pb.BinaryDataByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  binaryDataByIDs(
    requestMessage: app_data_v1_data_pb.BinaryDataByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  deleteTabularDataByFilter(
    requestMessage: app_data_v1_data_pb.DeleteTabularDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteTabularDataByFilterResponse|null) => void
  ): UnaryResponse;
  deleteTabularDataByFilter(
    requestMessage: app_data_v1_data_pb.DeleteTabularDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteTabularDataByFilterResponse|null) => void
  ): UnaryResponse;
  deleteBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.DeleteBinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  deleteBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.DeleteBinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  deleteBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.DeleteBinaryDataByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteBinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  deleteBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.DeleteBinaryDataByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteBinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  addAnnotationsToBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  addAnnotationsToBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  addAnnotationsToBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  addAnnotationsToBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddAnnotationsToBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  removeAnnotationsFromBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  removeAnnotationsFromBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  removeAnnotationsFromBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  removeAnnotationsFromBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveAnnotationsFromBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
}

