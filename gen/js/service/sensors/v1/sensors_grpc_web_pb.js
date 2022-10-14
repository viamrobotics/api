/**
 * @fileoverview gRPC-Web generated client stub for viam.service.sensors.v1
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
proto.viam.service.sensors = {};
proto.viam.service.sensors.v1 = require('./sensors_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.sensors.v1.SensorsServiceClient =
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
proto.viam.service.sensors.v1.SensorsServicePromiseClient =
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
 *   !proto.viam.service.sensors.v1.GetSensorsRequest,
 *   !proto.viam.service.sensors.v1.GetSensorsResponse>}
 */
const methodDescriptor_SensorsService_GetSensors = new grpc.web.MethodDescriptor(
  '/viam.service.sensors.v1.SensorsService/GetSensors',
  grpc.web.MethodType.UNARY,
  proto.viam.service.sensors.v1.GetSensorsRequest,
  proto.viam.service.sensors.v1.GetSensorsResponse,
  /**
   * @param {!proto.viam.service.sensors.v1.GetSensorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.sensors.v1.GetSensorsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.sensors.v1.GetSensorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.sensors.v1.GetSensorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.sensors.v1.GetSensorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.sensors.v1.SensorsServiceClient.prototype.getSensors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.sensors.v1.SensorsService/GetSensors',
      request,
      metadata || {},
      methodDescriptor_SensorsService_GetSensors,
      callback);
};


/**
 * @param {!proto.viam.service.sensors.v1.GetSensorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.sensors.v1.GetSensorsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.sensors.v1.SensorsServicePromiseClient.prototype.getSensors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.sensors.v1.SensorsService/GetSensors',
      request,
      metadata || {},
      methodDescriptor_SensorsService_GetSensors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.sensors.v1.GetReadingsRequest,
 *   !proto.viam.service.sensors.v1.GetReadingsResponse>}
 */
const methodDescriptor_SensorsService_GetReadings = new grpc.web.MethodDescriptor(
  '/viam.service.sensors.v1.SensorsService/GetReadings',
  grpc.web.MethodType.UNARY,
  proto.viam.service.sensors.v1.GetReadingsRequest,
  proto.viam.service.sensors.v1.GetReadingsResponse,
  /**
   * @param {!proto.viam.service.sensors.v1.GetReadingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.sensors.v1.GetReadingsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.sensors.v1.GetReadingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.sensors.v1.GetReadingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.sensors.v1.GetReadingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.sensors.v1.SensorsServiceClient.prototype.getReadings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.sensors.v1.SensorsService/GetReadings',
      request,
      metadata || {},
      methodDescriptor_SensorsService_GetReadings,
      callback);
};


/**
 * @param {!proto.viam.service.sensors.v1.GetReadingsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.sensors.v1.GetReadingsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.sensors.v1.SensorsServicePromiseClient.prototype.getReadings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.sensors.v1.SensorsService/GetReadings',
      request,
      metadata || {},
      methodDescriptor_SensorsService_GetReadings);
};


module.exports = proto.viam.service.sensors.v1;

