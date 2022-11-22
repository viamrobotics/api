/**
 * @fileoverview gRPC-Web generated client stub for viam.app.model.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var tagger_v1_tagger_pb = require('../../../tagger/v1/tagger_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.model = {};
proto.viam.app.model.v1 = require('./model_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.model.v1.ModelServiceClient =
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
proto.viam.app.model.v1.ModelServicePromiseClient =
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
 *   !proto.viam.app.model.v1.DeleteRequest,
 *   !proto.viam.app.model.v1.DeleteResponse>}
 */
const methodDescriptor_ModelService_Delete = new grpc.web.MethodDescriptor(
  '/viam.app.model.v1.ModelService/Delete',
  grpc.web.MethodType.UNARY,
  proto.viam.app.model.v1.DeleteRequest,
  proto.viam.app.model.v1.DeleteResponse,
  /**
   * @param {!proto.viam.app.model.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.model.v1.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.model.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.model.v1.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.model.v1.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.model.v1.ModelServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Delete',
      request,
      metadata || {},
      methodDescriptor_ModelService_Delete,
      callback);
};


/**
 * @param {!proto.viam.app.model.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.model.v1.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.model.v1.ModelServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Delete',
      request,
      metadata || {},
      methodDescriptor_ModelService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.model.v1.DeployRequest,
 *   !proto.viam.app.model.v1.DeployResponse>}
 */
const methodDescriptor_ModelService_Deploy = new grpc.web.MethodDescriptor(
  '/viam.app.model.v1.ModelService/Deploy',
  grpc.web.MethodType.UNARY,
  proto.viam.app.model.v1.DeployRequest,
  proto.viam.app.model.v1.DeployResponse,
  /**
   * @param {!proto.viam.app.model.v1.DeployRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.model.v1.DeployResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.model.v1.DeployRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.model.v1.DeployResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.model.v1.DeployResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.model.v1.ModelServiceClient.prototype.deploy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Deploy',
      request,
      metadata || {},
      methodDescriptor_ModelService_Deploy,
      callback);
};


/**
 * @param {!proto.viam.app.model.v1.DeployRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.model.v1.DeployResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.model.v1.ModelServicePromiseClient.prototype.deploy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Deploy',
      request,
      metadata || {},
      methodDescriptor_ModelService_Deploy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.model.v1.InfoRequest,
 *   !proto.viam.app.model.v1.InfoResponse>}
 */
const methodDescriptor_ModelService_Info = new grpc.web.MethodDescriptor(
  '/viam.app.model.v1.ModelService/Info',
  grpc.web.MethodType.UNARY,
  proto.viam.app.model.v1.InfoRequest,
  proto.viam.app.model.v1.InfoResponse,
  /**
   * @param {!proto.viam.app.model.v1.InfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.model.v1.InfoResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.model.v1.InfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.model.v1.InfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.model.v1.InfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.model.v1.ModelServiceClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Info',
      request,
      metadata || {},
      methodDescriptor_ModelService_Info,
      callback);
};


/**
 * @param {!proto.viam.app.model.v1.InfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.model.v1.InfoResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.model.v1.ModelServicePromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.model.v1.ModelService/Info',
      request,
      metadata || {},
      methodDescriptor_ModelService_Info);
};


module.exports = proto.viam.app.model.v1;

