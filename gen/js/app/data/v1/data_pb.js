// source: app/data/v1/data.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.Annotations', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryData', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryDataByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryDataByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryDataByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryDataByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryID', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BinaryMetadata', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BoundingBox', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.CaptureInterval', null, global);
goog.exportSymbol('proto.viam.app.data.v1.CaptureMetadata', null, global);
goog.exportSymbol('proto.viam.app.data.v1.ConfigureDatabaseUserRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.ConfigureDatabaseUserResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DataRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteTabularDataRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.DeleteTabularDataResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.Filter', null, global);
goog.exportSymbol('proto.viam.app.data.v1.GetDatabaseConnectionRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.GetDatabaseConnectionResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.Order', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularData', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataByMQLRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataByMQLResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataBySQLRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TabularDataBySQLResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TagsByFilterRequest', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TagsByFilterResponse', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TagsFilter', null, global);
goog.exportSymbol('proto.viam.app.data.v1.TagsFilterType', null, global);
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
proto.viam.app.data.v1.DataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DataRequest.displayName = 'proto.viam.app.data.v1.DataRequest';
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
proto.viam.app.data.v1.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.Filter.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.Filter.displayName = 'proto.viam.app.data.v1.Filter';
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
proto.viam.app.data.v1.TagsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TagsFilter.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TagsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TagsFilter.displayName = 'proto.viam.app.data.v1.TagsFilter';
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
proto.viam.app.data.v1.CaptureMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.CaptureMetadata.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.CaptureMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.CaptureMetadata.displayName = 'proto.viam.app.data.v1.CaptureMetadata';
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
proto.viam.app.data.v1.CaptureInterval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.CaptureInterval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.CaptureInterval.displayName = 'proto.viam.app.data.v1.CaptureInterval';
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
proto.viam.app.data.v1.TabularDataByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataByFilterRequest.displayName = 'proto.viam.app.data.v1.TabularDataByFilterRequest';
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
proto.viam.app.data.v1.TabularDataByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TabularDataByFilterResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataByFilterResponse.displayName = 'proto.viam.app.data.v1.TabularDataByFilterResponse';
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
proto.viam.app.data.v1.TabularData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.TabularData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularData.displayName = 'proto.viam.app.data.v1.TabularData';
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
proto.viam.app.data.v1.TabularDataBySQLRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataBySQLRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataBySQLRequest.displayName = 'proto.viam.app.data.v1.TabularDataBySQLRequest';
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
proto.viam.app.data.v1.TabularDataBySQLResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TabularDataBySQLResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataBySQLResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataBySQLResponse.displayName = 'proto.viam.app.data.v1.TabularDataBySQLResponse';
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
proto.viam.app.data.v1.TabularDataByMQLRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TabularDataByMQLRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataByMQLRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataByMQLRequest.displayName = 'proto.viam.app.data.v1.TabularDataByMQLRequest';
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
proto.viam.app.data.v1.TabularDataByMQLResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TabularDataByMQLResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TabularDataByMQLResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TabularDataByMQLResponse.displayName = 'proto.viam.app.data.v1.TabularDataByMQLResponse';
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
proto.viam.app.data.v1.BinaryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryData.displayName = 'proto.viam.app.data.v1.BinaryData';
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
proto.viam.app.data.v1.BinaryDataByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryDataByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryDataByFilterRequest.displayName = 'proto.viam.app.data.v1.BinaryDataByFilterRequest';
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
proto.viam.app.data.v1.BinaryDataByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.BinaryDataByFilterResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryDataByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryDataByFilterResponse.displayName = 'proto.viam.app.data.v1.BinaryDataByFilterResponse';
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
proto.viam.app.data.v1.BinaryID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryID.displayName = 'proto.viam.app.data.v1.BinaryID';
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
proto.viam.app.data.v1.BinaryDataByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.BinaryDataByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryDataByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryDataByIDsRequest.displayName = 'proto.viam.app.data.v1.BinaryDataByIDsRequest';
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
proto.viam.app.data.v1.BinaryDataByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.BinaryDataByIDsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryDataByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryDataByIDsResponse.displayName = 'proto.viam.app.data.v1.BinaryDataByIDsResponse';
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
proto.viam.app.data.v1.BoundingBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.BoundingBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BoundingBox.displayName = 'proto.viam.app.data.v1.BoundingBox';
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
proto.viam.app.data.v1.Annotations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.Annotations.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.Annotations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.Annotations.displayName = 'proto.viam.app.data.v1.Annotations';
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
proto.viam.app.data.v1.BinaryMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.BinaryMetadata.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.BinaryMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BinaryMetadata.displayName = 'proto.viam.app.data.v1.BinaryMetadata';
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
proto.viam.app.data.v1.DeleteTabularDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteTabularDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteTabularDataRequest.displayName = 'proto.viam.app.data.v1.DeleteTabularDataRequest';
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
proto.viam.app.data.v1.DeleteTabularDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteTabularDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteTabularDataResponse.displayName = 'proto.viam.app.data.v1.DeleteTabularDataResponse';
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.displayName = 'proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest';
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.displayName = 'proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse';
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
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.displayName = 'proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest';
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
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.displayName = 'proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse';
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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.displayName = 'proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest';
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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.displayName = 'proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse';
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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.displayName = 'proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest';
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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.displayName = 'proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse';
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.displayName = 'proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest';
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.displayName = 'proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse';
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.displayName = 'proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest';
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.displayName = 'proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse';
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
proto.viam.app.data.v1.TagsByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.TagsByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TagsByFilterRequest.displayName = 'proto.viam.app.data.v1.TagsByFilterRequest';
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
proto.viam.app.data.v1.TagsByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.TagsByFilterResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.TagsByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.TagsByFilterResponse.displayName = 'proto.viam.app.data.v1.TagsByFilterResponse';
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.displayName = 'proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest';
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.displayName = 'proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse';
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.displayName = 'proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest';
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.displayName = 'proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse';
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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.displayName = 'proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest';
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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.displayName = 'proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse';
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
proto.viam.app.data.v1.ConfigureDatabaseUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.ConfigureDatabaseUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.ConfigureDatabaseUserRequest.displayName = 'proto.viam.app.data.v1.ConfigureDatabaseUserRequest';
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
proto.viam.app.data.v1.ConfigureDatabaseUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.ConfigureDatabaseUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse.displayName = 'proto.viam.app.data.v1.ConfigureDatabaseUserResponse';
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
proto.viam.app.data.v1.GetDatabaseConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.GetDatabaseConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.GetDatabaseConnectionRequest.displayName = 'proto.viam.app.data.v1.GetDatabaseConnectionRequest';
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
proto.viam.app.data.v1.GetDatabaseConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.GetDatabaseConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.GetDatabaseConnectionResponse.displayName = 'proto.viam.app.data.v1.GetDatabaseConnectionResponse';
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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.displayName = 'proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest';
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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.displayName = 'proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse';
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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.displayName = 'proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest';
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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.displayName = 'proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse';
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
proto.viam.app.data.v1.DataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    last: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sortOrder: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.viam.app.data.v1.DataRequest}
 */
