/**
 * @fileoverview gRPC-Web generated client stub for viam.module.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var app_v1_robot_pb = require('../../app/v1/robot_pb.js')

var robot_v1_robot_pb = require('../../robot/v1/robot_pb.js')
const proto = {};
proto.viam = {};
proto.viam.module = {};
proto.viam.module.v1 = require('./module_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.module.v1.ModuleServiceClient =
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
proto.viam.module.v1.ModuleServicePromiseClient =
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
 *   !proto.viam.module.v1.AddResourceRequest,
 *   !proto.viam.module.v1.AddResourceResponse>}
 */
const methodDescriptor_ModuleService_AddResource = new grpc.web.MethodDescriptor(
  '/viam.module.v1.ModuleService/AddResource',
  grpc.web.MethodType.UNARY,
  proto.viam.module.v1.AddResourceRequest,
  proto.viam.module.v1.AddResourceResponse,
  /**
   * @param {!proto.viam.module.v1.AddResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.AddResourceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.module.v1.AddResourceRequest,
 *   !proto.viam.module.v1.AddResourceResponse>}
 */
const methodInfo_ModuleService_AddResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.module.v1.AddResourceResponse,
  /**
   * @param {!proto.viam.module.v1.AddResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.AddResourceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.module.v1.AddResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.module.v1.AddResourceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.module.v1.AddResourceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.module.v1.ModuleServiceClient.prototype.addResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.module.v1.ModuleService/AddResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_AddResource,
      callback);
};


/**
 * @param {!proto.viam.module.v1.AddResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.module.v1.AddResourceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.module.v1.ModuleServicePromiseClient.prototype.addResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.module.v1.ModuleService/AddResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_AddResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.module.v1.ReconfigureResourceRequest,
 *   !proto.viam.module.v1.ReconfigureResourceResponse>}
 */
const methodDescriptor_ModuleService_ReconfigureResource = new grpc.web.MethodDescriptor(
  '/viam.module.v1.ModuleService/ReconfigureResource',
  grpc.web.MethodType.UNARY,
  proto.viam.module.v1.ReconfigureResourceRequest,
  proto.viam.module.v1.ReconfigureResourceResponse,
  /**
   * @param {!proto.viam.module.v1.ReconfigureResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ReconfigureResourceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.module.v1.ReconfigureResourceRequest,
 *   !proto.viam.module.v1.ReconfigureResourceResponse>}
 */
const methodInfo_ModuleService_ReconfigureResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.module.v1.ReconfigureResourceResponse,
  /**
   * @param {!proto.viam.module.v1.ReconfigureResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ReconfigureResourceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.module.v1.ReconfigureResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.module.v1.ReconfigureResourceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.module.v1.ReconfigureResourceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.module.v1.ModuleServiceClient.prototype.reconfigureResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.module.v1.ModuleService/ReconfigureResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_ReconfigureResource,
      callback);
};


/**
 * @param {!proto.viam.module.v1.ReconfigureResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.module.v1.ReconfigureResourceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.module.v1.ModuleServicePromiseClient.prototype.reconfigureResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.module.v1.ModuleService/ReconfigureResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_ReconfigureResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.module.v1.RemoveResourceRequest,
 *   !proto.viam.module.v1.RemoveResourceResponse>}
 */
const methodDescriptor_ModuleService_RemoveResource = new grpc.web.MethodDescriptor(
  '/viam.module.v1.ModuleService/RemoveResource',
  grpc.web.MethodType.UNARY,
  proto.viam.module.v1.RemoveResourceRequest,
  proto.viam.module.v1.RemoveResourceResponse,
  /**
   * @param {!proto.viam.module.v1.RemoveResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.RemoveResourceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.module.v1.RemoveResourceRequest,
 *   !proto.viam.module.v1.RemoveResourceResponse>}
 */
const methodInfo_ModuleService_RemoveResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.module.v1.RemoveResourceResponse,
  /**
   * @param {!proto.viam.module.v1.RemoveResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.RemoveResourceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.module.v1.RemoveResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.module.v1.RemoveResourceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.module.v1.RemoveResourceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.module.v1.ModuleServiceClient.prototype.removeResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.module.v1.ModuleService/RemoveResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_RemoveResource,
      callback);
};


/**
 * @param {!proto.viam.module.v1.RemoveResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.module.v1.RemoveResourceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.module.v1.ModuleServicePromiseClient.prototype.removeResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.module.v1.ModuleService/RemoveResource',
      request,
      metadata || {},
      methodDescriptor_ModuleService_RemoveResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.module.v1.ReadyRequest,
 *   !proto.viam.module.v1.ReadyResponse>}
 */
const methodDescriptor_ModuleService_Ready = new grpc.web.MethodDescriptor(
  '/viam.module.v1.ModuleService/Ready',
  grpc.web.MethodType.UNARY,
  proto.viam.module.v1.ReadyRequest,
  proto.viam.module.v1.ReadyResponse,
  /**
   * @param {!proto.viam.module.v1.ReadyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ReadyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.module.v1.ReadyRequest,
 *   !proto.viam.module.v1.ReadyResponse>}
 */
const methodInfo_ModuleService_Ready = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.module.v1.ReadyResponse,
  /**
   * @param {!proto.viam.module.v1.ReadyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ReadyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.module.v1.ReadyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.module.v1.ReadyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.module.v1.ReadyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.module.v1.ModuleServiceClient.prototype.ready =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.module.v1.ModuleService/Ready',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Ready,
      callback);
};


/**
 * @param {!proto.viam.module.v1.ReadyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.module.v1.ReadyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.module.v1.ModuleServicePromiseClient.prototype.ready =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.module.v1.ModuleService/Ready',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Ready);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.module.v1.ValidateConfigRequest,
 *   !proto.viam.module.v1.ValidateConfigResponse>}
 */
const methodDescriptor_ModuleService_ValidateConfig = new grpc.web.MethodDescriptor(
  '/viam.module.v1.ModuleService/ValidateConfig',
  grpc.web.MethodType.UNARY,
  proto.viam.module.v1.ValidateConfigRequest,
  proto.viam.module.v1.ValidateConfigResponse,
  /**
   * @param {!proto.viam.module.v1.ValidateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ValidateConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.module.v1.ValidateConfigRequest,
 *   !proto.viam.module.v1.ValidateConfigResponse>}
 */
const methodInfo_ModuleService_ValidateConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.module.v1.ValidateConfigResponse,
  /**
   * @param {!proto.viam.module.v1.ValidateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.module.v1.ValidateConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.module.v1.ValidateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.module.v1.ValidateConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.module.v1.ValidateConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.module.v1.ModuleServiceClient.prototype.validateConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.module.v1.ModuleService/ValidateConfig',
      request,
      metadata || {},
      methodDescriptor_ModuleService_ValidateConfig,
      callback);
};


/**
 * @param {!proto.viam.module.v1.ValidateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.module.v1.ValidateConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.module.v1.ModuleServicePromiseClient.prototype.validateConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.module.v1.ModuleService/ValidateConfig',
      request,
      metadata || {},
      methodDescriptor_ModuleService_ValidateConfig);
};


module.exports = proto.viam.module.v1;

