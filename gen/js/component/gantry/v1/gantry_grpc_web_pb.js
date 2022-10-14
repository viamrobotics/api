/**
 * @fileoverview gRPC-Web generated client stub for viam.component.gantry.v1
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
proto.viam.component.gantry = {};
proto.viam.component.gantry.v1 = require('./gantry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.gantry.v1.GantryServiceClient =
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
proto.viam.component.gantry.v1.GantryServicePromiseClient =
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
 *   !proto.viam.component.gantry.v1.GetPositionRequest,
 *   !proto.viam.component.gantry.v1.GetPositionResponse>}
 */
const methodDescriptor_GantryService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.GetPositionRequest,
  proto.viam.component.gantry.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gantry.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.MoveToPositionRequest,
 *   !proto.viam.component.gantry.v1.MoveToPositionResponse>}
 */
const methodDescriptor_GantryService_MoveToPosition = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/MoveToPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.MoveToPositionRequest,
  proto.viam.component.gantry.v1.MoveToPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.MoveToPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gantry.v1.MoveToPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.MoveToPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.moveToPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_MoveToPosition,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.MoveToPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.moveToPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_MoveToPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.GetLengthsRequest,
 *   !proto.viam.component.gantry.v1.GetLengthsResponse>}
 */
const methodDescriptor_GantryService_GetLengths = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/GetLengths',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.GetLengthsRequest,
  proto.viam.component.gantry.v1.GetLengthsResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetLengthsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gantry.v1.GetLengthsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.GetLengthsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.getLengths =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetLengths',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetLengths,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.GetLengthsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.getLengths =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetLengths',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetLengths);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.StopRequest,
 *   !proto.viam.component.gantry.v1.StopResponse>}
 */
const methodDescriptor_GantryService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.StopRequest,
  proto.viam.component.gantry.v1.StopResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gantry.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Stop',
      request,
      metadata || {},
      methodDescriptor_GantryService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Stop',
      request,
      metadata || {},
      methodDescriptor_GantryService_Stop);
};


module.exports = proto.viam.component.gantry.v1;

