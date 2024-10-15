// package: viam.physicalDevice.v1
// file: physicalDevice/v1/physicalDevice.proto

var physicalDevice_v1_physicalDevice_pb = require("../../physicalDevice/v1/physicalDevice_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var physicalDeviceService = (function () {
  function physicalDeviceService() {}
  physicalDeviceService.serviceName = "viam.physicalDevice.v1.physicalDeviceService";
  return physicalDeviceService;
}());

physicalDeviceService.GetOperations = {
  methodName: "GetOperations",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.GetOperationsRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.GetOperationsResponse
};

physicalDeviceService.GetSessions = {
  methodName: "GetSessions",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.GetSessionsRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.GetSessionsResponse
};

physicalDeviceService.ResourceNames = {
  methodName: "ResourceNames",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.ResourceNamesRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.ResourceNamesResponse
};

physicalDeviceService.ResourceRPCSubtypes = {
  methodName: "ResourceRPCSubtypes",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.ResourceRPCSubtypesResponse
};

physicalDeviceService.CancelOperation = {
  methodName: "CancelOperation",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.CancelOperationRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.CancelOperationResponse
};

physicalDeviceService.BlockForOperation = {
  methodName: "BlockForOperation",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.BlockForOperationRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.BlockForOperationResponse
};

physicalDeviceService.DiscoverComponents = {
  methodName: "DiscoverComponents",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.DiscoverComponentsResponse
};

physicalDeviceService.FrameSystemConfig = {
  methodName: "FrameSystemConfig",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.FrameSystemConfigResponse
};

physicalDeviceService.TransformPose = {
  methodName: "TransformPose",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.TransformPoseRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.TransformPoseResponse
};

physicalDeviceService.TransformPCD = {
  methodName: "TransformPCD",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.TransformPCDRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.TransformPCDResponse
};

physicalDeviceService.GetStatus = {
  methodName: "GetStatus",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.GetStatusRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.GetStatusResponse
};

physicalDeviceService.StreamStatus = {
  methodName: "StreamStatus",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: true,
  requestType: physicalDevice_v1_physicalDevice_pb.StreamStatusRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.StreamStatusResponse
};

physicalDeviceService.StopAll = {
  methodName: "StopAll",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.StopAllRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.StopAllResponse
};

physicalDeviceService.StartSession = {
  methodName: "StartSession",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.StartSessionRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.StartSessionResponse
};

physicalDeviceService.SendSessionHeartbeat = {
  methodName: "SendSessionHeartbeat",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.SendSessionHeartbeatResponse
};

physicalDeviceService.Log = {
  methodName: "Log",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.LogRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.LogResponse
};

physicalDeviceService.GetCloudMetadata = {
  methodName: "GetCloudMetadata",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.GetCloudMetadataResponse
};

physicalDeviceService.RestartModule = {
  methodName: "RestartModule",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.RestartModuleRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.RestartModuleResponse
};

physicalDeviceService.Shutdown = {
  methodName: "Shutdown",
  service: physicalDeviceService,
  requestStream: false,
  responseStream: false,
  requestType: physicalDevice_v1_physicalDevice_pb.ShutdownRequest,
  responseType: physicalDevice_v1_physicalDevice_pb.ShutdownResponse
};

exports.physicalDeviceService = physicalDeviceService;

function physicalDeviceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

physicalDeviceServiceClient.prototype.getOperations = function getOperations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.GetOperations, {
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

physicalDeviceServiceClient.prototype.getSessions = function getSessions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.GetSessions, {
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

physicalDeviceServiceClient.prototype.resourceNames = function resourceNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.ResourceNames, {
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

physicalDeviceServiceClient.prototype.resourceRPCSubtypes = function resourceRPCSubtypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.ResourceRPCSubtypes, {
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

physicalDeviceServiceClient.prototype.cancelOperation = function cancelOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.CancelOperation, {
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

physicalDeviceServiceClient.prototype.blockForOperation = function blockForOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.BlockForOperation, {
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

physicalDeviceServiceClient.prototype.discoverComponents = function discoverComponents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.DiscoverComponents, {
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

physicalDeviceServiceClient.prototype.frameSystemConfig = function frameSystemConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.FrameSystemConfig, {
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

physicalDeviceServiceClient.prototype.transformPose = function transformPose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.TransformPose, {
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

physicalDeviceServiceClient.prototype.transformPCD = function transformPCD(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.TransformPCD, {
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

physicalDeviceServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.GetStatus, {
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

physicalDeviceServiceClient.prototype.streamStatus = function streamStatus(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(physicalDeviceService.StreamStatus, {
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

physicalDeviceServiceClient.prototype.stopAll = function stopAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.StopAll, {
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

physicalDeviceServiceClient.prototype.startSession = function startSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.StartSession, {
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

physicalDeviceServiceClient.prototype.sendSessionHeartbeat = function sendSessionHeartbeat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.SendSessionHeartbeat, {
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

physicalDeviceServiceClient.prototype.log = function log(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.Log, {
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

physicalDeviceServiceClient.prototype.getCloudMetadata = function getCloudMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.GetCloudMetadata, {
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

physicalDeviceServiceClient.prototype.restartModule = function restartModule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.RestartModule, {
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

physicalDeviceServiceClient.prototype.shutdown = function shutdown(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(physicalDeviceService.Shutdown, {
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

exports.physicalDeviceServiceClient = physicalDeviceServiceClient;

