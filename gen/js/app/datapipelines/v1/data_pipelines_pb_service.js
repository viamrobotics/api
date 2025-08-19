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

DataPipelinesService.RenameDataPipeline = {
  methodName: "RenameDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.RenameDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.RenameDataPipelineResponse
};

DataPipelinesService.DeleteDataPipeline = {
  methodName: "DeleteDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.DeleteDataPipelineResponse
};

DataPipelinesService.EnableDataPipeline = {
  methodName: "EnableDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.EnableDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.EnableDataPipelineResponse
};

DataPipelinesService.DisableDataPipeline = {
  methodName: "DisableDataPipeline",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.DisableDataPipelineRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.DisableDataPipelineResponse
};

DataPipelinesService.ListDataPipelineRuns = {
  methodName: "ListDataPipelineRuns",
  service: DataPipelinesService,
  requestStream: false,
  responseStream: false,
  requestType: app_datapipelines_v1_data_pipelines_pb.ListDataPipelineRunsRequest,
  responseType: app_datapipelines_v1_data_pipelines_pb.ListDataPipelineRunsResponse
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

DataPipelinesServiceClient.prototype.renameDataPipeline = function renameDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.RenameDataPipeline, {
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

DataPipelinesServiceClient.prototype.enableDataPipeline = function enableDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.EnableDataPipeline, {
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

DataPipelinesServiceClient.prototype.disableDataPipeline = function disableDataPipeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.DisableDataPipeline, {
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

DataPipelinesServiceClient.prototype.listDataPipelineRuns = function listDataPipelineRuns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataPipelinesService.ListDataPipelineRuns, {
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

