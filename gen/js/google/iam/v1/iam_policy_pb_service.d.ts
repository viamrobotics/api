// package: google.iam.v1
// file: google/iam/v1/iam_policy.proto

import * as google_iam_v1_iam_policy_pb from "../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../google/iam/v1/policy_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IAMPolicySetIamPolicy = {
  readonly methodName: string;
  readonly service: typeof IAMPolicy;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_iam_v1_iam_policy_pb.SetIamPolicyRequest;
  readonly responseType: typeof google_iam_v1_policy_pb.Policy;
};

type IAMPolicyGetIamPolicy = {
  readonly methodName: string;
  readonly service: typeof IAMPolicy;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_iam_v1_iam_policy_pb.GetIamPolicyRequest;
  readonly responseType: typeof google_iam_v1_policy_pb.Policy;
};

type IAMPolicyTestIamPermissions = {
  readonly methodName: string;
  readonly service: typeof IAMPolicy;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest;
  readonly responseType: typeof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse;
};

export class IAMPolicy {
  static readonly serviceName: string;
  static readonly SetIamPolicy: IAMPolicySetIamPolicy;
  static readonly GetIamPolicy: IAMPolicyGetIamPolicy;
  static readonly TestIamPermissions: IAMPolicyTestIamPermissions;
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

export class IAMPolicyClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setIamPolicy(
    requestMessage: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_policy_pb.Policy|null) => void
  ): UnaryResponse;
  setIamPolicy(
    requestMessage: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_policy_pb.Policy|null) => void
  ): UnaryResponse;
  getIamPolicy(
    requestMessage: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_policy_pb.Policy|null) => void
  ): UnaryResponse;
  getIamPolicy(
    requestMessage: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_policy_pb.Policy|null) => void
  ): UnaryResponse;
  testIamPermissions(
    requestMessage: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse|null) => void
  ): UnaryResponse;
  testIamPermissions(
    requestMessage: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse|null) => void
  ): UnaryResponse;
}

