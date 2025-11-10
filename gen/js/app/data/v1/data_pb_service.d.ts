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

type DataServiceTabularDataBySQL = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.TabularDataBySQLRequest;
  readonly responseType: typeof app_data_v1_data_pb.TabularDataBySQLResponse;
};

type DataServiceTabularDataByMQL = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.TabularDataByMQLRequest;
  readonly responseType: typeof app_data_v1_data_pb.TabularDataByMQLResponse;
};

type DataServiceExportTabularData = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_data_v1_data_pb.ExportTabularDataRequest;
  readonly responseType: typeof app_data_v1_data_pb.ExportTabularDataResponse;
};

type DataServiceGetLatestTabularData = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.GetLatestTabularDataRequest;
  readonly responseType: typeof app_data_v1_data_pb.GetLatestTabularDataResponse;
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

type DataServiceDeleteTabularData = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteTabularDataRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteTabularDataResponse;
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

type DataServiceAddTagsToBinaryDataByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByIDsResponse;
};

type DataServiceAddTagsToBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddTagsToBinaryDataByFilterResponse;
};

type DataServiceRemoveTagsFromBinaryDataByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsResponse;
};

type DataServiceRemoveTagsFromBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterResponse;
};

type DataServiceTagsByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.TagsByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.TagsByFilterResponse;
};

type DataServiceAddBoundingBoxToImageByID = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddBoundingBoxToImageByIDRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddBoundingBoxToImageByIDResponse;
};

type DataServiceRemoveBoundingBoxFromImageByID = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDResponse;
};

type DataServiceBoundingBoxLabelsByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.BoundingBoxLabelsByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.BoundingBoxLabelsByFilterResponse;
};

type DataServiceUpdateBoundingBox = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.UpdateBoundingBoxRequest;
  readonly responseType: typeof app_data_v1_data_pb.UpdateBoundingBoxResponse;
};

type DataServiceGetDatabaseConnection = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.GetDatabaseConnectionRequest;
  readonly responseType: typeof app_data_v1_data_pb.GetDatabaseConnectionResponse;
};

type DataServiceConfigureDatabaseUser = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.ConfigureDatabaseUserRequest;
  readonly responseType: typeof app_data_v1_data_pb.ConfigureDatabaseUserResponse;
};

type DataServiceAddBinaryDataToDatasetByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.AddBinaryDataToDatasetByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.AddBinaryDataToDatasetByIDsResponse;
};

type DataServiceRemoveBinaryDataFromDatasetByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsResponse;
};

type DataServiceCreateIndex = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.CreateIndexRequest;
  readonly responseType: typeof app_data_v1_data_pb.CreateIndexResponse;
};

type DataServiceListIndexes = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.ListIndexesRequest;
  readonly responseType: typeof app_data_v1_data_pb.ListIndexesResponse;
};

type DataServiceDeleteIndex = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteIndexRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteIndexResponse;
};

type DataServiceCreateSavedQuery = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.CreateSavedQueryRequest;
  readonly responseType: typeof app_data_v1_data_pb.CreateSavedQueryResponse;
};

type DataServiceUpdateSavedQuery = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.UpdateSavedQueryRequest;
  readonly responseType: typeof app_data_v1_data_pb.UpdateSavedQueryResponse;
};

type DataServiceGetSavedQuery = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.GetSavedQueryRequest;
  readonly responseType: typeof app_data_v1_data_pb.GetSavedQueryResponse;
};

type DataServiceDeleteSavedQuery = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.DeleteSavedQueryRequest;
  readonly responseType: typeof app_data_v1_data_pb.DeleteSavedQueryResponse;
};

type DataServiceListSavedQueries = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.ListSavedQueriesRequest;
  readonly responseType: typeof app_data_v1_data_pb.ListSavedQueriesResponse;
};

