// package: viam.service.video.v1
// file: service/video/video.proto

var service_video_video_pb = require("../../service/video/video_pb");
var common_v1_common_pb = require("../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VideoService = (function () {
  function VideoService() {}
  VideoService.serviceName = "viam.service.video.v1.VideoService";
  return VideoService;
}());

VideoService.GetVideo = {
  methodName: "GetVideo",
  service: VideoService,
  requestStream: false,
  responseStream: true,
  requestType: service_video_video_pb.GetVideoRequest,
  responseType: service_video_video_pb.GetVideoResponse
};

VideoService.DoCommand = {
  methodName: "DoCommand",
  service: VideoService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

exports.VideoService = VideoService;

function VideoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VideoServiceClient.prototype.getVideo = function getVideo(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(VideoService.GetVideo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

VideoServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VideoService.DoCommand, {
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

exports.VideoServiceClient = VideoServiceClient;

