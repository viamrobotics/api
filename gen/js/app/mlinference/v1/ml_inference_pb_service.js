// package: viam.app.mlinference.v1
// file: app/mlinference/v1/ml_inference.proto

var app_mlinference_v1_ml_inference_pb = require("../../../app/mlinference/v1/ml_inference_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MLInferenceService = (function () {
  function MLInferenceService() {}
  MLInferenceService.serviceName = "viam.app.mlinference.v1.MLInferenceService";
  return MLInferenceService;
}());

MLInferenceService.GetInference = {
  methodName: "GetInference",
  service: MLInferenceService,
  requestStream: false,
  responseStream: false,
  requestType: app_mlinference_v1_ml_inference_pb.GetInferenceRequest,
  responseType: app_mlinference_v1_ml_inference_pb.GetInferenceResponse
};

exports.MLInferenceService = MLInferenceService;

function MLInferenceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MLInferenceServiceClient.prototype.getInference = function getInference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLInferenceService.GetInference, {
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

exports.MLInferenceServiceClient = MLInferenceServiceClient;

