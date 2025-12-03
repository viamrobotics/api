// source: robot/v1/robot.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var common_v1_common_pb = require('../../common/v1/common_pb.js');
goog.object.extend(proto, common_v1_common_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var opentelemetry_proto_trace_v1_trace_pb = require('../../opentelemetry/proto/trace/v1/trace_pb.js');
goog.object.extend(proto, opentelemetry_proto_trace_v1_trace_pb);
goog.exportSymbol('proto.viam.robot.v1.BlockForOperationRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.BlockForOperationResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.CancelOperationRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.CancelOperationResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.ConfigStatus', null, global);
goog.exportSymbol('proto.viam.robot.v1.FrameSystemConfig', null, global);
goog.exportSymbol('proto.viam.robot.v1.FrameSystemConfigRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.FrameSystemConfigResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetCloudMetadataRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetCloudMetadataResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetMachineStatusRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetMachineStatusResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetMachineStatusResponse.State', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetModelsFromModulesRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetModelsFromModulesResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetOperationsRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetOperationsResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetPoseRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetPoseResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetSessionsRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetSessionsResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetStatusRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetStatusResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetVersionRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.GetVersionResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.JobStatus', null, global);
goog.exportSymbol('proto.viam.robot.v1.ListTunnelsRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.ListTunnelsResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.LogRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.LogResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.ModuleModel', null, global);
goog.exportSymbol('proto.viam.robot.v1.Operation', null, global);
goog.exportSymbol('proto.viam.robot.v1.PeerConnectionInfo', null, global);
goog.exportSymbol('proto.viam.robot.v1.PeerConnectionType', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceNamesRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceNamesResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceRPCSubtype', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceRPCSubtypesRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceRPCSubtypesResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceStatus', null, global);
goog.exportSymbol('proto.viam.robot.v1.ResourceStatus.State', null, global);
goog.exportSymbol('proto.viam.robot.v1.RestartModuleRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.RestartModuleRequest.IdOrNameCase', null, global);
goog.exportSymbol('proto.viam.robot.v1.RestartModuleResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.SendSessionHeartbeatRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.SendSessionHeartbeatResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.SendTracesRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.SendTracesResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.Session', null, global);
goog.exportSymbol('proto.viam.robot.v1.ShutdownRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.ShutdownResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.StartSessionRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.StartSessionResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.Status', null, global);
goog.exportSymbol('proto.viam.robot.v1.StopAllRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.StopAllResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.StopExtraParameters', null, global);
goog.exportSymbol('proto.viam.robot.v1.StreamStatusRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.StreamStatusResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.TransformPCDRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.TransformPCDResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.TransformPoseRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.TransformPoseResponse', null, global);
goog.exportSymbol('proto.viam.robot.v1.Tunnel', null, global);
goog.exportSymbol('proto.viam.robot.v1.TunnelRequest', null, global);
goog.exportSymbol('proto.viam.robot.v1.TunnelResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.SendTracesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.SendTracesRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.SendTracesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.SendTracesRequest.displayName = 'proto.viam.robot.v1.SendTracesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.SendTracesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.SendTracesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.SendTracesResponse.displayName = 'proto.viam.robot.v1.SendTracesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TunnelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.TunnelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TunnelRequest.displayName = 'proto.viam.robot.v1.TunnelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TunnelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.TunnelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TunnelResponse.displayName = 'proto.viam.robot.v1.TunnelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ListTunnelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ListTunnelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ListTunnelsRequest.displayName = 'proto.viam.robot.v1.ListTunnelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ListTunnelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.ListTunnelsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.ListTunnelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ListTunnelsResponse.displayName = 'proto.viam.robot.v1.ListTunnelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.Tunnel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.Tunnel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.Tunnel.displayName = 'proto.viam.robot.v1.Tunnel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.FrameSystemConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.FrameSystemConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.FrameSystemConfig.displayName = 'proto.viam.robot.v1.FrameSystemConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.FrameSystemConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.FrameSystemConfigRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.FrameSystemConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.FrameSystemConfigRequest.displayName = 'proto.viam.robot.v1.FrameSystemConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.FrameSystemConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.FrameSystemConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.FrameSystemConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.FrameSystemConfigResponse.displayName = 'proto.viam.robot.v1.FrameSystemConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TransformPoseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.TransformPoseRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.TransformPoseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TransformPoseRequest.displayName = 'proto.viam.robot.v1.TransformPoseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TransformPoseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.TransformPoseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TransformPoseResponse.displayName = 'proto.viam.robot.v1.TransformPoseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TransformPCDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.TransformPCDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TransformPCDRequest.displayName = 'proto.viam.robot.v1.TransformPCDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.TransformPCDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.TransformPCDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.TransformPCDResponse.displayName = 'proto.viam.robot.v1.TransformPCDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceNamesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ResourceNamesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceNamesRequest.displayName = 'proto.viam.robot.v1.ResourceNamesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceNamesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.ResourceNamesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.ResourceNamesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceNamesResponse.displayName = 'proto.viam.robot.v1.ResourceNamesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceRPCSubtype = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ResourceRPCSubtype, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceRPCSubtype.displayName = 'proto.viam.robot.v1.ResourceRPCSubtype';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ResourceRPCSubtypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceRPCSubtypesRequest.displayName = 'proto.viam.robot.v1.ResourceRPCSubtypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.ResourceRPCSubtypesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.ResourceRPCSubtypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceRPCSubtypesResponse.displayName = 'proto.viam.robot.v1.ResourceRPCSubtypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.Operation.displayName = 'proto.viam.robot.v1.Operation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetOperationsRequest.displayName = 'proto.viam.robot.v1.GetOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetOperationsResponse.displayName = 'proto.viam.robot.v1.GetOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.CancelOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.CancelOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.CancelOperationRequest.displayName = 'proto.viam.robot.v1.CancelOperationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.CancelOperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.CancelOperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.CancelOperationResponse.displayName = 'proto.viam.robot.v1.CancelOperationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.BlockForOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.BlockForOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.BlockForOperationRequest.displayName = 'proto.viam.robot.v1.BlockForOperationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.BlockForOperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.BlockForOperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.BlockForOperationResponse.displayName = 'proto.viam.robot.v1.BlockForOperationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.PeerConnectionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.PeerConnectionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.PeerConnectionInfo.displayName = 'proto.viam.robot.v1.PeerConnectionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.Session.displayName = 'proto.viam.robot.v1.Session';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetSessionsRequest.displayName = 'proto.viam.robot.v1.GetSessionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetSessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetSessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetSessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetSessionsResponse.displayName = 'proto.viam.robot.v1.GetSessionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ModuleModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ModuleModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ModuleModel.displayName = 'proto.viam.robot.v1.ModuleModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetModelsFromModulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetModelsFromModulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetModelsFromModulesRequest.displayName = 'proto.viam.robot.v1.GetModelsFromModulesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetModelsFromModulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetModelsFromModulesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetModelsFromModulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetModelsFromModulesResponse.displayName = 'proto.viam.robot.v1.GetModelsFromModulesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.Status.displayName = 'proto.viam.robot.v1.Status';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetStatusRequest.displayName = 'proto.viam.robot.v1.GetStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetStatusResponse.displayName = 'proto.viam.robot.v1.GetStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StreamStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.StreamStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.StreamStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StreamStatusRequest.displayName = 'proto.viam.robot.v1.StreamStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StreamStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.StreamStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.StreamStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StreamStatusResponse.displayName = 'proto.viam.robot.v1.StreamStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StopExtraParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.StopExtraParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StopExtraParameters.displayName = 'proto.viam.robot.v1.StopExtraParameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StopAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.StopAllRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.StopAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StopAllRequest.displayName = 'proto.viam.robot.v1.StopAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StopAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.StopAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StopAllResponse.displayName = 'proto.viam.robot.v1.StopAllResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StartSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.StartSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StartSessionRequest.displayName = 'proto.viam.robot.v1.StartSessionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.StartSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.StartSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.StartSessionResponse.displayName = 'proto.viam.robot.v1.StartSessionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.SendSessionHeartbeatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.SendSessionHeartbeatRequest.displayName = 'proto.viam.robot.v1.SendSessionHeartbeatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.SendSessionHeartbeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.SendSessionHeartbeatResponse.displayName = 'proto.viam.robot.v1.SendSessionHeartbeatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.LogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.LogRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.LogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.LogRequest.displayName = 'proto.viam.robot.v1.LogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.LogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.LogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.LogResponse.displayName = 'proto.viam.robot.v1.LogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetCloudMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetCloudMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetCloudMetadataRequest.displayName = 'proto.viam.robot.v1.GetCloudMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetCloudMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetCloudMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetCloudMetadataResponse.displayName = 'proto.viam.robot.v1.GetCloudMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.RestartModuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_);
};
goog.inherits(proto.viam.robot.v1.RestartModuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.RestartModuleRequest.displayName = 'proto.viam.robot.v1.RestartModuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.RestartModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.RestartModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.RestartModuleResponse.displayName = 'proto.viam.robot.v1.RestartModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ShutdownRequest.displayName = 'proto.viam.robot.v1.ShutdownRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ShutdownResponse.displayName = 'proto.viam.robot.v1.ShutdownResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetMachineStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetMachineStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetMachineStatusRequest.displayName = 'proto.viam.robot.v1.GetMachineStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetMachineStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetMachineStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetMachineStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetMachineStatusResponse.displayName = 'proto.viam.robot.v1.GetMachineStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.JobStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.JobStatus.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.JobStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.JobStatus.displayName = 'proto.viam.robot.v1.JobStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ResourceStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ResourceStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ResourceStatus.displayName = 'proto.viam.robot.v1.ResourceStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.ConfigStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.ConfigStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.ConfigStatus.displayName = 'proto.viam.robot.v1.ConfigStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetVersionRequest.displayName = 'proto.viam.robot.v1.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetVersionResponse.displayName = 'proto.viam.robot.v1.GetVersionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetPoseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.robot.v1.GetPoseRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.robot.v1.GetPoseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetPoseRequest.displayName = 'proto.viam.robot.v1.GetPoseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.robot.v1.GetPoseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.robot.v1.GetPoseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.robot.v1.GetPoseResponse.displayName = 'proto.viam.robot.v1.GetPoseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.SendTracesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.SendTracesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.SendTracesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.SendTracesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendTracesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceSpansList: jspb.Message.toObjectList(msg.getResourceSpansList(),
    opentelemetry_proto_trace_v1_trace_pb.ResourceSpans.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.SendTracesRequest}
 */
proto.viam.robot.v1.SendTracesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.SendTracesRequest;
  return proto.viam.robot.v1.SendTracesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.SendTracesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.SendTracesRequest}
 */
proto.viam.robot.v1.SendTracesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new opentelemetry_proto_trace_v1_trace_pb.ResourceSpans;
      reader.readMessage(value,opentelemetry_proto_trace_v1_trace_pb.ResourceSpans.deserializeBinaryFromReader);
      msg.addResourceSpans(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.SendTracesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.SendTracesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.SendTracesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendTracesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceSpansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      opentelemetry_proto_trace_v1_trace_pb.ResourceSpans.serializeBinaryToWriter
    );
  }
};


