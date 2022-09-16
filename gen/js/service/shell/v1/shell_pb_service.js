// package: viam.service.shell.v1
// file: service/shell/v1/shell.proto

var service_shell_v1_shell_pb = require("../../../service/shell/v1/shell_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ShellService = (function () {
  function ShellService() {}
  ShellService.serviceName = "viam.service.shell.v1.ShellService";
  return ShellService;
}());

ShellService.Shell = {
  methodName: "Shell",
  service: ShellService,
  requestStream: true,
  responseStream: true,
  requestType: service_shell_v1_shell_pb.ShellRequest,
  responseType: service_shell_v1_shell_pb.ShellResponse
};

exports.ShellService = ShellService;

function ShellServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ShellServiceClient.prototype.shell = function shell(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ShellService.Shell, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ShellServiceClient = ShellServiceClient;

