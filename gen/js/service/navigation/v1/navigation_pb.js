// source: service/navigation/v1/navigation.proto
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

var common_v1_common_pb = require('../../../common/v1/common_pb.js');
goog.object.extend(proto, common_v1_common_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.viam.service.navigation.v1.AddLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.AddLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.AddRouteRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.AddRouteResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.AddZoneRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.AddZoneResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.CancelRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.CancelResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteRouteRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteRouteResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteZoneRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.DeleteZoneResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ExecutePlanRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ExecutePlanResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetCostmapRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetCostmapResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetNavigationStatusRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetNavigationStatusResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetPositionRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetPositionResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetPropertiesRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetPropertiesResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetRouteRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetRouteResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetZoneRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GetZoneResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoToLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoToLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoToPointRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoToPointResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoalState', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.GoalStatus', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListLocationsRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListLocationsResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListRoutesRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListRoutesResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListZonesRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ListZonesResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Location', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.MapType', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavError', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavErrorCode', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavMode', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateRouteRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateRouteResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateToLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateToLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateToPointRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.NavigateToPointResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Plan', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.PlanToLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.PlanToLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.PlanToPointRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.PlanToPointResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Position', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Position.ValueCase', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Progress', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Properties', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ResumeRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.ResumeResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Route', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.RouteProgress', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Status', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.SuspendRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.SuspendResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateLocationRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateLocationResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateRouteRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateRouteResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateZoneRequest', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.UpdateZoneResponse', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Velocity', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Waypoint', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Waypoint.ValueCase', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.WaypointList', null, global);
goog.exportSymbol('proto.viam.service.navigation.v1.Zone', null, global);
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
proto.viam.service.navigation.v1.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.viam.service.navigation.v1.Position.oneofGroups_);
};
goog.inherits(proto.viam.service.navigation.v1.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Position.displayName = 'proto.viam.service.navigation.v1.Position';
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
proto.viam.service.navigation.v1.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Location.displayName = 'proto.viam.service.navigation.v1.Location';
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
proto.viam.service.navigation.v1.Waypoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.viam.service.navigation.v1.Waypoint.oneofGroups_);
};
goog.inherits(proto.viam.service.navigation.v1.Waypoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Waypoint.displayName = 'proto.viam.service.navigation.v1.Waypoint';
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
proto.viam.service.navigation.v1.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.Route.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Route.displayName = 'proto.viam.service.navigation.v1.Route';
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
proto.viam.service.navigation.v1.Zone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.Zone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Zone.displayName = 'proto.viam.service.navigation.v1.Zone';
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
proto.viam.service.navigation.v1.Plan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.Plan.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.Plan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Plan.displayName = 'proto.viam.service.navigation.v1.Plan';
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
proto.viam.service.navigation.v1.Velocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.Velocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Velocity.displayName = 'proto.viam.service.navigation.v1.Velocity';
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
proto.viam.service.navigation.v1.NavError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavError.displayName = 'proto.viam.service.navigation.v1.NavError';
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
proto.viam.service.navigation.v1.Progress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.Progress.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.Progress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Progress.displayName = 'proto.viam.service.navigation.v1.Progress';
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
proto.viam.service.navigation.v1.RouteProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.RouteProgress.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.RouteProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.RouteProgress.displayName = 'proto.viam.service.navigation.v1.RouteProgress';
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
proto.viam.service.navigation.v1.GoalStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GoalStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GoalStatus.displayName = 'proto.viam.service.navigation.v1.GoalStatus';
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
proto.viam.service.navigation.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Status.displayName = 'proto.viam.service.navigation.v1.Status';
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
proto.viam.service.navigation.v1.Properties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.Properties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.Properties.displayName = 'proto.viam.service.navigation.v1.Properties';
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
proto.viam.service.navigation.v1.AddLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddLocationRequest.displayName = 'proto.viam.service.navigation.v1.AddLocationRequest';
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
proto.viam.service.navigation.v1.AddLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddLocationResponse.displayName = 'proto.viam.service.navigation.v1.AddLocationResponse';
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
proto.viam.service.navigation.v1.GetLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetLocationRequest.displayName = 'proto.viam.service.navigation.v1.GetLocationRequest';
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
proto.viam.service.navigation.v1.GetLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetLocationResponse.displayName = 'proto.viam.service.navigation.v1.GetLocationResponse';
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
proto.viam.service.navigation.v1.ListLocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListLocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListLocationsRequest.displayName = 'proto.viam.service.navigation.v1.ListLocationsRequest';
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
proto.viam.service.navigation.v1.ListLocationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.ListLocationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListLocationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListLocationsResponse.displayName = 'proto.viam.service.navigation.v1.ListLocationsResponse';
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
proto.viam.service.navigation.v1.UpdateLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateLocationRequest.displayName = 'proto.viam.service.navigation.v1.UpdateLocationRequest';
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
proto.viam.service.navigation.v1.UpdateLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateLocationResponse.displayName = 'proto.viam.service.navigation.v1.UpdateLocationResponse';
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
proto.viam.service.navigation.v1.DeleteLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteLocationRequest.displayName = 'proto.viam.service.navigation.v1.DeleteLocationRequest';
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
proto.viam.service.navigation.v1.DeleteLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteLocationResponse.displayName = 'proto.viam.service.navigation.v1.DeleteLocationResponse';
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
proto.viam.service.navigation.v1.AddRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.AddRouteRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddRouteRequest.displayName = 'proto.viam.service.navigation.v1.AddRouteRequest';
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
proto.viam.service.navigation.v1.AddRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddRouteResponse.displayName = 'proto.viam.service.navigation.v1.AddRouteResponse';
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
proto.viam.service.navigation.v1.GetRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetRouteRequest.displayName = 'proto.viam.service.navigation.v1.GetRouteRequest';
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
proto.viam.service.navigation.v1.GetRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetRouteResponse.displayName = 'proto.viam.service.navigation.v1.GetRouteResponse';
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
proto.viam.service.navigation.v1.ListRoutesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListRoutesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListRoutesRequest.displayName = 'proto.viam.service.navigation.v1.ListRoutesRequest';
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
proto.viam.service.navigation.v1.ListRoutesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.ListRoutesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListRoutesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListRoutesResponse.displayName = 'proto.viam.service.navigation.v1.ListRoutesResponse';
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
proto.viam.service.navigation.v1.WaypointList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.WaypointList.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.WaypointList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.WaypointList.displayName = 'proto.viam.service.navigation.v1.WaypointList';
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
proto.viam.service.navigation.v1.UpdateRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateRouteRequest.displayName = 'proto.viam.service.navigation.v1.UpdateRouteRequest';
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
proto.viam.service.navigation.v1.UpdateRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateRouteResponse.displayName = 'proto.viam.service.navigation.v1.UpdateRouteResponse';
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
proto.viam.service.navigation.v1.DeleteRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteRouteRequest.displayName = 'proto.viam.service.navigation.v1.DeleteRouteRequest';
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
proto.viam.service.navigation.v1.DeleteRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteRouteResponse.displayName = 'proto.viam.service.navigation.v1.DeleteRouteResponse';
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
proto.viam.service.navigation.v1.AddZoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddZoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddZoneRequest.displayName = 'proto.viam.service.navigation.v1.AddZoneRequest';
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
proto.viam.service.navigation.v1.AddZoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.AddZoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.AddZoneResponse.displayName = 'proto.viam.service.navigation.v1.AddZoneResponse';
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
proto.viam.service.navigation.v1.GetZoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetZoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetZoneRequest.displayName = 'proto.viam.service.navigation.v1.GetZoneRequest';
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
proto.viam.service.navigation.v1.GetZoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetZoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetZoneResponse.displayName = 'proto.viam.service.navigation.v1.GetZoneResponse';
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
proto.viam.service.navigation.v1.ListZonesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListZonesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListZonesRequest.displayName = 'proto.viam.service.navigation.v1.ListZonesRequest';
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
proto.viam.service.navigation.v1.ListZonesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.ListZonesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.ListZonesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ListZonesResponse.displayName = 'proto.viam.service.navigation.v1.ListZonesResponse';
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
proto.viam.service.navigation.v1.UpdateZoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateZoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateZoneRequest.displayName = 'proto.viam.service.navigation.v1.UpdateZoneRequest';
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
proto.viam.service.navigation.v1.UpdateZoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.UpdateZoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.UpdateZoneResponse.displayName = 'proto.viam.service.navigation.v1.UpdateZoneResponse';
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
proto.viam.service.navigation.v1.DeleteZoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteZoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteZoneRequest.displayName = 'proto.viam.service.navigation.v1.DeleteZoneRequest';
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
proto.viam.service.navigation.v1.DeleteZoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.DeleteZoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.DeleteZoneResponse.displayName = 'proto.viam.service.navigation.v1.DeleteZoneResponse';
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
proto.viam.service.navigation.v1.NavigateToLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateToLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateToLocationRequest.displayName = 'proto.viam.service.navigation.v1.NavigateToLocationRequest';
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
proto.viam.service.navigation.v1.NavigateToLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateToLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateToLocationResponse.displayName = 'proto.viam.service.navigation.v1.NavigateToLocationResponse';
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
proto.viam.service.navigation.v1.NavigateToPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateToPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateToPointRequest.displayName = 'proto.viam.service.navigation.v1.NavigateToPointRequest';
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
proto.viam.service.navigation.v1.NavigateToPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateToPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateToPointResponse.displayName = 'proto.viam.service.navigation.v1.NavigateToPointResponse';
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
proto.viam.service.navigation.v1.NavigateRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.service.navigation.v1.NavigateRouteRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateRouteRequest.displayName = 'proto.viam.service.navigation.v1.NavigateRouteRequest';
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
proto.viam.service.navigation.v1.NavigateRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.NavigateRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.NavigateRouteResponse.displayName = 'proto.viam.service.navigation.v1.NavigateRouteResponse';
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
proto.viam.service.navigation.v1.PlanToPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.PlanToPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.PlanToPointRequest.displayName = 'proto.viam.service.navigation.v1.PlanToPointRequest';
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
proto.viam.service.navigation.v1.PlanToPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.PlanToPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.PlanToPointResponse.displayName = 'proto.viam.service.navigation.v1.PlanToPointResponse';
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
proto.viam.service.navigation.v1.PlanToLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.PlanToLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.PlanToLocationRequest.displayName = 'proto.viam.service.navigation.v1.PlanToLocationRequest';
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
proto.viam.service.navigation.v1.PlanToLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.PlanToLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.PlanToLocationResponse.displayName = 'proto.viam.service.navigation.v1.PlanToLocationResponse';
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
proto.viam.service.navigation.v1.ExecutePlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ExecutePlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ExecutePlanRequest.displayName = 'proto.viam.service.navigation.v1.ExecutePlanRequest';
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
proto.viam.service.navigation.v1.ExecutePlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ExecutePlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ExecutePlanResponse.displayName = 'proto.viam.service.navigation.v1.ExecutePlanResponse';
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
proto.viam.service.navigation.v1.GoToLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GoToLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GoToLocationRequest.displayName = 'proto.viam.service.navigation.v1.GoToLocationRequest';
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
proto.viam.service.navigation.v1.GoToLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GoToLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GoToLocationResponse.displayName = 'proto.viam.service.navigation.v1.GoToLocationResponse';
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
proto.viam.service.navigation.v1.GoToPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GoToPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GoToPointRequest.displayName = 'proto.viam.service.navigation.v1.GoToPointRequest';
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
proto.viam.service.navigation.v1.GoToPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GoToPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GoToPointResponse.displayName = 'proto.viam.service.navigation.v1.GoToPointResponse';
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
proto.viam.service.navigation.v1.SuspendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.SuspendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.SuspendRequest.displayName = 'proto.viam.service.navigation.v1.SuspendRequest';
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
proto.viam.service.navigation.v1.SuspendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.SuspendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.SuspendResponse.displayName = 'proto.viam.service.navigation.v1.SuspendResponse';
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
proto.viam.service.navigation.v1.ResumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ResumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ResumeRequest.displayName = 'proto.viam.service.navigation.v1.ResumeRequest';
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
proto.viam.service.navigation.v1.ResumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.ResumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.ResumeResponse.displayName = 'proto.viam.service.navigation.v1.ResumeResponse';
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
proto.viam.service.navigation.v1.CancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.CancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.CancelRequest.displayName = 'proto.viam.service.navigation.v1.CancelRequest';
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
proto.viam.service.navigation.v1.CancelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.CancelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.CancelResponse.displayName = 'proto.viam.service.navigation.v1.CancelResponse';
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
proto.viam.service.navigation.v1.GetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetPositionRequest.displayName = 'proto.viam.service.navigation.v1.GetPositionRequest';
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
proto.viam.service.navigation.v1.GetPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetPositionResponse.displayName = 'proto.viam.service.navigation.v1.GetPositionResponse';
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
proto.viam.service.navigation.v1.GetNavigationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetNavigationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetNavigationStatusRequest.displayName = 'proto.viam.service.navigation.v1.GetNavigationStatusRequest';
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
proto.viam.service.navigation.v1.GetNavigationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetNavigationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetNavigationStatusResponse.displayName = 'proto.viam.service.navigation.v1.GetNavigationStatusResponse';
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
proto.viam.service.navigation.v1.GetPropertiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetPropertiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetPropertiesRequest.displayName = 'proto.viam.service.navigation.v1.GetPropertiesRequest';
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
proto.viam.service.navigation.v1.GetPropertiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetPropertiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetPropertiesResponse.displayName = 'proto.viam.service.navigation.v1.GetPropertiesResponse';
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
proto.viam.service.navigation.v1.GetCostmapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetCostmapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetCostmapRequest.displayName = 'proto.viam.service.navigation.v1.GetCostmapRequest';
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
proto.viam.service.navigation.v1.GetCostmapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.navigation.v1.GetCostmapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.navigation.v1.GetCostmapResponse.displayName = 'proto.viam.service.navigation.v1.GetCostmapResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.viam.service.navigation.v1.Position.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.Position.ValueCase = {
  VALUE_NOT_SET: 0,
  POSE: 1,
  GEO_POSE: 2
};

