// package: viam.app.package.v1
// file: app/package/v1/package.proto

var app_package_v1_package_pb = require("../../../app/package/v1/package_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PackageService = (function () {
  function PackageService() {}
  PackageService.serviceName = "viam.app.package.v1.PackageService";
  return PackageService;
}());

PackageService.AddPackage = {
  methodName: "AddPackage",
  service: PackageService,
  requestStream: true,
  responseStream: false,
  requestType: app_package_v1_package_pb.AddPackageRequest,
  responseType: app_package_v1_package_pb.AddPackageResponse
};

PackageService.DeletePackage = {
  methodName: "DeletePackage",
  service: PackageService,
  requestStream: false,
  responseStream: false,
  requestType: app_package_v1_package_pb.DeletePackageRequest,
  responseType: app_package_v1_package_pb.DeletePackageResponse
};

PackageService.GetPackages = {
  methodName: "GetPackages",
  service: PackageService,
  requestStream: false,
  responseStream: false,
  requestType: app_package_v1_package_pb.GetPackagesRequest,
  responseType: app_package_v1_package_pb.GetPackagesResponse
};

exports.PackageService = PackageService;

function PackageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PackageServiceClient.prototype.addPackage = function addPackage(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(PackageService.AddPackage, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

PackageServiceClient.prototype.deletePackage = function deletePackage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PackageService.DeletePackage, {
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

PackageServiceClient.prototype.getPackages = function getPackages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PackageService.GetPackages, {
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

exports.PackageServiceClient = PackageServiceClient;

