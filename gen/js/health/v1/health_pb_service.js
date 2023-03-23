// package: viam.health.v1
// file: health/v1/health.proto

var health_v1_health_pb = require("../../health/v1/health_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HealthService = (function () {
  function HealthService() {}
  HealthService.serviceName = "viam.health.v1.HealthService";
  return HealthService;
}());

HealthService.Check = {
  methodName: "Check",
  service: HealthService,
  requestStream: false,
  responseStream: false,
  requestType: health_v1_health_pb.HealthServiceCheckRequest,
  responseType: health_v1_health_pb.HealthServiceCheckResponse
};

exports.HealthService = HealthService;

function HealthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HealthServiceClient.prototype.check = function check(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HealthService.Check, {
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

exports.HealthServiceClient = HealthServiceClient;