/**
 * repeated opentelemetry.proto.trace.v1.ResourceSpans resource_spans = 1;
 * @return {!Array<!proto.opentelemetry.proto.trace.v1.ResourceSpans>}
 */
proto.viam.robot.v1.SendTracesRequest.prototype.getResourceSpansList = function() {
  return /** @type{!Array<!proto.opentelemetry.proto.trace.v1.ResourceSpans>} */ (
    jspb.Message.getRepeatedWrapperField(this, opentelemetry_proto_trace_v1_trace_pb.ResourceSpans, 1));
};


/**
 * @param {!Array<!proto.opentelemetry.proto.trace.v1.ResourceSpans>} value
 * @return {!proto.viam.robot.v1.SendTracesRequest} returns this
*/
proto.viam.robot.v1.SendTracesRequest.prototype.setResourceSpansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opentelemetry.proto.trace.v1.ResourceSpans=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opentelemetry.proto.trace.v1.ResourceSpans}
 */
proto.viam.robot.v1.SendTracesRequest.prototype.addResourceSpans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opentelemetry.proto.trace.v1.ResourceSpans, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.SendTracesRequest} returns this
 */
proto.viam.robot.v1.SendTracesRequest.prototype.clearResourceSpansList = function() {
  return this.setResourceSpansList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.SendTracesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.SendTracesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.SendTracesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendTracesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.SendTracesResponse}
 */
proto.viam.robot.v1.SendTracesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.SendTracesResponse;
  return proto.viam.robot.v1.SendTracesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.SendTracesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.SendTracesResponse}
 */
proto.viam.robot.v1.SendTracesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.SendTracesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.SendTracesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.SendTracesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendTracesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TunnelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TunnelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TunnelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TunnelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationPort: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TunnelRequest}
 */
proto.viam.robot.v1.TunnelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TunnelRequest;
  return proto.viam.robot.v1.TunnelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TunnelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TunnelRequest}
 */
proto.viam.robot.v1.TunnelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationPort(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TunnelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TunnelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TunnelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TunnelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 destination_port = 1;
 * @return {number}
 */
proto.viam.robot.v1.TunnelRequest.prototype.getDestinationPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.robot.v1.TunnelRequest} returns this
 */
proto.viam.robot.v1.TunnelRequest.prototype.setDestinationPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.viam.robot.v1.TunnelRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.viam.robot.v1.TunnelRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TunnelRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.robot.v1.TunnelRequest} returns this
 */
proto.viam.robot.v1.TunnelRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TunnelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TunnelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TunnelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TunnelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TunnelResponse}
 */
proto.viam.robot.v1.TunnelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TunnelResponse;
  return proto.viam.robot.v1.TunnelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TunnelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TunnelResponse}
 */
proto.viam.robot.v1.TunnelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TunnelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TunnelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TunnelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TunnelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.viam.robot.v1.TunnelResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.viam.robot.v1.TunnelResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TunnelResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.robot.v1.TunnelResponse} returns this
 */
proto.viam.robot.v1.TunnelResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ListTunnelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ListTunnelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ListTunnelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ListTunnelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ListTunnelsRequest}
 */
proto.viam.robot.v1.ListTunnelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ListTunnelsRequest;
  return proto.viam.robot.v1.ListTunnelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ListTunnelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ListTunnelsRequest}
 */
proto.viam.robot.v1.ListTunnelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ListTunnelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ListTunnelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ListTunnelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ListTunnelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.ListTunnelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ListTunnelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ListTunnelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ListTunnelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ListTunnelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelsList: jspb.Message.toObjectList(msg.getTunnelsList(),
    proto.viam.robot.v1.Tunnel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ListTunnelsResponse}
 */
proto.viam.robot.v1.ListTunnelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ListTunnelsResponse;
  return proto.viam.robot.v1.ListTunnelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ListTunnelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ListTunnelsResponse}
 */
proto.viam.robot.v1.ListTunnelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.Tunnel;
      reader.readMessage(value,proto.viam.robot.v1.Tunnel.deserializeBinaryFromReader);
      msg.addTunnels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ListTunnelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ListTunnelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ListTunnelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ListTunnelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.Tunnel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tunnel tunnels = 1;
 * @return {!Array<!proto.viam.robot.v1.Tunnel>}
 */
proto.viam.robot.v1.ListTunnelsResponse.prototype.getTunnelsList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.Tunnel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.Tunnel, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.Tunnel>} value
 * @return {!proto.viam.robot.v1.ListTunnelsResponse} returns this
*/
proto.viam.robot.v1.ListTunnelsResponse.prototype.setTunnelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.Tunnel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.Tunnel}
 */
proto.viam.robot.v1.ListTunnelsResponse.prototype.addTunnels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.Tunnel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.ListTunnelsResponse} returns this
 */
proto.viam.robot.v1.ListTunnelsResponse.prototype.clearTunnelsList = function() {
  return this.setTunnelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.Tunnel.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.Tunnel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.Tunnel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Tunnel.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    connectionTimeout: (f = msg.getConnectionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.Tunnel}
 */
proto.viam.robot.v1.Tunnel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.Tunnel;
  return proto.viam.robot.v1.Tunnel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.Tunnel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.Tunnel}
 */
proto.viam.robot.v1.Tunnel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setConnectionTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.Tunnel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.Tunnel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.Tunnel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Tunnel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConnectionTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.viam.robot.v1.Tunnel.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.robot.v1.Tunnel} returns this
 */
proto.viam.robot.v1.Tunnel.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration connection_timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.viam.robot.v1.Tunnel.prototype.getConnectionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.viam.robot.v1.Tunnel} returns this
*/
proto.viam.robot.v1.Tunnel.prototype.setConnectionTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Tunnel} returns this
 */
proto.viam.robot.v1.Tunnel.prototype.clearConnectionTimeout = function() {
  return this.setConnectionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Tunnel.prototype.hasConnectionTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.FrameSystemConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.FrameSystemConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    frame: (f = msg.getFrame()) && common_v1_common_pb.Transform.toObject(includeInstance, f),
    kinematics: (f = msg.getKinematics()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.FrameSystemConfig}
 */
proto.viam.robot.v1.FrameSystemConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.FrameSystemConfig;
  return proto.viam.robot.v1.FrameSystemConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.FrameSystemConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.FrameSystemConfig}
 */
