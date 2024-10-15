// source: physicalDevice/v1/physicalDevice.proto
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
goog.exportSymbol('proto.viam.physicalDevice.v1.BlockForOperationRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.BlockForOperationResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.CancelOperationRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.CancelOperationResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.DiscoverComponentsRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.DiscoverComponentsResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.Discovery', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.DiscoveryQuery', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.FrameSystemConfig', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.FrameSystemConfigRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.FrameSystemConfigResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetCloudMetadataRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetCloudMetadataResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetOperationsRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetOperationsResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetSessionsRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetSessionsResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetStatusRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.GetStatusResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.LogRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.LogResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.Operation', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.PeerConnectionInfo', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.PeerConnectionType', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ResourceNamesRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ResourceNamesResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ResourceRPCSubtype', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.RestartModuleRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.RestartModuleRequest.IdOrNameCase', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.RestartModuleResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.Session', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ShutdownRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.ShutdownResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StartSessionRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StartSessionResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.Status', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StopAllRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StopAllResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StopExtraParameters', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StreamStatusRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.StreamStatusResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.TransformPCDRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.TransformPCDResponse', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.TransformPoseRequest', null, global);
goog.exportSymbol('proto.viam.physicalDevice.v1.TransformPoseResponse', null, global);
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
proto.viam.physicalDevice.v1.FrameSystemConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.FrameSystemConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.FrameSystemConfig.displayName = 'proto.viam.physicalDevice.v1.FrameSystemConfig';
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
proto.viam.physicalDevice.v1.FrameSystemConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.FrameSystemConfigRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.FrameSystemConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.FrameSystemConfigRequest.displayName = 'proto.viam.physicalDevice.v1.FrameSystemConfigRequest';
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
proto.viam.physicalDevice.v1.FrameSystemConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.FrameSystemConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.FrameSystemConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.FrameSystemConfigResponse.displayName = 'proto.viam.physicalDevice.v1.FrameSystemConfigResponse';
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
proto.viam.physicalDevice.v1.TransformPoseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.TransformPoseRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.TransformPoseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.TransformPoseRequest.displayName = 'proto.viam.physicalDevice.v1.TransformPoseRequest';
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
proto.viam.physicalDevice.v1.TransformPoseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.TransformPoseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.TransformPoseResponse.displayName = 'proto.viam.physicalDevice.v1.TransformPoseResponse';
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
proto.viam.physicalDevice.v1.TransformPCDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.TransformPCDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.TransformPCDRequest.displayName = 'proto.viam.physicalDevice.v1.TransformPCDRequest';
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
proto.viam.physicalDevice.v1.TransformPCDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.TransformPCDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.TransformPCDResponse.displayName = 'proto.viam.physicalDevice.v1.TransformPCDResponse';
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
proto.viam.physicalDevice.v1.ResourceNamesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ResourceNamesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ResourceNamesRequest.displayName = 'proto.viam.physicalDevice.v1.ResourceNamesRequest';
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
proto.viam.physicalDevice.v1.ResourceNamesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.ResourceNamesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ResourceNamesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ResourceNamesResponse.displayName = 'proto.viam.physicalDevice.v1.ResourceNamesResponse';
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
proto.viam.physicalDevice.v1.ResourceRPCSubtype = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ResourceRPCSubtype, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ResourceRPCSubtype.displayName = 'proto.viam.physicalDevice.v1.ResourceRPCSubtype';
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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.displayName = 'proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest';
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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.displayName = 'proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse';
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
proto.viam.physicalDevice.v1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.Operation.displayName = 'proto.viam.physicalDevice.v1.Operation';
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
proto.viam.physicalDevice.v1.GetOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetOperationsRequest.displayName = 'proto.viam.physicalDevice.v1.GetOperationsRequest';
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
proto.viam.physicalDevice.v1.GetOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.GetOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetOperationsResponse.displayName = 'proto.viam.physicalDevice.v1.GetOperationsResponse';
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
proto.viam.physicalDevice.v1.CancelOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.CancelOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.CancelOperationRequest.displayName = 'proto.viam.physicalDevice.v1.CancelOperationRequest';
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
proto.viam.physicalDevice.v1.CancelOperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.CancelOperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.CancelOperationResponse.displayName = 'proto.viam.physicalDevice.v1.CancelOperationResponse';
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
proto.viam.physicalDevice.v1.BlockForOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.BlockForOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.BlockForOperationRequest.displayName = 'proto.viam.physicalDevice.v1.BlockForOperationRequest';
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
proto.viam.physicalDevice.v1.BlockForOperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.BlockForOperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.BlockForOperationResponse.displayName = 'proto.viam.physicalDevice.v1.BlockForOperationResponse';
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
proto.viam.physicalDevice.v1.PeerConnectionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.PeerConnectionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.PeerConnectionInfo.displayName = 'proto.viam.physicalDevice.v1.PeerConnectionInfo';
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
proto.viam.physicalDevice.v1.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.Session.displayName = 'proto.viam.physicalDevice.v1.Session';
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
proto.viam.physicalDevice.v1.GetSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetSessionsRequest.displayName = 'proto.viam.physicalDevice.v1.GetSessionsRequest';
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
proto.viam.physicalDevice.v1.GetSessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.GetSessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetSessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetSessionsResponse.displayName = 'proto.viam.physicalDevice.v1.GetSessionsResponse';
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
proto.viam.physicalDevice.v1.DiscoveryQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.DiscoveryQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.DiscoveryQuery.displayName = 'proto.viam.physicalDevice.v1.DiscoveryQuery';
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
proto.viam.physicalDevice.v1.Discovery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.Discovery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.Discovery.displayName = 'proto.viam.physicalDevice.v1.Discovery';
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
proto.viam.physicalDevice.v1.DiscoverComponentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.DiscoverComponentsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.DiscoverComponentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.DiscoverComponentsRequest.displayName = 'proto.viam.physicalDevice.v1.DiscoverComponentsRequest';
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
proto.viam.physicalDevice.v1.DiscoverComponentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.DiscoverComponentsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.DiscoverComponentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.DiscoverComponentsResponse.displayName = 'proto.viam.physicalDevice.v1.DiscoverComponentsResponse';
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
proto.viam.physicalDevice.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.Status.displayName = 'proto.viam.physicalDevice.v1.Status';
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
proto.viam.physicalDevice.v1.GetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.GetStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetStatusRequest.displayName = 'proto.viam.physicalDevice.v1.GetStatusRequest';
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
proto.viam.physicalDevice.v1.GetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.GetStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetStatusResponse.displayName = 'proto.viam.physicalDevice.v1.GetStatusResponse';
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
proto.viam.physicalDevice.v1.StreamStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.StreamStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StreamStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StreamStatusRequest.displayName = 'proto.viam.physicalDevice.v1.StreamStatusRequest';
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
proto.viam.physicalDevice.v1.StreamStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.StreamStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StreamStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StreamStatusResponse.displayName = 'proto.viam.physicalDevice.v1.StreamStatusResponse';
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
proto.viam.physicalDevice.v1.StopExtraParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StopExtraParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StopExtraParameters.displayName = 'proto.viam.physicalDevice.v1.StopExtraParameters';
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
proto.viam.physicalDevice.v1.StopAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.StopAllRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StopAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StopAllRequest.displayName = 'proto.viam.physicalDevice.v1.StopAllRequest';
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
proto.viam.physicalDevice.v1.StopAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StopAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StopAllResponse.displayName = 'proto.viam.physicalDevice.v1.StopAllResponse';
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
proto.viam.physicalDevice.v1.StartSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StartSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StartSessionRequest.displayName = 'proto.viam.physicalDevice.v1.StartSessionRequest';
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
proto.viam.physicalDevice.v1.StartSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.StartSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.StartSessionResponse.displayName = 'proto.viam.physicalDevice.v1.StartSessionResponse';
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.displayName = 'proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest';
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.displayName = 'proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse';
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
proto.viam.physicalDevice.v1.LogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.physicalDevice.v1.LogRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.physicalDevice.v1.LogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.LogRequest.displayName = 'proto.viam.physicalDevice.v1.LogRequest';
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
proto.viam.physicalDevice.v1.LogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.LogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.LogResponse.displayName = 'proto.viam.physicalDevice.v1.LogResponse';
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
proto.viam.physicalDevice.v1.GetCloudMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetCloudMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetCloudMetadataRequest.displayName = 'proto.viam.physicalDevice.v1.GetCloudMetadataRequest';
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
proto.viam.physicalDevice.v1.GetCloudMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.GetCloudMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.GetCloudMetadataResponse.displayName = 'proto.viam.physicalDevice.v1.GetCloudMetadataResponse';
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
proto.viam.physicalDevice.v1.RestartModuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_);
};
goog.inherits(proto.viam.physicalDevice.v1.RestartModuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.RestartModuleRequest.displayName = 'proto.viam.physicalDevice.v1.RestartModuleRequest';
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
proto.viam.physicalDevice.v1.RestartModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.RestartModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.RestartModuleResponse.displayName = 'proto.viam.physicalDevice.v1.RestartModuleResponse';
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
proto.viam.physicalDevice.v1.ShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ShutdownRequest.displayName = 'proto.viam.physicalDevice.v1.ShutdownRequest';
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
proto.viam.physicalDevice.v1.ShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.physicalDevice.v1.ShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.physicalDevice.v1.ShutdownResponse.displayName = 'proto.viam.physicalDevice.v1.ShutdownResponse';
}



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
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.FrameSystemConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig}
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.FrameSystemConfig;
  return proto.viam.physicalDevice.v1.FrameSystemConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig}
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.FrameSystemConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.getFrame = function() {
  return /** @type{?proto.viam.common.v1.Transform} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.Transform, 1));
};


/**
 * @param {?proto.viam.common.v1.Transform|undefined} value
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig} returns this
*/
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.setFrame = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig} returns this
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.clearFrame = function() {
  return this.setFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.hasFrame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct kinematics = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.getKinematics = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig} returns this
