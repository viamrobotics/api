/**
 * @fileoverview gRPC-Web generated client stub for viam.component.gantry.v1
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
proto.viam.component = {};
proto.viam.component.gantry = {};
proto.viam.component.gantry.v1 = require('./gantry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.gantry.v1.GantryServiceClient =
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
proto.viam.component.gantry.v1.GantryServicePromiseClient =
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
 *   !proto.viam.component.gantry.v1.GetPositionRequest,
 *   !proto.viam.component.gantry.v1.GetPositionResponse>}
 */
const methodDescriptor_GantryService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.GetPositionRequest,
  proto.viam.component.gantry.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.GetPositionRequest,
 *   !proto.viam.component.gantry.v1.GetPositionResponse>}
 */
const methodInfo_GantryService_GetPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.MoveToPositionRequest,
 *   !proto.viam.component.gantry.v1.MoveToPositionResponse>}
 */
const methodDescriptor_GantryService_MoveToPosition = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/MoveToPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.MoveToPositionRequest,
  proto.viam.component.gantry.v1.MoveToPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.MoveToPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.MoveToPositionRequest,
 *   !proto.viam.component.gantry.v1.MoveToPositionResponse>}
 */
const methodInfo_GantryService_MoveToPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.MoveToPositionResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.MoveToPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.MoveToPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.MoveToPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.moveToPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_MoveToPosition,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.MoveToPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.MoveToPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.moveToPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/MoveToPosition',
      request,
      metadata || {},
      methodDescriptor_GantryService_MoveToPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.HomeRequest,
 *   !proto.viam.component.gantry.v1.HomeResponse>}
 */
const methodDescriptor_GantryService_Home = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/Home',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.HomeRequest,
  proto.viam.component.gantry.v1.HomeResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.HomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.HomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.HomeRequest,
 *   !proto.viam.component.gantry.v1.HomeResponse>}
 */
const methodInfo_GantryService_Home = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.HomeResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.HomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.HomeResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.HomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.HomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.HomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.home =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Home',
      request,
      metadata || {},
      methodDescriptor_GantryService_Home,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.HomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.HomeResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.home =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Home',
      request,
      metadata || {},
      methodDescriptor_GantryService_Home);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.GetLengthsRequest,
 *   !proto.viam.component.gantry.v1.GetLengthsResponse>}
 */
const methodDescriptor_GantryService_GetLengths = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/GetLengths',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.GetLengthsRequest,
  proto.viam.component.gantry.v1.GetLengthsResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetLengthsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.GetLengthsRequest,
 *   !proto.viam.component.gantry.v1.GetLengthsResponse>}
 */
const methodInfo_GantryService_GetLengths = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.GetLengthsResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.GetLengthsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.GetLengthsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.GetLengthsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.getLengths =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetLengths',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetLengths,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.GetLengthsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.GetLengthsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.getLengths =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetLengths',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetLengths);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.StopRequest,
 *   !proto.viam.component.gantry.v1.StopResponse>}
 */
const methodDescriptor_GantryService_Stop = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/Stop',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.StopRequest,
  proto.viam.component.gantry.v1.StopResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.StopRequest,
 *   !proto.viam.component.gantry.v1.StopResponse>}
 */
const methodInfo_GantryService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.StopResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.StopResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Stop',
      request,
      metadata || {},
      methodDescriptor_GantryService_Stop,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.StopResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/Stop',
      request,
      metadata || {},
      methodDescriptor_GantryService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.gantry.v1.IsMovingRequest,
 *   !proto.viam.component.gantry.v1.IsMovingResponse>}
 */
const methodDescriptor_GantryService_IsMoving = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/IsMoving',
  grpc.web.MethodType.UNARY,
  proto.viam.component.gantry.v1.IsMovingRequest,
  proto.viam.component.gantry.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.IsMovingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.gantry.v1.IsMovingRequest,
 *   !proto.viam.component.gantry.v1.IsMovingResponse>}
 */
const methodInfo_GantryService_IsMoving = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.gantry.v1.IsMovingResponse,
  /**
   * @param {!proto.viam.component.gantry.v1.IsMovingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.gantry.v1.IsMovingResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.gantry.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.gantry.v1.IsMovingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.gantry.v1.IsMovingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.isMoving =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_GantryService_IsMoving,
      callback);
};


/**
 * @param {!proto.viam.component.gantry.v1.IsMovingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.gantry.v1.IsMovingResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.isMoving =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/IsMoving',
      request,
      metadata || {},
      methodDescriptor_GantryService_IsMoving);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_GantryService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/DoCommand',
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
const methodInfo_GantryService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.gantry.v1.GantryServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GantryService_DoCommand,
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
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_GantryService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_GantryService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.gantry.v1.GantryService/GetGeometries',
  grpc.web.MethodType.UNARY,
  common_v1_common_pb.GetGeometriesRequest,
  common_v1_common_pb.GetGeometriesResponse,
  /**
   * @param {!proto.viam.common.v1.GetGeometriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.GetGeometriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodInfo_GantryService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.GetGeometriesResponse,
  /**
   * @param {!proto.viam.common.v1.GetGeometriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.GetGeometriesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.common.v1.GetGeometriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.common.v1.GetGeometriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.common.v1.GetGeometriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.gantry.v1.GantryServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetGeometries,
      callback);
};


/**
 * @param {!proto.viam.common.v1.GetGeometriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.common.v1.GetGeometriesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.gantry.v1.GantryServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.gantry.v1.GantryService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_GantryService_GetGeometries);
};


module.exports = proto.viam.component.gantry.v1;

