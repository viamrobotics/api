// package: viam.provisioning.v1
// file: provisioning/v1/provisioning.proto

var provisioning_v1_provisioning_pb = require("../../provisioning/v1/provisioning_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProvisioningService = (function () {
  function ProvisioningService() {}
  ProvisioningService.serviceName = "viam.provisioning.v1.ProvisioningService";
  return ProvisioningService;
}());

ProvisioningService.GetSmartMachineStatus = {
  methodName: "GetSmartMachineStatus",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.GetSmartMachineStatusRequest,
  responseType: provisioning_v1_provisioning_pb.GetSmartMachineStatusResponse
};

ProvisioningService.SetNetworkCredentials = {
  methodName: "SetNetworkCredentials",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.SetNetworkCredentialsRequest,
  responseType: provisioning_v1_provisioning_pb.SetNetworkCredentialsResponse
};

ProvisioningService.SetSmartMachineCredentials = {
  methodName: "SetSmartMachineCredentials",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsRequest,
  responseType: provisioning_v1_provisioning_pb.SetSmartMachineCredentialsResponse
};

ProvisioningService.GetNetworkList = {
  methodName: "GetNetworkList",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.GetNetworkListRequest,
  responseType: provisioning_v1_provisioning_pb.GetNetworkListResponse
};

ProvisioningService.ExitProvisioning = {
  methodName: "ExitProvisioning",
  service: ProvisioningService,
  requestStream: false,
  responseStream: false,
  requestType: provisioning_v1_provisioning_pb.ExitProvisioningRequest,
  responseType: provisioning_v1_provisioning_pb.ExitProvisioningResponse
};

exports.ProvisioningService = ProvisioningService;

function ProvisioningServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProvisioningServiceClient.prototype.getSmartMachineStatus = function getSmartMachineStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.GetSmartMachineStatus, {
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

ProvisioningServiceClient.prototype.setSmartMachineCredentials = function setSmartMachineCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.SetSmartMachineCredentials, {
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

ProvisioningServiceClient.prototype.exitProvisioning = function exitProvisioning(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProvisioningService.ExitProvisioning, {
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