*/
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.setKinematics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig} returns this
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.clearKinematics = function() {
  return this.setKinematics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.FrameSystemConfig.prototype.hasKinematics = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.FrameSystemConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.FrameSystemConfigRequest;
  return proto.viam.physicalDevice.v1.FrameSystemConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.FrameSystemConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.getSupplementalTransformsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.Transform>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.Transform, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.Transform>} value
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest} returns this
*/
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.setSupplementalTransformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.Transform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.Transform}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.addSupplementalTransforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.Transform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigRequest} returns this
 */
proto.viam.physicalDevice.v1.FrameSystemConfigRequest.prototype.clearSupplementalTransformsList = function() {
  return this.setSupplementalTransformsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.FrameSystemConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameSystemConfigsList: jspb.Message.toObjectList(msg.getFrameSystemConfigsList(),
    proto.viam.physicalDevice.v1.FrameSystemConfig.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.FrameSystemConfigResponse;
  return proto.viam.physicalDevice.v1.FrameSystemConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.FrameSystemConfig;
      reader.readMessage(value,proto.viam.physicalDevice.v1.FrameSystemConfig.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.FrameSystemConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameSystemConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.FrameSystemConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FrameSystemConfig frame_system_configs = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.FrameSystemConfig>}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.getFrameSystemConfigsList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.FrameSystemConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.FrameSystemConfig, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.FrameSystemConfig>} value
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse} returns this
*/
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.setFrameSystemConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.FrameSystemConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfig}
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.addFrameSystemConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.FrameSystemConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.FrameSystemConfigResponse} returns this
 */
