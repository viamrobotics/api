// package: viam.robot.v1
// file: robot/v1/robot.proto

var robot_v1_robot_pb = require("../../robot/v1/robot_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RobotService = (function () {
  function RobotService() {}
  RobotService.serviceName = "viam.robot.v1.RobotService";
  return RobotService;
}());

RobotService.GetOperations = {
  methodName: "GetOperations",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetOperationsRequest,
  responseType: robot_v1_robot_pb.GetOperationsResponse
};

RobotService.GetSessions = {
  methodName: "GetSessions",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetSessionsRequest,
  responseType: robot_v1_robot_pb.GetSessionsResponse
};

RobotService.ResourceNames = {
  methodName: "ResourceNames",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.ResourceNamesRequest,
  responseType: robot_v1_robot_pb.ResourceNamesResponse
};

RobotService.ResourceRPCSubtypes = {
  methodName: "ResourceRPCSubtypes",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.ResourceRPCSubtypesRequest,
  responseType: robot_v1_robot_pb.ResourceRPCSubtypesResponse
};

RobotService.CancelOperation = {
  methodName: "CancelOperation",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.CancelOperationRequest,
  responseType: robot_v1_robot_pb.CancelOperationResponse
};

RobotService.BlockForOperation = {
  methodName: "BlockForOperation",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.BlockForOperationRequest,
  responseType: robot_v1_robot_pb.BlockForOperationResponse
};

RobotService.GetModelsFromModules = {
  methodName: "GetModelsFromModules",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetModelsFromModulesRequest,
  responseType: robot_v1_robot_pb.GetModelsFromModulesResponse
};

RobotService.DiscoverComponents = {
  methodName: "DiscoverComponents",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.DiscoverComponentsRequest,
  responseType: robot_v1_robot_pb.DiscoverComponentsResponse
};

RobotService.FrameSystemConfig = {
  methodName: "FrameSystemConfig",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.FrameSystemConfigRequest,
  responseType: robot_v1_robot_pb.FrameSystemConfigResponse
};

RobotService.TransformPose = {
  methodName: "TransformPose",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.TransformPoseRequest,
  responseType: robot_v1_robot_pb.TransformPoseResponse
};

RobotService.TransformPCD = {
  methodName: "TransformPCD",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.TransformPCDRequest,
  responseType: robot_v1_robot_pb.TransformPCDResponse
};

RobotService.GetStatus = {
  methodName: "GetStatus",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetStatusRequest,
  responseType: robot_v1_robot_pb.GetStatusResponse
};

RobotService.StreamStatus = {
  methodName: "StreamStatus",
  service: RobotService,
  requestStream: false,
  responseStream: true,
  requestType: robot_v1_robot_pb.StreamStatusRequest,
  responseType: robot_v1_robot_pb.StreamStatusResponse
};

RobotService.StopAll = {
  methodName: "StopAll",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.StopAllRequest,
  responseType: robot_v1_robot_pb.StopAllResponse
};

RobotService.StartSession = {
  methodName: "StartSession",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.StartSessionRequest,
  responseType: robot_v1_robot_pb.StartSessionResponse
};

RobotService.SendSessionHeartbeat = {
  methodName: "SendSessionHeartbeat",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.SendSessionHeartbeatRequest,
  responseType: robot_v1_robot_pb.SendSessionHeartbeatResponse
};

RobotService.Log = {
  methodName: "Log",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.LogRequest,
  responseType: robot_v1_robot_pb.LogResponse
};

RobotService.GetCloudMetadata = {
  methodName: "GetCloudMetadata",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetCloudMetadataRequest,
  responseType: robot_v1_robot_pb.GetCloudMetadataResponse
};

RobotService.RestartModule = {
  methodName: "RestartModule",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.RestartModuleRequest,
  responseType: robot_v1_robot_pb.RestartModuleResponse
};

RobotService.Shutdown = {
  methodName: "Shutdown",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.ShutdownRequest,
  responseType: robot_v1_robot_pb.ShutdownResponse
};

RobotService.GetMachineStatus = {
  methodName: "GetMachineStatus",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetMachineStatusRequest,
  responseType: robot_v1_robot_pb.GetMachineStatusResponse
};

RobotService.GetVersion = {
  methodName: "GetVersion",
  service: RobotService,
  requestStream: false,
  responseStream: false,
  requestType: robot_v1_robot_pb.GetVersionRequest,
  responseType: robot_v1_robot_pb.GetVersionResponse
};

RobotService.Tunnel = {
  methodName: "Tunnel",
  service: RobotService,
  requestStream: true,
  responseStream: true,
  requestType: robot_v1_robot_pb.TunnelRequest,
  responseType: robot_v1_robot_pb.TunnelResponse
};

exports.RobotService = RobotService;

function RobotServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RobotServiceClient.prototype.getOperations = function getOperations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetOperations, {
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

RobotServiceClient.prototype.getSessions = function getSessions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetSessions, {
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

RobotServiceClient.prototype.resourceNames = function resourceNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.ResourceNames, {
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

RobotServiceClient.prototype.resourceRPCSubtypes = function resourceRPCSubtypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.ResourceRPCSubtypes, {
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

RobotServiceClient.prototype.cancelOperation = function cancelOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.CancelOperation, {
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

RobotServiceClient.prototype.blockForOperation = function blockForOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.BlockForOperation, {
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

RobotServiceClient.prototype.getModelsFromModules = function getModelsFromModules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetModelsFromModules, {
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

RobotServiceClient.prototype.discoverComponents = function discoverComponents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.DiscoverComponents, {
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

RobotServiceClient.prototype.frameSystemConfig = function frameSystemConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.FrameSystemConfig, {
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

RobotServiceClient.prototype.transformPose = function transformPose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.TransformPose, {
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

RobotServiceClient.prototype.transformPCD = function transformPCD(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.TransformPCD, {
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

RobotServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetStatus, {
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

RobotServiceClient.prototype.streamStatus = function streamStatus(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(RobotService.StreamStatus, {
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

RobotServiceClient.prototype.stopAll = function stopAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.StopAll, {
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

RobotServiceClient.prototype.startSession = function startSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.StartSession, {
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

RobotServiceClient.prototype.sendSessionHeartbeat = function sendSessionHeartbeat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.SendSessionHeartbeat, {
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

RobotServiceClient.prototype.log = function log(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.Log, {
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

RobotServiceClient.prototype.getCloudMetadata = function getCloudMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetCloudMetadata, {
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

RobotServiceClient.prototype.restartModule = function restartModule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.RestartModule, {
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

RobotServiceClient.prototype.shutdown = function shutdown(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.Shutdown, {
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

RobotServiceClient.prototype.getMachineStatus = function getMachineStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetMachineStatus, {
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

RobotServiceClient.prototype.getVersion = function getVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotService.GetVersion, {
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

RobotServiceClient.prototype.tunnel = function tunnel(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(RobotService.Tunnel, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.RobotServiceClient = RobotServiceClient;

