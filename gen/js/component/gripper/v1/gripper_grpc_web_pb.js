/**
 * @fileoverview gRPC-Web generated client stub for viam.component.gripper.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.gripper = {};
proto.viam.component.gripper.v1 = require('./gripper_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.gripper.v1.GripperServiceClient =
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
proto.viam.component.gripper.v1.GripperServicePromiseClient =
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
 *   !proto.viam.component.gripper.v1.OpenRequest,
 *   !proto.viam.component.gripper.v1.OpenResponse>}
 */
const methodDescriptor_GripperService_Open = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/Open',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gripper.v1.OpenRequest,
  proto.viam.component.gripper.v1.OpenResponse,
  /**
   * @param {!proto.viam.component.gripper.v1.OpenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gripper.v1.OpenResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gripper.v1.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gripper.v1.OpenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gripper.v1.OpenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gripper.v1.GripperServiceClient.prototype.open =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Open',
      request,
      metadata || {},
      methodDescriptor_GripperService_Open,
      callback);
};


/**
 * @param {!proto.viam.component.gripper.v1.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gripper.v1.OpenResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.open =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Open',
      request,
      metadata || {},
      methodDescriptor_GripperService_Open);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gripper.v1.GrabRequest,
 *   !proto.viam.component.gripper.v1.GrabResponse>}
 */
const methodDescriptor_GripperService_Grab = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/Grab',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gripper.v1.GrabRequest,
  proto.viam.component.gripper.v1.GrabResponse,
  /**
   * @param {!proto.viam.component.gripper.v1.GrabRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gripper.v1.GrabResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gripper.v1.GrabRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gripper.v1.GrabResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gripper.v1.GrabResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gripper.v1.GripperServiceClient.prototype.grab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Grab',
      request,
      metadata || {},
      methodDescriptor_GripperService_Grab,
      callback);
};


/**
 * @param {!proto.viam.component.gripper.v1.GrabRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gripper.v1.GrabResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.grab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Grab',
      request,
      metadata || {},
      methodDescriptor_GripperService_Grab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gripper.v1.StopRequest,
 *   !proto.viam.component.gripper.v1.StopResponse>}
 */
const methodDescriptor_GripperService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gripper.v1.StopRequest,
  proto.viam.component.gripper.v1.StopResponse,
  /**
   * @param {!proto.viam.component.gripper.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gripper.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gripper.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.gripper.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gripper.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gripper.v1.GripperServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Stop',
      request,
      metadata || {},
      methodDescriptor_GripperService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.gripper.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gripper.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/Stop',
      request,
      metadata || {},
      methodDescriptor_GripperService_Stop);
};


module.exports = proto.viam.component.gripper.v1;

