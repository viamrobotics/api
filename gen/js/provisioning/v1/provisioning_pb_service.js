// package: viam.provisioning.v1
// file: provisioning/v1/provisioning.proto

var provisioning_v1_provisioning_pb = require("../../provisioning/v1/provisioning_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProvisioningService = (function () {
  function ProvisioningService() {}
  ProvisioningService.serviceName = "viam.provisioning.v1.ProvisioningService";
  return ProvisioningService;
}());

ProvisioningService.GetSmartphysicalDeviceStatus = {
  methodName: "GetSmartphysicalDeviceStatus",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.GetSmartphysicalDeviceStatusRequest,
  responseType: provisioning_v1_provisioning_pb.GetSmartphysicalDeviceStatusResponse
};

ProvisioningService.SetNetworkCredentials = {
  methodName: "SetNetworkCredentials",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.SetNetworkCredentialsRequest,
  responseType: provisioning_v1_provisioning_pb.SetNetworkCredentialsResponse
};

ProvisioningService.SetSmartphysicalDeviceCredentials = {
  methodName: "SetSmartphysicalDeviceCredentials",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.SetSmartphysicalDeviceCredentialsRequest,
  responseType: provisioning_v1_provisioning_pb.SetSmartphysicalDeviceCredentialsResponse
};

ProvisioningService.GetNetworkList = {
  methodName: "GetNetworkList",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.GetNetworkListRequest,
  responseType: provisioning_v1_provisioning_pb.GetNetworkListResponse
};

exports.ProvisioningService = ProvisioningService;

function ProvisioningServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProvisioningServiceClient.prototype.getSmartphysicalDeviceStatus = function getSmartphysicalDeviceStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.GetSmartphysicalDeviceStatus, {
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

ProvisioningServiceClient.prototype.setNetworkCredentials = function setNetworkCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.SetNetworkCredentials, {
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

ProvisioningServiceClient.prototype.setSmartphysicalDeviceCredentials = function setSmartphysicalDeviceCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.SetSmartphysicalDeviceCredentials, {
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

ProvisioningServiceClient.prototype.getNetworkList = function getNetworkList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.GetNetworkList, {
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

exports.ProvisioningServiceClient = ProvisioningServiceClient;

