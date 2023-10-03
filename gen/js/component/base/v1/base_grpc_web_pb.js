/**
 * @fileoverview gRPC-Web generated client stub for viam.component.base.v1
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
proto.viam.component.base = {};
proto.viam.component.base.v1 = require('./base_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.base.v1.BaseServiceClient =
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
proto.viam.component.base.v1.BaseServicePromiseClient =
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
 *   !proto.viam.component.base.v1.MoveStraightRequest,
 *   !proto.viam.component.base.v1.MoveStraightResponse>}
 */
const methodDescriptor_BaseService_MoveStraight = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/MoveStraight',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.MoveStraightRequest,
  proto.viam.component.base.v1.MoveStraightResponse,
  /**
   * @param {!proto.viam.component.base.v1.MoveStraightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.MoveStraightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.MoveStraightRequest,
 *   !proto.viam.component.base.v1.MoveStraightResponse>}
 */
const methodInfo_BaseService_MoveStraight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.MoveStraightResponse,
  /**
   * @param {!proto.viam.component.base.v1.MoveStraightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.MoveStraightResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.MoveStraightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.MoveStraightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.MoveStraightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.moveStraight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/MoveStraight',
      request,
      metadata || {},
      methodDescriptor_BaseService_MoveStraight,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.MoveStraightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.MoveStraightResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.moveStraight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/MoveStraight',
      request,
      metadata || {},
      methodDescriptor_BaseService_MoveStraight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SpinRequest,
 *   !proto.viam.component.base.v1.SpinResponse>}
 */
const methodDescriptor_BaseService_Spin = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/Spin',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SpinRequest,
  proto.viam.component.base.v1.SpinResponse,
  /**
   * @param {!proto.viam.component.base.v1.SpinRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SpinResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.SpinRequest,
 *   !proto.viam.component.base.v1.SpinResponse>}
 */
const methodInfo_BaseService_Spin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.SpinResponse,
  /**
   * @param {!proto.viam.component.base.v1.SpinRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SpinResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SpinRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.SpinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SpinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.spin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Spin',
      request,
      metadata || {},
      methodDescriptor_BaseService_Spin,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SpinRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SpinResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.spin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Spin',
      request,
      metadata || {},
      methodDescriptor_BaseService_Spin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SetPowerRequest,
 *   !proto.viam.component.base.v1.SetPowerResponse>}
 */
const methodDescriptor_BaseService_SetPower = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/SetPower',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SetPowerRequest,
  proto.viam.component.base.v1.SetPowerResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetPowerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.SetPowerRequest,
 *   !proto.viam.component.base.v1.SetPowerResponse>}
 */
const methodInfo_BaseService_SetPower = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.SetPowerResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetPowerResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.SetPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SetPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.setPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetPower',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetPower,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SetPowerResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.setPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetPower',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetPower);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.SetVelocityRequest,
 *   !proto.viam.component.base.v1.SetVelocityResponse>}
 */
const methodDescriptor_BaseService_SetVelocity = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/SetVelocity',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.SetVelocityRequest,
  proto.viam.component.base.v1.SetVelocityResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetVelocityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetVelocityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.SetVelocityRequest,
 *   !proto.viam.component.base.v1.SetVelocityResponse>}
 */
const methodInfo_BaseService_SetVelocity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.SetVelocityResponse,
  /**
   * @param {!proto.viam.component.base.v1.SetVelocityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.SetVelocityResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.SetVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.SetVelocityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.SetVelocityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.setVelocity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetVelocity',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetVelocity,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.SetVelocityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.SetVelocityResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.setVelocity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/SetVelocity',
      request,
      metadata || {},
      methodDescriptor_BaseService_SetVelocity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.StopRequest,
 *   !proto.viam.component.base.v1.StopResponse>}
 */
const methodDescriptor_BaseService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.StopRequest,
  proto.viam.component.base.v1.StopResponse,
  /**
   * @param {!proto.viam.component.base.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.StopRequest,
 *   !proto.viam.component.base.v1.StopResponse>}
 */
const methodInfo_BaseService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.StopResponse,
  /**
   * @param {!proto.viam.component.base.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Stop',
      request,
      metadata || {},
      methodDescriptor_BaseService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/Stop',
      request,
      metadata || {},
      methodDescriptor_BaseService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.IsMovingRequest,
 *   !proto.viam.component.base.v1.IsMovingResponse>}
 */
const methodDescriptor_BaseService_IsMoving = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/IsMoving',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.IsMovingRequest,
  proto.viam.component.base.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.base.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.IsMovingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.IsMovingRequest,
 *   !proto.viam.component.base.v1.IsMovingResponse>}
 */
const methodInfo_BaseService_IsMoving = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.base.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.IsMovingResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.IsMovingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.IsMovingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.isMoving =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_BaseService_IsMoving,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.IsMovingResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.isMoving =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_BaseService_IsMoving);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_BaseService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/DoCommand',
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
const methodInfo_BaseService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.base.v1.BaseServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_BaseService_DoCommand,
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
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_BaseService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_BaseService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/GetGeometries',
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
const methodInfo_BaseService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.base.v1.BaseServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_BaseService_GetGeometries,
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
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_BaseService_GetGeometries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.base.v1.GetPropertiesRequest,
 *   !proto.viam.component.base.v1.GetPropertiesResponse>}
 */
const methodDescriptor_BaseService_GetProperties = new grpc.web.MethodDescriptor(
  '/viam.component.base.v1.BaseService/GetProperties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.base.v1.GetPropertiesRequest,
  proto.viam.component.base.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.base.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.base.v1.GetPropertiesRequest,
 *   !proto.viam.component.base.v1.GetPropertiesResponse>}
 */
const methodInfo_BaseService_GetProperties = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.base.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.base.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.base.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.base.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.base.v1.GetPropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.base.v1.GetPropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.base.v1.BaseServiceClient.prototype.getProperties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_BaseService_GetProperties,
      callback);
};


/**
 * @param {!proto.viam.component.base.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.base.v1.GetPropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.base.v1.BaseServicePromiseClient.prototype.getProperties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.base.v1.BaseService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_BaseService_GetProperties);
};


module.exports = proto.viam.component.base.v1;

