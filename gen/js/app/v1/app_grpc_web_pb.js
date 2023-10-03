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
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.AppServiceClient =
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
proto.viam.app.v1.AppServicePromiseClient =
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
 *   !proto.viam.app.v1.GetUserIDByEmailRequest,
 *   !proto.viam.app.v1.GetUserIDByEmailResponse>}
 */
const methodDescriptor_AppService_GetUserIDByEmail = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetUserIDByEmail',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetUserIDByEmailRequest,
  proto.viam.app.v1.GetUserIDByEmailResponse,
  /**
   * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetUserIDByEmailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetUserIDByEmailRequest,
 *   !proto.viam.app.v1.GetUserIDByEmailResponse>}
 */
const methodInfo_AppService_GetUserIDByEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetUserIDByEmailResponse,
  /**
   * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetUserIDByEmailResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetUserIDByEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetUserIDByEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getUserIDByEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetUserIDByEmail',
      request,
      metadata || {},
      methodDescriptor_AppService_GetUserIDByEmail,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetUserIDByEmailResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getUserIDByEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetUserIDByEmail',
      request,
      metadata || {},
      methodDescriptor_AppService_GetUserIDByEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateOrganizationRequest,
 *   !proto.viam.app.v1.CreateOrganizationResponse>}
 */
const methodDescriptor_AppService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateOrganizationRequest,
  proto.viam.app.v1.CreateOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.CreateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateOrganizationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateOrganizationRequest,
 *   !proto.viam.app.v1.CreateOrganizationResponse>}
 */
const methodInfo_AppService_CreateOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.CreateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateOrganization);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListOrganizationsRequest,
 *   !proto.viam.app.v1.ListOrganizationsResponse>}
 */
const methodInfo_AppService_ListOrganizations = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListOrganizationsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.ListOrganizationsByUserRequest,
 *   !proto.viam.app.v1.ListOrganizationsByUserResponse>}
 */
const methodDescriptor_AppService_ListOrganizationsByUser = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListOrganizationsByUser',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListOrganizationsByUserRequest,
  proto.viam.app.v1.ListOrganizationsByUserResponse,
  /**
   * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListOrganizationsByUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListOrganizationsByUserRequest,
 *   !proto.viam.app.v1.ListOrganizationsByUserResponse>}
 */
const methodInfo_AppService_ListOrganizationsByUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListOrganizationsByUserResponse,
  /**
   * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListOrganizationsByUserResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListOrganizationsByUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListOrganizationsByUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listOrganizationsByUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizationsByUser',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizationsByUser,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListOrganizationsByUserResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listOrganizationsByUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizationsByUser',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizationsByUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetOrganizationRequest,
 *   !proto.viam.app.v1.GetOrganizationResponse>}
 */
const methodDescriptor_AppService_GetOrganization = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetOrganization',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetOrganizationRequest,
  proto.viam.app.v1.GetOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.GetOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetOrganizationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetOrganizationRequest,
 *   !proto.viam.app.v1.GetOrganizationResponse>}
 */
const methodInfo_AppService_GetOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.GetOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_GetOrganization,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest,
 *   !proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse>}
 */
const methodDescriptor_AppService_GetOrganizationNamespaceAvailability = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetOrganizationNamespaceAvailability',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest,
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse,
  /**
   * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest,
 *   !proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse>}
 */
const methodInfo_AppService_GetOrganizationNamespaceAvailability = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse,
  /**
   * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getOrganizationNamespaceAvailability =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetOrganizationNamespaceAvailability',
      request,
      metadata || {},
      methodDescriptor_AppService_GetOrganizationNamespaceAvailability,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getOrganizationNamespaceAvailability =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetOrganizationNamespaceAvailability',
      request,
      metadata || {},
      methodDescriptor_AppService_GetOrganizationNamespaceAvailability);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateOrganizationRequest,
 *   !proto.viam.app.v1.UpdateOrganizationResponse>}
 */
const methodDescriptor_AppService_UpdateOrganization = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateOrganization',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateOrganizationRequest,
  proto.viam.app.v1.UpdateOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateOrganizationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateOrganizationRequest,
 *   !proto.viam.app.v1.UpdateOrganizationResponse>}
 */
const methodInfo_AppService_UpdateOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UpdateOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateOrganization,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteOrganizationRequest,
 *   !proto.viam.app.v1.DeleteOrganizationResponse>}
 */
