// package: viam.component.servo.v1
// file: component/servo/v1/servo.proto

var component_servo_v1_servo_pb = require("../../../component/servo/v1/servo_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ServoService = (function () {
  function ServoService() {}
  ServoService.serviceName = "viam.component.servo.v1.ServoService";
  return ServoService;
}());

ServoService.Move = {
  methodName: "Move",
  service: ServoService,
  requestStream: false,
  responseStream: false,
  requestType: component_servo_v1_servo_pb.MoveRequest,
  responseType: component_servo_v1_servo_pb.MoveResponse
};

ServoService.GetPosition = {
  methodName: "GetPosition",
  service: ServoService,
  requestStream: false,
  responseStream: false,
  requestType: component_servo_v1_servo_pb.GetPositionRequest,
  responseType: component_servo_v1_servo_pb.GetPositionResponse
};

ServoService.Stop = {
  methodName: "Stop",
  service: ServoService,
  requestStream: false,
  responseStream: false,
  requestType: component_servo_v1_servo_pb.StopRequest,
  responseType: component_servo_v1_servo_pb.StopResponse
};

exports.ServoService = ServoService;

function ServoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServoServiceClient.prototype.move = function move(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServoService.Move, {
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

ServoServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServoService.GetPosition, {
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

ServoServiceClient.prototype.stop = function stop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServoService.Stop, {
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

exports.ServoServiceClient = ServoServiceClient;

