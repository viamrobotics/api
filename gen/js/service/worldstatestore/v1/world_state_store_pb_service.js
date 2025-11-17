// package: viam.service.worldstatestore.v1
// file: service/worldstatestore/v1/world_state_store.proto

var service_worldstatestore_v1_world_state_store_pb = require("../../../service/worldstatestore/v1/world_state_store_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorldStateStoreService = (function () {
  function WorldStateStoreService() {}
  WorldStateStoreService.serviceName = "viam.service.worldstatestore.v1.WorldStateStoreService";
  return WorldStateStoreService;
}());

WorldStateStoreService.ListUUIDs = {
  methodName: "ListUUIDs",
  service: WorldStateStoreService,
  requestStream: false,
  responseStream: false,
  requestType: service_worldstatestore_v1_world_state_store_pb.ListUUIDsRequest,
  responseType: service_worldstatestore_v1_world_state_store_pb.ListUUIDsResponse
};

WorldStateStoreService.GetTransform = {
  methodName: "GetTransform",
  service: WorldStateStoreService,
  requestStream: false,
  responseStream: false,
  requestType: service_worldstatestore_v1_world_state_store_pb.GetTransformRequest,
  responseType: service_worldstatestore_v1_world_state_store_pb.GetTransformResponse
};

WorldStateStoreService.StreamTransformChanges = {
  methodName: "StreamTransformChanges",
  service: WorldStateStoreService,
  requestStream: false,
  responseStream: true,
  requestType: service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesRequest,
  responseType: service_worldstatestore_v1_world_state_store_pb.StreamTransformChangesResponse
};

WorldStateStoreService.DoCommand = {
  methodName: "DoCommand",
  service: WorldStateStoreService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.WorldStateStoreService = WorldStateStoreService;

function WorldStateStoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorldStateStoreServiceClient.prototype.listUUIDs = function listUUIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorldStateStoreService.ListUUIDs, {
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

WorldStateStoreServiceClient.prototype.getTransform = function getTransform(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorldStateStoreService.GetTransform, {
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

WorldStateStoreServiceClient.prototype.streamTransformChanges = function streamTransformChanges(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WorldStateStoreService.StreamTransformChanges, {
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

WorldStateStoreServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorldStateStoreService.DoCommand, {
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

exports.WorldStateStoreServiceClient = WorldStateStoreServiceClient;

