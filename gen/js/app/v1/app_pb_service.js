// package: viam.app.v1
// file: app/v1/app.proto

var app_v1_app_pb = require("../../app/v1/app_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AppService = (function () {
  function AppService() {}
  AppService.serviceName = "viam.app.v1.AppService";
  return AppService;
}());

AppService.GetUserIDByEmail = {
  methodName: "GetUserIDByEmail",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetUserIDByEmailRequest,
  responseType: app_v1_app_pb.GetUserIDByEmailResponse
};

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

AppService.GetOrganizationsWithAccessToLocation = {
  methodName: "GetOrganizationsWithAccessToLocation",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetOrganizationsWithAccessToLocationRequest,
  responseType: app_v1_app_pb.GetOrganizationsWithAccessToLocationResponse
};

AppService.ListOrganizationsByUser = {
  methodName: "ListOrganizationsByUser",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListOrganizationsByUserRequest,
  responseType: app_v1_app_pb.ListOrganizationsByUserResponse
};

AppService.GetOrganization = {
  methodName: "GetOrganization",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetOrganizationRequest,
  responseType: app_v1_app_pb.GetOrganizationResponse
};

AppService.GetOrganizationNamespaceAvailability = {
  methodName: "GetOrganizationNamespaceAvailability",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetOrganizationNamespaceAvailabilityRequest,
  responseType: app_v1_app_pb.GetOrganizationNamespaceAvailabilityResponse
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

AppService.UpdateOrganizationInviteAuthorizations = {
  methodName: "UpdateOrganizationInviteAuthorizations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsRequest,
  responseType: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsResponse
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

AppService.GetphysicalDevice = {
  methodName: "GetphysicalDevice",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDeviceRequest,
  responseType: app_v1_app_pb.GetphysicalDeviceResponse
};

AppService.GetRoverRentalphysicalDevices = {
  methodName: "GetRoverRentalphysicalDevices",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRoverRentalphysicalDevicesRequest,
  responseType: app_v1_app_pb.GetRoverRentalphysicalDevicesResponse
};

AppService.GetphysicalDeviceParts = {
  methodName: "GetphysicalDeviceParts",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDevicePartsRequest,
  responseType: app_v1_app_pb.GetphysicalDevicePartsResponse
};

AppService.GetphysicalDevicePart = {
  methodName: "GetphysicalDevicePart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDevicePartRequest,
  responseType: app_v1_app_pb.GetphysicalDevicePartResponse
};

AppService.GetphysicalDevicePartLogs = {
  methodName: "GetphysicalDevicePartLogs",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDevicePartLogsRequest,
  responseType: app_v1_app_pb.GetphysicalDevicePartLogsResponse
};

AppService.TailphysicalDevicePartLogs = {
  methodName: "TailphysicalDevicePartLogs",
  service: AppService,
  requestStream: false,
  responseStream: true,
  requestType: app_v1_app_pb.TailphysicalDevicePartLogsRequest,
  responseType: app_v1_app_pb.TailphysicalDevicePartLogsResponse
};

AppService.GetphysicalDevicePartHistory = {
  methodName: "GetphysicalDevicePartHistory",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDevicePartHistoryRequest,
  responseType: app_v1_app_pb.GetphysicalDevicePartHistoryResponse
};

AppService.UpdatephysicalDevicePart = {
  methodName: "UpdatephysicalDevicePart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdatephysicalDevicePartRequest,
  responseType: app_v1_app_pb.UpdatephysicalDevicePartResponse
};

AppService.NewphysicalDevicePart = {
  methodName: "NewphysicalDevicePart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.NewphysicalDevicePartRequest,
  responseType: app_v1_app_pb.NewphysicalDevicePartResponse
};

AppService.DeletephysicalDevicePart = {
  methodName: "DeletephysicalDevicePart",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeletephysicalDevicePartRequest,
  responseType: app_v1_app_pb.DeletephysicalDevicePartResponse
};

AppService.GetphysicalDeviceAPIKeys = {
  methodName: "GetphysicalDeviceAPIKeys",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetphysicalDeviceAPIKeysRequest,
  responseType: app_v1_app_pb.GetphysicalDeviceAPIKeysResponse
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

AppService.CreatephysicalDevicePartSecret = {
  methodName: "CreatephysicalDevicePartSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreatephysicalDevicePartSecretRequest,
  responseType: app_v1_app_pb.CreatephysicalDevicePartSecretResponse
};

AppService.DeletephysicalDevicePartSecret = {
  methodName: "DeletephysicalDevicePartSecret",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeletephysicalDevicePartSecretRequest,
  responseType: app_v1_app_pb.DeletephysicalDevicePartSecretResponse
};

AppService.ListphysicalDevices = {
  methodName: "ListphysicalDevices",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListphysicalDevicesRequest,
  responseType: app_v1_app_pb.ListphysicalDevicesResponse
};

AppService.NewphysicalDevice = {
  methodName: "NewphysicalDevice",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.NewphysicalDeviceRequest,
  responseType: app_v1_app_pb.NewphysicalDeviceResponse
};

AppService.UpdatephysicalDevice = {
  methodName: "UpdatephysicalDevice",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdatephysicalDeviceRequest,
  responseType: app_v1_app_pb.UpdatephysicalDeviceResponse
};

AppService.DeletephysicalDevice = {
  methodName: "DeletephysicalDevice",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeletephysicalDeviceRequest,
  responseType: app_v1_app_pb.DeletephysicalDeviceResponse
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

AppService.ChangeRole = {
  methodName: "ChangeRole",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ChangeRoleRequest,
  responseType: app_v1_app_pb.ChangeRoleResponse
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

AppService.GetRegistryItem = {
  methodName: "GetRegistryItem",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetRegistryItemRequest,
  responseType: app_v1_app_pb.GetRegistryItemResponse
};

AppService.CreateRegistryItem = {
  methodName: "CreateRegistryItem",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateRegistryItemRequest,
  responseType: app_v1_app_pb.CreateRegistryItemResponse
};

AppService.UpdateRegistryItem = {
  methodName: "UpdateRegistryItem",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateRegistryItemRequest,
  responseType: app_v1_app_pb.UpdateRegistryItemResponse
};

AppService.ListRegistryItems = {
  methodName: "ListRegistryItems",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListRegistryItemsRequest,
  responseType: app_v1_app_pb.ListRegistryItemsResponse
};

AppService.DeleteRegistryItem = {
  methodName: "DeleteRegistryItem",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteRegistryItemRequest,
  responseType: app_v1_app_pb.DeleteRegistryItemResponse
};

AppService.CreateModule = {
  methodName: "CreateModule",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateModuleRequest,
  responseType: app_v1_app_pb.CreateModuleResponse
};

AppService.UpdateModule = {
  methodName: "UpdateModule",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.UpdateModuleRequest,
  responseType: app_v1_app_pb.UpdateModuleResponse
};

AppService.UploadModuleFile = {
  methodName: "UploadModuleFile",
  service: AppService,
  requestStream: true,
  responseStream: false,
  requestType: app_v1_app_pb.UploadModuleFileRequest,
  responseType: app_v1_app_pb.UploadModuleFileResponse
};

AppService.GetModule = {
  methodName: "GetModule",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.GetModuleRequest,
  responseType: app_v1_app_pb.GetModuleResponse
};

AppService.ListModules = {
  methodName: "ListModules",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListModulesRequest,
  responseType: app_v1_app_pb.ListModulesResponse
};

AppService.CreateKey = {
  methodName: "CreateKey",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateKeyRequest,
  responseType: app_v1_app_pb.CreateKeyResponse
};

AppService.DeleteKey = {
  methodName: "DeleteKey",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.DeleteKeyRequest,
  responseType: app_v1_app_pb.DeleteKeyResponse
};

AppService.ListKeys = {
  methodName: "ListKeys",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.ListKeysRequest,
  responseType: app_v1_app_pb.ListKeysResponse
};

AppService.RenameKey = {
  methodName: "RenameKey",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.RenameKeyRequest,
  responseType: app_v1_app_pb.RenameKeyResponse
};

AppService.RotateKey = {
  methodName: "RotateKey",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.RotateKeyRequest,
  responseType: app_v1_app_pb.RotateKeyResponse
};

AppService.CreateKeyFromExistingKeyAuthorizations = {
  methodName: "CreateKeyFromExistingKeyAuthorizations",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsRequest,
  responseType: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsResponse
};

exports.AppService = AppService;

function AppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AppServiceClient.prototype.getUserIDByEmail = function getUserIDByEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetUserIDByEmail, {
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

AppServiceClient.prototype.getOrganizationsWithAccessToLocation = function getOrganizationsWithAccessToLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetOrganizationsWithAccessToLocation, {
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

AppServiceClient.prototype.listOrganizationsByUser = function listOrganizationsByUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListOrganizationsByUser, {
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

AppServiceClient.prototype.getOrganizationNamespaceAvailability = function getOrganizationNamespaceAvailability(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetOrganizationNamespaceAvailability, {
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

AppServiceClient.prototype.updateOrganizationInviteAuthorizations = function updateOrganizationInviteAuthorizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateOrganizationInviteAuthorizations, {
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

AppServiceClient.prototype.getphysicalDevice = function getphysicalDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDevice, {
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

AppServiceClient.prototype.getRoverRentalphysicalDevices = function getRoverRentalphysicalDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRoverRentalphysicalDevices, {
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

AppServiceClient.prototype.getphysicalDeviceParts = function getphysicalDeviceParts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDeviceParts, {
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

AppServiceClient.prototype.getphysicalDevicePart = function getphysicalDevicePart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDevicePart, {
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

AppServiceClient.prototype.getphysicalDevicePartLogs = function getphysicalDevicePartLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDevicePartLogs, {
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

AppServiceClient.prototype.tailphysicalDevicePartLogs = function tailphysicalDevicePartLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AppService.TailphysicalDevicePartLogs, {
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

AppServiceClient.prototype.getphysicalDevicePartHistory = function getphysicalDevicePartHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDevicePartHistory, {
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

AppServiceClient.prototype.updatephysicalDevicePart = function updatephysicalDevicePart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdatephysicalDevicePart, {
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

AppServiceClient.prototype.newphysicalDevicePart = function newphysicalDevicePart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.NewphysicalDevicePart, {
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

AppServiceClient.prototype.deletephysicalDevicePart = function deletephysicalDevicePart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeletephysicalDevicePart, {
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

AppServiceClient.prototype.getphysicalDeviceAPIKeys = function getphysicalDeviceAPIKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetphysicalDeviceAPIKeys, {
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

AppServiceClient.prototype.createphysicalDevicePartSecret = function createphysicalDevicePartSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreatephysicalDevicePartSecret, {
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

AppServiceClient.prototype.deletephysicalDevicePartSecret = function deletephysicalDevicePartSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeletephysicalDevicePartSecret, {
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

AppServiceClient.prototype.listphysicalDevices = function listphysicalDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListphysicalDevices, {
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

AppServiceClient.prototype.newphysicalDevice = function newphysicalDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.NewphysicalDevice, {
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

AppServiceClient.prototype.updatephysicalDevice = function updatephysicalDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdatephysicalDevice, {
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

AppServiceClient.prototype.deletephysicalDevice = function deletephysicalDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeletephysicalDevice, {
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

AppServiceClient.prototype.changeRole = function changeRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ChangeRole, {
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

AppServiceClient.prototype.getRegistryItem = function getRegistryItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetRegistryItem, {
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

AppServiceClient.prototype.createRegistryItem = function createRegistryItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateRegistryItem, {
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

AppServiceClient.prototype.updateRegistryItem = function updateRegistryItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateRegistryItem, {
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

AppServiceClient.prototype.listRegistryItems = function listRegistryItems(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListRegistryItems, {
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

AppServiceClient.prototype.deleteRegistryItem = function deleteRegistryItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteRegistryItem, {
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

AppServiceClient.prototype.createModule = function createModule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateModule, {
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

AppServiceClient.prototype.updateModule = function updateModule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.UpdateModule, {
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

AppServiceClient.prototype.uploadModuleFile = function uploadModuleFile(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(AppService.UploadModuleFile, {
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

AppServiceClient.prototype.getModule = function getModule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.GetModule, {
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

AppServiceClient.prototype.listModules = function listModules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListModules, {
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

AppServiceClient.prototype.createKey = function createKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateKey, {
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

AppServiceClient.prototype.deleteKey = function deleteKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.DeleteKey, {
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

AppServiceClient.prototype.listKeys = function listKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.ListKeys, {
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

AppServiceClient.prototype.renameKey = function renameKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.RenameKey, {
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

AppServiceClient.prototype.rotateKey = function rotateKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.RotateKey, {
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

AppServiceClient.prototype.createKeyFromExistingKeyAuthorizations = function createKeyFromExistingKeyAuthorizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.CreateKeyFromExistingKeyAuthorizations, {
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

