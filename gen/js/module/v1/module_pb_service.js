// package: viam.module.v1
// file: module/v1/module.proto

var module_v1_module_pb = require("../../module/v1/module_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ModuleService = (function () {
  function ModuleService() {}
  ModuleService.serviceName = "viam.module.v1.ModuleService";
  return ModuleService;
}());

ModuleService.AddResource = {
  methodName: "AddResource",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.AddResourceRequest,
  responseType: module_v1_module_pb.AddResourceResponse
};

ModuleService.ReconfigureResource = {
  methodName: "ReconfigureResource",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.ReconfigureResourceRequest,
  responseType: module_v1_module_pb.ReconfigureResourceResponse
};

ModuleService.RemoveResource = {
  methodName: "RemoveResource",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.RemoveResourceRequest,
  responseType: module_v1_module_pb.RemoveResourceResponse
};

ModuleService.Ready = {
  methodName: "Ready",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.ReadyRequest,
  responseType: module_v1_module_pb.ReadyResponse
};

ModuleService.Validate = {
  methodName: "Validate",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.ValidateRequest,
  responseType: module_v1_module_pb.ValidateResponse
};

exports.ModuleService = ModuleService;

function ModuleServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ModuleServiceClient.prototype.addResource = function addResource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.AddResource, {
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

ModuleServiceClient.prototype.reconfigureResource = function reconfigureResource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.ReconfigureResource, {
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

ModuleServiceClient.prototype.removeResource = function removeResource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.RemoveResource, {
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

ModuleServiceClient.prototype.ready = function ready(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.Ready, {
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

ModuleServiceClient.prototype.validate = function validate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.Validate, {
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

exports.ModuleServiceClient = ModuleServiceClient;

