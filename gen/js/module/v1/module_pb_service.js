// package: viam.module.v1
// file: module/v1/module.proto

var module_v1_module_pb = require("../../module/v1/module_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ModuleService = (function () {
  function ModuleService() {}
  ModuleService.serviceName = "viam.module.v1.ModuleService";
  return ModuleService;
}());

ModuleService.AddComponent = {
  methodName: "AddComponent",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.AddComponentRequest,
  responseType: module_v1_module_pb.AddComponentResponse
};

ModuleService.ReconfigureComponent = {
  methodName: "ReconfigureComponent",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.ReconfigureComponentRequest,
  responseType: module_v1_module_pb.ReconfigureComponentResponse
};

ModuleService.AddService = {
  methodName: "AddService",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.AddServiceRequest,
  responseType: module_v1_module_pb.AddServiceResponse
};

ModuleService.ReconfigureService = {
  methodName: "ReconfigureService",
  service: ModuleService,
  requestStream: false,
  responseStream: false,
  requestType: module_v1_module_pb.ReconfigureServiceRequest,
  responseType: module_v1_module_pb.ReconfigureServiceResponse
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

exports.ModuleService = ModuleService;

function ModuleServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ModuleServiceClient.prototype.addComponent = function addComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.AddComponent, {
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

ModuleServiceClient.prototype.reconfigureComponent = function reconfigureComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.ReconfigureComponent, {
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

ModuleServiceClient.prototype.addService = function addService(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.AddService, {
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

ModuleServiceClient.prototype.reconfigureService = function reconfigureService(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModuleService.ReconfigureService, {
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

exports.ModuleServiceClient = ModuleServiceClient;