const methodDescriptor_AppService_DeleteOrganization = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteOrganization',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteOrganizationRequest,
  proto.viam.app.v1.DeleteOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteOrganizationRequest,
 *   !proto.viam.app.v1.DeleteOrganizationResponse>}
 */
const methodInfo_AppService_DeleteOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteOrganizationResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganization,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListOrganizationMembersRequest,
 *   !proto.viam.app.v1.ListOrganizationMembersResponse>}
 */
const methodDescriptor_AppService_ListOrganizationMembers = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListOrganizationMembers',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListOrganizationMembersRequest,
  proto.viam.app.v1.ListOrganizationMembersResponse,
  /**
   * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListOrganizationMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListOrganizationMembersRequest,
 *   !proto.viam.app.v1.ListOrganizationMembersResponse>}
 */
const methodInfo_AppService_ListOrganizationMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListOrganizationMembersResponse,
  /**
   * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListOrganizationMembersResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListOrganizationMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListOrganizationMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listOrganizationMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizationMembers',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizationMembers,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListOrganizationMembersResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listOrganizationMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListOrganizationMembers',
      request,
      metadata || {},
      methodDescriptor_AppService_ListOrganizationMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateOrganizationInviteRequest,
 *   !proto.viam.app.v1.CreateOrganizationInviteResponse>}
 */
const methodDescriptor_AppService_CreateOrganizationInvite = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateOrganizationInvite',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateOrganizationInviteRequest,
  proto.viam.app.v1.CreateOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateOrganizationInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateOrganizationInviteRequest,
 *   !proto.viam.app.v1.CreateOrganizationInviteResponse>}
 */
const methodInfo_AppService_CreateOrganizationInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateOrganizationInviteResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateOrganizationInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateOrganizationInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createOrganizationInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateOrganizationInvite,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateOrganizationInviteResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createOrganizationInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateOrganizationInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest,
 *   !proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse>}
 */
const methodDescriptor_AppService_UpdateOrganizationInviteAuthorizations = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateOrganizationInviteAuthorizations',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest,
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest,
 *   !proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse>}
 */
const methodInfo_AppService_UpdateOrganizationInviteAuthorizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateOrganizationInviteAuthorizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateOrganizationInviteAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateOrganizationInviteAuthorizations,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateOrganizationInviteAuthorizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateOrganizationInviteAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateOrganizationInviteAuthorizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteOrganizationMemberRequest,
 *   !proto.viam.app.v1.DeleteOrganizationMemberResponse>}
 */
const methodDescriptor_AppService_DeleteOrganizationMember = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteOrganizationMember',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteOrganizationMemberRequest,
  proto.viam.app.v1.DeleteOrganizationMemberResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationMemberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteOrganizationMemberRequest,
 *   !proto.viam.app.v1.DeleteOrganizationMemberResponse>}
 */
const methodInfo_AppService_DeleteOrganizationMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteOrganizationMemberResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationMemberResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteOrganizationMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteOrganizationMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteOrganizationMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganizationMember,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteOrganizationMemberResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteOrganizationMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganizationMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteOrganizationInviteRequest,
 *   !proto.viam.app.v1.DeleteOrganizationInviteResponse>}
 */
const methodDescriptor_AppService_DeleteOrganizationInvite = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteOrganizationInvite',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteOrganizationInviteRequest,
  proto.viam.app.v1.DeleteOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteOrganizationInviteRequest,
 *   !proto.viam.app.v1.DeleteOrganizationInviteResponse>}
 */
const methodInfo_AppService_DeleteOrganizationInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteOrganizationInviteResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteOrganizationInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteOrganizationInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteOrganizationInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganizationInvite,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteOrganizationInviteResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteOrganizationInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteOrganizationInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ResendOrganizationInviteRequest,
 *   !proto.viam.app.v1.ResendOrganizationInviteResponse>}
 */
const methodDescriptor_AppService_ResendOrganizationInvite = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ResendOrganizationInvite',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ResendOrganizationInviteRequest,
  proto.viam.app.v1.ResendOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ResendOrganizationInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ResendOrganizationInviteRequest,
 *   !proto.viam.app.v1.ResendOrganizationInviteResponse>}
 */
