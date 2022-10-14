/**
 * @fileoverview gRPC-Web generated client stub for viam.component.generic.v1
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
proto.viam.component.generic = {};
proto.viam.component.generic.v1 = require('./generic_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.generic.v1.GenericServiceClient =
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
proto.viam.component.generic.v1.GenericServicePromiseClient =
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
 *   !proto.viam.component.generic.v1.DoCommandRequest,
 *   !proto.viam.component.generic.v1.DoCommandResponse>}
 */
const methodDescriptor_GenericService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.generic.v1.GenericService/DoCommand',
  grpc.web.MethodType.UNARY,
  proto.viam.component.generic.v1.DoCommandRequest,
  proto.viam.component.generic.v1.DoCommandResponse,
  /**
   * @param {!proto.viam.component.generic.v1.DoCommandRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.generic.v1.DoCommandResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.generic.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.generic.v1.DoCommandResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.generic.v1.DoCommandResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.generic.v1.GenericServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.generic.v1.GenericService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GenericService_DoCommand,
      callback);
};


/**
 * @param {!proto.viam.component.generic.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.generic.v1.DoCommandResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.generic.v1.GenericServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.generic.v1.GenericService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GenericService_DoCommand);
};


module.exports = proto.viam.component.generic.v1;

