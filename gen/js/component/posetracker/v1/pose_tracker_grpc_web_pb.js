/**
 * @fileoverview gRPC-Web generated client stub for viam.component.posetracker.v1
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
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.posetracker = {};
proto.viam.component.posetracker.v1 = require('./pose_tracker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.posetracker.v1.PoseTrackerServiceClient =
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
proto.viam.component.posetracker.v1.PoseTrackerServicePromiseClient =
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
 *   !proto.viam.component.posetracker.v1.GetPosesRequest,
 *   !proto.viam.component.posetracker.v1.GetPosesResponse>}
 */
const methodDescriptor_PoseTrackerService_GetPoses = new grpc.web.MethodDescriptor(
  '/viam.component.posetracker.v1.PoseTrackerService/GetPoses',
  grpc.web.MethodType.UNARY,
  proto.viam.component.posetracker.v1.GetPosesRequest,
  proto.viam.component.posetracker.v1.GetPosesResponse,
  /**
   * @param {!proto.viam.component.posetracker.v1.GetPosesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.posetracker.v1.GetPosesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.posetracker.v1.GetPosesRequest,
 *   !proto.viam.component.posetracker.v1.GetPosesResponse>}
 */
const methodInfo_PoseTrackerService_GetPoses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.posetracker.v1.GetPosesResponse,
  /**
   * @param {!proto.viam.component.posetracker.v1.GetPosesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.posetracker.v1.GetPosesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.posetracker.v1.GetPosesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.posetracker.v1.GetPosesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.posetracker.v1.GetPosesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.posetracker.v1.PoseTrackerServiceClient.prototype.getPoses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/GetPoses',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_GetPoses,
      callback);
};


/**
 * @param {!proto.viam.component.posetracker.v1.GetPosesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.posetracker.v1.GetPosesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.posetracker.v1.PoseTrackerServicePromiseClient.prototype.getPoses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/GetPoses',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_GetPoses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_PoseTrackerService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.posetracker.v1.PoseTrackerService/DoCommand',
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
const methodInfo_PoseTrackerService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.posetracker.v1.PoseTrackerServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_DoCommand,
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
proto.viam.component.posetracker.v1.PoseTrackerServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_PoseTrackerService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.posetracker.v1.PoseTrackerService/GetGeometries',
  grpc.web.MethodType.UNARY,
  common_v1_common_pb.GetGeometriesRequest,
  common_v1_common_pb.GetGeometriesResponse,
  /**
   * @param {!proto.viam.common.v1.GetGeometriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.GetGeometriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodInfo_PoseTrackerService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.GetGeometriesResponse,
  /**
   * @param {!proto.viam.common.v1.GetGeometriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.GetGeometriesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.common.v1.GetGeometriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.common.v1.GetGeometriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.common.v1.GetGeometriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.posetracker.v1.PoseTrackerServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_GetGeometries,
      callback);
};


/**
 * @param {!proto.viam.common.v1.GetGeometriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.common.v1.GetGeometriesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.posetracker.v1.PoseTrackerServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.posetracker.v1.PoseTrackerService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_PoseTrackerService_GetGeometries);
};


module.exports = proto.viam.component.posetracker.v1;