const methodInfo_AppService_ResendOrganizationInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ResendOrganizationInviteResponse,
  /**
   * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ResendOrganizationInviteResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ResendOrganizationInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ResendOrganizationInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.resendOrganizationInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ResendOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_ResendOrganizationInvite,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ResendOrganizationInviteResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.resendOrganizationInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ResendOrganizationInvite',
      request,
      metadata || {},
      methodDescriptor_AppService_ResendOrganizationInvite);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateLocationRequest,
 *   !proto.viam.app.v1.CreateLocationResponse>}
 */
const methodInfo_AppService_CreateLocation = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateLocationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.GetLocationRequest,
 *   !proto.viam.app.v1.GetLocationResponse>}
 */
const methodDescriptor_AppService_GetLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetLocationRequest,
  proto.viam.app.v1.GetLocationResponse,
  /**
   * @param {!proto.viam.app.v1.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetLocationRequest,
 *   !proto.viam.app.v1.GetLocationResponse>}
 */
const methodInfo_AppService_GetLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetLocationResponse,
  /**
   * @param {!proto.viam.app.v1.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_GetLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_GetLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateLocationRequest,
 *   !proto.viam.app.v1.UpdateLocationResponse>}
 */
const methodDescriptor_AppService_UpdateLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateLocationRequest,
  proto.viam.app.v1.UpdateLocationResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateLocationRequest,
 *   !proto.viam.app.v1.UpdateLocationResponse>}
 */
const methodInfo_AppService_UpdateLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UpdateLocationResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteLocationRequest,
 *   !proto.viam.app.v1.DeleteLocationResponse>}
 */
const methodDescriptor_AppService_DeleteLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteLocationRequest,
  proto.viam.app.v1.DeleteLocationResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteLocationRequest,
 *   !proto.viam.app.v1.DeleteLocationResponse>}
 */
const methodInfo_AppService_DeleteLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteLocationResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteLocation);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListLocationsRequest,
 *   !proto.viam.app.v1.ListLocationsResponse>}
 */
const methodInfo_AppService_ListLocations = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListLocationsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.ShareLocationRequest,
 *   !proto.viam.app.v1.ShareLocationResponse>}
 */
const methodDescriptor_AppService_ShareLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ShareLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ShareLocationRequest,
  proto.viam.app.v1.ShareLocationResponse,
  /**
   * @param {!proto.viam.app.v1.ShareLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ShareLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ShareLocationRequest,
 *   !proto.viam.app.v1.ShareLocationResponse>}
 */
const methodInfo_AppService_ShareLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ShareLocationResponse,
  /**
   * @param {!proto.viam.app.v1.ShareLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ShareLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ShareLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ShareLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ShareLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.shareLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ShareLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_ShareLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ShareLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ShareLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.shareLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ShareLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_ShareLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UnshareLocationRequest,
 *   !proto.viam.app.v1.UnshareLocationResponse>}
 */
const methodDescriptor_AppService_UnshareLocation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UnshareLocation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UnshareLocationRequest,
  proto.viam.app.v1.UnshareLocationResponse,
  /**
   * @param {!proto.viam.app.v1.UnshareLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UnshareLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UnshareLocationRequest,
 *   !proto.viam.app.v1.UnshareLocationResponse>}
 */
const methodInfo_AppService_UnshareLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UnshareLocationResponse,
  /**
   * @param {!proto.viam.app.v1.UnshareLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UnshareLocationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UnshareLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UnshareLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UnshareLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.unshareLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UnshareLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_UnshareLocation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UnshareLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UnshareLocationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.unshareLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UnshareLocation',
      request,
      metadata || {},
      methodDescriptor_AppService_UnshareLocation);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.LocationAuthRequest,
 *   !proto.viam.app.v1.LocationAuthResponse>}
 */
const methodInfo_AppService_LocationAuth = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.LocationAuthResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateLocationSecretRequest,
 *   !proto.viam.app.v1.CreateLocationSecretResponse>}
 */
const methodInfo_AppService_CreateLocationSecret = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateLocationSecretResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteLocationSecretRequest,
 *   !proto.viam.app.v1.DeleteLocationSecretResponse>}
 */
const methodInfo_AppService_DeleteLocationSecret = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteLocationSecretResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotRequest,
 *   !proto.viam.app.v1.GetRobotResponse>}
 */
