// package: viam.app.data.v1
// file: app/data/v1/data.proto

var app_data_v1_data_pb = require("../../../app/data/v1/data_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataService = (function () {
  function DataService() {}
  DataService.serviceName = "viam.app.data.v1.DataService";
  return DataService;
}());

DataService.TabularDataByFilter = {
  methodName: "TabularDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: true,
  requestType: app_data_v1_data_pb.TabularDataByFilterRequest,
  responseType: app_data_v1_data_pb.TabularDataByFilterResponse
};

DataService.BinaryDataByFilter = {
  methodName: "BinaryDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: true,
  requestType: app_data_v1_data_pb.BinaryDataByFilterRequest,
  responseType: app_data_v1_data_pb.BinaryDataByFilterResponse
};

DataService.BinaryDataByIDs = {
  methodName: "BinaryDataByIDs",
  service: DataService,
  requestStream: false,
  responseStream: true,
  requestType: app_data_v1_data_pb.BinaryDataByIDsRequest,
  responseType: app_data_v1_data_pb.BinaryDataByIDsResponse
};

exports.DataService = DataService;

function DataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataServiceClient.prototype.tabularDataByFilter = function tabularDataByFilter(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataService.TabularDataByFilter, {
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

DataServiceClient.prototype.binaryDataByFilter = function binaryDataByFilter(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataService.BinaryDataByFilter, {
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

DataServiceClient.prototype.binaryDataByIDs = function binaryDataByIDs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataService.BinaryDataByIDs, {
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

exports.DataServiceClient = DataServiceClient;

