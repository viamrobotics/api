/**
 * @fileoverview gRPC-Web generated client stub for google.longrunning
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_api_client_pb = require('../../google/api/client_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_rpc_status_pb = require('../../google/rpc/status_pb.js')

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js')
const proto = {};
proto.google = {};
proto.google.longrunning = require('./operations_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.google.longrunning.OperationsClient =
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
proto.google.longrunning.OperationsPromiseClient =
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
 *   !proto.google.longrunning.ListOperationsRequest,
 *   !proto.google.longrunning.ListOperationsResponse>}
 */
const methodDescriptor_Operations_ListOperations = new grpc.web.MethodDescriptor(
  '/google.longrunning.Operations/ListOperations',
  grpc.web.MethodType.UNARY,
  proto.google.longrunning.ListOperationsRequest,
  proto.google.longrunning.ListOperationsResponse,
  /**
   * @param {!proto.google.longrunning.ListOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.longrunning.ListOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.longrunning.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.ListOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.ListOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.longrunning.OperationsClient.prototype.listOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.longrunning.Operations/ListOperations',
      request,
      metadata || {},
      methodDescriptor_Operations_ListOperations,
      callback);
};


/**
 * @param {!proto.google.longrunning.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.ListOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.longrunning.OperationsPromiseClient.prototype.listOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.longrunning.Operations/ListOperations',
      request,
      metadata || {},
      methodDescriptor_Operations_ListOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.longrunning.GetOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Operations_GetOperation = new grpc.web.MethodDescriptor(
  '/google.longrunning.Operations/GetOperation',
  grpc.web.MethodType.UNARY,
  proto.google.longrunning.GetOperationRequest,
  proto.google.longrunning.Operation,
  /**
   * @param {!proto.google.longrunning.GetOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.longrunning.Operation.deserializeBinary
);


/**
 * @param {!proto.google.longrunning.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.longrunning.OperationsClient.prototype.getOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.longrunning.Operations/GetOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_GetOperation,
      callback);
};


/**
 * @param {!proto.google.longrunning.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.longrunning.OperationsPromiseClient.prototype.getOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.longrunning.Operations/GetOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_GetOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.longrunning.DeleteOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Operations_DeleteOperation = new grpc.web.MethodDescriptor(
  '/google.longrunning.Operations/DeleteOperation',
  grpc.web.MethodType.UNARY,
  proto.google.longrunning.DeleteOperationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.longrunning.DeleteOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.longrunning.DeleteOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.longrunning.OperationsClient.prototype.deleteOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.longrunning.Operations/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_DeleteOperation,
      callback);
};


/**
 * @param {!proto.google.longrunning.DeleteOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.longrunning.OperationsPromiseClient.prototype.deleteOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.longrunning.Operations/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_DeleteOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.longrunning.CancelOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Operations_CancelOperation = new grpc.web.MethodDescriptor(
  '/google.longrunning.Operations/CancelOperation',
  grpc.web.MethodType.UNARY,
  proto.google.longrunning.CancelOperationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.longrunning.CancelOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.longrunning.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.longrunning.OperationsClient.prototype.cancelOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.longrunning.Operations/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_CancelOperation,
      callback);
};


/**
 * @param {!proto.google.longrunning.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.longrunning.OperationsPromiseClient.prototype.cancelOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.longrunning.Operations/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_CancelOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.longrunning.WaitOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Operations_WaitOperation = new grpc.web.MethodDescriptor(
  '/google.longrunning.Operations/WaitOperation',
  grpc.web.MethodType.UNARY,
  proto.google.longrunning.WaitOperationRequest,
  proto.google.longrunning.Operation,
  /**
   * @param {!proto.google.longrunning.WaitOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.longrunning.Operation.deserializeBinary
);


/**
 * @param {!proto.google.longrunning.WaitOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.longrunning.OperationsClient.prototype.waitOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.longrunning.Operations/WaitOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_WaitOperation,
      callback);
};


/**
 * @param {!proto.google.longrunning.WaitOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.longrunning.OperationsPromiseClient.prototype.waitOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.longrunning.Operations/WaitOperation',
      request,
      metadata || {},
      methodDescriptor_Operations_WaitOperation);
};


module.exports = proto.google.longrunning;

