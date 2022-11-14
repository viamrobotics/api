// package: viam.robot.v1
// file: robot/v1/robot.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FrameSystemConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPoseInParentFrame(): boolean;
  clearPoseInParentFrame(): void;
  getPoseInParentFrame(): common_v1_common_pb.PoseInFrame | undefined;
  setPoseInParentFrame(value?: common_v1_common_pb.PoseInFrame): void;

  getModelJson(): Uint8Array | string;
  getModelJson_asU8(): Uint8Array;
  getModelJson_asB64(): string;
  setModelJson(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfig): FrameSystemConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfig;
  static deserializeBinaryFromReader(message: FrameSystemConfig, reader: jspb.BinaryReader): FrameSystemConfig;
}

export namespace FrameSystemConfig {
  export type AsObject = {
    name: string,
    poseInParentFrame?: common_v1_common_pb.PoseInFrame.AsObject,
    modelJson: Uint8Array | string,
  }
}

export class FrameSystemConfigRequest extends jspb.Message {
  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfigRequest): FrameSystemConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfigRequest;
  static deserializeBinaryFromReader(message: FrameSystemConfigRequest, reader: jspb.BinaryReader): FrameSystemConfigRequest;
}

export namespace FrameSystemConfigRequest {
  export type AsObject = {
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
  }
}

export class FrameSystemConfigResponse extends jspb.Message {
  clearFrameSystemConfigsList(): void;
  getFrameSystemConfigsList(): Array<FrameSystemConfig>;
  setFrameSystemConfigsList(value: Array<FrameSystemConfig>): void;
  addFrameSystemConfigs(value?: FrameSystemConfig, index?: number): FrameSystemConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfigResponse): FrameSystemConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfigResponse;
  static deserializeBinaryFromReader(message: FrameSystemConfigResponse, reader: jspb.BinaryReader): FrameSystemConfigResponse;
}

export namespace FrameSystemConfigResponse {
  export type AsObject = {
    frameSystemConfigsList: Array<FrameSystemConfig.AsObject>,
  }
}

export class TransformPoseRequest extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): common_v1_common_pb.PoseInFrame | undefined;
  setSource(value?: common_v1_common_pb.PoseInFrame): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPoseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPoseRequest): TransformPoseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPoseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPoseRequest;
  static deserializeBinaryFromReader(message: TransformPoseRequest, reader: jspb.BinaryReader): TransformPoseRequest;
}

export namespace TransformPoseRequest {
  export type AsObject = {
    source?: common_v1_common_pb.PoseInFrame.AsObject,
    destination: string,
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
  }
}

export class TransformPoseResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.PoseInFrame | undefined;
  setPose(value?: common_v1_common_pb.PoseInFrame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPoseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPoseResponse): TransformPoseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPoseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPoseResponse;
  static deserializeBinaryFromReader(message: TransformPoseResponse, reader: jspb.BinaryReader): TransformPoseResponse;
}

export namespace TransformPoseResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.PoseInFrame.AsObject,
  }
}

export class ResourceNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNamesRequest): ResourceNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNamesRequest;
  static deserializeBinaryFromReader(message: ResourceNamesRequest, reader: jspb.BinaryReader): ResourceNamesRequest;
}

export namespace ResourceNamesRequest {
  export type AsObject = {
  }
}

export class ResourceNamesResponse extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<common_v1_common_pb.ResourceName>;
  setResourcesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResources(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNamesResponse): ResourceNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNamesResponse;
  static deserializeBinaryFromReader(message: ResourceNamesResponse, reader: jspb.BinaryReader): ResourceNamesResponse;
}

export namespace ResourceNamesResponse {
  export type AsObject = {
    resourcesList: Array<common_v1_common_pb.ResourceName.AsObject>,
  }
}

export class ResourceRPCSubtype extends jspb.Message {
  hasSubtype(): boolean;
  clearSubtype(): void;
  getSubtype(): common_v1_common_pb.ResourceName | undefined;
  setSubtype(value?: common_v1_common_pb.ResourceName): void;

