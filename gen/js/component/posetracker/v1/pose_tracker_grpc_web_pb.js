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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.posetracker.v1.PoseTrackerServiceClient =
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
proto.viam.component.posetracker.v1.PoseTrackerServicePromiseClient =
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
 * @param {!proto.viam.component.posetracker.v1.GetPosesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.posetracker.v1.GetPosesResponse)}
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
 * @param {?Object<string, string>=} metadata User defined
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


module.exports = proto.viam.component.posetracker.v1;

