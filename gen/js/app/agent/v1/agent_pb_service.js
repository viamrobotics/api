// package: viam.app.agent.v1
// file: app/agent/v1/agent.proto

var app_agent_v1_agent_pb = require("../../../app/agent/v1/agent_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentAppService = (function () {
  function AgentAppService() {}
  AgentAppService.serviceName = "viam.app.agent.v1.AgentAppService";
  return AgentAppService;
}());

AgentAppService.GetAgentConfig = {
  methodName: "GetAgentConfig",
  service: AgentAppService,
  requestStream: false,
  responseStream: false,
  requestType: app_agent_v1_agent_pb.GetAgentConfigRequest,
  responseType: app_agent_v1_agent_pb.GetAgentConfigResponse
};

AgentAppService.UpdateAgentConfig = {
  methodName: "UpdateAgentConfig",
  service: AgentAppService,
  requestStream: false,
  responseStream: false,
  requestType: app_agent_v1_agent_pb.UpdateAgentConfigRequest,
  responseType: app_agent_v1_agent_pb.UpdateAgentConfigResponse
};

exports.AgentAppService = AgentAppService;

function AgentAppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentAppServiceClient.prototype.getAgentConfig = function getAgentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentAppService.GetAgentConfig, {
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

AgentAppServiceClient.prototype.updateAgentConfig = function updateAgentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentAppService.UpdateAgentConfig, {
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

exports.AgentAppServiceClient = AgentAppServiceClient;

var AgentDeviceService = (function () {
  function AgentDeviceService() {}
  AgentDeviceService.serviceName = "viam.app.agent.v1.AgentDeviceService";
  return AgentDeviceService;
}());

AgentDeviceService.DeviceAgentConfig = {
  methodName: "DeviceAgentConfig",
  service: AgentDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: app_agent_v1_agent_pb.DeviceAgentConfigRequest,
  responseType: app_agent_v1_agent_pb.DeviceAgentConfigResponse
};

exports.AgentDeviceService = AgentDeviceService;

function AgentDeviceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentDeviceServiceClient.prototype.deviceAgentConfig = function deviceAgentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentDeviceService.DeviceAgentConfig, {
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

exports.AgentDeviceServiceClient = AgentDeviceServiceClient;

