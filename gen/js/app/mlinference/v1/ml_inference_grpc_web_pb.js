/**
 * @fileoverview gRPC-Web generated client stub for viam.app.mlinference.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: app/mlinference/v1/ml_inference.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var app_data_v1_data_pb = require('../../../app/data/v1/data_pb.js')

var service_mlmodel_v1_mlmodel_pb = require('../../../service/mlmodel/v1/mlmodel_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.mlinference = {};
proto.viam.app.mlinference.v1 = require('./ml_inference_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.mlinference.v1.MLInferenceServiceClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.mlinference.v1.MLInferenceServicePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.mlinference.v1.GetInferenceRequest,
 *   !proto.viam.app.mlinference.v1.GetInferenceResponse>}
 */
const methodDescriptor_MLInferenceService_GetInference = new grpc.web.MethodDescriptor(
  '/viam.app.mlinference.v1.MLInferenceService/GetInference',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mlinference.v1.GetInferenceRequest,
  proto.viam.app.mlinference.v1.GetInferenceResponse,
  /**
   * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mlinference.v1.GetInferenceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mlinference.v1.GetInferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mlinference.v1.GetInferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mlinference.v1.MLInferenceServiceClient.prototype.getInference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mlinference.v1.MLInferenceService/GetInference',
      request,
      metadata || {},
      methodDescriptor_MLInferenceService_GetInference,
      callback);
};


/**
 * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mlinference.v1.GetInferenceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mlinference.v1.MLInferenceServicePromiseClient.prototype.getInference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mlinference.v1.MLInferenceService/GetInference',
      request,
      metadata || {},
      methodDescriptor_MLInferenceService_GetInference);
};


module.exports = proto.viam.app.mlinference.v1;