proto.viam.physicalDevice.v1.FrameSystemConfigResponse.prototype.clearFrameSystemConfigsList = function() {
  return this.setFrameSystemConfigsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.repeatedFields_ = [3];



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
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.TransformPoseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.TransformPoseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.TransformPoseRequest;
  return proto.viam.physicalDevice.v1.TransformPoseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.TransformPoseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.TransformPoseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.TransformPoseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.getSource = function() {
  return /** @type{?proto.viam.common.v1.PoseInFrame} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.PoseInFrame, 1));
};


/**
 * @param {?proto.viam.common.v1.PoseInFrame|undefined} value
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest} returns this
*/
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string destination = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated viam.common.v1.Transform supplemental_transforms = 3;
 * @return {!Array<!proto.viam.common.v1.Transform>}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.getSupplementalTransformsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.Transform>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.Transform, 3));
};


/**
 * @param {!Array<!proto.viam.common.v1.Transform>} value
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest} returns this
*/
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.setSupplementalTransformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.common.v1.Transform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.Transform}
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.addSupplementalTransforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.common.v1.Transform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.TransformPoseRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPoseRequest.prototype.clearSupplementalTransformsList = function() {
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
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.TransformPoseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.TransformPoseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.TransformPoseResponse}
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.TransformPoseResponse;
  return proto.viam.physicalDevice.v1.TransformPoseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.TransformPoseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.TransformPoseResponse}
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.TransformPoseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.TransformPoseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.getPose = function() {
  return /** @type{?proto.viam.common.v1.PoseInFrame} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.PoseInFrame, 1));
};


/**
 * @param {?proto.viam.common.v1.PoseInFrame|undefined} value
 * @return {!proto.viam.physicalDevice.v1.TransformPoseResponse} returns this
*/
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.TransformPoseResponse} returns this
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.TransformPoseResponse.prototype.hasPose = function() {
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
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.TransformPCDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.TransformPCDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.TransformPCDRequest}
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.TransformPCDRequest;
  return proto.viam.physicalDevice.v1.TransformPCDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.TransformPCDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.TransformPCDRequest}
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.TransformPCDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.TransformPCDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.getPointCloudPcd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {string}
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.getPointCloudPcd_asB64 = function() {
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
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.getPointCloudPcd_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPointCloudPcd()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.physicalDevice.v1.TransformPCDRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.setPointCloudPcd = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string source = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.TransformPCDRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination = 3;
 * @return {string}
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.TransformPCDRequest} returns this
 */
proto.viam.physicalDevice.v1.TransformPCDRequest.prototype.setDestination = function(value) {
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
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.TransformPCDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.TransformPCDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.TransformPCDResponse}
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.TransformPCDResponse;
  return proto.viam.physicalDevice.v1.TransformPCDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.TransformPCDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.TransformPCDResponse}
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.TransformPCDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.TransformPCDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.getPointCloudPcd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes point_cloud_pcd = 1;
 * This is a type-conversion wrapper around `getPointCloudPcd()`
 * @return {string}
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.getPointCloudPcd_asB64 = function() {
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
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.getPointCloudPcd_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPointCloudPcd()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.physicalDevice.v1.TransformPCDResponse} returns this
 */
proto.viam.physicalDevice.v1.TransformPCDResponse.prototype.setPointCloudPcd = function(value) {
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
proto.viam.physicalDevice.v1.ResourceNamesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ResourceNamesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceNamesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesRequest}
 */
proto.viam.physicalDevice.v1.ResourceNamesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ResourceNamesRequest;
  return proto.viam.physicalDevice.v1.ResourceNamesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesRequest}
 */
proto.viam.physicalDevice.v1.ResourceNamesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ResourceNamesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ResourceNamesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceNamesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ResourceNamesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesResponse}
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ResourceNamesResponse;
  return proto.viam.physicalDevice.v1.ResourceNamesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesResponse}
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ResourceNamesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ResourceNamesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesResponse} returns this
*/
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.ResourceNamesResponse} returns this
 */
proto.viam.physicalDevice.v1.ResourceNamesResponse.prototype.clearResourcesList = function() {
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
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ResourceRPCSubtype.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ResourceRPCSubtype;
  return proto.viam.physicalDevice.v1.ResourceRPCSubtype.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ResourceRPCSubtype.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.getSubtype = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} returns this