/**
 * @return {proto.viam.service.navigation.v1.Position.ValueCase}
 */
proto.viam.service.navigation.v1.Position.prototype.getValueCase = function() {
  return /** @type {proto.viam.service.navigation.v1.Position.ValueCase} */(jspb.Message.computeOneofCase(this, proto.viam.service.navigation.v1.Position.oneofGroups_[0]));
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
proto.viam.service.navigation.v1.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    pose: (f = msg.getPose()) && common_v1_common_pb.Pose.toObject(includeInstance, f),
    geoPose: (f = msg.getGeoPose()) && common_v1_common_pb.GeoPose.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Position;
  return proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_v1_common_pb.Pose;
      reader.readMessage(value,common_v1_common_pb.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 2:
      var value = new common_v1_common_pb.GeoPose;
      reader.readMessage(value,common_v1_common_pb.GeoPose.deserializeBinaryFromReader);
      msg.setGeoPose(value);
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
proto.viam.service.navigation.v1.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.Pose.serializeBinaryToWriter
    );
  }
  f = message.getGeoPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_v1_common_pb.GeoPose.serializeBinaryToWriter
    );
  }
};


/**
 * optional viam.common.v1.Pose pose = 1;
 * @return {?proto.viam.common.v1.Pose}
 */
proto.viam.service.navigation.v1.Position.prototype.getPose = function() {
  return /** @type{?proto.viam.common.v1.Pose} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.Pose, 1));
};


/**
 * @param {?proto.viam.common.v1.Pose|undefined} value
 * @return {!proto.viam.service.navigation.v1.Position} returns this
*/
proto.viam.service.navigation.v1.Position.prototype.setPose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.viam.service.navigation.v1.Position.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Position} returns this
 */
proto.viam.service.navigation.v1.Position.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Position.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional viam.common.v1.GeoPose geo_pose = 2;
 * @return {?proto.viam.common.v1.GeoPose}
 */
proto.viam.service.navigation.v1.Position.prototype.getGeoPose = function() {
  return /** @type{?proto.viam.common.v1.GeoPose} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.GeoPose, 2));
};


/**
 * @param {?proto.viam.common.v1.GeoPose|undefined} value
 * @return {!proto.viam.service.navigation.v1.Position} returns this
*/
proto.viam.service.navigation.v1.Position.prototype.setGeoPose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.viam.service.navigation.v1.Position.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Position} returns this
 */
proto.viam.service.navigation.v1.Position.prototype.clearGeoPose = function() {
  return this.setGeoPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Position.prototype.hasGeoPose = function() {
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
proto.viam.service.navigation.v1.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Location;
  return proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
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
proto.viam.service.navigation.v1.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Location} returns this
 */
proto.viam.service.navigation.v1.Location.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Position position = 2;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Location.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.Location} returns this
*/
proto.viam.service.navigation.v1.Location.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Location} returns this
 */
proto.viam.service.navigation.v1.Location.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Location.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.viam.service.navigation.v1.Waypoint.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.Waypoint.ValueCase = {
  VALUE_NOT_SET: 0,
  LOCATION: 1,
  POSITION: 2
};

/**
 * @return {proto.viam.service.navigation.v1.Waypoint.ValueCase}
 */
proto.viam.service.navigation.v1.Waypoint.prototype.getValueCase = function() {
  return /** @type {proto.viam.service.navigation.v1.Waypoint.ValueCase} */(jspb.Message.computeOneofCase(this, proto.viam.service.navigation.v1.Waypoint.oneofGroups_[0]));
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
proto.viam.service.navigation.v1.Waypoint.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Waypoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Waypoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Waypoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.Waypoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Waypoint;
  return proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Waypoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
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
proto.viam.service.navigation.v1.Waypoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Waypoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.Waypoint.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Waypoint} returns this
 */
proto.viam.service.navigation.v1.Waypoint.prototype.setLocation = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.viam.service.navigation.v1.Waypoint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Waypoint} returns this
 */
proto.viam.service.navigation.v1.Waypoint.prototype.clearLocation = function() {
  return jspb.Message.setOneofField(this, 1, proto.viam.service.navigation.v1.Waypoint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Waypoint.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Position position = 2;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Waypoint.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.Waypoint} returns this
*/
proto.viam.service.navigation.v1.Waypoint.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.viam.service.navigation.v1.Waypoint.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Waypoint} returns this
 */
proto.viam.service.navigation.v1.Waypoint.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Waypoint.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.Route.repeatedFields_ = [2];



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
proto.viam.service.navigation.v1.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Route} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.viam.service.navigation.v1.Waypoint.toObject, includeInstance)
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
 * @return {!proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Route;
  return proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Waypoint;
      reader.readMessage(value,proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
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
proto.viam.service.navigation.v1.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Route.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Route} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Route.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.Route.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Route} returns this
 */