const methodInfo_AppService_GetRobot = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.GetRoverRentalRobotsRequest,
 *   !proto.viam.app.v1.GetRoverRentalRobotsResponse>}
 */
const methodDescriptor_AppService_GetRoverRentalRobots = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRoverRentalRobots',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRoverRentalRobotsRequest,
  proto.viam.app.v1.GetRoverRentalRobotsResponse,
  /**
   * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRoverRentalRobotsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRoverRentalRobotsRequest,
 *   !proto.viam.app.v1.GetRoverRentalRobotsResponse>}
 */
const methodInfo_AppService_GetRoverRentalRobots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetRoverRentalRobotsResponse,
  /**
   * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRoverRentalRobotsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRoverRentalRobotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRoverRentalRobotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRoverRentalRobots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRoverRentalRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRoverRentalRobots,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRoverRentalRobotsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRoverRentalRobots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRoverRentalRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRoverRentalRobots);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotPartsRequest,
 *   !proto.viam.app.v1.GetRobotPartsResponse>}
 */
const methodInfo_AppService_GetRobotParts = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotPartsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotPartRequest,
 *   !proto.viam.app.v1.GetRobotPartResponse>}
 */
const methodInfo_AppService_GetRobotPart = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotPartResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotPartLogsRequest,
 *   !proto.viam.app.v1.GetRobotPartLogsResponse>}
 */
const methodInfo_AppService_GetRobotPartLogs = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotPartLogsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.TailRobotPartLogsRequest,
 *   !proto.viam.app.v1.TailRobotPartLogsResponse>}
 */
const methodInfo_AppService_TailRobotPartLogs = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {?Object<string, string>} metadata User defined
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotPartHistoryRequest,
 *   !proto.viam.app.v1.GetRobotPartHistoryResponse>}
 */
const methodInfo_AppService_GetRobotPartHistory = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotPartHistoryResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateRobotPartRequest,
 *   !proto.viam.app.v1.UpdateRobotPartResponse>}
 */
const methodInfo_AppService_UpdateRobotPart = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateRobotPartResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.NewRobotPartRequest,
 *   !proto.viam.app.v1.NewRobotPartResponse>}
 */
const methodInfo_AppService_NewRobotPart = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.NewRobotPartResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteRobotPartRequest,
 *   !proto.viam.app.v1.DeleteRobotPartResponse>}
 */
const methodInfo_AppService_DeleteRobotPart = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteRobotPartResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.GetRobotAPIKeysRequest,
 *   !proto.viam.app.v1.GetRobotAPIKeysResponse>}
 */
const methodDescriptor_AppService_GetRobotAPIKeys = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetRobotAPIKeys',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetRobotAPIKeysRequest,
  proto.viam.app.v1.GetRobotAPIKeysResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotAPIKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotAPIKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetRobotAPIKeysRequest,
 *   !proto.viam.app.v1.GetRobotAPIKeysResponse>}
 */
const methodInfo_AppService_GetRobotAPIKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetRobotAPIKeysResponse,
  /**
   * @param {!proto.viam.app.v1.GetRobotAPIKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetRobotAPIKeysResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetRobotAPIKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetRobotAPIKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetRobotAPIKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getRobotAPIKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotAPIKeys',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotAPIKeys,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetRobotAPIKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetRobotAPIKeysResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getRobotAPIKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetRobotAPIKeys',
      request,
      metadata || {},
      methodDescriptor_AppService_GetRobotAPIKeys);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.MarkPartAsMainRequest,
 *   !proto.viam.app.v1.MarkPartAsMainResponse>}
 */
const methodInfo_AppService_MarkPartAsMain = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.MarkPartAsMainResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.MarkPartForRestartRequest,
 *   !proto.viam.app.v1.MarkPartForRestartResponse>}
 */
const methodDescriptor_AppService_MarkPartForRestart = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/MarkPartForRestart',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.MarkPartForRestartRequest,
  proto.viam.app.v1.MarkPartForRestartResponse,
  /**
   * @param {!proto.viam.app.v1.MarkPartForRestartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.MarkPartForRestartResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.MarkPartForRestartRequest,
 *   !proto.viam.app.v1.MarkPartForRestartResponse>}
 */
