// package: viam.app.cloudslam.v1
// file: app/cloudslam/v1/cloud_slam.proto

var app_cloudslam_v1_cloud_slam_pb = require("../../../app/cloudslam/v1/cloud_slam_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CloudSLAMService = (function () {
  function CloudSLAMService() {}
  CloudSLAMService.serviceName = "viam.app.cloudslam.v1.CloudSLAMService";
  return CloudSLAMService;
}());

CloudSLAMService.StartMappingSession = {
  methodName: "StartMappingSession",
  service: CloudSLAMService,
  requestStream: false,
  responseStream: false,
  requestType: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionRequest,
  responseType: app_cloudslam_v1_cloud_slam_pb.StartMappingSessionResponse
};

CloudSLAMService.GetActiveMappingSessionsForRobot = {
  methodName: "GetActiveMappingSessionsForRobot",
  service: CloudSLAMService,
  requestStream: false,
  responseStream: false,
  requestType: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotRequest,
  responseType: app_cloudslam_v1_cloud_slam_pb.GetActiveMappingSessionsForRobotResponse
};

CloudSLAMService.GetMappingSessionPointCloud = {
  methodName: "GetMappingSessionPointCloud",
  service: CloudSLAMService,
  requestStream: false,
  responseStream: false,
  requestType: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudRequest,
  responseType: app_cloudslam_v1_cloud_slam_pb.GetMappingSessionPointCloudResponse
};

CloudSLAMService.ListMappingSessions = {
  methodName: "ListMappingSessions",
  service: CloudSLAMService,
  requestStream: false,
  responseStream: false,
  requestType: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsRequest,
  responseType: app_cloudslam_v1_cloud_slam_pb.ListMappingSessionsResponse
};

CloudSLAMService.StopMappingSession = {
  methodName: "StopMappingSession",
  service: CloudSLAMService,
  requestStream: false,
  responseStream: false,
  requestType: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionRequest,
  responseType: app_cloudslam_v1_cloud_slam_pb.StopMappingSessionResponse
};

exports.CloudSLAMService = CloudSLAMService;

function CloudSLAMServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CloudSLAMServiceClient.prototype.startMappingSession = function startMappingSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudSLAMService.StartMappingSession, {
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

CloudSLAMServiceClient.prototype.getActiveMappingSessionsForRobot = function getActiveMappingSessionsForRobot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudSLAMService.GetActiveMappingSessionsForRobot, {
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

CloudSLAMServiceClient.prototype.getMappingSessionPointCloud = function getMappingSessionPointCloud(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudSLAMService.GetMappingSessionPointCloud, {
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

CloudSLAMServiceClient.prototype.listMappingSessions = function listMappingSessions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudSLAMService.ListMappingSessions, {
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

CloudSLAMServiceClient.prototype.stopMappingSession = function stopMappingSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudSLAMService.StopMappingSession, {
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

exports.CloudSLAMServiceClient = CloudSLAMServiceClient;

