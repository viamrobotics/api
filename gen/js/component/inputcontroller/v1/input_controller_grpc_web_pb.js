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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.component.inputcontroller.v1.InputControllerServiceClient =
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
proto.viam.component.inputcontroller.v1.InputControllerServicePromiseClient =
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
 * @param {!proto.viam.component.inputcontroller.v1.GetControlsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.inputcontroller.v1.GetControlsResponse)}
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
 * @param {?Object<string, string>=} metadata User defined
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
 * @param {!proto.viam.component.inputcontroller.v1.GetEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.inputcontroller.v1.GetEventsResponse)}
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
 * @param {?Object<string, string>=} metadata User defined
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
 * @param {!proto.viam.component.inputcontroller.v1.StreamEventsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
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
 * @param {?Object<string, string>=} metadata User defined
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
 * @param {!proto.viam.component.inputcontroller.v1.TriggerEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.component.inputcontroller.v1.TriggerEventResponse)}
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
 * @param {?Object<string, string>=} metadata User defined
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


module.exports = proto.viam.component.inputcontroller.v1;

