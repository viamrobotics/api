// package: viam.service.sensors.v1
// file: service/sensors/v1/sensors.proto

var service_sensors_v1_sensors_pb = require("../../../service/sensors/v1/sensors_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SensorsService = (function () {
  function SensorsService() {}
  SensorsService.serviceName = "viam.service.sensors.v1.SensorsService";
  return SensorsService;
}());

SensorsService.GetSensors = {
  methodName: "GetSensors",
  service: SensorsService,
  requestStream: false,
  responseStream: false,
  requestType: service_sensors_v1_sensors_pb.GetSensorsRequest,
  responseType: service_sensors_v1_sensors_pb.GetSensorsResponse
};

SensorsService.GetReadings = {
  methodName: "GetReadings",
  service: SensorsService,
  requestStream: false,
  responseStream: false,
  requestType: service_sensors_v1_sensors_pb.GetReadingsRequest,
  responseType: service_sensors_v1_sensors_pb.GetReadingsResponse
};

exports.SensorsService = SensorsService;

function SensorsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SensorsServiceClient.prototype.getSensors = function getSensors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SensorsService.GetSensors, {
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

SensorsServiceClient.prototype.getReadings = function getReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SensorsService.GetReadings, {
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

exports.SensorsServiceClient = SensorsServiceClient;

