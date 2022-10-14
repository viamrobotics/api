/**
 * @fileoverview gRPC-Web generated client stub for viam.service.motion.v1
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
proto.viam.service = {};
proto.viam.service.motion = {};
proto.viam.service.motion.v1 = require('./motion_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.motion.v1.MotionServiceClient =
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
proto.viam.service.motion.v1.MotionServicePromiseClient =
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
 *   !proto.viam.service.motion.v1.MoveRequest,
 *   !proto.viam.service.motion.v1.MoveResponse>}
 */
const methodDescriptor_MotionService_Move = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/Move',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveRequest,
  proto.viam.service.motion.v1.MoveResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.motion.v1.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/Move',
      request,
      metadata || {},
      methodDescriptor_MotionService_Move,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/Move',
      request,
      metadata || {},
      methodDescriptor_MotionService_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.MoveSingleComponentRequest,
 *   !proto.viam.service.motion.v1.MoveSingleComponentResponse>}
 */
const methodDescriptor_MotionService_MoveSingleComponent = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/MoveSingleComponent',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveSingleComponentRequest,
  proto.viam.service.motion.v1.MoveSingleComponentResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveSingleComponentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveSingleComponentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveSingleComponentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.motion.v1.MoveSingleComponentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveSingleComponentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.moveSingleComponent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveSingleComponent',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveSingleComponent,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveSingleComponentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveSingleComponentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.moveSingleComponent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveSingleComponent',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveSingleComponent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.GetPoseRequest,
 *   !proto.viam.service.motion.v1.GetPoseResponse>}
 */
const methodDescriptor_MotionService_GetPose = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/GetPose',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.GetPoseRequest,
  proto.viam.service.motion.v1.GetPoseResponse,
  /**
   * @param {!proto.viam.service.motion.v1.GetPoseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.GetPoseResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.GetPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.motion.v1.GetPoseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.GetPoseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.getPose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPose',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPose,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.GetPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.GetPoseResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.getPose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPose',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPose);
};


module.exports = proto.viam.service.motion.v1;

