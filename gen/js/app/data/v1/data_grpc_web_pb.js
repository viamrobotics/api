/**
 * @fileoverview gRPC-Web generated client stub for viam.app.data.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.data = {};
proto.viam.app.data.v1 = require('./data_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.data.v1.DataServiceClient =
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
proto.viam.app.data.v1.DataServicePromiseClient =
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
 *   !proto.viam.app.data.v1.QueryRequest,
 *   !proto.viam.app.data.v1.QueryResponse>}
 */
const methodDescriptor_DataService_Query = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/Query',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.QueryRequest,
  proto.viam.app.data.v1.QueryResponse,
  /**
   * @param {!proto.viam.app.data.v1.QueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.QueryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.QueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.QueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/Query',
      request,
      metadata || {},
      methodDescriptor_DataService_Query,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.QueryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/Query',
      request,
      metadata || {},
      methodDescriptor_DataService_Query);
};


module.exports = proto.viam.app.data.v1;