const methodInfo_AppService_MarkPartForRestart = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.MarkPartForRestartResponse,
  /**
   * @param {!proto.viam.app.v1.MarkPartForRestartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.MarkPartForRestartResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.MarkPartForRestartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.MarkPartForRestartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.MarkPartForRestartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.markPartForRestart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/MarkPartForRestart',
      request,
      metadata || {},
      methodDescriptor_AppService_MarkPartForRestart,
      callback);
};


/**
 * @param {!proto.viam.app.v1.MarkPartForRestartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.MarkPartForRestartResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.markPartForRestart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/MarkPartForRestart',
      request,
      metadata || {},
      methodDescriptor_AppService_MarkPartForRestart);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateRobotPartSecretRequest,
 *   !proto.viam.app.v1.CreateRobotPartSecretResponse>}
 */
const methodInfo_AppService_CreateRobotPartSecret = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateRobotPartSecretResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteRobotPartSecretRequest,
 *   !proto.viam.app.v1.DeleteRobotPartSecretResponse>}
 */
const methodInfo_AppService_DeleteRobotPartSecret = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteRobotPartSecretResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 *   !proto.viam.app.v1.ListRobotsRequest,
 *   !proto.viam.app.v1.ListRobotsResponse>}
 */
const methodDescriptor_AppService_ListRobots = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListRobots',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListRobotsRequest,
  proto.viam.app.v1.ListRobotsResponse,
  /**
   * @param {!proto.viam.app.v1.ListRobotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListRobotsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListRobotsRequest,
 *   !proto.viam.app.v1.ListRobotsResponse>}
 */
const methodInfo_AppService_ListRobots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListRobotsResponse,
  /**
   * @param {!proto.viam.app.v1.ListRobotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListRobotsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListRobotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListRobotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listRobots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_ListRobots,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListRobotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListRobotsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listRobots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListRobots',
      request,
      metadata || {},
      methodDescriptor_AppService_ListRobots);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.NewRobotRequest,
 *   !proto.viam.app.v1.NewRobotResponse>}
 */
const methodInfo_AppService_NewRobot = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.NewRobotResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateRobotRequest,
 *   !proto.viam.app.v1.UpdateRobotResponse>}
 */
const methodInfo_AppService_UpdateRobot = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateRobotResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteRobotRequest,
 *   !proto.viam.app.v1.DeleteRobotResponse>}
 */
const methodInfo_AppService_DeleteRobot = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteRobotResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListFragmentsRequest,
 *   !proto.viam.app.v1.ListFragmentsResponse>}
 */
const methodDescriptor_AppService_ListFragments = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListFragments',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListFragmentsRequest,
  proto.viam.app.v1.ListFragmentsResponse,
  /**
   * @param {!proto.viam.app.v1.ListFragmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListFragmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListFragmentsRequest,
 *   !proto.viam.app.v1.ListFragmentsResponse>}
 */
const methodInfo_AppService_ListFragments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListFragmentsResponse,
  /**
   * @param {!proto.viam.app.v1.ListFragmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListFragmentsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListFragmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListFragmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListFragmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listFragments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListFragments',
      request,
      metadata || {},
      methodDescriptor_AppService_ListFragments,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListFragmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListFragmentsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listFragments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListFragments',
      request,
      metadata || {},
      methodDescriptor_AppService_ListFragments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetFragmentRequest,
 *   !proto.viam.app.v1.GetFragmentResponse>}
 */
const methodDescriptor_AppService_GetFragment = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetFragment',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetFragmentRequest,
  proto.viam.app.v1.GetFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.GetFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetFragmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetFragmentRequest,
 *   !proto.viam.app.v1.GetFragmentResponse>}
 */
const methodInfo_AppService_GetFragment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.GetFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetFragmentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetFragmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetFragmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getFragment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_GetFragment,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetFragmentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getFragment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_GetFragment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateFragmentRequest,
 *   !proto.viam.app.v1.CreateFragmentResponse>}
 */
const methodDescriptor_AppService_CreateFragment = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateFragment',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateFragmentRequest,
  proto.viam.app.v1.CreateFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.CreateFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateFragmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateFragmentRequest,
 *   !proto.viam.app.v1.CreateFragmentResponse>}
 */