proto.viam.app.data.v1.DataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DataRequest;
  return proto.viam.app.data.v1.DataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DataRequest}
 */
proto.viam.app.data.v1.DataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast(value);
      break;
    case 4:
      var value = /** @type {!proto.viam.app.data.v1.Order} */ (reader.readEnum());
      msg.setSortOrder(value);
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
proto.viam.app.data.v1.DataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLast();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.DataRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.DataRequest} returns this
*/
proto.viam.app.data.v1.DataRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.DataRequest} returns this
 */
proto.viam.app.data.v1.DataRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.DataRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.viam.app.data.v1.DataRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.DataRequest} returns this
 */
proto.viam.app.data.v1.DataRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string last = 3;
 * @return {string}
 */
proto.viam.app.data.v1.DataRequest.prototype.getLast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.DataRequest} returns this
 */
proto.viam.app.data.v1.DataRequest.prototype.setLast = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Order sort_order = 4;
 * @return {!proto.viam.app.data.v1.Order}
 */
proto.viam.app.data.v1.DataRequest.prototype.getSortOrder = function() {
  return /** @type {!proto.viam.app.data.v1.Order} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.viam.app.data.v1.Order} value
 * @return {!proto.viam.app.data.v1.DataRequest} returns this
 */
proto.viam.app.data.v1.DataRequest.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.Filter.repeatedFields_ = [10,11,12,15];



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
proto.viam.app.data.v1.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    componentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 4, ""),
    robotName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    robotId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    partName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    partId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    locationIdsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    organizationIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    mimeTypeList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    interval: (f = msg.getInterval()) && proto.viam.app.data.v1.CaptureInterval.toObject(includeInstance, f),
    tagsFilter: (f = msg.getTagsFilter()) && proto.viam.app.data.v1.TagsFilter.toObject(includeInstance, f),
    bboxLabelsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    datasetId: jspb.Message.getFieldWithDefault(msg, 16, "")
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
 * @return {!proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.Filter;
  return proto.viam.app.data.v1.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.Filter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setComponentType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocationIds(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrganizationIds(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addMimeType(value);
      break;
    case 13:
      var value = new proto.viam.app.data.v1.CaptureInterval;
      reader.readMessage(value,proto.viam.app.data.v1.CaptureInterval.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 14:
      var value = new proto.viam.app.data.v1.TagsFilter;
      reader.readMessage(value,proto.viam.app.data.v1.TagsFilter.deserializeBinaryFromReader);
      msg.setTagsFilter(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addBboxLabels(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
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
proto.viam.app.data.v1.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComponentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRobotName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPartName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocationIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getOrganizationIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getMimeTypeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.viam.app.data.v1.CaptureInterval.serializeBinaryToWriter
    );
  }
  f = message.getTagsFilter();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.viam.app.data.v1.TagsFilter.serializeBinaryToWriter
    );
  }
  f = message.getBboxLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string component_name = 1;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getComponentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setComponentName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string component_type = 2;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getComponentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setComponentType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string method = 4;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string robot_name = 6;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getRobotName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setRobotName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string robot_id = 7;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string part_name = 8;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getPartName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setPartName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string part_id = 9;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string location_ids = 10;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.Filter.prototype.getLocationIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setLocationIdsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.addLocationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearLocationIdsList = function() {
  return this.setLocationIdsList([]);
};


/**
 * repeated string organization_ids = 11;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.Filter.prototype.getOrganizationIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setOrganizationIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.addOrganizationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearOrganizationIdsList = function() {
  return this.setOrganizationIdsList([]);
};


/**
 * repeated string mime_type = 12;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.Filter.prototype.getMimeTypeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setMimeTypeList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.addMimeType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearMimeTypeList = function() {
  return this.setMimeTypeList([]);
};


/**
 * optional CaptureInterval interval = 13;
 * @return {?proto.viam.app.data.v1.CaptureInterval}
 */
proto.viam.app.data.v1.Filter.prototype.getInterval = function() {
  return /** @type{?proto.viam.app.data.v1.CaptureInterval} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.CaptureInterval, 13));
};


/**
 * @param {?proto.viam.app.data.v1.CaptureInterval|undefined} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
*/
proto.viam.app.data.v1.Filter.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.Filter.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional TagsFilter tags_filter = 14;
 * @return {?proto.viam.app.data.v1.TagsFilter}
 */
proto.viam.app.data.v1.Filter.prototype.getTagsFilter = function() {
  return /** @type{?proto.viam.app.data.v1.TagsFilter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.TagsFilter, 14));
};


/**
 * @param {?proto.viam.app.data.v1.TagsFilter|undefined} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
*/
proto.viam.app.data.v1.Filter.prototype.setTagsFilter = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearTagsFilter = function() {
  return this.setTagsFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.Filter.prototype.hasTagsFilter = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated string bbox_labels = 15;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.Filter.prototype.getBboxLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setBboxLabelsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.addBboxLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.clearBboxLabelsList = function() {
  return this.setBboxLabelsList([]);
};


/**
 * optional string dataset_id = 16;
 * @return {string}
 */
proto.viam.app.data.v1.Filter.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.Filter} returns this
 */
proto.viam.app.data.v1.Filter.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TagsFilter.repeatedFields_ = [2];



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
proto.viam.app.data.v1.TagsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TagsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TagsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.TagsFilter}
 */
proto.viam.app.data.v1.TagsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TagsFilter;
  return proto.viam.app.data.v1.TagsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TagsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TagsFilter}
 */
proto.viam.app.data.v1.TagsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.viam.app.data.v1.TagsFilterType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.TagsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TagsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TagsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional TagsFilterType type = 1;
 * @return {!proto.viam.app.data.v1.TagsFilterType}
 */
proto.viam.app.data.v1.TagsFilter.prototype.getType = function() {
  return /** @type {!proto.viam.app.data.v1.TagsFilterType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.viam.app.data.v1.TagsFilterType} value
 * @return {!proto.viam.app.data.v1.TagsFilter} returns this
 */
proto.viam.app.data.v1.TagsFilter.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.TagsFilter.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.TagsFilter} returns this
 */
proto.viam.app.data.v1.TagsFilter.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.TagsFilter} returns this
 */
proto.viam.app.data.v1.TagsFilter.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TagsFilter} returns this
 */
