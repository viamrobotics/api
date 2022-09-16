// package: viam.component.base.v1
// file: component/base/v1/base.proto

var component_base_v1_base_pb = require("../../../component/base/v1/base_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BaseService = (function () {
  function BaseService() {}
  BaseService.serviceName = "viam.component.base.v1.BaseService";
  return BaseService;
}());

BaseService.MoveStraight = {
  methodName: "MoveStraight",
  service: BaseService,
  requestStream: false,
  responseStream: false,
  requestType: component_base_v1_base_pb.MoveStraightRequest,
  responseType: component_base_v1_base_pb.MoveStraightResponse
};

BaseService.Spin = {
  methodName: "Spin",
  service: BaseService,
  requestStream: false,
  responseStream: false,
  requestType: component_base_v1_base_pb.SpinRequest,
  responseType: component_base_v1_base_pb.SpinResponse
};

BaseService.SetPower = {
  methodName: "SetPower",
  service: BaseService,
  requestStream: false,
  responseStream: false,
  requestType: component_base_v1_base_pb.SetPowerRequest,
  responseType: component_base_v1_base_pb.SetPowerResponse
};

BaseService.SetVelocity = {
  methodName: "SetVelocity",
  service: BaseService,
  requestStream: false,
  responseStream: false,
  requestType: component_base_v1_base_pb.SetVelocityRequest,
  responseType: component_base_v1_base_pb.SetVelocityResponse
};

BaseService.Stop = {
  methodName: "Stop",
  service: BaseService,
  requestStream: false,
  responseStream: false,
  requestType: component_base_v1_base_pb.StopRequest,
  responseType: component_base_v1_base_pb.StopResponse
};

exports.BaseService = BaseService;

function BaseServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BaseServiceClient.prototype.moveStraight = function moveStraight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BaseService.MoveStraight, {
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

BaseServiceClient.prototype.spin = function spin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BaseService.Spin, {
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

BaseServiceClient.prototype.setPower = function setPower(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BaseService.SetPower, {
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

BaseServiceClient.prototype.setVelocity = function setVelocity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BaseService.SetVelocity, {
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

BaseServiceClient.prototype.stop = function stop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BaseService.Stop, {
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

exports.BaseServiceClient = BaseServiceClient;

