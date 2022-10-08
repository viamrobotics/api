// package: google.bytestream
// file: google/bytestream/bytestream.proto

var google_bytestream_bytestream_pb = require("../../google/bytestream/bytestream_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ByteStream = (function () {
  function ByteStream() {}
  ByteStream.serviceName = "google.bytestream.ByteStream";
  return ByteStream;
}());

ByteStream.Read = {
  methodName: "Read",
  service: ByteStream,
  requestStream: false,
  responseStream: true,
  requestType: google_bytestream_bytestream_pb.ReadRequest,
  responseType: google_bytestream_bytestream_pb.ReadResponse
};

ByteStream.Write = {
  methodName: "Write",
  service: ByteStream,
  requestStream: true,
  responseStream: false,
  requestType: google_bytestream_bytestream_pb.WriteRequest,
  responseType: google_bytestream_bytestream_pb.WriteResponse
};

ByteStream.QueryWriteStatus = {
  methodName: "QueryWriteStatus",
  service: ByteStream,
  requestStream: false,
  responseStream: false,
  requestType: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
  responseType: google_bytestream_bytestream_pb.QueryWriteStatusResponse
};

exports.ByteStream = ByteStream;

function ByteStreamClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ByteStreamClient.prototype.read = function read(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ByteStream.Read, {
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

ByteStreamClient.prototype.write = function write(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(ByteStream.Write, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

ByteStreamClient.prototype.queryWriteStatus = function queryWriteStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ByteStream.QueryWriteStatus, {
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

exports.ByteStreamClient = ByteStreamClient;

