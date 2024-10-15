// package: viam.service.shell.v1
// file: service/shell/v1/shell.proto

var service_shell_v1_shell_pb = require("../../../service/shell/v1/shell_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
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

ShellService.CopyFilesTophysicalDevice = {
  methodName: "CopyFilesTophysicalDevice",
  service: ShellService,
  requestStream: true,
  responseStream: true,
  requestType: service_shell_v1_shell_pb.CopyFilesTophysicalDeviceRequest,
  responseType: service_shell_v1_shell_pb.CopyFilesTophysicalDeviceResponse
};

ShellService.CopyFilesFromphysicalDevice = {
  methodName: "CopyFilesFromphysicalDevice",
  service: ShellService,
  requestStream: true,
  responseStream: true,
  requestType: service_shell_v1_shell_pb.CopyFilesFromphysicalDeviceRequest,
  responseType: service_shell_v1_shell_pb.CopyFilesFromphysicalDeviceResponse
};

ShellService.DoCommand = {
  methodName: "DoCommand",
  service: ShellService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
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

ShellServiceClient.prototype.copyFilesTophysicalDevice = function copyFilesTophysicalDevice(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ShellService.CopyFilesTophysicalDevice, {
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

ShellServiceClient.prototype.copyFilesFromphysicalDevice = function copyFilesFromphysicalDevice(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ShellService.CopyFilesFromphysicalDevice, {
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

ShellServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ShellService.DoCommand, {
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

exports.ShellServiceClient = ShellServiceClient;

