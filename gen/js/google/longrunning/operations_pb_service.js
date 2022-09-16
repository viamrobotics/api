// package: google.longrunning
// file: google/longrunning/operations.proto

var google_longrunning_operations_pb = require("../../google/longrunning/operations_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Operations = (function () {
  function Operations() {}
  Operations.serviceName = "google.longrunning.Operations";
  return Operations;
}());

Operations.ListOperations = {
  methodName: "ListOperations",
  service: Operations,
  requestStream: false,
  responseStream: false,
  requestType: google_longrunning_operations_pb.ListOperationsRequest,
  responseType: google_longrunning_operations_pb.ListOperationsResponse
};

Operations.GetOperation = {
  methodName: "GetOperation",
  service: Operations,
  requestStream: false,
  responseStream: false,
  requestType: google_longrunning_operations_pb.GetOperationRequest,
  responseType: google_longrunning_operations_pb.Operation
};

Operations.DeleteOperation = {
  methodName: "DeleteOperation",
  service: Operations,
  requestStream: false,
  responseStream: false,
  requestType: google_longrunning_operations_pb.DeleteOperationRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Operations.CancelOperation = {
  methodName: "CancelOperation",
  service: Operations,
  requestStream: false,
  responseStream: false,
  requestType: google_longrunning_operations_pb.CancelOperationRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Operations.WaitOperation = {
  methodName: "WaitOperation",
  service: Operations,
  requestStream: false,
  responseStream: false,
  requestType: google_longrunning_operations_pb.WaitOperationRequest,
  responseType: google_longrunning_operations_pb.Operation
};

exports.Operations = Operations;

function OperationsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OperationsClient.prototype.listOperations = function listOperations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Operations.ListOperations, {
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

OperationsClient.prototype.getOperation = function getOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Operations.GetOperation, {
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

OperationsClient.prototype.deleteOperation = function deleteOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Operations.DeleteOperation, {
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

OperationsClient.prototype.cancelOperation = function cancelOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Operations.CancelOperation, {
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

OperationsClient.prototype.waitOperation = function waitOperation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Operations.WaitOperation, {
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

exports.OperationsClient = OperationsClient;

