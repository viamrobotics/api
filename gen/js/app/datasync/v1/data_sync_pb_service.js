// package: viam.app.datasync.v1
// file: app/datasync/v1/data_sync.proto

var app_datasync_v1_data_sync_pb = require("../../../app/datasync/v1/data_sync_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataSyncService = (function () {
  function DataSyncService() {}
  DataSyncService.serviceName = "viam.app.datasync.v1.DataSyncService";
  return DataSyncService;
}());

DataSyncService.Upload = {
  methodName: "Upload",
  service: DataSyncService,
  requestStream: true,
  responseStream: true,
  requestType: app_datasync_v1_data_sync_pb.UploadRequest,
  responseType: app_datasync_v1_data_sync_pb.UploadResponse
};

exports.DataSyncService = DataSyncService;

function DataSyncServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataSyncServiceClient.prototype.upload = function upload(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(DataSyncService.Upload, {
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
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
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

exports.DataSyncServiceClient = DataSyncServiceClient;

