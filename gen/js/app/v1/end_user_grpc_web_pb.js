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

const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.v1 = require('./end_user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.EndUserServiceClient =
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
proto.viam.app.v1.EndUserServicePromiseClient =
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
 *   !proto.viam.app.v1.IsLegalAcceptedRequest,
 *   !proto.viam.app.v1.IsLegalAcceptedResponse>}
 */
const methodDescriptor_EndUserService_IsLegalAccepted = new grpc.web.MethodDescriptor(
  '/viam.app.v1.EndUserService/IsLegalAccepted',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.IsLegalAcceptedRequest,
  proto.viam.app.v1.IsLegalAcceptedResponse,
  /**
   * @param {!proto.viam.app.v1.IsLegalAcceptedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.IsLegalAcceptedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.IsLegalAcceptedRequest,
 *   !proto.viam.app.v1.IsLegalAcceptedResponse>}
 */
const methodInfo_EndUserService_IsLegalAccepted = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.IsLegalAcceptedResponse,
  /**
   * @param {!proto.viam.app.v1.IsLegalAcceptedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.IsLegalAcceptedResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.IsLegalAcceptedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.IsLegalAcceptedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.IsLegalAcceptedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.EndUserServiceClient.prototype.isLegalAccepted =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.EndUserService/IsLegalAccepted',
      request,
      metadata || {},
      methodDescriptor_EndUserService_IsLegalAccepted,
      callback);
};


/**
 * @param {!proto.viam.app.v1.IsLegalAcceptedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.IsLegalAcceptedResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.EndUserServicePromiseClient.prototype.isLegalAccepted =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.EndUserService/IsLegalAccepted',
      request,
      metadata || {},
      methodDescriptor_EndUserService_IsLegalAccepted);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.AcceptLegalRequest,
 *   !proto.viam.app.v1.AcceptLegalResponse>}
 */
const methodDescriptor_EndUserService_AcceptLegal = new grpc.web.MethodDescriptor(
  '/viam.app.v1.EndUserService/AcceptLegal',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.AcceptLegalRequest,
  proto.viam.app.v1.AcceptLegalResponse,
  /**
   * @param {!proto.viam.app.v1.AcceptLegalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.AcceptLegalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.AcceptLegalRequest,
 *   !proto.viam.app.v1.AcceptLegalResponse>}
 */
const methodInfo_EndUserService_AcceptLegal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.AcceptLegalResponse,
  /**
   * @param {!proto.viam.app.v1.AcceptLegalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.AcceptLegalResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.AcceptLegalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.AcceptLegalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.AcceptLegalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.EndUserServiceClient.prototype.acceptLegal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.EndUserService/AcceptLegal',
      request,
      metadata || {},
      methodDescriptor_EndUserService_AcceptLegal,
      callback);
};


/**
 * @param {!proto.viam.app.v1.AcceptLegalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.AcceptLegalResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.EndUserServicePromiseClient.prototype.acceptLegal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.EndUserService/AcceptLegal',
      request,
      metadata || {},
      methodDescriptor_EndUserService_AcceptLegal);
};


module.exports = proto.viam.app.v1;

