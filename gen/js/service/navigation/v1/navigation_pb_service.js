// package: viam.service.navigation.v1
// file: service/navigation/v1/navigation.proto

var service_navigation_v1_navigation_pb = require("../../../service/navigation/v1/navigation_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NavigationService = (function () {
  function NavigationService() {}
  NavigationService.serviceName = "viam.service.navigation.v1.NavigationService";
  return NavigationService;
}());

NavigationService.GetMode = {
  methodName: "GetMode",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetModeRequest,
  responseType: service_navigation_v1_navigation_pb.GetModeResponse
};

NavigationService.SetMode = {
  methodName: "SetMode",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.SetModeRequest,
  responseType: service_navigation_v1_navigation_pb.SetModeResponse
};

NavigationService.GetLocation = {
  methodName: "GetLocation",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetLocationRequest,
  responseType: service_navigation_v1_navigation_pb.GetLocationResponse
};

NavigationService.GetWaypoints = {
  methodName: "GetWaypoints",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.GetWaypointsRequest,
  responseType: service_navigation_v1_navigation_pb.GetWaypointsResponse
};

NavigationService.AddWaypoint = {
  methodName: "AddWaypoint",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.AddWaypointRequest,
  responseType: service_navigation_v1_navigation_pb.AddWaypointResponse
};

NavigationService.RemoveWaypoint = {
  methodName: "RemoveWaypoint",
  service: NavigationService,
  requestStream: false,
  responseStream: false,
  requestType: service_navigation_v1_navigation_pb.RemoveWaypointRequest,
  responseType: service_navigation_v1_navigation_pb.RemoveWaypointResponse
};

exports.NavigationService = NavigationService;

function NavigationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NavigationServiceClient.prototype.getMode = function getMode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetMode, {
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

NavigationServiceClient.prototype.setMode = function setMode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.SetMode, {
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

NavigationServiceClient.prototype.getWaypoints = function getWaypoints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.GetWaypoints, {
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

NavigationServiceClient.prototype.addWaypoint = function addWaypoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.AddWaypoint, {
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

NavigationServiceClient.prototype.removeWaypoint = function removeWaypoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NavigationService.RemoveWaypoint, {
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