proto.viam.service.navigation.v1.Route.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Waypoint waypoints = 2;
 * @return {!Array<!proto.viam.service.navigation.v1.Waypoint>}
 */
proto.viam.service.navigation.v1.Route.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Waypoint, 2));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Waypoint>} value
 * @return {!proto.viam.service.navigation.v1.Route} returns this
*/
proto.viam.service.navigation.v1.Route.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.Route.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.service.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.Route} returns this
 */
proto.viam.service.navigation.v1.Route.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
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
proto.viam.service.navigation.v1.Zone.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Zone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Zone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Zone.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    geometry: (f = msg.getGeometry()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    maxSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.Zone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Zone;
  return proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Zone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setGeometry(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxSpeed(value);
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
proto.viam.service.navigation.v1.Zone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Zone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGeometry();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.Zone.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
 */
proto.viam.service.navigation.v1.Zone.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.Zone.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
 */
proto.viam.service.navigation.v1.Zone.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct geometry = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.Zone.prototype.getGeometry = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
*/
proto.viam.service.navigation.v1.Zone.prototype.setGeometry = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
 */
proto.viam.service.navigation.v1.Zone.prototype.clearGeometry = function() {
  return this.setGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Zone.prototype.hasGeometry = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double max_speed = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.Zone.prototype.getMaxSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
 */
proto.viam.service.navigation.v1.Zone.prototype.setMaxSpeed = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Zone} returns this
 */
proto.viam.service.navigation.v1.Zone.prototype.clearMaxSpeed = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Zone.prototype.hasMaxSpeed = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.Plan.repeatedFields_ = [1];



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
proto.viam.service.navigation.v1.Plan.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Plan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Plan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Plan.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.viam.service.navigation.v1.Position.toObject, includeInstance),
    location: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lengthM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.viam.service.navigation.v1.Plan}
 */
proto.viam.service.navigation.v1.Plan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Plan;
  return proto.viam.service.navigation.v1.Plan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Plan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Plan}
 */
proto.viam.service.navigation.v1.Plan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.addPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLengthM(value);
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
proto.viam.service.navigation.v1.Plan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Plan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Plan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Plan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLengthM();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * repeated Position path = 1;
 * @return {!Array<!proto.viam.service.navigation.v1.Position>}
 */
proto.viam.service.navigation.v1.Plan.prototype.getPathList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Position, 1));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Position>} value
 * @return {!proto.viam.service.navigation.v1.Plan} returns this
*/
proto.viam.service.navigation.v1.Plan.prototype.setPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Plan.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.service.navigation.v1.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.Plan} returns this
 */
proto.viam.service.navigation.v1.Plan.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.Plan.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.Plan} returns this
 */
proto.viam.service.navigation.v1.Plan.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Plan} returns this
 */
proto.viam.service.navigation.v1.Plan.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Plan.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double length_m = 3;
 * @return {number}
 */
proto.viam.service.navigation.v1.Plan.prototype.getLengthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Plan} returns this
 */
proto.viam.service.navigation.v1.Plan.prototype.setLengthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.viam.service.navigation.v1.Velocity.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Velocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Velocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Velocity.toObject = function(includeInstance, msg) {
  var f, obj = {
    linearMPerSec: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    angularDegPerSec: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.viam.service.navigation.v1.Velocity}
 */
proto.viam.service.navigation.v1.Velocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Velocity;
  return proto.viam.service.navigation.v1.Velocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Velocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Velocity}
 */
proto.viam.service.navigation.v1.Velocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLinearMPerSec(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngularDegPerSec(value);
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
proto.viam.service.navigation.v1.Velocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Velocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Velocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Velocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinearMPerSec();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getAngularDegPerSec();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double linear_m_per_sec = 1;
 * @return {number}
 */
proto.viam.service.navigation.v1.Velocity.prototype.getLinearMPerSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Velocity} returns this
 */
proto.viam.service.navigation.v1.Velocity.prototype.setLinearMPerSec = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double angular_deg_per_sec = 2;
 * @return {number}
 */
proto.viam.service.navigation.v1.Velocity.prototype.getAngularDegPerSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Velocity} returns this
 */
proto.viam.service.navigation.v1.Velocity.prototype.setAngularDegPerSec = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.viam.service.navigation.v1.NavError.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavError.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.service.navigation.v1.NavError}
 */
proto.viam.service.navigation.v1.NavError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavError;
  return proto.viam.service.navigation.v1.NavError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavError}
 */
proto.viam.service.navigation.v1.NavError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.service.navigation.v1.NavErrorCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.viam.service.navigation.v1.NavError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional NavErrorCode code = 1;
 * @return {!proto.viam.service.navigation.v1.NavErrorCode}
 */
proto.viam.service.navigation.v1.NavError.prototype.getCode = function() {
  return /** @type {!proto.viam.service.navigation.v1.NavErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.service.navigation.v1.NavErrorCode} value
 * @return {!proto.viam.service.navigation.v1.NavError} returns this
 */
proto.viam.service.navigation.v1.NavError.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavError} returns this
 */
proto.viam.service.navigation.v1.NavError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.Progress.repeatedFields_ = [2];



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
proto.viam.service.navigation.v1.Progress.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Progress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Progress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Progress.toObject = function(includeInstance, msg) {
  var f, obj = {
    distanceRemainingM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.viam.service.navigation.v1.Position.toObject, includeInstance),
    lengthM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.viam.service.navigation.v1.Progress}
 */
proto.viam.service.navigation.v1.Progress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Progress;
  return proto.viam.service.navigation.v1.Progress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Progress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Progress}
 */
proto.viam.service.navigation.v1.Progress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDistanceRemainingM(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.addPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLengthM(value);
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
proto.viam.service.navigation.v1.Progress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Progress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Progress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Progress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceRemainingM();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = message.getLengthM();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double distance_remaining_m = 1;
 * @return {number}
 */
proto.viam.service.navigation.v1.Progress.prototype.getDistanceRemainingM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Progress} returns this
 */
proto.viam.service.navigation.v1.Progress.prototype.setDistanceRemainingM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * repeated Position path = 2;
 * @return {!Array<!proto.viam.service.navigation.v1.Position>}
 */
proto.viam.service.navigation.v1.Progress.prototype.getPathList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Position>} value
 * @return {!proto.viam.service.navigation.v1.Progress} returns this
*/
proto.viam.service.navigation.v1.Progress.prototype.setPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Progress.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.service.navigation.v1.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.Progress} returns this
 */
proto.viam.service.navigation.v1.Progress.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional double length_m = 3;
 * @return {number}
 */
proto.viam.service.navigation.v1.Progress.prototype.getLengthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Progress} returns this
 */
proto.viam.service.navigation.v1.Progress.prototype.setLengthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.RouteProgress.repeatedFields_ = [2];



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
proto.viam.service.navigation.v1.RouteProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.RouteProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.RouteProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.RouteProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.viam.service.navigation.v1.Waypoint.toObject, includeInstance),
    index: jspb.Message.getFieldWithDefault(msg, 3, 0),
    loop: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    lap: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.viam.service.navigation.v1.RouteProgress}
 */
proto.viam.service.navigation.v1.RouteProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.RouteProgress;
  return proto.viam.service.navigation.v1.RouteProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.RouteProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.RouteProgress}
 */
proto.viam.service.navigation.v1.RouteProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Waypoint;
      reader.readMessage(value,proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoop(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLap(value);
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
proto.viam.service.navigation.v1.RouteProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.RouteProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.RouteProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.RouteProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLoop();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLap();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Waypoint waypoints = 2;
 * @return {!Array<!proto.viam.service.navigation.v1.Waypoint>}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Waypoint, 2));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Waypoint>} value
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
*/
proto.viam.service.navigation.v1.RouteProgress.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.service.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
};


/**
 * optional uint32 index = 3;
 * @return {number}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool loop = 4;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.getLoop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.setLoop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 lap = 5;
 * @return {number}
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.getLap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.RouteProgress} returns this
 */
proto.viam.service.navigation.v1.RouteProgress.prototype.setLap = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.viam.service.navigation.v1.GoalStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GoalStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GoalStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoalStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    target: (f = msg.getTarget()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
    location: jspb.Message.getFieldWithDefault(msg, 4, ""),
    progress: (f = msg.getProgress()) && proto.viam.service.navigation.v1.Progress.toObject(includeInstance, f),
    route: (f = msg.getRoute()) && proto.viam.service.navigation.v1.RouteProgress.toObject(includeInstance, f),
    suspendReason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    error: (f = msg.getError()) && proto.viam.service.navigation.v1.NavError.toObject(includeInstance, f),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finishedAt: (f = msg.getFinishedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GoalStatus}
 */
proto.viam.service.navigation.v1.GoalStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GoalStatus;
  return proto.viam.service.navigation.v1.GoalStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GoalStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GoalStatus}
 */
