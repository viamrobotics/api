/**
 * @fileoverview gRPC-Web generated client stub for viam.app.mltraining.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: app/mltraining/v1/ml_training.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')

var tagger_v1_tagger_pb = require('../../../tagger/v1/tagger_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.mltraining = {};
proto.viam.app.mltraining.v1 = require('./ml_training_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient =
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
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient =
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
 *   !proto.viam.app.mltraining.v1.SubmitTrainingJobRequest,
 *   !proto.viam.app.mltraining.v1.SubmitTrainingJobResponse>}
 */
const methodDescriptor_MLTrainingService_SubmitTrainingJob = new grpc.web.MethodDescriptor(
  '/viam.app.mltraining.v1.MLTrainingService/SubmitTrainingJob',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mltraining.v1.SubmitTrainingJobRequest,
  proto.viam.app.mltraining.v1.SubmitTrainingJobResponse,
  /**
   * @param {!proto.viam.app.mltraining.v1.SubmitTrainingJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mltraining.v1.SubmitTrainingJobResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mltraining.v1.SubmitTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mltraining.v1.SubmitTrainingJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mltraining.v1.SubmitTrainingJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient.prototype.submitTrainingJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/SubmitTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_SubmitTrainingJob,
      callback);
};


/**
 * @param {!proto.viam.app.mltraining.v1.SubmitTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mltraining.v1.SubmitTrainingJobResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient.prototype.submitTrainingJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/SubmitTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_SubmitTrainingJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.mltraining.v1.GetTrainingJobRequest,
 *   !proto.viam.app.mltraining.v1.GetTrainingJobResponse>}
 */
const methodDescriptor_MLTrainingService_GetTrainingJob = new grpc.web.MethodDescriptor(
  '/viam.app.mltraining.v1.MLTrainingService/GetTrainingJob',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mltraining.v1.GetTrainingJobRequest,
  proto.viam.app.mltraining.v1.GetTrainingJobResponse,
  /**
   * @param {!proto.viam.app.mltraining.v1.GetTrainingJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mltraining.v1.GetTrainingJobResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mltraining.v1.GetTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mltraining.v1.GetTrainingJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mltraining.v1.GetTrainingJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient.prototype.getTrainingJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/GetTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_GetTrainingJob,
      callback);
};


/**
 * @param {!proto.viam.app.mltraining.v1.GetTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mltraining.v1.GetTrainingJobResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient.prototype.getTrainingJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/GetTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_GetTrainingJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.mltraining.v1.ListTrainingJobsRequest,
 *   !proto.viam.app.mltraining.v1.ListTrainingJobsResponse>}
 */
const methodDescriptor_MLTrainingService_ListTrainingJobs = new grpc.web.MethodDescriptor(
  '/viam.app.mltraining.v1.MLTrainingService/ListTrainingJobs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mltraining.v1.ListTrainingJobsRequest,
  proto.viam.app.mltraining.v1.ListTrainingJobsResponse,
  /**
   * @param {!proto.viam.app.mltraining.v1.ListTrainingJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mltraining.v1.ListTrainingJobsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mltraining.v1.ListTrainingJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mltraining.v1.ListTrainingJobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mltraining.v1.ListTrainingJobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient.prototype.listTrainingJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/ListTrainingJobs',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_ListTrainingJobs,
      callback);
};


/**
 * @param {!proto.viam.app.mltraining.v1.ListTrainingJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mltraining.v1.ListTrainingJobsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient.prototype.listTrainingJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/ListTrainingJobs',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_ListTrainingJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.mltraining.v1.CancelTrainingJobRequest,
 *   !proto.viam.app.mltraining.v1.CancelTrainingJobResponse>}
 */
const methodDescriptor_MLTrainingService_CancelTrainingJob = new grpc.web.MethodDescriptor(
  '/viam.app.mltraining.v1.MLTrainingService/CancelTrainingJob',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mltraining.v1.CancelTrainingJobRequest,
  proto.viam.app.mltraining.v1.CancelTrainingJobResponse,
  /**
   * @param {!proto.viam.app.mltraining.v1.CancelTrainingJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mltraining.v1.CancelTrainingJobResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mltraining.v1.CancelTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mltraining.v1.CancelTrainingJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mltraining.v1.CancelTrainingJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient.prototype.cancelTrainingJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/CancelTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_CancelTrainingJob,
      callback);
};


/**
 * @param {!proto.viam.app.mltraining.v1.CancelTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mltraining.v1.CancelTrainingJobResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient.prototype.cancelTrainingJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/CancelTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_CancelTrainingJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobRequest,
 *   !proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse>}
 */
const methodDescriptor_MLTrainingService_DeleteCompletedTrainingJob = new grpc.web.MethodDescriptor(
  '/viam.app.mltraining.v1.MLTrainingService/DeleteCompletedTrainingJob',
  grpc.web.MethodType.UNARY,
  proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobRequest,
  proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse,
  /**
   * @param {!proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.mltraining.v1.MLTrainingServiceClient.prototype.deleteCompletedTrainingJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/DeleteCompletedTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_DeleteCompletedTrainingJob,
      callback);
};


/**
 * @param {!proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.mltraining.v1.DeleteCompletedTrainingJobResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.mltraining.v1.MLTrainingServicePromiseClient.prototype.deleteCompletedTrainingJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.mltraining.v1.MLTrainingService/DeleteCompletedTrainingJob',
      request,
      metadata || {},
      methodDescriptor_MLTrainingService_DeleteCompletedTrainingJob);
};


module.exports = proto.viam.app.mltraining.v1;