proto.viam.robot.v1.FrameSystemConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.Transform;
      reader.readMessage(value,common_v1_common_pb.Transform.deserializeBinaryFromReader);
      msg.setFrame(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setKinematics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.FrameSystemConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.FrameSystemConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.Transform.serializeBinaryToWriter
    );
  }
  f = message.getKinematics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.Transform frame = 1;
 * @return {?proto.viam.common.v1.Transform}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.getFrame = function() {
  return /** @type{?proto.viam.common.v1.Transform} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.Transform, 1));
};


/**
 * @param {?proto.viam.common.v1.Transform|undefined} value
 * @return {!proto.viam.robot.v1.FrameSystemConfig} returns this
*/
proto.viam.robot.v1.FrameSystemConfig.prototype.setFrame = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.FrameSystemConfig} returns this
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.clearFrame = function() {
  return this.setFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.hasFrame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct kinematics = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.getKinematics = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.robot.v1.FrameSystemConfig} returns this
*/
proto.viam.robot.v1.FrameSystemConfig.prototype.setKinematics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.FrameSystemConfig} returns this
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.clearKinematics = function() {
  return this.setKinematics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.FrameSystemConfig.prototype.hasKinematics = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.FrameSystemConfigRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.FrameSystemConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    supplementalTransformsList: jspb.Message.toObjectList(msg.getSupplementalTransformsList(),
    common_v1_common_pb.Transform.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.FrameSystemConfigRequest}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.FrameSystemConfigRequest;
  return proto.viam.robot.v1.FrameSystemConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.FrameSystemConfigRequest}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.Transform;
      reader.readMessage(value,common_v1_common_pb.Transform.deserializeBinaryFromReader);
      msg.addSupplementalTransforms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.FrameSystemConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.FrameSystemConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupplementalTransformsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_v1_common_pb.Transform.serializeBinaryToWriter
    );
  }
};


/**
 * repeated viam.common.v1.Transform supplemental_transforms = 1;
 * @return {!Array<!proto.viam.common.v1.Transform>}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.getSupplementalTransformsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.Transform>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.Transform, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.Transform>} value
 * @return {!proto.viam.robot.v1.FrameSystemConfigRequest} returns this
*/
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.setSupplementalTransformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.Transform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.Transform}
 */
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.addSupplementalTransforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.Transform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.FrameSystemConfigRequest} returns this
 */
proto.viam.robot.v1.FrameSystemConfigRequest.prototype.clearSupplementalTransformsList = function() {
  return this.setSupplementalTransformsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.FrameSystemConfigResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.FrameSystemConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.FrameSystemConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameSystemConfigsList: jspb.Message.toObjectList(msg.getFrameSystemConfigsList(),
    proto.viam.robot.v1.FrameSystemConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.FrameSystemConfigResponse}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.FrameSystemConfigResponse;
  return proto.viam.robot.v1.FrameSystemConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.FrameSystemConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.FrameSystemConfigResponse}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.FrameSystemConfig;
      reader.readMessage(value,proto.viam.robot.v1.FrameSystemConfig.deserializeBinaryFromReader);
      msg.addFrameSystemConfigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.FrameSystemConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.FrameSystemConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.FrameSystemConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameSystemConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.FrameSystemConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FrameSystemConfig frame_system_configs = 1;
 * @return {!Array<!proto.viam.robot.v1.FrameSystemConfig>}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.getFrameSystemConfigsList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.FrameSystemConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.FrameSystemConfig, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.FrameSystemConfig>} value
 * @return {!proto.viam.robot.v1.FrameSystemConfigResponse} returns this
*/
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.setFrameSystemConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.FrameSystemConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.FrameSystemConfig}
 */
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.addFrameSystemConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.FrameSystemConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.FrameSystemConfigResponse} returns this
 */
proto.viam.robot.v1.FrameSystemConfigResponse.prototype.clearFrameSystemConfigsList = function() {
  return this.setFrameSystemConfigsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.TransformPoseRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TransformPoseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TransformPoseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPoseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && common_v1_common_pb.PoseInFrame.toObject(includeInstance, f),
    destination: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplementalTransformsList: jspb.Message.toObjectList(msg.getSupplementalTransformsList(),
    common_v1_common_pb.Transform.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TransformPoseRequest}
 */
proto.viam.robot.v1.TransformPoseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TransformPoseRequest;
  return proto.viam.robot.v1.TransformPoseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TransformPoseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TransformPoseRequest}
 */
proto.viam.robot.v1.TransformPoseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.PoseInFrame;
      reader.readMessage(value,common_v1_common_pb.PoseInFrame.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 3:
      var value = new common_v1_common_pb.Transform;
      reader.readMessage(value,common_v1_common_pb.Transform.deserializeBinaryFromReader);
      msg.addSupplementalTransforms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TransformPoseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TransformPoseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPoseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.PoseInFrame.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplementalTransformsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_v1_common_pb.Transform.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.PoseInFrame source = 1;
 * @return {?proto.viam.common.v1.PoseInFrame}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.getSource = function() {
  return /** @type{?proto.viam.common.v1.PoseInFrame} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.PoseInFrame, 1));
};


/**
 * @param {?proto.viam.common.v1.PoseInFrame|undefined} value
 * @return {!proto.viam.robot.v1.TransformPoseRequest} returns this
*/
proto.viam.robot.v1.TransformPoseRequest.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.TransformPoseRequest} returns this
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string destination = 2;
 * @return {string}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.TransformPoseRequest} returns this
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated viam.common.v1.Transform supplemental_transforms = 3;
 * @return {!Array<!proto.viam.common.v1.Transform>}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.getSupplementalTransformsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.Transform>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.Transform, 3));
};


/**
 * @param {!Array<!proto.viam.common.v1.Transform>} value
 * @return {!proto.viam.robot.v1.TransformPoseRequest} returns this
*/
proto.viam.robot.v1.TransformPoseRequest.prototype.setSupplementalTransformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.common.v1.Transform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.Transform}
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.addSupplementalTransforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.common.v1.Transform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.TransformPoseRequest} returns this
 */
proto.viam.robot.v1.TransformPoseRequest.prototype.clearSupplementalTransformsList = function() {
  return this.setSupplementalTransformsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TransformPoseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TransformPoseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TransformPoseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPoseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pose: (f = msg.getPose()) && common_v1_common_pb.PoseInFrame.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TransformPoseResponse}
 */
proto.viam.robot.v1.TransformPoseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TransformPoseResponse;
  return proto.viam.robot.v1.TransformPoseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TransformPoseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TransformPoseResponse}
 */
proto.viam.robot.v1.TransformPoseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.PoseInFrame;
      reader.readMessage(value,common_v1_common_pb.PoseInFrame.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPoseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TransformPoseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TransformPoseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPoseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.PoseInFrame.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.PoseInFrame pose = 1;
 * @return {?proto.viam.common.v1.PoseInFrame}
 */
proto.viam.robot.v1.TransformPoseResponse.prototype.getPose = function() {
  return /** @type{?proto.viam.common.v1.PoseInFrame} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.PoseInFrame, 1));
};


/**
 * @param {?proto.viam.common.v1.PoseInFrame|undefined} value
 * @return {!proto.viam.robot.v1.TransformPoseResponse} returns this
*/
proto.viam.robot.v1.TransformPoseResponse.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.TransformPoseResponse} returns this
 */
proto.viam.robot.v1.TransformPoseResponse.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.TransformPoseResponse.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TransformPCDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TransformPCDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPCDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointCloudPcd: msg.getPointCloudPcd_asB64(),
    source: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destination: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TransformPCDRequest}
 */
proto.viam.robot.v1.TransformPCDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TransformPCDRequest;
  return proto.viam.robot.v1.TransformPCDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TransformPCDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TransformPCDRequest}
 */
proto.viam.robot.v1.TransformPCDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPointCloudPcd(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TransformPCDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TransformPCDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPCDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointCloudPcd_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes point_cloud_pcd = 1;
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.getPointCloudPcd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.getPointCloudPcd_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPointCloudPcd()));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.getPointCloudPcd_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPointCloudPcd()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.robot.v1.TransformPCDRequest} returns this
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.setPointCloudPcd = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string source = 2;
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.TransformPCDRequest} returns this
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination = 3;
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.TransformPCDRequest} returns this
 */
proto.viam.robot.v1.TransformPCDRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.TransformPCDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.TransformPCDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPCDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointCloudPcd: msg.getPointCloudPcd_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.TransformPCDResponse}
 */
proto.viam.robot.v1.TransformPCDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.TransformPCDResponse;
  return proto.viam.robot.v1.TransformPCDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.TransformPCDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.TransformPCDResponse}
 */
proto.viam.robot.v1.TransformPCDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPointCloudPcd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.TransformPCDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.TransformPCDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.TransformPCDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointCloudPcd_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes point_cloud_pcd = 1;
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.getPointCloudPcd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {string}
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.getPointCloudPcd_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPointCloudPcd()));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.getPointCloudPcd_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPointCloudPcd()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.robot.v1.TransformPCDResponse} returns this
 */
