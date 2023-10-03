/**
 * @fileoverview gRPC-Web generated client stub for viam.service.motion.v1
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.service = {};
proto.viam.service.motion = {};
proto.viam.service.motion.v1 = require('./motion_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.motion.v1.MotionServiceClient =
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
proto.viam.service.motion.v1.MotionServicePromiseClient =
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
 *   !proto.viam.service.motion.v1.MoveRequest,
 *   !proto.viam.service.motion.v1.MoveResponse>}
 */
const methodDescriptor_MotionService_Move = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/Move',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveRequest,
  proto.viam.service.motion.v1.MoveResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.MoveRequest,
 *   !proto.viam.service.motion.v1.MoveResponse>}
 */
const methodInfo_MotionService_Move = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.MoveResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/Move',
      request,
      metadata || {},
      methodDescriptor_MotionService_Move,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/Move',
      request,
      metadata || {},
      methodDescriptor_MotionService_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.MoveOnMapRequest,
 *   !proto.viam.service.motion.v1.MoveOnMapResponse>}
 */
const methodDescriptor_MotionService_MoveOnMap = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/MoveOnMap',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveOnMapRequest,
  proto.viam.service.motion.v1.MoveOnMapResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnMapResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.MoveOnMapRequest,
 *   !proto.viam.service.motion.v1.MoveOnMapResponse>}
 */
const methodInfo_MotionService_MoveOnMap = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.MoveOnMapResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnMapResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveOnMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.MoveOnMapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveOnMapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.moveOnMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnMap',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnMap,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveOnMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveOnMapResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.moveOnMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnMap',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.MoveOnGlobeRequest,
 *   !proto.viam.service.motion.v1.MoveOnGlobeResponse>}
 */
const methodDescriptor_MotionService_MoveOnGlobe = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/MoveOnGlobe',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveOnGlobeRequest,
  proto.viam.service.motion.v1.MoveOnGlobeResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnGlobeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnGlobeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.MoveOnGlobeRequest,
 *   !proto.viam.service.motion.v1.MoveOnGlobeResponse>}
 */
const methodInfo_MotionService_MoveOnGlobe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.MoveOnGlobeResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnGlobeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnGlobeResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveOnGlobeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.MoveOnGlobeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveOnGlobeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.moveOnGlobe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnGlobe',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnGlobe,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveOnGlobeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveOnGlobeResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.moveOnGlobe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnGlobe',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnGlobe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.MoveOnGlobeNewRequest,
 *   !proto.viam.service.motion.v1.MoveOnGlobeNewResponse>}
 */
const methodDescriptor_MotionService_MoveOnGlobeNew = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/MoveOnGlobeNew',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.MoveOnGlobeNewRequest,
  proto.viam.service.motion.v1.MoveOnGlobeNewResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnGlobeNewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnGlobeNewResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.MoveOnGlobeNewRequest,
 *   !proto.viam.service.motion.v1.MoveOnGlobeNewResponse>}
 */
const methodInfo_MotionService_MoveOnGlobeNew = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.MoveOnGlobeNewResponse,
  /**
   * @param {!proto.viam.service.motion.v1.MoveOnGlobeNewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.MoveOnGlobeNewResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.MoveOnGlobeNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.MoveOnGlobeNewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.MoveOnGlobeNewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.moveOnGlobeNew =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnGlobeNew',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnGlobeNew,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.MoveOnGlobeNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.MoveOnGlobeNewResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.moveOnGlobeNew =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/MoveOnGlobeNew',
      request,
      metadata || {},
      methodDescriptor_MotionService_MoveOnGlobeNew);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.GetPoseRequest,
 *   !proto.viam.service.motion.v1.GetPoseResponse>}
 */
const methodDescriptor_MotionService_GetPose = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/GetPose',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.GetPoseRequest,
  proto.viam.service.motion.v1.GetPoseResponse,
  /**
   * @param {!proto.viam.service.motion.v1.GetPoseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.GetPoseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.GetPoseRequest,
 *   !proto.viam.service.motion.v1.GetPoseResponse>}
 */