proto.viam.app.data.v1.TagsFilter.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.CaptureMetadata.repeatedFields_ = [12];



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
proto.viam.app.data.v1.CaptureMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.CaptureMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.CaptureMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.CaptureMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    robotName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    robotId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    partId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    componentType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    componentName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    methodParametersMap: (f = msg.getMethodParametersMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : [],
    tagsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    mimeType: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.viam.app.data.v1.CaptureMetadata}
 */
proto.viam.app.data.v1.CaptureMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.CaptureMetadata;
  return proto.viam.app.data.v1.CaptureMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.CaptureMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.CaptureMetadata}
 */
proto.viam.app.data.v1.CaptureMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 11:
      var value = msg.getMethodParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "", new proto.google.protobuf.Any());
         });
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
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
proto.viam.app.data.v1.CaptureMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.CaptureMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.CaptureMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.CaptureMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRobotName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getComponentType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getComponentName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMethodParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_id = 2;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string robot_name = 3;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getRobotName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setRobotName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string robot_id = 4;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string part_name = 5;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getPartName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setPartName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string part_id = 6;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string component_type = 7;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getComponentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setComponentType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string component_name = 9;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getComponentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setComponentName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string method_name = 10;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * map<string, google.protobuf.Any> method_parameters = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getMethodParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.clearMethodParametersMap = function() {
  this.getMethodParametersMap().clear();
  return this;
};


/**
 * repeated string tags = 12;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string mime_type = 13;
 * @return {string}
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.CaptureMetadata} returns this
 */
proto.viam.app.data.v1.CaptureMetadata.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.viam.app.data.v1.CaptureInterval.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.CaptureInterval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.CaptureInterval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.CaptureInterval.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.viam.app.data.v1.CaptureInterval}
 */
proto.viam.app.data.v1.CaptureInterval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.CaptureInterval;
  return proto.viam.app.data.v1.CaptureInterval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.CaptureInterval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.CaptureInterval}
 */
proto.viam.app.data.v1.CaptureInterval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
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
proto.viam.app.data.v1.CaptureInterval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.CaptureInterval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.CaptureInterval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.CaptureInterval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp start = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.CaptureInterval.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.CaptureInterval} returns this
*/
proto.viam.app.data.v1.CaptureInterval.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.CaptureInterval} returns this
 */
proto.viam.app.data.v1.CaptureInterval.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.CaptureInterval.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.CaptureInterval.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.CaptureInterval} returns this
*/
proto.viam.app.data.v1.CaptureInterval.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.CaptureInterval} returns this
 */
proto.viam.app.data.v1.CaptureInterval.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.CaptureInterval.prototype.hasEnd = function() {
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
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataRequest: (f = msg.getDataRequest()) && proto.viam.app.data.v1.DataRequest.toObject(includeInstance, f),
    countOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    includeInternalData: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataByFilterRequest;
  return proto.viam.app.data.v1.TabularDataByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.DataRequest;
      reader.readMessage(value,proto.viam.app.data.v1.DataRequest.deserializeBinaryFromReader);
      msg.setDataRequest(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCountOnly(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeInternalData(value);
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
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.DataRequest.serializeBinaryToWriter
    );
  }
  f = message.getCountOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIncludeInternalData();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional DataRequest data_request = 1;
 * @return {?proto.viam.app.data.v1.DataRequest}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.getDataRequest = function() {
  return /** @type{?proto.viam.app.data.v1.DataRequest} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.DataRequest, 1));
};


/**
 * @param {?proto.viam.app.data.v1.DataRequest|undefined} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest} returns this
*/
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.setDataRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.clearDataRequest = function() {
  return this.setDataRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.hasDataRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool count_only = 2;
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.getCountOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.setCountOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool include_internal_data = 3;
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.getIncludeInternalData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterRequest.prototype.setIncludeInternalData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.repeatedFields_ = [1,2];



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
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.viam.app.data.v1.CaptureMetadata.toObject, includeInstance),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.viam.app.data.v1.TabularData.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    last: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalSizeBytes: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataByFilterResponse;
  return proto.viam.app.data.v1.TabularDataByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.CaptureMetadata;
      reader.readMessage(value,proto.viam.app.data.v1.CaptureMetadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 2:
      var value = new proto.viam.app.data.v1.TabularData;
      reader.readMessage(value,proto.viam.app.data.v1.TabularData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalSizeBytes(value);
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
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.CaptureMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.app.data.v1.TabularData.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLast();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * repeated CaptureMetadata metadata = 1;
 * @return {!Array<!proto.viam.app.data.v1.CaptureMetadata>}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.CaptureMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.CaptureMetadata, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.CaptureMetadata>} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
*/
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.CaptureMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.CaptureMetadata}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.CaptureMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * repeated TabularData data = 2;
 * @return {!Array<!proto.viam.app.data.v1.TabularData>}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.TabularData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.TabularData, 2));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.TabularData>} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