*/
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.setSubtype = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} returns this
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.clearSubtype = function() {
  return this.setSubtype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.hasSubtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proto_service = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.getProtoService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype} returns this
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtype.prototype.setProtoService = function(value) {
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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest;
  return proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceRpcSubtypesList: jspb.Message.toObjectList(msg.getResourceRpcSubtypesList(),
    proto.viam.physicalDevice.v1.ResourceRPCSubtype.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse;
  return proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.ResourceRPCSubtype;
      reader.readMessage(value,proto.viam.physicalDevice.v1.ResourceRPCSubtype.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceRpcSubtypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.ResourceRPCSubtype.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResourceRPCSubtype resource_rpc_subtypes = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.ResourceRPCSubtype>}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.getResourceRpcSubtypesList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.ResourceRPCSubtype>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.ResourceRPCSubtype, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.ResourceRPCSubtype>} value
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse} returns this
*/
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.setResourceRpcSubtypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.ResourceRPCSubtype=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtype}
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.addResourceRpcSubtypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.ResourceRPCSubtype, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse} returns this
 */
proto.viam.physicalDevice.v1.ResourceRPCSubtypesResponse.prototype.clearResourceRpcSubtypesList = function() {
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
proto.viam.physicalDevice.v1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Operation.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.Operation}
 */
proto.viam.physicalDevice.v1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.Operation;
  return proto.viam.physicalDevice.v1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.Operation}
 */
proto.viam.physicalDevice.v1.Operation.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Operation.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.Operation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string method = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.Operation.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct arguments = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.physicalDevice.v1.Operation.prototype.getArguments = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
*/
proto.viam.physicalDevice.v1.Operation.prototype.setArguments = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.clearArguments = function() {
  return this.setArguments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Operation.prototype.hasArguments = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp started = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.physicalDevice.v1.Operation.prototype.getStarted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
*/
proto.viam.physicalDevice.v1.Operation.prototype.setStarted = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.clearStarted = function() {
  return this.setStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Operation.prototype.hasStarted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string session_id = 5;
 * @return {string}
 */
proto.viam.physicalDevice.v1.Operation.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.setSessionId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Operation} returns this
 */
proto.viam.physicalDevice.v1.Operation.prototype.clearSessionId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Operation.prototype.hasSessionId = function() {
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
proto.viam.physicalDevice.v1.GetOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetOperationsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.GetOperationsRequest}
 */
proto.viam.physicalDevice.v1.GetOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetOperationsRequest;
  return proto.viam.physicalDevice.v1.GetOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetOperationsRequest}
 */
proto.viam.physicalDevice.v1.GetOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.GetOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.viam.physicalDevice.v1.Operation.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.GetOperationsResponse}
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetOperationsResponse;
  return proto.viam.physicalDevice.v1.GetOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetOperationsResponse}
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.Operation;
      reader.readMessage(value,proto.viam.physicalDevice.v1.Operation.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Operation operations = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.Operation>}
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.Operation, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.Operation>} value
 * @return {!proto.viam.physicalDevice.v1.GetOperationsResponse} returns this
*/
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.Operation}
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.GetOperationsResponse} returns this
 */
proto.viam.physicalDevice.v1.GetOperationsResponse.prototype.clearOperationsList = function() {
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
proto.viam.physicalDevice.v1.CancelOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.CancelOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.CancelOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.CancelOperationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.CancelOperationRequest}
 */
proto.viam.physicalDevice.v1.CancelOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.CancelOperationRequest;
  return proto.viam.physicalDevice.v1.CancelOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.CancelOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.CancelOperationRequest}
 */
proto.viam.physicalDevice.v1.CancelOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.CancelOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.CancelOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.CancelOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.CancelOperationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.CancelOperationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.CancelOperationRequest} returns this
 */
proto.viam.physicalDevice.v1.CancelOperationRequest.prototype.setId = function(value) {
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
proto.viam.physicalDevice.v1.CancelOperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.CancelOperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.CancelOperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.CancelOperationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.CancelOperationResponse}
 */
proto.viam.physicalDevice.v1.CancelOperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.CancelOperationResponse;
  return proto.viam.physicalDevice.v1.CancelOperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.CancelOperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.CancelOperationResponse}
 */
proto.viam.physicalDevice.v1.CancelOperationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.CancelOperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.CancelOperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.CancelOperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.CancelOperationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.BlockForOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.BlockForOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.BlockForOperationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.BlockForOperationRequest}
 */
proto.viam.physicalDevice.v1.BlockForOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.BlockForOperationRequest;
  return proto.viam.physicalDevice.v1.BlockForOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.BlockForOperationRequest}
 */
proto.viam.physicalDevice.v1.BlockForOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.BlockForOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.BlockForOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.BlockForOperationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.BlockForOperationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.BlockForOperationRequest} returns this
 */
proto.viam.physicalDevice.v1.BlockForOperationRequest.prototype.setId = function(value) {
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
proto.viam.physicalDevice.v1.BlockForOperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.BlockForOperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.BlockForOperationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.BlockForOperationResponse}
 */
proto.viam.physicalDevice.v1.BlockForOperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.BlockForOperationResponse;
  return proto.viam.physicalDevice.v1.BlockForOperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.BlockForOperationResponse}
 */
