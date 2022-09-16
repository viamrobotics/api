/**
 * @fileoverview gRPC-Web generated client stub for viam.component.motor.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.motor = {};
proto.viam.component.motor.v1 = require('./motor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.motor.v1.MotorServiceClient =
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
proto.viam.component.motor.v1.MotorServicePromiseClient =
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
 *   !proto.viam.component.motor.v1.SetPowerRequest,
 *   !proto.viam.component.motor.v1.SetPowerResponse>}
 */
const methodDescriptor_MotorService_SetPower = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/SetPower',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.SetPowerRequest,
  proto.viam.component.motor.v1.SetPowerResponse,
  /**
   * @param {!proto.viam.component.motor.v1.SetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.SetPowerResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.SetPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.SetPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.setPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/SetPower',
      request,
      metadata || {},
      methodDescriptor_MotorService_SetPower,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.SetPowerResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.setPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/SetPower',
      request,
      metadata || {},
      methodDescriptor_MotorService_SetPower);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.GoForRequest,
 *   !proto.viam.component.motor.v1.GoForResponse>}
 */
const methodDescriptor_MotorService_GoFor = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/GoFor',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.GoForRequest,
  proto.viam.component.motor.v1.GoForResponse,
  /**
   * @param {!proto.viam.component.motor.v1.GoForRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.GoForResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.GoForRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.GoForResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.GoForResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.goFor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GoFor',
      request,
      metadata || {},
      methodDescriptor_MotorService_GoFor,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.GoForRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.GoForResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.goFor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GoFor',
      request,
      metadata || {},
      methodDescriptor_MotorService_GoFor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.GoToRequest,
 *   !proto.viam.component.motor.v1.GoToResponse>}
 */
const methodDescriptor_MotorService_GoTo = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/GoTo',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.GoToRequest,
  proto.viam.component.motor.v1.GoToResponse,
  /**
   * @param {!proto.viam.component.motor.v1.GoToRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.GoToResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.GoToRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.GoToResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.GoToResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.goTo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GoTo',
      request,
      metadata || {},
      methodDescriptor_MotorService_GoTo,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.GoToRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.GoToResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.goTo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GoTo',
      request,
      metadata || {},
      methodDescriptor_MotorService_GoTo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.ResetZeroPositionRequest,
 *   !proto.viam.component.motor.v1.ResetZeroPositionResponse>}
 */
const methodDescriptor_MotorService_ResetZeroPosition = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/ResetZeroPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.ResetZeroPositionRequest,
  proto.viam.component.motor.v1.ResetZeroPositionResponse,
  /**
   * @param {!proto.viam.component.motor.v1.ResetZeroPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.ResetZeroPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.ResetZeroPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.ResetZeroPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.ResetZeroPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.resetZeroPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/ResetZeroPosition',
      request,
      metadata || {},
      methodDescriptor_MotorService_ResetZeroPosition,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.ResetZeroPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.ResetZeroPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.resetZeroPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/ResetZeroPosition',
      request,
      metadata || {},
      methodDescriptor_MotorService_ResetZeroPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.GetPositionRequest,
 *   !proto.viam.component.motor.v1.GetPositionResponse>}
 */
const methodDescriptor_MotorService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.GetPositionRequest,
  proto.viam.component.motor.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.motor.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_MotorService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_MotorService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.GetPropertiesRequest,
 *   !proto.viam.component.motor.v1.GetPropertiesResponse>}
 */
const methodDescriptor_MotorService_GetProperties = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/GetProperties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.GetPropertiesRequest,
  proto.viam.component.motor.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.motor.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.GetPropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.GetPropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.getProperties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_MotorService_GetProperties,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.GetPropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.getProperties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_MotorService_GetProperties);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.StopRequest,
 *   !proto.viam.component.motor.v1.StopResponse>}
 */
const methodDescriptor_MotorService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.StopRequest,
  proto.viam.component.motor.v1.StopResponse,
  /**
   * @param {!proto.viam.component.motor.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/Stop',
      request,
      metadata || {},
      methodDescriptor_MotorService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/Stop',
      request,
      metadata || {},
      methodDescriptor_MotorService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.motor.v1.IsPoweredRequest,
 *   !proto.viam.component.motor.v1.IsPoweredResponse>}
 */
const methodDescriptor_MotorService_IsPowered = new grpc.web.MethodDescriptor(
  '/viam.component.motor.v1.MotorService/IsPowered',
  grpc.web.MethodType.UNARY,
  proto.viam.component.motor.v1.IsPoweredRequest,
  proto.viam.component.motor.v1.IsPoweredResponse,
  /**
   * @param {!proto.viam.component.motor.v1.IsPoweredRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.motor.v1.IsPoweredResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.motor.v1.IsPoweredRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.motor.v1.IsPoweredResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.motor.v1.IsPoweredResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.motor.v1.MotorServiceClient.prototype.isPowered =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/IsPowered',
      request,
      metadata || {},
      methodDescriptor_MotorService_IsPowered,
      callback);
};


/**
 * @param {!proto.viam.component.motor.v1.IsPoweredRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.motor.v1.IsPoweredResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.motor.v1.MotorServicePromiseClient.prototype.isPowered =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.motor.v1.MotorService/IsPowered',
      request,
      metadata || {},
      methodDescriptor_MotorService_IsPowered);
};


module.exports = proto.viam.component.motor.v1;