*/
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.app.data.v1.TabularData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.TabularData}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.app.data.v1.TabularData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string last = 4;
 * @return {string}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.getLast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.setLast = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 total_size_bytes = 5;
 * @return {number}
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.getTotalSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.TabularDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByFilterResponse.prototype.setTotalSizeBytes = function(value) {
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
proto.viam.app.data.v1.TabularData.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularData.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    metadataIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeRequested: (f = msg.getTimeRequested()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeReceived: (f = msg.getTimeReceived()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.viam.app.data.v1.TabularData}
 */
proto.viam.app.data.v1.TabularData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularData;
  return proto.viam.app.data.v1.TabularData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularData}
 */
proto.viam.app.data.v1.TabularData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetadataIndex(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeRequested(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeReceived(value);
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
proto.viam.app.data.v1.TabularData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getMetadataIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTimeRequested();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeReceived();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct data = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.data.v1.TabularData.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.data.v1.TabularData} returns this
*/
proto.viam.app.data.v1.TabularData.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.TabularData} returns this
 */
proto.viam.app.data.v1.TabularData.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularData.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 metadata_index = 2;
 * @return {number}
 */
proto.viam.app.data.v1.TabularData.prototype.getMetadataIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.TabularData} returns this
 */
proto.viam.app.data.v1.TabularData.prototype.setMetadataIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time_requested = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.TabularData.prototype.getTimeRequested = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.TabularData} returns this
*/
proto.viam.app.data.v1.TabularData.prototype.setTimeRequested = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.TabularData} returns this
 */
proto.viam.app.data.v1.TabularData.prototype.clearTimeRequested = function() {
  return this.setTimeRequested(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularData.prototype.hasTimeRequested = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp time_received = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.TabularData.prototype.getTimeReceived = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.TabularData} returns this
*/
proto.viam.app.data.v1.TabularData.prototype.setTimeReceived = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.TabularData} returns this
 */
proto.viam.app.data.v1.TabularData.prototype.clearTimeReceived = function() {
  return this.setTimeReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.TabularData.prototype.hasTimeReceived = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataBySQLRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataBySQLRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sqlQuery: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.app.data.v1.TabularDataBySQLRequest}
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataBySQLRequest;
  return proto.viam.app.data.v1.TabularDataBySQLRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataBySQLRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataBySQLRequest}
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSqlQuery(value);
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
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataBySQLRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataBySQLRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSqlQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.TabularDataBySQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sql_query = 2;
 * @return {string}
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.getSqlQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.TabularDataBySQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataBySQLRequest.prototype.setSqlQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataBySQLResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataBySQLResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    google_protobuf_struct_pb.Struct.toObject, includeInstance)
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
 * @return {!proto.viam.app.data.v1.TabularDataBySQLResponse}
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataBySQLResponse;
  return proto.viam.app.data.v1.TabularDataBySQLResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataBySQLResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataBySQLResponse}
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataBySQLResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataBySQLResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Struct data = 1;
 * @return {!Array<!proto.google.protobuf.Struct>}
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.google.protobuf.Struct>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Struct>} value
 * @return {!proto.viam.app.data.v1.TabularDataBySQLResponse} returns this
*/
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Struct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Struct}
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Struct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TabularDataBySQLResponse} returns this
 */
proto.viam.app.data.v1.TabularDataBySQLResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.repeatedFields_ = [3];



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
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataByMQLRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataByMQLRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mqlBinaryList: msg.getMqlBinaryList_asB64()
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
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataByMQLRequest;
  return proto.viam.app.data.v1.TabularDataByMQLRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataByMQLRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addMqlBinary(value);
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
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataByMQLRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataByMQLRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMqlBinaryList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bytes mql_binary = 3;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.getMqlBinaryList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes mql_binary = 3;
 * This is a type-conversion wrapper around `getMqlBinaryList()`
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.getMqlBinaryList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getMqlBinaryList()));
};


/**
 * repeated bytes mql_binary = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMqlBinaryList()`
 * @return {!Array<!Uint8Array>}
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.getMqlBinaryList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getMqlBinaryList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.setMqlBinaryList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.addMqlBinary = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TabularDataByMQLRequest} returns this
 */
proto.viam.app.data.v1.TabularDataByMQLRequest.prototype.clearMqlBinaryList = function() {
  return this.setMqlBinaryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TabularDataByMQLResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TabularDataByMQLResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    google_protobuf_struct_pb.Struct.toObject, includeInstance)
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
 * @return {!proto.viam.app.data.v1.TabularDataByMQLResponse}
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TabularDataByMQLResponse;
  return proto.viam.app.data.v1.TabularDataByMQLResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TabularDataByMQLResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TabularDataByMQLResponse}
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TabularDataByMQLResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TabularDataByMQLResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Struct data = 1;
 * @return {!Array<!proto.google.protobuf.Struct>}
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.google.protobuf.Struct>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Struct>} value
 * @return {!proto.viam.app.data.v1.TabularDataByMQLResponse} returns this
