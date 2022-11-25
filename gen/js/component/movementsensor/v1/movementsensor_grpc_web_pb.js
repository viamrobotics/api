/**
 * @fileoverview gRPC-Web generated client stub for viam.component.movementsensor.v1
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
proto.viam.component.movementsensor = {};
proto.viam.component.movementsensor.v1 = require('./movementsensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient =
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
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient =
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
 *   !proto.viam.component.movementsensor.v1.GetLinearVelocityRequest,
 *   !proto.viam.component.movementsensor.v1.GetLinearVelocityResponse>}
 */
const methodDescriptor_MovementSensorService_GetLinearVelocity = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetLinearVelocity',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetLinearVelocityRequest,
  proto.viam.component.movementsensor.v1.GetLinearVelocityResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetLinearVelocityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetLinearVelocityResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetLinearVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetLinearVelocityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetLinearVelocityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getLinearVelocity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetLinearVelocity',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetLinearVelocity,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetLinearVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetLinearVelocityResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getLinearVelocity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetLinearVelocity',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetLinearVelocity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetAngularVelocityRequest,
 *   !proto.viam.component.movementsensor.v1.GetAngularVelocityResponse>}
 */
const methodDescriptor_MovementSensorService_GetAngularVelocity = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetAngularVelocity',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetAngularVelocityRequest,
  proto.viam.component.movementsensor.v1.GetAngularVelocityResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetAngularVelocityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetAngularVelocityResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetAngularVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetAngularVelocityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetAngularVelocityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getAngularVelocity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetAngularVelocity',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetAngularVelocity,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetAngularVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetAngularVelocityResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getAngularVelocity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetAngularVelocity',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetAngularVelocity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetCompassHeadingRequest,
 *   !proto.viam.component.movementsensor.v1.GetCompassHeadingResponse>}
 */
const methodDescriptor_MovementSensorService_GetCompassHeading = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetCompassHeading',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetCompassHeadingRequest,
  proto.viam.component.movementsensor.v1.GetCompassHeadingResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetCompassHeadingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetCompassHeadingResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetCompassHeadingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetCompassHeadingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetCompassHeadingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getCompassHeading =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetCompassHeading',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetCompassHeading,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetCompassHeadingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetCompassHeadingResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getCompassHeading =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetCompassHeading',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetCompassHeading);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetOrientationRequest,
 *   !proto.viam.component.movementsensor.v1.GetOrientationResponse>}
 */
const methodDescriptor_MovementSensorService_GetOrientation = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetOrientation',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetOrientationRequest,
  proto.viam.component.movementsensor.v1.GetOrientationResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetOrientationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetOrientationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetOrientationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetOrientationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetOrientationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getOrientation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetOrientation',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetOrientation,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetOrientationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetOrientationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getOrientation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetOrientation',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetOrientation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetPositionRequest,
 *   !proto.viam.component.movementsensor.v1.GetPositionResponse>}
 */
const methodDescriptor_MovementSensorService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetPositionRequest,
  proto.viam.component.movementsensor.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetPropertiesRequest,
 *   !proto.viam.component.movementsensor.v1.GetPropertiesResponse>}
 */
const methodDescriptor_MovementSensorService_GetProperties = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetProperties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetPropertiesRequest,
  proto.viam.component.movementsensor.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetPropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetPropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getProperties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetProperties,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetPropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getProperties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetProperties);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.movementsensor.v1.GetAccuracyRequest,
 *   !proto.viam.component.movementsensor.v1.GetAccuracyResponse>}
 */
const methodDescriptor_MovementSensorService_GetAccuracy = new grpc.web.MethodDescriptor(
  '/viam.component.movementsensor.v1.MovementSensorService/GetAccuracy',
  grpc.web.MethodType.UNARY,
  proto.viam.component.movementsensor.v1.GetAccuracyRequest,
  proto.viam.component.movementsensor.v1.GetAccuracyResponse,
  /**
   * @param {!proto.viam.component.movementsensor.v1.GetAccuracyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.movementsensor.v1.GetAccuracyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.movementsensor.v1.GetAccuracyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.movementsensor.v1.GetAccuracyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.movementsensor.v1.GetAccuracyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.movementsensor.v1.MovementSensorServiceClient.prototype.getAccuracy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetAccuracy',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetAccuracy,
      callback);
};


/**
 * @param {!proto.viam.component.movementsensor.v1.GetAccuracyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.movementsensor.v1.GetAccuracyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.movementsensor.v1.MovementSensorServicePromiseClient.prototype.getAccuracy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.movementsensor.v1.MovementSensorService/GetAccuracy',
      request,
      metadata || {},
      methodDescriptor_MovementSensorService_GetAccuracy);
};


module.exports = proto.viam.component.movementsensor.v1;

