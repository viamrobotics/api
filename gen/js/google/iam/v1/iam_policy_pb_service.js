// package: google.iam.v1
// file: google/iam/v1/iam_policy.proto

var google_iam_v1_iam_policy_pb = require("../../../google/iam/v1/iam_policy_pb");
var google_iam_v1_policy_pb = require("../../../google/iam/v1/policy_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IAMPolicy = (function () {
  function IAMPolicy() {}
  IAMPolicy.serviceName = "google.iam.v1.IAMPolicy";
  return IAMPolicy;
}());

IAMPolicy.SetIamPolicy = {
  methodName: "SetIamPolicy",
  service: IAMPolicy,
  requestStream: false,
  responseStream: false,
  requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
  responseType: google_iam_v1_policy_pb.Policy
};

IAMPolicy.GetIamPolicy = {
  methodName: "GetIamPolicy",
  service: IAMPolicy,
  requestStream: false,
  responseStream: false,
  requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
  responseType: google_iam_v1_policy_pb.Policy
};

IAMPolicy.TestIamPermissions = {
  methodName: "TestIamPermissions",
  service: IAMPolicy,
  requestStream: false,
  responseStream: false,
  requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
  responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse
};

exports.IAMPolicy = IAMPolicy;

function IAMPolicyClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IAMPolicyClient.prototype.setIamPolicy = function setIamPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IAMPolicy.SetIamPolicy, {
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

IAMPolicyClient.prototype.getIamPolicy = function getIamPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IAMPolicy.GetIamPolicy, {
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

IAMPolicyClient.prototype.testIamPermissions = function testIamPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IAMPolicy.TestIamPermissions, {
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

exports.IAMPolicyClient = IAMPolicyClient;

