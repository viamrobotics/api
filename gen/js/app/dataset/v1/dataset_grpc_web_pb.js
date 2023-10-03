/**
 * @fileoverview gRPC-Web generated client stub for viam.app.dataset.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.dataset = {};
proto.viam.app.dataset.v1 = require('./dataset_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.dataset.v1.DatasetServiceClient =
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
proto.viam.app.dataset.v1.DatasetServicePromiseClient =
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
 *   !proto.viam.app.dataset.v1.CreateDatasetRequest,
 *   !proto.viam.app.dataset.v1.CreateDatasetResponse>}
 */
const methodDescriptor_DatasetService_CreateDataset = new grpc.web.MethodDescriptor(
  '/viam.app.dataset.v1.DatasetService/CreateDataset',
  grpc.web.MethodType.UNARY,
  proto.viam.app.dataset.v1.CreateDatasetRequest,
  proto.viam.app.dataset.v1.CreateDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.CreateDatasetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.dataset.v1.CreateDatasetRequest,
 *   !proto.viam.app.dataset.v1.CreateDatasetResponse>}
 */
const methodInfo_DatasetService_CreateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.dataset.v1.CreateDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.CreateDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.dataset.v1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.dataset.v1.CreateDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.dataset.v1.CreateDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.dataset.v1.DatasetServiceClient.prototype.createDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateDataset,
      callback);
};


/**
 * @param {!proto.viam.app.dataset.v1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.dataset.v1.CreateDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.dataset.v1.DatasetServicePromiseClient.prototype.createDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.dataset.v1.DeleteDatasetRequest,
 *   !proto.viam.app.dataset.v1.DeleteDatasetResponse>}
 */
const methodDescriptor_DatasetService_DeleteDataset = new grpc.web.MethodDescriptor(
  '/viam.app.dataset.v1.DatasetService/DeleteDataset',
  grpc.web.MethodType.UNARY,
  proto.viam.app.dataset.v1.DeleteDatasetRequest,
  proto.viam.app.dataset.v1.DeleteDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.DeleteDatasetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.dataset.v1.DeleteDatasetRequest,
 *   !proto.viam.app.dataset.v1.DeleteDatasetResponse>}
 */
const methodInfo_DatasetService_DeleteDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.dataset.v1.DeleteDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.DeleteDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.dataset.v1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.dataset.v1.DeleteDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.dataset.v1.DeleteDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.dataset.v1.DatasetServiceClient.prototype.deleteDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteDataset,
      callback);
};


/**
 * @param {!proto.viam.app.dataset.v1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.dataset.v1.DeleteDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.dataset.v1.DatasetServicePromiseClient.prototype.deleteDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.dataset.v1.RenameDatasetRequest,
 *   !proto.viam.app.dataset.v1.RenameDatasetResponse>}
 */
const methodDescriptor_DatasetService_RenameDataset = new grpc.web.MethodDescriptor(
  '/viam.app.dataset.v1.DatasetService/RenameDataset',
  grpc.web.MethodType.UNARY,
  proto.viam.app.dataset.v1.RenameDatasetRequest,
  proto.viam.app.dataset.v1.RenameDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.RenameDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.RenameDatasetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.dataset.v1.RenameDatasetRequest,
 *   !proto.viam.app.dataset.v1.RenameDatasetResponse>}
 */
const methodInfo_DatasetService_RenameDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.dataset.v1.RenameDatasetResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.RenameDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.RenameDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.dataset.v1.RenameDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.dataset.v1.RenameDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.dataset.v1.RenameDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.dataset.v1.DatasetServiceClient.prototype.renameDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/RenameDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_RenameDataset,
      callback);
};


/**
 * @param {!proto.viam.app.dataset.v1.RenameDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.dataset.v1.RenameDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.dataset.v1.DatasetServicePromiseClient.prototype.renameDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/RenameDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_RenameDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest,
 *   !proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse>}
 */
const methodDescriptor_DatasetService_ListDatasetsByOrganizationID = new grpc.web.MethodDescriptor(
  '/viam.app.dataset.v1.DatasetService/ListDatasetsByOrganizationID',
  grpc.web.MethodType.UNARY,
  proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest,
  proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest,
 *   !proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse>}
 */
const methodInfo_DatasetService_ListDatasetsByOrganizationID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.dataset.v1.DatasetServiceClient.prototype.listDatasetsByOrganizationID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/ListDatasetsByOrganizationID',
      request,
      metadata || {},
      methodDescriptor_DatasetService_ListDatasetsByOrganizationID,
      callback);
};


/**
 * @param {!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.dataset.v1.ListDatasetsByOrganizationIDResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.dataset.v1.DatasetServicePromiseClient.prototype.listDatasetsByOrganizationID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/ListDatasetsByOrganizationID',
      request,
      metadata || {},
      methodDescriptor_DatasetService_ListDatasetsByOrganizationID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.dataset.v1.ListDatasetsByIDsRequest,
 *   !proto.viam.app.dataset.v1.ListDatasetsByIDsResponse>}
 */
const methodDescriptor_DatasetService_ListDatasetsByIDs = new grpc.web.MethodDescriptor(
  '/viam.app.dataset.v1.DatasetService/ListDatasetsByIDs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.dataset.v1.ListDatasetsByIDsRequest,
  proto.viam.app.dataset.v1.ListDatasetsByIDsResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.ListDatasetsByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.ListDatasetsByIDsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.dataset.v1.ListDatasetsByIDsRequest,
 *   !proto.viam.app.dataset.v1.ListDatasetsByIDsResponse>}
 */
const methodInfo_DatasetService_ListDatasetsByIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.dataset.v1.ListDatasetsByIDsResponse,
  /**
   * @param {!proto.viam.app.dataset.v1.ListDatasetsByIDsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.dataset.v1.ListDatasetsByIDsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.dataset.v1.ListDatasetsByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.dataset.v1.ListDatasetsByIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.dataset.v1.ListDatasetsByIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.dataset.v1.DatasetServiceClient.prototype.listDatasetsByIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/ListDatasetsByIDs',
      request,
      metadata || {},
      methodDescriptor_DatasetService_ListDatasetsByIDs,
      callback);
};


/**
 * @param {!proto.viam.app.dataset.v1.ListDatasetsByIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.dataset.v1.ListDatasetsByIDsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.dataset.v1.DatasetServicePromiseClient.prototype.listDatasetsByIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.dataset.v1.DatasetService/ListDatasetsByIDs',
      request,
      metadata || {},
      methodDescriptor_DatasetService_ListDatasetsByIDs);
};


module.exports = proto.viam.app.dataset.v1;

