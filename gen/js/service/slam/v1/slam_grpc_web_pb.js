/**
 * @fileoverview gRPC-Web generated client stub for viam.service.slam.v1
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
proto.viam.service = {};
proto.viam.service.slam = {};
proto.viam.service.slam.v1 = require('./slam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.slam.v1.SLAMServiceClient =
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
proto.viam.service.slam.v1.SLAMServicePromiseClient =
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
 *   !proto.viam.service.slam.v1.GetPositionRequest,
 *   !proto.viam.service.slam.v1.GetPositionResponse>}
 */
const methodDescriptor_SLAMService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetPositionRequest,
  proto.viam.service.slam.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetMapRequest,
 *   !proto.viam.service.slam.v1.GetMapResponse>}
 */
const methodDescriptor_SLAMService_GetMap = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetMap',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetMapRequest,
  proto.viam.service.slam.v1.GetMapResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetMapResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetMapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetMapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetMap,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetMapRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetMapResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetMap);
};


module.exports = proto.viam.service.slam.v1;

