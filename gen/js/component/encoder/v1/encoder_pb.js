// source: component/encoder/v1/encoder.proto
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
goog.exportSymbol('proto.viam.component.encoder.v1.GetPositionRequest', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.GetPositionResponse', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.GetPropertiesRequest', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.GetPropertiesResponse', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.PositionType', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.ResetPositionRequest', null, global);
goog.exportSymbol('proto.viam.component.encoder.v1.ResetPositionResponse', null, global);
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
proto.viam.component.encoder.v1.GetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.GetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.GetPositionRequest.displayName = 'proto.viam.component.encoder.v1.GetPositionRequest';
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
proto.viam.component.encoder.v1.GetPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.GetPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.GetPositionResponse.displayName = 'proto.viam.component.encoder.v1.GetPositionResponse';
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
proto.viam.component.encoder.v1.ResetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.ResetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.ResetPositionRequest.displayName = 'proto.viam.component.encoder.v1.ResetPositionRequest';
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
proto.viam.component.encoder.v1.ResetPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.ResetPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.ResetPositionResponse.displayName = 'proto.viam.component.encoder.v1.ResetPositionResponse';
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
proto.viam.component.encoder.v1.GetPropertiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.GetPropertiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.GetPropertiesRequest.displayName = 'proto.viam.component.encoder.v1.GetPropertiesRequest';
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
proto.viam.component.encoder.v1.GetPropertiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.component.encoder.v1.GetPropertiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.component.encoder.v1.GetPropertiesResponse.displayName = 'proto.viam.component.encoder.v1.GetPropertiesResponse';
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
proto.viam.component.encoder.v1.GetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.GetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.GetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest}
 */
proto.viam.component.encoder.v1.GetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.GetPositionRequest;
  return proto.viam.component.encoder.v1.GetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.GetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest}
 */
proto.viam.component.encoder.v1.GetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.viam.component.encoder.v1.PositionType} */ (reader.readEnum());
      msg.setPositionType(value);
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
proto.viam.component.encoder.v1.GetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.GetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.GetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.viam.component.encoder.v1.PositionType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
proto.viam.component.encoder.v1.GetPositionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PositionType position_type = 2;
 * @return {!proto.viam.component.encoder.v1.PositionType}
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.getPositionType = function() {
  return /** @type {!proto.viam.component.encoder.v1.PositionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.viam.component.encoder.v1.PositionType} value
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.setPositionType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.clearPositionType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.hasPositionType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest} returns this
*/
proto.viam.component.encoder.v1.GetPositionRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.encoder.v1.GetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.encoder.v1.GetPositionRequest.prototype.hasExtra = function() {
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
proto.viam.component.encoder.v1.GetPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.GetPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.GetPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    positionType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.viam.component.encoder.v1.GetPositionResponse}
 */
proto.viam.component.encoder.v1.GetPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.GetPositionResponse;
  return proto.viam.component.encoder.v1.GetPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.GetPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.GetPositionResponse}
 */
proto.viam.component.encoder.v1.GetPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {!proto.viam.component.encoder.v1.PositionType} */ (reader.readEnum());
      msg.setPositionType(value);
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
proto.viam.component.encoder.v1.GetPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.GetPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.GetPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPositionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.viam.component.encoder.v1.GetPositionResponse.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.viam.component.encoder.v1.GetPositionResponse} returns this
 */
proto.viam.component.encoder.v1.GetPositionResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional PositionType position_type = 2;
 * @return {!proto.viam.component.encoder.v1.PositionType}
 */
proto.viam.component.encoder.v1.GetPositionResponse.prototype.getPositionType = function() {
  return /** @type {!proto.viam.component.encoder.v1.PositionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.viam.component.encoder.v1.PositionType} value
 * @return {!proto.viam.component.encoder.v1.GetPositionResponse} returns this
 */
proto.viam.component.encoder.v1.GetPositionResponse.prototype.setPositionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.ResetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.ResetPositionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.encoder.v1.ResetPositionRequest}
 */
proto.viam.component.encoder.v1.ResetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.ResetPositionRequest;
  return proto.viam.component.encoder.v1.ResetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.ResetPositionRequest}
 */
proto.viam.component.encoder.v1.ResetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.ResetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.ResetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.ResetPositionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.encoder.v1.ResetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.encoder.v1.ResetPositionRequest} returns this
*/
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.encoder.v1.ResetPositionRequest} returns this
 */
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.encoder.v1.ResetPositionRequest.prototype.hasExtra = function() {
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
proto.viam.component.encoder.v1.ResetPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.ResetPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.ResetPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.ResetPositionResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.encoder.v1.ResetPositionResponse}
 */
proto.viam.component.encoder.v1.ResetPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.ResetPositionResponse;
  return proto.viam.component.encoder.v1.ResetPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.ResetPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.ResetPositionResponse}
 */
proto.viam.component.encoder.v1.ResetPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.encoder.v1.ResetPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.ResetPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.ResetPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.ResetPositionResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.GetPropertiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.component.encoder.v1.GetPropertiesRequest}
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.GetPropertiesRequest;
  return proto.viam.component.encoder.v1.GetPropertiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.GetPropertiesRequest}
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.GetPropertiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.GetPropertiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.component.encoder.v1.GetPropertiesRequest} returns this
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.component.encoder.v1.GetPropertiesRequest} returns this
*/
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.component.encoder.v1.GetPropertiesRequest} returns this
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.component.encoder.v1.GetPropertiesRequest.prototype.hasExtra = function() {
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
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.component.encoder.v1.GetPropertiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.component.encoder.v1.GetPropertiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticksCountSupported: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    angleDegreesSupported: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.viam.component.encoder.v1.GetPropertiesResponse}
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.component.encoder.v1.GetPropertiesResponse;
  return proto.viam.component.encoder.v1.GetPropertiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.component.encoder.v1.GetPropertiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.component.encoder.v1.GetPropertiesResponse}
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTicksCountSupported(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAngleDegreesSupported(value);
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
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.component.encoder.v1.GetPropertiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.component.encoder.v1.GetPropertiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicksCountSupported();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAngleDegreesSupported();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool ticks_count_supported = 1;
 * @return {boolean}
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.getTicksCountSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.component.encoder.v1.GetPropertiesResponse} returns this
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.setTicksCountSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool angle_degrees_supported = 2;
 * @return {boolean}
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.getAngleDegreesSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.component.encoder.v1.GetPropertiesResponse} returns this
 */
proto.viam.component.encoder.v1.GetPropertiesResponse.prototype.setAngleDegreesSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.viam.component.encoder.v1.PositionType = {
  POSITION_TYPE_UNSPECIFIED: 0,
  POSITION_TYPE_TICKS_COUNT: 1,
  POSITION_TYPE_ANGLE_DEGREES: 2
};

goog.object.extend(exports, proto.viam.component.encoder.v1);