proto.viam.robot.v1.TransformPCDResponse.prototype.setPointCloudPcd = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceNamesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceNamesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceNamesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceNamesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceNamesRequest}
 */
proto.viam.robot.v1.ResourceNamesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceNamesRequest;
  return proto.viam.robot.v1.ResourceNamesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceNamesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceNamesRequest}
 */
proto.viam.robot.v1.ResourceNamesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceNamesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceNamesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceNamesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceNamesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.ResourceNamesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceNamesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceNamesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceNamesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceNamesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    common_v1_common_pb.ResourceName.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceNamesResponse}
 */
proto.viam.robot.v1.ResourceNamesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceNamesResponse;
  return proto.viam.robot.v1.ResourceNamesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceNamesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceNamesResponse}
 */
proto.viam.robot.v1.ResourceNamesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceNamesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceNamesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceNamesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceNamesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
};


/**
 * repeated viam.common.v1.ResourceName resources = 1;
 * @return {!Array<!proto.viam.common.v1.ResourceName>}
 */
proto.viam.robot.v1.ResourceNamesResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.robot.v1.ResourceNamesResponse} returns this
*/
proto.viam.robot.v1.ResourceNamesResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.ResourceNamesResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.ResourceNamesResponse} returns this
 */
proto.viam.robot.v1.ResourceNamesResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceRPCSubtype.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceRPCSubtype} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtype.toObject = function(includeInstance, msg) {
  var f, obj = {
    subtype: (f = msg.getSubtype()) && common_v1_common_pb.ResourceName.toObject(includeInstance, f),
    protoService: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype}
 */
proto.viam.robot.v1.ResourceRPCSubtype.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceRPCSubtype;
  return proto.viam.robot.v1.ResourceRPCSubtype.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtype} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype}
 */
proto.viam.robot.v1.ResourceRPCSubtype.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.setSubtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtoService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceRPCSubtype.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtype} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtype.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubtype();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
  f = message.getProtoService();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional viam.common.v1.ResourceName subtype = 1;
 * @return {?proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.getSubtype = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype} returns this
*/
proto.viam.robot.v1.ResourceRPCSubtype.prototype.setSubtype = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype} returns this
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.clearSubtype = function() {
  return this.setSubtype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.hasSubtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proto_service = 2;
 * @return {string}
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.getProtoService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype} returns this
 */
proto.viam.robot.v1.ResourceRPCSubtype.prototype.setProtoService = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceRPCSubtypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesRequest}
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceRPCSubtypesRequest;
  return proto.viam.robot.v1.ResourceRPCSubtypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesRequest}
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceRPCSubtypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceRPCSubtypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceRpcSubtypesList: jspb.Message.toObjectList(msg.getResourceRpcSubtypesList(),
    proto.viam.robot.v1.ResourceRPCSubtype.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesResponse}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceRPCSubtypesResponse;
  return proto.viam.robot.v1.ResourceRPCSubtypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesResponse}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.ResourceRPCSubtype;
      reader.readMessage(value,proto.viam.robot.v1.ResourceRPCSubtype.deserializeBinaryFromReader);
      msg.addResourceRpcSubtypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceRPCSubtypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceRPCSubtypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceRpcSubtypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.ResourceRPCSubtype.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResourceRPCSubtype resource_rpc_subtypes = 1;
 * @return {!Array<!proto.viam.robot.v1.ResourceRPCSubtype>}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.getResourceRpcSubtypesList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.ResourceRPCSubtype>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.ResourceRPCSubtype, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.ResourceRPCSubtype>} value
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesResponse} returns this
*/
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.setResourceRpcSubtypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.ResourceRPCSubtype=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.ResourceRPCSubtype}
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.addResourceRpcSubtypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.ResourceRPCSubtype, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.ResourceRPCSubtypesResponse} returns this
 */
proto.viam.robot.v1.ResourceRPCSubtypesResponse.prototype.clearResourceRpcSubtypesList = function() {
  return this.setResourceRpcSubtypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    method: jspb.Message.getFieldWithDefault(msg, 2, ""),
    arguments: (f = msg.getArguments()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    started: (f = msg.getStarted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.Operation}
 */
proto.viam.robot.v1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.Operation;
  return proto.viam.robot.v1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.Operation}
 */
proto.viam.robot.v1.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setArguments(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarted(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArguments();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStarted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.Operation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string method = 2;
 * @return {string}
 */
proto.viam.robot.v1.Operation.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct arguments = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.robot.v1.Operation.prototype.getArguments = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.robot.v1.Operation} returns this
*/
proto.viam.robot.v1.Operation.prototype.setArguments = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.clearArguments = function() {
  return this.setArguments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Operation.prototype.hasArguments = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp started = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.Operation.prototype.getStarted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.robot.v1.Operation} returns this
*/
proto.viam.robot.v1.Operation.prototype.setStarted = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.clearStarted = function() {
  return this.setStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Operation.prototype.hasStarted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string session_id = 5;
 * @return {string}
 */
proto.viam.robot.v1.Operation.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.setSessionId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.robot.v1.Operation} returns this
 */
proto.viam.robot.v1.Operation.prototype.clearSessionId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Operation.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetOperationsRequest}
 */
proto.viam.robot.v1.GetOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetOperationsRequest;
  return proto.viam.robot.v1.GetOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetOperationsRequest}
 */
proto.viam.robot.v1.GetOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetOperationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.viam.robot.v1.Operation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetOperationsResponse}
 */
proto.viam.robot.v1.GetOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetOperationsResponse;
  return proto.viam.robot.v1.GetOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetOperationsResponse}
 */
proto.viam.robot.v1.GetOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.Operation;
      reader.readMessage(value,proto.viam.robot.v1.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Operation operations = 1;
 * @return {!Array<!proto.viam.robot.v1.Operation>}
 */
proto.viam.robot.v1.GetOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.Operation, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.Operation>} value
 * @return {!proto.viam.robot.v1.GetOperationsResponse} returns this
*/
proto.viam.robot.v1.GetOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.Operation}
 */
proto.viam.robot.v1.GetOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetOperationsResponse} returns this
 */
proto.viam.robot.v1.GetOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.CancelOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.CancelOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.CancelOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.CancelOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.CancelOperationRequest}
 */
proto.viam.robot.v1.CancelOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.CancelOperationRequest;
  return proto.viam.robot.v1.CancelOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.CancelOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.CancelOperationRequest}
 */
proto.viam.robot.v1.CancelOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.CancelOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.CancelOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.CancelOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.CancelOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.CancelOperationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.CancelOperationRequest} returns this
 */
proto.viam.robot.v1.CancelOperationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.CancelOperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.CancelOperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.CancelOperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.CancelOperationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.CancelOperationResponse}
 */
proto.viam.robot.v1.CancelOperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.CancelOperationResponse;
  return proto.viam.robot.v1.CancelOperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.CancelOperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.CancelOperationResponse}
 */
proto.viam.robot.v1.CancelOperationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.CancelOperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.CancelOperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.CancelOperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.CancelOperationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.BlockForOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.BlockForOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.BlockForOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.BlockForOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.BlockForOperationRequest}
 */
proto.viam.robot.v1.BlockForOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.BlockForOperationRequest;
  return proto.viam.robot.v1.BlockForOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.BlockForOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.BlockForOperationRequest}
 */
proto.viam.robot.v1.BlockForOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.BlockForOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.BlockForOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.BlockForOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.BlockForOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.BlockForOperationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.BlockForOperationRequest} returns this
 */
proto.viam.robot.v1.BlockForOperationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.BlockForOperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.BlockForOperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.BlockForOperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.BlockForOperationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.BlockForOperationResponse}
 */
proto.viam.robot.v1.BlockForOperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.BlockForOperationResponse;
  return proto.viam.robot.v1.BlockForOperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.BlockForOperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.BlockForOperationResponse}
 */
proto.viam.robot.v1.BlockForOperationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.BlockForOperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.BlockForOperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.BlockForOperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.BlockForOperationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.PeerConnectionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.PeerConnectionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.PeerConnectionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remoteAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.PeerConnectionInfo}
 */
proto.viam.robot.v1.PeerConnectionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.PeerConnectionInfo;
  return proto.viam.robot.v1.PeerConnectionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.PeerConnectionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.PeerConnectionInfo}
 */
