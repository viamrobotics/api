// package: viam.service.mlmodel.v1
// file: service/mlmodel/v1/mlmodel.proto

var service_mlmodel_v1_mlmodel_pb = require("../../../service/mlmodel/v1/mlmodel_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MLModelService = (function () {
  function MLModelService() {}
  MLModelService.serviceName = "viam.service.mlmodel.v1.MLModelService";
  return MLModelService;
}());

MLModelService.Infer = {
  methodName: "Infer",
  service: MLModelService,
  requestStream: false,
  responseStream: false,
  requestType: service_mlmodel_v1_mlmodel_pb.InferRequest,
  responseType: service_mlmodel_v1_mlmodel_pb.InferResponse
};

MLModelService.Metadata = {
  methodName: "Metadata",
  service: MLModelService,
  requestStream: false,
  responseStream: false,
  requestType: service_mlmodel_v1_mlmodel_pb.MetadataRequest,
  responseType: service_mlmodel_v1_mlmodel_pb.MetadataResponse
};

exports.MLModelService = MLModelService;

function MLModelServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MLModelServiceClient.prototype.infer = function infer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLModelService.Infer, {
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

MLModelServiceClient.prototype.metadata = function metadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLModelService.Metadata, {
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

exports.MLModelServiceClient = MLModelServiceClient;