  getProtoService(): string;
  setProtoService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtype.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtype): ResourceRPCSubtype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtype;
  static deserializeBinaryFromReader(message: ResourceRPCSubtype, reader: jspb.BinaryReader): ResourceRPCSubtype;
}

export namespace ResourceRPCSubtype {
  export type AsObject = {
    subtype?: common_v1_common_pb.ResourceName.AsObject,
    protoService: string,
  }
}

export class ResourceRPCSubtypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtypesRequest): ResourceRPCSubtypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtypesRequest;
  static deserializeBinaryFromReader(message: ResourceRPCSubtypesRequest, reader: jspb.BinaryReader): ResourceRPCSubtypesRequest;
}

export namespace ResourceRPCSubtypesRequest {
  export type AsObject = {
  }
}

export class ResourceRPCSubtypesResponse extends jspb.Message {
  clearResourceRpcSubtypesList(): void;
  getResourceRpcSubtypesList(): Array<ResourceRPCSubtype>;
  setResourceRpcSubtypesList(value: Array<ResourceRPCSubtype>): void;
  addResourceRpcSubtypes(value?: ResourceRPCSubtype, index?: number): ResourceRPCSubtype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtypesResponse): ResourceRPCSubtypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtypesResponse;
  static deserializeBinaryFromReader(message: ResourceRPCSubtypesResponse, reader: jspb.BinaryReader): ResourceRPCSubtypesResponse;
}

export namespace ResourceRPCSubtypesResponse {
  export type AsObject = {
    resourceRpcSubtypesList: Array<ResourceRPCSubtype.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  hasArguments(): boolean;
  clearArguments(): void;
  getArguments(): google_protobuf_struct_pb.Struct | undefined;
  setArguments(value?: google_protobuf_struct_pb.Struct): void;

  hasStarted(): boolean;
  clearStarted(): void;
  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSessionId(): boolean;
  clearSessionId(): void;
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    id: string,
    method: string,
    arguments?: google_protobuf_struct_pb.Struct.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sessionId: string,
  }
}

export class GetOperationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsRequest): GetOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsRequest;
  static deserializeBinaryFromReader(message: GetOperationsRequest, reader: jspb.BinaryReader): GetOperationsRequest;
}

export namespace GetOperationsRequest {
  export type AsObject = {
  }
}

export class GetOperationsResponse extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsResponse): GetOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsResponse;
  static deserializeBinaryFromReader(message: GetOperationsResponse, reader: jspb.BinaryReader): GetOperationsResponse;
}

export namespace GetOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    id: string,
  }
}

export class CancelOperationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationResponse): CancelOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationResponse;
  static deserializeBinaryFromReader(message: CancelOperationResponse, reader: jspb.BinaryReader): CancelOperationResponse;
}

export namespace CancelOperationResponse {
  export type AsObject = {
  }
}

export class BlockForOperationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockForOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockForOperationRequest): BlockForOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockForOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockForOperationRequest;
  static deserializeBinaryFromReader(message: BlockForOperationRequest, reader: jspb.BinaryReader): BlockForOperationRequest;
}

export namespace BlockForOperationRequest {
  export type AsObject = {
    id: string,
  }
}

export class BlockForOperationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockForOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockForOperationResponse): BlockForOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockForOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockForOperationResponse;
  static deserializeBinaryFromReader(message: BlockForOperationResponse, reader: jspb.BinaryReader): BlockForOperationResponse;
}

export namespace BlockForOperationResponse {
  export type AsObject = {
  }
}

export class PeerConnectionInfo extends jspb.Message {
  getType(): PeerConnectionTypeMap[keyof PeerConnectionTypeMap];
  setType(value: PeerConnectionTypeMap[keyof PeerConnectionTypeMap]): void;

  hasRemoteAddress(): boolean;
  clearRemoteAddress(): void;
  getRemoteAddress(): string;
  setRemoteAddress(value: string): void;

  hasLocalAddress(): boolean;
  clearLocalAddress(): void;
  getLocalAddress(): string;
  setLocalAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerConnectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerConnectionInfo): PeerConnectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerConnectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerConnectionInfo;
  static deserializeBinaryFromReader(message: PeerConnectionInfo, reader: jspb.BinaryReader): PeerConnectionInfo;
}

