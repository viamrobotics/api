// package: viam.component.powersensor.v1
// file: component/powersensor/v1/powersensor.proto

var component_powersensor_v1_powersensor_pb = require("../../../component/powersensor/v1/powersensor_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PowerSensorService = (function () {
  function PowerSensorService() {}
  PowerSensorService.serviceName = "viam.component.powersensor.v1.PowerSensorService";
  return PowerSensorService;
}());

PowerSensorService.GetVoltage = {
  methodName: "GetVoltage",
  service: PowerSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_powersensor_v1_powersensor_pb.GetVoltageRequest,
  responseType: component_powersensor_v1_powersensor_pb.GetVoltageResponse
};

PowerSensorService.GetCurrent = {
  methodName: "GetCurrent",
  service: PowerSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_powersensor_v1_powersensor_pb.GetCurrentRequest,
  responseType: component_powersensor_v1_powersensor_pb.GetCurrentResponse
};

PowerSensorService.GetPower = {
  methodName: "GetPower",
  service: PowerSensorService,
  requestStream: false,
  responseStream: false,
  requestType: component_powersensor_v1_powersensor_pb.GetPowerRequest,
  responseType: component_powersensor_v1_powersensor_pb.GetPowerResponse
};

PowerSensorService.GetReadings = {
  methodName: "GetReadings",
  service: PowerSensorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetReadingsRequest,
  responseType: common_v1_common_pb.GetReadingsResponse
};

PowerSensorService.DoCommand = {
  methodName: "DoCommand",
  service: PowerSensorService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.PowerSensorService = PowerSensorService;

function PowerSensorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PowerSensorServiceClient.prototype.getVoltage = function getVoltage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PowerSensorService.GetVoltage, {
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

PowerSensorServiceClient.prototype.getCurrent = function getCurrent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PowerSensorService.GetCurrent, {
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

PowerSensorServiceClient.prototype.getPower = function getPower(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PowerSensorService.GetPower, {
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

PowerSensorServiceClient.prototype.getReadings = function getReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PowerSensorService.GetReadings, {
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

PowerSensorServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PowerSensorService.DoCommand, {
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

exports.PowerSensorServiceClient = PowerSensorServiceClient;