const methodInfo_AppService_CreateFragment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.CreateFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateFragmentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateFragmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateFragmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createFragment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateFragment,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateFragmentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createFragment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateFragment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateFragmentRequest,
 *   !proto.viam.app.v1.UpdateFragmentResponse>}
 */
const methodDescriptor_AppService_UpdateFragment = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateFragment',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateFragmentRequest,
  proto.viam.app.v1.UpdateFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateFragmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateFragmentRequest,
 *   !proto.viam.app.v1.UpdateFragmentResponse>}
 */
const methodInfo_AppService_UpdateFragment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UpdateFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateFragmentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateFragmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateFragmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateFragment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateFragment,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateFragmentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateFragment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateFragment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteFragmentRequest,
 *   !proto.viam.app.v1.DeleteFragmentResponse>}
 */
const methodDescriptor_AppService_DeleteFragment = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteFragment',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteFragmentRequest,
  proto.viam.app.v1.DeleteFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteFragmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteFragmentRequest,
 *   !proto.viam.app.v1.DeleteFragmentResponse>}
 */
const methodInfo_AppService_DeleteFragment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteFragmentResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteFragmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteFragmentResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteFragmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteFragmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteFragment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteFragment,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteFragmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteFragmentResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteFragment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteFragment',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteFragment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.AddRoleRequest,
 *   !proto.viam.app.v1.AddRoleResponse>}
 */
const methodDescriptor_AppService_AddRole = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/AddRole',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.AddRoleRequest,
  proto.viam.app.v1.AddRoleResponse,
  /**
   * @param {!proto.viam.app.v1.AddRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.AddRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.AddRoleRequest,
 *   !proto.viam.app.v1.AddRoleResponse>}
 */
const methodInfo_AppService_AddRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.AddRoleResponse,
  /**
   * @param {!proto.viam.app.v1.AddRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.AddRoleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.AddRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.AddRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.AddRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.addRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/AddRole',
      request,
      metadata || {},
      methodDescriptor_AppService_AddRole,
      callback);
};


/**
 * @param {!proto.viam.app.v1.AddRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.AddRoleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.addRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/AddRole',
      request,
      metadata || {},
      methodDescriptor_AppService_AddRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.RemoveRoleRequest,
 *   !proto.viam.app.v1.RemoveRoleResponse>}
 */
const methodDescriptor_AppService_RemoveRole = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/RemoveRole',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.RemoveRoleRequest,
  proto.viam.app.v1.RemoveRoleResponse,
  /**
   * @param {!proto.viam.app.v1.RemoveRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.RemoveRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.RemoveRoleRequest,
 *   !proto.viam.app.v1.RemoveRoleResponse>}
 */
const methodInfo_AppService_RemoveRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.RemoveRoleResponse,
  /**
   * @param {!proto.viam.app.v1.RemoveRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.RemoveRoleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.RemoveRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.RemoveRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.RemoveRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.removeRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/RemoveRole',
      request,
      metadata || {},
      methodDescriptor_AppService_RemoveRole,
      callback);
};


/**
 * @param {!proto.viam.app.v1.RemoveRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.RemoveRoleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.removeRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/RemoveRole',
      request,
      metadata || {},
      methodDescriptor_AppService_RemoveRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ChangeRoleRequest,
 *   !proto.viam.app.v1.ChangeRoleResponse>}
 */
const methodDescriptor_AppService_ChangeRole = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ChangeRole',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ChangeRoleRequest,
  proto.viam.app.v1.ChangeRoleResponse,
  /**
   * @param {!proto.viam.app.v1.ChangeRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ChangeRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ChangeRoleRequest,
 *   !proto.viam.app.v1.ChangeRoleResponse>}
 */
const methodInfo_AppService_ChangeRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ChangeRoleResponse,
  /**
   * @param {!proto.viam.app.v1.ChangeRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ChangeRoleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ChangeRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ChangeRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ChangeRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.changeRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ChangeRole',
      request,
      metadata || {},
      methodDescriptor_AppService_ChangeRole,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ChangeRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ChangeRoleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.changeRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ChangeRole',
      request,
      metadata || {},
      methodDescriptor_AppService_ChangeRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListAuthorizationsRequest,
 *   !proto.viam.app.v1.ListAuthorizationsResponse>}
 */
const methodDescriptor_AppService_ListAuthorizations = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListAuthorizations',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListAuthorizationsRequest,
  proto.viam.app.v1.ListAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.ListAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListAuthorizationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListAuthorizationsRequest,
 *   !proto.viam.app.v1.ListAuthorizationsResponse>}
 */