proto.viam.service.navigation.v1.GoalStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.service.navigation.v1.GoalState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.viam.service.navigation.v1.NavMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 5:
      var value = new proto.viam.service.navigation.v1.Progress;
      reader.readMessage(value,proto.viam.service.navigation.v1.Progress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 6:
      var value = new proto.viam.service.navigation.v1.RouteProgress;
      reader.readMessage(value,proto.viam.service.navigation.v1.RouteProgress.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuspendReason(value);
      break;
    case 8:
      var value = new proto.viam.service.navigation.v1.NavError;
      reader.readMessage(value,proto.viam.service.navigation.v1.NavError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishedAt(value);
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
proto.viam.service.navigation.v1.GoalStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GoalStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GoalStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoalStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.viam.service.navigation.v1.Progress.serializeBinaryToWriter
    );
  }
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.viam.service.navigation.v1.RouteProgress.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.viam.service.navigation.v1.NavError.serializeBinaryToWriter
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinishedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional GoalState state = 1;
 * @return {!proto.viam.service.navigation.v1.GoalState}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getState = function() {
  return /** @type {!proto.viam.service.navigation.v1.GoalState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.service.navigation.v1.GoalState} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional NavMode mode = 2;
 * @return {!proto.viam.service.navigation.v1.NavMode}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getMode = function() {
  return /** @type {!proto.viam.service.navigation.v1.NavMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.viam.service.navigation.v1.NavMode} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Position target = 3;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getTarget = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string location = 4;
 * @return {string}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Progress progress = 5;
 * @return {?proto.viam.service.navigation.v1.Progress}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getProgress = function() {
  return /** @type{?proto.viam.service.navigation.v1.Progress} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Progress, 5));
};


/**
 * @param {?proto.viam.service.navigation.v1.Progress|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setProgress = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RouteProgress route = 6;
 * @return {?proto.viam.service.navigation.v1.RouteProgress}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getRoute = function() {
  return /** @type{?proto.viam.service.navigation.v1.RouteProgress} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.RouteProgress, 6));
};


/**
 * @param {?proto.viam.service.navigation.v1.RouteProgress|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string suspend_reason = 7;
 * @return {string}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getSuspendReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.setSuspendReason = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearSuspendReason = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasSuspendReason = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional NavError error = 8;
 * @return {?proto.viam.service.navigation.v1.NavError}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getError = function() {
  return /** @type{?proto.viam.service.navigation.v1.NavError} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.NavError, 8));
};


/**
 * @param {?proto.viam.service.navigation.v1.NavError|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasError = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp started_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp finished_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.getFinishedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
*/
proto.viam.service.navigation.v1.GoalStatus.prototype.setFinishedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoalStatus} returns this
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.clearFinishedAt = function() {
  return this.setFinishedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoalStatus.prototype.hasFinishedAt = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.viam.service.navigation.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
    localized: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    velocity: (f = msg.getVelocity()) && proto.viam.service.navigation.v1.Velocity.toObject(includeInstance, f),
    goal: (f = msg.getGoal()) && proto.viam.service.navigation.v1.GoalStatus.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Status;
  return proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocalized(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Velocity;
      reader.readMessage(value,proto.viam.service.navigation.v1.Velocity.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 4:
      var value = new proto.viam.service.navigation.v1.GoalStatus;
      reader.readMessage(value,proto.viam.service.navigation.v1.GoalStatus.deserializeBinaryFromReader);
      msg.setGoal(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.viam.service.navigation.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = message.getLocalized();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Velocity.serializeBinaryToWriter
    );
  }
  f = message.getGoal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.viam.service.navigation.v1.GoalStatus.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
 * optional Position position = 1;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.Status.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
*/
proto.viam.service.navigation.v1.Status.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool localized = 2;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.getLocalized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.setLocalized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Velocity velocity = 3;
 * @return {?proto.viam.service.navigation.v1.Velocity}
 */
proto.viam.service.navigation.v1.Status.prototype.getVelocity = function() {
  return /** @type{?proto.viam.service.navigation.v1.Velocity} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Velocity, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Velocity|undefined} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
*/
proto.viam.service.navigation.v1.Status.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GoalStatus goal = 4;
 * @return {?proto.viam.service.navigation.v1.GoalStatus}
 */
proto.viam.service.navigation.v1.Status.prototype.getGoal = function() {
  return /** @type{?proto.viam.service.navigation.v1.GoalStatus} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.GoalStatus, 4));
};


/**
 * @param {?proto.viam.service.navigation.v1.GoalStatus|undefined} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
*/
proto.viam.service.navigation.v1.Status.prototype.setGoal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.clearGoal = function() {
  return this.setGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.hasGoal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.service.navigation.v1.Status.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
*/
proto.viam.service.navigation.v1.Status.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.Status.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.Status} returns this
*/
proto.viam.service.navigation.v1.Status.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.Status} returns this
 */
proto.viam.service.navigation.v1.Status.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Status.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.Properties.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.Properties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.Properties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Properties.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    footprintLengthM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    footprintWidthM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    robotRadiusM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    planningSupported: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    costmapSupported: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    zonesSupported: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    routesSupported: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.viam.service.navigation.v1.Properties}
 */
proto.viam.service.navigation.v1.Properties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.Properties;
  return proto.viam.service.navigation.v1.Properties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.Properties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.Properties}
 */
proto.viam.service.navigation.v1.Properties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.service.navigation.v1.MapType} */ (reader.readEnum());
      msg.setMapType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFootprintLengthM(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFootprintWidthM(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRobotRadiusM(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlanningSupported(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCostmapSupported(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setZonesSupported(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRoutesSupported(value);
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
proto.viam.service.navigation.v1.Properties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.Properties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.Properties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.Properties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFootprintLengthM();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getFootprintWidthM();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRobotRadiusM();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPlanningSupported();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCostmapSupported();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getZonesSupported();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRoutesSupported();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional MapType map_type = 1;
 * @return {!proto.viam.service.navigation.v1.MapType}
 */
proto.viam.service.navigation.v1.Properties.prototype.getMapType = function() {
  return /** @type {!proto.viam.service.navigation.v1.MapType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.service.navigation.v1.MapType} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setMapType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double footprint_length_m = 2;
 * @return {number}
 */
proto.viam.service.navigation.v1.Properties.prototype.getFootprintLengthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setFootprintLengthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double footprint_width_m = 3;
 * @return {number}
 */
proto.viam.service.navigation.v1.Properties.prototype.getFootprintWidthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setFootprintWidthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double robot_radius_m = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.Properties.prototype.getRobotRadiusM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setRobotRadiusM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bool planning_supported = 5;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Properties.prototype.getPlanningSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setPlanningSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool costmap_supported = 6;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Properties.prototype.getCostmapSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setCostmapSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool zones_supported = 7;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Properties.prototype.getZonesSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setZonesSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool routes_supported = 8;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.Properties.prototype.getRoutesSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.Properties} returns this
 */
proto.viam.service.navigation.v1.Properties.prototype.setRoutesSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.viam.service.navigation.v1.AddLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest}
 */
proto.viam.service.navigation.v1.AddLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddLocationRequest;
  return proto.viam.service.navigation.v1.AddLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest}
 */
proto.viam.service.navigation.v1.AddLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
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
proto.viam.service.navigation.v1.AddLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Position position = 3;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
*/
proto.viam.service.navigation.v1.AddLocationRequest.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
*/
proto.viam.service.navigation.v1.AddLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddLocationRequest} returns this
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.AddLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.service.navigation.v1.Location.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.AddLocationResponse}
 */
proto.viam.service.navigation.v1.AddLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddLocationResponse;
  return proto.viam.service.navigation.v1.AddLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddLocationResponse}
 */
proto.viam.service.navigation.v1.AddLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Location;
      reader.readMessage(value,proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
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
proto.viam.service.navigation.v1.AddLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.AddLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.service.navigation.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Location, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Location|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddLocationResponse} returns this
*/
proto.viam.service.navigation.v1.AddLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddLocationResponse} returns this
 */
proto.viam.service.navigation.v1.AddLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddLocationResponse.prototype.hasLocation = function() {
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
proto.viam.service.navigation.v1.GetLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest}
 */
proto.viam.service.navigation.v1.GetLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetLocationRequest;
  return proto.viam.service.navigation.v1.GetLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest}
 */
proto.viam.service.navigation.v1.GetLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
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
proto.viam.service.navigation.v1.GetLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest} returns this
*/
proto.viam.service.navigation.v1.GetLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.service.navigation.v1.Location.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetLocationResponse}
 */
proto.viam.service.navigation.v1.GetLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetLocationResponse;
  return proto.viam.service.navigation.v1.GetLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetLocationResponse}
 */
proto.viam.service.navigation.v1.GetLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Location;
      reader.readMessage(value,proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
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
proto.viam.service.navigation.v1.GetLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.GetLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.service.navigation.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Location, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Location|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetLocationResponse} returns this
*/
proto.viam.service.navigation.v1.GetLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetLocationResponse} returns this
 */
proto.viam.service.navigation.v1.GetLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetLocationResponse.prototype.hasLocation = function() {
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
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListLocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListLocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListLocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.ListLocationsRequest}
 */
proto.viam.service.navigation.v1.ListLocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListLocationsRequest;
  return proto.viam.service.navigation.v1.ListLocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListLocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListLocationsRequest}
 */
proto.viam.service.navigation.v1.ListLocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListLocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListLocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListLocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ListLocationsRequest} returns this
 */
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.ListLocationsRequest} returns this
*/
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ListLocationsRequest} returns this
 */
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ListLocationsRequest.prototype.hasExtra = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.ListLocationsResponse.repeatedFields_ = [1];



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
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListLocationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListLocationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListLocationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.viam.service.navigation.v1.Location.toObject, includeInstance)
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
 * @return {!proto.viam.service.navigation.v1.ListLocationsResponse}
 */
proto.viam.service.navigation.v1.ListLocationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListLocationsResponse;
  return proto.viam.service.navigation.v1.ListLocationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListLocationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListLocationsResponse}
 */
