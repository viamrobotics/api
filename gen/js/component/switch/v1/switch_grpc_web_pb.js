/**
 * @fileoverview gRPC-Web generated client stub for viam.component.switch.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: component/switch/v1/switch.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.switch = {};
proto.viam.component.switch.v1 = require('./switch_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.switch.v1.SwitchServiceClient =
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
proto.viam.component.switch.v1.SwitchServicePromiseClient =
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
 *   !proto.viam.component.switch.v1.SetPositionRequest,
 *   !proto.viam.component.switch.v1.SetPositionResponse>}
 */
const methodDescriptor_SwitchService_SetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.switch.v1.SwitchService/SetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.switch.v1.SetPositionRequest,
  proto.viam.component.switch.v1.SetPositionResponse,
  /**
   * @param {!proto.viam.component.switch.v1.SetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.switch.v1.SetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.switch.v1.SetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.switch.v1.SetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.switch.v1.SetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.switch.v1.SwitchServiceClient.prototype.setPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/SetPosition',
      request,
      metadata || {},
      methodDescriptor_SwitchService_SetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.switch.v1.SetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.switch.v1.SetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.switch.v1.SwitchServicePromiseClient.prototype.setPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/SetPosition',
      request,
      metadata || {},
      methodDescriptor_SwitchService_SetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.switch.v1.GetPositionRequest,
 *   !proto.viam.component.switch.v1.GetPositionResponse>}
 */
const methodDescriptor_SwitchService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.switch.v1.SwitchService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.switch.v1.GetPositionRequest,
  proto.viam.component.switch.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.switch.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.switch.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.switch.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.switch.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.switch.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.switch.v1.SwitchServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SwitchService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.switch.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.switch.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.switch.v1.SwitchServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SwitchService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.switch.v1.GetNumberOfPositionsRequest,
 *   !proto.viam.component.switch.v1.GetNumberOfPositionsResponse>}
 */
const methodDescriptor_SwitchService_GetNumberOfPositions = new grpc.web.MethodDescriptor(
  '/viam.component.switch.v1.SwitchService/GetNumberOfPositions',
  grpc.web.MethodType.UNARY,
  proto.viam.component.switch.v1.GetNumberOfPositionsRequest,
  proto.viam.component.switch.v1.GetNumberOfPositionsResponse,
  /**
   * @param {!proto.viam.component.switch.v1.GetNumberOfPositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.switch.v1.GetNumberOfPositionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.switch.v1.GetNumberOfPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.switch.v1.GetNumberOfPositionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.switch.v1.GetNumberOfPositionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.switch.v1.SwitchServiceClient.prototype.getNumberOfPositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/GetNumberOfPositions',
      request,
      metadata || {},
      methodDescriptor_SwitchService_GetNumberOfPositions,
      callback);
};


/**
 * @param {!proto.viam.component.switch.v1.GetNumberOfPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.switch.v1.GetNumberOfPositionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.switch.v1.SwitchServicePromiseClient.prototype.getNumberOfPositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/GetNumberOfPositions',
      request,
      metadata || {},
      methodDescriptor_SwitchService_GetNumberOfPositions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_SwitchService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.switch.v1.SwitchService/DoCommand',
  grpc.web.MethodType.UNARY,
  common_v1_common_pb.DoCommandRequest,
  common_v1_common_pb.DoCommandResponse,
  /**
   * @param {!proto.viam.common.v1.DoCommandRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.DoCommandResponse.deserializeBinary
);


/**
 * @param {!proto.viam.common.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.common.v1.DoCommandResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.common.v1.DoCommandResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.switch.v1.SwitchServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_SwitchService_DoCommand,
      callback);
};


/**
 * @param {!proto.viam.common.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.common.v1.DoCommandResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.switch.v1.SwitchServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.switch.v1.SwitchService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_SwitchService_DoCommand);
};


module.exports = proto.viam.component.switch.v1;

