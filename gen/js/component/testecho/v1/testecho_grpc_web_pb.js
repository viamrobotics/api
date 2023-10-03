/**
 * @fileoverview gRPC-Web generated client stub for viam.component.testecho.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.testecho = {};
proto.viam.component.testecho.v1 = require('./testecho_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.testecho.v1.TestEchoServiceClient =
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
proto.viam.component.testecho.v1.TestEchoServicePromiseClient =
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
 *   !proto.viam.component.testecho.v1.EchoRequest,
 *   !proto.viam.component.testecho.v1.EchoResponse>}
 */
const methodDescriptor_TestEchoService_Echo = new grpc.web.MethodDescriptor(
  '/viam.component.testecho.v1.TestEchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.viam.component.testecho.v1.EchoRequest,
  proto.viam.component.testecho.v1.EchoResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.testecho.v1.EchoRequest,
 *   !proto.viam.component.testecho.v1.EchoResponse>}
 */
const methodInfo_TestEchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.testecho.v1.EchoResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.testecho.v1.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.testecho.v1.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.testecho.v1.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.testecho.v1.TestEchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_Echo,
      callback);
};


/**
 * @param {!proto.viam.component.testecho.v1.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.testecho.v1.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.testecho.v1.TestEchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.testecho.v1.EchoMultipleRequest,
 *   !proto.viam.component.testecho.v1.EchoMultipleResponse>}
 */
const methodDescriptor_TestEchoService_EchoMultiple = new grpc.web.MethodDescriptor(
  '/viam.component.testecho.v1.TestEchoService/EchoMultiple',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.component.testecho.v1.EchoMultipleRequest,
  proto.viam.component.testecho.v1.EchoMultipleResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.EchoMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.EchoMultipleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.testecho.v1.EchoMultipleRequest,
 *   !proto.viam.component.testecho.v1.EchoMultipleResponse>}
 */
const methodInfo_TestEchoService_EchoMultiple = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.testecho.v1.EchoMultipleResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.EchoMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.EchoMultipleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.testecho.v1.EchoMultipleRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.testecho.v1.EchoMultipleResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.testecho.v1.TestEchoServiceClient.prototype.echoMultiple =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/EchoMultiple',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_EchoMultiple);
};


/**
 * @param {!proto.viam.component.testecho.v1.EchoMultipleRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.testecho.v1.EchoMultipleResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.testecho.v1.TestEchoServicePromiseClient.prototype.echoMultiple =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/EchoMultiple',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_EchoMultiple);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.testecho.v1.StopRequest,
 *   !proto.viam.component.testecho.v1.StopResponse>}
 */
const methodDescriptor_TestEchoService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.testecho.v1.TestEchoService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.testecho.v1.StopRequest,
  proto.viam.component.testecho.v1.StopResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.testecho.v1.StopRequest,
 *   !proto.viam.component.testecho.v1.StopResponse>}
 */
const methodInfo_TestEchoService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.testecho.v1.StopResponse,
  /**
   * @param {!proto.viam.component.testecho.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.testecho.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.testecho.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.testecho.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.testecho.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.testecho.v1.TestEchoServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/Stop',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.testecho.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.testecho.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.testecho.v1.TestEchoServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.testecho.v1.TestEchoService/Stop',
      request,
      metadata || {},
      methodDescriptor_TestEchoService_Stop);
};


module.exports = proto.viam.component.testecho.v1;

