// package: google.longrunning
// file: google/longrunning/operations.proto

import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OperationsListOperations = {
  readonly methodName: string;
  readonly service: typeof Operations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_longrunning_operations_pb.ListOperationsRequest;
  readonly responseType: typeof google_longrunning_operations_pb.ListOperationsResponse;
};

type OperationsGetOperation = {
  readonly methodName: string;
  readonly service: typeof Operations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_longrunning_operations_pb.GetOperationRequest;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type OperationsDeleteOperation = {
  readonly methodName: string;
  readonly service: typeof Operations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_longrunning_operations_pb.DeleteOperationRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type OperationsCancelOperation = {
  readonly methodName: string;
  readonly service: typeof Operations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_longrunning_operations_pb.CancelOperationRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type OperationsWaitOperation = {
  readonly methodName: string;
  readonly service: typeof Operations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_longrunning_operations_pb.WaitOperationRequest;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

export class Operations {
  static readonly serviceName: string;
  static readonly ListOperations: OperationsListOperations;
  static readonly GetOperation: OperationsGetOperation;
  static readonly DeleteOperation: OperationsDeleteOperation;
  static readonly CancelOperation: OperationsCancelOperation;
  static readonly WaitOperation: OperationsWaitOperation;
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

export class OperationsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listOperations(
    requestMessage: google_longrunning_operations_pb.ListOperationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.ListOperationsResponse|null) => void
  ): UnaryResponse;
  listOperations(
    requestMessage: google_longrunning_operations_pb.ListOperationsRequest,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.ListOperationsResponse|null) => void
  ): UnaryResponse;
  getOperation(
    requestMessage: google_longrunning_operations_pb.GetOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  getOperation(
    requestMessage: google_longrunning_operations_pb.GetOperationRequest,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  deleteOperation(
    requestMessage: google_longrunning_operations_pb.DeleteOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteOperation(
    requestMessage: google_longrunning_operations_pb.DeleteOperationRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: google_longrunning_operations_pb.CancelOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  cancelOperation(
    requestMessage: google_longrunning_operations_pb.CancelOperationRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  waitOperation(
    requestMessage: google_longrunning_operations_pb.WaitOperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  waitOperation(
    requestMessage: google_longrunning_operations_pb.WaitOperationRequest,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
}