const methodInfo_AppService_ListAuthorizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.ListAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListAuthorizationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListAuthorizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListAuthorizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listAuthorizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListAuthorizations,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListAuthorizationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listAuthorizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_ListAuthorizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CheckPermissionsRequest,
 *   !proto.viam.app.v1.CheckPermissionsResponse>}
 */
const methodDescriptor_AppService_CheckPermissions = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CheckPermissions',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CheckPermissionsRequest,
  proto.viam.app.v1.CheckPermissionsResponse,
  /**
   * @param {!proto.viam.app.v1.CheckPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CheckPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CheckPermissionsRequest,
 *   !proto.viam.app.v1.CheckPermissionsResponse>}
 */
const methodInfo_AppService_CheckPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CheckPermissionsResponse,
  /**
   * @param {!proto.viam.app.v1.CheckPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CheckPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CheckPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CheckPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CheckPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.checkPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CheckPermissions',
      request,
      metadata || {},
      methodDescriptor_AppService_CheckPermissions,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CheckPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CheckPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.checkPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CheckPermissions',
      request,
      metadata || {},
      methodDescriptor_AppService_CheckPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateModuleRequest,
 *   !proto.viam.app.v1.CreateModuleResponse>}
 */
const methodDescriptor_AppService_CreateModule = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateModule',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateModuleRequest,
  proto.viam.app.v1.CreateModuleResponse,
  /**
   * @param {!proto.viam.app.v1.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateModuleRequest,
 *   !proto.viam.app.v1.CreateModuleResponse>}
 */
const methodInfo_AppService_CreateModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateModuleResponse,
  /**
   * @param {!proto.viam.app.v1.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateModuleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateModule',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateModule,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateModuleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateModule',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.UpdateModuleRequest,
 *   !proto.viam.app.v1.UpdateModuleResponse>}
 */
const methodDescriptor_AppService_UpdateModule = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/UpdateModule',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.UpdateModuleRequest,
  proto.viam.app.v1.UpdateModuleResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.UpdateModuleRequest,
 *   !proto.viam.app.v1.UpdateModuleResponse>}
 */
const methodInfo_AppService_UpdateModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.UpdateModuleResponse,
  /**
   * @param {!proto.viam.app.v1.UpdateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.UpdateModuleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.UpdateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.UpdateModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.UpdateModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.updateModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateModule',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateModule,
      callback);
};


/**
 * @param {!proto.viam.app.v1.UpdateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.UpdateModuleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.updateModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/UpdateModule',
      request,
      metadata || {},
      methodDescriptor_AppService_UpdateModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetModuleRequest,
 *   !proto.viam.app.v1.GetModuleResponse>}
 */
const methodDescriptor_AppService_GetModule = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/GetModule',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetModuleRequest,
  proto.viam.app.v1.GetModuleResponse,
  /**
   * @param {!proto.viam.app.v1.GetModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetModuleRequest,
 *   !proto.viam.app.v1.GetModuleResponse>}
 */
const methodInfo_AppService_GetModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetModuleResponse,
  /**
   * @param {!proto.viam.app.v1.GetModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetModuleResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.getModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/GetModule',
      request,
      metadata || {},
      methodDescriptor_AppService_GetModule,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetModuleResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.getModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/GetModule',
      request,
      metadata || {},
      methodDescriptor_AppService_GetModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListModulesRequest,
 *   !proto.viam.app.v1.ListModulesResponse>}
 */
const methodDescriptor_AppService_ListModules = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListModules',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListModulesRequest,
  proto.viam.app.v1.ListModulesResponse,
  /**
   * @param {!proto.viam.app.v1.ListModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListModulesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListModulesRequest,
 *   !proto.viam.app.v1.ListModulesResponse>}
 */
const methodInfo_AppService_ListModules = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListModulesResponse,
  /**
   * @param {!proto.viam.app.v1.ListModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListModulesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListModulesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListModulesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listModules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListModules',
      request,
      metadata || {},
      methodDescriptor_AppService_ListModules,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListModulesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listModules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListModules',
      request,
      metadata || {},
      methodDescriptor_AppService_ListModules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateKeyRequest,
 *   !proto.viam.app.v1.CreateKeyResponse>}
 */