*/
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Struct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Struct}
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Struct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TabularDataByMQLResponse} returns this
 */
proto.viam.app.data.v1.TabularDataByMQLResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
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
proto.viam.app.data.v1.BinaryData.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    binary: msg.getBinary_asB64(),
    metadata: (f = msg.getMetadata()) && proto.viam.app.data.v1.BinaryMetadata.toObject(includeInstance, f)
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
 * @return {!proto.viam.app.data.v1.BinaryData}
 */
proto.viam.app.data.v1.BinaryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryData;
  return proto.viam.app.data.v1.BinaryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryData}
 */
proto.viam.app.data.v1.BinaryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinary(value);
      break;
    case 2:
      var value = new proto.viam.app.data.v1.BinaryMetadata;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.viam.app.data.v1.BinaryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinary_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.app.data.v1.BinaryMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes binary = 1;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryData.prototype.getBinary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes binary = 1;
 * This is a type-conversion wrapper around `getBinary()`
 * @return {string}
 */
proto.viam.app.data.v1.BinaryData.prototype.getBinary_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinary()));
};


/**
 * optional bytes binary = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinary()`
 * @return {!Uint8Array}
 */
proto.viam.app.data.v1.BinaryData.prototype.getBinary_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinary()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.app.data.v1.BinaryData} returns this
 */
proto.viam.app.data.v1.BinaryData.prototype.setBinary = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional BinaryMetadata metadata = 2;
 * @return {?proto.viam.app.data.v1.BinaryMetadata}
 */
proto.viam.app.data.v1.BinaryData.prototype.getMetadata = function() {
  return /** @type{?proto.viam.app.data.v1.BinaryMetadata} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.BinaryMetadata, 2));
};


/**
 * @param {?proto.viam.app.data.v1.BinaryMetadata|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryData} returns this
*/
proto.viam.app.data.v1.BinaryData.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryData} returns this
 */
proto.viam.app.data.v1.BinaryData.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryData.prototype.hasMetadata = function() {
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
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryDataByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataRequest: (f = msg.getDataRequest()) && proto.viam.app.data.v1.DataRequest.toObject(includeInstance, f),
    includeBinary: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    countOnly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeInternalData: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryDataByFilterRequest;
  return proto.viam.app.data.v1.BinaryDataByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.DataRequest;
      reader.readMessage(value,proto.viam.app.data.v1.DataRequest.deserializeBinaryFromReader);
      msg.setDataRequest(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeBinary(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCountOnly(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeInternalData(value);
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
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryDataByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.DataRequest.serializeBinaryToWriter
    );
  }
  f = message.getIncludeBinary();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCountOnly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeInternalData();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional DataRequest data_request = 1;
 * @return {?proto.viam.app.data.v1.DataRequest}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.getDataRequest = function() {
  return /** @type{?proto.viam.app.data.v1.DataRequest} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.DataRequest, 1));
};


/**
 * @param {?proto.viam.app.data.v1.DataRequest|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest} returns this
*/
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.setDataRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.clearDataRequest = function() {
  return this.setDataRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.hasDataRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool include_binary = 2;
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.getIncludeBinary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.setIncludeBinary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool count_only = 3;
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.getCountOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.setCountOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_internal_data = 4;
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.getIncludeInternalData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterRequest.prototype.setIncludeInternalData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryDataByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.viam.app.data.v1.BinaryData.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    last: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSizeBytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryDataByFilterResponse;
  return proto.viam.app.data.v1.BinaryDataByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.BinaryData;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalSizeBytes(value);
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
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryDataByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryDataByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.BinaryData.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLast();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * repeated BinaryData data = 1;
 * @return {!Array<!proto.viam.app.data.v1.BinaryData>}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryData, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryData>} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse} returns this
*/
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryData}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.BinaryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string last = 3;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.getLast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.setLast = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 total_size_bytes = 4;
 * @return {number}
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.getTotalSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByFilterResponse.prototype.setTotalSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.viam.app.data.v1.BinaryID.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryID.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.BinaryID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryID;
  return proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
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
proto.viam.app.data.v1.BinaryID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationId();
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
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryID.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryID} returns this
 */
proto.viam.app.data.v1.BinaryID.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryID.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryID} returns this
 */
proto.viam.app.data.v1.BinaryID.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location_id = 3;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryID.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryID} returns this
 */
proto.viam.app.data.v1.BinaryID.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.repeatedFields_ = [3];



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
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryDataByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeBinary: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance)
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
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryDataByIDsRequest;
  return proto.viam.app.data.v1.BinaryDataByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeBinary(value);
      break;
    case 3:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
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
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryDataByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeBinary();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool include_binary = 2;
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.getIncludeBinary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.setIncludeBinary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated BinaryID binary_ids = 3;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 3));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsRequest} returns this
*/
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.BinaryDataByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryDataByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.viam.app.data.v1.BinaryData.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryDataByIDsResponse;
  return proto.viam.app.data.v1.BinaryDataByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.BinaryData;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
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
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryDataByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryDataByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.BinaryData.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * repeated BinaryData data = 1;
 * @return {!Array<!proto.viam.app.data.v1.BinaryData>}
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryData, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryData>} value
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsResponse} returns this
*/
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryData}
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.BinaryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BinaryDataByIDsResponse} returns this
 */
proto.viam.app.data.v1.BinaryDataByIDsResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.viam.app.data.v1.BoundingBox.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BoundingBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BoundingBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, ""),
    xMinNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    yMinNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    xMaxNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    yMaxNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.viam.app.data.v1.BoundingBox}
 */
proto.viam.app.data.v1.BoundingBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BoundingBox;
  return proto.viam.app.data.v1.BoundingBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BoundingBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BoundingBox}
 */
