/**
 * @fileoverview gRPC-Web generated client stub for viam.app.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var tagger_v1_tagger_pb = require('../../tagger/v1/tagger_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.v1 = require('./app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.AppServiceClient =
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
proto.viam.app.v1.AppServicePromiseClient =
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
 *   !proto.viam.app.v1.CreateLocationRequest,
 *   !proto.viam.app.v1.CreateLocationResponse>}
 */
const methodDescriptor_AppService_CreateLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateLocationRequest,
  proto.viam.app.v1.CreateLocationResponse,
  /**
   * @param {!proto.viam.app.v1.CreateLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.CreateLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListOrganizationsRequest,
 *   !proto.viam.app.v1.ListOrganizationsResponse>}
 */
const methodDescriptor_AppService_ListOrganizations = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListOrganizations',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListOrganizationsRequest,
  proto.viam.app.v1.ListOrganizationsResponse,
  /**
   * @param {!proto.viam.app.v1.ListOrganizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListOrganizationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.ListOrganizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListOrganizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizations,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListOrganizationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListLocationsRequest,
 *   !proto.viam.app.v1.ListLocationsResponse>}
 */
const methodDescriptor_AppService_ListLocations = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListLocations',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListLocationsRequest,
  proto.viam.app.v1.ListLocationsResponse,
  /**
   * @param {!proto.viam.app.v1.ListLocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListLocationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.ListLocationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListLocationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listLocations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListLocations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListLocations,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListLocationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listLocations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListLocations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListLocations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.LocationAuthRequest,
 *   !proto.viam.app.v1.LocationAuthResponse>}
 */
const methodDescriptor_AppService_LocationAuth = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/LocationAuth',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.LocationAuthRequest,
  proto.viam.app.v1.LocationAuthResponse,
  /**
   * @param {!proto.viam.app.v1.LocationAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.LocationAuthResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.LocationAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.LocationAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.LocationAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.locationAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/LocationAuth',
      request,
      metadata || {},
      methodDescriptor_AppService_LocationAuth,
      callback);
};


/**
 * @param {!proto.viam.app.v1.LocationAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.LocationAuthResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.locationAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/LocationAuth',
      request,
      metadata || {},
      methodDescriptor_AppService_LocationAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateLocationSecretRequest,
 *   !proto.viam.app.v1.CreateLocationSecretResponse>}
 */
const methodDescriptor_AppService_CreateLocationSecret = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateLocationSecret',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateLocationSecretRequest,
  proto.viam.app.v1.CreateLocationSecretResponse,
  /**
   * @param {!proto.viam.app.v1.CreateLocationSecretRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateLocationSecretResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateLocationSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.CreateLocationSecretResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateLocationSecretResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createLocationSecret =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateLocationSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateLocationSecret,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateLocationSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateLocationSecretResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createLocationSecret =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateLocationSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateLocationSecret);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteLocationSecretRequest,
 *   !proto.viam.app.v1.DeleteLocationSecretResponse>}
 */
const methodDescriptor_AppService_DeleteLocationSecret = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteLocationSecret',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteLocationSecretRequest,
  proto.viam.app.v1.DeleteLocationSecretResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteLocationSecretResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.DeleteLocationSecretResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteLocationSecretResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteLocationSecret =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteLocationSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteLocationSecret,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteLocationSecretResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteLocationSecret =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteLocationSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteLocationSecret);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetRobotRequest,
 *   !proto.viam.app.v1.GetRobotResponse>}
 */
const methodDescriptor_AppService_GetRobot = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobot',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotRequest,
  proto.viam.app.v1.GetRobotResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetRobotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobot,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetRobotPartsRequest,
 *   !proto.viam.app.v1.GetRobotPartsResponse>}
 */
const methodDescriptor_AppService_GetRobotParts = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobotParts',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotPartsRequest,
  proto.viam.app.v1.GetRobotPartsResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotPartsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotPartsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotPartsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetRobotPartsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotPartsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobotParts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotParts',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotParts,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotPartsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotPartsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobotParts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotParts',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotParts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetRobotPartRequest,
 *   !proto.viam.app.v1.GetRobotPartResponse>}
 */
const methodDescriptor_AppService_GetRobotPart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobotPart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotPartRequest,
  proto.viam.app.v1.GetRobotPartResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotPartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotPartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetRobotPartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotPartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobotPart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotPartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobotPart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetRobotPartLogsRequest,
 *   !proto.viam.app.v1.GetRobotPartLogsResponse>}
 */
const methodDescriptor_AppService_GetRobotPartLogs = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobotPartLogs',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotPartLogsRequest,
  proto.viam.app.v1.GetRobotPartLogsResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotPartLogsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetRobotPartLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotPartLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobotPartLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPartLogs',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPartLogs,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotPartLogsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobotPartLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPartLogs',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPartLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.TailRobotPartLogsRequest,
 *   !proto.viam.app.v1.TailRobotPartLogsResponse>}
 */
const methodDescriptor_AppService_TailRobotPartLogs = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/TailRobotPartLogs',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.app.v1.TailRobotPartLogsRequest,
  proto.viam.app.v1.TailRobotPartLogsResponse,
  /**
   * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.TailRobotPartLogsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.TailRobotPartLogsResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.tailRobotPartLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.app.v1.AppService/TailRobotPartLogs',
      request,
      metadata || {},
      methodDescriptor_AppService_TailRobotPartLogs);
};


/**
 * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.TailRobotPartLogsResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.tailRobotPartLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.app.v1.AppService/TailRobotPartLogs',
      request,
      metadata || {},
      methodDescriptor_AppService_TailRobotPartLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetRobotPartHistoryRequest,
 *   !proto.viam.app.v1.GetRobotPartHistoryResponse>}
 */
