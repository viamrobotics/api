// package: viam.app.build.v1
// file: app/build/v1/build.proto

import * as app_build_v1_build_pb from "../../../app/build/v1/build_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BuildServiceStartBuild = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.StartBuildRequest;
  readonly responseType: typeof app_build_v1_build_pb.StartBuildResponse;
};

type BuildServiceGetLogs = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_build_v1_build_pb.GetLogsRequest;
  readonly responseType: typeof app_build_v1_build_pb.GetLogsResponse;
};

type BuildServiceListJobs = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.ListJobsRequest;
  readonly responseType: typeof app_build_v1_build_pb.ListJobsResponse;
};

type BuildServiceLinkRepo = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.LinkRepoRequest;
  readonly responseType: typeof app_build_v1_build_pb.LinkRepoResponse;
};

type BuildServiceUnlinkRepo = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.UnlinkRepoRequest;
  readonly responseType: typeof app_build_v1_build_pb.UnlinkRepoResponse;
};

type BuildServiceListRepoLinks = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.ListRepoLinksRequest;
  readonly responseType: typeof app_build_v1_build_pb.ListRepoLinksResponse;
};

type BuildServiceListAppLinks = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.ListAppLinksRequest;
  readonly responseType: typeof app_build_v1_build_pb.ListAppLinksResponse;
};

type BuildServiceRemoveAppLink = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.RemoveAppLinkRequest;
  readonly responseType: typeof app_build_v1_build_pb.RemoveAppLinkResponse;
};

type BuildServiceLinkOrg = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.LinkOrgRequest;
  readonly responseType: typeof app_build_v1_build_pb.LinkOrgResponse;
};

type BuildServiceUnlinkOrg = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.UnlinkOrgRequest;
  readonly responseType: typeof app_build_v1_build_pb.UnlinkOrgResponse;
};

type BuildServiceStartReloadBuild = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.StartReloadBuildRequest;
  readonly responseType: typeof app_build_v1_build_pb.StartReloadBuildResponse;
};

type BuildServiceStartPackageBuild = {
  readonly methodName: string;
  readonly service: typeof BuildService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_build_v1_build_pb.StartPackageBuildRequest;
  readonly responseType: typeof app_build_v1_build_pb.StartPackageBuildResponse;
};

export class BuildService {
  static readonly serviceName: string;
  static readonly StartBuild: BuildServiceStartBuild;
  static readonly GetLogs: BuildServiceGetLogs;
  static readonly ListJobs: BuildServiceListJobs;
  static readonly LinkRepo: BuildServiceLinkRepo;
  static readonly UnlinkRepo: BuildServiceUnlinkRepo;
  static readonly ListRepoLinks: BuildServiceListRepoLinks;
  static readonly ListAppLinks: BuildServiceListAppLinks;
  static readonly RemoveAppLink: BuildServiceRemoveAppLink;
  static readonly LinkOrg: BuildServiceLinkOrg;
  static readonly UnlinkOrg: BuildServiceUnlinkOrg;
  static readonly StartReloadBuild: BuildServiceStartReloadBuild;
  static readonly StartPackageBuild: BuildServiceStartPackageBuild;
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

export class BuildServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startBuild(
    requestMessage: app_build_v1_build_pb.StartBuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartBuildResponse|null) => void
  ): UnaryResponse;
  startBuild(
    requestMessage: app_build_v1_build_pb.StartBuildRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartBuildResponse|null) => void
  ): UnaryResponse;
  getLogs(requestMessage: app_build_v1_build_pb.GetLogsRequest, metadata?: grpc.Metadata): ResponseStream<app_build_v1_build_pb.GetLogsResponse>;
  listJobs(
    requestMessage: app_build_v1_build_pb.ListJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListJobsResponse|null) => void
  ): UnaryResponse;
  listJobs(
    requestMessage: app_build_v1_build_pb.ListJobsRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListJobsResponse|null) => void
  ): UnaryResponse;
  linkRepo(
    requestMessage: app_build_v1_build_pb.LinkRepoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.LinkRepoResponse|null) => void
  ): UnaryResponse;
  linkRepo(
    requestMessage: app_build_v1_build_pb.LinkRepoRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.LinkRepoResponse|null) => void
  ): UnaryResponse;
  unlinkRepo(
    requestMessage: app_build_v1_build_pb.UnlinkRepoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.UnlinkRepoResponse|null) => void
  ): UnaryResponse;
  unlinkRepo(
    requestMessage: app_build_v1_build_pb.UnlinkRepoRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.UnlinkRepoResponse|null) => void
  ): UnaryResponse;
  listRepoLinks(
    requestMessage: app_build_v1_build_pb.ListRepoLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListRepoLinksResponse|null) => void
  ): UnaryResponse;
  listRepoLinks(
    requestMessage: app_build_v1_build_pb.ListRepoLinksRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListRepoLinksResponse|null) => void
  ): UnaryResponse;
  listAppLinks(
    requestMessage: app_build_v1_build_pb.ListAppLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListAppLinksResponse|null) => void
  ): UnaryResponse;
  listAppLinks(
    requestMessage: app_build_v1_build_pb.ListAppLinksRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.ListAppLinksResponse|null) => void
  ): UnaryResponse;
  removeAppLink(
    requestMessage: app_build_v1_build_pb.RemoveAppLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.RemoveAppLinkResponse|null) => void
  ): UnaryResponse;
  removeAppLink(
    requestMessage: app_build_v1_build_pb.RemoveAppLinkRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.RemoveAppLinkResponse|null) => void
  ): UnaryResponse;
  linkOrg(
    requestMessage: app_build_v1_build_pb.LinkOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.LinkOrgResponse|null) => void
  ): UnaryResponse;
  linkOrg(
    requestMessage: app_build_v1_build_pb.LinkOrgRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.LinkOrgResponse|null) => void
  ): UnaryResponse;
  unlinkOrg(
    requestMessage: app_build_v1_build_pb.UnlinkOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.UnlinkOrgResponse|null) => void
  ): UnaryResponse;
  unlinkOrg(
    requestMessage: app_build_v1_build_pb.UnlinkOrgRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.UnlinkOrgResponse|null) => void
  ): UnaryResponse;
  startReloadBuild(metadata?: grpc.Metadata): RequestStream<app_build_v1_build_pb.StartReloadBuildRequest>;
  startPackageBuild(
    requestMessage: app_build_v1_build_pb.StartPackageBuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartPackageBuildResponse|null) => void
  ): UnaryResponse;
  startPackageBuild(
    requestMessage: app_build_v1_build_pb.StartPackageBuildRequest,
    callback: (error: ServiceError|null, responseMessage: app_build_v1_build_pb.StartPackageBuildResponse|null) => void
  ): UnaryResponse;
}