proto.viam.app.data.v1.BoundingBox.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXMinNormalized(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYMinNormalized(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXMaxNormalized(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYMaxNormalized(value);
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
proto.viam.app.data.v1.BoundingBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BoundingBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BoundingBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getXMinNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getYMinNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getXMaxNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getYMaxNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double x_min_normalized = 3;
 * @return {number}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getXMinNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setXMinNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double y_min_normalized = 4;
 * @return {number}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getYMinNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setYMinNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double x_max_normalized = 5;
 * @return {number}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getXMaxNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setXMaxNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double y_max_normalized = 6;
 * @return {number}
 */
proto.viam.app.data.v1.BoundingBox.prototype.getYMaxNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.BoundingBox} returns this
 */
proto.viam.app.data.v1.BoundingBox.prototype.setYMaxNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.Annotations.repeatedFields_ = [1];



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
proto.viam.app.data.v1.Annotations.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.Annotations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.Annotations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.Annotations.toObject = function(includeInstance, msg) {
  var f, obj = {
    bboxesList: jspb.Message.toObjectList(msg.getBboxesList(),
    proto.viam.app.data.v1.BoundingBox.toObject, includeInstance)
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
 * @return {!proto.viam.app.data.v1.Annotations}
 */
proto.viam.app.data.v1.Annotations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.Annotations;
  return proto.viam.app.data.v1.Annotations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.Annotations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.Annotations}
 */
proto.viam.app.data.v1.Annotations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.BoundingBox;
      reader.readMessage(value,proto.viam.app.data.v1.BoundingBox.deserializeBinaryFromReader);
      msg.addBboxes(value);
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
proto.viam.app.data.v1.Annotations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.Annotations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.Annotations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.Annotations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBboxesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.BoundingBox.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BoundingBox bboxes = 1;
 * @return {!Array<!proto.viam.app.data.v1.BoundingBox>}
 */
proto.viam.app.data.v1.Annotations.prototype.getBboxesList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BoundingBox>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BoundingBox, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BoundingBox>} value
 * @return {!proto.viam.app.data.v1.Annotations} returns this
*/
proto.viam.app.data.v1.Annotations.prototype.setBboxesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.BoundingBox=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BoundingBox}
 */
proto.viam.app.data.v1.Annotations.prototype.addBboxes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.BoundingBox, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.Annotations} returns this
 */
proto.viam.app.data.v1.Annotations.prototype.clearBboxesList = function() {
  return this.setBboxesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.BinaryMetadata.repeatedFields_ = [9];



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
proto.viam.app.data.v1.BinaryMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BinaryMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BinaryMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    captureMetadata: (f = msg.getCaptureMetadata()) && proto.viam.app.data.v1.CaptureMetadata.toObject(includeInstance, f),
    timeRequested: (f = msg.getTimeRequested()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeReceived: (f = msg.getTimeReceived()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    fileName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fileExt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 7, ""),
    annotations: (f = msg.getAnnotations()) && proto.viam.app.data.v1.Annotations.toObject(includeInstance, f),
    datasetIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.BinaryMetadata}
 */
proto.viam.app.data.v1.BinaryMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BinaryMetadata;
  return proto.viam.app.data.v1.BinaryMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BinaryMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BinaryMetadata}
 */
proto.viam.app.data.v1.BinaryMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.viam.app.data.v1.CaptureMetadata;
      reader.readMessage(value,proto.viam.app.data.v1.CaptureMetadata.deserializeBinaryFromReader);
      msg.setCaptureMetadata(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeRequested(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeReceived(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileExt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 8:
      var value = new proto.viam.app.data.v1.Annotations;
      reader.readMessage(value,proto.viam.app.data.v1.Annotations.deserializeBinaryFromReader);
      msg.setAnnotations(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatasetIds(value);
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
proto.viam.app.data.v1.BinaryMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BinaryMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BinaryMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BinaryMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCaptureMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.app.data.v1.CaptureMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTimeRequested();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeReceived();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFileExt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAnnotations();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.viam.app.data.v1.Annotations.serializeBinaryToWriter
    );
  }
  f = message.getDatasetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CaptureMetadata capture_metadata = 2;
 * @return {?proto.viam.app.data.v1.CaptureMetadata}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getCaptureMetadata = function() {
  return /** @type{?proto.viam.app.data.v1.CaptureMetadata} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.CaptureMetadata, 2));
};


/**
 * @param {?proto.viam.app.data.v1.CaptureMetadata|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
*/
proto.viam.app.data.v1.BinaryMetadata.prototype.setCaptureMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.clearCaptureMetadata = function() {
  return this.setCaptureMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.hasCaptureMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp time_requested = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getTimeRequested = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
*/
proto.viam.app.data.v1.BinaryMetadata.prototype.setTimeRequested = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.clearTimeRequested = function() {
  return this.setTimeRequested(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.hasTimeRequested = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp time_received = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getTimeReceived = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
*/
proto.viam.app.data.v1.BinaryMetadata.prototype.setTimeReceived = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.clearTimeReceived = function() {
  return this.setTimeReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.hasTimeReceived = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string file_name = 5;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string file_ext = 6;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getFileExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.setFileExt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string uri = 7;
 * @return {string}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Annotations annotations = 8;
 * @return {?proto.viam.app.data.v1.Annotations}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getAnnotations = function() {
  return /** @type{?proto.viam.app.data.v1.Annotations} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Annotations, 8));
};


/**
 * @param {?proto.viam.app.data.v1.Annotations|undefined} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
*/
proto.viam.app.data.v1.BinaryMetadata.prototype.setAnnotations = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.clearAnnotations = function() {
  return this.setAnnotations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.hasAnnotations = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string dataset_ids = 9;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.getDatasetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.setDatasetIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.addDatasetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.BinaryMetadata} returns this
 */
proto.viam.app.data.v1.BinaryMetadata.prototype.clearDatasetIdsList = function() {
  return this.setDatasetIdsList([]);
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
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteTabularDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleteOlderThanDays: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.viam.app.data.v1.DeleteTabularDataRequest}
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteTabularDataRequest;
  return proto.viam.app.data.v1.DeleteTabularDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteTabularDataRequest}
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeleteOlderThanDays(value);
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
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteTabularDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteTabularDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleteOlderThanDays();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.DeleteTabularDataRequest} returns this
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 delete_older_than_days = 2;
 * @return {number}
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.getDeleteOlderThanDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.DeleteTabularDataRequest} returns this
 */
proto.viam.app.data.v1.DeleteTabularDataRequest.prototype.setDeleteOlderThanDays = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.viam.app.data.v1.DeleteTabularDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteTabularDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteTabularDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.viam.app.data.v1.DeleteTabularDataResponse}
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteTabularDataResponse;
  return proto.viam.app.data.v1.DeleteTabularDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteTabularDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteTabularDataResponse}
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeletedCount(value);
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
proto.viam.app.data.v1.DeleteTabularDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteTabularDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteTabularDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 deleted_count = 1;
 * @return {number}
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.DeleteTabularDataResponse} returns this
 */
proto.viam.app.data.v1.DeleteTabularDataResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f),
    includeInternalData: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest;
  return proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeInternalData(value);
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
  f = message.getIncludeInternalData();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} returns this
