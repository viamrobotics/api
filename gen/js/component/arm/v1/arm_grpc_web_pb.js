/**
 * @fileoverview gRPC-Web generated client stub for viam.component.arm.v1
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
proto.viam.component.arm = {};
proto.viam.component.arm.v1 = require('./arm_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.arm.v1.ArmServiceClient =
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
proto.viam.component.arm.v1.ArmServicePromiseClient =
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
 *   !proto.viam.component.arm.v1.GetEndPositionRequest,
 *   !proto.viam.component.arm.v1.GetEndPositionResponse>}
 */
const methodDescriptor_ArmService_GetEndPosition = new grpc.web.MethodDescriptor(
  '/viam.component.arm.v1.ArmService/GetEndPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.arm.v1.GetEndPositionRequest,
  proto.viam.component.arm.v1.GetEndPositionResponse,
  /**
   * @param {!proto.viam.component.arm.v1.GetEndPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.arm.v1.GetEndPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.arm.v1.GetEndPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.arm.v1.GetEndPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.arm.v1.GetEndPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.arm.v1.ArmServiceClient.prototype.getEndPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/GetEndPosition',
      request,
      metadata || {},
      methodDescriptor_ArmService_GetEndPosition,
      callback);
};


/**
 * @param {!proto.viam.component.arm.v1.GetEndPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.arm.v1.GetEndPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.arm.v1.ArmServicePromiseClient.prototype.getEndPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/GetEndPosition',
      request,
      metadata || {},
      methodDescriptor_ArmService_GetEndPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.arm.v1.MoveToPositionRequest,
 *   !proto.viam.component.arm.v1.MoveToPositionResponse>}
 */
const methodDescriptor_ArmService_MoveToPosition = new grpc.web.MethodDescriptor(
  '/viam.component.arm.v1.ArmService/MoveToPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.arm.v1.MoveToPositionRequest,
  proto.viam.component.arm.v1.MoveToPositionResponse,
  /**
   * @param {!proto.viam.component.arm.v1.MoveToPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.arm.v1.MoveToPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.arm.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.arm.v1.MoveToPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.arm.v1.MoveToPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.arm.v1.ArmServiceClient.prototype.moveToPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_ArmService_MoveToPosition,
      callback);
};


/**
 * @param {!proto.viam.component.arm.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.arm.v1.MoveToPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.arm.v1.ArmServicePromiseClient.prototype.moveToPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_ArmService_MoveToPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.arm.v1.GetJointPositionsRequest,
 *   !proto.viam.component.arm.v1.GetJointPositionsResponse>}
 */
const methodDescriptor_ArmService_GetJointPositions = new grpc.web.MethodDescriptor(
  '/viam.component.arm.v1.ArmService/GetJointPositions',
  grpc.web.MethodType.UNARY,
  proto.viam.component.arm.v1.GetJointPositionsRequest,
  proto.viam.component.arm.v1.GetJointPositionsResponse,
  /**
   * @param {!proto.viam.component.arm.v1.GetJointPositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.arm.v1.GetJointPositionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.arm.v1.GetJointPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.arm.v1.GetJointPositionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.arm.v1.GetJointPositionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.arm.v1.ArmServiceClient.prototype.getJointPositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/GetJointPositions',
      request,
      metadata || {},
      methodDescriptor_ArmService_GetJointPositions,
      callback);
};


/**
 * @param {!proto.viam.component.arm.v1.GetJointPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.arm.v1.GetJointPositionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.arm.v1.ArmServicePromiseClient.prototype.getJointPositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/GetJointPositions',
      request,
      metadata || {},
      methodDescriptor_ArmService_GetJointPositions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.arm.v1.MoveToJointPositionsRequest,
 *   !proto.viam.component.arm.v1.MoveToJointPositionsResponse>}
 */
const methodDescriptor_ArmService_MoveToJointPositions = new grpc.web.MethodDescriptor(
  '/viam.component.arm.v1.ArmService/MoveToJointPositions',
  grpc.web.MethodType.UNARY,
  proto.viam.component.arm.v1.MoveToJointPositionsRequest,
  proto.viam.component.arm.v1.MoveToJointPositionsResponse,
  /**
   * @param {!proto.viam.component.arm.v1.MoveToJointPositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.arm.v1.MoveToJointPositionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.arm.v1.MoveToJointPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.arm.v1.MoveToJointPositionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.arm.v1.MoveToJointPositionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.arm.v1.ArmServiceClient.prototype.moveToJointPositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/MoveToJointPositions',
      request,
      metadata || {},
      methodDescriptor_ArmService_MoveToJointPositions,
      callback);
};


/**
 * @param {!proto.viam.component.arm.v1.MoveToJointPositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.arm.v1.MoveToJointPositionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.arm.v1.ArmServicePromiseClient.prototype.moveToJointPositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/MoveToJointPositions',
      request,
      metadata || {},
      methodDescriptor_ArmService_MoveToJointPositions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.arm.v1.StopRequest,
 *   !proto.viam.component.arm.v1.StopResponse>}
 */
const methodDescriptor_ArmService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.arm.v1.ArmService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.arm.v1.StopRequest,
  proto.viam.component.arm.v1.StopResponse,
  /**
   * @param {!proto.viam.component.arm.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.arm.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.arm.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.arm.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.arm.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.arm.v1.ArmServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/Stop',
      request,
      metadata || {},
      methodDescriptor_ArmService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.arm.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.arm.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.arm.v1.ArmServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.arm.v1.ArmService/Stop',
      request,
      metadata || {},
      methodDescriptor_ArmService_Stop);
};


module.exports = proto.viam.component.arm.v1;