export namespace PeerConnectionInfo {
  export type AsObject = {
    type: PeerConnectionTypeMap[keyof PeerConnectionTypeMap],
    remoteAddress: string,
    localAddress: string,
  }
}

export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPeerConnectionInfo(): boolean;
  clearPeerConnectionInfo(): void;
  getPeerConnectionInfo(): PeerConnectionInfo | undefined;
  setPeerConnectionInfo(value?: PeerConnectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    peerConnectionInfo?: PeerConnectionInfo.AsObject,
  }
}

export class GetSessionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionsRequest): GetSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionsRequest;
  static deserializeBinaryFromReader(message: GetSessionsRequest, reader: jspb.BinaryReader): GetSessionsRequest;
}

export namespace GetSessionsRequest {
  export type AsObject = {
  }
}

export class GetSessionsResponse extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): void;
  addSessions(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionsResponse): GetSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionsResponse;
  static deserializeBinaryFromReader(message: GetSessionsResponse, reader: jspb.BinaryReader): GetSessionsResponse;
}

export namespace GetSessionsResponse {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
  }
}

export class DiscoveryQuery extends jspb.Message {
  getSubtype(): string;
  setSubtype(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoveryQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoveryQuery): DiscoveryQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoveryQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoveryQuery;
  static deserializeBinaryFromReader(message: DiscoveryQuery, reader: jspb.BinaryReader): DiscoveryQuery;
}

export namespace DiscoveryQuery {
  export type AsObject = {
    subtype: string,
    model: string,
  }
}

export class Discovery extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): DiscoveryQuery | undefined;
  setQuery(value?: DiscoveryQuery): void;

  hasResults(): boolean;
  clearResults(): void;
  getResults(): google_protobuf_struct_pb.Struct | undefined;
  setResults(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    query?: DiscoveryQuery.AsObject,
    results?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DiscoverComponentsRequest extends jspb.Message {
  clearQueriesList(): void;
  getQueriesList(): Array<DiscoveryQuery>;
  setQueriesList(value: Array<DiscoveryQuery>): void;
  addQueries(value?: DiscoveryQuery, index?: number): DiscoveryQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoverComponentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoverComponentsRequest): DiscoverComponentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoverComponentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoverComponentsRequest;
  static deserializeBinaryFromReader(message: DiscoverComponentsRequest, reader: jspb.BinaryReader): DiscoverComponentsRequest;
}

export namespace DiscoverComponentsRequest {
  export type AsObject = {
    queriesList: Array<DiscoveryQuery.AsObject>,
  }
}

export class DiscoverComponentsResponse extends jspb.Message {
  clearDiscoveryList(): void;
  getDiscoveryList(): Array<Discovery>;
  setDiscoveryList(value: Array<Discovery>): void;
  addDiscovery(value?: Discovery, index?: number): Discovery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoverComponentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoverComponentsResponse): DiscoverComponentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoverComponentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoverComponentsResponse;
  static deserializeBinaryFromReader(message: DiscoverComponentsResponse, reader: jspb.BinaryReader): DiscoverComponentsResponse;
}

export namespace DiscoverComponentsResponse {
  export type AsObject = {
    discoveryList: Array<Discovery.AsObject>,
  }
}