proto.viam.service.navigation.v1.ListLocationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Location;
      reader.readMessage(value,proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
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
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListLocationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListLocationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListLocationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.viam.service.navigation.v1.Location>}
 */
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Location, 1));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Location>} value
 * @return {!proto.viam.service.navigation.v1.ListLocationsResponse} returns this
*/
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.service.navigation.v1.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.ListLocationsResponse} returns this
 */
proto.viam.service.navigation.v1.ListLocationsResponse.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
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
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
    newName: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateLocationRequest;
  return proto.viam.service.navigation.v1.UpdateLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
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
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Position position = 3;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string new_name = 4;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.setNewName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.clearNewName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.hasNewName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.service.navigation.v1.Location.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.UpdateLocationResponse}
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateLocationResponse;
  return proto.viam.service.navigation.v1.UpdateLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationResponse}
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Location;
      reader.readMessage(value,proto.viam.service.navigation.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
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
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.service.navigation.v1.Location}
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.service.navigation.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Location, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Location|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateLocationResponse} returns this
*/
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateLocationResponse} returns this
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateLocationResponse.prototype.hasLocation = function() {
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
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteLocationRequest;
  return proto.viam.service.navigation.v1.DeleteLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
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
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest} returns this
*/
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.DeleteLocationRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.DeleteLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.DeleteLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteLocationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.navigation.v1.DeleteLocationResponse}
 */
proto.viam.service.navigation.v1.DeleteLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteLocationResponse;
  return proto.viam.service.navigation.v1.DeleteLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteLocationResponse}
 */
proto.viam.service.navigation.v1.DeleteLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.navigation.v1.DeleteLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.AddRouteRequest.repeatedFields_ = [3];



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
proto.viam.service.navigation.v1.AddRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.viam.service.navigation.v1.Waypoint.toObject, includeInstance),
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
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest}
 */
proto.viam.service.navigation.v1.AddRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddRouteRequest;
  return proto.viam.service.navigation.v1.AddRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest}
 */
proto.viam.service.navigation.v1.AddRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteName(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Waypoint;
      reader.readMessage(value,proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
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
proto.viam.service.navigation.v1.AddRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.getRouteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.setRouteName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Waypoint waypoints = 3;
 * @return {!Array<!proto.viam.service.navigation.v1.Waypoint>}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Waypoint, 3));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Waypoint>} value
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
*/
proto.viam.service.navigation.v1.AddRouteRequest.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.service.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
*/
proto.viam.service.navigation.v1.AddRouteRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddRouteRequest} returns this
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddRouteRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.AddRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddRouteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    route: (f = msg.getRoute()) && proto.viam.service.navigation.v1.Route.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.AddRouteResponse}
 */
proto.viam.service.navigation.v1.AddRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddRouteResponse;
  return proto.viam.service.navigation.v1.AddRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddRouteResponse}
 */
proto.viam.service.navigation.v1.AddRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Route;
      reader.readMessage(value,proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
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
proto.viam.service.navigation.v1.AddRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddRouteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Route.serializeBinaryToWriter
    );
  }
};


/**
 * optional Route route = 1;
 * @return {?proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.AddRouteResponse.prototype.getRoute = function() {
  return /** @type{?proto.viam.service.navigation.v1.Route} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Route, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Route|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddRouteResponse} returns this
*/
proto.viam.service.navigation.v1.AddRouteResponse.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddRouteResponse} returns this
 */
proto.viam.service.navigation.v1.AddRouteResponse.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddRouteResponse.prototype.hasRoute = function() {
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
proto.viam.service.navigation.v1.GetRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest}
 */
proto.viam.service.navigation.v1.GetRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetRouteRequest;
  return proto.viam.service.navigation.v1.GetRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest}
 */
proto.viam.service.navigation.v1.GetRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteName(value);
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
proto.viam.service.navigation.v1.GetRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest} returns this
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.getRouteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest} returns this
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.setRouteName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest} returns this
*/
proto.viam.service.navigation.v1.GetRouteRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetRouteRequest} returns this
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetRouteRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetRouteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    route: (f = msg.getRoute()) && proto.viam.service.navigation.v1.Route.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetRouteResponse}
 */
proto.viam.service.navigation.v1.GetRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetRouteResponse;
  return proto.viam.service.navigation.v1.GetRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetRouteResponse}
 */
proto.viam.service.navigation.v1.GetRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Route;
      reader.readMessage(value,proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
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
proto.viam.service.navigation.v1.GetRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetRouteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Route.serializeBinaryToWriter
    );
  }
};


/**
 * optional Route route = 1;
 * @return {?proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.GetRouteResponse.prototype.getRoute = function() {
  return /** @type{?proto.viam.service.navigation.v1.Route} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Route, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Route|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetRouteResponse} returns this
*/
proto.viam.service.navigation.v1.GetRouteResponse.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetRouteResponse} returns this
 */
proto.viam.service.navigation.v1.GetRouteResponse.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetRouteResponse.prototype.hasRoute = function() {
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
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListRoutesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListRoutesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListRoutesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.ListRoutesRequest}
 */
proto.viam.service.navigation.v1.ListRoutesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListRoutesRequest;
  return proto.viam.service.navigation.v1.ListRoutesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListRoutesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListRoutesRequest}
 */
proto.viam.service.navigation.v1.ListRoutesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListRoutesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListRoutesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListRoutesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ListRoutesRequest} returns this
 */
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.ListRoutesRequest} returns this
*/
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ListRoutesRequest} returns this
 */
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ListRoutesRequest.prototype.hasExtra = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.ListRoutesResponse.repeatedFields_ = [1];



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
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListRoutesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListRoutesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListRoutesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.viam.service.navigation.v1.Route.toObject, includeInstance)
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
 * @return {!proto.viam.service.navigation.v1.ListRoutesResponse}
 */
proto.viam.service.navigation.v1.ListRoutesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListRoutesResponse;
  return proto.viam.service.navigation.v1.ListRoutesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListRoutesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListRoutesResponse}
 */
proto.viam.service.navigation.v1.ListRoutesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Route;
      reader.readMessage(value,proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader);
      msg.addRoutes(value);
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
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListRoutesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListRoutesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListRoutesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Route.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Route routes = 1;
 * @return {!Array<!proto.viam.service.navigation.v1.Route>}
 */
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.getRoutesList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Route>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Route, 1));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Route>} value
 * @return {!proto.viam.service.navigation.v1.ListRoutesResponse} returns this
*/
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.setRoutesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Route=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.addRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.service.navigation.v1.Route, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.ListRoutesResponse} returns this
 */
proto.viam.service.navigation.v1.ListRoutesResponse.prototype.clearRoutesList = function() {
  return this.setRoutesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.WaypointList.repeatedFields_ = [1];



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
proto.viam.service.navigation.v1.WaypointList.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.WaypointList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.WaypointList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.WaypointList.toObject = function(includeInstance, msg) {
  var f, obj = {
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.viam.service.navigation.v1.Waypoint.toObject, includeInstance)
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
 * @return {!proto.viam.service.navigation.v1.WaypointList}
 */
proto.viam.service.navigation.v1.WaypointList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.WaypointList;
  return proto.viam.service.navigation.v1.WaypointList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.WaypointList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.WaypointList}
 */
proto.viam.service.navigation.v1.WaypointList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Waypoint;
      reader.readMessage(value,proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
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
proto.viam.service.navigation.v1.WaypointList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.WaypointList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.WaypointList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.WaypointList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Waypoint waypoints = 1;
 * @return {!Array<!proto.viam.service.navigation.v1.Waypoint>}
 */
proto.viam.service.navigation.v1.WaypointList.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Waypoint, 1));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Waypoint>} value
 * @return {!proto.viam.service.navigation.v1.WaypointList} returns this
*/
proto.viam.service.navigation.v1.WaypointList.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.WaypointList.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.service.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.WaypointList} returns this
 */
proto.viam.service.navigation.v1.WaypointList.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
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
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    waypoints: (f = msg.getWaypoints()) && proto.viam.service.navigation.v1.WaypointList.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateRouteRequest;
  return proto.viam.service.navigation.v1.UpdateRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 4:
      var value = new proto.viam.service.navigation.v1.WaypointList;
      reader.readMessage(value,proto.viam.service.navigation.v1.WaypointList.deserializeBinaryFromReader);
      msg.setWaypoints(value);
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
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteName();
  if (f.length > 0) {
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
  f = message.getWaypoints();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.viam.service.navigation.v1.WaypointList.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.getRouteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.setRouteName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_name = 3;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.setNewName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.clearNewName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.hasNewName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WaypointList waypoints = 4;
 * @return {?proto.viam.service.navigation.v1.WaypointList}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.getWaypoints = function() {
  return /** @type{?proto.viam.service.navigation.v1.WaypointList} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.WaypointList, 4));
};


/**
 * @param {?proto.viam.service.navigation.v1.WaypointList|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.setWaypoints = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.clearWaypoints = function() {
  return this.setWaypoints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.hasWaypoints = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateRouteRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    route: (f = msg.getRoute()) && proto.viam.service.navigation.v1.Route.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.UpdateRouteResponse}
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateRouteResponse;
  return proto.viam.service.navigation.v1.UpdateRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteResponse}
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Route;
      reader.readMessage(value,proto.viam.service.navigation.v1.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
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
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Route.serializeBinaryToWriter
    );
  }
};


/**
 * optional Route route = 1;
 * @return {?proto.viam.service.navigation.v1.Route}
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.getRoute = function() {
  return /** @type{?proto.viam.service.navigation.v1.Route} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Route, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Route|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateRouteResponse} returns this
*/
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateRouteResponse} returns this
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateRouteResponse.prototype.hasRoute = function() {
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
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteRouteRequest;
  return proto.viam.service.navigation.v1.DeleteRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteName(value);
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
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.getRouteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.setRouteName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest} returns this
*/
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.DeleteRouteRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.DeleteRouteRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.DeleteRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteRouteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.navigation.v1.DeleteRouteResponse}
 */
