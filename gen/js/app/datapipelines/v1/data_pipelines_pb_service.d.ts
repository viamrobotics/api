// package: viam.app.datapipelines.v1
// file: app/datapipelines/v1/data_pipelines.proto

import * as app_datapipelines_v1_data_pipelines_pb from "../../../app/datapipelines/v1/data_pipelines_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataPipelinesServiceGetDataPipeline = {
  readonly methodName: string;
  readonly service: typeof DataPipelinesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datapipelines_v1_data_pipelines_pb.GetDataPipelineRequest;
  readonly responseType: typeof app_datapipelines_v1_data_pipelines_pb.GetDataPipelineResponse;
};

type DataPipelinesServiceListDataPipelines = {
  readonly methodName: string;
  readonly service: typeof DataPipelinesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesRequest;
  readonly responseType: typeof app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesResponse;
};

type DataPipelinesServiceCreateDataPipeline = {
  readonly methodName: string;
  readonly service: typeof DataPipelinesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineRequest;
  readonly responseType: typeof app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineResponse;
};

type DataPipelinesServiceUpdateDataPipeline = {
  readonly methodName: string;
  readonly service: typeof DataPipelinesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineRequest;
  readonly responseType: typeof app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineResponse;
};

type DataPipelinesServiceDeleteDataPipeline = {
  readonly methodName: string;
  readonly service: typeof DataPipelinesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineRequest;
  readonly responseType: typeof app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineResponse;
};

export class DataPipelinesService {
  static readonly serviceName: string;
  static readonly GetDataPipeline: DataPipelinesServiceGetDataPipeline;
  static readonly ListDataPipelines: DataPipelinesServiceListDataPipelines;
  static readonly CreateDataPipeline: DataPipelinesServiceCreateDataPipeline;
  static readonly UpdateDataPipeline: DataPipelinesServiceUpdateDataPipeline;
  static readonly DeleteDataPipeline: DataPipelinesServiceDeleteDataPipeline;
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

export class DataPipelinesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineResponse|null) => void
  ): UnaryResponse;
  getDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineRequest,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineResponse|null) => void
  ): UnaryResponse;
  listDataPipelines(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesResponse|null) => void
  ): UnaryResponse;
  listDataPipelines(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesRequest,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesResponse|null) => void
  ): UnaryResponse;
  createDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineResponse|null) => void
  ): UnaryResponse;
  createDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineRequest,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineResponse|null) => void
  ): UnaryResponse;
  updateDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineResponse|null) => void
  ): UnaryResponse;
  updateDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineRequest,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineResponse|null) => void
  ): UnaryResponse;
  deleteDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineResponse|null) => void
  ): UnaryResponse;
  deleteDataPipeline(
    requestMessage: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineRequest,
    callback: (error: ServiceError|null, responseMessage: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineResponse|null) => void
  ): UnaryResponse;
}

