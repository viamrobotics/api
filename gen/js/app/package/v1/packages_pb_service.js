// package: viam.app.packages.v1
// file: app/package/v1/packages.proto

var app_package_v1_packages_pb = require("../../../app/package/v1/packages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PackageService = (function () {
  function PackageService() {}
  PackageService.serviceName = "viam.app.packages.v1.PackageService";
  return PackageService;
}());

PackageService.CreatePackage = {
  methodName: "CreatePackage",
  service: PackageService,
  requestStream: true,
  responseStream: false,
  requestType: app_package_v1_packages_pb.CreatePackageRequest,
  responseType: app_package_v1_packages_pb.CreatePackageResponse
};

PackageService.DeletePackage = {
  methodName: "DeletePackage",
  service: PackageService,
  requestStream: false,
  responseStream: false,
  requestType: app_package_v1_packages_pb.DeletePackageRequest,
  responseType: app_package_v1_packages_pb.DeletePackageResponse
};

PackageService.GetPackage = {
  methodName: "GetPackage",
  service: PackageService,
  requestStream: false,
  responseStream: false,
  requestType: app_package_v1_packages_pb.GetPackageRequest,
  responseType: app_package_v1_packages_pb.GetPackageResponse
};

PackageService.ListPackages = {
  methodName: "ListPackages",
  service: PackageService,
  requestStream: false,
  responseStream: false,
  requestType: app_package_v1_packages_pb.ListPackagesRequest,
  responseType: app_package_v1_packages_pb.ListPackagesResponse
};

exports.PackageService = PackageService;

function PackageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PackageServiceClient.prototype.createPackage = function createPackage(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(PackageService.CreatePackage, {
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

PackageServiceClient.prototype.getPackage = function getPackage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PackageService.GetPackage, {
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

PackageServiceClient.prototype.listPackages = function listPackages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PackageService.ListPackages, {
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

