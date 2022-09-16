// package: viam.component.board.v1
// file: component/board/v1/board.proto

import * as component_board_v1_board_pb from "../../../component/board/v1/board_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BoardServiceStatus = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.StatusRequest;
  readonly responseType: typeof component_board_v1_board_pb.StatusResponse;
};

type BoardServiceSetGPIO = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.SetGPIORequest;
  readonly responseType: typeof component_board_v1_board_pb.SetGPIOResponse;
};

type BoardServiceGetGPIO = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.GetGPIORequest;
  readonly responseType: typeof component_board_v1_board_pb.GetGPIOResponse;
};

type BoardServicePWM = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.PWMRequest;
  readonly responseType: typeof component_board_v1_board_pb.PWMResponse;
};

type BoardServiceSetPWM = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.SetPWMRequest;
  readonly responseType: typeof component_board_v1_board_pb.SetPWMResponse;
};

type BoardServicePWMFrequency = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.PWMFrequencyRequest;
  readonly responseType: typeof component_board_v1_board_pb.PWMFrequencyResponse;
};

type BoardServiceSetPWMFrequency = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.SetPWMFrequencyRequest;
  readonly responseType: typeof component_board_v1_board_pb.SetPWMFrequencyResponse;
};

type BoardServiceReadAnalogReader = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.ReadAnalogReaderRequest;
  readonly responseType: typeof component_board_v1_board_pb.ReadAnalogReaderResponse;
};

type BoardServiceGetDigitalInterruptValue = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_board_v1_board_pb.GetDigitalInterruptValueRequest;
  readonly responseType: typeof component_board_v1_board_pb.GetDigitalInterruptValueResponse;
};

export class BoardService {
  static readonly serviceName: string;
  static readonly Status: BoardServiceStatus;
  static readonly SetGPIO: BoardServiceSetGPIO;
  static readonly GetGPIO: BoardServiceGetGPIO;
  static readonly PWM: BoardServicePWM;
  static readonly SetPWM: BoardServiceSetPWM;
  static readonly PWMFrequency: BoardServicePWMFrequency;
  static readonly SetPWMFrequency: BoardServiceSetPWMFrequency;
  static readonly ReadAnalogReader: BoardServiceReadAnalogReader;
  static readonly GetDigitalInterruptValue: BoardServiceGetDigitalInterruptValue;
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

export class BoardServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  status(
    requestMessage: component_board_v1_board_pb.StatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.StatusResponse|null) => void
  ): UnaryResponse;
  status(
    requestMessage: component_board_v1_board_pb.StatusRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.StatusResponse|null) => void
  ): UnaryResponse;
  setGPIO(
    requestMessage: component_board_v1_board_pb.SetGPIORequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetGPIOResponse|null) => void
  ): UnaryResponse;
  setGPIO(
    requestMessage: component_board_v1_board_pb.SetGPIORequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetGPIOResponse|null) => void
  ): UnaryResponse;
  getGPIO(
    requestMessage: component_board_v1_board_pb.GetGPIORequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.GetGPIOResponse|null) => void
  ): UnaryResponse;
  getGPIO(
    requestMessage: component_board_v1_board_pb.GetGPIORequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.GetGPIOResponse|null) => void
  ): UnaryResponse;
  pWM(
    requestMessage: component_board_v1_board_pb.PWMRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.PWMResponse|null) => void
  ): UnaryResponse;
  pWM(
    requestMessage: component_board_v1_board_pb.PWMRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.PWMResponse|null) => void
  ): UnaryResponse;
  setPWM(
    requestMessage: component_board_v1_board_pb.SetPWMRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetPWMResponse|null) => void
  ): UnaryResponse;
  setPWM(
    requestMessage: component_board_v1_board_pb.SetPWMRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetPWMResponse|null) => void
  ): UnaryResponse;
  pWMFrequency(
    requestMessage: component_board_v1_board_pb.PWMFrequencyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.PWMFrequencyResponse|null) => void
  ): UnaryResponse;
  pWMFrequency(
    requestMessage: component_board_v1_board_pb.PWMFrequencyRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.PWMFrequencyResponse|null) => void
  ): UnaryResponse;
  setPWMFrequency(
    requestMessage: component_board_v1_board_pb.SetPWMFrequencyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetPWMFrequencyResponse|null) => void
  ): UnaryResponse;
  setPWMFrequency(
    requestMessage: component_board_v1_board_pb.SetPWMFrequencyRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.SetPWMFrequencyResponse|null) => void
  ): UnaryResponse;
  readAnalogReader(
    requestMessage: component_board_v1_board_pb.ReadAnalogReaderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.ReadAnalogReaderResponse|null) => void
  ): UnaryResponse;
  readAnalogReader(
    requestMessage: component_board_v1_board_pb.ReadAnalogReaderRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.ReadAnalogReaderResponse|null) => void
  ): UnaryResponse;
  getDigitalInterruptValue(
    requestMessage: component_board_v1_board_pb.GetDigitalInterruptValueRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.GetDigitalInterruptValueResponse|null) => void
  ): UnaryResponse;
  getDigitalInterruptValue(
    requestMessage: component_board_v1_board_pb.GetDigitalInterruptValueRequest,
    callback: (error: ServiceError|null, responseMessage: component_board_v1_board_pb.GetDigitalInterruptValueResponse|null) => void
  ): UnaryResponse;
}

