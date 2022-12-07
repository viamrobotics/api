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

type DataServiceAddTagsToBinaryDataByFileIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsResponse;
};

type DataServiceAddTagsToBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFilterResponse;
};

type DataServiceRemoveTagsFromBinaryDataByFileIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsResponse;
};

type DataServiceRemoveTagsFromBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterResponse;
};

export class DataService {
  static readonly serviceName: string;
  static readonly TabularDataByFilter: DataServiceTabularDataByFilter;
  static readonly BinaryDataByFilter: DataServiceBinaryDataByFilter;
  static readonly BinaryDataByIDs: DataServiceBinaryDataByIDs;
  static readonly DeleteTabularDataByFilter: DataServiceDeleteTabularDataByFilter;
  static readonly DeleteBinaryDataByFilter: DataServiceDeleteBinaryDataByFilter;
  static readonly DeleteBinaryDataByIDs: DataServiceDeleteBinaryDataByIDs;
  static readonly AddTagsToBinaryDataByFileIDs: DataServiceAddTagsToBinaryDataByFileIDs;
  static readonly AddTagsToBinaryDataByFilter: DataServiceAddTagsToBinaryDataByFilter;
  static readonly RemoveTagsFromBinaryDataByFileIDs: DataServiceRemoveTagsFromBinaryDataByFileIDs;
  static readonly RemoveTagsFromBinaryDataByFilter: DataServiceRemoveTagsFromBinaryDataByFilter;
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
  addTagsToBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  addTagsToBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  addTagsToBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  addTagsToBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  removeTagsFromBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  removeTagsFromBinaryDataByFileIDs(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFileIDsResponse|null) => void
  ): UnaryResponse;
  removeTagsFromBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
  removeTagsFromBinaryDataByFilter(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterResponse|null) => void
  ): UnaryResponse;
}

