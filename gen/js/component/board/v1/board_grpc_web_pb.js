/**
 * @fileoverview gRPC-Web generated client stub for viam.component.board.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.board = {};
proto.viam.component.board.v1 = require('./board_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.board.v1.BoardServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.board.v1.BoardServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.StatusRequest,
 *   !proto.viam.component.board.v1.StatusResponse>}
 */
const methodDescriptor_BoardService_Status = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/Status',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.StatusRequest,
  proto.viam.component.board.v1.StatusResponse,
  /**
   * @param {!proto.viam.component.board.v1.StatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.StatusResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.StatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.StatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/Status',
      request,
      metadata || {},
      methodDescriptor_BoardService_Status,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.StatusResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/Status',
      request,
      metadata || {},
      methodDescriptor_BoardService_Status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.SetGPIORequest,
 *   !proto.viam.component.board.v1.SetGPIOResponse>}
 */
const methodDescriptor_BoardService_SetGPIO = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/SetGPIO',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.SetGPIORequest,
  proto.viam.component.board.v1.SetGPIOResponse,
  /**
   * @param {!proto.viam.component.board.v1.SetGPIORequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.SetGPIOResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.SetGPIORequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.SetGPIOResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.SetGPIOResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.setGPIO =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetGPIO',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetGPIO,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.SetGPIORequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.SetGPIOResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.setGPIO =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetGPIO',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetGPIO);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.GetGPIORequest,
 *   !proto.viam.component.board.v1.GetGPIOResponse>}
 */
const methodDescriptor_BoardService_GetGPIO = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/GetGPIO',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.GetGPIORequest,
  proto.viam.component.board.v1.GetGPIOResponse,
  /**
   * @param {!proto.viam.component.board.v1.GetGPIORequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.GetGPIOResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.GetGPIORequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.GetGPIOResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.GetGPIOResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.getGPIO =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/GetGPIO',
      request,
      metadata || {},
      methodDescriptor_BoardService_GetGPIO,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.GetGPIORequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.GetGPIOResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.getGPIO =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/GetGPIO',
      request,
      metadata || {},
      methodDescriptor_BoardService_GetGPIO);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.PWMRequest,
 *   !proto.viam.component.board.v1.PWMResponse>}
 */
const methodDescriptor_BoardService_PWM = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/PWM',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.PWMRequest,
  proto.viam.component.board.v1.PWMResponse,
  /**
   * @param {!proto.viam.component.board.v1.PWMRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.PWMResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.PWMRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.PWMResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.PWMResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.pWM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/PWM',
      request,
      metadata || {},
      methodDescriptor_BoardService_PWM,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.PWMRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.PWMResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.pWM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/PWM',
      request,
      metadata || {},
      methodDescriptor_BoardService_PWM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.SetPWMRequest,
 *   !proto.viam.component.board.v1.SetPWMResponse>}
 */
const methodDescriptor_BoardService_SetPWM = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/SetPWM',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.SetPWMRequest,
  proto.viam.component.board.v1.SetPWMResponse,
  /**
   * @param {!proto.viam.component.board.v1.SetPWMRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.SetPWMResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.SetPWMRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.SetPWMResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.SetPWMResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.setPWM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetPWM',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetPWM,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.SetPWMRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.SetPWMResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.setPWM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetPWM',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetPWM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.PWMFrequencyRequest,
 *   !proto.viam.component.board.v1.PWMFrequencyResponse>}
 */
const methodDescriptor_BoardService_PWMFrequency = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/PWMFrequency',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.PWMFrequencyRequest,
  proto.viam.component.board.v1.PWMFrequencyResponse,
  /**
   * @param {!proto.viam.component.board.v1.PWMFrequencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.PWMFrequencyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.PWMFrequencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.PWMFrequencyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.PWMFrequencyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.pWMFrequency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/PWMFrequency',
      request,
      metadata || {},
      methodDescriptor_BoardService_PWMFrequency,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.PWMFrequencyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.PWMFrequencyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.pWMFrequency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/PWMFrequency',
      request,
      metadata || {},
      methodDescriptor_BoardService_PWMFrequency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.SetPWMFrequencyRequest,
 *   !proto.viam.component.board.v1.SetPWMFrequencyResponse>}
 */
const methodDescriptor_BoardService_SetPWMFrequency = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/SetPWMFrequency',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.SetPWMFrequencyRequest,
  proto.viam.component.board.v1.SetPWMFrequencyResponse,
  /**
   * @param {!proto.viam.component.board.v1.SetPWMFrequencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.SetPWMFrequencyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.SetPWMFrequencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.SetPWMFrequencyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.SetPWMFrequencyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.setPWMFrequency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetPWMFrequency',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetPWMFrequency,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.SetPWMFrequencyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.SetPWMFrequencyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.setPWMFrequency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/SetPWMFrequency',
      request,
      metadata || {},
      methodDescriptor_BoardService_SetPWMFrequency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.ReadAnalogReaderRequest,
 *   !proto.viam.component.board.v1.ReadAnalogReaderResponse>}
 */
const methodDescriptor_BoardService_ReadAnalogReader = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/ReadAnalogReader',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.ReadAnalogReaderRequest,
  proto.viam.component.board.v1.ReadAnalogReaderResponse,
  /**
   * @param {!proto.viam.component.board.v1.ReadAnalogReaderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.ReadAnalogReaderResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.ReadAnalogReaderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.ReadAnalogReaderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.ReadAnalogReaderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.readAnalogReader =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/ReadAnalogReader',
      request,
      metadata || {},
      methodDescriptor_BoardService_ReadAnalogReader,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.ReadAnalogReaderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.ReadAnalogReaderResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.readAnalogReader =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/ReadAnalogReader',
      request,
      metadata || {},
      methodDescriptor_BoardService_ReadAnalogReader);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.board.v1.GetDigitalInterruptValueRequest,
 *   !proto.viam.component.board.v1.GetDigitalInterruptValueResponse>}
 */
const methodDescriptor_BoardService_GetDigitalInterruptValue = new grpc.web.MethodDescriptor(
  '/viam.component.board.v1.BoardService/GetDigitalInterruptValue',
  grpc.web.MethodType.UNARY,
  proto.viam.component.board.v1.GetDigitalInterruptValueRequest,
  proto.viam.component.board.v1.GetDigitalInterruptValueResponse,
  /**
   * @param {!proto.viam.component.board.v1.GetDigitalInterruptValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.board.v1.GetDigitalInterruptValueResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.board.v1.GetDigitalInterruptValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.board.v1.GetDigitalInterruptValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.board.v1.GetDigitalInterruptValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.board.v1.BoardServiceClient.prototype.getDigitalInterruptValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/GetDigitalInterruptValue',
      request,
      metadata || {},
      methodDescriptor_BoardService_GetDigitalInterruptValue,
      callback);
};


/**
 * @param {!proto.viam.component.board.v1.GetDigitalInterruptValueRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.board.v1.GetDigitalInterruptValueResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.board.v1.BoardServicePromiseClient.prototype.getDigitalInterruptValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.board.v1.BoardService/GetDigitalInterruptValue',
      request,
      metadata || {},
      methodDescriptor_BoardService_GetDigitalInterruptValue);
};


module.exports = proto.viam.component.board.v1;

