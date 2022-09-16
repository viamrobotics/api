// package: viam.component.generic.v1
// file: component/generic/v1/generic.proto

var component_generic_v1_generic_pb = require("../../../component/generic/v1/generic_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GenericService = (function () {
  function GenericService() {}
  GenericService.serviceName = "viam.component.generic.v1.GenericService";
  return GenericService;
}());

GenericService.DoCommand = {
  methodName: "DoCommand",
  service: GenericService,
  requestStream: false,
  responseStream: false,
  requestType: component_generic_v1_generic_pb.DoCommandRequest,
  responseType: component_generic_v1_generic_pb.DoCommandResponse
};

exports.GenericService = GenericService;

function GenericServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GenericServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GenericService.DoCommand, {
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

exports.GenericServiceClient = GenericServiceClient;

