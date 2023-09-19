// package: viam.app.dataset.v1
// file: app/dataset/v1/dataset.proto

var app_dataset_v1_dataset_pb = require("../../../app/dataset/v1/dataset_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DatasetService = (function () {
  function DatasetService() {}
  DatasetService.serviceName = "viam.app.dataset.v1.DatasetService";
  return DatasetService;
}());

DatasetService.CreateDataset = {
  methodName: "CreateDataset",
  service: DatasetService,
  requestStream: false,
  responseStream: false,
  requestType: app_dataset_v1_dataset_pb.CreateDatasetRequest,
  responseType: app_dataset_v1_dataset_pb.CreateDatasetResponse
};

DatasetService.DeleteDataset = {
  methodName: "DeleteDataset",
  service: DatasetService,
  requestStream: false,
  responseStream: false,
  requestType: app_dataset_v1_dataset_pb.DeleteDatasetRequest,
  responseType: app_dataset_v1_dataset_pb.DeleteDatasetResponse
};

DatasetService.RenameDataset = {
  methodName: "RenameDataset",
  service: DatasetService,
  requestStream: false,
  responseStream: false,
  requestType: app_dataset_v1_dataset_pb.RenameDatasetRequest,
  responseType: app_dataset_v1_dataset_pb.RenameDatasetResponse
};

DatasetService.ListDatasetsByOrganizationID = {
  methodName: "ListDatasetsByOrganizationID",
  service: DatasetService,
  requestStream: false,
  responseStream: false,
  requestType: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDRequest,
  responseType: app_dataset_v1_dataset_pb.ListDatasetsByOrganizationIDResponse
};

DatasetService.ListDatasetsByIDs = {
  methodName: "ListDatasetsByIDs",
  service: DatasetService,
  requestStream: false,
  responseStream: false,
  requestType: app_dataset_v1_dataset_pb.ListDatasetsByIDsRequest,
  responseType: app_dataset_v1_dataset_pb.ListDatasetsByIDsResponse
};

exports.DatasetService = DatasetService;

function DatasetServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DatasetServiceClient.prototype.createDataset = function createDataset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatasetService.CreateDataset, {
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

DatasetServiceClient.prototype.deleteDataset = function deleteDataset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatasetService.DeleteDataset, {
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

DatasetServiceClient.prototype.renameDataset = function renameDataset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatasetService.RenameDataset, {
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

DatasetServiceClient.prototype.listDatasetsByOrganizationID = function listDatasetsByOrganizationID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatasetService.ListDatasetsByOrganizationID, {
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

DatasetServiceClient.prototype.listDatasetsByIDs = function listDatasetsByIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatasetService.ListDatasetsByIDs, {
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

exports.DatasetServiceClient = DatasetServiceClient;

