/**
 * @fileoverview gRPC-Web generated client stub for viam.service.slam.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.service = {};
proto.viam.service.slam = {};
proto.viam.service.slam.v1 = require('./slam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.slam.v1.SLAMServiceClient =
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
proto.viam.service.slam.v1.SLAMServicePromiseClient =
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
 *   !proto.viam.service.slam.v1.GetPositionRequest,
 *   !proto.viam.service.slam.v1.GetPositionResponse>}
 */
const methodDescriptor_SLAMService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetPositionRequest,
  proto.viam.service.slam.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.slam.v1.GetPositionRequest,
 *   !proto.viam.service.slam.v1.GetPositionResponse>}
 */
const methodInfo_SLAMService_GetPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.slam.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.slam.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetPointCloudMapRequest,
 *   !proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 */
const methodDescriptor_SLAMService_GetPointCloudMap = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.service.slam.v1.GetPointCloudMapRequest,
  proto.viam.service.slam.v1.GetPointCloudMapResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPointCloudMapResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.slam.v1.GetPointCloudMapRequest,
 *   !proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 */
const methodInfo_SLAMService_GetPointCloudMap = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.slam.v1.GetPointCloudMapResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPointCloudMapResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPointCloudMap =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPointCloudMap);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPointCloudMap =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPointCloudMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetInternalStateRequest,
 *   !proto.viam.service.slam.v1.GetInternalStateResponse>}
 */
const methodDescriptor_SLAMService_GetInternalState = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetInternalState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.service.slam.v1.GetInternalStateRequest,
  proto.viam.service.slam.v1.GetInternalStateResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetInternalStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.slam.v1.GetInternalStateRequest,
 *   !proto.viam.service.slam.v1.GetInternalStateResponse>}
 */
const methodInfo_SLAMService_GetInternalState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.slam.v1.GetInternalStateResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetInternalStateResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetInternalStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getInternalState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetInternalState',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetInternalState);
};


/**
 * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetInternalStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getInternalState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetInternalState',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetInternalState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetLatestMapInfoRequest,
 *   !proto.viam.service.slam.v1.GetLatestMapInfoResponse>}
 */
const methodDescriptor_SLAMService_GetLatestMapInfo = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetLatestMapInfo',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetLatestMapInfoRequest,
  proto.viam.service.slam.v1.GetLatestMapInfoResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetLatestMapInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetLatestMapInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.slam.v1.GetLatestMapInfoRequest,
 *   !proto.viam.service.slam.v1.GetLatestMapInfoResponse>}
 */
const methodInfo_SLAMService_GetLatestMapInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.slam.v1.GetLatestMapInfoResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetLatestMapInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetLatestMapInfoResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetLatestMapInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.slam.v1.GetLatestMapInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetLatestMapInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getLatestMapInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetLatestMapInfo',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetLatestMapInfo,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetLatestMapInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetLatestMapInfoResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getLatestMapInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetLatestMapInfo',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetLatestMapInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_SLAMService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/DoCommand',
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodInfo_SLAMService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.common.v1.DoCommandResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.common.v1.DoCommandResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_SLAMService_DoCommand,
      callback);
};


/**
 * @param {!proto.viam.common.v1.DoCommandRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.common.v1.DoCommandResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_SLAMService_DoCommand);
};


module.exports = proto.viam.service.slam.v1;

