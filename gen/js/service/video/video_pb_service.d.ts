// package: viam.service.video.v1
// file: service/video/video.proto

import * as service_video_video_pb from "../../service/video/video_pb";
import * as common_v1_common_pb from "../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VideoServiceGetVideo = {
  readonly methodName: string;
  readonly service: typeof VideoService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_video_video_pb.GetVideoRequest;
  readonly responseType: typeof service_video_video_pb.GetVideoResponse;
};

type VideoServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof VideoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class VideoService {
  static readonly serviceName: string;
  static readonly GetVideo: VideoServiceGetVideo;
  static readonly DoCommand: VideoServiceDoCommand;
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

export class VideoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVideo(requestMessage: service_video_video_pb.GetVideoRequest, metadata?: grpc.Metadata): ResponseStream<service_video_video_pb.GetVideoResponse>;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
}

