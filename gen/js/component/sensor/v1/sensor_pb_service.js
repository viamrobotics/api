// package: viam.component.sensor.v1
// file: component/sensor/v1/sensor.proto

var component_sensor_v1_sensor_pb = require("../../../component/sensor/v1/sensor_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SensorService = (function () {
  function SensorService() {}
  SensorService.serviceName = "viam.component.sensor.v1.SensorService";
  return SensorService;
}());

SensorService.GetReadings = {
  methodName: "GetReadings",
  service: SensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_sensor_v1_sensor_pb.GetReadingsRequest,
  responseType: component_sensor_v1_sensor_pb.GetReadingsResponse
};

exports.SensorService = SensorService;

function SensorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SensorServiceClient.prototype.getReadings = function getReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SensorService.GetReadings, {
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

exports.SensorServiceClient = SensorServiceClient;

