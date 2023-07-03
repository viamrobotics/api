// package: viam.component.motor.v1
// file: component/motor/v1/motor.proto

var component_motor_v1_motor_pb = require("../../../component/motor/v1/motor_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MotorService = (function () {
  function MotorService() {}
  MotorService.serviceName = "viam.component.motor.v1.MotorService";
  return MotorService;
}());

MotorService.SetPower = {
  methodName: "SetPower",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.SetPowerRequest,
  responseType: component_motor_v1_motor_pb.SetPowerResponse
};

MotorService.GoFor = {
  methodName: "GoFor",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.GoForRequest,
  responseType: component_motor_v1_motor_pb.GoForResponse
};

MotorService.GoTo = {
  methodName: "GoTo",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.GoToRequest,
  responseType: component_motor_v1_motor_pb.GoToResponse
};

MotorService.ResetZeroPosition = {
  methodName: "ResetZeroPosition",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.ResetZeroPositionRequest,
  responseType: component_motor_v1_motor_pb.ResetZeroPositionResponse
};

MotorService.GetPosition = {
  methodName: "GetPosition",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.GetPositionRequest,
  responseType: component_motor_v1_motor_pb.GetPositionResponse
};

MotorService.GetProperties = {
  methodName: "GetProperties",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.GetPropertiesRequest,
  responseType: component_motor_v1_motor_pb.GetPropertiesResponse
};

MotorService.Stop = {
  methodName: "Stop",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.StopRequest,
  responseType: component_motor_v1_motor_pb.StopResponse
};

MotorService.IsPowered = {
  methodName: "IsPowered",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.IsPoweredRequest,
  responseType: component_motor_v1_motor_pb.IsPoweredResponse
};

MotorService.IsMoving = {
  methodName: "IsMoving",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: component_motor_v1_motor_pb.IsMovingRequest,
  responseType: component_motor_v1_motor_pb.IsMovingResponse
};

MotorService.DoCommand = {
  methodName: "DoCommand",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

MotorService.GetGeometries = {
  methodName: "GetGeometries",
  service: MotorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetGeometriesRequest,
  responseType: common_v1_common_pb.GetGeometriesResponse
};

exports.MotorService = MotorService;

function MotorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MotorServiceClient.prototype.setPower = function setPower(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.SetPower, {
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

MotorServiceClient.prototype.goFor = function goFor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.GoFor, {
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

MotorServiceClient.prototype.goTo = function goTo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.GoTo, {
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

MotorServiceClient.prototype.resetZeroPosition = function resetZeroPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.ResetZeroPosition, {
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

MotorServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.GetPosition, {
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

MotorServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.GetProperties, {
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

MotorServiceClient.prototype.stop = function stop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.Stop, {
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

MotorServiceClient.prototype.isPowered = function isPowered(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.IsPowered, {
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

MotorServiceClient.prototype.isMoving = function isMoving(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.IsMoving, {
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

MotorServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.DoCommand, {
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

MotorServiceClient.prototype.getGeometries = function getGeometries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotorService.GetGeometries, {
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

exports.MotorServiceClient = MotorServiceClient;

