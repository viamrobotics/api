// package: viam.component.testecho.v1
// file: component/testecho/v1/testecho.proto

var component_testecho_v1_testecho_pb = require("../../../component/testecho/v1/testecho_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TestEchoService = (function () {
  function TestEchoService() {}
  TestEchoService.serviceName = "viam.component.testecho.v1.TestEchoService";
  return TestEchoService;
}());

TestEchoService.Echo = {
  methodName: "Echo",
  service: TestEchoService,
  requestStream: false,
  responseStream: false,
  requestType: component_testecho_v1_testecho_pb.EchoRequest,
  responseType: component_testecho_v1_testecho_pb.EchoResponse
};

TestEchoService.EchoMultiple = {
  methodName: "EchoMultiple",
  service: TestEchoService,
  requestStream: false,
  responseStream: true,
  requestType: component_testecho_v1_testecho_pb.EchoMultipleRequest,
  responseType: component_testecho_v1_testecho_pb.EchoMultipleResponse
};

TestEchoService.EchoBiDi = {
  methodName: "EchoBiDi",
  service: TestEchoService,
  requestStream: true,
  responseStream: true,
  requestType: component_testecho_v1_testecho_pb.EchoBiDiRequest,
  responseType: component_testecho_v1_testecho_pb.EchoBiDiResponse
};

exports.TestEchoService = TestEchoService;

function TestEchoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TestEchoServiceClient.prototype.echo = function echo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestEchoService.Echo, {
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

TestEchoServiceClient.prototype.echoMultiple = function echoMultiple(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TestEchoService.EchoMultiple, {
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

TestEchoServiceClient.prototype.echoBiDi = function echoBiDi(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(TestEchoService.EchoBiDi, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.TestEchoServiceClient = TestEchoServiceClient;

