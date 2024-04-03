/**
 * @fileoverview gRPC-Web generated client stub for viam.app.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: app/v1/billing.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.v1 = require('./billing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.BillingServiceClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.BillingServicePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetCurrentMonthUsageRequest,
 *   !proto.viam.app.v1.GetCurrentMonthUsageResponse>}
 */
const methodDescriptor_BillingService_GetCurrentMonthUsage = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetCurrentMonthUsage',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetCurrentMonthUsageRequest,
  proto.viam.app.v1.GetCurrentMonthUsageResponse,
  /**
   * @param {!proto.viam.app.v1.GetCurrentMonthUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetCurrentMonthUsageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetCurrentMonthUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetCurrentMonthUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetCurrentMonthUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getCurrentMonthUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetCurrentMonthUsage',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetCurrentMonthUsage,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetCurrentMonthUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetCurrentMonthUsageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getCurrentMonthUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetCurrentMonthUsage',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetCurrentMonthUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetOrgBillingInformationRequest,
 *   !proto.viam.app.v1.GetOrgBillingInformationResponse>}
 */
const methodDescriptor_BillingService_GetOrgBillingInformation = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetOrgBillingInformation',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetOrgBillingInformationRequest,
  proto.viam.app.v1.GetOrgBillingInformationResponse,
  /**
   * @param {!proto.viam.app.v1.GetOrgBillingInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetOrgBillingInformationResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetOrgBillingInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetOrgBillingInformationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetOrgBillingInformationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getOrgBillingInformation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetOrgBillingInformation',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetOrgBillingInformation,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetOrgBillingInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetOrgBillingInformationResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getOrgBillingInformation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetOrgBillingInformation',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetOrgBillingInformation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetInvoicesSummaryRequest,
 *   !proto.viam.app.v1.GetInvoicesSummaryResponse>}
 */
const methodDescriptor_BillingService_GetInvoicesSummary = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetInvoicesSummary',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetInvoicesSummaryRequest,
  proto.viam.app.v1.GetInvoicesSummaryResponse,
  /**
   * @param {!proto.viam.app.v1.GetInvoicesSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetInvoicesSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetInvoicesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.v1.GetInvoicesSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetInvoicesSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getInvoicesSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoicesSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoicesSummary,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetInvoicesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetInvoicesSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getInvoicesSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoicesSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoicesSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetInvoicePdfRequest,
 *   !proto.viam.app.v1.GetInvoicePdfResponse>}
 */
const methodDescriptor_BillingService_GetInvoicePdf = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetInvoicePdf',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.viam.app.v1.GetInvoicePdfRequest,
  proto.viam.app.v1.GetInvoicePdfResponse,
  /**
   * @param {!proto.viam.app.v1.GetInvoicePdfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetInvoicePdfResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetInvoicePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetInvoicePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getInvoicePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoicePdf',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoicePdf);
};


/**
 * @param {!proto.viam.app.v1.GetInvoicePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetInvoicePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getInvoicePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoicePdf',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoicePdf);
};


module.exports = proto.viam.app.v1;

