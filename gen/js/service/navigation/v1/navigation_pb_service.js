// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

var service_navigation_v1_navigation_pb = require("../../../service/navigation/v1/navigation_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NavigationService = (function () {
  function NavigationService() {}
  NavigationService.serviceName = "viam.service.navigation.v1.NavigationService";
  return NavigationService;
}());

NavigationService.AddLocation = {
  methodName: "AddLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.AddLocationRequest,
  responseType: service_navigation_v1_navigation_pb.AddLocationResponse
};

NavigationService.GetLocation = {
  methodName: "GetLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetLocationRequest,
  responseType: service_navigation_v1_navigation_pb.GetLocationResponse
};

NavigationService.ListLocations = {
  methodName: "ListLocations",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.ListLocationsRequest,
  responseType: service_navigation_v1_navigation_pb.ListLocationsResponse
};

NavigationService.UpdateLocation = {
  methodName: "UpdateLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.UpdateLocationRequest,
  responseType: service_navigation_v1_navigation_pb.UpdateLocationResponse
};

NavigationService.DeleteLocation = {
  methodName: "DeleteLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.DeleteLocationRequest,
  responseType: service_navigation_v1_navigation_pb.DeleteLocationResponse
};

NavigationService.AddRoute = {
  methodName: "AddRoute",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.AddRouteRequest,
  responseType: service_navigation_v1_navigation_pb.AddRouteResponse
};

NavigationService.GetRoute = {
  methodName: "GetRoute",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetRouteRequest,
  responseType: service_navigation_v1_navigation_pb.GetRouteResponse
};

NavigationService.ListRoutes = {
  methodName: "ListRoutes",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.ListRoutesRequest,
  responseType: service_navigation_v1_navigation_pb.ListRoutesResponse
};

NavigationService.UpdateRoute = {
  methodName: "UpdateRoute",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.UpdateRouteRequest,
  responseType: service_navigation_v1_navigation_pb.UpdateRouteResponse
};

NavigationService.DeleteRoute = {
  methodName: "DeleteRoute",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.DeleteRouteRequest,
  responseType: service_navigation_v1_navigation_pb.DeleteRouteResponse
};

NavigationService.AddZone = {
  methodName: "AddZone",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.AddZoneRequest,
  responseType: service_navigation_v1_navigation_pb.AddZoneResponse
};

NavigationService.GetZone = {
  methodName: "GetZone",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetZoneRequest,
  responseType: service_navigation_v1_navigation_pb.GetZoneResponse
};

NavigationService.ListZones = {
  methodName: "ListZones",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.ListZonesRequest,
  responseType: service_navigation_v1_navigation_pb.ListZonesResponse
};

NavigationService.UpdateZone = {
  methodName: "UpdateZone",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.UpdateZoneRequest,
  responseType: service_navigation_v1_navigation_pb.UpdateZoneResponse
};

NavigationService.DeleteZone = {
  methodName: "DeleteZone",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.DeleteZoneRequest,
  responseType: service_navigation_v1_navigation_pb.DeleteZoneResponse
};

NavigationService.NavigateToLocation = {
  methodName: "NavigateToLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.NavigateToLocationRequest,
  responseType: service_navigation_v1_navigation_pb.NavigateToLocationResponse
};

NavigationService.NavigateToPoint = {
  methodName: "NavigateToPoint",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.NavigateToPointRequest,
  responseType: service_navigation_v1_navigation_pb.NavigateToPointResponse
};

NavigationService.NavigateRoute = {
  methodName: "NavigateRoute",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.NavigateRouteRequest,
  responseType: service_navigation_v1_navigation_pb.NavigateRouteResponse
};

NavigationService.PlanToPoint = {
  methodName: "PlanToPoint",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.PlanToPointRequest,
  responseType: service_navigation_v1_navigation_pb.PlanToPointResponse
};

NavigationService.PlanToLocation = {
  methodName: "PlanToLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.PlanToLocationRequest,
  responseType: service_navigation_v1_navigation_pb.PlanToLocationResponse
};

NavigationService.ExecutePlan = {
  methodName: "ExecutePlan",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.ExecutePlanRequest,
  responseType: service_navigation_v1_navigation_pb.ExecutePlanResponse
};

NavigationService.GoToLocation = {
  methodName: "GoToLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GoToLocationRequest,
  responseType: service_navigation_v1_navigation_pb.GoToLocationResponse
};

