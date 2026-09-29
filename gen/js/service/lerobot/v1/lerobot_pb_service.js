// package: viam.service.lerobot.v1
// file: service/lerobot/v1/lerobot.proto

var service_lerobot_v1_lerobot_pb = require("../../../service/lerobot/v1/lerobot_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LeRobotService = (function () {
  function LeRobotService() {}
  LeRobotService.serviceName = "viam.service.lerobot.v1.LeRobotService";
  return LeRobotService;
}());

LeRobotService.StartRecording = {
  methodName: "StartRecording",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.StartRecordingRequest,
  responseType: service_lerobot_v1_lerobot_pb.StartRecordingResponse
};

LeRobotService.StopRecording = {
  methodName: "StopRecording",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.StopRecordingRequest,
  responseType: service_lerobot_v1_lerobot_pb.StopRecordingResponse
};

LeRobotService.RecordEpisode = {
  methodName: "RecordEpisode",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.RecordEpisodeRequest,
  responseType: service_lerobot_v1_lerobot_pb.RecordEpisodeResponse
};

LeRobotService.ReplayEpisode = {
  methodName: "ReplayEpisode",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.ReplayEpisodeRequest,
  responseType: service_lerobot_v1_lerobot_pb.ReplayEpisodeResponse
};

LeRobotService.StartTeleoperation = {
  methodName: "StartTeleoperation",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.StartTeleoperationRequest,
  responseType: service_lerobot_v1_lerobot_pb.StartTeleoperationResponse
};

LeRobotService.StopTeleoperation = {
  methodName: "StopTeleoperation",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.StopTeleoperationRequest,
  responseType: service_lerobot_v1_lerobot_pb.StopTeleoperationResponse
};

LeRobotService.LoadPolicy = {
  methodName: "LoadPolicy",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.LoadPolicyRequest,
  responseType: service_lerobot_v1_lerobot_pb.LoadPolicyResponse
};

LeRobotService.RunPolicyEpisode = {
  methodName: "RunPolicyEpisode",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeRequest,
  responseType: service_lerobot_v1_lerobot_pb.RunPolicyEpisodeResponse
};

LeRobotService.DoCommand = {
  methodName: "DoCommand",
  service: LeRobotService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.LeRobotService = LeRobotService;

function LeRobotServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LeRobotServiceClient.prototype.startRecording = function startRecording(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.StartRecording, {
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

LeRobotServiceClient.prototype.stopRecording = function stopRecording(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.StopRecording, {
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

LeRobotServiceClient.prototype.recordEpisode = function recordEpisode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.RecordEpisode, {
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

LeRobotServiceClient.prototype.replayEpisode = function replayEpisode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.ReplayEpisode, {
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

LeRobotServiceClient.prototype.startTeleoperation = function startTeleoperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.StartTeleoperation, {
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

LeRobotServiceClient.prototype.stopTeleoperation = function stopTeleoperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.StopTeleoperation, {
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

LeRobotServiceClient.prototype.loadPolicy = function loadPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.LoadPolicy, {
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

LeRobotServiceClient.prototype.runPolicyEpisode = function runPolicyEpisode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.RunPolicyEpisode, {
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

LeRobotServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeRobotService.DoCommand, {
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

exports.LeRobotServiceClient = LeRobotServiceClient;

