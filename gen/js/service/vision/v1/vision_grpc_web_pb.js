/**
 * @fileoverview gRPC-Web generated client stub for viam.service.vision.v1
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
proto.viam.service.vision = {};
proto.viam.service.vision.v1 = require('./vision_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.vision.v1.VisionServiceClient =
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
proto.viam.service.vision.v1.VisionServicePromiseClient =
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
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>}
 */
const methodDescriptor_VisionService_GetDetectionsFromCamera = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetDetectionsFromCameraRequest,
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>}
 */
const methodInfo_VisionService_GetDetectionsFromCamera = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.vision.v1.GetDetectionsFromCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getDetectionsFromCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectionsFromCamera,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getDetectionsFromCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectionsFromCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetDetectionsRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsResponse>}
 */
const methodDescriptor_VisionService_GetDetections = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetDetections',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetDetectionsRequest,
  proto.viam.service.vision.v1.GetDetectionsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.vision.v1.GetDetectionsRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsResponse>}
 */
const methodInfo_VisionService_GetDetections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.vision.v1.GetDetectionsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.vision.v1.GetDetectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetDetectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getDetections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetections',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetections,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetDetectionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getDetections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetections',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>}
 */
const methodDescriptor_VisionService_GetClassificationsFromCamera = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetClassificationsFromCameraRequest,
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>}
 */
const methodInfo_VisionService_GetClassificationsFromCamera = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.vision.v1.GetClassificationsFromCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getClassificationsFromCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassificationsFromCamera,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getClassificationsFromCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassificationsFromCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetClassificationsRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsResponse>}
 */
const methodDescriptor_VisionService_GetClassifications = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetClassifications',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetClassificationsRequest,
  proto.viam.service.vision.v1.GetClassificationsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.vision.v1.GetClassificationsRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsResponse>}
 */
const methodInfo_VisionService_GetClassifications = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.vision.v1.GetClassificationsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.vision.v1.GetClassificationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetClassificationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getClassifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifications',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifications,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetClassificationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getClassifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifications',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsRequest,
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsResponse>}
 */
const methodDescriptor_VisionService_GetObjectPointClouds = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetObjectPointCloudsRequest,
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsRequest,
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsResponse>}
 */
const methodInfo_VisionService_GetObjectPointClouds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.vision.v1.GetObjectPointCloudsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetObjectPointCloudsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getObjectPointClouds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetObjectPointClouds,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetObjectPointCloudsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getObjectPointClouds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetObjectPointClouds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_VisionService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/DoCommand',
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
const methodInfo_VisionService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.service.vision.v1.VisionServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_VisionService_DoCommand,
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
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_VisionService_DoCommand);
};


module.exports = proto.viam.service.vision.v1;