const methodDescriptor_AppService_CreateKey = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateKey',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateKeyRequest,
  proto.viam.app.v1.CreateKeyResponse,
  /**
   * @param {!proto.viam.app.v1.CreateKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateKeyRequest,
 *   !proto.viam.app.v1.CreateKeyResponse>}
 */
const methodInfo_AppService_CreateKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateKeyResponse,
  /**
   * @param {!proto.viam.app.v1.CreateKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateKeyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateKey',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateKey,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateKeyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateKey',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.DeleteKeyRequest,
 *   !proto.viam.app.v1.DeleteKeyResponse>}
 */
const methodDescriptor_AppService_DeleteKey = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/DeleteKey',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.DeleteKeyRequest,
  proto.viam.app.v1.DeleteKeyResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.DeleteKeyRequest,
 *   !proto.viam.app.v1.DeleteKeyResponse>}
 */
const methodInfo_AppService_DeleteKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.DeleteKeyResponse,
  /**
   * @param {!proto.viam.app.v1.DeleteKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.DeleteKeyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.DeleteKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.DeleteKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.DeleteKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.deleteKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteKey',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteKey,
      callback);
};


/**
 * @param {!proto.viam.app.v1.DeleteKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.DeleteKeyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.deleteKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/DeleteKey',
      request,
      metadata || {},
      methodDescriptor_AppService_DeleteKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.ListKeysRequest,
 *   !proto.viam.app.v1.ListKeysResponse>}
 */
const methodDescriptor_AppService_ListKeys = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/ListKeys',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.ListKeysRequest,
  proto.viam.app.v1.ListKeysResponse,
  /**
   * @param {!proto.viam.app.v1.ListKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.ListKeysRequest,
 *   !proto.viam.app.v1.ListKeysResponse>}
 */
const methodInfo_AppService_ListKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.ListKeysResponse,
  /**
   * @param {!proto.viam.app.v1.ListKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.ListKeysResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.ListKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.ListKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.ListKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.listKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/ListKeys',
      request,
      metadata || {},
      methodDescriptor_AppService_ListKeys,
      callback);
};


/**
 * @param {!proto.viam.app.v1.ListKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.ListKeysResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.listKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/ListKeys',
      request,
      metadata || {},
      methodDescriptor_AppService_ListKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.RotateKeyRequest,
 *   !proto.viam.app.v1.RotateKeyResponse>}
 */
const methodDescriptor_AppService_RotateKey = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/RotateKey',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.RotateKeyRequest,
  proto.viam.app.v1.RotateKeyResponse,
  /**
   * @param {!proto.viam.app.v1.RotateKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.RotateKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.RotateKeyRequest,
 *   !proto.viam.app.v1.RotateKeyResponse>}
 */
const methodInfo_AppService_RotateKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.RotateKeyResponse,
  /**
   * @param {!proto.viam.app.v1.RotateKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.RotateKeyResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.RotateKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.RotateKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.RotateKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.rotateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/RotateKey',
      request,
      metadata || {},
      methodDescriptor_AppService_RotateKey,
      callback);
};


/**
 * @param {!proto.viam.app.v1.RotateKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.RotateKeyResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.rotateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/RotateKey',
      request,
      metadata || {},
      methodDescriptor_AppService_RotateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest,
 *   !proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse>}
 */
const methodDescriptor_AppService_CreateKeyFromExistingKeyAuthorizations = new grpc.web.MethodDescriptor(
  '/viam.app.v1.AppService/CreateKeyFromExistingKeyAuthorizations',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest,
  proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest,
 *   !proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse>}
 */
const methodInfo_AppService_CreateKeyFromExistingKeyAuthorizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse,
  /**
   * @param {!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.AppServiceClient.prototype.createKeyFromExistingKeyAuthorizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateKeyFromExistingKeyAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateKeyFromExistingKeyAuthorizations,
      callback);
};


/**
 * @param {!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.CreateKeyFromExistingKeyAuthorizationsResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.AppServicePromiseClient.prototype.createKeyFromExistingKeyAuthorizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.AppService/CreateKeyFromExistingKeyAuthorizations',
      request,
      metadata || {},
      methodDescriptor_AppService_CreateKeyFromExistingKeyAuthorizations);
};


module.exports = proto.viam.app.v1;

