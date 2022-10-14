/**
 * @fileoverview gRPC-Web generated client stub for viam.component.base.v1
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
proto.viam.component.base = {};
proto.viam.component.base.v1 = require('./base_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.base.v1.BaseServiceClient =
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
proto.viam.component.base.v1.BaseServicePromiseClient =
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
 *   !proto.viam.component.base.v1.MoveStraightRequest,
 *   !proto.viam.component.base.v1.MoveStraightResponse>}
 */
const methodDescriptor_BaseService_MoveStraight = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/MoveStraight',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.MoveStraightRequest,
  proto.viam.component.base.v1.MoveStraightResponse,
  /**
   * @param {!proto.viam.component.base.v1.MoveStraightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.MoveStraightResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.MoveStraightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.base.v1.MoveStraightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.MoveStraightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.moveStraight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/MoveStraight',
      request,
      metadata || {},
      methodDescriptor_BaseService_MoveStraight,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.MoveStraightRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.MoveStraightResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.moveStraight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/MoveStraight',
      request,
      metadata || {},
      methodDescriptor_BaseService_MoveStraight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SpinRequest,
 *   !proto.viam.component.base.v1.SpinResponse>}
 */
const methodDescriptor_BaseService_Spin = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/Spin',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SpinRequest,
  proto.viam.component.base.v1.SpinResponse,
  /**
   * @param {!proto.viam.component.base.v1.SpinRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SpinResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SpinRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.base.v1.SpinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SpinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.spin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Spin',
      request,
      metadata || {},
      methodDescriptor_BaseService_Spin,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SpinRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SpinResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.spin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Spin',
      request,
      metadata || {},
      methodDescriptor_BaseService_Spin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SetPowerRequest,
 *   !proto.viam.component.base.v1.SetPowerResponse>}
 */
const methodDescriptor_BaseService_SetPower = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/SetPower',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SetPowerRequest,
  proto.viam.component.base.v1.SetPowerResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetPowerResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.base.v1.SetPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SetPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.setPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetPower',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetPower,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SetPowerResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.setPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetPower',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetPower);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SetVelocityRequest,
 *   !proto.viam.component.base.v1.SetVelocityResponse>}
 */
const methodDescriptor_BaseService_SetVelocity = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/SetVelocity',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SetVelocityRequest,
  proto.viam.component.base.v1.SetVelocityResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetVelocityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetVelocityResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SetVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.base.v1.SetVelocityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SetVelocityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.setVelocity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetVelocity',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetVelocity,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SetVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SetVelocityResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.setVelocity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetVelocity',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetVelocity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.StopRequest,
 *   !proto.viam.component.base.v1.StopResponse>}
 */
const methodDescriptor_BaseService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.StopRequest,
  proto.viam.component.base.v1.StopResponse,
  /**
   * @param {!proto.viam.component.base.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.base.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Stop',
      request,
      metadata || {},
      methodDescriptor_BaseService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Stop',
      request,
      metadata || {},
      methodDescriptor_BaseService_Stop);
};


module.exports = proto.viam.component.base.v1;

