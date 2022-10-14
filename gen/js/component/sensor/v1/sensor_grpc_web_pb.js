/**
 * @fileoverview gRPC-Web generated client stub for viam.component.sensor.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.sensor = {};
proto.viam.component.sensor.v1 = require('./sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.sensor.v1.SensorServiceClient =
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
proto.viam.component.sensor.v1.SensorServicePromiseClient =
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
 *   !proto.viam.component.sensor.v1.GetReadingsRequest,
 *   !proto.viam.component.sensor.v1.GetReadingsResponse>}
 */
const methodDescriptor_SensorService_GetReadings = new grpc.web.MethodDescriptor(
  '/viam.component.sensor.v1.SensorService/GetReadings',
  grpc.web.MethodType.UNARY,
  proto.viam.component.sensor.v1.GetReadingsRequest,
  proto.viam.component.sensor.v1.GetReadingsResponse,
  /**
   * @param {!proto.viam.component.sensor.v1.GetReadingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.sensor.v1.GetReadingsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.sensor.v1.GetReadingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.sensor.v1.GetReadingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.sensor.v1.GetReadingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.sensor.v1.SensorServiceClient.prototype.getReadings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.sensor.v1.SensorService/GetReadings',
      request,
      metadata || {},
      methodDescriptor_SensorService_GetReadings,
      callback);
};


/**
 * @param {!proto.viam.component.sensor.v1.GetReadingsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.sensor.v1.GetReadingsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.sensor.v1.SensorServicePromiseClient.prototype.getReadings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.sensor.v1.SensorService/GetReadings',
      request,
      metadata || {},
      methodDescriptor_SensorService_GetReadings);
};


module.exports = proto.viam.component.sensor.v1;

