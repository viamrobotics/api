/**
 * @fileoverview gRPC-Web generated client stub for viam.app.packages.v1
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.packages = {};
proto.viam.app.packages.v1 = require('./packages_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.packages.v1.PackageServiceClient =
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
proto.viam.app.packages.v1.PackageServicePromiseClient =
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
 *   !proto.viam.app.packages.v1.DeletePackageRequest,
 *   !proto.viam.app.packages.v1.DeletePackageResponse>}
 */
const methodDescriptor_PackageService_DeletePackage = new grpc.web.MethodDescriptor(
  '/viam.app.packages.v1.PackageService/DeletePackage',
  grpc.web.MethodType.UNARY,
  proto.viam.app.packages.v1.DeletePackageRequest,
  proto.viam.app.packages.v1.DeletePackageResponse,
  /**
   * @param {!proto.viam.app.packages.v1.DeletePackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.DeletePackageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.packages.v1.DeletePackageRequest,
 *   !proto.viam.app.packages.v1.DeletePackageResponse>}
 */
const methodInfo_PackageService_DeletePackage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.packages.v1.DeletePackageResponse,
  /**
   * @param {!proto.viam.app.packages.v1.DeletePackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.DeletePackageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.packages.v1.DeletePackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.packages.v1.DeletePackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.packages.v1.DeletePackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.packages.v1.PackageServiceClient.prototype.deletePackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/DeletePackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_DeletePackage,
      callback);
};


/**
 * @param {!proto.viam.app.packages.v1.DeletePackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.packages.v1.DeletePackageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.packages.v1.PackageServicePromiseClient.prototype.deletePackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/DeletePackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_DeletePackage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.packages.v1.GetPackageRequest,
 *   !proto.viam.app.packages.v1.GetPackageResponse>}
 */
const methodDescriptor_PackageService_GetPackage = new grpc.web.MethodDescriptor(
  '/viam.app.packages.v1.PackageService/GetPackage',
  grpc.web.MethodType.UNARY,
  proto.viam.app.packages.v1.GetPackageRequest,
  proto.viam.app.packages.v1.GetPackageResponse,
  /**
   * @param {!proto.viam.app.packages.v1.GetPackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.GetPackageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.packages.v1.GetPackageRequest,
 *   !proto.viam.app.packages.v1.GetPackageResponse>}
 */
const methodInfo_PackageService_GetPackage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.packages.v1.GetPackageResponse,
  /**
   * @param {!proto.viam.app.packages.v1.GetPackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.GetPackageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.packages.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.packages.v1.GetPackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.packages.v1.GetPackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.packages.v1.PackageServiceClient.prototype.getPackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_GetPackage,
      callback);
};


/**
 * @param {!proto.viam.app.packages.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.packages.v1.GetPackageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.packages.v1.PackageServicePromiseClient.prototype.getPackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_GetPackage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.packages.v1.ListPackagesRequest,
 *   !proto.viam.app.packages.v1.ListPackagesResponse>}
 */
const methodDescriptor_PackageService_ListPackages = new grpc.web.MethodDescriptor(
  '/viam.app.packages.v1.PackageService/ListPackages',
  grpc.web.MethodType.UNARY,
  proto.viam.app.packages.v1.ListPackagesRequest,
  proto.viam.app.packages.v1.ListPackagesResponse,
  /**
   * @param {!proto.viam.app.packages.v1.ListPackagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.ListPackagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.packages.v1.ListPackagesRequest,
 *   !proto.viam.app.packages.v1.ListPackagesResponse>}
 */
const methodInfo_PackageService_ListPackages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.packages.v1.ListPackagesResponse,
  /**
   * @param {!proto.viam.app.packages.v1.ListPackagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.packages.v1.ListPackagesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.packages.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.packages.v1.ListPackagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.packages.v1.ListPackagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.packages.v1.PackageServiceClient.prototype.listPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodDescriptor_PackageService_ListPackages,
      callback);
};


/**
 * @param {!proto.viam.app.packages.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.packages.v1.ListPackagesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.packages.v1.PackageServicePromiseClient.prototype.listPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.packages.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodDescriptor_PackageService_ListPackages);
};


module.exports = proto.viam.app.packages.v1;

