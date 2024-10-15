/**
 * @fileoverview gRPC-Web generated client stub for viam.provisioning.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: provisioning/v1/provisioning.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.viam = {};
proto.viam.provisioning = {};
proto.viam.provisioning.v1 = require('./provisioning_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.provisioning.v1.ProvisioningServiceClient =
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
proto.viam.provisioning.v1.ProvisioningServicePromiseClient =
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
 *   !proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusRequest,
 *   !proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse>}
 */
const methodDescriptor_ProvisioningService_GetSmartphysicalDeviceStatus = new grpc.web.MethodDescriptor(
  '/viam.provisioning.v1.ProvisioningService/GetSmartphysicalDeviceStatus',
  grpc.web.MethodType.UNARY,
  proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusRequest,
  proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse,
  /**
   * @param {!proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse.deserializeBinary
);


/**
 * @param {!proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.provisioning.v1.ProvisioningServiceClient.prototype.getSmartphysicalDeviceStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/GetSmartphysicalDeviceStatus',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_GetSmartphysicalDeviceStatus,
      callback);
};


/**
 * @param {!proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.provisioning.v1.GetSmartphysicalDeviceStatusResponse>}
 *     Promise that resolves to the response
 */
proto.viam.provisioning.v1.ProvisioningServicePromiseClient.prototype.getSmartphysicalDeviceStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/GetSmartphysicalDeviceStatus',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_GetSmartphysicalDeviceStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.provisioning.v1.SetNetworkCredentialsRequest,
 *   !proto.viam.provisioning.v1.SetNetworkCredentialsResponse>}
 */
const methodDescriptor_ProvisioningService_SetNetworkCredentials = new grpc.web.MethodDescriptor(
  '/viam.provisioning.v1.ProvisioningService/SetNetworkCredentials',
  grpc.web.MethodType.UNARY,
  proto.viam.provisioning.v1.SetNetworkCredentialsRequest,
  proto.viam.provisioning.v1.SetNetworkCredentialsResponse,
  /**
   * @param {!proto.viam.provisioning.v1.SetNetworkCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.provisioning.v1.SetNetworkCredentialsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.provisioning.v1.SetNetworkCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.provisioning.v1.SetNetworkCredentialsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.provisioning.v1.SetNetworkCredentialsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.provisioning.v1.ProvisioningServiceClient.prototype.setNetworkCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/SetNetworkCredentials',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_SetNetworkCredentials,
      callback);
};


/**
 * @param {!proto.viam.provisioning.v1.SetNetworkCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.provisioning.v1.SetNetworkCredentialsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.provisioning.v1.ProvisioningServicePromiseClient.prototype.setNetworkCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/SetNetworkCredentials',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_SetNetworkCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsRequest,
 *   !proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse>}
 */
const methodDescriptor_ProvisioningService_SetSmartphysicalDeviceCredentials = new grpc.web.MethodDescriptor(
  '/viam.provisioning.v1.ProvisioningService/SetSmartphysicalDeviceCredentials',
  grpc.web.MethodType.UNARY,
  proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsRequest,
  proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse,
  /**
   * @param {!proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.provisioning.v1.ProvisioningServiceClient.prototype.setSmartphysicalDeviceCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/SetSmartphysicalDeviceCredentials',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_SetSmartphysicalDeviceCredentials,
      callback);
};


/**
 * @param {!proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.provisioning.v1.SetSmartphysicalDeviceCredentialsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.provisioning.v1.ProvisioningServicePromiseClient.prototype.setSmartphysicalDeviceCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/SetSmartphysicalDeviceCredentials',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_SetSmartphysicalDeviceCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.provisioning.v1.GetNetworkListRequest,
 *   !proto.viam.provisioning.v1.GetNetworkListResponse>}
 */
const methodDescriptor_ProvisioningService_GetNetworkList = new grpc.web.MethodDescriptor(
  '/viam.provisioning.v1.ProvisioningService/GetNetworkList',
  grpc.web.MethodType.UNARY,
  proto.viam.provisioning.v1.GetNetworkListRequest,
  proto.viam.provisioning.v1.GetNetworkListResponse,
  /**
   * @param {!proto.viam.provisioning.v1.GetNetworkListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.provisioning.v1.GetNetworkListResponse.deserializeBinary
);


/**
 * @param {!proto.viam.provisioning.v1.GetNetworkListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.provisioning.v1.GetNetworkListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.provisioning.v1.GetNetworkListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.provisioning.v1.ProvisioningServiceClient.prototype.getNetworkList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/GetNetworkList',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_GetNetworkList,
      callback);
};


/**
 * @param {!proto.viam.provisioning.v1.GetNetworkListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.provisioning.v1.GetNetworkListResponse>}
 *     Promise that resolves to the response
 */
proto.viam.provisioning.v1.ProvisioningServicePromiseClient.prototype.getNetworkList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.provisioning.v1.ProvisioningService/GetNetworkList',
      request,
      metadata || {},
      methodDescriptor_ProvisioningService_GetNetworkList);
};


module.exports = proto.viam.provisioning.v1;