proto.viam.robot.v1.PeerConnectionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.robot.v1.PeerConnectionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.PeerConnectionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.PeerConnectionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.PeerConnectionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PeerConnectionType type = 1;
 * @return {!proto.viam.robot.v1.PeerConnectionType}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.getType = function() {
  return /** @type {!proto.viam.robot.v1.PeerConnectionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.robot.v1.PeerConnectionType} value
 * @return {!proto.viam.robot.v1.PeerConnectionInfo} returns this
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string remote_address = 2;
 * @return {string}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.getRemoteAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.PeerConnectionInfo} returns this
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.setRemoteAddress = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.robot.v1.PeerConnectionInfo} returns this
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.clearRemoteAddress = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.hasRemoteAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string local_address = 3;
 * @return {string}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.getLocalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.PeerConnectionInfo} returns this
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.setLocalAddress = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.robot.v1.PeerConnectionInfo} returns this
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.clearLocalAddress = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.PeerConnectionInfo.prototype.hasLocalAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peerConnectionInfo: (f = msg.getPeerConnectionInfo()) && proto.viam.robot.v1.PeerConnectionInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.Session}
 */
proto.viam.robot.v1.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.Session;
  return proto.viam.robot.v1.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.Session}
 */
proto.viam.robot.v1.Session.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.viam.robot.v1.PeerConnectionInfo;
      reader.readMessage(value,proto.viam.robot.v1.PeerConnectionInfo.deserializeBinaryFromReader);
      msg.setPeerConnectionInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeerConnectionInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.robot.v1.PeerConnectionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.Session.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.Session} returns this
 */
proto.viam.robot.v1.Session.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PeerConnectionInfo peer_connection_info = 2;
 * @return {?proto.viam.robot.v1.PeerConnectionInfo}
 */
proto.viam.robot.v1.Session.prototype.getPeerConnectionInfo = function() {
  return /** @type{?proto.viam.robot.v1.PeerConnectionInfo} */ (
    jspb.Message.getWrapperField(this, proto.viam.robot.v1.PeerConnectionInfo, 2));
};


/**
 * @param {?proto.viam.robot.v1.PeerConnectionInfo|undefined} value
 * @return {!proto.viam.robot.v1.Session} returns this
*/
proto.viam.robot.v1.Session.prototype.setPeerConnectionInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Session} returns this
 */
proto.viam.robot.v1.Session.prototype.clearPeerConnectionInfo = function() {
  return this.setPeerConnectionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Session.prototype.hasPeerConnectionInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetSessionsRequest}
 */
proto.viam.robot.v1.GetSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetSessionsRequest;
  return proto.viam.robot.v1.GetSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetSessionsRequest}
 */
proto.viam.robot.v1.GetSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetSessionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetSessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetSessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetSessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetSessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.viam.robot.v1.Session.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetSessionsResponse}
 */
proto.viam.robot.v1.GetSessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetSessionsResponse;
  return proto.viam.robot.v1.GetSessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetSessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetSessionsResponse}
 */
proto.viam.robot.v1.GetSessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.Session;
      reader.readMessage(value,proto.viam.robot.v1.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetSessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetSessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetSessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetSessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.Session.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Session sessions = 1;
 * @return {!Array<!proto.viam.robot.v1.Session>}
 */
proto.viam.robot.v1.GetSessionsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.Session, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.Session>} value
 * @return {!proto.viam.robot.v1.GetSessionsResponse} returns this
*/
proto.viam.robot.v1.GetSessionsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.Session}
 */
proto.viam.robot.v1.GetSessionsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetSessionsResponse} returns this
 */
proto.viam.robot.v1.GetSessionsResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ModuleModel.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ModuleModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ModuleModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ModuleModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, ""),
    api: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fromLocalModule: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ModuleModel}
 */
proto.viam.robot.v1.ModuleModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ModuleModel;
  return proto.viam.robot.v1.ModuleModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ModuleModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ModuleModel}
 */
proto.viam.robot.v1.ModuleModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApi(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromLocalModule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ModuleModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ModuleModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ModuleModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ModuleModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApi();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFromLocalModule();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string module_name = 1;
 * @return {string}
 */
proto.viam.robot.v1.ModuleModel.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ModuleModel} returns this
 */
proto.viam.robot.v1.ModuleModel.prototype.setModuleName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.viam.robot.v1.ModuleModel.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ModuleModel} returns this
 */
proto.viam.robot.v1.ModuleModel.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string api = 3;
 * @return {string}
 */
proto.viam.robot.v1.ModuleModel.prototype.getApi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ModuleModel} returns this
 */
proto.viam.robot.v1.ModuleModel.prototype.setApi = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool from_local_module = 4;
 * @return {boolean}
 */
proto.viam.robot.v1.ModuleModel.prototype.getFromLocalModule = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.robot.v1.ModuleModel} returns this
 */
proto.viam.robot.v1.ModuleModel.prototype.setFromLocalModule = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetModelsFromModulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetModelsFromModulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetModelsFromModulesRequest}
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetModelsFromModulesRequest;
  return proto.viam.robot.v1.GetModelsFromModulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetModelsFromModulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetModelsFromModulesRequest}
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetModelsFromModulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetModelsFromModulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetModelsFromModulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetModelsFromModulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetModelsFromModulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.viam.robot.v1.ModuleModel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetModelsFromModulesResponse}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetModelsFromModulesResponse;
  return proto.viam.robot.v1.GetModelsFromModulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetModelsFromModulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetModelsFromModulesResponse}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.ModuleModel;
      reader.readMessage(value,proto.viam.robot.v1.ModuleModel.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetModelsFromModulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetModelsFromModulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.ModuleModel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModuleModel models = 1;
 * @return {!Array<!proto.viam.robot.v1.ModuleModel>}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.ModuleModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.ModuleModel, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.ModuleModel>} value
 * @return {!proto.viam.robot.v1.GetModelsFromModulesResponse} returns this
*/
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.ModuleModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.ModuleModel}
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.ModuleModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetModelsFromModulesResponse} returns this
 */
proto.viam.robot.v1.GetModelsFromModulesResponse.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && common_v1_common_pb.ResourceName.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    lastReconfigured: (f = msg.getLastReconfigured()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.Status}
 */
proto.viam.robot.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.Status;
  return proto.viam.robot.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.Status}
 */
proto.viam.robot.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastReconfigured(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getLastReconfigured();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.ResourceName name = 1;
 * @return {?proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.Status.prototype.getName = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.robot.v1.Status} returns this
*/
proto.viam.robot.v1.Status.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Status} returns this
 */
proto.viam.robot.v1.Status.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Status.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct status = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.robot.v1.Status.prototype.getStatus = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.robot.v1.Status} returns this
*/
proto.viam.robot.v1.Status.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Status} returns this
 */
proto.viam.robot.v1.Status.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Status.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp last_reconfigured = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.Status.prototype.getLastReconfigured = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.robot.v1.Status} returns this
*/
proto.viam.robot.v1.Status.prototype.setLastReconfigured = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.Status} returns this
 */
proto.viam.robot.v1.Status.prototype.clearLastReconfigured = function() {
  return this.setLastReconfigured(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.Status.prototype.hasLastReconfigured = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetStatusRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceNamesList: jspb.Message.toObjectList(msg.getResourceNamesList(),
    common_v1_common_pb.ResourceName.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetStatusRequest}
 */
proto.viam.robot.v1.GetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetStatusRequest;
  return proto.viam.robot.v1.GetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetStatusRequest}
 */
proto.viam.robot.v1.GetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.addResourceNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceNamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
};


/**
 * repeated viam.common.v1.ResourceName resource_names = 1;
 * @return {!Array<!proto.viam.common.v1.ResourceName>}
 */
proto.viam.robot.v1.GetStatusRequest.prototype.getResourceNamesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.robot.v1.GetStatusRequest} returns this
*/
proto.viam.robot.v1.GetStatusRequest.prototype.setResourceNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.GetStatusRequest.prototype.addResourceNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetStatusRequest} returns this
 */
proto.viam.robot.v1.GetStatusRequest.prototype.clearResourceNamesList = function() {
  return this.setResourceNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetStatusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    proto.viam.robot.v1.Status.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetStatusResponse}
 */
proto.viam.robot.v1.GetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetStatusResponse;
  return proto.viam.robot.v1.GetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetStatusResponse}
 */
proto.viam.robot.v1.GetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.Status;
      reader.readMessage(value,proto.viam.robot.v1.Status.deserializeBinaryFromReader);
      msg.addStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Status status = 1;
 * @return {!Array<!proto.viam.robot.v1.Status>}
 */
proto.viam.robot.v1.GetStatusResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.Status>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.Status, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.Status>} value
 * @return {!proto.viam.robot.v1.GetStatusResponse} returns this
*/
proto.viam.robot.v1.GetStatusResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.Status=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.Status}
 */
proto.viam.robot.v1.GetStatusResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.Status, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetStatusResponse} returns this
 */
proto.viam.robot.v1.GetStatusResponse.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.StreamStatusRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StreamStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StreamStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StreamStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceNamesList: jspb.Message.toObjectList(msg.getResourceNamesList(),
    common_v1_common_pb.ResourceName.toObject, includeInstance),
    every: (f = msg.getEvery()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StreamStatusRequest}
 */
