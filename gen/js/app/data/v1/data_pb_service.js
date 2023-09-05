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
  responseStream: false,
  requestType: app_data_v1_data_pb.TabularDataByFilterRequest,
  responseType: app_data_v1_data_pb.TabularDataByFilterResponse
};

DataService.BinaryDataByFilter = {
  methodName: "BinaryDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.BinaryDataByFilterRequest,
  responseType: app_data_v1_data_pb.BinaryDataByFilterResponse
};

DataService.BinaryDataByIDs = {
  methodName: "BinaryDataByIDs",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.BinaryDataByIDsRequest,
  responseType: app_data_v1_data_pb.BinaryDataByIDsResponse
};

DataService.DeleteTabularDataByFilter = {
  methodName: "DeleteTabularDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.DeleteTabularDataByFilterRequest,
  responseType: app_data_v1_data_pb.DeleteTabularDataByFilterResponse
};

DataService.DeleteTabularData = {
  methodName: "DeleteTabularData",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.DeleteTabularDataRequest,
  responseType: app_data_v1_data_pb.DeleteTabularDataResponse
};

DataService.DeleteBinaryDataByFilter = {
  methodName: "DeleteBinaryDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.DeleteBinaryDataByFilterRequest,
  responseType: app_data_v1_data_pb.DeleteBinaryDataByFilterResponse
};

DataService.DeleteBinaryDataByIDs = {
  methodName: "DeleteBinaryDataByIDs",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.DeleteBinaryDataByIDsRequest,
  responseType: app_data_v1_data_pb.DeleteBinaryDataByIDsResponse
};

DataService.AddTagsToBinaryDataByIDs = {
  methodName: "AddTagsToBinaryDataByIDs",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.AddTagsToBinaryDataByIDsRequest,
  responseType: app_data_v1_data_pb.AddTagsToBinaryDataByIDsResponse
};

DataService.AddTagsToBinaryDataByFilter = {
  methodName: "AddTagsToBinaryDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.AddTagsToBinaryDataByFilterRequest,
  responseType: app_data_v1_data_pb.AddTagsToBinaryDataByFilterResponse
};

DataService.RemoveTagsFromBinaryDataByIDs = {
  methodName: "RemoveTagsFromBinaryDataByIDs",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsRequest,
  responseType: app_data_v1_data_pb.RemoveTagsFromBinaryDataByIDsResponse
};

DataService.RemoveTagsFromBinaryDataByFilter = {
  methodName: "RemoveTagsFromBinaryDataByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterRequest,
  responseType: app_data_v1_data_pb.RemoveTagsFromBinaryDataByFilterResponse
};

DataService.TagsByFilter = {
  methodName: "TagsByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.TagsByFilterRequest,
  responseType: app_data_v1_data_pb.TagsByFilterResponse
};

DataService.AddBoundingBoxToImageByID = {
  methodName: "AddBoundingBoxToImageByID",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.AddBoundingBoxToImageByIDRequest,
  responseType: app_data_v1_data_pb.AddBoundingBoxToImageByIDResponse
};

DataService.RemoveBoundingBoxFromImageByID = {
  methodName: "RemoveBoundingBoxFromImageByID",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDRequest,
  responseType: app_data_v1_data_pb.RemoveBoundingBoxFromImageByIDResponse
};

DataService.BoundingBoxLabelsByFilter = {
  methodName: "BoundingBoxLabelsByFilter",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.BoundingBoxLabelsByFilterRequest,
  responseType: app_data_v1_data_pb.BoundingBoxLabelsByFilterResponse
};

DataService.GetDatabaseConnection = {
  methodName: "GetDatabaseConnection",
  service: DataService,
  requestStream: false,
  responseStream: false,
  requestType: app_data_v1_data_pb.GetDatabaseConnectionRequest,
  responseType: app_data_v1_data_pb.GetDatabaseConnectionResponse
};

exports.DataService = DataService;

function DataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataServiceClient.prototype.tabularDataByFilter = function tabularDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.TabularDataByFilter, {
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

DataServiceClient.prototype.binaryDataByFilter = function binaryDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.BinaryDataByFilter, {
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

DataServiceClient.prototype.binaryDataByIDs = function binaryDataByIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.BinaryDataByIDs, {
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

DataServiceClient.prototype.deleteTabularDataByFilter = function deleteTabularDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.DeleteTabularDataByFilter, {
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

DataServiceClient.prototype.deleteTabularData = function deleteTabularData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.DeleteTabularData, {
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

DataServiceClient.prototype.deleteBinaryDataByFilter = function deleteBinaryDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.DeleteBinaryDataByFilter, {
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

DataServiceClient.prototype.deleteBinaryDataByIDs = function deleteBinaryDataByIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.DeleteBinaryDataByIDs, {
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

DataServiceClient.prototype.addTagsToBinaryDataByIDs = function addTagsToBinaryDataByIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.AddTagsToBinaryDataByIDs, {
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

DataServiceClient.prototype.addTagsToBinaryDataByFilter = function addTagsToBinaryDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.AddTagsToBinaryDataByFilter, {
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

DataServiceClient.prototype.removeTagsFromBinaryDataByIDs = function removeTagsFromBinaryDataByIDs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.RemoveTagsFromBinaryDataByIDs, {
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

DataServiceClient.prototype.removeTagsFromBinaryDataByFilter = function removeTagsFromBinaryDataByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.RemoveTagsFromBinaryDataByFilter, {
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

DataServiceClient.prototype.tagsByFilter = function tagsByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.TagsByFilter, {
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

DataServiceClient.prototype.addBoundingBoxToImageByID = function addBoundingBoxToImageByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.AddBoundingBoxToImageByID, {
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

DataServiceClient.prototype.removeBoundingBoxFromImageByID = function removeBoundingBoxFromImageByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.RemoveBoundingBoxFromImageByID, {
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

DataServiceClient.prototype.boundingBoxLabelsByFilter = function boundingBoxLabelsByFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.BoundingBoxLabelsByFilter, {
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

DataServiceClient.prototype.getDatabaseConnection = function getDatabaseConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataService.GetDatabaseConnection, {
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

