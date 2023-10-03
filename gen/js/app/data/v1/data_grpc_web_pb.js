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
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.data.v1.DataServiceClient =
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
proto.viam.app.data.v1.DataServicePromiseClient =
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.TabularDataByFilterRequest,
 *   !proto.viam.app.data.v1.TabularDataByFilterResponse>}
 */
const methodInfo_DataService_TabularDataByFilter = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.TabularDataByFilterResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.BinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.BinaryDataByFilterResponse>}
 */
const methodInfo_DataService_BinaryDataByFilter = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.BinaryDataByFilterResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.BinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.BinaryDataByIDsResponse>}
 */
const methodInfo_DataService_BinaryDataByIDs = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.BinaryDataByIDsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.data.v1.DeleteTabularDataRequest,
 *   !proto.viam.app.data.v1.DeleteTabularDataResponse>}
 */
const methodDescriptor_DataService_DeleteTabularData = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/DeleteTabularData',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.DeleteTabularDataRequest,
  proto.viam.app.data.v1.DeleteTabularDataResponse,
  /**
   * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.DeleteTabularDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.DeleteTabularDataRequest,
 *   !proto.viam.app.data.v1.DeleteTabularDataResponse>}
 */
const methodInfo_DataService_DeleteTabularData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.DeleteTabularDataResponse,
  /**
   * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.DeleteTabularDataResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.DeleteTabularDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.DeleteTabularDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.deleteTabularData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteTabularData',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteTabularData,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.DeleteTabularDataResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.deleteTabularData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/DeleteTabularData',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteTabularData);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse>}
 */
const methodInfo_DataService_DeleteBinaryDataByFilter = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse>}
 */
const methodInfo_DataService_DeleteBinaryDataByIDs = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse>}
 */
const methodDescriptor_DataService_AddTagsToBinaryDataByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/AddTagsToBinaryDataByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest,
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse>}
 */
const methodInfo_DataService_AddTagsToBinaryDataByIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.addTagsToBinaryDataByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.addTagsToBinaryDataByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddTagsToBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddTagsToBinaryDataByIDs);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse>}
 */
const methodInfo_DataService_AddTagsToBinaryDataByFilter = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse>}
 */
const methodDescriptor_DataService_RemoveTagsFromBinaryDataByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest,
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest,
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse>}
 */
const methodInfo_DataService_RemoveTagsFromBinaryDataByIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.removeTagsFromBinaryDataByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.removeTagsFromBinaryDataByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveTagsFromBinaryDataByIDs);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest,
 *   !proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse>}
 */
const methodInfo_DataService_RemoveTagsFromBinaryDataByFilter = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.TagsByFilterRequest,
 *   !proto.viam.app.data.v1.TagsByFilterResponse>}
 */
const methodDescriptor_DataService_TagsByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/TagsByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.TagsByFilterRequest,
  proto.viam.app.data.v1.TagsByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.TagsByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.TagsByFilterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.TagsByFilterRequest,
 *   !proto.viam.app.data.v1.TagsByFilterResponse>}
 */
const methodInfo_DataService_TagsByFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.TagsByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.TagsByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.TagsByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.TagsByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.TagsByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.TagsByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.tagsByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/TagsByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_TagsByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.TagsByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.TagsByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.tagsByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/TagsByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_TagsByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest,
 *   !proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse>}
 */
const methodDescriptor_DataService_AddBoundingBoxToImageByID = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/AddBoundingBoxToImageByID',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest,
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest,
 *   !proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse>}
 */
const methodInfo_DataService_AddBoundingBoxToImageByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.addBoundingBoxToImageByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddBoundingBoxToImageByID',
      request,
      metadata || {},
      methodDescriptor_DataService_AddBoundingBoxToImageByID,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.addBoundingBoxToImageByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddBoundingBoxToImageByID',
      request,
      metadata || {},
      methodDescriptor_DataService_AddBoundingBoxToImageByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest,
 *   !proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse>}
 */
const methodDescriptor_DataService_RemoveBoundingBoxFromImageByID = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/RemoveBoundingBoxFromImageByID',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest,
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest,
 *   !proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse>}
 */
