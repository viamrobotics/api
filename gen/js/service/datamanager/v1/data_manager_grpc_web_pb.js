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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.datamanager.v1.DataManagerServiceClient =
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
proto.viam.service.datamanager.v1.DataManagerServicePromiseClient =
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
 * @param {!proto.viam.service.datamanager.v1.SyncRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.datamanager.v1.SyncResponse)}
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
 * @param {?Object<string, string>=} metadata User defined
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


module.exports = proto.viam.service.datamanager.v1;