proto.viam.physicalDevice.v1.BlockForOperationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.BlockForOperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.BlockForOperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.BlockForOperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.BlockForOperationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.PeerConnectionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.PeerConnectionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.PeerConnectionInfo;
  return proto.viam.physicalDevice.v1.PeerConnectionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.PeerConnectionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.physicalDevice.v1.PeerConnectionType} */ (reader.readEnum());
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
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.PeerConnectionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.PeerConnectionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionType}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.getType = function() {
  return /** @type {!proto.viam.physicalDevice.v1.PeerConnectionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.physicalDevice.v1.PeerConnectionType} value
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo} returns this
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string remote_address = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.getRemoteAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo} returns this
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.setRemoteAddress = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo} returns this
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.clearRemoteAddress = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.hasRemoteAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string local_address = 3;
 * @return {string}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.getLocalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo} returns this
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.setLocalAddress = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.PeerConnectionInfo} returns this
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.clearLocalAddress = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.PeerConnectionInfo.prototype.hasLocalAddress = function() {
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
proto.viam.physicalDevice.v1.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peerConnectionInfo: (f = msg.getPeerConnectionInfo()) && proto.viam.physicalDevice.v1.PeerConnectionInfo.toObject(includeInstance, f)
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
 * @return {!proto.viam.physicalDevice.v1.Session}
 */
proto.viam.physicalDevice.v1.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.Session;
  return proto.viam.physicalDevice.v1.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.Session}
 */
proto.viam.physicalDevice.v1.Session.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.viam.physicalDevice.v1.PeerConnectionInfo;
      reader.readMessage(value,proto.viam.physicalDevice.v1.PeerConnectionInfo.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Session.serializeBinaryToWriter = function(message, writer) {
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
      proto.viam.physicalDevice.v1.PeerConnectionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.physicalDevice.v1.Session.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.Session} returns this
 */
proto.viam.physicalDevice.v1.Session.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PeerConnectionInfo peer_connection_info = 2;
 * @return {?proto.viam.physicalDevice.v1.PeerConnectionInfo}
 */
proto.viam.physicalDevice.v1.Session.prototype.getPeerConnectionInfo = function() {
  return /** @type{?proto.viam.physicalDevice.v1.PeerConnectionInfo} */ (
    jspb.Message.getWrapperField(this, proto.viam.physicalDevice.v1.PeerConnectionInfo, 2));
};


/**
 * @param {?proto.viam.physicalDevice.v1.PeerConnectionInfo|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Session} returns this
*/
proto.viam.physicalDevice.v1.Session.prototype.setPeerConnectionInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Session} returns this
 */
proto.viam.physicalDevice.v1.Session.prototype.clearPeerConnectionInfo = function() {
  return this.setPeerConnectionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Session.prototype.hasPeerConnectionInfo = function() {
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
proto.viam.physicalDevice.v1.GetSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetSessionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.GetSessionsRequest}
 */
proto.viam.physicalDevice.v1.GetSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetSessionsRequest;
  return proto.viam.physicalDevice.v1.GetSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetSessionsRequest}
 */
proto.viam.physicalDevice.v1.GetSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.GetSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetSessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetSessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.viam.physicalDevice.v1.Session.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.GetSessionsResponse}
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetSessionsResponse;
  return proto.viam.physicalDevice.v1.GetSessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetSessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetSessionsResponse}
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.Session;
      reader.readMessage(value,proto.viam.physicalDevice.v1.Session.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetSessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetSessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.Session.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Session sessions = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.Session>}
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.Session, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.Session>} value
 * @return {!proto.viam.physicalDevice.v1.GetSessionsResponse} returns this
*/
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.Session}
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.GetSessionsResponse} returns this
 */
proto.viam.physicalDevice.v1.GetSessionsResponse.prototype.clearSessionsList = function() {
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
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.DiscoveryQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.DiscoveryQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    subtype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.physicalDevice.v1.DiscoveryQuery}
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.DiscoveryQuery;
  return proto.viam.physicalDevice.v1.DiscoveryQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.DiscoveryQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.DiscoveryQuery}
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
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
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.DiscoveryQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.DiscoveryQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubtype();
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
};


/**
 * optional string subtype = 1;
 * @return {string}
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.getSubtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.DiscoveryQuery} returns this
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.setSubtype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.DiscoveryQuery} returns this
 */
proto.viam.physicalDevice.v1.DiscoveryQuery.prototype.setModel = function(value) {
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
proto.viam.physicalDevice.v1.Discovery.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.Discovery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.Discovery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Discovery.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.viam.physicalDevice.v1.DiscoveryQuery.toObject(includeInstance, f),
    results: (f = msg.getResults()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.viam.physicalDevice.v1.Discovery}
 */
proto.viam.physicalDevice.v1.Discovery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.Discovery;
  return proto.viam.physicalDevice.v1.Discovery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.Discovery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.Discovery}
 */
proto.viam.physicalDevice.v1.Discovery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.DiscoveryQuery;
      reader.readMessage(value,proto.viam.physicalDevice.v1.DiscoveryQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setResults(value);
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
proto.viam.physicalDevice.v1.Discovery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.Discovery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.Discovery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Discovery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.DiscoveryQuery.serializeBinaryToWriter
    );
  }
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional DiscoveryQuery query = 1;
 * @return {?proto.viam.physicalDevice.v1.DiscoveryQuery}
 */
proto.viam.physicalDevice.v1.Discovery.prototype.getQuery = function() {
  return /** @type{?proto.viam.physicalDevice.v1.DiscoveryQuery} */ (
    jspb.Message.getWrapperField(this, proto.viam.physicalDevice.v1.DiscoveryQuery, 1));
};


/**
 * @param {?proto.viam.physicalDevice.v1.DiscoveryQuery|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Discovery} returns this
*/
proto.viam.physicalDevice.v1.Discovery.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Discovery} returns this
 */
