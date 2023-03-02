// package: viam.app.mltraining.v1
// file: app/mltraining/v1/ml_training.proto

var app_mltraining_v1_ml_training_pb = require("../../../app/mltraining/v1/ml_training_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MLTrainingService = (function () {
  function MLTrainingService() {}
  MLTrainingService.serviceName = "viam.app.mltraining.v1.MLTrainingService";
  return MLTrainingService;
}());

MLTrainingService.SubmitTrainingJob = {
  methodName: "SubmitTrainingJob",
  service: MLTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: app_mltraining_v1_ml_training_pb.SubmitTrainingJobRequest,
  responseType: app_mltraining_v1_ml_training_pb.SubmitTrainingJobResponse
};

MLTrainingService.GetTrainingJob = {
  methodName: "GetTrainingJob",
  service: MLTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: app_mltraining_v1_ml_training_pb.GetTrainingJobRequest,
  responseType: app_mltraining_v1_ml_training_pb.GetTrainingJobResponse
};

MLTrainingService.ListTrainingJobs = {
  methodName: "ListTrainingJobs",
  service: MLTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: app_mltraining_v1_ml_training_pb.ListTrainingJobsRequest,
  responseType: app_mltraining_v1_ml_training_pb.ListTrainingJobsResponse
};

MLTrainingService.CancelTrainingJob = {
  methodName: "CancelTrainingJob",
  service: MLTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: app_mltraining_v1_ml_training_pb.CancelTrainingJobRequest,
  responseType: app_mltraining_v1_ml_training_pb.CancelTrainingJobResponse
};

exports.MLTrainingService = MLTrainingService;

function MLTrainingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MLTrainingServiceClient.prototype.submitTrainingJob = function submitTrainingJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLTrainingService.SubmitTrainingJob, {
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

MLTrainingServiceClient.prototype.getTrainingJob = function getTrainingJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLTrainingService.GetTrainingJob, {
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

MLTrainingServiceClient.prototype.listTrainingJobs = function listTrainingJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLTrainingService.ListTrainingJobs, {
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

MLTrainingServiceClient.prototype.cancelTrainingJob = function cancelTrainingJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MLTrainingService.CancelTrainingJob, {
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

exports.MLTrainingServiceClient = MLTrainingServiceClient;