export class Status extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_protobuf_struct_pb.Struct | undefined;
  setStatus(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    status?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetStatusRequest extends jspb.Message {
  clearResourceNamesList(): void;
  getResourceNamesList(): Array<common_v1_common_pb.ResourceName>;
  setResourceNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResourceNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
  static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
  export type AsObject = {
    resourceNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
  }
}

export class GetStatusResponse extends jspb.Message {
  clearStatusList(): void;
  getStatusList(): Array<Status>;
  setStatusList(value: Array<Status>): void;
  addStatus(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
  static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
  export type AsObject = {
    statusList: Array<Status.AsObject>,
  }
}

export class StreamStatusRequest extends jspb.Message {
  clearResourceNamesList(): void;
  getResourceNamesList(): Array<common_v1_common_pb.ResourceName>;
  setResourceNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResourceNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  hasEvery(): boolean;
  clearEvery(): void;
  getEvery(): google_protobuf_duration_pb.Duration | undefined;
  setEvery(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatusRequest): StreamStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatusRequest;
  static deserializeBinaryFromReader(message: StreamStatusRequest, reader: jspb.BinaryReader): StreamStatusRequest;
}

export namespace StreamStatusRequest {
  export type AsObject = {
    resourceNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
    every?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class StreamStatusResponse extends jspb.Message {
  clearStatusList(): void;
  getStatusList(): Array<Status>;
  setStatusList(value: Array<Status>): void;
  addStatus(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatusResponse): StreamStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatusResponse;
  static deserializeBinaryFromReader(message: StreamStatusResponse, reader: jspb.BinaryReader): StreamStatusResponse;
}

export namespace StreamStatusResponse {
  export type AsObject = {
    statusList: Array<Status.AsObject>,
  }
}

export class StopExtraParameters extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopExtraParameters.AsObject;
  static toObject(includeInstance: boolean, msg: StopExtraParameters): StopExtraParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopExtraParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopExtraParameters;
  static deserializeBinaryFromReader(message: StopExtraParameters, reader: jspb.BinaryReader): StopExtraParameters;
}

export namespace StopExtraParameters {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopAllRequest extends jspb.Message {
  clearExtraList(): void;
  getExtraList(): Array<StopExtraParameters>;
  setExtraList(value: Array<StopExtraParameters>): void;
  addExtra(value?: StopExtraParameters, index?: number): StopExtraParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllRequest): StopAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllRequest;
  static deserializeBinaryFromReader(message: StopAllRequest, reader: jspb.BinaryReader): StopAllRequest;
}

export namespace StopAllRequest {
  export type AsObject = {
    extraList: Array<StopExtraParameters.AsObject>,
  }
}

export class StopAllResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllResponse): StopAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllResponse;
  static deserializeBinaryFromReader(message: StopAllResponse, reader: jspb.BinaryReader): StopAllResponse;
}

export namespace StopAllResponse {
  export type AsObject = {
  }
}

export class StartSessionRequest extends jspb.Message {
  getResume(): string;
  setResume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartSessionRequest): StartSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSessionRequest;
  static deserializeBinaryFromReader(message: StartSessionRequest, reader: jspb.BinaryReader): StartSessionRequest;
}

export namespace StartSessionRequest {
  export type AsObject = {
    resume: string,
  }
}

export class StartSessionResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasHeartbeatWindow(): boolean;
  clearHeartbeatWindow(): void;
  getHeartbeatWindow(): google_protobuf_duration_pb.Duration | undefined;
  setHeartbeatWindow(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartSessionResponse): StartSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSessionResponse;
  static deserializeBinaryFromReader(message: StartSessionResponse, reader: jspb.BinaryReader): StartSessionResponse;
}

export namespace StartSessionResponse {
  export type AsObject = {
    id: string,
    heartbeatWindow?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class SendSessionHeartbeatRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSessionHeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendSessionHeartbeatRequest): SendSessionHeartbeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSessionHeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSessionHeartbeatRequest;
  static deserializeBinaryFromReader(message: SendSessionHeartbeatRequest, reader: jspb.BinaryReader): SendSessionHeartbeatRequest;
}

export namespace SendSessionHeartbeatRequest {
  export type AsObject = {
    id: string,
  }
}

export class SendSessionHeartbeatResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSessionHeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendSessionHeartbeatResponse): SendSessionHeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSessionHeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSessionHeartbeatResponse;
  static deserializeBinaryFromReader(message: SendSessionHeartbeatResponse, reader: jspb.BinaryReader): SendSessionHeartbeatResponse;
}

export namespace SendSessionHeartbeatResponse {
  export type AsObject = {
  }
}

export interface PeerConnectionTypeMap {
  PEER_CONNECTION_TYPE_UNSPECIFIED: 0;
  PEER_CONNECTION_TYPE_GRPC: 1;
  PEER_CONNECTION_TYPE_WEBRTC: 2;
}

export const PeerConnectionType: PeerConnectionTypeMap;

