// package: viam.service.vision.v1
// file: service/vision/v1/vision.proto

var service_vision_v1_vision_pb = require("../../../service/vision/v1/vision_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VisionService = (function () {
  function VisionService() {}
  VisionService.serviceName = "viam.service.vision.v1.VisionService";
  return VisionService;
}());

VisionService.GetModelParameterSchema = {
  methodName: "GetModelParameterSchema",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetModelParameterSchemaRequest,
  responseType: service_vision_v1_vision_pb.GetModelParameterSchemaResponse
};

VisionService.GetDetectorNames = {
  methodName: "GetDetectorNames",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetDetectorNamesRequest,
  responseType: service_vision_v1_vision_pb.GetDetectorNamesResponse
};

VisionService.AddDetector = {
  methodName: "AddDetector",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.AddDetectorRequest,
  responseType: service_vision_v1_vision_pb.AddDetectorResponse
};

VisionService.RemoveDetector = {
  methodName: "RemoveDetector",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.RemoveDetectorRequest,
  responseType: service_vision_v1_vision_pb.RemoveDetectorResponse
};

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

VisionService.GetClassifierNames = {
  methodName: "GetClassifierNames",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetClassifierNamesRequest,
  responseType: service_vision_v1_vision_pb.GetClassifierNamesResponse
};

VisionService.AddClassifier = {
  methodName: "AddClassifier",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.AddClassifierRequest,
  responseType: service_vision_v1_vision_pb.AddClassifierResponse
};

VisionService.RemoveClassifier = {
  methodName: "RemoveClassifier",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.RemoveClassifierRequest,
  responseType: service_vision_v1_vision_pb.RemoveClassifierResponse
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

VisionService.GetSegmenterNames = {
  methodName: "GetSegmenterNames",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetSegmenterNamesRequest,
  responseType: service_vision_v1_vision_pb.GetSegmenterNamesResponse
};

VisionService.AddSegmenter = {
  methodName: "AddSegmenter",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.AddSegmenterRequest,
  responseType: service_vision_v1_vision_pb.AddSegmenterResponse
};

VisionService.RemoveSegmenter = {
  methodName: "RemoveSegmenter",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.RemoveSegmenterRequest,
  responseType: service_vision_v1_vision_pb.RemoveSegmenterResponse
};

VisionService.GetObjectPointClouds = {
  methodName: "GetObjectPointClouds",
  service: VisionService,
  requestStream: false,
  responseStream: false,
  requestType: service_vision_v1_vision_pb.GetObjectPointCloudsRequest,
  responseType: service_vision_v1_vision_pb.GetObjectPointCloudsResponse
};

exports.VisionService = VisionService;

function VisionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VisionServiceClient.prototype.getModelParameterSchema = function getModelParameterSchema(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetModelParameterSchema, {
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

VisionServiceClient.prototype.getDetectorNames = function getDetectorNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetDetectorNames, {
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

VisionServiceClient.prototype.addDetector = function addDetector(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.AddDetector, {
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

VisionServiceClient.prototype.removeDetector = function removeDetector(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.RemoveDetector, {
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

VisionServiceClient.prototype.getClassifierNames = function getClassifierNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetClassifierNames, {
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

VisionServiceClient.prototype.addClassifier = function addClassifier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.AddClassifier, {
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

VisionServiceClient.prototype.removeClassifier = function removeClassifier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.RemoveClassifier, {
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

VisionServiceClient.prototype.getSegmenterNames = function getSegmenterNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.GetSegmenterNames, {
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

VisionServiceClient.prototype.addSegmenter = function addSegmenter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.AddSegmenter, {
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

VisionServiceClient.prototype.removeSegmenter = function removeSegmenter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisionService.RemoveSegmenter, {
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

exports.VisionServiceClient = VisionServiceClient;

