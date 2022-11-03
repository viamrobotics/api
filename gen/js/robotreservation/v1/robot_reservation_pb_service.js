// package: robotreservation.v1
// file: robotreservation/v1/robot_reservation.proto

var robotreservation_v1_robot_reservation_pb = require("../../robotreservation/v1/robot_reservation_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RobotReservationService = (function () {
  function RobotReservationService() {}
  RobotReservationService.serviceName = "robotreservation.v1.RobotReservationService";
  return RobotReservationService;
}());

RobotReservationService.CreateRobotReservation = {
  methodName: "CreateRobotReservation",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.CreateRobotReservationRequest,
  responseType: robotreservation_v1_robot_reservation_pb.CreateRobotReservationResponse
};

RobotReservationService.DeleteRobotReservation = {
  methodName: "DeleteRobotReservation",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationRequest,
  responseType: robotreservation_v1_robot_reservation_pb.DeleteRobotReservationResponse
};

RobotReservationService.ListRobotReservations = {
  methodName: "ListRobotReservations",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.ListRobotReservationsRequest,
  responseType: robotreservation_v1_robot_reservation_pb.ListRobotReservationsResponse
};

RobotReservationService.GetRobotReservation = {
  methodName: "GetRobotReservation",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.GetRobotReservationRequest,
  responseType: robotreservation_v1_robot_reservation_pb.GetRobotReservationResponse
};

RobotReservationService.CreateRobotProcessor = {
  methodName: "CreateRobotProcessor",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorRequest,
  responseType: robotreservation_v1_robot_reservation_pb.CreateRobotProcessorResponse
};

RobotReservationService.DeleteRobotProcessor = {
  methodName: "DeleteRobotProcessor",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorRequest,
  responseType: robotreservation_v1_robot_reservation_pb.DeleteRobotProcessorResponse
};

RobotReservationService.ListRobotProcessors = {
  methodName: "ListRobotProcessors",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsRequest,
  responseType: robotreservation_v1_robot_reservation_pb.ListRobotProcessorsResponse
};

RobotReservationService.TryProcess = {
  methodName: "TryProcess",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.TryProcessRequest,
  responseType: robotreservation_v1_robot_reservation_pb.TryProcessResponse
};

RobotReservationService.UpdateProcessState = {
  methodName: "UpdateProcessState",
  service: RobotReservationService,
  requestStream: false,
  responseStream: false,
  requestType: robotreservation_v1_robot_reservation_pb.UpdateProcessStateRequest,
  responseType: robotreservation_v1_robot_reservation_pb.UpdateProcessStateResponse
};

exports.RobotReservationService = RobotReservationService;

function RobotReservationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RobotReservationServiceClient.prototype.createRobotReservation = function createRobotReservation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.CreateRobotReservation, {
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

RobotReservationServiceClient.prototype.deleteRobotReservation = function deleteRobotReservation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.DeleteRobotReservation, {
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

RobotReservationServiceClient.prototype.listRobotReservations = function listRobotReservations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.ListRobotReservations, {
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

RobotReservationServiceClient.prototype.getRobotReservation = function getRobotReservation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.GetRobotReservation, {
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

RobotReservationServiceClient.prototype.createRobotProcessor = function createRobotProcessor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.CreateRobotProcessor, {
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

RobotReservationServiceClient.prototype.deleteRobotProcessor = function deleteRobotProcessor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.DeleteRobotProcessor, {
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

RobotReservationServiceClient.prototype.listRobotProcessors = function listRobotProcessors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.ListRobotProcessors, {
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

RobotReservationServiceClient.prototype.tryProcess = function tryProcess(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.TryProcess, {
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

RobotReservationServiceClient.prototype.updateProcessState = function updateProcessState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RobotReservationService.UpdateProcessState, {
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

exports.RobotReservationServiceClient = RobotReservationServiceClient;

