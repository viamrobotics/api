// package: viam.app.v1
// file: app/v1/app.proto

var app_v1_app_pb = require("../../app/v1/app_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AppService = (function () {
  function AppService() {}
  AppService.serviceName = "viam.app.v1.AppService";
  return AppService;
}());

AppService.CreateOrganization = {
  methodName: "CreateOrganization",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateOrganizationRequest,
  responseType: app_v1_app_pb.CreateOrganizationResponse
};

AppService.ListOrganizations = {
  methodName: "ListOrganizations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListOrganizationsRequest,
  responseType: app_v1_app_pb.ListOrganizationsResponse
};

AppService.GetOrganization = {
  methodName: "GetOrganization",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetOrganizationRequest,
  responseType: app_v1_app_pb.GetOrganizationResponse
};

AppService.UpdateOrganization = {
  methodName: "UpdateOrganization",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateOrganizationRequest,
  responseType: app_v1_app_pb.UpdateOrganizationResponse
};

AppService.DeleteOrganization = {
  methodName: "DeleteOrganization",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteOrganizationRequest,
  responseType: app_v1_app_pb.DeleteOrganizationResponse
};

AppService.ListOrganizationMembers = {
  methodName: "ListOrganizationMembers",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListOrganizationMembersRequest,
  responseType: app_v1_app_pb.ListOrganizationMembersResponse
};

AppService.CreateOrganizationInvite = {
  methodName: "CreateOrganizationInvite",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateOrganizationInviteRequest,
  responseType: app_v1_app_pb.CreateOrganizationInviteResponse
};

AppService.DeleteOrganizationMember = {
  methodName: "DeleteOrganizationMember",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteOrganizationMemberRequest,
  responseType: app_v1_app_pb.DeleteOrganizationMemberResponse
};

AppService.DeleteOrganizationInvite = {
  methodName: "DeleteOrganizationInvite",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteOrganizationInviteRequest,
  responseType: app_v1_app_pb.DeleteOrganizationInviteResponse
};

AppService.ResendOrganizationInvite = {
  methodName: "ResendOrganizationInvite",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ResendOrganizationInviteRequest,
  responseType: app_v1_app_pb.ResendOrganizationInviteResponse
};

AppService.CreateLocation = {
  methodName: "CreateLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateLocationRequest,
  responseType: app_v1_app_pb.CreateLocationResponse
};

AppService.GetLocation = {
  methodName: "GetLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetLocationRequest,
  responseType: app_v1_app_pb.GetLocationResponse
};

AppService.UpdateLocation = {
  methodName: "UpdateLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateLocationRequest,
  responseType: app_v1_app_pb.UpdateLocationResponse
};

AppService.DeleteLocation = {
  methodName: "DeleteLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteLocationRequest,
  responseType: app_v1_app_pb.DeleteLocationResponse
};

AppService.ListLocations = {
  methodName: "ListLocations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListLocationsRequest,
  responseType: app_v1_app_pb.ListLocationsResponse
};

AppService.ShareLocation = {
  methodName: "ShareLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ShareLocationRequest,
  responseType: app_v1_app_pb.ShareLocationResponse
};

