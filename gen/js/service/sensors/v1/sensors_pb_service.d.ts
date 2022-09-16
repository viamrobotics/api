// package: viam.service.sensors.v1
// file: service/sensors/v1/sensors.proto

import * as service_sensors_v1_sensors_pb from "../../../service/sensors/v1/sensors_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SensorsServiceGetSensors = {
  readonly methodName: string;
  readonly service: typeof SensorsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_sensors_v1_sensors_pb.GetSensorsRequest;
  readonly responseType: typeof service_sensors_v1_sensors_pb.GetSensorsResponse;
};

type SensorsServiceGetReadings = {
  readonly methodName: string;
  readonly service: typeof SensorsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_sensors_v1_sensors_pb.GetReadingsRequest;
  readonly responseType: typeof service_sensors_v1_sensors_pb.GetReadingsResponse;
};

export class SensorsService {
  static readonly serviceName: string;
  static readonly GetSensors: SensorsServiceGetSensors;
  static readonly GetReadings: SensorsServiceGetReadings;
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

export class SensorsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSensors(
    requestMessage: service_sensors_v1_sensors_pb.GetSensorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_sensors_v1_sensors_pb.GetSensorsResponse|null) => void
  ): UnaryResponse;
  getSensors(
    requestMessage: service_sensors_v1_sensors_pb.GetSensorsRequest,
    callback: (error: ServiceError|null, responseMessage: service_sensors_v1_sensors_pb.GetSensorsResponse|null) => void
  ): UnaryResponse;
  getReadings(
    requestMessage: service_sensors_v1_sensors_pb.GetReadingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_sensors_v1_sensors_pb.GetReadingsResponse|null) => void
  ): UnaryResponse;
  getReadings(
    requestMessage: service_sensors_v1_sensors_pb.GetReadingsRequest,
    callback: (error: ServiceError|null, responseMessage: service_sensors_v1_sensors_pb.GetReadingsResponse|null) => void
  ): UnaryResponse;
}