proto.viam.robot.v1.StreamStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StreamStatusRequest;
  return proto.viam.robot.v1.StreamStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StreamStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StreamStatusRequest}
 */
proto.viam.robot.v1.StreamStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.addResourceNames(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setEvery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StreamStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StreamStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StreamStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceNamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
  f = message.getEvery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated viam.common.v1.ResourceName resource_names = 1;
 * @return {!Array<!proto.viam.common.v1.ResourceName>}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.getResourceNamesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.robot.v1.StreamStatusRequest} returns this
*/
proto.viam.robot.v1.StreamStatusRequest.prototype.setResourceNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.addResourceNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.StreamStatusRequest} returns this
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.clearResourceNamesList = function() {
  return this.setResourceNamesList([]);
};


/**
 * optional google.protobuf.Duration every = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.getEvery = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.viam.robot.v1.StreamStatusRequest} returns this
*/
proto.viam.robot.v1.StreamStatusRequest.prototype.setEvery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.StreamStatusRequest} returns this
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.clearEvery = function() {
  return this.setEvery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.StreamStatusRequest.prototype.hasEvery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.StreamStatusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StreamStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StreamStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StreamStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StreamStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    proto.viam.robot.v1.Status.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StreamStatusResponse}
 */
proto.viam.robot.v1.StreamStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StreamStatusResponse;
  return proto.viam.robot.v1.StreamStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StreamStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StreamStatusResponse}
 */
proto.viam.robot.v1.StreamStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.Status;
      reader.readMessage(value,proto.viam.robot.v1.Status.deserializeBinaryFromReader);
      msg.addStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StreamStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StreamStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StreamStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StreamStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Status status = 1;
 * @return {!Array<!proto.viam.robot.v1.Status>}
 */
proto.viam.robot.v1.StreamStatusResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.Status>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.Status, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.Status>} value
 * @return {!proto.viam.robot.v1.StreamStatusResponse} returns this
*/
proto.viam.robot.v1.StreamStatusResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.Status=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.Status}
 */
proto.viam.robot.v1.StreamStatusResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.Status, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.StreamStatusResponse} returns this
 */
proto.viam.robot.v1.StreamStatusResponse.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StopExtraParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StopExtraParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopExtraParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && common_v1_common_pb.ResourceName.toObject(includeInstance, f),
    params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StopExtraParameters}
 */
proto.viam.robot.v1.StopExtraParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StopExtraParameters;
  return proto.viam.robot.v1.StopExtraParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StopExtraParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StopExtraParameters}
 */
proto.viam.robot.v1.StopExtraParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StopExtraParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StopExtraParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopExtraParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.ResourceName name = 1;
 * @return {?proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.getName = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.robot.v1.StopExtraParameters} returns this
*/
proto.viam.robot.v1.StopExtraParameters.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.StopExtraParameters} returns this
 */
proto.viam.robot.v1.StopExtraParameters.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct params = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.robot.v1.StopExtraParameters} returns this
*/
proto.viam.robot.v1.StopExtraParameters.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.StopExtraParameters} returns this
 */
proto.viam.robot.v1.StopExtraParameters.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.StopExtraParameters.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.StopAllRequest.repeatedFields_ = [99];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StopAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StopAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StopAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    extraList: jspb.Message.toObjectList(msg.getExtraList(),
    proto.viam.robot.v1.StopExtraParameters.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StopAllRequest}
 */
proto.viam.robot.v1.StopAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StopAllRequest;
  return proto.viam.robot.v1.StopAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StopAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StopAllRequest}
 */
proto.viam.robot.v1.StopAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 99:
      var value = new proto.viam.robot.v1.StopExtraParameters;
      reader.readMessage(value,proto.viam.robot.v1.StopExtraParameters.deserializeBinaryFromReader);
      msg.addExtra(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StopAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StopAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StopAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtraList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      99,
      f,
      proto.viam.robot.v1.StopExtraParameters.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StopExtraParameters extra = 99;
 * @return {!Array<!proto.viam.robot.v1.StopExtraParameters>}
 */
proto.viam.robot.v1.StopAllRequest.prototype.getExtraList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.StopExtraParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.StopExtraParameters, 99));
};


/**
 * @param {!Array<!proto.viam.robot.v1.StopExtraParameters>} value
 * @return {!proto.viam.robot.v1.StopAllRequest} returns this
*/
proto.viam.robot.v1.StopAllRequest.prototype.setExtraList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 99, value);
};


/**
 * @param {!proto.viam.robot.v1.StopExtraParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.StopExtraParameters}
 */
proto.viam.robot.v1.StopAllRequest.prototype.addExtra = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 99, opt_value, proto.viam.robot.v1.StopExtraParameters, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.StopAllRequest} returns this
 */
proto.viam.robot.v1.StopAllRequest.prototype.clearExtraList = function() {
  return this.setExtraList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StopAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StopAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StopAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StopAllResponse}
 */
proto.viam.robot.v1.StopAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StopAllResponse;
  return proto.viam.robot.v1.StopAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StopAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StopAllResponse}
 */
proto.viam.robot.v1.StopAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StopAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StopAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StopAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StopAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StartSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StartSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StartSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StartSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resume: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StartSessionRequest}
 */
proto.viam.robot.v1.StartSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StartSessionRequest;
  return proto.viam.robot.v1.StartSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StartSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StartSessionRequest}
 */
proto.viam.robot.v1.StartSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StartSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StartSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StartSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StartSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResume();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resume = 1;
 * @return {string}
 */
proto.viam.robot.v1.StartSessionRequest.prototype.getResume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.StartSessionRequest} returns this
 */
proto.viam.robot.v1.StartSessionRequest.prototype.setResume = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.StartSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.StartSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.StartSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StartSessionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    heartbeatWindow: (f = msg.getHeartbeatWindow()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.StartSessionResponse}
 */
proto.viam.robot.v1.StartSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.StartSessionResponse;
  return proto.viam.robot.v1.StartSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.StartSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.StartSessionResponse}
 */
proto.viam.robot.v1.StartSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setHeartbeatWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.StartSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.StartSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.StartSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.StartSessionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeartbeatWindow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.StartSessionResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.StartSessionResponse} returns this
 */
proto.viam.robot.v1.StartSessionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration heartbeat_window = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.viam.robot.v1.StartSessionResponse.prototype.getHeartbeatWindow = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.viam.robot.v1.StartSessionResponse} returns this
*/
proto.viam.robot.v1.StartSessionResponse.prototype.setHeartbeatWindow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.StartSessionResponse} returns this
 */
proto.viam.robot.v1.StartSessionResponse.prototype.clearHeartbeatWindow = function() {
  return this.setHeartbeatWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.StartSessionResponse.prototype.hasHeartbeatWindow = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.SendSessionHeartbeatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.SendSessionHeartbeatRequest}
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.SendSessionHeartbeatRequest;
  return proto.viam.robot.v1.SendSessionHeartbeatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.SendSessionHeartbeatRequest}
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.SendSessionHeartbeatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.SendSessionHeartbeatRequest} returns this
 */
proto.viam.robot.v1.SendSessionHeartbeatRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.SendSessionHeartbeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.SendSessionHeartbeatResponse}
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.SendSessionHeartbeatResponse;
  return proto.viam.robot.v1.SendSessionHeartbeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.SendSessionHeartbeatResponse}
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.SendSessionHeartbeatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.SendSessionHeartbeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.SendSessionHeartbeatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.LogRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.LogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.LogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.LogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.LogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    common_v1_common_pb.LogEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.LogRequest}
 */
proto.viam.robot.v1.LogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.LogRequest;
  return proto.viam.robot.v1.LogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.LogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.LogRequest}
 */
proto.viam.robot.v1.LogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.LogEntry;
      reader.readMessage(value,common_v1_common_pb.LogEntry.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.LogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.LogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.LogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.LogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_v1_common_pb.LogEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated viam.common.v1.LogEntry logs = 1;
 * @return {!Array<!proto.viam.common.v1.LogEntry>}
 */
proto.viam.robot.v1.LogRequest.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.LogEntry, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.LogEntry>} value
 * @return {!proto.viam.robot.v1.LogRequest} returns this
*/
proto.viam.robot.v1.LogRequest.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.LogEntry}
 */
proto.viam.robot.v1.LogRequest.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.LogRequest} returns this
 */
proto.viam.robot.v1.LogRequest.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.LogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.LogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.LogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.LogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.LogResponse}
 */
proto.viam.robot.v1.LogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.LogResponse;
  return proto.viam.robot.v1.LogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.LogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.LogResponse}
 */
proto.viam.robot.v1.LogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.LogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.LogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.LogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.LogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetCloudMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetCloudMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetCloudMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetCloudMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetCloudMetadataRequest}
 */
proto.viam.robot.v1.GetCloudMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetCloudMetadataRequest;
  return proto.viam.robot.v1.GetCloudMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetCloudMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetCloudMetadataRequest}
 */
