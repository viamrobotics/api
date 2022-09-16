// package: viam.app.data.v1
// file: app/data/v1/data.proto

var app_data_v1_data_pb = require("../../../app/data/v1/data_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataService = (function () {
  function DataService() {}
  DataService.serviceName = "viam.app.data.v1.DataService";
  return DataService;
}());

DataService.Query = {
  methodName: "Query",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.QueryRequest,
  responseType: app_data_v1_data_pb.QueryResponse
};

exports.DataService = DataService;

function DataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataServiceClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.Query, {
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

exports.DataServiceClient = DataServiceClient;

