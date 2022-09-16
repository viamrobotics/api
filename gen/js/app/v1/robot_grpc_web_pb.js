/**
 * @fileoverview gRPC-Web generated client stub for viam.app.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var app_v1_app_pb = require('../../app/v1/app_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var tagger_v1_tagger_pb = require('../../tagger/v1/tagger_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.v1 = require('./robot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.RobotServiceClient =
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
proto.viam.app.v1.RobotServicePromiseClient =
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
 *   !proto.viam.app.v1.ConfigRequest,
 *   !proto.viam.app.v1.ConfigResponse>}
 */
const methodDescriptor_RobotService_Config = new grpc.web.MethodDescriptor(
  '/viam.app.v1.RobotService/Config',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ConfigRequest,
  proto.viam.app.v1.ConfigResponse,
  /**
   * @param {!proto.viam.app.v1.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.ConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.RobotServiceClient.prototype.config =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.RobotService/Config',
      request,
      metadata || {},
      methodDescriptor_RobotService_Config,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.RobotServicePromiseClient.prototype.config =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.RobotService/Config',
      request,
      metadata || {},
      methodDescriptor_RobotService_Config);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CertificateRequest,
 *   !proto.viam.app.v1.CertificateResponse>}
 */
const methodDescriptor_RobotService_Certificate = new grpc.web.MethodDescriptor(
  '/viam.app.v1.RobotService/Certificate',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CertificateRequest,
  proto.viam.app.v1.CertificateResponse,
  /**
   * @param {!proto.viam.app.v1.CertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CertificateResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.CertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.RobotServiceClient.prototype.certificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.RobotService/Certificate',
      request,
      metadata || {},
      methodDescriptor_RobotService_Certificate,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CertificateResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.RobotServicePromiseClient.prototype.certificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.RobotService/Certificate',
      request,
      metadata || {},
      methodDescriptor_RobotService_Certificate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.LogRequest,
 *   !proto.viam.app.v1.LogResponse>}
 */
const methodDescriptor_RobotService_Log = new grpc.web.MethodDescriptor(
  '/viam.app.v1.RobotService/Log',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.LogRequest,
  proto.viam.app.v1.LogResponse,
  /**
   * @param {!proto.viam.app.v1.LogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.LogResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.LogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.LogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.LogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.RobotServiceClient.prototype.log =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.RobotService/Log',
      request,
      metadata || {},
      methodDescriptor_RobotService_Log,
      callback);
};


/**
 * @param {!proto.viam.app.v1.LogRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.LogResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.RobotServicePromiseClient.prototype.log =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.RobotService/Log',
      request,
      metadata || {},
      methodDescriptor_RobotService_Log);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.NeedsRestartRequest,
 *   !proto.viam.app.v1.NeedsRestartResponse>}
 */
const methodDescriptor_RobotService_NeedsRestart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.RobotService/NeedsRestart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.NeedsRestartRequest,
  proto.viam.app.v1.NeedsRestartResponse,
  /**
   * @param {!proto.viam.app.v1.NeedsRestartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.NeedsRestartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.NeedsRestartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.NeedsRestartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.NeedsRestartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.RobotServiceClient.prototype.needsRestart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.RobotService/NeedsRestart',
      request,
      metadata || {},
      methodDescriptor_RobotService_NeedsRestart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.NeedsRestartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.NeedsRestartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.RobotServicePromiseClient.prototype.needsRestart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.RobotService/NeedsRestart',
      request,
      metadata || {},
      methodDescriptor_RobotService_NeedsRestart);
};


module.exports = proto.viam.app.v1;

