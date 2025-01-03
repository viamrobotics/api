// package: viam.service.discovery.v1
// file: service/discovery/v1/discovery.proto

var service_discovery_v1_discovery_pb = require("../../../service/discovery/v1/discovery_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DiscoveryService = (function () {
  function DiscoveryService() {}
  DiscoveryService.serviceName = "viam.service.discovery.v1.DiscoveryService";
  return DiscoveryService;
}());

DiscoveryService.DiscoverResources = {
  methodName: "DiscoverResources",
  service: DiscoveryService,
  requestStream: false,
  responseStream: false,
  requestType: service_discovery_v1_discovery_pb.DiscoverResourcesRequest,
  responseType: service_discovery_v1_discovery_pb.DiscoverResourcesResponse
};

DiscoveryService.DoCommand = {
  methodName: "DoCommand",
  service: DiscoveryService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.DiscoveryService = DiscoveryService;

function DiscoveryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DiscoveryServiceClient.prototype.discoverResources = function discoverResources(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscoveryService.DiscoverResources, {
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

DiscoveryServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscoveryService.DoCommand, {
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

exports.DiscoveryServiceClient = DiscoveryServiceClient;

