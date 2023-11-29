// package: viam.app.build.v1
// file: app/build/v1/build.proto

var app_build_v1_build_pb = require("../../../app/build/v1/build_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BuildService = (function () {
  function BuildService() {}
  BuildService.serviceName = "viam.app.build.v1.BuildService";
  return BuildService;
}());

BuildService.StartBuild = {
  methodName: "StartBuild",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.StartBuildRequest,
  responseType: app_build_v1_build_pb.StartBuildResponse
};

BuildService.GetLogs = {
  methodName: "GetLogs",
  service: BuildService,
  requestStream: false,
  responseStream: true,
  requestType: app_build_v1_build_pb.GetLogsRequest,
  responseType: app_build_v1_build_pb.GetLogsResponse
};

BuildService.ListJobs = {
  methodName: "ListJobs",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.ListJobsRequest,
  responseType: app_build_v1_build_pb.ListJobsResponse
};

exports.BuildService = BuildService;

function BuildServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BuildServiceClient.prototype.startBuild = function startBuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.StartBuild, {
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

BuildServiceClient.prototype.getLogs = function getLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BuildService.GetLogs, {
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

BuildServiceClient.prototype.listJobs = function listJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.ListJobs, {
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

exports.BuildServiceClient = BuildServiceClient;

