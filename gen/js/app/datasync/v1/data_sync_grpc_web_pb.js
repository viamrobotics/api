/**
 * @fileoverview gRPC-Web generated client stub for viam.app.datasync.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.datasync = {};
proto.viam.app.datasync.v1 = require('./data_sync_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.datasync.v1.DataSyncServiceClient =
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
proto.viam.app.datasync.v1.DataSyncServicePromiseClient =
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
 *   !proto.viam.app.datasync.v1.DataCaptureUploadRequest,
 *   !proto.viam.app.datasync.v1.DataCaptureUploadResponse>}
 */
const methodDescriptor_DataSyncService_DataCaptureUpload = new grpc.web.MethodDescriptor(
  '/viam.app.datasync.v1.DataSyncService/DataCaptureUpload',
  grpc.web.MethodType.UNARY,
  proto.viam.app.datasync.v1.DataCaptureUploadRequest,
  proto.viam.app.datasync.v1.DataCaptureUploadResponse,
  /**
   * @param {!proto.viam.app.datasync.v1.DataCaptureUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.datasync.v1.DataCaptureUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.datasync.v1.DataCaptureUploadRequest,
 *   !proto.viam.app.datasync.v1.DataCaptureUploadResponse>}
 */
const methodInfo_DataSyncService_DataCaptureUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.datasync.v1.DataCaptureUploadResponse,
  /**
   * @param {!proto.viam.app.datasync.v1.DataCaptureUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.datasync.v1.DataCaptureUploadResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.datasync.v1.DataCaptureUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.datasync.v1.DataCaptureUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.datasync.v1.DataCaptureUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.datasync.v1.DataSyncServiceClient.prototype.dataCaptureUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.datasync.v1.DataSyncService/DataCaptureUpload',
      request,
      metadata || {},
      methodDescriptor_DataSyncService_DataCaptureUpload,
      callback);
};


/**
 * @param {!proto.viam.app.datasync.v1.DataCaptureUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.datasync.v1.DataCaptureUploadResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.datasync.v1.DataSyncServicePromiseClient.prototype.dataCaptureUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.datasync.v1.DataSyncService/DataCaptureUpload',
      request,
      metadata || {},
      methodDescriptor_DataSyncService_DataCaptureUpload);
};


module.exports = proto.viam.app.datasync.v1;

