/**
 * @fileoverview gRPC-Web generated client stub for viam.robot.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.robot = {};
proto.viam.robot.v1 = require('./robot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.robot.v1.RobotServiceClient =
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
proto.viam.robot.v1.RobotServicePromiseClient =
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
 *   !proto.viam.robot.v1.GetOperationsRequest,
 *   !proto.viam.robot.v1.GetOperationsResponse>}
 */
const methodDescriptor_RobotService_GetOperations = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/GetOperations',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.GetOperationsRequest,
  proto.viam.robot.v1.GetOperationsResponse,
  /**
   * @param {!proto.viam.robot.v1.GetOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.GetOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.GetOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.GetOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.getOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_RobotService_GetOperations,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.GetOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.getOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_RobotService_GetOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.ResourceNamesRequest,
 *   !proto.viam.robot.v1.ResourceNamesResponse>}
 */
const methodDescriptor_RobotService_ResourceNames = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/ResourceNames',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.ResourceNamesRequest,
  proto.viam.robot.v1.ResourceNamesResponse,
  /**
   * @param {!proto.viam.robot.v1.ResourceNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.ResourceNamesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.ResourceNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.ResourceNamesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.ResourceNamesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.resourceNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/ResourceNames',
      request,
      metadata || {},
      methodDescriptor_RobotService_ResourceNames,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.ResourceNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.ResourceNamesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.resourceNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/ResourceNames',
      request,
      metadata || {},
      methodDescriptor_RobotService_ResourceNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.ResourceRPCSubtypesRequest,
 *   !proto.viam.robot.v1.ResourceRPCSubtypesResponse>}
 */
const methodDescriptor_RobotService_ResourceRPCSubtypes = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/ResourceRPCSubtypes',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.ResourceRPCSubtypesRequest,
  proto.viam.robot.v1.ResourceRPCSubtypesResponse,
  /**
   * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.ResourceRPCSubtypesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.ResourceRPCSubtypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.ResourceRPCSubtypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.resourceRPCSubtypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/ResourceRPCSubtypes',
      request,
      metadata || {},
      methodDescriptor_RobotService_ResourceRPCSubtypes,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.ResourceRPCSubtypesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.resourceRPCSubtypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/ResourceRPCSubtypes',
      request,
      metadata || {},
      methodDescriptor_RobotService_ResourceRPCSubtypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.CancelOperationRequest,
 *   !proto.viam.robot.v1.CancelOperationResponse>}
 */
const methodDescriptor_RobotService_CancelOperation = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/CancelOperation',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.CancelOperationRequest,
  proto.viam.robot.v1.CancelOperationResponse,
  /**
   * @param {!proto.viam.robot.v1.CancelOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.CancelOperationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.CancelOperationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.CancelOperationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.cancelOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_RobotService_CancelOperation,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.CancelOperationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.cancelOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_RobotService_CancelOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.BlockForOperationRequest,
 *   !proto.viam.robot.v1.BlockForOperationResponse>}
 */
const methodDescriptor_RobotService_BlockForOperation = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/BlockForOperation',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.BlockForOperationRequest,
  proto.viam.robot.v1.BlockForOperationResponse,
  /**
   * @param {!proto.viam.robot.v1.BlockForOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.BlockForOperationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.BlockForOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.BlockForOperationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.BlockForOperationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.blockForOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/BlockForOperation',
      request,
      metadata || {},
      methodDescriptor_RobotService_BlockForOperation,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.BlockForOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.BlockForOperationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.blockForOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/BlockForOperation',
      request,
      metadata || {},
      methodDescriptor_RobotService_BlockForOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.DiscoverComponentsRequest,
 *   !proto.viam.robot.v1.DiscoverComponentsResponse>}
 */
const methodDescriptor_RobotService_DiscoverComponents = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/DiscoverComponents',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.DiscoverComponentsRequest,
  proto.viam.robot.v1.DiscoverComponentsResponse,
  /**
   * @param {!proto.viam.robot.v1.DiscoverComponentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.DiscoverComponentsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.DiscoverComponentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.DiscoverComponentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.DiscoverComponentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.discoverComponents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/DiscoverComponents',
      request,
      metadata || {},
      methodDescriptor_RobotService_DiscoverComponents,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.DiscoverComponentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.DiscoverComponentsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.discoverComponents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/DiscoverComponents',
      request,
      metadata || {},
      methodDescriptor_RobotService_DiscoverComponents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.FrameSystemConfigRequest,
 *   !proto.viam.robot.v1.FrameSystemConfigResponse>}
 */
