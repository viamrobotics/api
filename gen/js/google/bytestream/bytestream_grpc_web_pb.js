/**
 * @fileoverview gRPC-Web generated client stub for google.bytestream
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.google = {};
proto.google.bytestream = require('./bytestream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bytestream.ByteStreamClient =
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
proto.google.bytestream.ByteStreamPromiseClient =
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
 *   !proto.google.bytestream.ReadRequest,
 *   !proto.google.bytestream.ReadResponse>}
 */
const methodDescriptor_ByteStream_Read = new grpc.web.MethodDescriptor(
  '/google.bytestream.ByteStream/Read',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.bytestream.ReadRequest,
  proto.google.bytestream.ReadResponse,
  /**
   * @param {!proto.google.bytestream.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bytestream.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.google.bytestream.ReadRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bytestream.ReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bytestream.ByteStreamClient.prototype.read =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bytestream.ByteStream/Read',
      request,
      metadata || {},
      methodDescriptor_ByteStream_Read);
};


/**
 * @param {!proto.google.bytestream.ReadRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bytestream.ReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bytestream.ByteStreamPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bytestream.ByteStream/Read',
      request,
      metadata || {},
      methodDescriptor_ByteStream_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bytestream.QueryWriteStatusRequest,
 *   !proto.google.bytestream.QueryWriteStatusResponse>}
 */
const methodDescriptor_ByteStream_QueryWriteStatus = new grpc.web.MethodDescriptor(
  '/google.bytestream.ByteStream/QueryWriteStatus',
  grpc.web.MethodType.UNARY,
  proto.google.bytestream.QueryWriteStatusRequest,
  proto.google.bytestream.QueryWriteStatusResponse,
  /**
   * @param {!proto.google.bytestream.QueryWriteStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bytestream.QueryWriteStatusResponse.deserializeBinary
);


/**
 * @param {!proto.google.bytestream.QueryWriteStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.bytestream.QueryWriteStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bytestream.QueryWriteStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bytestream.ByteStreamClient.prototype.queryWriteStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bytestream.ByteStream/QueryWriteStatus',
      request,
      metadata || {},
      methodDescriptor_ByteStream_QueryWriteStatus,
      callback);
};


/**
 * @param {!proto.google.bytestream.QueryWriteStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bytestream.QueryWriteStatusResponse>}
 *     Promise that resolves to the response
 */
proto.google.bytestream.ByteStreamPromiseClient.prototype.queryWriteStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bytestream.ByteStream/QueryWriteStatus',
      request,
      metadata || {},
      methodDescriptor_ByteStream_QueryWriteStatus);
};


module.exports = proto.google.bytestream;

