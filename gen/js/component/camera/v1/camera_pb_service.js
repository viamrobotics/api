// package: viam.component.camera.v1
// file: component/camera/v1/camera.proto

var component_camera_v1_camera_pb = require("../../../component/camera/v1/camera_pb");
var google_api_httpbody_pb = require("../../../google/api/httpbody_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CameraService = (function () {
  function CameraService() {}
  CameraService.serviceName = "viam.component.camera.v1.CameraService";
  return CameraService;
}());

CameraService.GetImage = {
  methodName: "GetImage",
  service: CameraService,
  requestStream: false,
  responseStream: false,
  requestType: component_camera_v1_camera_pb.GetImageRequest,
  responseType: component_camera_v1_camera_pb.GetImageResponse
};

CameraService.RenderFrame = {
  methodName: "RenderFrame",
  service: CameraService,
  requestStream: false,
  responseStream: false,
  requestType: component_camera_v1_camera_pb.RenderFrameRequest,
  responseType: google_api_httpbody_pb.HttpBody
};

CameraService.GetPointCloud = {
  methodName: "GetPointCloud",
  service: CameraService,
  requestStream: false,
  responseStream: false,
  requestType: component_camera_v1_camera_pb.GetPointCloudRequest,
  responseType: component_camera_v1_camera_pb.GetPointCloudResponse
};

CameraService.GetProperties = {
  methodName: "GetProperties",
  service: CameraService,
  requestStream: false,
  responseStream: false,
  requestType: component_camera_v1_camera_pb.GetPropertiesRequest,
  responseType: component_camera_v1_camera_pb.GetPropertiesResponse
};

exports.CameraService = CameraService;

function CameraServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CameraServiceClient.prototype.getImage = function getImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CameraService.GetImage, {
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

CameraServiceClient.prototype.renderFrame = function renderFrame(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CameraService.RenderFrame, {
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

CameraServiceClient.prototype.getPointCloud = function getPointCloud(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CameraService.GetPointCloud, {
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

CameraServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CameraService.GetProperties, {
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

exports.CameraServiceClient = CameraServiceClient;

