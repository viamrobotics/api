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


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.gripper = {};
proto.viam.component.gripper.v1 = require('./gripper_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.gripper.v1.GripperServiceClient =
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
proto.viam.component.gripper.v1.GripperServicePromiseClient =
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gripper.v1.OpenRequest,
 *   !proto.viam.component.gripper.v1.OpenResponse>}
 */
const methodInfo_GripperService_Open = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.component.gripper.v1.OpenResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gripper.v1.GrabRequest,
 *   !proto.viam.component.gripper.v1.GrabResponse>}
 */
const methodInfo_GripperService_Grab = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.component.gripper.v1.GrabResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gripper.v1.StopRequest,
 *   !proto.viam.component.gripper.v1.StopResponse>}
 */
const methodInfo_GripperService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.component.gripper.v1.StopResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gripper.v1.IsMovingRequest,
 *   !proto.viam.component.gripper.v1.IsMovingResponse>}
 */
const methodDescriptor_GripperService_IsMoving = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/IsMoving',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gripper.v1.IsMovingRequest,
  proto.viam.component.gripper.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.gripper.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gripper.v1.IsMovingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gripper.v1.IsMovingRequest,
 *   !proto.viam.component.gripper.v1.IsMovingResponse>}
 */
const methodInfo_GripperService_IsMoving = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gripper.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.gripper.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gripper.v1.IsMovingResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gripper.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gripper.v1.IsMovingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gripper.v1.IsMovingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gripper.v1.GripperServiceClient.prototype.isMoving =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_GripperService_IsMoving,
      callback);
};


/**
 * @param {!proto.viam.component.gripper.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gripper.v1.IsMovingResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.isMoving =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_GripperService_IsMoving);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_GripperService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/DoCommand',
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
const methodInfo_GripperService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.gripper.v1.GripperServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GripperService_DoCommand,
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
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GripperService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_GripperService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.gripper.v1.GripperService/GetGeometries',
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
const methodInfo_GripperService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.gripper.v1.GripperServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_GripperService_GetGeometries,
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
proto.viam.component.gripper.v1.GripperServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gripper.v1.GripperService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_GripperService_GetGeometries);
};


module.exports = proto.viam.component.gripper.v1;

