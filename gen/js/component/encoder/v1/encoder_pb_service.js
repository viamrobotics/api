// package: viam.component.encoder.v1
// file: component/encoder/v1/encoder.proto

var component_encoder_v1_encoder_pb = require("../../../component/encoder/v1/encoder_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EncoderService = (function () {
  function EncoderService() {}
  EncoderService.serviceName = "viam.component.encoder.v1.EncoderService";
  return EncoderService;
}());

EncoderService.GetPosition = {
  methodName: "GetPosition",
  service: EncoderService,
  requestStream: false,
  responseStream: false,
  requestType: component_encoder_v1_encoder_pb.GetPositionRequest,
  responseType: component_encoder_v1_encoder_pb.GetPositionResponse
};

EncoderService.ResetPosition = {
  methodName: "ResetPosition",
  service: EncoderService,
  requestStream: false,
  responseStream: false,
  requestType: component_encoder_v1_encoder_pb.ResetPositionRequest,
  responseType: component_encoder_v1_encoder_pb.ResetPositionResponse
};

EncoderService.GetProperties = {
  methodName: "GetProperties",
  service: EncoderService,
  requestStream: false,
  responseStream: false,
  requestType: component_encoder_v1_encoder_pb.GetPropertiesRequest,
  responseType: component_encoder_v1_encoder_pb.GetPropertiesResponse
};

EncoderService.DoCommand = {
  methodName: "DoCommand",
  service: EncoderService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

EncoderService.GetGeometries = {
  methodName: "GetGeometries",
  service: EncoderService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetGeometriesRequest,
  responseType: common_v1_common_pb.GetGeometriesResponse
};

exports.EncoderService = EncoderService;

function EncoderServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EncoderServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EncoderService.GetPosition, {
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

EncoderServiceClient.prototype.resetPosition = function resetPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EncoderService.ResetPosition, {
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

EncoderServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EncoderService.GetProperties, {
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

EncoderServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EncoderService.DoCommand, {
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

EncoderServiceClient.prototype.getGeometries = function getGeometries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EncoderService.GetGeometries, {
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

exports.EncoderServiceClient = EncoderServiceClient;

