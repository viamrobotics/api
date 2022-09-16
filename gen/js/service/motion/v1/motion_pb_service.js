// package: viam.service.motion.v1
// file: service/motion/v1/motion.proto

var service_motion_v1_motion_pb = require("../../../service/motion/v1/motion_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MotionService = (function () {
  function MotionService() {}
  MotionService.serviceName = "viam.service.motion.v1.MotionService";
  return MotionService;
}());

MotionService.Move = {
  methodName: "Move",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.MoveRequest,
  responseType: service_motion_v1_motion_pb.MoveResponse
};

MotionService.MoveSingleComponent = {
  methodName: "MoveSingleComponent",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.MoveSingleComponentRequest,
  responseType: service_motion_v1_motion_pb.MoveSingleComponentResponse
};

MotionService.GetPose = {
  methodName: "GetPose",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.GetPoseRequest,
  responseType: service_motion_v1_motion_pb.GetPoseResponse
};

exports.MotionService = MotionService;

function MotionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MotionServiceClient.prototype.move = function move(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.Move, {
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

MotionServiceClient.prototype.moveSingleComponent = function moveSingleComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.MoveSingleComponent, {
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

MotionServiceClient.prototype.getPose = function getPose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.GetPose, {
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

exports.MotionServiceClient = MotionServiceClient;

