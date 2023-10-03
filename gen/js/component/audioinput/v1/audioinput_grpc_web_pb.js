/**
 * @fileoverview gRPC-Web generated client stub for viam.component.audioinput.v1
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

var google_api_httpbody_pb = require('../../../google/api/httpbody_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.audioinput = {};
proto.viam.component.audioinput.v1 = require('./audioinput_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient =
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
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient =
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
 *   !proto.viam.component.audioinput.v1.ChunksRequest,
 *   !proto.viam.component.audioinput.v1.ChunksResponse>}
 */
const methodDescriptor_AudioInputService_Chunks = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Chunks',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.component.audioinput.v1.ChunksRequest,
  proto.viam.component.audioinput.v1.ChunksResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.ChunksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.audioinput.v1.ChunksRequest,
 *   !proto.viam.component.audioinput.v1.ChunksResponse>}
 */
const methodInfo_AudioInputService_Chunks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.audioinput.v1.ChunksResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.ChunksResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.ChunksResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.chunks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Chunks',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Chunks);
};


/**
 * @param {!proto.viam.component.audioinput.v1.ChunksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.ChunksResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.chunks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Chunks',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Chunks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.audioinput.v1.PropertiesRequest,
 *   !proto.viam.component.audioinput.v1.PropertiesResponse>}
 */
const methodDescriptor_AudioInputService_Properties = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Properties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.audioinput.v1.PropertiesRequest,
  proto.viam.component.audioinput.v1.PropertiesResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.PropertiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.audioinput.v1.PropertiesRequest,
 *   !proto.viam.component.audioinput.v1.PropertiesResponse>}
 */
const methodInfo_AudioInputService_Properties = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.audioinput.v1.PropertiesResponse,
  /**
   * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.audioinput.v1.PropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.audioinput.v1.PropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.audioinput.v1.PropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.properties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Properties',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Properties,
      callback);
};


/**
 * @param {!proto.viam.component.audioinput.v1.PropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.audioinput.v1.PropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.properties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Properties',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Properties);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.audioinput.v1.RecordRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodDescriptor_AudioInputService_Record = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/Record',
  grpc.web.MethodType.UNARY,
  proto.viam.component.audioinput.v1.RecordRequest,
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.viam.component.audioinput.v1.RecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.audioinput.v1.RecordRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodInfo_AudioInputService_Record = new grpc.web.AbstractClientBase.MethodInfo(
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.viam.component.audioinput.v1.RecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @param {!proto.viam.component.audioinput.v1.RecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.api.HttpBody)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.HttpBody>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.record =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Record',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Record,
      callback);
};


/**
 * @param {!proto.viam.component.audioinput.v1.RecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.HttpBody>}
 *     Promise that resolves to the response
 */
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.record =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/Record',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_Record);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_AudioInputService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/DoCommand',
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
const methodInfo_AudioInputService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_DoCommand,
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
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_AudioInputService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.audioinput.v1.AudioInputService/GetGeometries',
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
const methodInfo_AudioInputService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.audioinput.v1.AudioInputServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_GetGeometries,
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
proto.viam.component.audioinput.v1.AudioInputServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.audioinput.v1.AudioInputService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_AudioInputService_GetGeometries);
};


module.exports = proto.viam.component.audioinput.v1;

