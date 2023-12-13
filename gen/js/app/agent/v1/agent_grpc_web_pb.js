/**
 * @fileoverview gRPC-Web generated client stub for viam.app.agent.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: app/agent/v1/agent.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var tagger_v1_tagger_pb = require('../../../tagger/v1/tagger_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.agent = {};
proto.viam.app.agent.v1 = require('./agent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.agent.v1.AgentAppServiceClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.agent.v1.AgentAppServicePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.agent.v1.GetAgentConfigRequest,
 *   !proto.viam.app.agent.v1.GetAgentConfigResponse>}
 */
const methodDescriptor_AgentAppService_GetAgentConfig = new grpc.web.MethodDescriptor(
  '/viam.app.agent.v1.AgentAppService/GetAgentConfig',
  grpc.web.MethodType.UNARY,
  proto.viam.app.agent.v1.GetAgentConfigRequest,
  proto.viam.app.agent.v1.GetAgentConfigResponse,
  /**
   * @param {!proto.viam.app.agent.v1.GetAgentConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.agent.v1.GetAgentConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.agent.v1.GetAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.agent.v1.GetAgentConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.agent.v1.GetAgentConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.agent.v1.AgentAppServiceClient.prototype.getAgentConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.agent.v1.AgentAppService/GetAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentAppService_GetAgentConfig,
      callback);
};


/**
 * @param {!proto.viam.app.agent.v1.GetAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.agent.v1.GetAgentConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.agent.v1.AgentAppServicePromiseClient.prototype.getAgentConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.agent.v1.AgentAppService/GetAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentAppService_GetAgentConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.agent.v1.UpdateAgentConfigRequest,
 *   !proto.viam.app.agent.v1.UpdateAgentConfigResponse>}
 */
const methodDescriptor_AgentAppService_UpdateAgentConfig = new grpc.web.MethodDescriptor(
  '/viam.app.agent.v1.AgentAppService/UpdateAgentConfig',
  grpc.web.MethodType.UNARY,
  proto.viam.app.agent.v1.UpdateAgentConfigRequest,
  proto.viam.app.agent.v1.UpdateAgentConfigResponse,
  /**
   * @param {!proto.viam.app.agent.v1.UpdateAgentConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.agent.v1.UpdateAgentConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.agent.v1.UpdateAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.agent.v1.UpdateAgentConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.agent.v1.UpdateAgentConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.agent.v1.AgentAppServiceClient.prototype.updateAgentConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.agent.v1.AgentAppService/UpdateAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentAppService_UpdateAgentConfig,
      callback);
};


/**
 * @param {!proto.viam.app.agent.v1.UpdateAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.agent.v1.UpdateAgentConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.agent.v1.AgentAppServicePromiseClient.prototype.updateAgentConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.agent.v1.AgentAppService/UpdateAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentAppService_UpdateAgentConfig);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.agent.v1.AgentDeviceServiceClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.agent.v1.AgentDeviceServicePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.agent.v1.DeviceAgentConfigRequest,
 *   !proto.viam.app.agent.v1.DeviceAgentConfigResponse>}
 */
const methodDescriptor_AgentDeviceService_DeviceAgentConfig = new grpc.web.MethodDescriptor(
  '/viam.app.agent.v1.AgentDeviceService/DeviceAgentConfig',
  grpc.web.MethodType.UNARY,
  proto.viam.app.agent.v1.DeviceAgentConfigRequest,
  proto.viam.app.agent.v1.DeviceAgentConfigResponse,
  /**
   * @param {!proto.viam.app.agent.v1.DeviceAgentConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.agent.v1.DeviceAgentConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.agent.v1.DeviceAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.agent.v1.DeviceAgentConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.agent.v1.DeviceAgentConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.agent.v1.AgentDeviceServiceClient.prototype.deviceAgentConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.agent.v1.AgentDeviceService/DeviceAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentDeviceService_DeviceAgentConfig,
      callback);
};


/**
 * @param {!proto.viam.app.agent.v1.DeviceAgentConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.agent.v1.DeviceAgentConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.agent.v1.AgentDeviceServicePromiseClient.prototype.deviceAgentConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.agent.v1.AgentDeviceService/DeviceAgentConfig',
      request,
      metadata || {},
      methodDescriptor_AgentDeviceService_DeviceAgentConfig);
};


module.exports = proto.viam.app.agent.v1;

