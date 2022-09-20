// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as app_data_v1_data_pb from "../../../app/data/v1/data_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataServiceTabularDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_data_v1_data_pb.TabularDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.TabularDataByFilterResponse;
};

type DataServiceBinaryDataByFilter = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_data_v1_data_pb.BinaryDataByFilterRequest;
  readonly responseType: typeof app_data_v1_data_pb.BinaryDataByFilterResponse;
};

type DataServiceBinaryDataByIDs = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_data_v1_data_pb.BinaryDataByIDsRequest;
  readonly responseType: typeof app_data_v1_data_pb.BinaryDataByIDsResponse;
};

export class DataService {
  static readonly serviceName: string;
  static readonly TabularDataByFilter: DataServiceTabularDataByFilter;
  static readonly BinaryDataByFilter: DataServiceBinaryDataByFilter;
  static readonly BinaryDataByIDs: DataServiceBinaryDataByIDs;
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
  tabularDataByFilter(requestMessage: app_data_v1_data_pb.TabularDataByFilterRequest, metadata?: grpc.Metadata): ResponseStream<app_data_v1_data_pb.TabularDataByFilterResponse>;
  binaryDataByFilter(requestMessage: app_data_v1_data_pb.BinaryDataByFilterRequest, metadata?: grpc.Metadata): ResponseStream<app_data_v1_data_pb.BinaryDataByFilterResponse>;
  binaryDataByIDs(requestMessage: app_data_v1_data_pb.BinaryDataByIDsRequest, metadata?: grpc.Metadata): ResponseStream<app_data_v1_data_pb.BinaryDataByIDsResponse>;
}