const methodDescriptor_AppService_GetRobotPartHistory = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobotPartHistory',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotPartHistoryRequest,
  proto.viam.app.v1.GetRobotPartHistoryResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotPartHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetRobotPartHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotPartHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobotPartHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPartHistory',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPartHistory,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotPartHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobotPartHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotPartHistory',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotPartHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateRobotPartRequest,
 *   !proto.viam.app.v1.UpdateRobotPartResponse>}
 */
const methodDescriptor_AppService_UpdateRobotPart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateRobotPart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateRobotPartRequest,
  proto.viam.app.v1.UpdateRobotPartResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateRobotPartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateRobotPartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.UpdateRobotPartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateRobotPartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateRobotPart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateRobotPart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateRobotPartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateRobotPart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateRobotPart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.NewRobotPartRequest,
 *   !proto.viam.app.v1.NewRobotPartResponse>}
 */
const methodDescriptor_AppService_NewRobotPart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/NewRobotPart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.NewRobotPartRequest,
  proto.viam.app.v1.NewRobotPartResponse,
  /**
   * @param {!proto.viam.app.v1.NewRobotPartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.NewRobotPartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.NewRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.NewRobotPartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.NewRobotPartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.newRobotPart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/NewRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_NewRobotPart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.NewRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.NewRobotPartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.newRobotPart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/NewRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_NewRobotPart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteRobotPartRequest,
 *   !proto.viam.app.v1.DeleteRobotPartResponse>}
 */
const methodDescriptor_AppService_DeleteRobotPart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteRobotPart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteRobotPartRequest,
  proto.viam.app.v1.DeleteRobotPartResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteRobotPartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteRobotPartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.DeleteRobotPartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteRobotPartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteRobotPart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobotPart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteRobotPartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteRobotPartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteRobotPart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobotPart',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobotPart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.MarkPartAsMainRequest,
 *   !proto.viam.app.v1.MarkPartAsMainResponse>}
 */
const methodDescriptor_AppService_MarkPartAsMain = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/MarkPartAsMain',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.MarkPartAsMainRequest,
  proto.viam.app.v1.MarkPartAsMainResponse,
  /**
   * @param {!proto.viam.app.v1.MarkPartAsMainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.MarkPartAsMainResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.MarkPartAsMainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.MarkPartAsMainResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.MarkPartAsMainResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.markPartAsMain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/MarkPartAsMain',
      request,
      metadata || {},
      methodDescriptor_AppService_MarkPartAsMain,
      callback);
};


/**
 * @param {!proto.viam.app.v1.MarkPartAsMainRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.MarkPartAsMainResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.markPartAsMain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/MarkPartAsMain',
      request,
      metadata || {},
      methodDescriptor_AppService_MarkPartAsMain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateRobotPartSecretRequest,
 *   !proto.viam.app.v1.CreateRobotPartSecretResponse>}
 */
const methodDescriptor_AppService_CreateRobotPartSecret = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateRobotPartSecret',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateRobotPartSecretRequest,
  proto.viam.app.v1.CreateRobotPartSecretResponse,
  /**
   * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateRobotPartSecretResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.CreateRobotPartSecretResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateRobotPartSecretResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createRobotPartSecret =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateRobotPartSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateRobotPartSecret,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateRobotPartSecretResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createRobotPartSecret =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateRobotPartSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateRobotPartSecret);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteRobotPartSecretRequest,
 *   !proto.viam.app.v1.DeleteRobotPartSecretResponse>}
 */
const methodDescriptor_AppService_DeleteRobotPartSecret = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteRobotPartSecret',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteRobotPartSecretRequest,
  proto.viam.app.v1.DeleteRobotPartSecretResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteRobotPartSecretResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.DeleteRobotPartSecretResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteRobotPartSecretResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteRobotPartSecret =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobotPartSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobotPartSecret,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteRobotPartSecretResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteRobotPartSecret =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobotPartSecret',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobotPartSecret);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.FindRobotsRequest,
 *   !proto.viam.app.v1.FindRobotsResponse>}
 */
const methodDescriptor_AppService_FindRobots = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/FindRobots',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.FindRobotsRequest,
  proto.viam.app.v1.FindRobotsResponse,
  /**
   * @param {!proto.viam.app.v1.FindRobotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.FindRobotsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.FindRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.FindRobotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.FindRobotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.findRobots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/FindRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_FindRobots,
      callback);
};


/**
 * @param {!proto.viam.app.v1.FindRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.FindRobotsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.findRobots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/FindRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_FindRobots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.NewRobotRequest,
 *   !proto.viam.app.v1.NewRobotResponse>}
 */
const methodDescriptor_AppService_NewRobot = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/NewRobot',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.NewRobotRequest,
  proto.viam.app.v1.NewRobotResponse,
  /**
   * @param {!proto.viam.app.v1.NewRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.NewRobotResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.NewRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.NewRobotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.NewRobotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.newRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/NewRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_NewRobot,
      callback);
};


/**
 * @param {!proto.viam.app.v1.NewRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.NewRobotResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.newRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/NewRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_NewRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateRobotRequest,
 *   !proto.viam.app.v1.UpdateRobotResponse>}
 */
const methodDescriptor_AppService_UpdateRobot = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateRobot',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateRobotRequest,
  proto.viam.app.v1.UpdateRobotResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateRobotResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.UpdateRobotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateRobotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateRobot,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateRobotResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteRobotRequest,
 *   !proto.viam.app.v1.DeleteRobotResponse>}
 */
const methodDescriptor_AppService_DeleteRobot = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteRobot',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteRobotRequest,
  proto.viam.app.v1.DeleteRobotResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteRobotResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.DeleteRobotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteRobotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobot,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteRobotResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteRobot',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteRobot);
};


module.exports = proto.viam.app.v1;

