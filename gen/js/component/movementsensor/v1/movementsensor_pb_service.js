// package: viam.component.movementsensor.v1
// file: component/movementsensor/v1/movementsensor.proto

var component_movementsensor_v1_movementsensor_pb = require("../../../component/movementsensor/v1/movementsensor_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MovementSensorService = (function () {
  function MovementSensorService() {}
  MovementSensorService.serviceName = "viam.component.movementsensor.v1.MovementSensorService";
  return MovementSensorService;
}());

MovementSensorService.GetLinearVelocity = {
  methodName: "GetLinearVelocity",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetLinearVelocityResponse
};

MovementSensorService.GetAngularVelocity = {
  methodName: "GetAngularVelocity",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetAngularVelocityResponse
};

MovementSensorService.GetCompassHeading = {
  methodName: "GetCompassHeading",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetCompassHeadingResponse
};

MovementSensorService.GetOrientation = {
  methodName: "GetOrientation",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetOrientationRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetOrientationResponse
};

MovementSensorService.GetPosition = {
  methodName: "GetPosition",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetPositionRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetPositionResponse
};

MovementSensorService.GetProperties = {
  methodName: "GetProperties",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetPropertiesRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetPropertiesResponse
};

MovementSensorService.GetAccuracy = {
  methodName: "GetAccuracy",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetAccuracyRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetAccuracyResponse
};

MovementSensorService.GetLinearAcceleration = {
  methodName: "GetLinearAcceleration",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_movementsensor_v1_movementsensor_pb.GetLinearAccelerationRequest,
  responseType: component_movementsensor_v1_movementsensor_pb.GetLinearAccelerationResponse
};

MovementSensorService.DoCommand = {
  methodName: "DoCommand",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

MovementSensorService.GetGeometries = {
  methodName: "GetGeometries",
  service: MovementSensorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetGeometriesRequest,
  responseType: common_v1_common_pb.GetGeometriesResponse
};

exports.MovementSensorService = MovementSensorService;

function MovementSensorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MovementSensorServiceClient.prototype.getLinearVelocity = function getLinearVelocity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetLinearVelocity, {
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

MovementSensorServiceClient.prototype.getAngularVelocity = function getAngularVelocity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetAngularVelocity, {
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

MovementSensorServiceClient.prototype.getCompassHeading = function getCompassHeading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetCompassHeading, {
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

MovementSensorServiceClient.prototype.getOrientation = function getOrientation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetOrientation, {
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

MovementSensorServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetPosition, {
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

MovementSensorServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetProperties, {
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

MovementSensorServiceClient.prototype.getAccuracy = function getAccuracy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetAccuracy, {
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

MovementSensorServiceClient.prototype.getLinearAcceleration = function getLinearAcceleration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetLinearAcceleration, {
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

MovementSensorServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.DoCommand, {
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

MovementSensorServiceClient.prototype.getGeometries = function getGeometries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovementSensorService.GetGeometries, {
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

exports.MovementSensorServiceClient = MovementSensorServiceClient;

