// package: viam.service.slam.v1
// file: service/slam/v1/slam.proto

var service_slam_v1_slam_pb = require("../../../service/slam/v1/slam_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SLAMService = (function () {
  function SLAMService() {}
  SLAMService.serviceName = "viam.service.slam.v1.SLAMService";
  return SLAMService;
}());

SLAMService.GetPosition = {
  methodName: "GetPosition",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetPositionRequest,
  responseType: service_slam_v1_slam_pb.GetPositionResponse
};

SLAMService.GetPointCloudMap = {
  methodName: "GetPointCloudMap",
  service: SLAMService,
  requestStream: false,
  responseStream: true,
  requestType: service_slam_v1_slam_pb.GetPointCloudMapRequest,
  responseType: service_slam_v1_slam_pb.GetPointCloudMapResponse
};

SLAMService.GetInternalState = {
  methodName: "GetInternalState",
  service: SLAMService,
  requestStream: false,
  responseStream: true,
  requestType: service_slam_v1_slam_pb.GetInternalStateRequest,
  responseType: service_slam_v1_slam_pb.GetInternalStateResponse
};

SLAMService.GetProperties = {
  methodName: "GetProperties",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetPropertiesRequest,
  responseType: service_slam_v1_slam_pb.GetPropertiesResponse
};

SLAMService.DoCommand = {
  methodName: "DoCommand",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.SLAMService = SLAMService;

function SLAMServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SLAMServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetPosition, {
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

SLAMServiceClient.prototype.getPointCloudMap = function getPointCloudMap(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SLAMService.GetPointCloudMap, {
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

SLAMServiceClient.prototype.getInternalState = function getInternalState(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SLAMService.GetInternalState, {
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

SLAMServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetProperties, {
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

SLAMServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.DoCommand, {
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

exports.SLAMServiceClient = SLAMServiceClient;

