// package: viam.service.mlmodels.v1
// file: service/mlmodels/v1/mlmodels.proto

var service_mlmodels_v1_mlmodels_pb = require("../../../service/mlmodels/v1/mlmodels_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MLModelService = (function () {
  function MLModelService() {}
  MLModelService.serviceName = "viam.service.mlmodels.v1.MLModelService";
  return MLModelService;
}());

MLModelService.Infer = {
  methodName: "Infer",
  service: MLModelService,
  requestStream: false,
  responseStream: false,
  requestType: service_mlmodels_v1_mlmodels_pb.InferRequest,
  responseType: service_mlmodels_v1_mlmodels_pb.InferResponse
};

MLModelService.Metadata = {
  methodName: "Metadata",
  service: MLModelService,
  requestStream: false,
  responseStream: false,
  requestType: service_mlmodels_v1_mlmodels_pb.MetadataRequest,
  responseType: service_mlmodels_v1_mlmodels_pb.MetadataResponse
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

