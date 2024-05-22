// package: viam.app.v1
// file: app/v1/end_user.proto

var app_v1_end_user_pb = require("../../app/v1/end_user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EndUserService = (function () {
  function EndUserService() {}
  EndUserService.serviceName = "viam.app.v1.EndUserService";
  return EndUserService;
}());

EndUserService.IsLegalAccepted = {
  methodName: "IsLegalAccepted",
  service: EndUserService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_end_user_pb.IsLegalAcceptedRequest,
  responseType: app_v1_end_user_pb.IsLegalAcceptedResponse
};

EndUserService.AcceptLegal = {
  methodName: "AcceptLegal",
  service: EndUserService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_end_user_pb.AcceptLegalRequest,
  responseType: app_v1_end_user_pb.AcceptLegalResponse
};

EndUserService.RegisterAuthApplication = {
  methodName: "RegisterAuthApplication",
  service: EndUserService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_end_user_pb.RegisterAuthApplicationRequest,
  responseType: app_v1_end_user_pb.RegisterAuthApplicationResponse
};

EndUserService.UpdateAuthApplication = {
  methodName: "UpdateAuthApplication",
  service: EndUserService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_end_user_pb.UpdateAuthApplicationRequest,
  responseType: app_v1_end_user_pb.UpdateAuthApplicationResponse
};

EndUserService.GetAuthApplication = {
  methodName: "GetAuthApplication",
  service: EndUserService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_end_user_pb.GetAuthApplicationRequest,
  responseType: app_v1_end_user_pb.GetAuthApplicationResponse
};

exports.EndUserService = EndUserService;

function EndUserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EndUserServiceClient.prototype.isLegalAccepted = function isLegalAccepted(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndUserService.IsLegalAccepted, {
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

EndUserServiceClient.prototype.acceptLegal = function acceptLegal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndUserService.AcceptLegal, {
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

EndUserServiceClient.prototype.registerAuthApplication = function registerAuthApplication(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndUserService.RegisterAuthApplication, {
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

EndUserServiceClient.prototype.updateAuthApplication = function updateAuthApplication(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndUserService.UpdateAuthApplication, {
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

EndUserServiceClient.prototype.getAuthApplication = function getAuthApplication(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndUserService.GetAuthApplication, {
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

exports.EndUserServiceClient = EndUserServiceClient;

