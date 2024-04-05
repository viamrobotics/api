// package: viam.app.v1
// file: app/v1/end_user.proto

import * as app_v1_end_user_pb from "../../app/v1/end_user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EndUserServiceIsLegalAccepted = {
  readonly methodName: string;
  readonly service: typeof EndUserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_end_user_pb.IsLegalAcceptedRequest;
  readonly responseType: typeof app_v1_end_user_pb.IsLegalAcceptedResponse;
};

type EndUserServiceAcceptLegal = {
  readonly methodName: string;
  readonly service: typeof EndUserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_end_user_pb.AcceptLegalRequest;
  readonly responseType: typeof app_v1_end_user_pb.AcceptLegalResponse;
};

type EndUserServiceRegisterAuthApplication = {
  readonly methodName: string;
  readonly service: typeof EndUserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_end_user_pb.RegisterAuthApplicationRequest;
  readonly responseType: typeof app_v1_end_user_pb.RegisterAuthApplicationResponse;
};

type EndUserServiceUpdateAuthApplication = {
  readonly methodName: string;
  readonly service: typeof EndUserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_end_user_pb.UpdateAuthApplicationRequest;
  readonly responseType: typeof app_v1_end_user_pb.UpdateAuthApplicationResponse;
};

export class EndUserService {
  static readonly serviceName: string;
  static readonly IsLegalAccepted: EndUserServiceIsLegalAccepted;
  static readonly AcceptLegal: EndUserServiceAcceptLegal;
  static readonly RegisterAuthApplication: EndUserServiceRegisterAuthApplication;
  static readonly UpdateAuthApplication: EndUserServiceUpdateAuthApplication;
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

export class EndUserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  isLegalAccepted(
    requestMessage: app_v1_end_user_pb.IsLegalAcceptedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.IsLegalAcceptedResponse|null) => void
  ): UnaryResponse;
  isLegalAccepted(
    requestMessage: app_v1_end_user_pb.IsLegalAcceptedRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.IsLegalAcceptedResponse|null) => void
  ): UnaryResponse;
  acceptLegal(
    requestMessage: app_v1_end_user_pb.AcceptLegalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.AcceptLegalResponse|null) => void
  ): UnaryResponse;
  acceptLegal(
    requestMessage: app_v1_end_user_pb.AcceptLegalRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.AcceptLegalResponse|null) => void
  ): UnaryResponse;
  registerAuthApplication(
    requestMessage: app_v1_end_user_pb.RegisterAuthApplicationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.RegisterAuthApplicationResponse|null) => void
  ): UnaryResponse;
  registerAuthApplication(
    requestMessage: app_v1_end_user_pb.RegisterAuthApplicationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.RegisterAuthApplicationResponse|null) => void
  ): UnaryResponse;
  updateAuthApplication(
    requestMessage: app_v1_end_user_pb.UpdateAuthApplicationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.UpdateAuthApplicationResponse|null) => void
  ): UnaryResponse;
  updateAuthApplication(
    requestMessage: app_v1_end_user_pb.UpdateAuthApplicationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_end_user_pb.UpdateAuthApplicationResponse|null) => void
  ): UnaryResponse;
}

