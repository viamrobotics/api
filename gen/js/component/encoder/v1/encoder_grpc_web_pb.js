/**
 * @fileoverview gRPC-Web generated client stub for viam.component.encoder.v1
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
proto.viam.component.encoder = {};
proto.viam.component.encoder.v1 = require('./encoder_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.encoder.v1.EncoderServiceClient =
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
proto.viam.component.encoder.v1.EncoderServicePromiseClient =
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
 *   !proto.viam.component.encoder.v1.GetPositionRequest,
 *   !proto.viam.component.encoder.v1.GetPositionResponse>}
 */
const methodDescriptor_EncoderService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.encoder.v1.EncoderService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.encoder.v1.GetPositionRequest,
  proto.viam.component.encoder.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.GetPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.encoder.v1.GetPositionRequest,
 *   !proto.viam.component.encoder.v1.GetPositionResponse>}
 */
const methodInfo_EncoderService_GetPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.encoder.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.encoder.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.encoder.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.encoder.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.encoder.v1.EncoderServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.encoder.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.encoder.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.encoder.v1.EncoderServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.encoder.v1.ResetPositionRequest,
 *   !proto.viam.component.encoder.v1.ResetPositionResponse>}
 */
const methodDescriptor_EncoderService_ResetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.encoder.v1.EncoderService/ResetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.encoder.v1.ResetPositionRequest,
  proto.viam.component.encoder.v1.ResetPositionResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.ResetPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.encoder.v1.ResetPositionRequest,
 *   !proto.viam.component.encoder.v1.ResetPositionResponse>}
 */
const methodInfo_EncoderService_ResetPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.encoder.v1.ResetPositionResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.ResetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.encoder.v1.ResetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.encoder.v1.ResetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.encoder.v1.EncoderServiceClient.prototype.resetPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/ResetPosition',
      request,
      metadata || {},
      methodDescriptor_EncoderService_ResetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.encoder.v1.ResetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.encoder.v1.EncoderServicePromiseClient.prototype.resetPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/ResetPosition',
      request,
      metadata || {},
      methodDescriptor_EncoderService_ResetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.encoder.v1.GetPropertiesRequest,
 *   !proto.viam.component.encoder.v1.GetPropertiesResponse>}
 */
const methodDescriptor_EncoderService_GetProperties = new grpc.web.MethodDescriptor(
  '/viam.component.encoder.v1.EncoderService/GetProperties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.encoder.v1.GetPropertiesRequest,
  proto.viam.component.encoder.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.encoder.v1.GetPropertiesRequest,
 *   !proto.viam.component.encoder.v1.GetPropertiesResponse>}
 */
const methodInfo_EncoderService_GetProperties = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.encoder.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.encoder.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.encoder.v1.GetPropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.encoder.v1.GetPropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.encoder.v1.EncoderServiceClient.prototype.getProperties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetProperties,
      callback);
};


/**
 * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.encoder.v1.GetPropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.encoder.v1.EncoderServicePromiseClient.prototype.getProperties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetProperties);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_EncoderService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.encoder.v1.EncoderService/DoCommand',
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
const methodInfo_EncoderService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.encoder.v1.EncoderServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_EncoderService_DoCommand,
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
proto.viam.component.encoder.v1.EncoderServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_EncoderService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_EncoderService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.encoder.v1.EncoderService/GetGeometries',
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
const methodInfo_EncoderService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.encoder.v1.EncoderServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetGeometries,
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
proto.viam.component.encoder.v1.EncoderServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.encoder.v1.EncoderService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_EncoderService_GetGeometries);
};


module.exports = proto.viam.component.encoder.v1;

