// package: viam.service.motion.v1
// file: service/motion/v1/motion.proto

var service_motion_v1_motion_pb = require("../../../service/motion/v1/motion_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
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

MotionService.MoveOnMap = {
  methodName: "MoveOnMap",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.MoveOnMapRequest,
  responseType: service_motion_v1_motion_pb.MoveOnMapResponse
};

MotionService.MoveOnMapNew = {
  methodName: "MoveOnMapNew",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.MoveOnMapNewRequest,
  responseType: service_motion_v1_motion_pb.MoveOnMapNewResponse
};

MotionService.MoveOnGlobe = {
  methodName: "MoveOnGlobe",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.MoveOnGlobeRequest,
  responseType: service_motion_v1_motion_pb.MoveOnGlobeResponse
};

MotionService.GetPose = {
  methodName: "GetPose",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.GetPoseRequest,
  responseType: service_motion_v1_motion_pb.GetPoseResponse
};

MotionService.StopPlan = {
  methodName: "StopPlan",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.StopPlanRequest,
  responseType: service_motion_v1_motion_pb.StopPlanResponse
};

MotionService.ListPlanStatuses = {
  methodName: "ListPlanStatuses",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.ListPlanStatusesRequest,
  responseType: service_motion_v1_motion_pb.ListPlanStatusesResponse
};

MotionService.GetPlan = {
  methodName: "GetPlan",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: service_motion_v1_motion_pb.GetPlanRequest,
  responseType: service_motion_v1_motion_pb.GetPlanResponse
};

MotionService.DoCommand = {
  methodName: "DoCommand",
  service: MotionService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
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

MotionServiceClient.prototype.moveOnMap = function moveOnMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.MoveOnMap, {
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

MotionServiceClient.prototype.moveOnMapNew = function moveOnMapNew(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.MoveOnMapNew, {
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

MotionServiceClient.prototype.moveOnGlobe = function moveOnGlobe(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.MoveOnGlobe, {
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

MotionServiceClient.prototype.stopPlan = function stopPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.StopPlan, {
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

MotionServiceClient.prototype.listPlanStatuses = function listPlanStatuses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.ListPlanStatuses, {
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

MotionServiceClient.prototype.getPlan = function getPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.GetPlan, {
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

MotionServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MotionService.DoCommand, {
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