const methodInfo_DataService_RemoveBoundingBoxFromImageByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.removeBoundingBoxFromImageByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveBoundingBoxFromImageByID',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveBoundingBoxFromImageByID,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.removeBoundingBoxFromImageByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveBoundingBoxFromImageByID',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveBoundingBoxFromImageByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest,
 *   !proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse>}
 */
const methodDescriptor_DataService_BoundingBoxLabelsByFilter = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/BoundingBoxLabelsByFilter',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest,
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest,
 *   !proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse>}
 */
const methodInfo_DataService_BoundingBoxLabelsByFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse,
  /**
   * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.boundingBoxLabelsByFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BoundingBoxLabelsByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_BoundingBoxLabelsByFilter,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.boundingBoxLabelsByFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/BoundingBoxLabelsByFilter',
      request,
      metadata || {},
      methodDescriptor_DataService_BoundingBoxLabelsByFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.GetDatabaseConnectionRequest,
 *   !proto.viam.app.data.v1.GetDatabaseConnectionResponse>}
 */
const methodDescriptor_DataService_GetDatabaseConnection = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/GetDatabaseConnection',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.GetDatabaseConnectionRequest,
  proto.viam.app.data.v1.GetDatabaseConnectionResponse,
  /**
   * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.GetDatabaseConnectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.GetDatabaseConnectionRequest,
 *   !proto.viam.app.data.v1.GetDatabaseConnectionResponse>}
 */
const methodInfo_DataService_GetDatabaseConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.GetDatabaseConnectionResponse,
  /**
   * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.GetDatabaseConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.GetDatabaseConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.GetDatabaseConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.getDatabaseConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/GetDatabaseConnection',
      request,
      metadata || {},
      methodDescriptor_DataService_GetDatabaseConnection,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.GetDatabaseConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.getDatabaseConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/GetDatabaseConnection',
      request,
      metadata || {},
      methodDescriptor_DataService_GetDatabaseConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.ConfigureDatabaseUserRequest,
 *   !proto.viam.app.data.v1.ConfigureDatabaseUserResponse>}
 */
const methodDescriptor_DataService_ConfigureDatabaseUser = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/ConfigureDatabaseUser',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.ConfigureDatabaseUserRequest,
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse,
  /**
   * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.ConfigureDatabaseUserRequest,
 *   !proto.viam.app.data.v1.ConfigureDatabaseUserResponse>}
 */
const methodInfo_DataService_ConfigureDatabaseUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse,
  /**
   * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.ConfigureDatabaseUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.ConfigureDatabaseUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.configureDatabaseUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/ConfigureDatabaseUser',
      request,
      metadata || {},
      methodDescriptor_DataService_ConfigureDatabaseUser,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.ConfigureDatabaseUserResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.configureDatabaseUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/ConfigureDatabaseUser',
      request,
      metadata || {},
      methodDescriptor_DataService_ConfigureDatabaseUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest,
 *   !proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse>}
 */
const methodDescriptor_DataService_AddBinaryDataToDatasetByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/AddBinaryDataToDatasetByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest,
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest,
 *   !proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse>}
 */
const methodInfo_DataService_AddBinaryDataToDatasetByIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.addBinaryDataToDatasetByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddBinaryDataToDatasetByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddBinaryDataToDatasetByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.addBinaryDataToDatasetByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/AddBinaryDataToDatasetByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_AddBinaryDataToDatasetByIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest,
 *   !proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse>}
 */
const methodDescriptor_DataService_RemoveBinaryDataFromDatasetByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.data.v1.DataService/RemoveBinaryDataFromDatasetByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest,
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest,
 *   !proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse>}
 */
const methodInfo_DataService_RemoveBinaryDataFromDatasetByIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse,
  /**
   * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.data.v1.DataServiceClient.prototype.removeBinaryDataFromDatasetByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveBinaryDataFromDatasetByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveBinaryDataFromDatasetByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.data.v1.DataServicePromiseClient.prototype.removeBinaryDataFromDatasetByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.data.v1.DataService/RemoveBinaryDataFromDatasetByIDs',
      request,
      metadata || {},
      methodDescriptor_DataService_RemoveBinaryDataFromDatasetByIDs);
};


module.exports = proto.viam.app.data.v1;