*/
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool include_internal_data = 2;
 * @return {boolean}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.getIncludeInternalData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterRequest.prototype.setIncludeInternalData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse;
  return proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeletedCount(value);
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
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 deleted_count = 1;
 * @return {number}
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.DeleteBinaryDataByFilterResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.repeatedFields_ = [2];



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
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance)
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
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest;
  return proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
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
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BinaryID binary_ids = 2;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 2));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} returns this
*/
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
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
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse;
  return proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeletedCount(value);
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
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 deleted_count = 1;
 * @return {number}
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse} returns this
 */
proto.viam.app.data.v1.DeleteBinaryDataByIDsResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.repeatedFields_ = [3,2];



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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest;
  return proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated BinaryID binary_ids = 3;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 3));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} returns this
*/
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse;
  return proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.repeatedFields_ = [2];



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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest;
  return proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} returns this
*/
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse;
  return proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddTagsToBinaryDataByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.repeatedFields_ = [3,2];



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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest;
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated BinaryID binary_ids = 3;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 3));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} returns this
*/
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse;
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeletedCount(value);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 deleted_count = 1;
 * @return {number}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByIDsResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.repeatedFields_ = [2];



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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest;
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} returns this
*/
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse;
  return proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeletedCount(value);
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
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 deleted_count = 1;
 * @return {number}
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse} returns this
 */
proto.viam.app.data.v1.RemoveTagsFromBinaryDataByFilterResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.viam.app.data.v1.TagsByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TagsByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TagsByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f)
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
 * @return {!proto.viam.app.data.v1.TagsByFilterRequest}
 */
proto.viam.app.data.v1.TagsByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TagsByFilterRequest;
  return proto.viam.app.data.v1.TagsByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TagsByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TagsByFilterRequest}
 */
proto.viam.app.data.v1.TagsByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
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
proto.viam.app.data.v1.TagsByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TagsByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TagsByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.TagsByFilterRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.TagsByFilterRequest} returns this
*/
proto.viam.app.data.v1.TagsByFilterRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.TagsByFilterRequest} returns this
 */
proto.viam.app.data.v1.TagsByFilterRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.TagsByFilterRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.TagsByFilterResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.TagsByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.TagsByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.TagsByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.TagsByFilterResponse}
 */
proto.viam.app.data.v1.TagsByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.TagsByFilterResponse;
  return proto.viam.app.data.v1.TagsByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.TagsByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.TagsByFilterResponse}
 */
proto.viam.app.data.v1.TagsByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.viam.app.data.v1.TagsByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.TagsByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.TagsByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.TagsByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.TagsByFilterResponse.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.TagsByFilterResponse} returns this
 */
proto.viam.app.data.v1.TagsByFilterResponse.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.TagsByFilterResponse} returns this
 */
proto.viam.app.data.v1.TagsByFilterResponse.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.TagsByFilterResponse} returns this
 */
