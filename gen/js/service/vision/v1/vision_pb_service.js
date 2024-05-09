// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

var service_vision_v1_vision_pb = require("../../../service/vision/v1/vision_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VisionService = (function () {
  function VisionService() {}
  VisionService.serviceName = "viam.service.vision.v1.VisionService";
  return VisionService;
}());

VisionService.GetDetectionsFromCamera = {
  methodName: "GetDetectionsFromCamera",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetDetectionsFromCameraRequest,
  responseType: service_vision_v1_vision_pb.GetDetectionsFromCameraResponse
};

VisionService.GetDetections = {
  methodName: "GetDetections",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetDetectionsRequest,
  responseType: service_vision_v1_vision_pb.GetDetectionsResponse
};

VisionService.GetClassificationsFromCamera = {
  methodName: "GetClassificationsFromCamera",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetClassificationsFromCameraRequest,
  responseType: service_vision_v1_vision_pb.GetClassificationsFromCameraResponse
};

VisionService.GetClassifications = {
  methodName: "GetClassifications",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetClassificationsRequest,
  responseType: service_vision_v1_vision_pb.GetClassificationsResponse
};

VisionService.GetObjectPointClouds = {
  methodName: "GetObjectPointClouds",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetObjectPointCloudsRequest,
  responseType: service_vision_v1_vision_pb.GetObjectPointCloudsResponse
};

VisionService.GetProperties = {
  methodName: "GetProperties",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetPropertiesRequest,
  responseType: service_vision_v1_vision_pb.GetPropertiesResponse
};

VisionService.CaptureAllFromCamera = {
  methodName: "CaptureAllFromCamera",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.CaptureAllFromCameraRequest,
  responseType: service_vision_v1_vision_pb.CaptureAllFromCameraResponse
};

VisionService.DoCommand = {
  methodName: "DoCommand",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.VisionService = VisionService;

function VisionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VisionServiceClient.prototype.getDetectionsFromCamera = function getDetectionsFromCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetDetectionsFromCamera, {
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

VisionServiceClient.prototype.getDetections = function getDetections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetDetections, {
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

VisionServiceClient.prototype.getClassificationsFromCamera = function getClassificationsFromCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetClassificationsFromCamera, {
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

VisionServiceClient.prototype.getClassifications = function getClassifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetClassifications, {
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

VisionServiceClient.prototype.getObjectPointClouds = function getObjectPointClouds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetObjectPointClouds, {
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

VisionServiceClient.prototype.getProperties = function getProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetProperties, {
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

VisionServiceClient.prototype.captureAllFromCamera = function captureAllFromCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.CaptureAllFromCamera, {
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

VisionServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.DoCommand, {
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

exports.VisionServiceClient = VisionServiceClient;

