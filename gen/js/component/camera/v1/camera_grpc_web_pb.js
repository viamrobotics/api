/**
 * @fileoverview gRPC-Web generated client stub for viam.component.camera.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_httpbody_pb = require('../../../google/api/httpbody_pb.js')
const proto = {};
proto.viam = {};
proto.viam.component = {};
proto.viam.component.camera = {};
proto.viam.component.camera.v1 = require('./camera_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.camera.v1.CameraServiceClient =
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
proto.viam.component.camera.v1.CameraServicePromiseClient =
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
 *   !proto.viam.component.camera.v1.GetImageRequest,
 *   !proto.viam.component.camera.v1.GetImageResponse>}
 */
const methodDescriptor_CameraService_GetImage = new grpc.web.MethodDescriptor(
  '/viam.component.camera.v1.CameraService/GetImage',
  grpc.web.MethodType.UNARY,
  proto.viam.component.camera.v1.GetImageRequest,
  proto.viam.component.camera.v1.GetImageResponse,
  /**
   * @param {!proto.viam.component.camera.v1.GetImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.camera.v1.GetImageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.camera.v1.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.camera.v1.GetImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.camera.v1.GetImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.camera.v1.CameraServiceClient.prototype.getImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetImage',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetImage,
      callback);
};


/**
 * @param {!proto.viam.component.camera.v1.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.camera.v1.GetImageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.camera.v1.CameraServicePromiseClient.prototype.getImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetImage',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.camera.v1.RenderFrameRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodDescriptor_CameraService_RenderFrame = new grpc.web.MethodDescriptor(
  '/viam.component.camera.v1.CameraService/RenderFrame',
  grpc.web.MethodType.UNARY,
  proto.viam.component.camera.v1.RenderFrameRequest,
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.viam.component.camera.v1.RenderFrameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @param {!proto.viam.component.camera.v1.RenderFrameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.api.HttpBody)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.HttpBody>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.camera.v1.CameraServiceClient.prototype.renderFrame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/RenderFrame',
      request,
      metadata || {},
      methodDescriptor_CameraService_RenderFrame,
      callback);
};


/**
 * @param {!proto.viam.component.camera.v1.RenderFrameRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.HttpBody>}
 *     Promise that resolves to the response
 */
proto.viam.component.camera.v1.CameraServicePromiseClient.prototype.renderFrame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/RenderFrame',
      request,
      metadata || {},
      methodDescriptor_CameraService_RenderFrame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.camera.v1.GetPointCloudRequest,
 *   !proto.viam.component.camera.v1.GetPointCloudResponse>}
 */
const methodDescriptor_CameraService_GetPointCloud = new grpc.web.MethodDescriptor(
  '/viam.component.camera.v1.CameraService/GetPointCloud',
  grpc.web.MethodType.UNARY,
  proto.viam.component.camera.v1.GetPointCloudRequest,
  proto.viam.component.camera.v1.GetPointCloudResponse,
  /**
   * @param {!proto.viam.component.camera.v1.GetPointCloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.camera.v1.GetPointCloudResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.camera.v1.GetPointCloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.camera.v1.GetPointCloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.camera.v1.GetPointCloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.camera.v1.CameraServiceClient.prototype.getPointCloud =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetPointCloud',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetPointCloud,
      callback);
};


/**
 * @param {!proto.viam.component.camera.v1.GetPointCloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.camera.v1.GetPointCloudResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.camera.v1.CameraServicePromiseClient.prototype.getPointCloud =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetPointCloud',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetPointCloud);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.camera.v1.GetPropertiesRequest,
 *   !proto.viam.component.camera.v1.GetPropertiesResponse>}
 */
const methodDescriptor_CameraService_GetProperties = new grpc.web.MethodDescriptor(
  '/viam.component.camera.v1.CameraService/GetProperties',
  grpc.web.MethodType.UNARY,
  proto.viam.component.camera.v1.GetPropertiesRequest,
  proto.viam.component.camera.v1.GetPropertiesResponse,
  /**
   * @param {!proto.viam.component.camera.v1.GetPropertiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.camera.v1.GetPropertiesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.camera.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.camera.v1.GetPropertiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.camera.v1.GetPropertiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.camera.v1.CameraServiceClient.prototype.getProperties =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetProperties,
      callback);
};


/**
 * @param {!proto.viam.component.camera.v1.GetPropertiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.camera.v1.GetPropertiesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.camera.v1.CameraServicePromiseClient.prototype.getProperties =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.camera.v1.CameraService/GetProperties',
      request,
      metadata || {},
      methodDescriptor_CameraService_GetProperties);
};


module.exports = proto.viam.component.camera.v1;

