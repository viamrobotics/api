// package: viam.app.build.v1
// file: app/build/v1/build.proto

var app_build_v1_build_pb = require("../../../app/build/v1/build_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BuildService = (function () {
  function BuildService() {}
  BuildService.serviceName = "viam.app.build.v1.BuildService";
  return BuildService;
}());

BuildService.StartBuild = {
  methodName: "StartBuild",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.StartBuildRequest,
  responseType: app_build_v1_build_pb.StartBuildResponse
};

BuildService.GetLogs = {
  methodName: "GetLogs",
  service: BuildService,
  requestStream: false,
  responseStream: true,
  requestType: app_build_v1_build_pb.GetLogsRequest,
  responseType: app_build_v1_build_pb.GetLogsResponse
};

BuildService.ListJobs = {
  methodName: "ListJobs",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.ListJobsRequest,
  responseType: app_build_v1_build_pb.ListJobsResponse
};

BuildService.LinkRepo = {
  methodName: "LinkRepo",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.LinkRepoRequest,
  responseType: app_build_v1_build_pb.LinkRepoResponse
};

BuildService.UnlinkRepo = {
  methodName: "UnlinkRepo",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.UnlinkRepoRequest,
  responseType: app_build_v1_build_pb.UnlinkRepoResponse
};

BuildService.ListRepoLinks = {
  methodName: "ListRepoLinks",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.ListRepoLinksRequest,
  responseType: app_build_v1_build_pb.ListRepoLinksResponse
};

BuildService.ListAppLinks = {
  methodName: "ListAppLinks",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.ListAppLinksRequest,
  responseType: app_build_v1_build_pb.ListAppLinksResponse
};

BuildService.RemoveAppLink = {
  methodName: "RemoveAppLink",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.RemoveAppLinkRequest,
  responseType: app_build_v1_build_pb.RemoveAppLinkResponse
};

BuildService.LinkOrg = {
  methodName: "LinkOrg",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.LinkOrgRequest,
  responseType: app_build_v1_build_pb.LinkOrgResponse
};

BuildService.UnlinkOrg = {
  methodName: "UnlinkOrg",
  service: BuildService,
  requestStream: false,
  responseStream: false,
  requestType: app_build_v1_build_pb.UnlinkOrgRequest,
  responseType: app_build_v1_build_pb.UnlinkOrgResponse
};

BuildService.StartReloadBuild = {
  methodName: "StartReloadBuild",
  service: BuildService,
  requestStream: true,
  responseStream: false,
  requestType: app_build_v1_build_pb.StartReloadBuildRequest,
  responseType: app_build_v1_build_pb.StartReloadBuildResponse
};

exports.BuildService = BuildService;

function BuildServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BuildServiceClient.prototype.startBuild = function startBuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.StartBuild, {
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

BuildServiceClient.prototype.getLogs = function getLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BuildService.GetLogs, {
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

BuildServiceClient.prototype.listJobs = function listJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.ListJobs, {
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

BuildServiceClient.prototype.linkRepo = function linkRepo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.LinkRepo, {
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

BuildServiceClient.prototype.unlinkRepo = function unlinkRepo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.UnlinkRepo, {
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

BuildServiceClient.prototype.listRepoLinks = function listRepoLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.ListRepoLinks, {
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

BuildServiceClient.prototype.listAppLinks = function listAppLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.ListAppLinks, {
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

BuildServiceClient.prototype.removeAppLink = function removeAppLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.RemoveAppLink, {
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

BuildServiceClient.prototype.linkOrg = function linkOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.LinkOrg, {
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

BuildServiceClient.prototype.unlinkOrg = function unlinkOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildService.UnlinkOrg, {
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

BuildServiceClient.prototype.startReloadBuild = function startReloadBuild(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(BuildService.StartReloadBuild, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

exports.BuildServiceClient = BuildServiceClient;

