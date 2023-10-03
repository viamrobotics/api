/**
 * @fileoverview gRPC-Web generated client stub for viam.service.datamanager.v1
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
proto.viam.service.datamanager = {};
proto.viam.service.datamanager.v1 = require('./data_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.datamanager.v1.DataManagerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.datamanager.v1.DataManagerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.viam.service.datamanager.v1.SyncRequest,
 *   !proto.viam.service.datamanager.v1.SyncResponse>}
 */
const methodDescriptor_DataManagerService_Sync = new grpc.web.MethodDescriptor(
  '/viam.service.datamanager.v1.DataManagerService/Sync',
  grpc.web.MethodType.UNARY,
  proto.viam.service.datamanager.v1.SyncRequest,
  proto.viam.service.datamanager.v1.SyncResponse,
  /**
   * @param {!proto.viam.service.datamanager.v1.SyncRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.datamanager.v1.SyncResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.datamanager.v1.SyncRequest,
 *   !proto.viam.service.datamanager.v1.SyncResponse>}
 */
const methodInfo_DataManagerService_Sync = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.datamanager.v1.SyncResponse,
  /**
   * @param {!proto.viam.service.datamanager.v1.SyncRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.datamanager.v1.SyncResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.datamanager.v1.SyncRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.datamanager.v1.SyncResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.datamanager.v1.SyncResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.datamanager.v1.DataManagerServiceClient.prototype.sync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.datamanager.v1.DataManagerService/Sync',
      request,
      metadata || {},
      methodDescriptor_DataManagerService_Sync,
      callback);
};


/**
 * @param {!proto.viam.service.datamanager.v1.SyncRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.datamanager.v1.SyncResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.datamanager.v1.DataManagerServicePromiseClient.prototype.sync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.datamanager.v1.DataManagerService/Sync',
      request,
      metadata || {},
      methodDescriptor_DataManagerService_Sync);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_DataManagerService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.service.datamanager.v1.DataManagerService/DoCommand',
  grpc.web.MethodType.UNARY,
  common_v1_common_pb.DoCommandRequest,
  common_v1_common_pb.DoCommandResponse,
  /**
   * @param {!proto.viam.common.v1.DoCommandRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.DoCommandResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodInfo_DataManagerService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.DoCommandResponse,
  /**
   * @param {!proto.viam.common.v1.DoCommandRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.DoCommandResponse.deserializeBinary
);


/**
 * @param {!proto.viam.common.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.common.v1.DoCommandResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.common.v1.DoCommandResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.datamanager.v1.DataManagerServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.datamanager.v1.DataManagerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_DataManagerService_DoCommand,
      callback);
};


/**
 * @param {!proto.viam.common.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.common.v1.DoCommandResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.datamanager.v1.DataManagerServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.datamanager.v1.DataManagerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_DataManagerService_DoCommand);
};


module.exports = proto.viam.service.datamanager.v1;