proto.viam.service.navigation.v1.DeleteRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteRouteResponse;
  return proto.viam.service.navigation.v1.DeleteRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteRouteResponse}
 */
proto.viam.service.navigation.v1.DeleteRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.navigation.v1.DeleteRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteRouteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.service.navigation.v1.AddZoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddZoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddZoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddZoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    geometry: (f = msg.getGeometry()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    maxSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
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
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest}
 */
proto.viam.service.navigation.v1.AddZoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddZoneRequest;
  return proto.viam.service.navigation.v1.AddZoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddZoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest}
 */
proto.viam.service.navigation.v1.AddZoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setGeometry(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxSpeed(value);
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
proto.viam.service.navigation.v1.AddZoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddZoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddZoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddZoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGeometry();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getZoneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setZoneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Struct geometry = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getGeometry = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
*/
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setGeometry = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.clearGeometry = function() {
  return this.setGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.hasGeometry = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double max_speed = 5;
 * @return {number}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getMaxSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setMaxSpeed = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.clearMaxSpeed = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.hasMaxSpeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
*/
proto.viam.service.navigation.v1.AddZoneRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddZoneRequest} returns this
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddZoneRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.AddZoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.AddZoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.AddZoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddZoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: (f = msg.getZone()) && proto.viam.service.navigation.v1.Zone.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.AddZoneResponse}
 */
proto.viam.service.navigation.v1.AddZoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.AddZoneResponse;
  return proto.viam.service.navigation.v1.AddZoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.AddZoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.AddZoneResponse}
 */
proto.viam.service.navigation.v1.AddZoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Zone;
      reader.readMessage(value,proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader);
      msg.setZone(value);
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
proto.viam.service.navigation.v1.AddZoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.AddZoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.AddZoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.AddZoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * optional Zone zone = 1;
 * @return {?proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.AddZoneResponse.prototype.getZone = function() {
  return /** @type{?proto.viam.service.navigation.v1.Zone} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Zone, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Zone|undefined} value
 * @return {!proto.viam.service.navigation.v1.AddZoneResponse} returns this
*/
proto.viam.service.navigation.v1.AddZoneResponse.prototype.setZone = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.AddZoneResponse} returns this
 */
proto.viam.service.navigation.v1.AddZoneResponse.prototype.clearZone = function() {
  return this.setZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.AddZoneResponse.prototype.hasZone = function() {
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
proto.viam.service.navigation.v1.GetZoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetZoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetZoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetZoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest}
 */
proto.viam.service.navigation.v1.GetZoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetZoneRequest;
  return proto.viam.service.navigation.v1.GetZoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetZoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest}
 */
proto.viam.service.navigation.v1.GetZoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneName(value);
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
proto.viam.service.navigation.v1.GetZoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetZoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetZoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetZoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest} returns this
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.getZoneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest} returns this
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.setZoneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest} returns this
*/
proto.viam.service.navigation.v1.GetZoneRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetZoneRequest} returns this
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetZoneRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetZoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetZoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetZoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetZoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: (f = msg.getZone()) && proto.viam.service.navigation.v1.Zone.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetZoneResponse}
 */
proto.viam.service.navigation.v1.GetZoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetZoneResponse;
  return proto.viam.service.navigation.v1.GetZoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetZoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetZoneResponse}
 */
proto.viam.service.navigation.v1.GetZoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Zone;
      reader.readMessage(value,proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader);
      msg.setZone(value);
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
proto.viam.service.navigation.v1.GetZoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetZoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetZoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetZoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * optional Zone zone = 1;
 * @return {?proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.GetZoneResponse.prototype.getZone = function() {
  return /** @type{?proto.viam.service.navigation.v1.Zone} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Zone, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Zone|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetZoneResponse} returns this
*/
proto.viam.service.navigation.v1.GetZoneResponse.prototype.setZone = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetZoneResponse} returns this
 */
proto.viam.service.navigation.v1.GetZoneResponse.prototype.clearZone = function() {
  return this.setZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetZoneResponse.prototype.hasZone = function() {
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
proto.viam.service.navigation.v1.ListZonesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListZonesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListZonesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListZonesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest}
 */
proto.viam.service.navigation.v1.ListZonesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListZonesRequest;
  return proto.viam.service.navigation.v1.ListZonesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListZonesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest}
 */
proto.viam.service.navigation.v1.ListZonesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.viam.service.navigation.v1.ListZonesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListZonesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListZonesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListZonesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest} returns this
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest} returns this
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest} returns this
*/
proto.viam.service.navigation.v1.ListZonesRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ListZonesRequest} returns this
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ListZonesRequest.prototype.hasExtra = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.ListZonesResponse.repeatedFields_ = [1];



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
proto.viam.service.navigation.v1.ListZonesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ListZonesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ListZonesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListZonesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    zonesList: jspb.Message.toObjectList(msg.getZonesList(),
    proto.viam.service.navigation.v1.Zone.toObject, includeInstance)
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
 * @return {!proto.viam.service.navigation.v1.ListZonesResponse}
 */
proto.viam.service.navigation.v1.ListZonesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ListZonesResponse;
  return proto.viam.service.navigation.v1.ListZonesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ListZonesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ListZonesResponse}
 */
proto.viam.service.navigation.v1.ListZonesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Zone;
      reader.readMessage(value,proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader);
      msg.addZones(value);
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
proto.viam.service.navigation.v1.ListZonesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ListZonesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ListZonesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ListZonesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZonesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Zone zones = 1;
 * @return {!Array<!proto.viam.service.navigation.v1.Zone>}
 */
proto.viam.service.navigation.v1.ListZonesResponse.prototype.getZonesList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Zone>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Zone, 1));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Zone>} value
 * @return {!proto.viam.service.navigation.v1.ListZonesResponse} returns this
*/
proto.viam.service.navigation.v1.ListZonesResponse.prototype.setZonesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Zone=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.ListZonesResponse.prototype.addZones = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.service.navigation.v1.Zone, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.ListZonesResponse} returns this
 */
proto.viam.service.navigation.v1.ListZonesResponse.prototype.clearZonesList = function() {
  return this.setZonesList([]);
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
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateZoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateZoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    geometry: (f = msg.getGeometry()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    maxSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    newName: jspb.Message.getFieldWithDefault(msg, 6, ""),
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
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateZoneRequest;
  return proto.viam.service.navigation.v1.UpdateZoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateZoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setGeometry(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxSpeed(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
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
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateZoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateZoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneName();
  if (f.length > 0) {
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
  f = message.getGeometry();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getZoneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setZoneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct geometry = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getGeometry = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setGeometry = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.clearGeometry = function() {
  return this.setGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.hasGeometry = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double max_speed = 5;
 * @return {number}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getMaxSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setMaxSpeed = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.clearMaxSpeed = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.hasMaxSpeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string new_name = 6;
 * @return {string}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setNewName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.clearNewName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.hasNewName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
*/
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneRequest} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.UpdateZoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.UpdateZoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: (f = msg.getZone()) && proto.viam.service.navigation.v1.Zone.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.UpdateZoneResponse}
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.UpdateZoneResponse;
  return proto.viam.service.navigation.v1.UpdateZoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.UpdateZoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneResponse}
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Zone;
      reader.readMessage(value,proto.viam.service.navigation.v1.Zone.deserializeBinaryFromReader);
      msg.setZone(value);
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
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.UpdateZoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.UpdateZoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * optional Zone zone = 1;
 * @return {?proto.viam.service.navigation.v1.Zone}
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.getZone = function() {
  return /** @type{?proto.viam.service.navigation.v1.Zone} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Zone, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Zone|undefined} value
 * @return {!proto.viam.service.navigation.v1.UpdateZoneResponse} returns this
*/
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.setZone = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.UpdateZoneResponse} returns this
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.clearZone = function() {
  return this.setZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.UpdateZoneResponse.prototype.hasZone = function() {
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
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteZoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteZoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteZoneRequest;
  return proto.viam.service.navigation.v1.DeleteZoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteZoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneName(value);
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
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteZoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteZoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.getZoneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.setZoneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest} returns this
*/
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.DeleteZoneRequest} returns this
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.DeleteZoneRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.DeleteZoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.DeleteZoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.DeleteZoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteZoneResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.navigation.v1.DeleteZoneResponse}
 */
proto.viam.service.navigation.v1.DeleteZoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.DeleteZoneResponse;
  return proto.viam.service.navigation.v1.DeleteZoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.DeleteZoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.DeleteZoneResponse}
 */
proto.viam.service.navigation.v1.DeleteZoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.navigation.v1.DeleteZoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.DeleteZoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.DeleteZoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.DeleteZoneResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateToLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateToLocationRequest;
  return proto.viam.service.navigation.v1.NavigateToLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
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
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateToLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest} returns this
*/
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateToLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateToLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationResponse}
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateToLocationResponse;
  return proto.viam.service.navigation.v1.NavigateToLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationResponse}
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateToLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateToLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationResponse} returns this
*/
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateToLocationResponse} returns this
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateToLocationResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateToPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateToPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: (f = msg.getDestination()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateToPointRequest;
  return proto.viam.service.navigation.v1.NavigateToPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateToPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setDestination(value);
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
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateToPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateToPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Position destination = 2;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.getDestination = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest} returns this
*/
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest} returns this
*/
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateToPointRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateToPointRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateToPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateToPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.NavigateToPointResponse}
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateToPointResponse;
  return proto.viam.service.navigation.v1.NavigateToPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateToPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateToPointResponse}
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateToPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateToPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateToPointResponse} returns this
*/
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateToPointResponse} returns this
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateToPointResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.repeatedFields_ = [3];



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
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.viam.service.navigation.v1.Waypoint.toObject, includeInstance),
    startIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startNearest: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    loop: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    wait: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
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
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateRouteRequest;
  return proto.viam.service.navigation.v1.NavigateRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteName(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Waypoint;
      reader.readMessage(value,proto.viam.service.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartIndex(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartNearest(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoop(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWait(value);
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
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Waypoint.serializeBinaryToWriter
    );
  }
  f = message.getStartIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStartNearest();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLoop();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getWait();
  if (f) {
    writer.writeBool(
      7,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getRouteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setRouteName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Waypoint waypoints = 3;
 * @return {!Array<!proto.viam.service.navigation.v1.Waypoint>}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.viam.service.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.service.navigation.v1.Waypoint, 3));
};


/**
 * @param {!Array<!proto.viam.service.navigation.v1.Waypoint>} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
*/
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.service.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.service.navigation.v1.Waypoint}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.service.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
};