proto.viam.physicalDevice.v1.Discovery.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Discovery.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct results = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.physicalDevice.v1.Discovery.prototype.getResults = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Discovery} returns this
*/
proto.viam.physicalDevice.v1.Discovery.prototype.setResults = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Discovery} returns this
 */
proto.viam.physicalDevice.v1.Discovery.prototype.clearResults = function() {
  return this.setResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Discovery.prototype.hasResults = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.DiscoverComponentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.viam.physicalDevice.v1.DiscoveryQuery.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.DiscoverComponentsRequest;
  return proto.viam.physicalDevice.v1.DiscoverComponentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.DiscoveryQuery;
      reader.readMessage(value,proto.viam.physicalDevice.v1.DiscoveryQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.DiscoverComponentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.DiscoveryQuery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DiscoveryQuery queries = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.DiscoveryQuery>}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.DiscoveryQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.DiscoveryQuery, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.DiscoveryQuery>} value
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest} returns this
*/
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.DiscoveryQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.DiscoveryQuery}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.DiscoveryQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsRequest} returns this
 */
proto.viam.physicalDevice.v1.DiscoverComponentsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.DiscoverComponentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    discoveryList: jspb.Message.toObjectList(msg.getDiscoveryList(),
    proto.viam.physicalDevice.v1.Discovery.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.DiscoverComponentsResponse;
  return proto.viam.physicalDevice.v1.DiscoverComponentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.Discovery;
      reader.readMessage(value,proto.viam.physicalDevice.v1.Discovery.deserializeBinaryFromReader);
      msg.addDiscovery(value);
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
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.DiscoverComponentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiscoveryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.Discovery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Discovery discovery = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.Discovery>}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.getDiscoveryList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.Discovery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.Discovery, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.Discovery>} value
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse} returns this
*/
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.setDiscoveryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.Discovery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.Discovery}
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.addDiscovery = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.Discovery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.DiscoverComponentsResponse} returns this
 */
proto.viam.physicalDevice.v1.DiscoverComponentsResponse.prototype.clearDiscoveryList = function() {
  return this.setDiscoveryList([]);
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
proto.viam.physicalDevice.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Status.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.Status}
 */
proto.viam.physicalDevice.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.Status;
  return proto.viam.physicalDevice.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.Status}
 */
proto.viam.physicalDevice.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.Status.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.Status.prototype.getName = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
*/
proto.viam.physicalDevice.v1.Status.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
 */
proto.viam.physicalDevice.v1.Status.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Status.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct status = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.physicalDevice.v1.Status.prototype.getStatus = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
*/
proto.viam.physicalDevice.v1.Status.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
 */
proto.viam.physicalDevice.v1.Status.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Status.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp last_reconfigured = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.physicalDevice.v1.Status.prototype.getLastReconfigured = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
*/
proto.viam.physicalDevice.v1.Status.prototype.setLastReconfigured = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.Status} returns this
 */
proto.viam.physicalDevice.v1.Status.prototype.clearLastReconfigured = function() {
  return this.setLastReconfigured(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.Status.prototype.hasLastReconfigured = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.GetStatusRequest.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.GetStatusRequest}
 */
proto.viam.physicalDevice.v1.GetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetStatusRequest;
  return proto.viam.physicalDevice.v1.GetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetStatusRequest}
 */
proto.viam.physicalDevice.v1.GetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.getResourceNamesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.physicalDevice.v1.GetStatusRequest} returns this
*/
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.setResourceNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.addResourceNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.GetStatusRequest} returns this
 */
proto.viam.physicalDevice.v1.GetStatusRequest.prototype.clearResourceNamesList = function() {
  return this.setResourceNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.GetStatusResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    proto.viam.physicalDevice.v1.Status.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.GetStatusResponse}
 */
proto.viam.physicalDevice.v1.GetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetStatusResponse;
  return proto.viam.physicalDevice.v1.GetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetStatusResponse}
 */
proto.viam.physicalDevice.v1.GetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.Status;
      reader.readMessage(value,proto.viam.physicalDevice.v1.Status.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Status status = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.Status>}
 */
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.Status>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.Status, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.Status>} value
 * @return {!proto.viam.physicalDevice.v1.GetStatusResponse} returns this
*/
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.Status=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.Status}
 */
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.Status, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.GetStatusResponse} returns this
 */
proto.viam.physicalDevice.v1.GetStatusResponse.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StreamStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StreamStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest}
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StreamStatusRequest;
  return proto.viam.physicalDevice.v1.StreamStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StreamStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest}
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StreamStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StreamStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.getResourceNamesList = function() {
  return /** @type{!Array<!proto.viam.common.v1.ResourceName>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.ResourceName>} value
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest} returns this
*/
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.setResourceNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.ResourceName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.ResourceName}
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.addResourceNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.ResourceName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest} returns this
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.clearResourceNamesList = function() {
  return this.setResourceNamesList([]);
};


/**
 * optional google.protobuf.Duration every = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.getEvery = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest} returns this
*/
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.setEvery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.StreamStatusRequest} returns this
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.clearEvery = function() {
  return this.setEvery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.StreamStatusRequest.prototype.hasEvery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StreamStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StreamStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    proto.viam.physicalDevice.v1.Status.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.StreamStatusResponse}
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StreamStatusResponse;
  return proto.viam.physicalDevice.v1.StreamStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StreamStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StreamStatusResponse}
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.physicalDevice.v1.Status;
      reader.readMessage(value,proto.viam.physicalDevice.v1.Status.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StreamStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StreamStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.physicalDevice.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Status status = 1;
 * @return {!Array<!proto.viam.physicalDevice.v1.Status>}
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.Status>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.Status, 1));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.Status>} value
 * @return {!proto.viam.physicalDevice.v1.StreamStatusResponse} returns this
