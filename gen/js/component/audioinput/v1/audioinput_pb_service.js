// package: viam.component.audioinput.v1
// file: component/audioinput/v1/audioinput.proto

var component_audioinput_v1_audioinput_pb = require("../../../component/audioinput/v1/audioinput_pb");
var google_api_httpbody_pb = require("../../../google/api/httpbody_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AudioInputService = (function () {
  function AudioInputService() {}
  AudioInputService.serviceName = "viam.component.audioinput.v1.AudioInputService";
  return AudioInputService;
}());

AudioInputService.Chunks = {
  methodName: "Chunks",
  service: AudioInputService,
  requestStream: false,
  responseStream: true,
  requestType: component_audioinput_v1_audioinput_pb.ChunksRequest,
  responseType: component_audioinput_v1_audioinput_pb.ChunksResponse
};

AudioInputService.Properties = {
  methodName: "Properties",
  service: AudioInputService,
  requestStream: false,
  responseStream: false,
  requestType: component_audioinput_v1_audioinput_pb.PropertiesRequest,
  responseType: component_audioinput_v1_audioinput_pb.PropertiesResponse
};

AudioInputService.Record = {
  methodName: "Record",
  service: AudioInputService,
  requestStream: false,
  responseStream: false,
  requestType: component_audioinput_v1_audioinput_pb.RecordRequest,
  responseType: google_api_httpbody_pb.HttpBody
};

exports.AudioInputService = AudioInputService;

function AudioInputServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioInputServiceClient.prototype.chunks = function chunks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AudioInputService.Chunks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AudioInputServiceClient.prototype.properties = function properties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AudioInputService.Properties, {
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

AudioInputServiceClient.prototype.record = function record(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AudioInputService.Record, {
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

exports.AudioInputServiceClient = AudioInputServiceClient;