/**
 * optional uint32 start_index = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getStartIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setStartIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool start_nearest = 5;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getStartNearest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setStartNearest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool loop = 6;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getLoop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setLoop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool wait = 7;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getWait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setWait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
*/
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateRouteRequest} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateRouteRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.NavigateRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.NavigateRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.NavigateRouteResponse}
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.NavigateRouteResponse;
  return proto.viam.service.navigation.v1.NavigateRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.NavigateRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.NavigateRouteResponse}
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.NavigateRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.NavigateRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.NavigateRouteResponse} returns this
*/
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.NavigateRouteResponse} returns this
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.NavigateRouteResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.PlanToPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.PlanToPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: (f = msg.getDestination()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
    start: (f = msg.getStart()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.PlanToPointRequest;
  return proto.viam.service.navigation.v1.PlanToPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.PlanToPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setStart(value);
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
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.PlanToPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.PlanToPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Position destination = 2;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.getDestination = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
*/
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Position start = 3;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.getStart = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
*/
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
*/
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToPointRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToPointRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.PlanToPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.PlanToPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && proto.viam.service.navigation.v1.Plan.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.PlanToPointResponse}
 */
proto.viam.service.navigation.v1.PlanToPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.PlanToPointResponse;
  return proto.viam.service.navigation.v1.PlanToPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.PlanToPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.PlanToPointResponse}
 */
proto.viam.service.navigation.v1.PlanToPointResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Plan;
      reader.readMessage(value,proto.viam.service.navigation.v1.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
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
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.PlanToPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.PlanToPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToPointResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional Plan plan = 1;
 * @return {?proto.viam.service.navigation.v1.Plan}
 */
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.getPlan = function() {
  return /** @type{?proto.viam.service.navigation.v1.Plan} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Plan, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Plan|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToPointResponse} returns this
*/
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToPointResponse} returns this
 */
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToPointResponse.prototype.hasPlan = function() {
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
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.PlanToLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.PlanToLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    start: (f = msg.getStart()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.PlanToLocationRequest;
  return proto.viam.service.navigation.v1.PlanToLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.PlanToLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
      break;
    case 3:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setStart(value);
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
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.PlanToLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.PlanToLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Position start = 3;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.getStart = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 3));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
*/
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
*/
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.PlanToLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.PlanToLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && proto.viam.service.navigation.v1.Plan.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.PlanToLocationResponse}
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.PlanToLocationResponse;
  return proto.viam.service.navigation.v1.PlanToLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.PlanToLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.PlanToLocationResponse}
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Plan;
      reader.readMessage(value,proto.viam.service.navigation.v1.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
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
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.PlanToLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.PlanToLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional Plan plan = 1;
 * @return {?proto.viam.service.navigation.v1.Plan}
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.getPlan = function() {
  return /** @type{?proto.viam.service.navigation.v1.Plan} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Plan, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Plan|undefined} value
 * @return {!proto.viam.service.navigation.v1.PlanToLocationResponse} returns this
*/
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.PlanToLocationResponse} returns this
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.PlanToLocationResponse.prototype.hasPlan = function() {
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
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ExecutePlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ExecutePlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    plan: (f = msg.getPlan()) && proto.viam.service.navigation.v1.Plan.toObject(includeInstance, f),
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
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ExecutePlanRequest;
  return proto.viam.service.navigation.v1.ExecutePlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ExecutePlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Plan;
      reader.readMessage(value,proto.viam.service.navigation.v1.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
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
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ExecutePlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ExecutePlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Plan.serializeBinaryToWriter
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest} returns this
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Plan plan = 2;
 * @return {?proto.viam.service.navigation.v1.Plan}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.getPlan = function() {
  return /** @type{?proto.viam.service.navigation.v1.Plan} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Plan, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Plan|undefined} value
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest} returns this
*/
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest} returns this
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest} returns this
*/
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ExecutePlanRequest} returns this
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ExecutePlanRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ExecutePlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ExecutePlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.ExecutePlanResponse}
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ExecutePlanResponse;
  return proto.viam.service.navigation.v1.ExecutePlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ExecutePlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ExecutePlanResponse}
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ExecutePlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ExecutePlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.ExecutePlanResponse} returns this
*/
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ExecutePlanResponse} returns this
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ExecutePlanResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GoToLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GoToLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    wait: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    linearMPerSec: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
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
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GoToLocationRequest;
  return proto.viam.service.navigation.v1.GoToLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GoToLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWait(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLinearMPerSec(value);
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
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GoToLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GoToLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_name = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.getLocationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.setLocationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool wait = 3;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.getWait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.setWait = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.clearWait = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.hasWait = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double linear_m_per_sec = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.getLinearMPerSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.setLinearMPerSec = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.clearLinearMPerSec = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.hasLinearMPerSec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
*/
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToLocationRequest} returns this
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToLocationRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GoToLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GoToLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GoToLocationResponse}
 */
proto.viam.service.navigation.v1.GoToLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GoToLocationResponse;
  return proto.viam.service.navigation.v1.GoToLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GoToLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GoToLocationResponse}
 */
proto.viam.service.navigation.v1.GoToLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GoToLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GoToLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoToLocationResponse} returns this
*/
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToLocationResponse} returns this
 */
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToLocationResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.GoToPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GoToPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GoToPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: (f = msg.getDestination()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f),
    wait: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    linearMPerSec: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
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
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest}
 */
proto.viam.service.navigation.v1.GoToPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GoToPointRequest;
  return proto.viam.service.navigation.v1.GoToPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GoToPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest}
 */
proto.viam.service.navigation.v1.GoToPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWait(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLinearMPerSec(value);
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
proto.viam.service.navigation.v1.GoToPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GoToPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GoToPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Position destination = 2;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.getDestination = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 2));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
*/
proto.viam.service.navigation.v1.GoToPointRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool wait = 3;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.getWait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.setWait = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.clearWait = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.hasWait = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double linear_m_per_sec = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.getLinearMPerSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.setLinearMPerSec = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.clearLinearMPerSec = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.hasLinearMPerSec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
*/
proto.viam.service.navigation.v1.GoToPointRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToPointRequest} returns this
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GoToPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GoToPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GoToPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GoToPointResponse}
 */
proto.viam.service.navigation.v1.GoToPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GoToPointResponse;
  return proto.viam.service.navigation.v1.GoToPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GoToPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GoToPointResponse}
 */
proto.viam.service.navigation.v1.GoToPointResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.GoToPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GoToPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GoToPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GoToPointResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.GoToPointResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.GoToPointResponse} returns this
*/
proto.viam.service.navigation.v1.GoToPointResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GoToPointResponse} returns this
 */
proto.viam.service.navigation.v1.GoToPointResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GoToPointResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.SuspendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.SuspendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.SuspendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.SuspendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.navigation.v1.SuspendRequest}
 */
proto.viam.service.navigation.v1.SuspendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.SuspendRequest;
  return proto.viam.service.navigation.v1.SuspendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.SuspendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.SuspendRequest}
 */
proto.viam.service.navigation.v1.SuspendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.viam.service.navigation.v1.SuspendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.SuspendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.SuspendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.SuspendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.SuspendRequest} returns this
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.SuspendRequest} returns this
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.SuspendRequest} returns this
*/
proto.viam.service.navigation.v1.SuspendRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.SuspendRequest} returns this
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.SuspendRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.SuspendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.SuspendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.SuspendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.SuspendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.SuspendResponse}
 */
proto.viam.service.navigation.v1.SuspendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.SuspendResponse;
  return proto.viam.service.navigation.v1.SuspendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.SuspendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.SuspendResponse}
 */
proto.viam.service.navigation.v1.SuspendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.SuspendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.SuspendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.SuspendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.SuspendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.SuspendResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.SuspendResponse} returns this
*/
proto.viam.service.navigation.v1.SuspendResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.SuspendResponse} returns this
 */
proto.viam.service.navigation.v1.SuspendResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.SuspendResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.ResumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ResumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ResumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ResumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.ResumeRequest}
 */
proto.viam.service.navigation.v1.ResumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ResumeRequest;
  return proto.viam.service.navigation.v1.ResumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ResumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ResumeRequest}
 */
