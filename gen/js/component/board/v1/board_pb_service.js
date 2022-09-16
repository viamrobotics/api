// package: viam.component.board.v1
// file: component/board/v1/board.proto

var component_board_v1_board_pb = require("../../../component/board/v1/board_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BoardService = (function () {
  function BoardService() {}
  BoardService.serviceName = "viam.component.board.v1.BoardService";
  return BoardService;
}());

BoardService.Status = {
  methodName: "Status",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.StatusRequest,
  responseType: component_board_v1_board_pb.StatusResponse
};

BoardService.SetGPIO = {
  methodName: "SetGPIO",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.SetGPIORequest,
  responseType: component_board_v1_board_pb.SetGPIOResponse
};

BoardService.GetGPIO = {
  methodName: "GetGPIO",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.GetGPIORequest,
  responseType: component_board_v1_board_pb.GetGPIOResponse
};

BoardService.PWM = {
  methodName: "PWM",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.PWMRequest,
  responseType: component_board_v1_board_pb.PWMResponse
};

BoardService.SetPWM = {
  methodName: "SetPWM",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.SetPWMRequest,
  responseType: component_board_v1_board_pb.SetPWMResponse
};

BoardService.PWMFrequency = {
  methodName: "PWMFrequency",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.PWMFrequencyRequest,
  responseType: component_board_v1_board_pb.PWMFrequencyResponse
};

BoardService.SetPWMFrequency = {
  methodName: "SetPWMFrequency",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.SetPWMFrequencyRequest,
  responseType: component_board_v1_board_pb.SetPWMFrequencyResponse
};

BoardService.ReadAnalogReader = {
  methodName: "ReadAnalogReader",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.ReadAnalogReaderRequest,
  responseType: component_board_v1_board_pb.ReadAnalogReaderResponse
};

BoardService.GetDigitalInterruptValue = {
  methodName: "GetDigitalInterruptValue",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: component_board_v1_board_pb.GetDigitalInterruptValueRequest,
  responseType: component_board_v1_board_pb.GetDigitalInterruptValueResponse
};

exports.BoardService = BoardService;

function BoardServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BoardServiceClient.prototype.status = function status(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.Status, {
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

BoardServiceClient.prototype.setGPIO = function setGPIO(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.SetGPIO, {
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

BoardServiceClient.prototype.getGPIO = function getGPIO(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.GetGPIO, {
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

BoardServiceClient.prototype.pWM = function pWM(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.PWM, {
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

BoardServiceClient.prototype.setPWM = function setPWM(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.SetPWM, {
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

BoardServiceClient.prototype.pWMFrequency = function pWMFrequency(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.PWMFrequency, {
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

BoardServiceClient.prototype.setPWMFrequency = function setPWMFrequency(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.SetPWMFrequency, {
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

BoardServiceClient.prototype.readAnalogReader = function readAnalogReader(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.ReadAnalogReader, {
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

BoardServiceClient.prototype.getDigitalInterruptValue = function getDigitalInterruptValue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.GetDigitalInterruptValue, {
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

exports.BoardServiceClient = BoardServiceClient;

