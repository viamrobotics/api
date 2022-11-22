/**
 * @fileoverview gRPC-Web generated client stub for viam.app.data.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.data = {};
proto.viam.app.data.v1 = require('./data_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.data.v1.DataServiceClient =
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
proto.viam.app.data.v1.DataServicePromiseClient =
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
 *   !proto.viam.app.data.v1.TabularDataByFilterRequest,
 *   !proto.viam.app.data.v1.TabularDataByFilterResponse>}
 */
const methodDescriptor_DataService_TabularDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/TabularDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.TabularDataByFilterRequest,
  proto.viam.app.data.v1.TabularDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.TabularDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.TabularDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.TabularDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.tabularDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/TabularDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_TabularDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.TabularDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.tabularDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/TabularDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_TabularDataByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.BinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.BinaryDataByFilterResponse>}
 */
const methodDescriptor_DataService_BinaryDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/BinaryDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.BinaryDataByFilterRequest,
  proto.viam.app.data.v1.BinaryDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.BinaryDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.BinaryDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.BinaryDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.binaryDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_BinaryDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.BinaryDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.binaryDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_BinaryDataByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.BinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.BinaryDataByIDsResponse>}
 */
const methodDescriptor_DataService_BinaryDataByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/BinaryDataByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.BinaryDataByIDsRequest,
  proto.viam.app.data.v1.BinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.BinaryDataByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.BinaryDataByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.BinaryDataByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.binaryDataByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_BinaryDataByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.BinaryDataByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.binaryDataByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_BinaryDataByIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.DeleteTabularDataByFilterRequest,
 *   !proto.viam.app.data.v1.DeleteTabularDataByFilterResponse>}
 */
const methodDescriptor_DataService_DeleteTabularDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/DeleteTabularDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.DeleteTabularDataByFilterRequest,
  proto.viam.app.data.v1.DeleteTabularDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.DeleteTabularDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.DeleteTabularDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.DeleteTabularDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.DeleteTabularDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.DeleteTabularDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.deleteTabularDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteTabularDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteTabularDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.DeleteTabularDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.DeleteTabularDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.deleteTabularDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteTabularDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteTabularDataByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse>}
 */
const methodDescriptor_DataService_DeleteBinaryDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/DeleteBinaryDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest,
  proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.deleteBinaryDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteBinaryDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.deleteBinaryDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteBinaryDataByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse>}
 */
const methodDescriptor_DataService_DeleteBinaryDataByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/DeleteBinaryDataByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest,
  proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.deleteBinaryDataByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteBinaryDataByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.deleteBinaryDataByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteBinaryDataByIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsRequest,
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse>}
 */
const methodDescriptor_DataService_AddTagsToBinaryDataByFileIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFileIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsRequest,
  proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.addTagsToBinaryDataByFileIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFileIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByFileIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.AddTagsToBinaryDataByFileIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.addTagsToBinaryDataByFileIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFileIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByFileIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse>}
 */
const methodDescriptor_DataService_AddTagsToBinaryDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest,
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.addTagsToBinaryDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.addTagsToBinaryDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsRequest,
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse>}
 */
const methodDescriptor_DataService_RemoveTagsFromBinaryDataByFileIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFileIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsRequest,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.removeTagsFromBinaryDataByFileIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFileIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByFileIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFileIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.removeTagsFromBinaryDataByFileIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFileIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByFileIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse>}
 */
const methodDescriptor_DataService_RemoveTagsFromBinaryDataByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.removeTagsFromBinaryDataByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.removeTagsFromBinaryDataByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByFilter);
};


module.exports = proto.viam.app.data.v1;

