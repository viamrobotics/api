// package: viam.component.inputcontroller.v1
// file: component/inputcontroller/v1/input_controller.proto

import * as component_inputcontroller_v1_input_controller_pb from "../../../component/inputcontroller/v1/input_controller_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InputControllerServiceGetControls = {
  readonly methodName: string;
  readonly service: typeof InputControllerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_inputcontroller_v1_input_controller_pb.GetControlsRequest;
  readonly responseType: typeof component_inputcontroller_v1_input_controller_pb.GetControlsResponse;
};

type InputControllerServiceGetEvents = {
  readonly methodName: string;
  readonly service: typeof InputControllerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_inputcontroller_v1_input_controller_pb.GetEventsRequest;
  readonly responseType: typeof component_inputcontroller_v1_input_controller_pb.GetEventsResponse;
};

type InputControllerServiceStreamEvents = {
  readonly methodName: string;
  readonly service: typeof InputControllerService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof component_inputcontroller_v1_input_controller_pb.StreamEventsRequest;
  readonly responseType: typeof component_inputcontroller_v1_input_controller_pb.StreamEventsResponse;
};

type InputControllerServiceTriggerEvent = {
  readonly methodName: string;
  readonly service: typeof InputControllerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_inputcontroller_v1_input_controller_pb.TriggerEventRequest;
  readonly responseType: typeof component_inputcontroller_v1_input_controller_pb.TriggerEventResponse;
};

export class InputControllerService {
  static readonly serviceName: string;
  static readonly GetControls: InputControllerServiceGetControls;
  static readonly GetEvents: InputControllerServiceGetEvents;
  static readonly StreamEvents: InputControllerServiceStreamEvents;
  static readonly TriggerEvent: InputControllerServiceTriggerEvent;
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

export class InputControllerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getControls(
    requestMessage: component_inputcontroller_v1_input_controller_pb.GetControlsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.GetControlsResponse|null) => void
  ): UnaryResponse;
  getControls(
    requestMessage: component_inputcontroller_v1_input_controller_pb.GetControlsRequest,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.GetControlsResponse|null) => void
  ): UnaryResponse;
  getEvents(
    requestMessage: component_inputcontroller_v1_input_controller_pb.GetEventsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.GetEventsResponse|null) => void
  ): UnaryResponse;
  getEvents(
    requestMessage: component_inputcontroller_v1_input_controller_pb.GetEventsRequest,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.GetEventsResponse|null) => void
  ): UnaryResponse;
  streamEvents(requestMessage: component_inputcontroller_v1_input_controller_pb.StreamEventsRequest, metadata?: grpc.Metadata): ResponseStream<component_inputcontroller_v1_input_controller_pb.StreamEventsResponse>;
  triggerEvent(
    requestMessage: component_inputcontroller_v1_input_controller_pb.TriggerEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.TriggerEventResponse|null) => void
  ): UnaryResponse;
  triggerEvent(
    requestMessage: component_inputcontroller_v1_input_controller_pb.TriggerEventRequest,
    callback: (error: ServiceError|null, responseMessage: component_inputcontroller_v1_input_controller_pb.TriggerEventResponse|null) => void
  ): UnaryResponse;
}

