/**
 * @fileoverview gRPC-Web generated client stub for viam.service.vision.v1
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
proto.viam.service.vision = {};
proto.viam.service.vision.v1 = require('./vision_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.vision.v1.VisionServiceClient =
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
proto.viam.service.vision.v1.VisionServicePromiseClient =
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
 *   !proto.viam.service.vision.v1.GetModelParameterSchemaRequest,
 *   !proto.viam.service.vision.v1.GetModelParameterSchemaResponse>}
 */
const methodDescriptor_VisionService_GetModelParameterSchema = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetModelParameterSchema',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetModelParameterSchemaRequest,
  proto.viam.service.vision.v1.GetModelParameterSchemaResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetModelParameterSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetModelParameterSchemaResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetModelParameterSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetModelParameterSchemaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetModelParameterSchemaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getModelParameterSchema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetModelParameterSchema',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetModelParameterSchema,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetModelParameterSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetModelParameterSchemaResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getModelParameterSchema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetModelParameterSchema',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetModelParameterSchema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetDetectorNamesRequest,
 *   !proto.viam.service.vision.v1.GetDetectorNamesResponse>}
 */
const methodDescriptor_VisionService_GetDetectorNames = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetDetectorNames',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetDetectorNamesRequest,
  proto.viam.service.vision.v1.GetDetectorNamesResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectorNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectorNamesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetDetectorNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetDetectorNamesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetDetectorNamesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getDetectorNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectorNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectorNames,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetDetectorNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetDetectorNamesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getDetectorNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectorNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectorNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.AddDetectorRequest,
 *   !proto.viam.service.vision.v1.AddDetectorResponse>}
 */
const methodDescriptor_VisionService_AddDetector = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/AddDetector',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.AddDetectorRequest,
  proto.viam.service.vision.v1.AddDetectorResponse,
  /**
   * @param {!proto.viam.service.vision.v1.AddDetectorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.AddDetectorResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.AddDetectorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.AddDetectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.AddDetectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.addDetector =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddDetector',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddDetector,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.AddDetectorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.AddDetectorResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.addDetector =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddDetector',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddDetector);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.RemoveDetectorRequest,
 *   !proto.viam.service.vision.v1.RemoveDetectorResponse>}
 */
const methodDescriptor_VisionService_RemoveDetector = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/RemoveDetector',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.RemoveDetectorRequest,
  proto.viam.service.vision.v1.RemoveDetectorResponse,
  /**
   * @param {!proto.viam.service.vision.v1.RemoveDetectorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.RemoveDetectorResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.RemoveDetectorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.RemoveDetectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.RemoveDetectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.removeDetector =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveDetector',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveDetector,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.RemoveDetectorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.RemoveDetectorResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.removeDetector =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveDetector',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveDetector);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>}
 */
const methodDescriptor_VisionService_GetDetectionsFromCamera = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetDetectionsFromCameraRequest,
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsFromCameraResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetDetectionsFromCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getDetectionsFromCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectionsFromCamera,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetDetectionsFromCameraResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getDetectionsFromCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetectionsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetectionsFromCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetDetectionsRequest,
 *   !proto.viam.service.vision.v1.GetDetectionsResponse>}
 */
const methodDescriptor_VisionService_GetDetections = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetDetections',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetDetectionsRequest,
  proto.viam.service.vision.v1.GetDetectionsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetDetectionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetDetectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetDetectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getDetections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetections',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetections,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetDetectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetDetectionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getDetections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetDetections',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetDetections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetClassifierNamesRequest,
 *   !proto.viam.service.vision.v1.GetClassifierNamesResponse>}
 */
const methodDescriptor_VisionService_GetClassifierNames = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetClassifierNames',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetClassifierNamesRequest,
  proto.viam.service.vision.v1.GetClassifierNamesResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassifierNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassifierNamesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetClassifierNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetClassifierNamesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetClassifierNamesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getClassifierNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifierNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifierNames,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetClassifierNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetClassifierNamesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getClassifierNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifierNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifierNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.AddClassifierRequest,
 *   !proto.viam.service.vision.v1.AddClassifierResponse>}
 */
const methodDescriptor_VisionService_AddClassifier = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/AddClassifier',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.AddClassifierRequest,
  proto.viam.service.vision.v1.AddClassifierResponse,
  /**
   * @param {!proto.viam.service.vision.v1.AddClassifierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.AddClassifierResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.AddClassifierRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.AddClassifierResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.AddClassifierResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.addClassifier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddClassifier',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddClassifier,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.AddClassifierRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.AddClassifierResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.addClassifier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddClassifier',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddClassifier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.RemoveClassifierRequest,
 *   !proto.viam.service.vision.v1.RemoveClassifierResponse>}
 */
