// package: viam.app.build.v1
// file: app/build/v1/build.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StartBuildRequest extends jspb.Message {
  getRepo(): string;
  setRepo(value: string): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): string;
  setRef(value: string): void;

  clearPlatformsList(): void;
  getPlatformsList(): Array<string>;
  setPlatformsList(value: Array<string>): void;
  addPlatforms(value: string, index?: number): string;

  getModuleId(): string;
  setModuleId(value: string): void;

  getModuleVersion(): string;
  setModuleVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartBuildRequest): StartBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBuildRequest;
  static deserializeBinaryFromReader(message: StartBuildRequest, reader: jspb.BinaryReader): StartBuildRequest;
}

export namespace StartBuildRequest {
  export type AsObject = {
    repo: string,
    ref: string,
    platformsList: Array<string>,
    moduleId: string,
    moduleVersion: string,
  }
}

export class StartBuildResponse extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartBuildResponse): StartBuildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBuildResponse;
  static deserializeBinaryFromReader(message: StartBuildResponse, reader: jspb.BinaryReader): StartBuildResponse;
}

export namespace StartBuildResponse {
  export type AsObject = {
    buildId: string,
  }
}

export class GetLogsRequest extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsRequest): GetLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsRequest;
  static deserializeBinaryFromReader(message: GetLogsRequest, reader: jspb.BinaryReader): GetLogsRequest;
}

export namespace GetLogsRequest {
  export type AsObject = {
    buildId: string,
    platform: string,
  }
}

export class GetLogsResponse extends jspb.Message {
  getBuildStep(): string;
  setBuildStep(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsResponse): GetLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsResponse;
  static deserializeBinaryFromReader(message: GetLogsResponse, reader: jspb.BinaryReader): GetLogsResponse;
}

export namespace GetLogsResponse {
  export type AsObject = {
    buildStep: string,
    data: string,
  }
}

export class JobInfo extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getStatus(): JobStatusMap[keyof JobStatusMap];
  setStatus(value: JobStatusMap[keyof JobStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobInfo): JobInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInfo;
  static deserializeBinaryFromReader(message: JobInfo, reader: jspb.BinaryReader): JobInfo;
}

export namespace JobInfo {
  export type AsObject = {
    buildId: string,
    platform: string,
    version: string,
    status: JobStatusMap[keyof JobStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  hasMaxJobsLength(): boolean;
  clearMaxJobsLength(): void;
  getMaxJobsLength(): number;
  setMaxJobsLength(value: number): void;

  hasBuildId(): boolean;
  clearBuildId(): void;
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    moduleId: string,
    maxJobsLength: number,
    buildId: string,
  }
}

export class ListJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<JobInfo>;
  setJobsList(value: Array<JobInfo>): void;
  addJobs(value?: JobInfo, index?: number): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<JobInfo.AsObject>,
  }
}

export class RepoLink extends jspb.Message {
  getOauthAppLinkId(): string;
  setOauthAppLinkId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): string;
  setNamespace(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  getRepo(): string;
  setRepo(value: string): void;

  getViamUser(): string;
  setViamUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoLink.AsObject;
  static toObject(includeInstance: boolean, msg: RepoLink): RepoLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepoLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoLink;
  static deserializeBinaryFromReader(message: RepoLink, reader: jspb.BinaryReader): RepoLink;
}

export namespace RepoLink {
  export type AsObject = {
    oauthAppLinkId: string,
    orgId: string,
    namespace: string,
    moduleId: string,
    repo: string,
    viamUser: string,
  }
}

export class LinkRepoRequest extends jspb.Message {
  hasLink(): boolean;
  clearLink(): void;
  getLink(): RepoLink | undefined;
  setLink(value?: RepoLink): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkRepoRequest): LinkRepoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkRepoRequest;
  static deserializeBinaryFromReader(message: LinkRepoRequest, reader: jspb.BinaryReader): LinkRepoRequest;
}

export namespace LinkRepoRequest {
  export type AsObject = {
    link?: RepoLink.AsObject,
  }
}

export class LinkRepoResponse extends jspb.Message {
  getRepoLinkId(): string;
  setRepoLinkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkRepoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkRepoResponse): LinkRepoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkRepoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkRepoResponse;
  static deserializeBinaryFromReader(message: LinkRepoResponse, reader: jspb.BinaryReader): LinkRepoResponse;
}

export namespace LinkRepoResponse {
  export type AsObject = {
    repoLinkId: string,
  }
}

export class UnlinkRepoRequest extends jspb.Message {
  getRepoLinkId(): string;
  setRepoLinkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkRepoRequest): UnlinkRepoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkRepoRequest;
  static deserializeBinaryFromReader(message: UnlinkRepoRequest, reader: jspb.BinaryReader): UnlinkRepoRequest;
}

export namespace UnlinkRepoRequest {
  export type AsObject = {
    repoLinkId: string,
  }
}

export class UnlinkRepoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkRepoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkRepoResponse): UnlinkRepoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkRepoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkRepoResponse;
  static deserializeBinaryFromReader(message: UnlinkRepoResponse, reader: jspb.BinaryReader): UnlinkRepoResponse;
}

export namespace UnlinkRepoResponse {
  export type AsObject = {
  }
}