AppService.UnshareLocation = {
  methodName: "UnshareLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UnshareLocationRequest,
  responseType: app_v1_app_pb.UnshareLocationResponse
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

AppService.GetRoverRentalRobots = {
  methodName: "GetRoverRentalRobots",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRoverRentalRobotsRequest,
  responseType: app_v1_app_pb.GetRoverRentalRobotsResponse
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

AppService.MarkPartForRestart = {
  methodName: "MarkPartForRestart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.MarkPartForRestartRequest,
  responseType: app_v1_app_pb.MarkPartForRestartResponse
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

AppService.ListRobots = {
  methodName: "ListRobots",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListRobotsRequest,
  responseType: app_v1_app_pb.ListRobotsResponse
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

AppService.ListFragments = {
  methodName: "ListFragments",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListFragmentsRequest,
  responseType: app_v1_app_pb.ListFragmentsResponse
};

AppService.GetFragment = {
  methodName: "GetFragment",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetFragmentRequest,
  responseType: app_v1_app_pb.GetFragmentResponse
};

AppService.CreateFragment = {
  methodName: "CreateFragment",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateFragmentRequest,
  responseType: app_v1_app_pb.CreateFragmentResponse
};

AppService.UpdateFragment = {
  methodName: "UpdateFragment",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateFragmentRequest,
  responseType: app_v1_app_pb.UpdateFragmentResponse
};

AppService.DeleteFragment = {
  methodName: "DeleteFragment",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteFragmentRequest,
  responseType: app_v1_app_pb.DeleteFragmentResponse
};

AppService.AddRole = {
  methodName: "AddRole",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.AddRoleRequest,
  responseType: app_v1_app_pb.AddRoleResponse
};

AppService.RemoveRole = {
  methodName: "RemoveRole",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.RemoveRoleRequest,
  responseType: app_v1_app_pb.RemoveRoleResponse
};

AppService.ListAuthorizations = {
  methodName: "ListAuthorizations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListAuthorizationsRequest,
  responseType: app_v1_app_pb.ListAuthorizationsResponse
};

AppService.CheckPermissions = {
  methodName: "CheckPermissions",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CheckPermissionsRequest,
  responseType: app_v1_app_pb.CheckPermissionsResponse
};

exports.AppService = AppService;

function AppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AppServiceClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateOrganization, {
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

AppServiceClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetOrganization, {
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

AppServiceClient.prototype.updateOrganization = function updateOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateOrganization, {
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

AppServiceClient.prototype.deleteOrganization = function deleteOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteOrganization, {
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

AppServiceClient.prototype.listOrganizationMembers = function listOrganizationMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListOrganizationMembers, {
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

AppServiceClient.prototype.createOrganizationInvite = function createOrganizationInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateOrganizationInvite, {
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

AppServiceClient.prototype.deleteOrganizationMember = function deleteOrganizationMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteOrganizationMember, {
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

AppServiceClient.prototype.deleteOrganizationInvite = function deleteOrganizationInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteOrganizationInvite, {
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

AppServiceClient.prototype.resendOrganizationInvite = function resendOrganizationInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ResendOrganizationInvite, {
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

AppServiceClient.prototype.getLocation = function getLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetLocation, {
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

AppServiceClient.prototype.updateLocation = function updateLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateLocation, {
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

AppServiceClient.prototype.deleteLocation = function deleteLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteLocation, {
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

AppServiceClient.prototype.shareLocation = function shareLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ShareLocation, {
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

AppServiceClient.prototype.unshareLocation = function unshareLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UnshareLocation, {
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

AppServiceClient.prototype.getRoverRentalRobots = function getRoverRentalRobots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRoverRentalRobots, {
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

AppServiceClient.prototype.markPartForRestart = function markPartForRestart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.MarkPartForRestart, {
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

AppServiceClient.prototype.listRobots = function listRobots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListRobots, {
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

AppServiceClient.prototype.listFragments = function listFragments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListFragments, {
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

AppServiceClient.prototype.getFragment = function getFragment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetFragment, {
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

AppServiceClient.prototype.createFragment = function createFragment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateFragment, {
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

AppServiceClient.prototype.updateFragment = function updateFragment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateFragment, {
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

AppServiceClient.prototype.deleteFragment = function deleteFragment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteFragment, {
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

AppServiceClient.prototype.addRole = function addRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.AddRole, {
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

AppServiceClient.prototype.removeRole = function removeRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.RemoveRole, {
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

AppServiceClient.prototype.listAuthorizations = function listAuthorizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListAuthorizations, {
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

AppServiceClient.prototype.checkPermissions = function checkPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CheckPermissions, {
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