const methodDescriptor_VisionService_RemoveClassifier = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/RemoveClassifier',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.RemoveClassifierRequest,
  proto.viam.service.vision.v1.RemoveClassifierResponse,
  /**
   * @param {!proto.viam.service.vision.v1.RemoveClassifierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.RemoveClassifierResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.RemoveClassifierRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.RemoveClassifierResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.RemoveClassifierResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.removeClassifier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveClassifier',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveClassifier,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.RemoveClassifierRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.RemoveClassifierResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.removeClassifier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveClassifier',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveClassifier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>}
 */
const methodDescriptor_VisionService_GetClassificationsFromCamera = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetClassificationsFromCameraRequest,
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsFromCameraResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetClassificationsFromCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getClassificationsFromCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassificationsFromCamera,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsFromCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetClassificationsFromCameraResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getClassificationsFromCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassificationsFromCamera',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassificationsFromCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetClassificationsRequest,
 *   !proto.viam.service.vision.v1.GetClassificationsResponse>}
 */
const methodDescriptor_VisionService_GetClassifications = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetClassifications',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetClassificationsRequest,
  proto.viam.service.vision.v1.GetClassificationsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetClassificationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetClassificationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetClassificationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getClassifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifications',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifications,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetClassificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetClassificationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getClassifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetClassifications',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetClassifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetSegmenterNamesRequest,
 *   !proto.viam.service.vision.v1.GetSegmenterNamesResponse>}
 */
const methodDescriptor_VisionService_GetSegmenterNames = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetSegmenterNames',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetSegmenterNamesRequest,
  proto.viam.service.vision.v1.GetSegmenterNamesResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetSegmenterNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetSegmenterNamesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetSegmenterNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetSegmenterNamesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetSegmenterNamesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getSegmenterNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetSegmenterNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetSegmenterNames,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetSegmenterNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetSegmenterNamesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getSegmenterNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetSegmenterNames',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetSegmenterNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.AddSegmenterRequest,
 *   !proto.viam.service.vision.v1.AddSegmenterResponse>}
 */
const methodDescriptor_VisionService_AddSegmenter = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/AddSegmenter',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.AddSegmenterRequest,
  proto.viam.service.vision.v1.AddSegmenterResponse,
  /**
   * @param {!proto.viam.service.vision.v1.AddSegmenterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.AddSegmenterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.AddSegmenterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.AddSegmenterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.AddSegmenterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.addSegmenter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddSegmenter',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddSegmenter,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.AddSegmenterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.AddSegmenterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.addSegmenter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/AddSegmenter',
      request,
      metadata || {},
      methodDescriptor_VisionService_AddSegmenter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.RemoveSegmenterRequest,
 *   !proto.viam.service.vision.v1.RemoveSegmenterResponse>}
 */
const methodDescriptor_VisionService_RemoveSegmenter = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/RemoveSegmenter',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.RemoveSegmenterRequest,
  proto.viam.service.vision.v1.RemoveSegmenterResponse,
  /**
   * @param {!proto.viam.service.vision.v1.RemoveSegmenterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.RemoveSegmenterResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.RemoveSegmenterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.RemoveSegmenterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.RemoveSegmenterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.removeSegmenter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveSegmenter',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveSegmenter,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.RemoveSegmenterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.RemoveSegmenterResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.removeSegmenter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/RemoveSegmenter',
      request,
      metadata || {},
      methodDescriptor_VisionService_RemoveSegmenter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsRequest,
 *   !proto.viam.service.vision.v1.GetObjectPointCloudsResponse>}
 */
const methodDescriptor_VisionService_GetObjectPointClouds = new grpc.web.MethodDescriptor(
  '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
  grpc.web.MethodType.UNARY,
  proto.viam.service.vision.v1.GetObjectPointCloudsRequest,
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse,
  /**
   * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.vision.v1.GetObjectPointCloudsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.vision.v1.GetObjectPointCloudsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.vision.v1.GetObjectPointCloudsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.vision.v1.VisionServiceClient.prototype.getObjectPointClouds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetObjectPointClouds,
      callback);
};


/**
 * @param {!proto.viam.service.vision.v1.GetObjectPointCloudsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.vision.v1.GetObjectPointCloudsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.vision.v1.VisionServicePromiseClient.prototype.getObjectPointClouds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.vision.v1.VisionService/GetObjectPointClouds',
      request,
      metadata || {},
      methodDescriptor_VisionService_GetObjectPointClouds);
};


module.exports = proto.viam.service.vision.v1;