export class DataService {
  static readonly serviceName: string;
  static readonly TabularDataByFilter: DataServiceTabularDataByFilter;
  static readonly TabularDataBySQL: DataServiceTabularDataBySQL;
  static readonly TabularDataByMQL: DataServiceTabularDataByMQL;
  static readonly ExportTabularData: DataServiceExportTabularData;
  static readonly GetLatestTabularData: DataServiceGetLatestTabularData;
  static readonly BinaryDataByFilter: DataServiceBinaryDataByFilter;
  static readonly BinaryDataByIDs: DataServiceBinaryDataByIDs;
  static readonly DeleteTabularData: DataServiceDeleteTabularData;
  static readonly DeleteBinaryDataByFilter: DataServiceDeleteBinaryDataByFilter;
  static readonly DeleteBinaryDataByIDs: DataServiceDeleteBinaryDataByIDs;
  static readonly AddTagsToBinaryDataByIDs: DataServiceAddTagsToBinaryDataByIDs;
  static readonly AddTagsToBinaryDataByFilter: DataServiceAddTagsToBinaryDataByFilter;
  static readonly RemoveTagsFromBinaryDataByIDs: DataServiceRemoveTagsFromBinaryDataByIDs;
  static readonly RemoveTagsFromBinaryDataByFilter: DataServiceRemoveTagsFromBinaryDataByFilter;
  static readonly TagsByFilter: DataServiceTagsByFilter;
  static readonly AddBoundingBoxToImageByID: DataServiceAddBoundingBoxToImageByID;
  static readonly RemoveBoundingBoxFromImageByID: DataServiceRemoveBoundingBoxFromImageByID;
  static readonly BoundingBoxLabelsByFilter: DataServiceBoundingBoxLabelsByFilter;
  static readonly UpdateBoundingBox: DataServiceUpdateBoundingBox;
  static readonly GetDatabaseConnection: DataServiceGetDatabaseConnection;
  static readonly ConfigureDatabaseUser: DataServiceConfigureDatabaseUser;
  static readonly AddBinaryDataToDatasetByIDs: DataServiceAddBinaryDataToDatasetByIDs;
  static readonly RemoveBinaryDataFromDatasetByIDs: DataServiceRemoveBinaryDataFromDatasetByIDs;
  static readonly CreateIndex: DataServiceCreateIndex;
  static readonly ListIndexes: DataServiceListIndexes;
  static readonly DeleteIndex: DataServiceDeleteIndex;
  static readonly CreateSavedQuery: DataServiceCreateSavedQuery;
  static readonly UpdateSavedQuery: DataServiceUpdateSavedQuery;
  static readonly GetSavedQuery: DataServiceGetSavedQuery;
  static readonly DeleteSavedQuery: DataServiceDeleteSavedQuery;
  static readonly ListSavedQueries: DataServiceListSavedQueries;
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
  tabularDataBySQL(
    requestMessage: app_data_v1_data_pb.TabularDataBySQLRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataBySQLResponse|null) => void
  ): UnaryResponse;
  tabularDataBySQL(
    requestMessage: app_data_v1_data_pb.TabularDataBySQLRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataBySQLResponse|null) => void
  ): UnaryResponse;
  tabularDataByMQL(
    requestMessage: app_data_v1_data_pb.TabularDataByMQLRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataByMQLResponse|null) => void
  ): UnaryResponse;
  tabularDataByMQL(
    requestMessage: app_data_v1_data_pb.TabularDataByMQLRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TabularDataByMQLResponse|null) => void
  ): UnaryResponse;
  exportTabularData(requestMessage: app_data_v1_data_pb.ExportTabularDataRequest, metadata?: grpc.Metadata): ResponseStream<app_data_v1_data_pb.ExportTabularDataResponse>;
  getLatestTabularData(
    requestMessage: app_data_v1_data_pb.GetLatestTabularDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetLatestTabularDataResponse|null) => void
  ): UnaryResponse;
  getLatestTabularData(
    requestMessage: app_data_v1_data_pb.GetLatestTabularDataRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetLatestTabularDataResponse|null) => void
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
  deleteTabularData(
    requestMessage: app_data_v1_data_pb.DeleteTabularDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteTabularDataResponse|null) => void
  ): UnaryResponse;
  deleteTabularData(
    requestMessage: app_data_v1_data_pb.DeleteTabularDataRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteTabularDataResponse|null) => void
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
  addTagsToBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  addTagsToBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.AddTagsToBinaryDataByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddTagsToBinaryDataByIDsResponse|null) => void
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
  removeTagsFromBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsResponse|null) => void
  ): UnaryResponse;
  removeTagsFromBinaryDataByIDs(
    requestMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsResponse|null) => void
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
  tagsByFilter(
    requestMessage: app_data_v1_data_pb.TagsByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TagsByFilterResponse|null) => void
  ): UnaryResponse;
  tagsByFilter(
    requestMessage: app_data_v1_data_pb.TagsByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.TagsByFilterResponse|null) => void
  ): UnaryResponse;
  addBoundingBoxToImageByID(
    requestMessage: app_data_v1_data_pb.AddBoundingBoxToImageByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddBoundingBoxToImageByIDResponse|null) => void
  ): UnaryResponse;
  addBoundingBoxToImageByID(
    requestMessage: app_data_v1_data_pb.AddBoundingBoxToImageByIDRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddBoundingBoxToImageByIDResponse|null) => void
  ): UnaryResponse;
  removeBoundingBoxFromImageByID(
    requestMessage: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDResponse|null) => void
  ): UnaryResponse;
  removeBoundingBoxFromImageByID(
    requestMessage: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDResponse|null) => void
  ): UnaryResponse;
  boundingBoxLabelsByFilter(
    requestMessage: app_data_v1_data_pb.BoundingBoxLabelsByFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BoundingBoxLabelsByFilterResponse|null) => void
  ): UnaryResponse;
  boundingBoxLabelsByFilter(
    requestMessage: app_data_v1_data_pb.BoundingBoxLabelsByFilterRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.BoundingBoxLabelsByFilterResponse|null) => void
  ): UnaryResponse;
  updateBoundingBox(
    requestMessage: app_data_v1_data_pb.UpdateBoundingBoxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.UpdateBoundingBoxResponse|null) => void
  ): UnaryResponse;
  updateBoundingBox(
    requestMessage: app_data_v1_data_pb.UpdateBoundingBoxRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.UpdateBoundingBoxResponse|null) => void
  ): UnaryResponse;
  getDatabaseConnection(
    requestMessage: app_data_v1_data_pb.GetDatabaseConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetDatabaseConnectionResponse|null) => void
  ): UnaryResponse;
  getDatabaseConnection(
    requestMessage: app_data_v1_data_pb.GetDatabaseConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetDatabaseConnectionResponse|null) => void
  ): UnaryResponse;
  configureDatabaseUser(
    requestMessage: app_data_v1_data_pb.ConfigureDatabaseUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ConfigureDatabaseUserResponse|null) => void
  ): UnaryResponse;
  configureDatabaseUser(
    requestMessage: app_data_v1_data_pb.ConfigureDatabaseUserRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ConfigureDatabaseUserResponse|null) => void
  ): UnaryResponse;
  addBinaryDataToDatasetByIDs(
    requestMessage: app_data_v1_data_pb.AddBinaryDataToDatasetByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddBinaryDataToDatasetByIDsResponse|null) => void
  ): UnaryResponse;
  addBinaryDataToDatasetByIDs(
    requestMessage: app_data_v1_data_pb.AddBinaryDataToDatasetByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.AddBinaryDataToDatasetByIDsResponse|null) => void
  ): UnaryResponse;
  removeBinaryDataFromDatasetByIDs(
    requestMessage: app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsResponse|null) => void
  ): UnaryResponse;
  removeBinaryDataFromDatasetByIDs(
    requestMessage: app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.RemoveBinaryDataFromDatasetByIDsResponse|null) => void
  ): UnaryResponse;
  createIndex(
    requestMessage: app_data_v1_data_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.CreateIndexResponse|null) => void
  ): UnaryResponse;
  createIndex(
    requestMessage: app_data_v1_data_pb.CreateIndexRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.CreateIndexResponse|null) => void
  ): UnaryResponse;
  listIndexes(
    requestMessage: app_data_v1_data_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ListIndexesResponse|null) => void
  ): UnaryResponse;
  listIndexes(
    requestMessage: app_data_v1_data_pb.ListIndexesRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ListIndexesResponse|null) => void
  ): UnaryResponse;
  deleteIndex(
    requestMessage: app_data_v1_data_pb.DeleteIndexRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteIndexResponse|null) => void
  ): UnaryResponse;
  deleteIndex(
    requestMessage: app_data_v1_data_pb.DeleteIndexRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteIndexResponse|null) => void
  ): UnaryResponse;
  createSavedQuery(
    requestMessage: app_data_v1_data_pb.CreateSavedQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.CreateSavedQueryResponse|null) => void
  ): UnaryResponse;
  createSavedQuery(
    requestMessage: app_data_v1_data_pb.CreateSavedQueryRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.CreateSavedQueryResponse|null) => void
  ): UnaryResponse;
  updateSavedQuery(
    requestMessage: app_data_v1_data_pb.UpdateSavedQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.UpdateSavedQueryResponse|null) => void
  ): UnaryResponse;
  updateSavedQuery(
    requestMessage: app_data_v1_data_pb.UpdateSavedQueryRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.UpdateSavedQueryResponse|null) => void
  ): UnaryResponse;
  getSavedQuery(
    requestMessage: app_data_v1_data_pb.GetSavedQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetSavedQueryResponse|null) => void
  ): UnaryResponse;
  getSavedQuery(
    requestMessage: app_data_v1_data_pb.GetSavedQueryRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.GetSavedQueryResponse|null) => void
  ): UnaryResponse;
  deleteSavedQuery(
    requestMessage: app_data_v1_data_pb.DeleteSavedQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteSavedQueryResponse|null) => void
  ): UnaryResponse;
  deleteSavedQuery(
    requestMessage: app_data_v1_data_pb.DeleteSavedQueryRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.DeleteSavedQueryResponse|null) => void
  ): UnaryResponse;
  listSavedQueries(
    requestMessage: app_data_v1_data_pb.ListSavedQueriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ListSavedQueriesResponse|null) => void
  ): UnaryResponse;
  listSavedQueries(
    requestMessage: app_data_v1_data_pb.ListSavedQueriesRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.ListSavedQueriesResponse|null) => void
  ): UnaryResponse;
}

