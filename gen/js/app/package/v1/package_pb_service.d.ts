// package: viam.app.package.v1
// file: app/package/v1/package.proto

import * as app_package_v1_package_pb from "../../../app/package/v1/package_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PackageServiceAddPackage = {
  readonly methodName: string;
  readonly service: typeof PackageService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_package_v1_package_pb.AddPackageRequest;
  readonly responseType: typeof app_package_v1_package_pb.AddPackageResponse;
};

type PackageServiceDeletePackage = {
  readonly methodName: string;
  readonly service: typeof PackageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_package_v1_package_pb.DeletePackageRequest;
  readonly responseType: typeof app_package_v1_package_pb.DeletePackageResponse;
};

type PackageServiceGetPackages = {
  readonly methodName: string;
  readonly service: typeof PackageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_package_v1_package_pb.GetPackagesRequest;
  readonly responseType: typeof app_package_v1_package_pb.GetPackagesResponse;
};

export class PackageService {
  static readonly serviceName: string;
  static readonly AddPackage: PackageServiceAddPackage;
  static readonly DeletePackage: PackageServiceDeletePackage;
  static readonly GetPackages: PackageServiceGetPackages;
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

export class PackageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addPackage(metadata?: grpc.Metadata): RequestStream<app_package_v1_package_pb.AddPackageRequest>;
  deletePackage(
    requestMessage: app_package_v1_package_pb.DeletePackageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_package_v1_package_pb.DeletePackageResponse|null) => void
  ): UnaryResponse;
  deletePackage(
    requestMessage: app_package_v1_package_pb.DeletePackageRequest,
    callback: (error: ServiceError|null, responseMessage: app_package_v1_package_pb.DeletePackageResponse|null) => void
  ): UnaryResponse;
  getPackages(
    requestMessage: app_package_v1_package_pb.GetPackagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_package_v1_package_pb.GetPackagesResponse|null) => void
  ): UnaryResponse;
  getPackages(
    requestMessage: app_package_v1_package_pb.GetPackagesRequest,
    callback: (error: ServiceError|null, responseMessage: app_package_v1_package_pb.GetPackagesResponse|null) => void
  ): UnaryResponse;
}

