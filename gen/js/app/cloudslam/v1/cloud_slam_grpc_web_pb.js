/**
 * @fileoverview gRPC-Web generated client stub for viam.app.cloudslam.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.cloudslam = {};
proto.viam.app.cloudslam.v1 = require('./cloud_slam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient =
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
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient =
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
 *   !proto.viam.app.cloudslam.v1.StartMappingSessionRequest,
 *   !proto.viam.app.cloudslam.v1.StartMappingSessionResponse>}
 */
const methodDescriptor_CloudSLAMService_StartMappingSession = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/StartMappingSession',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.StartMappingSessionRequest,
  proto.viam.app.cloudslam.v1.StartMappingSessionResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.StartMappingSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.StartMappingSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.StartMappingSessionRequest,
 *   !proto.viam.app.cloudslam.v1.StartMappingSessionResponse>}
 */
const methodInfo_CloudSLAMService_StartMappingSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.StartMappingSessionResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.StartMappingSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.StartMappingSessionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.StartMappingSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.StartMappingSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.StartMappingSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.startMappingSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/StartMappingSession',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_StartMappingSession,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.StartMappingSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.StartMappingSessionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.startMappingSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/StartMappingSession',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_StartMappingSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest,
 *   !proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse>}
 */
const methodDescriptor_CloudSLAMService_GetActiveMappingSessionsForRobot = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/GetActiveMappingSessionsForRobot',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest,
  proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest,
 *   !proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse>}
 */
const methodInfo_CloudSLAMService_GetActiveMappingSessionsForRobot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.getActiveMappingSessionsForRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetActiveMappingSessionsForRobot',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetActiveMappingSessionsForRobot,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.GetActiveMappingSessionsForRobotResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.getActiveMappingSessionsForRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetActiveMappingSessionsForRobot',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetActiveMappingSessionsForRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest,
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse>}
 */
const methodDescriptor_CloudSLAMService_GetMappingSessionPointCloud = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionPointCloud',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest,
  proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest,
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse>}
 */
const methodInfo_CloudSLAMService_GetMappingSessionPointCloud = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.getMappingSessionPointCloud =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionPointCloud',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetMappingSessionPointCloud,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.GetMappingSessionPointCloudResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.getMappingSessionPointCloud =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionPointCloud',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetMappingSessionPointCloud);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.ListMappingSessionsRequest,
 *   !proto.viam.app.cloudslam.v1.ListMappingSessionsResponse>}
 */
const methodDescriptor_CloudSLAMService_ListMappingSessions = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/ListMappingSessions',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.ListMappingSessionsRequest,
  proto.viam.app.cloudslam.v1.ListMappingSessionsResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.ListMappingSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.ListMappingSessionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.ListMappingSessionsRequest,
 *   !proto.viam.app.cloudslam.v1.ListMappingSessionsResponse>}
 */
const methodInfo_CloudSLAMService_ListMappingSessions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.ListMappingSessionsResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.ListMappingSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.ListMappingSessionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.ListMappingSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.ListMappingSessionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.ListMappingSessionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.listMappingSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/ListMappingSessions',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_ListMappingSessions,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.ListMappingSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.ListMappingSessionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.listMappingSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/ListMappingSessions',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_ListMappingSessions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.StopMappingSessionRequest,
 *   !proto.viam.app.cloudslam.v1.StopMappingSessionResponse>}
 */
const methodDescriptor_CloudSLAMService_StopMappingSession = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/StopMappingSession',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.StopMappingSessionRequest,
  proto.viam.app.cloudslam.v1.StopMappingSessionResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.StopMappingSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.StopMappingSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.StopMappingSessionRequest,
 *   !proto.viam.app.cloudslam.v1.StopMappingSessionResponse>}
 */
const methodInfo_CloudSLAMService_StopMappingSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.StopMappingSessionResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.StopMappingSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.StopMappingSessionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.StopMappingSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.StopMappingSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.StopMappingSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.stopMappingSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/StopMappingSession',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_StopMappingSession,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.StopMappingSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.StopMappingSessionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.stopMappingSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/StopMappingSession',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_StopMappingSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest,
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse>}
 */
const methodDescriptor_CloudSLAMService_GetMappingSessionMetadataByID = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionMetadataByID',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest,
  proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest,
 *   !proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse>}
 */
const methodInfo_CloudSLAMService_GetMappingSessionMetadataByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.getMappingSessionMetadataByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionMetadataByID',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetMappingSessionMetadataByID,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.GetMappingSessionMetadataByIDResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.getMappingSessionMetadataByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/GetMappingSessionMetadataByID',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_GetMappingSessionMetadataByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest,
 *   !proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse>}
 */
const methodDescriptor_CloudSLAMService_UpdateMappingSessionMetadataByID = new grpc.web.MethodDescriptor(
  '/viam.app.cloudslam.v1.CloudSLAMService/UpdateMappingSessionMetadataByID',
  grpc.web.MethodType.UNARY,
  proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest,
  proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest,
 *   !proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse>}
 */
const methodInfo_CloudSLAMService_UpdateMappingSessionMetadataByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse,
  /**
   * @param {!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.cloudslam.v1.CloudSLAMServiceClient.prototype.updateMappingSessionMetadataByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/UpdateMappingSessionMetadataByID',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_UpdateMappingSessionMetadataByID,
      callback);
};


/**
 * @param {!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.cloudslam.v1.UpdateMappingSessionMetadataByIDResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.cloudslam.v1.CloudSLAMServicePromiseClient.prototype.updateMappingSessionMetadataByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.cloudslam.v1.CloudSLAMService/UpdateMappingSessionMetadataByID',
      request,
      metadata || {},
      methodDescriptor_CloudSLAMService_UpdateMappingSessionMetadataByID);
};


module.exports = proto.viam.app.cloudslam.v1;

