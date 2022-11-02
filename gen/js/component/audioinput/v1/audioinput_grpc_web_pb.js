/**
 * @fileoverview gRPC-Web generated client stub for viam.component.audioinput.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_httpbody_pb = require('../../../google/api/httpbody_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.audioinput = {};
proto.viam.component.audioinput.v1 = require('./audioinput_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient =
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
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient =
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
 *   !proto.viam.component.audioinput.v1.ChunksRequest,
 *   !proto.viam.component.audioinput.v1.ChunksResponse>}
 */
const methodDescriptor_AudioInputService_Chunks = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Chunks',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.component.audioinput.v1.ChunksRequest,
  proto.viam.component.audioinput.v1.ChunksResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.ChunksResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.ChunksResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.chunks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Chunks',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Chunks);
};


/**
 * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.ChunksResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.chunks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Chunks',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Chunks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.audioinput.v1.PropertiesRequest,
 *   !proto.viam.component.audioinput.v1.PropertiesResponse>}
 */
const methodDescriptor_AudioInputService_Properties = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Properties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.audioinput.v1.PropertiesRequest,
  proto.viam.component.audioinput.v1.PropertiesResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.PropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.audioinput.v1.PropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.PropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.properties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Properties',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Properties,
      callback);
};


/**
 * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.audioinput.v1.PropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.properties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Properties',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Properties);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.audioinput.v1.RecordRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodDescriptor_AudioInputService_Record = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Record',
  grpc.web.MethodType.UNARY,
  proto.viam.component.audioinput.v1.RecordRequest,
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.viam.component.audioinput.v1.RecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.RecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.api.HttpBody)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.HttpBody>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.record =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Record',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Record,
      callback);
};


/**
 * @param {!proto.viam.component.audioinput.v1.RecordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.HttpBody>}
 *     Promise that resolves to the response
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.record =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Record',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Record);
};


module.exports = proto.viam.component.audioinput.v1;

