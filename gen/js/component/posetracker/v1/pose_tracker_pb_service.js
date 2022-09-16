// package: viam.component.posetracker.v1
// file: component/posetracker/v1/pose_tracker.proto

var component_posetracker_v1_pose_tracker_pb = require("../../../component/posetracker/v1/pose_tracker_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PoseTrackerService = (function () {
  function PoseTrackerService() {}
  PoseTrackerService.serviceName = "viam.component.posetracker.v1.PoseTrackerService";
  return PoseTrackerService;
}());

PoseTrackerService.GetPoses = {
  methodName: "GetPoses",
  service: PoseTrackerService,
  requestStream: false,
  responseStream: false,
  requestType: component_posetracker_v1_pose_tracker_pb.GetPosesRequest,
  responseType: component_posetracker_v1_pose_tracker_pb.GetPosesResponse
};

exports.PoseTrackerService = PoseTrackerService;

function PoseTrackerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PoseTrackerServiceClient.prototype.getPoses = function getPoses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PoseTrackerService.GetPoses, {
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

exports.PoseTrackerServiceClient = PoseTrackerServiceClient;

