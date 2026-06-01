// package: viam.app.v1
// file: app/v1/billing.proto

var app_v1_billing_pb = require("../../app/v1/billing_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "viam.app.v1.BillingService";
  return BillingService;
}());

BillingService.GetCurrentMonthUsage = {
  methodName: "GetCurrentMonthUsage",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetCurrentMonthUsageRequest,
  responseType: app_v1_billing_pb.GetCurrentMonthUsageResponse
};

BillingService.GetOrgBillingInformation = {
  methodName: "GetOrgBillingInformation",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetOrgBillingInformationRequest,
  responseType: app_v1_billing_pb.GetOrgBillingInformationResponse
};

BillingService.GetInvoicesSummary = {
  methodName: "GetInvoicesSummary",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetInvoicesSummaryRequest,
  responseType: app_v1_billing_pb.GetInvoicesSummaryResponse
};

BillingService.GetInvoicePdf = {
  methodName: "GetInvoicePdf",
  service: BillingService,
  requestStream: false,
  responseStream: true,
  requestType: app_v1_billing_pb.GetInvoicePdfRequest,
  responseType: app_v1_billing_pb.GetInvoicePdfResponse
};

BillingService.SendPaymentRequiredEmail = {
  methodName: "SendPaymentRequiredEmail",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.SendPaymentRequiredEmailRequest,
  responseType: app_v1_billing_pb.SendPaymentRequiredEmailResponse
};

BillingService.GetAvailableBillingTiers = {
  methodName: "GetAvailableBillingTiers",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetAvailableBillingTiersRequest,
  responseType: app_v1_billing_pb.GetAvailableBillingTiersResponse
};

BillingService.UpdateOrganizationBillingTier = {
  methodName: "UpdateOrganizationBillingTier",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.UpdateOrganizationBillingTierRequest,
  responseType: app_v1_billing_pb.UpdateOrganizationBillingTierResponse
};

BillingService.GetLocationBillingOrganization = {
  methodName: "GetLocationBillingOrganization",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetLocationBillingOrganizationRequest,
  responseType: app_v1_billing_pb.GetLocationBillingOrganizationResponse
};

BillingService.UpdateLocationBillingOrganization = {
  methodName: "UpdateLocationBillingOrganization",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.UpdateLocationBillingOrganizationRequest,
  responseType: app_v1_billing_pb.UpdateLocationBillingOrganizationResponse
};

BillingService.ChargeOrganization = {
  methodName: "ChargeOrganization",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.ChargeOrganizationRequest,
  responseType: app_v1_billing_pb.ChargeOrganizationResponse
};

BillingService.CreateInvoiceAndChargeImmediately = {
  methodName: "CreateInvoiceAndChargeImmediately",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyRequest,
  responseType: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.getCurrentMonthUsage = function getCurrentMonthUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetCurrentMonthUsage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getOrgBillingInformation = function getOrgBillingInformation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetOrgBillingInformation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getInvoicesSummary = function getInvoicesSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetInvoicesSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getInvoicePdf = function getInvoicePdf(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BillingService.GetInvoicePdf, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.sendPaymentRequiredEmail = function sendPaymentRequiredEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.SendPaymentRequiredEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getAvailableBillingTiers = function getAvailableBillingTiers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetAvailableBillingTiers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.updateOrganizationBillingTier = function updateOrganizationBillingTier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateOrganizationBillingTier, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getLocationBillingOrganization = function getLocationBillingOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetLocationBillingOrganization, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.updateLocationBillingOrganization = function updateLocationBillingOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateLocationBillingOrganization, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.chargeOrganization = function chargeOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ChargeOrganization, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.createInvoiceAndChargeImmediately = function createInvoiceAndChargeImmediately(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateInvoiceAndChargeImmediately, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BillingServiceClient = BillingServiceClient;

