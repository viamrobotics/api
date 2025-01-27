// package: viam.component.switch.v1
// file: component/switch/v1/switch.proto

var component_switch_v1_switch_pb = require("../../../component/switch/v1/switch_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SwitchService = (function () {
  function SwitchService() {}
  SwitchService.serviceName = "viam.component.switch.v1.SwitchService";
  return SwitchService;
}());

SwitchService.SetPosition = {
  methodName: "SetPosition",
  service: SwitchService,
  requestStream: false,
  responseStream: false,
  requestType: component_switch_v1_switch_pb.SetPositionRequest,
  responseType: component_switch_v1_switch_pb.SetPositionResponse
};

SwitchService.GetPosition = {
  methodName: "GetPosition",
  service: SwitchService,
  requestStream: false,
  responseStream: false,
  requestType: component_switch_v1_switch_pb.GetPositionRequest,
  responseType: component_switch_v1_switch_pb.GetPositionResponse
};

SwitchService.GetNumberOfPositions = {
  methodName: "GetNumberOfPositions",
  service: SwitchService,
  requestStream: false,
  responseStream: false,
  requestType: component_switch_v1_switch_pb.GetNumberOfPositionsRequest,
  responseType: component_switch_v1_switch_pb.GetNumberOfPositionsResponse
};

SwitchService.DoCommand = {
  methodName: "DoCommand",
  service: SwitchService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.SwitchService = SwitchService;

function SwitchServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SwitchServiceClient.prototype.setPosition = function setPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SwitchService.SetPosition, {
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

SwitchServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SwitchService.GetPosition, {
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

SwitchServiceClient.prototype.getNumberOfPositions = function getNumberOfPositions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SwitchService.GetNumberOfPositions, {
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

SwitchServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SwitchService.DoCommand, {
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

exports.SwitchServiceClient = SwitchServiceClient;

