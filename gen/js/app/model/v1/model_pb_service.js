// package: viam.app.model.v1
// file: app/model/v1/model.proto

var app_model_v1_model_pb = require("../../../app/model/v1/model_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ModelService = (function () {
  function ModelService() {}
  ModelService.serviceName = "viam.app.model.v1.ModelService";
  return ModelService;
}());

ModelService.Upload = {
  methodName: "Upload",
  service: ModelService,
  requestStream: true,
  responseStream: false,
  requestType: app_model_v1_model_pb.UploadRequest,
  responseType: app_model_v1_model_pb.UploadResponse
};

ModelService.Delete = {
  methodName: "Delete",
  service: ModelService,
  requestStream: false,
  responseStream: false,
  requestType: app_model_v1_model_pb.DeleteRequest,
  responseType: app_model_v1_model_pb.DeleteResponse
};

ModelService.Deploy = {
  methodName: "Deploy",
  service: ModelService,
  requestStream: false,
  responseStream: false,
  requestType: app_model_v1_model_pb.DeployRequest,
  responseType: app_model_v1_model_pb.DeployResponse
};

ModelService.Info = {
  methodName: "Info",
  service: ModelService,
  requestStream: false,
  responseStream: false,
  requestType: app_model_v1_model_pb.InfoRequest,
  responseType: app_model_v1_model_pb.InfoResponse
};

exports.ModelService = ModelService;

function ModelServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ModelServiceClient.prototype.upload = function upload(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(ModelService.Upload, {
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

ModelServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModelService.Delete, {
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

ModelServiceClient.prototype.deploy = function deploy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModelService.Deploy, {
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

ModelServiceClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ModelService.Info, {
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

exports.ModelServiceClient = ModelServiceClient;

