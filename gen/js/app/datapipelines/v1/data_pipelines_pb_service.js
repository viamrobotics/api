// package: viam.app.datapipelines.v1
// file: app/datapipelines/v1/data_pipelines.proto

var app_datapipelines_v1_data_pipelines_pb = require("../../../app/datapipelines/v1/data_pipelines_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataPipelinesService = (function () {
  function DataPipelinesService() {}
  DataPipelinesService.serviceName = "viam.app.datapipelines.v1.DataPipelinesService";
  return DataPipelinesService;
}());

DataPipelinesService.GetDataPipeline = {
  methodName: "GetDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.GetDataPipelineResponse
};

DataPipelinesService.ListDataPipelines = {
  methodName: "ListDataPipelines",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.ListDataPipelinesResponse
};

DataPipelinesService.CreateDataPipeline = {
  methodName: "CreateDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.CreateDataPipelineResponse
};

DataPipelinesService.UpdateDataPipeline = {
  methodName: "UpdateDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.UpdateDataPipelineResponse
};

DataPipelinesService.DeleteDataPipeline = {
  methodName: "DeleteDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineResponse
};

exports.DataPipelinesService = DataPipelinesService;

function DataPipelinesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataPipelinesServiceClient.prototype.getDataPipeline = function getDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.GetDataPipeline, {
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

DataPipelinesServiceClient.prototype.listDataPipelines = function listDataPipelines(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.ListDataPipelines, {
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

DataPipelinesServiceClient.prototype.createDataPipeline = function createDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.CreateDataPipeline, {
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

DataPipelinesServiceClient.prototype.updateDataPipeline = function updateDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.UpdateDataPipeline, {
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

DataPipelinesServiceClient.prototype.deleteDataPipeline = function deleteDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.DeleteDataPipeline, {
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

exports.DataPipelinesServiceClient = DataPipelinesServiceClient;