const methodDescriptor_RobotService_FrameSystemConfig = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/FrameSystemConfig',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.FrameSystemConfigRequest,
  proto.viam.robot.v1.FrameSystemConfigResponse,
  /**
   * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.FrameSystemConfigResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.FrameSystemConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.FrameSystemConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.frameSystemConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/FrameSystemConfig',
      request,
      metadata || {},
      methodDescriptor_RobotService_FrameSystemConfig,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.FrameSystemConfigResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.frameSystemConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/FrameSystemConfig',
      request,
      metadata || {},
      methodDescriptor_RobotService_FrameSystemConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.TransformPoseRequest,
 *   !proto.viam.robot.v1.TransformPoseResponse>}
 */
const methodDescriptor_RobotService_TransformPose = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/TransformPose',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.TransformPoseRequest,
  proto.viam.robot.v1.TransformPoseResponse,
  /**
   * @param {!proto.viam.robot.v1.TransformPoseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.TransformPoseResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.TransformPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.TransformPoseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.TransformPoseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.transformPose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/TransformPose',
      request,
      metadata || {},
      methodDescriptor_RobotService_TransformPose,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.TransformPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.TransformPoseResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.transformPose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/TransformPose',
      request,
      metadata || {},
      methodDescriptor_RobotService_TransformPose);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.GetStatusRequest,
 *   !proto.viam.robot.v1.GetStatusResponse>}
 */
const methodDescriptor_RobotService_GetStatus = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/GetStatus',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.GetStatusRequest,
  proto.viam.robot.v1.GetStatusResponse,
  /**
   * @param {!proto.viam.robot.v1.GetStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.GetStatusResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.GetStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.GetStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.GetStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.getStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/GetStatus',
      request,
      metadata || {},
      methodDescriptor_RobotService_GetStatus,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.GetStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.GetStatusResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.getStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/GetStatus',
      request,
      metadata || {},
      methodDescriptor_RobotService_GetStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.StreamStatusRequest,
 *   !proto.viam.robot.v1.StreamStatusResponse>}
 */
const methodDescriptor_RobotService_StreamStatus = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/StreamStatus',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.robot.v1.StreamStatusRequest,
  proto.viam.robot.v1.StreamStatusResponse,
  /**
   * @param {!proto.viam.robot.v1.StreamStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.StreamStatusResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.StreamStatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.StreamStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.streamStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.robot.v1.RobotService/StreamStatus',
      request,
      metadata || {},
      methodDescriptor_RobotService_StreamStatus);
};


/**
 * @param {!proto.viam.robot.v1.StreamStatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.StreamStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.streamStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.robot.v1.RobotService/StreamStatus',
      request,
      metadata || {},
      methodDescriptor_RobotService_StreamStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.robot.v1.StopAllRequest,
 *   !proto.viam.robot.v1.StopAllResponse>}
 */
const methodDescriptor_RobotService_StopAll = new grpc.web.MethodDescriptor(
  '/viam.robot.v1.RobotService/StopAll',
  grpc.web.MethodType.UNARY,
  proto.viam.robot.v1.StopAllRequest,
  proto.viam.robot.v1.StopAllResponse,
  /**
   * @param {!proto.viam.robot.v1.StopAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.robot.v1.StopAllResponse.deserializeBinary
);


/**
 * @param {!proto.viam.robot.v1.StopAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.robot.v1.StopAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.robot.v1.StopAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.robot.v1.RobotServiceClient.prototype.stopAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.robot.v1.RobotService/StopAll',
      request,
      metadata || {},
      methodDescriptor_RobotService_StopAll,
      callback);
};


/**
 * @param {!proto.viam.robot.v1.StopAllRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.robot.v1.StopAllResponse>}
 *     Promise that resolves to the response
 */
proto.viam.robot.v1.RobotServicePromiseClient.prototype.stopAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.robot.v1.RobotService/StopAll',
      request,
      metadata || {},
      methodDescriptor_RobotService_StopAll);
};


module.exports = proto.viam.robot.v1;

