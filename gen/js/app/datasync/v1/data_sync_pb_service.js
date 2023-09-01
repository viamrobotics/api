// package: viam.app.datasync.v1
// file: app/datasync/v1/data_sync.proto

var app_datasync_v1_data_sync_pb = require("../../../app/datasync/v1/data_sync_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataSyncService = (function () {
  function DataSyncService() {}
  DataSyncService.serviceName = "viam.app.datasync.v1.DataSyncService";
  return DataSyncService;
}());

DataSyncService.DataCaptureUpload = {
  methodName: "DataCaptureUpload",
  service: DataSyncService,
  requestStream: false,
  responseStream: false,
  requestType: app_datasync_v1_data_sync_pb.DataCaptureUploadRequest,
  responseType: app_datasync_v1_data_sync_pb.DataCaptureUploadResponse
};

DataSyncService.FileUpload = {
  methodName: "FileUpload",
  service: DataSyncService,
  requestStream: true,
  responseStream: false,
  requestType: app_datasync_v1_data_sync_pb.FileUploadRequest,
  responseType: app_datasync_v1_data_sync_pb.FileUploadResponse
};

DataSyncService.StreamingDataCaptureUpload = {
  methodName: "StreamingDataCaptureUpload",
  service: DataSyncService,
  requestStream: true,
  responseStream: false,
  requestType: app_datasync_v1_data_sync_pb.StreamingDataCaptureUploadRequest,
  responseType: app_datasync_v1_data_sync_pb.StreamingDataCaptureUploadResponse
};

exports.DataSyncService = DataSyncService;

function DataSyncServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataSyncServiceClient.prototype.dataCaptureUpload = function dataCaptureUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataSyncService.DataCaptureUpload, {
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

DataSyncServiceClient.prototype.fileUpload = function fileUpload(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataSyncService.FileUpload, {
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

DataSyncServiceClient.prototype.streamingDataCaptureUpload = function streamingDataCaptureUpload(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataSyncService.StreamingDataCaptureUpload, {
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

exports.DataSyncServiceClient = DataSyncServiceClient;