*/
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.Status=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.Status}
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.physicalDevice.v1.Status, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.StreamStatusResponse} returns this
 */
proto.viam.physicalDevice.v1.StreamStatusResponse.prototype.clearStatusList = function() {
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
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StopExtraParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StopExtraParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopExtraParameters.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters}
 */
proto.viam.physicalDevice.v1.StopExtraParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StopExtraParameters;
  return proto.viam.physicalDevice.v1.StopExtraParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StopExtraParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters}
 */
proto.viam.physicalDevice.v1.StopExtraParameters.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StopExtraParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StopExtraParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopExtraParameters.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.getName = function() {
  return /** @type{?proto.viam.common.v1.ResourceName} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.ResourceName, 1));
};


/**
 * @param {?proto.viam.common.v1.ResourceName|undefined} value
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters} returns this
*/
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters} returns this
 */
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct params = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters} returns this
*/
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters} returns this
 */
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.StopExtraParameters.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.StopAllRequest.repeatedFields_ = [99];



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
proto.viam.physicalDevice.v1.StopAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StopAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StopAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    extraList: jspb.Message.toObjectList(msg.getExtraList(),
    proto.viam.physicalDevice.v1.StopExtraParameters.toObject, includeInstance)
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
 * @return {!proto.viam.physicalDevice.v1.StopAllRequest}
 */
proto.viam.physicalDevice.v1.StopAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StopAllRequest;
  return proto.viam.physicalDevice.v1.StopAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StopAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StopAllRequest}
 */
proto.viam.physicalDevice.v1.StopAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 99:
      var value = new proto.viam.physicalDevice.v1.StopExtraParameters;
      reader.readMessage(value,proto.viam.physicalDevice.v1.StopExtraParameters.deserializeBinaryFromReader);
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
proto.viam.physicalDevice.v1.StopAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StopAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StopAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtraList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      99,
      f,
      proto.viam.physicalDevice.v1.StopExtraParameters.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StopExtraParameters extra = 99;
 * @return {!Array<!proto.viam.physicalDevice.v1.StopExtraParameters>}
 */
proto.viam.physicalDevice.v1.StopAllRequest.prototype.getExtraList = function() {
  return /** @type{!Array<!proto.viam.physicalDevice.v1.StopExtraParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.physicalDevice.v1.StopExtraParameters, 99));
};


/**
 * @param {!Array<!proto.viam.physicalDevice.v1.StopExtraParameters>} value
 * @return {!proto.viam.physicalDevice.v1.StopAllRequest} returns this
*/
proto.viam.physicalDevice.v1.StopAllRequest.prototype.setExtraList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 99, value);
};


/**
 * @param {!proto.viam.physicalDevice.v1.StopExtraParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.physicalDevice.v1.StopExtraParameters}
 */
proto.viam.physicalDevice.v1.StopAllRequest.prototype.addExtra = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 99, opt_value, proto.viam.physicalDevice.v1.StopExtraParameters, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.StopAllRequest} returns this
 */
proto.viam.physicalDevice.v1.StopAllRequest.prototype.clearExtraList = function() {
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
proto.viam.physicalDevice.v1.StopAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StopAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StopAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopAllResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.StopAllResponse}
 */
proto.viam.physicalDevice.v1.StopAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StopAllResponse;
  return proto.viam.physicalDevice.v1.StopAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StopAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StopAllResponse}
 */
proto.viam.physicalDevice.v1.StopAllResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.StopAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StopAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StopAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StopAllResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.StartSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StartSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StartSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StartSessionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.StartSessionRequest}
 */
proto.viam.physicalDevice.v1.StartSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StartSessionRequest;
  return proto.viam.physicalDevice.v1.StartSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StartSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StartSessionRequest}
 */
proto.viam.physicalDevice.v1.StartSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.StartSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StartSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StartSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StartSessionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.StartSessionRequest.prototype.getResume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.StartSessionRequest} returns this
 */
proto.viam.physicalDevice.v1.StartSessionRequest.prototype.setResume = function(value) {
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
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.StartSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.StartSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StartSessionResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.StartSessionResponse}
 */
proto.viam.physicalDevice.v1.StartSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.StartSessionResponse;
  return proto.viam.physicalDevice.v1.StartSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.StartSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.StartSessionResponse}
 */
proto.viam.physicalDevice.v1.StartSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.StartSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.StartSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.StartSessionResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.StartSessionResponse} returns this
 */
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration heartbeat_window = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.getHeartbeatWindow = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.viam.physicalDevice.v1.StartSessionResponse} returns this
*/
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.setHeartbeatWindow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.StartSessionResponse} returns this
 */
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.clearHeartbeatWindow = function() {
  return this.setHeartbeatWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.StartSessionResponse.prototype.hasHeartbeatWindow = function() {
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest}
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest;
  return proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest}
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest} returns this
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatRequest.prototype.setId = function(value) {
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse}
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse;
  return proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse}
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.SendSessionHeartbeatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.physicalDevice.v1.LogRequest.repeatedFields_ = [1];



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
proto.viam.physicalDevice.v1.LogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.LogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.LogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.LogRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.LogRequest}
 */
