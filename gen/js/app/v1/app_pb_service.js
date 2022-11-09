// package: viam.app.v1
// file: app/v1/app.proto

var app_v1_app_pb = require("../../app/v1/app_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AppService = (function () {
  function AppService() {}
  AppService.serviceName = "viam.app.v1.AppService";
  return AppService;
}());

AppService.CreateLocation = {
  methodName: "CreateLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateLocationRequest,
  responseType: app_v1_app_pb.CreateLocationResponse
};

AppService.ListOrganizations = {
  methodName: "ListOrganizations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListOrganizationsRequest,
  responseType: app_v1_app_pb.ListOrganizationsResponse
};

AppService.ListLocations = {
  methodName: "ListLocations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListLocationsRequest,
  responseType: app_v1_app_pb.ListLocationsResponse
};

AppService.LocationAuth = {
  methodName: "LocationAuth",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.LocationAuthRequest,
  responseType: app_v1_app_pb.LocationAuthResponse
};

AppService.CreateLocationSecret = {
  methodName: "CreateLocationSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateLocationSecretRequest,
  responseType: app_v1_app_pb.CreateLocationSecretResponse
};

AppService.DeleteLocationSecret = {
  methodName: "DeleteLocationSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteLocationSecretRequest,
  responseType: app_v1_app_pb.DeleteLocationSecretResponse
};

AppService.GetRobot = {
  methodName: "GetRobot",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRobotRequest,
  responseType: app_v1_app_pb.GetRobotResponse
};

AppService.GetRobotParts = {
  methodName: "GetRobotParts",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRobotPartsRequest,
  responseType: app_v1_app_pb.GetRobotPartsResponse
};

AppService.GetRobotPart = {
  methodName: "GetRobotPart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRobotPartRequest,
  responseType: app_v1_app_pb.GetRobotPartResponse
};

AppService.GetRobotPartLogs = {
  methodName: "GetRobotPartLogs",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRobotPartLogsRequest,
  responseType: app_v1_app_pb.GetRobotPartLogsResponse
};

AppService.TailRobotPartLogs = {
  methodName: "TailRobotPartLogs",
  service: AppService,
  requestStream: false,
  responseStream: true,
  requestType: app_v1_app_pb.TailRobotPartLogsRequest,
  responseType: app_v1_app_pb.TailRobotPartLogsResponse
};

AppService.GetRobotPartHistory = {
  methodName: "GetRobotPartHistory",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRobotPartHistoryRequest,
  responseType: app_v1_app_pb.GetRobotPartHistoryResponse
};

AppService.UpdateRobotPart = {
  methodName: "UpdateRobotPart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateRobotPartRequest,
  responseType: app_v1_app_pb.UpdateRobotPartResponse
};

AppService.NewRobotPart = {
  methodName: "NewRobotPart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.NewRobotPartRequest,
  responseType: app_v1_app_pb.NewRobotPartResponse
};

AppService.DeleteRobotPart = {
  methodName: "DeleteRobotPart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteRobotPartRequest,
  responseType: app_v1_app_pb.DeleteRobotPartResponse
};

AppService.MarkPartAsMain = {
  methodName: "MarkPartAsMain",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.MarkPartAsMainRequest,
  responseType: app_v1_app_pb.MarkPartAsMainResponse
};

AppService.CreateRobotPartSecret = {
  methodName: "CreateRobotPartSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateRobotPartSecretRequest,
  responseType: app_v1_app_pb.CreateRobotPartSecretResponse
};

AppService.DeleteRobotPartSecret = {
  methodName: "DeleteRobotPartSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteRobotPartSecretRequest,
  responseType: app_v1_app_pb.DeleteRobotPartSecretResponse
};

AppService.FindRobots = {
  methodName: "FindRobots",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.FindRobotsRequest,
  responseType: app_v1_app_pb.FindRobotsResponse
};

AppService.NewRobot = {
  methodName: "NewRobot",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.NewRobotRequest,
  responseType: app_v1_app_pb.NewRobotResponse
};

AppService.UpdateRobot = {
  methodName: "UpdateRobot",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateRobotRequest,
  responseType: app_v1_app_pb.UpdateRobotResponse
};

AppService.DeleteRobot = {
  methodName: "DeleteRobot",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteRobotRequest,
  responseType: app_v1_app_pb.DeleteRobotResponse
};

exports.AppService = AppService;

function AppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AppServiceClient.prototype.createLocation = function createLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateLocation, {
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

AppServiceClient.prototype.listOrganizations = function listOrganizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListOrganizations, {
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

AppServiceClient.prototype.listLocations = function listLocations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListLocations, {
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

AppServiceClient.prototype.locationAuth = function locationAuth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.LocationAuth, {
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

AppServiceClient.prototype.createLocationSecret = function createLocationSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateLocationSecret, {
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

AppServiceClient.prototype.deleteLocationSecret = function deleteLocationSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteLocationSecret, {
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

AppServiceClient.prototype.getRobot = function getRobot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRobot, {
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

AppServiceClient.prototype.getRobotParts = function getRobotParts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRobotParts, {
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

AppServiceClient.prototype.getRobotPart = function getRobotPart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRobotPart, {
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

AppServiceClient.prototype.getRobotPartLogs = function getRobotPartLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRobotPartLogs, {
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

AppServiceClient.prototype.tailRobotPartLogs = function tailRobotPartLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AppService.TailRobotPartLogs, {
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

AppServiceClient.prototype.getRobotPartHistory = function getRobotPartHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRobotPartHistory, {
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

AppServiceClient.prototype.updateRobotPart = function updateRobotPart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateRobotPart, {
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

AppServiceClient.prototype.newRobotPart = function newRobotPart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.NewRobotPart, {
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

AppServiceClient.prototype.deleteRobotPart = function deleteRobotPart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteRobotPart, {
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

AppServiceClient.prototype.markPartAsMain = function markPartAsMain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.MarkPartAsMain, {
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

AppServiceClient.prototype.createRobotPartSecret = function createRobotPartSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateRobotPartSecret, {
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

AppServiceClient.prototype.deleteRobotPartSecret = function deleteRobotPartSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteRobotPartSecret, {
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

AppServiceClient.prototype.findRobots = function findRobots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.FindRobots, {
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

AppServiceClient.prototype.newRobot = function newRobot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.NewRobot, {
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

AppServiceClient.prototype.updateRobot = function updateRobot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateRobot, {
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

AppServiceClient.prototype.deleteRobot = function deleteRobot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteRobot, {
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

exports.AppServiceClient = AppServiceClient;

