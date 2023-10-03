/**
 * @fileoverview gRPC-Web generated client stub for viam.component.powersensor.v1
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
proto.viam.component.powersensor = {};
proto.viam.component.powersensor.v1 = require('./powersensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.powersensor.v1.PowerSensorServiceClient =
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
proto.viam.component.powersensor.v1.PowerSensorServicePromiseClient =
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
 *   !proto.viam.component.powersensor.v1.GetVoltageRequest,
 *   !proto.viam.component.powersensor.v1.GetVoltageResponse>}
 */
const methodDescriptor_PowerSensorService_GetVoltage = new grpc.web.MethodDescriptor(
  '/viam.component.powersensor.v1.PowerSensorService/GetVoltage',
  grpc.web.MethodType.UNARY,
  proto.viam.component.powersensor.v1.GetVoltageRequest,
  proto.viam.component.powersensor.v1.GetVoltageResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetVoltageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.powersensor.v1.GetVoltageRequest,
 *   !proto.viam.component.powersensor.v1.GetVoltageResponse>}
 */
const methodInfo_PowerSensorService_GetVoltage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.powersensor.v1.GetVoltageResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetVoltageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.powersensor.v1.GetVoltageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.powersensor.v1.GetVoltageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.powersensor.v1.PowerSensorServiceClient.prototype.getVoltage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetVoltage',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetVoltage,
      callback);
};


/**
 * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.powersensor.v1.GetVoltageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.powersensor.v1.PowerSensorServicePromiseClient.prototype.getVoltage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetVoltage',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetVoltage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.powersensor.v1.GetCurrentRequest,
 *   !proto.viam.component.powersensor.v1.GetCurrentResponse>}
 */
const methodDescriptor_PowerSensorService_GetCurrent = new grpc.web.MethodDescriptor(
  '/viam.component.powersensor.v1.PowerSensorService/GetCurrent',
  grpc.web.MethodType.UNARY,
  proto.viam.component.powersensor.v1.GetCurrentRequest,
  proto.viam.component.powersensor.v1.GetCurrentResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetCurrentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.powersensor.v1.GetCurrentRequest,
 *   !proto.viam.component.powersensor.v1.GetCurrentResponse>}
 */
const methodInfo_PowerSensorService_GetCurrent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.powersensor.v1.GetCurrentResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetCurrentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.powersensor.v1.GetCurrentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.powersensor.v1.GetCurrentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.powersensor.v1.PowerSensorServiceClient.prototype.getCurrent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetCurrent',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetCurrent,
      callback);
};


/**
 * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.powersensor.v1.GetCurrentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.powersensor.v1.PowerSensorServicePromiseClient.prototype.getCurrent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetCurrent',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetCurrent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.powersensor.v1.GetPowerRequest,
 *   !proto.viam.component.powersensor.v1.GetPowerResponse>}
 */
const methodDescriptor_PowerSensorService_GetPower = new grpc.web.MethodDescriptor(
  '/viam.component.powersensor.v1.PowerSensorService/GetPower',
  grpc.web.MethodType.UNARY,
  proto.viam.component.powersensor.v1.GetPowerRequest,
  proto.viam.component.powersensor.v1.GetPowerResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetPowerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.powersensor.v1.GetPowerRequest,
 *   !proto.viam.component.powersensor.v1.GetPowerResponse>}
 */
const methodInfo_PowerSensorService_GetPower = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.powersensor.v1.GetPowerResponse,
  /**
   * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.powersensor.v1.GetPowerResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.powersensor.v1.GetPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.powersensor.v1.GetPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.powersensor.v1.PowerSensorServiceClient.prototype.getPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetPower',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetPower,
      callback);
};


/**
 * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.powersensor.v1.GetPowerResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.powersensor.v1.PowerSensorServicePromiseClient.prototype.getPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/GetPower',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_GetPower);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_PowerSensorService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.powersensor.v1.PowerSensorService/DoCommand',
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
const methodInfo_PowerSensorService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.powersensor.v1.PowerSensorServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_DoCommand,
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
proto.viam.component.powersensor.v1.PowerSensorServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.powersensor.v1.PowerSensorService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_PowerSensorService_DoCommand);
};


module.exports = proto.viam.component.powersensor.v1;

