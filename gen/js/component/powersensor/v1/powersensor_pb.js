// source: component/powersensor/v1/powersensor.proto
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
var tagger_v1_tagger_pb = require('../../../tagger/v1/tagger_pb.js');
goog.object.extend(proto, tagger_v1_tagger_pb);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetCurrentRequest', null, global);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetCurrentResponse', null, global);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetPowerRequest', null, global);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetPowerResponse', null, global);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetVoltageRequest', null, global);
goog.exportSymbol('proto.viam.component.powersensor.v1.GetVoltageResponse', null, global);
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
proto.viam.component.powersensor.v1.GetVoltageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetVoltageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetVoltageRequest.displayName = 'proto.viam.component.powersensor.v1.GetVoltageRequest';
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
proto.viam.component.powersensor.v1.GetVoltageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetVoltageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetVoltageResponse.displayName = 'proto.viam.component.powersensor.v1.GetVoltageResponse';
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
proto.viam.component.powersensor.v1.GetCurrentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetCurrentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetCurrentRequest.displayName = 'proto.viam.component.powersensor.v1.GetCurrentRequest';
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
proto.viam.component.powersensor.v1.GetCurrentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetCurrentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetCurrentResponse.displayName = 'proto.viam.component.powersensor.v1.GetCurrentResponse';
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
proto.viam.component.powersensor.v1.GetPowerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetPowerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetPowerRequest.displayName = 'proto.viam.component.powersensor.v1.GetPowerRequest';
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
proto.viam.component.powersensor.v1.GetPowerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.powersensor.v1.GetPowerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.powersensor.v1.GetPowerResponse.displayName = 'proto.viam.component.powersensor.v1.GetPowerResponse';
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
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetVoltageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.powersensor.v1.GetVoltageRequest}
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetVoltageRequest;
  return proto.viam.component.powersensor.v1.GetVoltageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetVoltageRequest}
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetVoltageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetVoltageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.powersensor.v1.GetVoltageRequest} returns this
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.powersensor.v1.GetVoltageRequest} returns this
*/
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.powersensor.v1.GetVoltageRequest} returns this
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.powersensor.v1.GetVoltageRequest.prototype.hasExtra = function() {
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
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetVoltageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetVoltageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volts: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    isAc: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.viam.component.powersensor.v1.GetVoltageResponse}
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetVoltageResponse;
  return proto.viam.component.powersensor.v1.GetVoltageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetVoltageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetVoltageResponse}
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolts(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAc(value);
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
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetVoltageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetVoltageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolts();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getIsAc();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional double volts = 1;
 * @return {number}
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.getVolts = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.component.powersensor.v1.GetVoltageResponse} returns this
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.setVolts = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool is_ac = 2;
 * @return {boolean}
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.getIsAc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.component.powersensor.v1.GetVoltageResponse} returns this
 */
proto.viam.component.powersensor.v1.GetVoltageResponse.prototype.setIsAc = function(value) {
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
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetCurrentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.powersensor.v1.GetCurrentRequest}
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetCurrentRequest;
  return proto.viam.component.powersensor.v1.GetCurrentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetCurrentRequest}
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetCurrentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetCurrentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.powersensor.v1.GetCurrentRequest} returns this
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.powersensor.v1.GetCurrentRequest} returns this
*/
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.powersensor.v1.GetCurrentRequest} returns this
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.powersensor.v1.GetCurrentRequest.prototype.hasExtra = function() {
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
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetCurrentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetCurrentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amperes: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    isAc: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.viam.component.powersensor.v1.GetCurrentResponse}
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetCurrentResponse;
  return proto.viam.component.powersensor.v1.GetCurrentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetCurrentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetCurrentResponse}
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmperes(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAc(value);
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
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetCurrentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetCurrentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmperes();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getIsAc();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional double amperes = 1;
 * @return {number}
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.getAmperes = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.component.powersensor.v1.GetCurrentResponse} returns this
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.setAmperes = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool is_ac = 2;
 * @return {boolean}
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.getIsAc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.component.powersensor.v1.GetCurrentResponse} returns this
 */
proto.viam.component.powersensor.v1.GetCurrentResponse.prototype.setIsAc = function(value) {
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
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetPowerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetPowerRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.powersensor.v1.GetPowerRequest}
 */
proto.viam.component.powersensor.v1.GetPowerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetPowerRequest;
  return proto.viam.component.powersensor.v1.GetPowerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetPowerRequest}
 */
proto.viam.component.powersensor.v1.GetPowerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetPowerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetPowerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetPowerRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.powersensor.v1.GetPowerRequest} returns this
 */
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.powersensor.v1.GetPowerRequest} returns this
*/
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.powersensor.v1.GetPowerRequest} returns this
 */
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.powersensor.v1.GetPowerRequest.prototype.hasExtra = function() {
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
proto.viam.component.powersensor.v1.GetPowerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.powersensor.v1.GetPowerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.powersensor.v1.GetPowerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetPowerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    watts: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.viam.component.powersensor.v1.GetPowerResponse}
 */
proto.viam.component.powersensor.v1.GetPowerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.powersensor.v1.GetPowerResponse;
  return proto.viam.component.powersensor.v1.GetPowerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.powersensor.v1.GetPowerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.powersensor.v1.GetPowerResponse}
 */
proto.viam.component.powersensor.v1.GetPowerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWatts(value);
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
proto.viam.component.powersensor.v1.GetPowerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.powersensor.v1.GetPowerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.powersensor.v1.GetPowerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.powersensor.v1.GetPowerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatts();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double watts = 1;
 * @return {number}
 */
proto.viam.component.powersensor.v1.GetPowerResponse.prototype.getWatts = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.component.powersensor.v1.GetPowerResponse} returns this
 */
proto.viam.component.powersensor.v1.GetPowerResponse.prototype.setWatts = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


goog.object.extend(exports, proto.viam.component.powersensor.v1);