const methodInfo_MotionService_GetPose = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.GetPoseResponse,
  /**
   * @param {!proto.viam.service.motion.v1.GetPoseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.GetPoseResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.GetPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.GetPoseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.GetPoseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.getPose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPose',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPose,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.GetPoseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.GetPoseResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.getPose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPose',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPose);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.StopPlanRequest,
 *   !proto.viam.service.motion.v1.StopPlanResponse>}
 */
const methodDescriptor_MotionService_StopPlan = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/StopPlan',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.StopPlanRequest,
  proto.viam.service.motion.v1.StopPlanResponse,
  /**
   * @param {!proto.viam.service.motion.v1.StopPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.StopPlanResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.StopPlanRequest,
 *   !proto.viam.service.motion.v1.StopPlanResponse>}
 */
const methodInfo_MotionService_StopPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.StopPlanResponse,
  /**
   * @param {!proto.viam.service.motion.v1.StopPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.StopPlanResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.StopPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.StopPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.StopPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.stopPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/StopPlan',
      request,
      metadata || {},
      methodDescriptor_MotionService_StopPlan,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.StopPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.StopPlanResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.stopPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/StopPlan',
      request,
      metadata || {},
      methodDescriptor_MotionService_StopPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.ListPlanStatusesRequest,
 *   !proto.viam.service.motion.v1.ListPlanStatusesResponse>}
 */
const methodDescriptor_MotionService_ListPlanStatuses = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/ListPlanStatuses',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.ListPlanStatusesRequest,
  proto.viam.service.motion.v1.ListPlanStatusesResponse,
  /**
   * @param {!proto.viam.service.motion.v1.ListPlanStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.ListPlanStatusesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.ListPlanStatusesRequest,
 *   !proto.viam.service.motion.v1.ListPlanStatusesResponse>}
 */
const methodInfo_MotionService_ListPlanStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.ListPlanStatusesResponse,
  /**
   * @param {!proto.viam.service.motion.v1.ListPlanStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.ListPlanStatusesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.ListPlanStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.ListPlanStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.ListPlanStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.listPlanStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/ListPlanStatuses',
      request,
      metadata || {},
      methodDescriptor_MotionService_ListPlanStatuses,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.ListPlanStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.ListPlanStatusesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.listPlanStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/ListPlanStatuses',
      request,
      metadata || {},
      methodDescriptor_MotionService_ListPlanStatuses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.motion.v1.GetPlanRequest,
 *   !proto.viam.service.motion.v1.GetPlanResponse>}
 */
const methodDescriptor_MotionService_GetPlan = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/GetPlan',
  grpc.web.MethodType.UNARY,
  proto.viam.service.motion.v1.GetPlanRequest,
  proto.viam.service.motion.v1.GetPlanResponse,
  /**
   * @param {!proto.viam.service.motion.v1.GetPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.GetPlanResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.service.motion.v1.GetPlanRequest,
 *   !proto.viam.service.motion.v1.GetPlanResponse>}
 */
const methodInfo_MotionService_GetPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.service.motion.v1.GetPlanResponse,
  /**
   * @param {!proto.viam.service.motion.v1.GetPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.motion.v1.GetPlanResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.motion.v1.GetPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.service.motion.v1.GetPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.motion.v1.GetPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.motion.v1.MotionServiceClient.prototype.getPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPlan',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPlan,
      callback);
};


/**
 * @param {!proto.viam.service.motion.v1.GetPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.motion.v1.GetPlanResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.getPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/GetPlan',
      request,
      metadata || {},
      methodDescriptor_MotionService_GetPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_MotionService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.service.motion.v1.MotionService/DoCommand',
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
const methodInfo_MotionService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.service.motion.v1.MotionServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_MotionService_DoCommand,
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
proto.viam.service.motion.v1.MotionServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.motion.v1.MotionService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_MotionService_DoCommand);
};


module.exports = proto.viam.service.motion.v1;