proto.viam.service.navigation.v1.ResumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.ResumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ResumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ResumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ResumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.ResumeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.ResumeRequest} returns this
 */
proto.viam.service.navigation.v1.ResumeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.ResumeRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.ResumeRequest} returns this
*/
proto.viam.service.navigation.v1.ResumeRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ResumeRequest} returns this
 */
proto.viam.service.navigation.v1.ResumeRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ResumeRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.ResumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.ResumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.ResumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ResumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.ResumeResponse}
 */
proto.viam.service.navigation.v1.ResumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.ResumeResponse;
  return proto.viam.service.navigation.v1.ResumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.ResumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.ResumeResponse}
 */
proto.viam.service.navigation.v1.ResumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.ResumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.ResumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.ResumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.ResumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.ResumeResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.ResumeResponse} returns this
*/
proto.viam.service.navigation.v1.ResumeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.ResumeResponse} returns this
 */
proto.viam.service.navigation.v1.ResumeResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.ResumeResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.CancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.CancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.CancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.CancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.CancelRequest}
 */
proto.viam.service.navigation.v1.CancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.CancelRequest;
  return proto.viam.service.navigation.v1.CancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.CancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.CancelRequest}
 */
proto.viam.service.navigation.v1.CancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.CancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.CancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.CancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.CancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.CancelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.CancelRequest} returns this
 */
proto.viam.service.navigation.v1.CancelRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.CancelRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.CancelRequest} returns this
*/
proto.viam.service.navigation.v1.CancelRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.CancelRequest} returns this
 */
proto.viam.service.navigation.v1.CancelRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.CancelRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.CancelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.CancelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.CancelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.CancelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.CancelResponse}
 */
proto.viam.service.navigation.v1.CancelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.CancelResponse;
  return proto.viam.service.navigation.v1.CancelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.CancelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.CancelResponse}
 */
proto.viam.service.navigation.v1.CancelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.CancelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.CancelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.CancelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.CancelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.CancelResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.CancelResponse} returns this
*/
proto.viam.service.navigation.v1.CancelResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.CancelResponse} returns this
 */
proto.viam.service.navigation.v1.CancelResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.CancelResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.GetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetPositionRequest}
 */
proto.viam.service.navigation.v1.GetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetPositionRequest;
  return proto.viam.service.navigation.v1.GetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetPositionRequest}
 */
proto.viam.service.navigation.v1.GetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.GetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetPositionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetPositionRequest} returns this
 */
proto.viam.service.navigation.v1.GetPositionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetPositionRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetPositionRequest} returns this
*/
proto.viam.service.navigation.v1.GetPositionRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetPositionRequest} returns this
 */
proto.viam.service.navigation.v1.GetPositionRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetPositionRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.viam.service.navigation.v1.Position.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetPositionResponse}
 */
proto.viam.service.navigation.v1.GetPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetPositionResponse;
  return proto.viam.service.navigation.v1.GetPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetPositionResponse}
 */
proto.viam.service.navigation.v1.GetPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Position;
      reader.readMessage(value,proto.viam.service.navigation.v1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
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
proto.viam.service.navigation.v1.GetPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.viam.service.navigation.v1.Position}
 */
proto.viam.service.navigation.v1.GetPositionResponse.prototype.getPosition = function() {
  return /** @type{?proto.viam.service.navigation.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Position, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Position|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetPositionResponse} returns this
*/
proto.viam.service.navigation.v1.GetPositionResponse.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetPositionResponse} returns this
 */
proto.viam.service.navigation.v1.GetPositionResponse.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetPositionResponse.prototype.hasPosition = function() {
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
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetNavigationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusRequest}
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetNavigationStatusRequest;
  return proto.viam.service.navigation.v1.GetNavigationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusRequest}
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetNavigationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} returns this
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} returns this
*/
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusRequest} returns this
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetNavigationStatusRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetNavigationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.viam.service.navigation.v1.Status.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusResponse}
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetNavigationStatusResponse;
  return proto.viam.service.navigation.v1.GetNavigationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusResponse}
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Status;
      reader.readMessage(value,proto.viam.service.navigation.v1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetNavigationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetNavigationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.viam.service.navigation.v1.Status}
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.viam.service.navigation.v1.Status} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Status, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Status|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusResponse} returns this
*/
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetNavigationStatusResponse} returns this
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetNavigationStatusResponse.prototype.hasStatus = function() {
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
proto.viam.service.navigation.v1.GetPropertiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetPropertiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetPropertiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.viam.service.navigation.v1.GetPropertiesRequest}
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetPropertiesRequest;
  return proto.viam.service.navigation.v1.GetPropertiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetPropertiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetPropertiesRequest}
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.viam.service.navigation.v1.GetPropertiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetPropertiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetPropertiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetPropertiesRequest} returns this
 */
proto.viam.service.navigation.v1.GetPropertiesRequest.prototype.setName = function(value) {
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
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetPropertiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetPropertiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    properties: (f = msg.getProperties()) && proto.viam.service.navigation.v1.Properties.toObject(includeInstance, f)
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
 * @return {!proto.viam.service.navigation.v1.GetPropertiesResponse}
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetPropertiesResponse;
  return proto.viam.service.navigation.v1.GetPropertiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetPropertiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetPropertiesResponse}
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.service.navigation.v1.Properties;
      reader.readMessage(value,proto.viam.service.navigation.v1.Properties.deserializeBinaryFromReader);
      msg.setProperties(value);
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
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetPropertiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetPropertiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperties();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.service.navigation.v1.Properties.serializeBinaryToWriter
    );
  }
};


/**
 * optional Properties properties = 1;
 * @return {?proto.viam.service.navigation.v1.Properties}
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.getProperties = function() {
  return /** @type{?proto.viam.service.navigation.v1.Properties} */ (
    jspb.Message.getWrapperField(this, proto.viam.service.navigation.v1.Properties, 1));
};


/**
 * @param {?proto.viam.service.navigation.v1.Properties|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetPropertiesResponse} returns this
*/
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.setProperties = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetPropertiesResponse} returns this
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.clearProperties = function() {
  return this.setProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetPropertiesResponse.prototype.hasProperties = function() {
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
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetCostmapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetCostmapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetCostmapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    layer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stride: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetCostmapRequest;
  return proto.viam.service.navigation.v1.GetCostmapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetCostmapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLayer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStride(value);
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
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetCostmapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetCostmapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetCostmapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStride();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
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
 * optional string name = 1;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest} returns this
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string layer = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.getLayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest} returns this
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.setLayer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 stride = 3;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.getStride = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest} returns this
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.setStride = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest} returns this
*/
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.navigation.v1.GetCostmapRequest} returns this
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetCostmapRequest.prototype.hasExtra = function() {
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
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.navigation.v1.GetCostmapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.navigation.v1.GetCostmapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetCostmapResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    available: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    layer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    navBackend: jspb.Message.getFieldWithDefault(msg, 3, ""),
    originX: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    originY: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    resolution: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    width: jspb.Message.getFieldWithDefault(msg, 7, 0),
    height: jspb.Message.getFieldWithDefault(msg, 8, 0),
    encoding: jspb.Message.getFieldWithDefault(msg, 9, ""),
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
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.navigation.v1.GetCostmapResponse;
  return proto.viam.service.navigation.v1.GetCostmapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.navigation.v1.GetCostmapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAvailable(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLayer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavBackend(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOriginX(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOriginY(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setResolution(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    case 10:
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
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.navigation.v1.GetCostmapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.navigation.v1.GetCostmapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.navigation.v1.GetCostmapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNavBackend();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOriginX();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOriginY();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getEncoding();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional bool available = 1;
 * @return {boolean}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string layer = 2;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getLayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setLayer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nav_backend = 3;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getNavBackend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setNavBackend = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double origin_x = 4;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getOriginX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setOriginX = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double origin_y = 5;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getOriginY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setOriginY = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double resolution = 6;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setResolution = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 height = 8;
 * @return {number}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string encoding = 9;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bytes data = 10;
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes data = 10;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.service.navigation.v1.GetCostmapResponse} returns this
 */
proto.viam.service.navigation.v1.GetCostmapResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.MapType = {
  MAP_TYPE_UNSPECIFIED: 0,
  MAP_TYPE_LOCAL: 1,
  MAP_TYPE_GPS: 2
};

/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.GoalState = {
  GOAL_STATE_UNSPECIFIED: 0,
  GOAL_STATE_ACTIVE: 1,
  GOAL_STATE_SUSPENDED: 2,
  GOAL_STATE_SUCCEEDED: 3,
  GOAL_STATE_FAILED: 4,
  GOAL_STATE_CANCELED: 5
};

/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.NavMode = {
  NAV_MODE_UNSPECIFIED: 0,
  NAV_MODE_PLANNED: 1,
  NAV_MODE_DIRECT: 2,
  NAV_MODE_ROUTE: 3
};

/**
 * @enum {number}
 */
proto.viam.service.navigation.v1.NavErrorCode = {
  NAV_ERROR_CODE_UNSPECIFIED: 0,
  NAV_ERROR_CODE_NO_PATH: 1,
  NAV_ERROR_CODE_BLOCKED: 2,
  NAV_ERROR_CODE_LOCALIZATION_LOST: 3,
  NAV_ERROR_CODE_BASE_ERROR: 4,
  NAV_ERROR_CODE_TIMEOUT: 5,
  NAV_ERROR_CODE_OTHER: 6
};

goog.object.extend(exports, proto.viam.service.navigation.v1);