export class ListRepoLinksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRepoLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRepoLinksRequest): ListRepoLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRepoLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRepoLinksRequest;
  static deserializeBinaryFromReader(message: ListRepoLinksRequest, reader: jspb.BinaryReader): ListRepoLinksRequest;
}

export namespace ListRepoLinksRequest {
  export type AsObject = {
  }
}

export class ListRepoLinksResponse extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<RepoLink>;
  setLinksList(value: Array<RepoLink>): void;
  addLinks(value?: RepoLink, index?: number): RepoLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRepoLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRepoLinksResponse): ListRepoLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRepoLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRepoLinksResponse;
  static deserializeBinaryFromReader(message: ListRepoLinksResponse, reader: jspb.BinaryReader): ListRepoLinksResponse;
}

export namespace ListRepoLinksResponse {
  export type AsObject = {
    linksList: Array<RepoLink.AsObject>,
  }
}

export class ListAppLinksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppLinksRequest): ListAppLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppLinksRequest;
  static deserializeBinaryFromReader(message: ListAppLinksRequest, reader: jspb.BinaryReader): ListAppLinksRequest;
}

export namespace ListAppLinksRequest {
  export type AsObject = {
  }
}

export class AppLink extends jspb.Message {
  getOauthAppLinkId(): string;
  setOauthAppLinkId(value: string): void;

  getViamUser(): string;
  setViamUser(value: string): void;

  getExternalUser(): string;
  setExternalUser(value: string): void;

  clearOrgIdOrNsList(): void;
  getOrgIdOrNsList(): Array<string>;
  setOrgIdOrNsList(value: Array<string>): void;
  addOrgIdOrNs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppLink.AsObject;
  static toObject(includeInstance: boolean, msg: AppLink): AppLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppLink;
  static deserializeBinaryFromReader(message: AppLink, reader: jspb.BinaryReader): AppLink;
}

export namespace AppLink {
  export type AsObject = {
    oauthAppLinkId: string,
    viamUser: string,
    externalUser: string,
    orgIdOrNsList: Array<string>,
  }
}

export class ListAppLinksResponse extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<AppLink>;
  setLinksList(value: Array<AppLink>): void;
  addLinks(value?: AppLink, index?: number): AppLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppLinksResponse): ListAppLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppLinksResponse;
  static deserializeBinaryFromReader(message: ListAppLinksResponse, reader: jspb.BinaryReader): ListAppLinksResponse;
}

export namespace ListAppLinksResponse {
  export type AsObject = {
    linksList: Array<AppLink.AsObject>,
  }
}

export class RemoveAppLinkRequest extends jspb.Message {
  getOauthAppLinkId(): string;
  setOauthAppLinkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAppLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAppLinkRequest): RemoveAppLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAppLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAppLinkRequest;
  static deserializeBinaryFromReader(message: RemoveAppLinkRequest, reader: jspb.BinaryReader): RemoveAppLinkRequest;
}

export namespace RemoveAppLinkRequest {
  export type AsObject = {
    oauthAppLinkId: string,
  }
}

export class RemoveAppLinkResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAppLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAppLinkResponse): RemoveAppLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAppLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAppLinkResponse;
  static deserializeBinaryFromReader(message: RemoveAppLinkResponse, reader: jspb.BinaryReader): RemoveAppLinkResponse;
}

export namespace RemoveAppLinkResponse {
  export type AsObject = {
  }
}

export class LinkOrgRequest extends jspb.Message {
  getOauthAppLinkId(): string;
  setOauthAppLinkId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkOrgRequest): LinkOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkOrgRequest;
  static deserializeBinaryFromReader(message: LinkOrgRequest, reader: jspb.BinaryReader): LinkOrgRequest;
}

export namespace LinkOrgRequest {
  export type AsObject = {
    oauthAppLinkId: string,
    orgId: string,
  }
}

export class LinkOrgResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkOrgResponse): LinkOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkOrgResponse;
  static deserializeBinaryFromReader(message: LinkOrgResponse, reader: jspb.BinaryReader): LinkOrgResponse;
}

export namespace LinkOrgResponse {
  export type AsObject = {
  }
}

export class UnlinkOrgRequest extends jspb.Message {
  getOauthAppLinkId(): string;
  setOauthAppLinkId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkOrgRequest): UnlinkOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkOrgRequest;
  static deserializeBinaryFromReader(message: UnlinkOrgRequest, reader: jspb.BinaryReader): UnlinkOrgRequest;
}

export namespace UnlinkOrgRequest {
  export type AsObject = {
    oauthAppLinkId: string,
    orgId: string,
  }
}

export class UnlinkOrgResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkOrgResponse): UnlinkOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkOrgResponse;
  static deserializeBinaryFromReader(message: UnlinkOrgResponse, reader: jspb.BinaryReader): UnlinkOrgResponse;
}

export namespace UnlinkOrgResponse {
  export type AsObject = {
  }
}

export interface JobStatusMap {
  JOB_STATUS_UNSPECIFIED: 0;
  JOB_STATUS_IN_PROGRESS: 1;
  JOB_STATUS_FAILED: 2;
  JOB_STATUS_DONE: 3;
}

export const JobStatus: JobStatusMap;

