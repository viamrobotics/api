// package: viam.app.v1
// file: app/v1/robot.proto

var app_v1_robot_pb = require("../../app/v1/robot_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RobotService = (function () {
  function RobotService() {}
  RobotService.serviceName = "viam.app.v1.RobotService";
  return RobotService;
}());

RobotService.Config = {
  methodName: "Config",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_robot_pb.ConfigRequest,
  responseType: app_v1_robot_pb.ConfigResponse
};

RobotService.Certificate = {
  methodName: "Certificate",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_robot_pb.CertificateRequest,
  responseType: app_v1_robot_pb.CertificateResponse
};

RobotService.Log = {
  methodName: "Log",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_robot_pb.LogRequest,
  responseType: app_v1_robot_pb.LogResponse
};

RobotService.NeedsRestart = {
  methodName: "NeedsRestart",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_robot_pb.NeedsRestartRequest,
  responseType: app_v1_robot_pb.NeedsRestartResponse
};

exports.RobotService = RobotService;

function RobotServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RobotServiceClient.prototype.config = function config(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.Config, {
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

RobotServiceClient.prototype.certificate = function certificate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.Certificate, {
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

RobotServiceClient.prototype.log = function log(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.Log, {
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

RobotServiceClient.prototype.needsRestart = function needsRestart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.NeedsRestart, {
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

exports.RobotServiceClient = RobotServiceClient;

