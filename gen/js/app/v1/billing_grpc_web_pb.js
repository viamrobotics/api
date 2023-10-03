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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.v1 = require('./billing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.v1.BillingServiceClient =
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
proto.viam.app.v1.BillingServicePromiseClient =
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
 *   !proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest,
 *   !proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse>}
 */
const methodDescriptor_BillingService_GetCurrentMonthUsageSummary = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetCurrentMonthUsageSummary',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest,
  proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse,
  /**
   * @param {!proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest,
 *   !proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse>}
 */
const methodInfo_BillingService_GetCurrentMonthUsageSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse,
  /**
   * @param {!proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getCurrentMonthUsageSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetCurrentMonthUsageSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetCurrentMonthUsageSummary,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetCurrentMonthUsageSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetCurrentMonthUsageSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getCurrentMonthUsageSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetCurrentMonthUsageSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetCurrentMonthUsageSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetUnpaidBalanceRequest,
 *   !proto.viam.app.v1.GetUnpaidBalanceResponse>}
 */
const methodDescriptor_BillingService_GetUnpaidBalance = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetUnpaidBalance',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetUnpaidBalanceRequest,
  proto.viam.app.v1.GetUnpaidBalanceResponse,
  /**
   * @param {!proto.viam.app.v1.GetUnpaidBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetUnpaidBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetUnpaidBalanceRequest,
 *   !proto.viam.app.v1.GetUnpaidBalanceResponse>}
 */
const methodInfo_BillingService_GetUnpaidBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetUnpaidBalanceResponse,
  /**
   * @param {!proto.viam.app.v1.GetUnpaidBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetUnpaidBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetUnpaidBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetUnpaidBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetUnpaidBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getUnpaidBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetUnpaidBalance',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetUnpaidBalance,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetUnpaidBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetUnpaidBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getUnpaidBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetUnpaidBalance',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetUnpaidBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetInvoiceHistoryRequest,
 *   !proto.viam.app.v1.GetInvoiceHistoryResponse>}
 */
const methodDescriptor_BillingService_GetInvoiceHistory = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetInvoiceHistory',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetInvoiceHistoryRequest,
  proto.viam.app.v1.GetInvoiceHistoryResponse,
  /**
   * @param {!proto.viam.app.v1.GetInvoiceHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetInvoiceHistoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetInvoiceHistoryRequest,
 *   !proto.viam.app.v1.GetInvoiceHistoryResponse>}
 */
const methodInfo_BillingService_GetInvoiceHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetInvoiceHistoryResponse,
  /**
   * @param {!proto.viam.app.v1.GetInvoiceHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetInvoiceHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetInvoiceHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetInvoiceHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetInvoiceHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getInvoiceHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoiceHistory',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoiceHistory,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetInvoiceHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetInvoiceHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getInvoiceHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetInvoiceHistory',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetInvoiceHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetItemizedInvoiceRequest,
 *   !proto.viam.app.v1.GetItemizedInvoiceResponse>}
 */
const methodDescriptor_BillingService_GetItemizedInvoice = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetItemizedInvoice',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetItemizedInvoiceRequest,
  proto.viam.app.v1.GetItemizedInvoiceResponse,
  /**
   * @param {!proto.viam.app.v1.GetItemizedInvoiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetItemizedInvoiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetItemizedInvoiceRequest,
 *   !proto.viam.app.v1.GetItemizedInvoiceResponse>}
 */
const methodInfo_BillingService_GetItemizedInvoice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetItemizedInvoiceResponse,
  /**
   * @param {!proto.viam.app.v1.GetItemizedInvoiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetItemizedInvoiceResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetItemizedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetItemizedInvoiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetItemizedInvoiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getItemizedInvoice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetItemizedInvoice',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetItemizedInvoice,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetItemizedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetItemizedInvoiceResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getItemizedInvoice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetItemizedInvoice',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetItemizedInvoice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.v1.GetBillingSummaryRequest,
 *   !proto.viam.app.v1.GetBillingSummaryResponse>}
 */
const methodDescriptor_BillingService_GetBillingSummary = new grpc.web.MethodDescriptor(
  '/viam.app.v1.BillingService/GetBillingSummary',
  grpc.web.MethodType.UNARY,
  proto.viam.app.v1.GetBillingSummaryRequest,
  proto.viam.app.v1.GetBillingSummaryResponse,
  /**
   * @param {!proto.viam.app.v1.GetBillingSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetBillingSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetBillingSummaryRequest,
 *   !proto.viam.app.v1.GetBillingSummaryResponse>}
 */
const methodInfo_BillingService_GetBillingSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.viam.app.v1.GetBillingSummaryResponse,
  /**
   * @param {!proto.viam.app.v1.GetBillingSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.v1.GetBillingSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.v1.GetBillingSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetBillingSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.v1.GetBillingSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.v1.BillingServiceClient.prototype.getBillingSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetBillingSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetBillingSummary,
      callback);
};


/**
 * @param {!proto.viam.app.v1.GetBillingSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.v1.GetBillingSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.v1.BillingServicePromiseClient.prototype.getBillingSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.v1.BillingService/GetBillingSummary',
      request,
      metadata || {},
      methodDescriptor_BillingService_GetBillingSummary);
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetCurrentMonthUsageRequest,
 *   !proto.viam.app.v1.GetCurrentMonthUsageResponse>}
 */
const methodInfo_BillingService_GetCurrentMonthUsage = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetCurrentMonthUsageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetOrgBillingInformationRequest,
 *   !proto.viam.app.v1.GetOrgBillingInformationResponse>}
 */
const methodInfo_BillingService_GetOrgBillingInformation = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetOrgBillingInformationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetInvoicesSummaryRequest,
 *   !proto.viam.app.v1.GetInvoicesSummaryResponse>}
 */
const methodInfo_BillingService_GetInvoicesSummary = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.viam.app.v1.GetInvoicesSummaryResponse)}
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
 * @param {?Object<string, string>} metadata User defined
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.viam.app.v1.GetInvoicePdfRequest,
 *   !proto.viam.app.v1.GetInvoicePdfResponse>}
 */
const methodInfo_BillingService_GetInvoicePdf = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {?Object<string, string>} metadata User defined
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
 * @param {?Object<string, string>} metadata User defined
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

