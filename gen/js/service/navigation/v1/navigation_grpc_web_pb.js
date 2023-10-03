/**
 * @fileoverview gRPC-Web generated client stub for viam.service.navigation.v1
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
proto.viam.service.navigation = {};
proto.viam.service.navigation.v1 = require('./navigation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.navigation.v1.NavigationServiceClient =
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
proto.viam.service.navigation.v1.NavigationServicePromiseClient =
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
 *   !proto.viam.service.navigation.v1.GetModeRequest,
 *   !proto.viam.service.navigation.v1.GetModeResponse>}
 */
const methodDescriptor_NavigationService_GetMode = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/GetMode',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.GetModeRequest,
  proto.viam.service.navigation.v1.GetModeResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetModeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.GetModeRequest,
 *   !proto.viam.service.navigation.v1.GetModeResponse>}
 */
const methodInfo_NavigationService_GetMode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.GetModeResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetModeResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.GetModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.GetModeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.GetModeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.getMode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetMode',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetMode,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.GetModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.GetModeResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.getMode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetMode',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetMode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.SetModeRequest,
 *   !proto.viam.service.navigation.v1.SetModeResponse>}
 */
const methodDescriptor_NavigationService_SetMode = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/SetMode',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.SetModeRequest,
  proto.viam.service.navigation.v1.SetModeResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.SetModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.SetModeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.SetModeRequest,
 *   !proto.viam.service.navigation.v1.SetModeResponse>}
 */
const methodInfo_NavigationService_SetMode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.SetModeResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.SetModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.SetModeResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.SetModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.SetModeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.SetModeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.setMode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/SetMode',
      request,
      metadata || {},
      methodDescriptor_NavigationService_SetMode,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.SetModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.SetModeResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.setMode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/SetMode',
      request,
      metadata || {},
      methodDescriptor_NavigationService_SetMode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.GetLocationRequest,
 *   !proto.viam.service.navigation.v1.GetLocationResponse>}
 */
const methodDescriptor_NavigationService_GetLocation = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/GetLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.GetLocationRequest,
  proto.viam.service.navigation.v1.GetLocationResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.GetLocationRequest,
 *   !proto.viam.service.navigation.v1.GetLocationResponse>}
 */
const methodInfo_NavigationService_GetLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.GetLocationResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.GetLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.GetLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.getLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetLocation',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetLocation,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.GetLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.getLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetLocation',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.GetWaypointsRequest,
 *   !proto.viam.service.navigation.v1.GetWaypointsResponse>}
 */
const methodDescriptor_NavigationService_GetWaypoints = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/GetWaypoints',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.GetWaypointsRequest,
  proto.viam.service.navigation.v1.GetWaypointsResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetWaypointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetWaypointsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.GetWaypointsRequest,
 *   !proto.viam.service.navigation.v1.GetWaypointsResponse>}
 */
const methodInfo_NavigationService_GetWaypoints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.GetWaypointsResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetWaypointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetWaypointsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.GetWaypointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.GetWaypointsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.GetWaypointsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.getWaypoints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetWaypoints',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetWaypoints,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.GetWaypointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.GetWaypointsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.getWaypoints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetWaypoints',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetWaypoints);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.AddWaypointRequest,
 *   !proto.viam.service.navigation.v1.AddWaypointResponse>}
 */
const methodDescriptor_NavigationService_AddWaypoint = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/AddWaypoint',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.AddWaypointRequest,
  proto.viam.service.navigation.v1.AddWaypointResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.AddWaypointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.AddWaypointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.AddWaypointRequest,
 *   !proto.viam.service.navigation.v1.AddWaypointResponse>}
 */
const methodInfo_NavigationService_AddWaypoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.AddWaypointResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.AddWaypointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.AddWaypointResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.AddWaypointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.AddWaypointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.AddWaypointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.addWaypoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/AddWaypoint',
      request,
      metadata || {},
      methodDescriptor_NavigationService_AddWaypoint,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.AddWaypointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.AddWaypointResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.addWaypoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/AddWaypoint',
      request,
      metadata || {},
      methodDescriptor_NavigationService_AddWaypoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.RemoveWaypointRequest,
 *   !proto.viam.service.navigation.v1.RemoveWaypointResponse>}
 */
const methodDescriptor_NavigationService_RemoveWaypoint = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/RemoveWaypoint',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.RemoveWaypointRequest,
  proto.viam.service.navigation.v1.RemoveWaypointResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.RemoveWaypointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.RemoveWaypointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.RemoveWaypointRequest,
 *   !proto.viam.service.navigation.v1.RemoveWaypointResponse>}
 */
const methodInfo_NavigationService_RemoveWaypoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.RemoveWaypointResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.RemoveWaypointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.RemoveWaypointResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.RemoveWaypointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.RemoveWaypointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.RemoveWaypointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.removeWaypoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/RemoveWaypoint',
      request,
      metadata || {},
      methodDescriptor_NavigationService_RemoveWaypoint,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.RemoveWaypointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.RemoveWaypointResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.removeWaypoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/RemoveWaypoint',
      request,
      metadata || {},
      methodDescriptor_NavigationService_RemoveWaypoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.GetObstaclesRequest,
 *   !proto.viam.service.navigation.v1.GetObstaclesResponse>}
 */
const methodDescriptor_NavigationService_GetObstacles = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/GetObstacles',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.GetObstaclesRequest,
  proto.viam.service.navigation.v1.GetObstaclesResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetObstaclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetObstaclesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.GetObstaclesRequest,
 *   !proto.viam.service.navigation.v1.GetObstaclesResponse>}
 */
const methodInfo_NavigationService_GetObstacles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.GetObstaclesResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetObstaclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetObstaclesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.GetObstaclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.GetObstaclesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.GetObstaclesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.getObstacles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetObstacles',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetObstacles,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.GetObstaclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.GetObstaclesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.getObstacles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetObstacles',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetObstacles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.navigation.v1.GetPathsRequest,
 *   !proto.viam.service.navigation.v1.GetPathsResponse>}
 */
const methodDescriptor_NavigationService_GetPaths = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/GetPaths',
  grpc.web.MethodType.UNARY,
  proto.viam.service.navigation.v1.GetPathsRequest,
  proto.viam.service.navigation.v1.GetPathsResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetPathsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetPathsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.navigation.v1.GetPathsRequest,
 *   !proto.viam.service.navigation.v1.GetPathsResponse>}
 */
const methodInfo_NavigationService_GetPaths = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.navigation.v1.GetPathsResponse,
  /**
   * @param {!proto.viam.service.navigation.v1.GetPathsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.navigation.v1.GetPathsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.navigation.v1.GetPathsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.navigation.v1.GetPathsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.navigation.v1.GetPathsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.getPaths =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetPaths',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetPaths,
      callback);
};


/**
 * @param {!proto.viam.service.navigation.v1.GetPathsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.navigation.v1.GetPathsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.getPaths =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/GetPaths',
      request,
      metadata || {},
      methodDescriptor_NavigationService_GetPaths);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_NavigationService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.service.navigation.v1.NavigationService/DoCommand',
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
const methodInfo_NavigationService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.service.navigation.v1.NavigationServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_NavigationService_DoCommand,
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
proto.viam.service.navigation.v1.NavigationServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.navigation.v1.NavigationService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_NavigationService_DoCommand);
};


module.exports = proto.viam.service.navigation.v1;

