// package: viam.component.inputcontroller.v1
// file: component/inputcontroller/v1/input_controller.proto

var component_inputcontroller_v1_input_controller_pb = require("../../../component/inputcontroller/v1/input_controller_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InputControllerService = (function () {
  function InputControllerService() {}
  InputControllerService.serviceName = "viam.component.inputcontroller.v1.InputControllerService";
  return InputControllerService;
}());

InputControllerService.GetControls = {
  methodName: "GetControls",
  service: InputControllerService,
  requestStream: false,
  responseStream: false,
  requestType: component_inputcontroller_v1_input_controller_pb.GetControlsRequest,
  responseType: component_inputcontroller_v1_input_controller_pb.GetControlsResponse
};

InputControllerService.GetEvents = {
  methodName: "GetEvents",
  service: InputControllerService,
  requestStream: false,
  responseStream: false,
  requestType: component_inputcontroller_v1_input_controller_pb.GetEventsRequest,
  responseType: component_inputcontroller_v1_input_controller_pb.GetEventsResponse
};

InputControllerService.StreamEvents = {
  methodName: "StreamEvents",
  service: InputControllerService,
  requestStream: false,
  responseStream: true,
  requestType: component_inputcontroller_v1_input_controller_pb.StreamEventsRequest,
  responseType: component_inputcontroller_v1_input_controller_pb.StreamEventsResponse
};

InputControllerService.TriggerEvent = {
  methodName: "TriggerEvent",
  service: InputControllerService,
  requestStream: false,
  responseStream: false,
  requestType: component_inputcontroller_v1_input_controller_pb.TriggerEventRequest,
  responseType: component_inputcontroller_v1_input_controller_pb.TriggerEventResponse
};

exports.InputControllerService = InputControllerService;

function InputControllerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InputControllerServiceClient.prototype.getControls = function getControls(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputControllerService.GetControls, {
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

InputControllerServiceClient.prototype.getEvents = function getEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputControllerService.GetEvents, {
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

InputControllerServiceClient.prototype.streamEvents = function streamEvents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InputControllerService.StreamEvents, {
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

InputControllerServiceClient.prototype.triggerEvent = function triggerEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputControllerService.TriggerEvent, {
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

exports.InputControllerServiceClient = InputControllerServiceClient;

