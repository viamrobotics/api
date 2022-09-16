// package: viam.service.datamanager.v1
// file: service/datamanager/v1/data_manager.proto

var service_datamanager_v1_data_manager_pb = require("../../../service/datamanager/v1/data_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataManagerService = (function () {
  function DataManagerService() {}
  DataManagerService.serviceName = "viam.service.datamanager.v1.DataManagerService";
  return DataManagerService;
}());

DataManagerService.Sync = {
  methodName: "Sync",
  service: DataManagerService,
  requestStream: false,
  responseStream: false,
  requestType: service_datamanager_v1_data_manager_pb.SyncRequest,
  responseType: service_datamanager_v1_data_manager_pb.SyncResponse
};

exports.DataManagerService = DataManagerService;

function DataManagerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataManagerServiceClient.prototype.sync = function sync(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataManagerService.Sync, {
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

exports.DataManagerServiceClient = DataManagerServiceClient;