NavigationService.GoToPoint = {
  methodName: "GoToPoint",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GoToPointRequest,
  responseType: service_navigation_v1_navigation_pb.GoToPointResponse
};

NavigationService.Suspend = {
  methodName: "Suspend",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.SuspendRequest,
  responseType: service_navigation_v1_navigation_pb.SuspendResponse
};

NavigationService.Resume = {
  methodName: "Resume",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.ResumeRequest,
  responseType: service_navigation_v1_navigation_pb.ResumeResponse
};

NavigationService.Cancel = {
  methodName: "Cancel",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.CancelRequest,
  responseType: service_navigation_v1_navigation_pb.CancelResponse
};

NavigationService.GetPosition = {
  methodName: "GetPosition",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetPositionRequest,
  responseType: service_navigation_v1_navigation_pb.GetPositionResponse
};

NavigationService.GetNavigationStatus = {
  methodName: "GetNavigationStatus",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetNavigationStatusRequest,
  responseType: service_navigation_v1_navigation_pb.GetNavigationStatusResponse
};

NavigationService.GetProperties = {
  methodName: "GetProperties",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetPropertiesRequest,
  responseType: service_navigation_v1_navigation_pb.GetPropertiesResponse
};

NavigationService.GetCostmap = {
  methodName: "GetCostmap",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetCostmapRequest,
  responseType: service_navigation_v1_navigation_pb.GetCostmapResponse
};

NavigationService.DoCommand = {
  methodName: "DoCommand",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

NavigationService.GetStatus = {
  methodName: "GetStatus",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetStatusRequest,
  responseType: common_v1_common_pb.GetStatusResponse
};

exports.NavigationService = NavigationService;

function NavigationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NavigationServiceClient.prototype.addLocation = function addLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.AddLocation, {
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

NavigationServiceClient.prototype.getLocation = function getLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetLocation, {
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

NavigationServiceClient.prototype.listLocations = function listLocations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.ListLocations, {
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

NavigationServiceClient.prototype.updateLocation = function updateLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.UpdateLocation, {
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

NavigationServiceClient.prototype.deleteLocation = function deleteLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.DeleteLocation, {
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

NavigationServiceClient.prototype.addRoute = function addRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.AddRoute, {
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

NavigationServiceClient.prototype.getRoute = function getRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetRoute, {
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

NavigationServiceClient.prototype.listRoutes = function listRoutes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.ListRoutes, {
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

NavigationServiceClient.prototype.updateRoute = function updateRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.UpdateRoute, {
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

NavigationServiceClient.prototype.deleteRoute = function deleteRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.DeleteRoute, {
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

NavigationServiceClient.prototype.addZone = function addZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.AddZone, {
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

NavigationServiceClient.prototype.getZone = function getZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetZone, {
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

NavigationServiceClient.prototype.listZones = function listZones(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.ListZones, {
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

NavigationServiceClient.prototype.updateZone = function updateZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.UpdateZone, {
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

NavigationServiceClient.prototype.deleteZone = function deleteZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.DeleteZone, {
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

NavigationServiceClient.prototype.navigateToLocation = function navigateToLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.NavigateToLocation, {
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

NavigationServiceClient.prototype.navigateToPoint = function navigateToPoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.NavigateToPoint, {
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

NavigationServiceClient.prototype.navigateRoute = function navigateRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.NavigateRoute, {
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

NavigationServiceClient.prototype.planToPoint = function planToPoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.PlanToPoint, {
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

NavigationServiceClient.prototype.planToLocation = function planToLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.PlanToLocation, {
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

NavigationServiceClient.prototype.executePlan = function executePlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.ExecutePlan, {
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

NavigationServiceClient.prototype.goToLocation = function goToLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GoToLocation, {
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

NavigationServiceClient.prototype.goToPoint = function goToPoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GoToPoint, {
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

NavigationServiceClient.prototype.suspend = function suspend(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.Suspend, {
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

NavigationServiceClient.prototype.resume = function resume(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.Resume, {
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

NavigationServiceClient.prototype.cancel = function cancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.Cancel, {
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

NavigationServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetPosition, {
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

NavigationServiceClient.prototype.getNavigationStatus = function getNavigationStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetNavigationStatus, {
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

NavigationServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetProperties, {
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

NavigationServiceClient.prototype.getCostmap = function getCostmap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetCostmap, {
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

NavigationServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.DoCommand, {
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

NavigationServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetStatus, {
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

exports.NavigationServiceClient = NavigationServiceClient;

