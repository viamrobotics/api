/**
 * @fileoverview gRPC-Web generated client stub for viam.component.inputcontroller.v1
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
proto.viam.component = {};
proto.viam.component.inputcontroller = {};
proto.viam.component.inputcontroller.v1 = require('./input_controller_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient =
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
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient =
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
 *   !proto.viam.component.inputcontroller.v1.GetControlsRequest,
 *   !proto.viam.component.inputcontroller.v1.GetControlsResponse>}
 */
const methodDescriptor_InputControllerService_GetControls = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/GetControls',
  grpc.web.MethodType.UNARY,
  proto.viam.component.inputcontroller.v1.GetControlsRequest,
  proto.viam.component.inputcontroller.v1.GetControlsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.GetControlsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.GetControlsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.inputcontroller.v1.GetControlsRequest,
 *   !proto.viam.component.inputcontroller.v1.GetControlsResponse>}
 */
const methodInfo_InputControllerService_GetControls = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.inputcontroller.v1.GetControlsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.GetControlsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.GetControlsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.inputcontroller.v1.GetControlsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.inputcontroller.v1.GetControlsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.inputcontroller.v1.GetControlsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.getControls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetControls',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetControls,
      callback);
};


/**
 * @param {!proto.viam.component.inputcontroller.v1.GetControlsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.inputcontroller.v1.GetControlsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.getControls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetControls',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetControls);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.inputcontroller.v1.GetEventsRequest,
 *   !proto.viam.component.inputcontroller.v1.GetEventsResponse>}
 */
const methodDescriptor_InputControllerService_GetEvents = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/GetEvents',
  grpc.web.MethodType.UNARY,
  proto.viam.component.inputcontroller.v1.GetEventsRequest,
  proto.viam.component.inputcontroller.v1.GetEventsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.GetEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.GetEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.inputcontroller.v1.GetEventsRequest,
 *   !proto.viam.component.inputcontroller.v1.GetEventsResponse>}
 */
const methodInfo_InputControllerService_GetEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.inputcontroller.v1.GetEventsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.GetEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.GetEventsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.inputcontroller.v1.GetEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.inputcontroller.v1.GetEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.inputcontroller.v1.GetEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.getEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetEvents',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetEvents,
      callback);
};


/**
 * @param {!proto.viam.component.inputcontroller.v1.GetEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.inputcontroller.v1.GetEventsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.getEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetEvents',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.inputcontroller.v1.StreamEventsRequest,
 *   !proto.viam.component.inputcontroller.v1.StreamEventsResponse>}
 */
const methodDescriptor_InputControllerService_StreamEvents = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/StreamEvents',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.component.inputcontroller.v1.StreamEventsRequest,
  proto.viam.component.inputcontroller.v1.StreamEventsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.StreamEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.StreamEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.inputcontroller.v1.StreamEventsRequest,
 *   !proto.viam.component.inputcontroller.v1.StreamEventsResponse>}
 */
const methodInfo_InputControllerService_StreamEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.inputcontroller.v1.StreamEventsResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.StreamEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.StreamEventsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.inputcontroller.v1.StreamEventsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.inputcontroller.v1.StreamEventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.streamEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/StreamEvents',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_StreamEvents);
};


/**
 * @param {!proto.viam.component.inputcontroller.v1.StreamEventsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.inputcontroller.v1.StreamEventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.streamEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/StreamEvents',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_StreamEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.component.inputcontroller.v1.TriggerEventRequest,
 *   !proto.viam.component.inputcontroller.v1.TriggerEventResponse>}
 */
const methodDescriptor_InputControllerService_TriggerEvent = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/TriggerEvent',
  grpc.web.MethodType.UNARY,
  proto.viam.component.inputcontroller.v1.TriggerEventRequest,
  proto.viam.component.inputcontroller.v1.TriggerEventResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.TriggerEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.TriggerEventResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.component.inputcontroller.v1.TriggerEventRequest,
 *   !proto.viam.component.inputcontroller.v1.TriggerEventResponse>}
 */
const methodInfo_InputControllerService_TriggerEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.component.inputcontroller.v1.TriggerEventResponse,
  /**
   * @param {!proto.viam.component.inputcontroller.v1.TriggerEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.component.inputcontroller.v1.TriggerEventResponse.deserializeBinary
);


/**
 * @param {!proto.viam.component.inputcontroller.v1.TriggerEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.component.inputcontroller.v1.TriggerEventResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.component.inputcontroller.v1.TriggerEventResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.triggerEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/TriggerEvent',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_TriggerEvent,
      callback);
};


/**
 * @param {!proto.viam.component.inputcontroller.v1.TriggerEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.component.inputcontroller.v1.TriggerEventResponse>}
 *     Promise that resolves to the response
 */
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.triggerEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/TriggerEvent',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_TriggerEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.DoCommandRequest,
 *   !proto.viam.common.v1.DoCommandResponse>}
 */
const methodDescriptor_InputControllerService_DoCommand = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/DoCommand',
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
const methodInfo_InputControllerService_DoCommand = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.doCommand =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_DoCommand,
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
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.doCommand =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/DoCommand',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_DoCommand);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.common.v1.GetGeometriesRequest,
 *   !proto.viam.common.v1.GetGeometriesResponse>}
 */
const methodDescriptor_InputControllerService_GetGeometries = new grpc.web.MethodDescriptor(
  '/viam.component.inputcontroller.v1.InputControllerService/GetGeometries',
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
const methodInfo_InputControllerService_GetGeometries = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.viam.component.inputcontroller.v1.InputControllerServiceClient.prototype.getGeometries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetGeometries,
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
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient.prototype.getGeometries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.component.inputcontroller.v1.InputControllerService/GetGeometries',
      request,
      metadata || {},
      methodDescriptor_InputControllerService_GetGeometries);
};


module.exports = proto.viam.component.inputcontroller.v1;

