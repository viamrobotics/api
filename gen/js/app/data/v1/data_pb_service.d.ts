// package: viam.app.data.v1
// file: app/data/v1/data.proto

import * as app_data_v1_data_pb from "../../../app/data/v1/data_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataServiceQuery = {
  readonly methodName: string;
  readonly service: typeof DataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_data_v1_data_pb.QueryRequest;
  readonly responseType: typeof app_data_v1_data_pb.QueryResponse;
};

export class DataService {
  static readonly serviceName: string;
  static readonly Query: DataServiceQuery;
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
  query(
    requestMessage: app_data_v1_data_pb.QueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.QueryResponse|null) => void
  ): UnaryResponse;
  query(
    requestMessage: app_data_v1_data_pb.QueryRequest,
    callback: (error: ServiceError|null, responseMessage: app_data_v1_data_pb.QueryResponse|null) => void
  ): UnaryResponse;
}