proto.viam.app.data.v1.TagsByFilterResponse.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryId: (f = msg.getBinaryId()) && proto.viam.app.data.v1.BinaryID.toObject(includeInstance, f),
    label: jspb.Message.getFieldWithDefault(msg, 2, ""),
    xMinNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    yMinNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    xMaxNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    yMaxNormalized: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest;
  return proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.setBinaryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXMinNormalized(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYMinNormalized(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXMaxNormalized(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYMaxNormalized(value);
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getXMinNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getYMinNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getXMaxNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getYMaxNormalized();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional BinaryID binary_id = 7;
 * @return {?proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getBinaryId = function() {
  return /** @type{?proto.viam.app.data.v1.BinaryID} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.BinaryID, 7));
};


/**
 * @param {?proto.viam.app.data.v1.BinaryID|undefined} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
*/
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setBinaryId = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.clearBinaryId = function() {
  return this.setBinaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.hasBinaryId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double x_min_normalized = 3;
 * @return {number}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getXMinNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setXMinNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double y_min_normalized = 4;
 * @return {number}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getYMinNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setYMinNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double x_max_normalized = 5;
 * @return {number}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getXMaxNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setXMaxNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double y_max_normalized = 6;
 * @return {number}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.getYMaxNormalized = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDRequest.prototype.setYMaxNormalized = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bboxId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse;
  return proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBboxId(value);
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
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBboxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string bbox_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.prototype.getBboxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse} returns this
 */
proto.viam.app.data.v1.AddBoundingBoxToImageByIDResponse.prototype.setBboxId = function(value) {
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryId: (f = msg.getBinaryId()) && proto.viam.app.data.v1.BinaryID.toObject(includeInstance, f),
    bboxId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest;
  return proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.setBinaryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBboxId(value);
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getBboxId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional BinaryID binary_id = 3;
 * @return {?proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.getBinaryId = function() {
  return /** @type{?proto.viam.app.data.v1.BinaryID} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.BinaryID, 3));
};


/**
 * @param {?proto.viam.app.data.v1.BinaryID|undefined} value
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} returns this
*/
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.setBinaryId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} returns this
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.clearBinaryId = function() {
  return this.setBinaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.hasBinaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string bbox_id = 2;
 * @return {string}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.getBboxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest} returns this
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDRequest.prototype.setBboxId = function(value) {
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse;
  return proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse}
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBoundingBoxFromImageByIDResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.viam.app.data.v1.Filter.toObject(includeInstance, f)
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
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest;
  return proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.Filter;
      reader.readMessage(value,proto.viam.app.data.v1.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.data.v1.Filter.serializeBinaryToWriter
    );
  }
};


/**
 * optional Filter filter = 1;
 * @return {?proto.viam.app.data.v1.Filter}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.getFilter = function() {
  return /** @type{?proto.viam.app.data.v1.Filter} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.data.v1.Filter, 1));
};


/**
 * @param {?proto.viam.app.data.v1.Filter|undefined} value
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} returns this
*/
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest} returns this
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.repeatedFields_ = [1];



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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse;
  return proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
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
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string labels = 1;
 * @return {!Array<string>}
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} returns this
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} returns this
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse} returns this
 */
proto.viam.app.data.v1.BoundingBoxLabelsByFilterResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
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
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.ConfigureDatabaseUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.ConfigureDatabaseUserRequest;
  return proto.viam.app.data.v1.ConfigureDatabaseUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.ConfigureDatabaseUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} returns this
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserRequest} returns this
 */
proto.viam.app.data.v1.ConfigureDatabaseUserRequest.prototype.setPassword = function(value) {
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
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.ConfigureDatabaseUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserResponse}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.ConfigureDatabaseUserResponse;
  return proto.viam.app.data.v1.ConfigureDatabaseUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.ConfigureDatabaseUserResponse}
 */
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.ConfigureDatabaseUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.ConfigureDatabaseUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.ConfigureDatabaseUserResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.app.data.v1.GetDatabaseConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.GetDatabaseConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionRequest}
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.GetDatabaseConnectionRequest;
  return proto.viam.app.data.v1.GetDatabaseConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionRequest}
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.viam.app.data.v1.GetDatabaseConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.GetDatabaseConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionRequest} returns this
 */
proto.viam.app.data.v1.GetDatabaseConnectionRequest.prototype.setOrganizationId = function(value) {
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
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.GetDatabaseConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mongodbUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hasDatabaseUser: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionResponse}
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.GetDatabaseConnectionResponse;
  return proto.viam.app.data.v1.GetDatabaseConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionResponse}
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMongodbUri(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDatabaseUser(value);
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
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.GetDatabaseConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMongodbUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHasDatabaseUser();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string hostname = 1;
 * @return {string}
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} returns this
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mongodb_uri = 2;
 * @return {string}
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.getMongodbUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} returns this
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.setMongodbUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool has_database_user = 3;
 * @return {boolean}
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.getHasDatabaseUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.data.v1.GetDatabaseConnectionResponse} returns this
 */
proto.viam.app.data.v1.GetDatabaseConnectionResponse.prototype.setHasDatabaseUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.repeatedFields_ = [1];



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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance),
    datasetId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest;
  return proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BinaryID binary_ids = 1;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} returns this
*/
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
};


/**
 * optional string dataset_id = 2;
 * @return {string}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest} returns this
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsRequest.prototype.setDatasetId = function(value) {
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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse;
  return proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse}
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.AddBinaryDataToDatasetByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.repeatedFields_ = [1];



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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryIdsList: jspb.Message.toObjectList(msg.getBinaryIdsList(),
    proto.viam.app.data.v1.BinaryID.toObject, includeInstance),
    datasetId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest;
  return proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.data.v1.BinaryID;
      reader.readMessage(value,proto.viam.app.data.v1.BinaryID.deserializeBinaryFromReader);
      msg.addBinaryIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.data.v1.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BinaryID binary_ids = 1;
 * @return {!Array<!proto.viam.app.data.v1.BinaryID>}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.getBinaryIdsList = function() {
  return /** @type{!Array<!proto.viam.app.data.v1.BinaryID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.data.v1.BinaryID, 1));
};


/**
 * @param {!Array<!proto.viam.app.data.v1.BinaryID>} value
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} returns this
*/
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.setBinaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.data.v1.BinaryID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.addBinaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.data.v1.BinaryID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.clearBinaryIdsList = function() {
  return this.setBinaryIdsList([]);
};


/**
 * optional string dataset_id = 2;
 * @return {string}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest} returns this
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsRequest.prototype.setDatasetId = function(value) {
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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse;
  return proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse}
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.data.v1.RemoveBinaryDataFromDatasetByIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.viam.app.data.v1.Order = {
  ORDER_UNSPECIFIED: 0,
  ORDER_DESCENDING: 1,
  ORDER_ASCENDING: 2
};

/**
 * @enum {number}
 */
proto.viam.app.data.v1.TagsFilterType = {
  TAGS_FILTER_TYPE_UNSPECIFIED: 0,
  TAGS_FILTER_TYPE_MATCH_BY_OR: 1,
  TAGS_FILTER_TYPE_TAGGED: 2,
  TAGS_FILTER_TYPE_UNTAGGED: 3
};

goog.object.extend(exports, proto.viam.app.data.v1);