proto.viam.physicalDevice.v1.LogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.LogRequest;
  return proto.viam.physicalDevice.v1.LogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.LogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.LogRequest}
 */
proto.viam.physicalDevice.v1.LogRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.LogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.LogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.LogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.LogRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.LogRequest.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.viam.common.v1.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_v1_common_pb.LogEntry, 1));
};


/**
 * @param {!Array<!proto.viam.common.v1.LogEntry>} value
 * @return {!proto.viam.physicalDevice.v1.LogRequest} returns this
*/
proto.viam.physicalDevice.v1.LogRequest.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.common.v1.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.common.v1.LogEntry}
 */
proto.viam.physicalDevice.v1.LogRequest.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.common.v1.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.physicalDevice.v1.LogRequest} returns this
 */
proto.viam.physicalDevice.v1.LogRequest.prototype.clearLogsList = function() {
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
proto.viam.physicalDevice.v1.LogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.LogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.LogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.LogResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.LogResponse}
 */
proto.viam.physicalDevice.v1.LogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.LogResponse;
  return proto.viam.physicalDevice.v1.LogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.LogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.LogResponse}
 */
proto.viam.physicalDevice.v1.LogResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.LogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.LogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.LogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.LogResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetCloudMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataRequest}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetCloudMetadataRequest;
  return proto.viam.physicalDevice.v1.GetCloudMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataRequest}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetCloudMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetCloudMetadataRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.GetCloudMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    physicalDevicePartId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primaryOrgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    physicalDeviceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    physicalDevicePartId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.GetCloudMetadataResponse;
  return proto.viam.physicalDevice.v1.GetCloudMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setphysicalDevicePartId(value);
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
      msg.setphysicalDeviceId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setphysicalDevicePartId(value);
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
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.GetCloudMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getphysicalDevicePartId();
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
  f = message.getphysicalDeviceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getphysicalDevicePartId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string physicalDevice_part_id = 1;
 * @return {string}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.getphysicalDevicePartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.setphysicalDevicePartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string primary_org_id = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.getPrimaryOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.setPrimaryOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location_id = 3;
 * @return {string}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string physicalDevice_id = 4;
 * @return {string}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.getphysicalDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.setphysicalDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string physicalDevice_part_id = 5;
 * @return {string}
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.getphysicalDevicePartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.GetCloudMetadataResponse} returns this
 */
proto.viam.physicalDevice.v1.GetCloudMetadataResponse.prototype.setphysicalDevicePartId = function(value) {
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
proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.IdOrNameCase = {
  ID_OR_NAME_NOT_SET: 0,
  MODULE_ID: 1,
  MODULE_NAME: 2
};

/**
 * @return {proto.viam.physicalDevice.v1.RestartModuleRequest.IdOrNameCase}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.getIdOrNameCase = function() {
  return /** @type {proto.viam.physicalDevice.v1.RestartModuleRequest.IdOrNameCase} */(jspb.Message.computeOneofCase(this, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_[0]));
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
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.RestartModuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.RestartModuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.RestartModuleRequest;
  return proto.viam.physicalDevice.v1.RestartModuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.RestartModuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.RestartModuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.RestartModuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest} returns this
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.setModuleId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest} returns this
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.clearModuleId = function() {
  return jspb.Message.setOneofField(this, 1, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.hasModuleId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string module_name = 2;
 * @return {string}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest} returns this
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.setModuleName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.physicalDevice.v1.RestartModuleRequest} returns this
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.clearModuleName = function() {
  return jspb.Message.setOneofField(this, 2, proto.viam.physicalDevice.v1.RestartModuleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.physicalDevice.v1.RestartModuleRequest.prototype.hasModuleName = function() {
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
proto.viam.physicalDevice.v1.RestartModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.RestartModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.RestartModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.RestartModuleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.RestartModuleResponse}
 */
proto.viam.physicalDevice.v1.RestartModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.RestartModuleResponse;
  return proto.viam.physicalDevice.v1.RestartModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.RestartModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.RestartModuleResponse}
 */
proto.viam.physicalDevice.v1.RestartModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.RestartModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.RestartModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.RestartModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.RestartModuleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.ShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ShutdownRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ShutdownRequest}
 */
proto.viam.physicalDevice.v1.ShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ShutdownRequest;
  return proto.viam.physicalDevice.v1.ShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ShutdownRequest}
 */
proto.viam.physicalDevice.v1.ShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ShutdownRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.physicalDevice.v1.ShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.physicalDevice.v1.ShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.physicalDevice.v1.ShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ShutdownResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.physicalDevice.v1.ShutdownResponse}
 */
proto.viam.physicalDevice.v1.ShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.physicalDevice.v1.ShutdownResponse;
  return proto.viam.physicalDevice.v1.ShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.physicalDevice.v1.ShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.physicalDevice.v1.ShutdownResponse}
 */
proto.viam.physicalDevice.v1.ShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.physicalDevice.v1.ShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.physicalDevice.v1.ShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.physicalDevice.v1.ShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.physicalDevice.v1.ShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.viam.physicalDevice.v1.PeerConnectionType = {
  PEER_CONNECTION_TYPE_UNSPECIFIED: 0,
  PEER_CONNECTION_TYPE_GRPC: 1,
  PEER_CONNECTION_TYPE_WEBRTC: 2
};

goog.object.extend(exports, proto.viam.physicalDevice.v1);