proto.viam.robot.v1.GetCloudMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetCloudMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetCloudMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetCloudMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetCloudMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetCloudMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetCloudMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetCloudMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotPartId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primaryOrgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    machineId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    machinePartId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetCloudMetadataResponse;
  return proto.viam.robot.v1.GetCloudMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetCloudMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotPartId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachineId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachinePartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetCloudMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetCloudMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetCloudMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimaryOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMachineId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMachinePartId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string robot_part_id = 1;
 * @return {string}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.getRobotPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.setRobotPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string primary_org_id = 2;
 * @return {string}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.getPrimaryOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.setPrimaryOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location_id = 3;
 * @return {string}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string machine_id = 4;
 * @return {string}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.getMachineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.setMachineId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string machine_part_id = 5;
 * @return {string}
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.getMachinePartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.robot.v1.GetCloudMetadataResponse.prototype.setMachinePartId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.viam.robot.v1.RestartModuleRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.viam.robot.v1.RestartModuleRequest.IdOrNameCase = {
  ID_OR_NAME_NOT_SET: 0,
  MODULE_ID: 1,
  MODULE_NAME: 2
};

/**
 * @return {proto.viam.robot.v1.RestartModuleRequest.IdOrNameCase}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.getIdOrNameCase = function() {
  return /** @type {proto.viam.robot.v1.RestartModuleRequest.IdOrNameCase} */(jspb.Message.computeOneofCase(this, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.RestartModuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.RestartModuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.RestartModuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    moduleName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.RestartModuleRequest}
 */
proto.viam.robot.v1.RestartModuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.RestartModuleRequest;
  return proto.viam.robot.v1.RestartModuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.RestartModuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.RestartModuleRequest}
 */
proto.viam.robot.v1.RestartModuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.RestartModuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.RestartModuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.RestartModuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.RestartModuleRequest} returns this
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.setModuleId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.robot.v1.RestartModuleRequest} returns this
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.clearModuleId = function() {
  return jspb.Message.setOneofField(this, 1, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.hasModuleId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string module_name = 2;
 * @return {string}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.RestartModuleRequest} returns this
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.setModuleName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.robot.v1.RestartModuleRequest} returns this
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.clearModuleName = function() {
  return jspb.Message.setOneofField(this, 2, proto.viam.robot.v1.RestartModuleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.RestartModuleRequest.prototype.hasModuleName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.RestartModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.RestartModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.RestartModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.RestartModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.RestartModuleResponse}
 */
proto.viam.robot.v1.RestartModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.RestartModuleResponse;
  return proto.viam.robot.v1.RestartModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.RestartModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.RestartModuleResponse}
 */
proto.viam.robot.v1.RestartModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.RestartModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.RestartModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.RestartModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.RestartModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ShutdownRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ShutdownRequest}
 */
proto.viam.robot.v1.ShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ShutdownRequest;
  return proto.viam.robot.v1.ShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ShutdownRequest}
 */
proto.viam.robot.v1.ShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ShutdownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ShutdownResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ShutdownResponse}
 */
proto.viam.robot.v1.ShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ShutdownResponse;
  return proto.viam.robot.v1.ShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ShutdownResponse}
 */
proto.viam.robot.v1.ShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetMachineStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetMachineStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetMachineStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetMachineStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetMachineStatusRequest}
 */
proto.viam.robot.v1.GetMachineStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetMachineStatusRequest;
  return proto.viam.robot.v1.GetMachineStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetMachineStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetMachineStatusRequest}
 */
proto.viam.robot.v1.GetMachineStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetMachineStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetMachineStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetMachineStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetMachineStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetMachineStatusResponse.repeatedFields_ = [1,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetMachineStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetMachineStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetMachineStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.viam.robot.v1.ResourceStatus.toObject, includeInstance),
    config: (f = msg.getConfig()) && proto.viam.robot.v1.ConfigStatus.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    jobStatusesList: jspb.Message.toObjectList(msg.getJobStatusesList(),
    proto.viam.robot.v1.JobStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse}
 */
proto.viam.robot.v1.GetMachineStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetMachineStatusResponse;
  return proto.viam.robot.v1.GetMachineStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetMachineStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse}
 */
proto.viam.robot.v1.GetMachineStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.robot.v1.ResourceStatus;
      reader.readMessage(value,proto.viam.robot.v1.ResourceStatus.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 2:
      var value = new proto.viam.robot.v1.ConfigStatus;
      reader.readMessage(value,proto.viam.robot.v1.ConfigStatus.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {!proto.viam.robot.v1.GetMachineStatusResponse.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new proto.viam.robot.v1.JobStatus;
      reader.readMessage(value,proto.viam.robot.v1.JobStatus.deserializeBinaryFromReader);
      msg.addJobStatuses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetMachineStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetMachineStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetMachineStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.robot.v1.ResourceStatus.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.robot.v1.ConfigStatus.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getJobStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.viam.robot.v1.JobStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.viam.robot.v1.GetMachineStatusResponse.State = {
  STATE_UNSPECIFIED: 0,
  STATE_INITIALIZING: 1,
  STATE_RUNNING: 2
};

/**
 * repeated ResourceStatus resources = 1;
 * @return {!Array<!proto.viam.robot.v1.ResourceStatus>}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.ResourceStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.ResourceStatus, 1));
};


/**
 * @param {!Array<!proto.viam.robot.v1.ResourceStatus>} value
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
*/
proto.viam.robot.v1.GetMachineStatusResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.robot.v1.ResourceStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.ResourceStatus}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.robot.v1.ResourceStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional ConfigStatus config = 2;
 * @return {?proto.viam.robot.v1.ConfigStatus}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.getConfig = function() {
  return /** @type{?proto.viam.robot.v1.ConfigStatus} */ (
    jspb.Message.getWrapperField(this, proto.viam.robot.v1.ConfigStatus, 2));
};


/**
 * @param {?proto.viam.robot.v1.ConfigStatus|undefined} value
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
*/
proto.viam.robot.v1.GetMachineStatusResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional State state = 3;
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse.State}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.getState = function() {
  return /** @type {!proto.viam.robot.v1.GetMachineStatusResponse.State} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.viam.robot.v1.GetMachineStatusResponse.State} value
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated JobStatus job_statuses = 4;
 * @return {!Array<!proto.viam.robot.v1.JobStatus>}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.getJobStatusesList = function() {
  return /** @type{!Array<!proto.viam.robot.v1.JobStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.robot.v1.JobStatus, 4));
};


/**
 * @param {!Array<!proto.viam.robot.v1.JobStatus>} value
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
*/
proto.viam.robot.v1.GetMachineStatusResponse.prototype.setJobStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.viam.robot.v1.JobStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.robot.v1.JobStatus}
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.addJobStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.viam.robot.v1.JobStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetMachineStatusResponse} returns this
 */
proto.viam.robot.v1.GetMachineStatusResponse.prototype.clearJobStatusesList = function() {
  return this.setJobStatusesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.JobStatus.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.JobStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.JobStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.JobStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.JobStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recentSuccessfulRunsList: jspb.Message.toObjectList(msg.getRecentSuccessfulRunsList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance),
    recentFailedRunsList: jspb.Message.toObjectList(msg.getRecentFailedRunsList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.JobStatus}
 */
proto.viam.robot.v1.JobStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.JobStatus;
  return proto.viam.robot.v1.JobStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.JobStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.JobStatus}
 */
proto.viam.robot.v1.JobStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addRecentSuccessfulRuns(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addRecentFailedRuns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.JobStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.JobStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.JobStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.JobStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecentSuccessfulRunsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRecentFailedRunsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string job_name = 1;
 * @return {string}
 */
proto.viam.robot.v1.JobStatus.prototype.getJobName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.JobStatus} returns this
 */
proto.viam.robot.v1.JobStatus.prototype.setJobName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated google.protobuf.Timestamp recent_successful_runs = 2;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.viam.robot.v1.JobStatus.prototype.getRecentSuccessfulRunsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Timestamp>} value
 * @return {!proto.viam.robot.v1.JobStatus} returns this
*/
proto.viam.robot.v1.JobStatus.prototype.setRecentSuccessfulRunsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.JobStatus.prototype.addRecentSuccessfulRuns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.JobStatus} returns this
 */
proto.viam.robot.v1.JobStatus.prototype.clearRecentSuccessfulRunsList = function() {
  return this.setRecentSuccessfulRunsList([]);
};


/**
 * repeated google.protobuf.Timestamp recent_failed_runs = 3;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.viam.robot.v1.JobStatus.prototype.getRecentFailedRunsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.Timestamp>} value
 * @return {!proto.viam.robot.v1.JobStatus} returns this
*/
proto.viam.robot.v1.JobStatus.prototype.setRecentFailedRunsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.JobStatus.prototype.addRecentFailedRuns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.JobStatus} returns this
 */
