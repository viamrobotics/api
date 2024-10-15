// package: viam.app.v1
// file: app/v1/physicalDevice.proto

var app_v1_physicalDevice_pb = require("../../app/v1/physicalDevice_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var physicalDeviceService = (function () {
  function physicalDeviceService() {}
  physicalDeviceService.serviceName = "viam.app.v1.physicalDeviceService";
  return physicalDeviceService;
}());

physicalDeviceService.Config = {
  methodName: "Config",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_physicalDevice_pb.ConfigRequest,
  responseType: app_v1_physicalDevice_pb.ConfigResponse
};

physicalDeviceService.Certificate = {
  methodName: "Certificate",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_physicalDevice_pb.CertificateRequest,
  responseType: app_v1_physicalDevice_pb.CertificateResponse
};

physicalDeviceService.Log = {
  methodName: "Log",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_physicalDevice_pb.LogRequest,
  responseType: app_v1_physicalDevice_pb.LogResponse
};

physicalDeviceService.NeedsRestart = {
  methodName: "NeedsRestart",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_physicalDevice_pb.NeedsRestartRequest,
  responseType: app_v1_physicalDevice_pb.NeedsRestartResponse
};

exports.physicalDeviceService = physicalDeviceService;

function physicalDeviceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

physicalDeviceServiceClient.prototype.config = function config(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.Config, {
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

physicalDeviceServiceClient.prototype.certificate = function certificate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.Certificate, {
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

physicalDeviceServiceClient.prototype.log = function log(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.Log, {
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

physicalDeviceServiceClient.prototype.needsRestart = function needsRestart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.NeedsRestart, {
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

exports.physicalDeviceServiceClient = physicalDeviceServiceClient;

