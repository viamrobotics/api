// source: google/geo/type/viewport.proto
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

var google_type_latlng_pb = require('../../../google/type/latlng_pb.js');
goog.object.extend(proto, google_type_latlng_pb);
goog.exportSymbol('proto.google.geo.type.Viewport', null, global);
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
proto.google.geo.type.Viewport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.geo.type.Viewport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.geo.type.Viewport.displayName = 'proto.google.geo.type.Viewport';
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
proto.google.geo.type.Viewport.prototype.toObject = function(opt_includeInstance) {
  return proto.google.geo.type.Viewport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.geo.type.Viewport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.geo.type.Viewport.toObject = function(includeInstance, msg) {
  var f, obj = {
low: (f = msg.getLow()) && google_type_latlng_pb.LatLng.toObject(includeInstance, f),
high: (f = msg.getHigh()) && google_type_latlng_pb.LatLng.toObject(includeInstance, f)
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
 * @return {!proto.google.geo.type.Viewport}
 */
proto.google.geo.type.Viewport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.geo.type.Viewport;
  return proto.google.geo.type.Viewport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.geo.type.Viewport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.geo.type.Viewport}
 */
proto.google.geo.type.Viewport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_latlng_pb.LatLng;
      reader.readMessage(value,google_type_latlng_pb.LatLng.deserializeBinaryFromReader);
      msg.setLow(value);
      break;
    case 2:
      var value = new google_type_latlng_pb.LatLng;
      reader.readMessage(value,google_type_latlng_pb.LatLng.deserializeBinaryFromReader);
      msg.setHigh(value);
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
proto.google.geo.type.Viewport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.geo.type.Viewport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.geo.type.Viewport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.geo.type.Viewport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLow();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getHigh();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.type.LatLng low = 1;
 * @return {?proto.google.type.LatLng}
 */
proto.google.geo.type.Viewport.prototype.getLow = function() {
  return /** @type{?proto.google.type.LatLng} */ (
    jspb.Message.getWrapperField(this, google_type_latlng_pb.LatLng, 1));
};


/**
 * @param {?proto.google.type.LatLng|undefined} value
 * @return {!proto.google.geo.type.Viewport} returns this
*/
proto.google.geo.type.Viewport.prototype.setLow = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.geo.type.Viewport} returns this
 */
proto.google.geo.type.Viewport.prototype.clearLow = function() {
  return this.setLow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.geo.type.Viewport.prototype.hasLow = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.type.LatLng high = 2;
 * @return {?proto.google.type.LatLng}
 */
proto.google.geo.type.Viewport.prototype.getHigh = function() {
  return /** @type{?proto.google.type.LatLng} */ (
    jspb.Message.getWrapperField(this, google_type_latlng_pb.LatLng, 2));
};


/**
 * @param {?proto.google.type.LatLng|undefined} value
 * @return {!proto.google.geo.type.Viewport} returns this
*/
proto.google.geo.type.Viewport.prototype.setHigh = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.geo.type.Viewport} returns this
 */
proto.google.geo.type.Viewport.prototype.clearHigh = function() {
  return this.setHigh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.geo.type.Viewport.prototype.hasHigh = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.geo.type);