proto.viam.robot.v1.JobStatus.prototype.clearRecentFailedRunsList = function() {
  return this.setRecentFailedRunsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ResourceStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ResourceStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ResourceStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && common_v1_common_pb.ResourceName.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    revision: jspb.Message.getFieldWithDefault(msg, 4, ""),
    error: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cloudMetadata: (f = msg.getCloudMetadata()) && proto.viam.robot.v1.GetCloudMetadataResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ResourceStatus}
 */
proto.viam.robot.v1.ResourceStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ResourceStatus;
  return proto.viam.robot.v1.ResourceStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ResourceStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ResourceStatus}
 */
proto.viam.robot.v1.ResourceStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.ResourceName;
      reader.readMessage(value,common_v1_common_pb.ResourceName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.viam.robot.v1.ResourceStatus.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevision(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 6:
      var value = new proto.viam.robot.v1.GetCloudMetadataResponse;
      reader.readMessage(value,proto.viam.robot.v1.GetCloudMetadataResponse.deserializeBinaryFromReader);
      msg.setCloudMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ResourceStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ResourceStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ResourceStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ResourceStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.ResourceName.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRevision();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCloudMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.viam.robot.v1.GetCloudMetadataResponse.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.viam.robot.v1.ResourceStatus.State = {
  STATE_UNSPECIFIED: 0,
  STATE_UNCONFIGURED: 1,
  STATE_CONFIGURING: 2,
  STATE_READY: 3,
  STATE_REMOVING: 4,
  STATE_UNHEALTHY: 5
};

/**
 * optional viam.common.v1.ResourceName name = 1;
 * @return {?proto.viam.common.v1.ResourceName}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getName = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
*/
proto.viam.robot.v1.ResourceStatus.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.ResourceStatus.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional State state = 2;
 * @return {!proto.viam.robot.v1.ResourceStatus.State}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getState = function() {
  return /** @type {!proto.viam.robot.v1.ResourceStatus.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.viam.robot.v1.ResourceStatus.State} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
*/
proto.viam.robot.v1.ResourceStatus.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.ResourceStatus.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string revision = 4;
 * @return {string}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getRevision = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.setRevision = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string error = 5;
 * @return {string}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional GetCloudMetadataResponse cloud_metadata = 6;
 * @return {?proto.viam.robot.v1.GetCloudMetadataResponse}
 */
proto.viam.robot.v1.ResourceStatus.prototype.getCloudMetadata = function() {
  return /** @type{?proto.viam.robot.v1.GetCloudMetadataResponse} */ (
    jspb.Message.getWrapperField(this, proto.viam.robot.v1.GetCloudMetadataResponse, 6));
};


/**
 * @param {?proto.viam.robot.v1.GetCloudMetadataResponse|undefined} value
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
*/
proto.viam.robot.v1.ResourceStatus.prototype.setCloudMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.ResourceStatus} returns this
 */
proto.viam.robot.v1.ResourceStatus.prototype.clearCloudMetadata = function() {
  return this.setCloudMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.ResourceStatus.prototype.hasCloudMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.ConfigStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.ConfigStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.ConfigStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ConfigStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.ConfigStatus}
 */
proto.viam.robot.v1.ConfigStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.ConfigStatus;
  return proto.viam.robot.v1.ConfigStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.ConfigStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.ConfigStatus}
 */
proto.viam.robot.v1.ConfigStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevision(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.ConfigStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.ConfigStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.ConfigStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.ConfigStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevision();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string revision = 1;
 * @return {string}
 */
proto.viam.robot.v1.ConfigStatus.prototype.getRevision = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.ConfigStatus} returns this
 */
proto.viam.robot.v1.ConfigStatus.prototype.setRevision = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.robot.v1.ConfigStatus.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.robot.v1.ConfigStatus} returns this
*/
proto.viam.robot.v1.ConfigStatus.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.ConfigStatus} returns this
 */
proto.viam.robot.v1.ConfigStatus.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.ConfigStatus.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetVersionRequest}
 */
proto.viam.robot.v1.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetVersionRequest;
  return proto.viam.robot.v1.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetVersionRequest}
 */
proto.viam.robot.v1.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    apiVersion: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetVersionResponse}
 */
proto.viam.robot.v1.GetVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetVersionResponse;
  return proto.viam.robot.v1.GetVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetVersionResponse}
 */
proto.viam.robot.v1.GetVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApiVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.viam.robot.v1.GetVersionResponse.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetVersionResponse} returns this
 */
proto.viam.robot.v1.GetVersionResponse.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.viam.robot.v1.GetVersionResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetVersionResponse} returns this
 */
proto.viam.robot.v1.GetVersionResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string api_version = 3;
 * @return {string}
 */
proto.viam.robot.v1.GetVersionResponse.prototype.getApiVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetVersionResponse} returns this
 */
proto.viam.robot.v1.GetVersionResponse.prototype.setApiVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.robot.v1.GetPoseRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetPoseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetPoseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetPoseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationFrame: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplementalTransformsList: jspb.Message.toObjectList(msg.getSupplementalTransformsList(),
    common_v1_common_pb.Transform.toObject, includeInstance),
    extra: (f = msg.getExtra()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetPoseRequest}
 */
proto.viam.robot.v1.GetPoseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetPoseRequest;
  return proto.viam.robot.v1.GetPoseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetPoseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetPoseRequest}
 */
proto.viam.robot.v1.GetPoseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationFrame(value);
      break;
    case 3:
      var value = new common_v1_common_pb.Transform;
      reader.readMessage(value,common_v1_common_pb.Transform.deserializeBinaryFromReader);
      msg.addSupplementalTransforms(value);
      break;
    case 99:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setExtra(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetPoseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetPoseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetPoseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationFrame();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplementalTransformsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_v1_common_pb.Transform.serializeBinaryToWriter
    );
  }
  f = message.getExtra();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string component_name = 1;
 * @return {string}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.getComponentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
 */
proto.viam.robot.v1.GetPoseRequest.prototype.setComponentName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_frame = 2;
 * @return {string}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.getDestinationFrame = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
 */
proto.viam.robot.v1.GetPoseRequest.prototype.setDestinationFrame = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated viam.common.v1.Transform supplemental_transforms = 3;
 * @return {!Array<!proto.viam.common.v1.Transform>}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.getSupplementalTransformsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.Transform>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.Transform, 3));
};


/**
 * @param {!Array<!proto.viam.common.v1.Transform>} value
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
*/
proto.viam.robot.v1.GetPoseRequest.prototype.setSupplementalTransformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.common.v1.Transform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.Transform}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.addSupplementalTransforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.common.v1.Transform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
 */
proto.viam.robot.v1.GetPoseRequest.prototype.clearSupplementalTransformsList = function() {
  return this.setSupplementalTransformsList([]);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
*/
proto.viam.robot.v1.GetPoseRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.GetPoseRequest} returns this
 */
proto.viam.robot.v1.GetPoseRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.GetPoseRequest.prototype.hasExtra = function() {
  return jspb.Message.getField(this, 99) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.robot.v1.GetPoseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.robot.v1.GetPoseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.robot.v1.GetPoseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetPoseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pose: (f = msg.getPose()) && common_v1_common_pb.PoseInFrame.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.robot.v1.GetPoseResponse}
 */
proto.viam.robot.v1.GetPoseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.robot.v1.GetPoseResponse;
  return proto.viam.robot.v1.GetPoseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.robot.v1.GetPoseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.robot.v1.GetPoseResponse}
 */
proto.viam.robot.v1.GetPoseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.PoseInFrame;
      reader.readMessage(value,common_v1_common_pb.PoseInFrame.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.robot.v1.GetPoseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.robot.v1.GetPoseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.robot.v1.GetPoseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.robot.v1.GetPoseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.PoseInFrame.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.PoseInFrame pose = 1;
 * @return {?proto.viam.common.v1.PoseInFrame}
 */
proto.viam.robot.v1.GetPoseResponse.prototype.getPose = function() {
  return /** @type{?proto.viam.common.v1.PoseInFrame} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.PoseInFrame, 1));
};


/**
 * @param {?proto.viam.common.v1.PoseInFrame|undefined} value
 * @return {!proto.viam.robot.v1.GetPoseResponse} returns this
*/
proto.viam.robot.v1.GetPoseResponse.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.robot.v1.GetPoseResponse} returns this
 */
proto.viam.robot.v1.GetPoseResponse.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.robot.v1.GetPoseResponse.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.viam.robot.v1.PeerConnectionType = {
  PEER_CONNECTION_TYPE_UNSPECIFIED: 0,
  PEER_CONNECTION_TYPE_GRPC: 1,
  PEER_CONNECTION_TYPE_WEBRTC: 2
};

goog.object.extend(exports, proto.viam.robot.v1);
