// source: google/api/expr/v1alpha1/explain.proto
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

var google_api_expr_v1alpha1_value_pb = require('../../../../google/api/expr/v1alpha1/value_pb.js');
goog.object.extend(proto, google_api_expr_v1alpha1_value_pb);
goog.exportSymbol('proto.google.api.expr.v1alpha1.Explain', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.Explain.ExprStep', null, global);
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
proto.google.api.expr.v1alpha1.Explain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.expr.v1alpha1.Explain.repeatedFields_, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.Explain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.Explain.displayName = 'proto.google.api.expr.v1alpha1.Explain';
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
proto.google.api.expr.v1alpha1.Explain.ExprStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.Explain.ExprStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.Explain.ExprStep.displayName = 'proto.google.api.expr.v1alpha1.Explain.ExprStep';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.expr.v1alpha1.Explain.repeatedFields_ = [1,2];



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
proto.google.api.expr.v1alpha1.Explain.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.Explain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.Explain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.Explain.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    google_api_expr_v1alpha1_value_pb.Value.toObject, includeInstance),
exprStepsList: jspb.Message.toObjectList(msg.getExprStepsList(),
    proto.google.api.expr.v1alpha1.Explain.ExprStep.toObject, includeInstance)
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
 * @return {!proto.google.api.expr.v1alpha1.Explain}
 */
proto.google.api.expr.v1alpha1.Explain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.Explain;
  return proto.google.api.expr.v1alpha1.Explain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.Explain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.Explain}
 */
proto.google.api.expr.v1alpha1.Explain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_api_expr_v1alpha1_value_pb.Value;
      reader.readMessage(value,google_api_expr_v1alpha1_value_pb.Value.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    case 2:
      var value = new proto.google.api.expr.v1alpha1.Explain.ExprStep;
      reader.readMessage(value,proto.google.api.expr.v1alpha1.Explain.ExprStep.deserializeBinaryFromReader);
      msg.addExprSteps(value);
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
proto.google.api.expr.v1alpha1.Explain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.Explain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.Explain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.Explain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_api_expr_v1alpha1_value_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getExprStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.api.expr.v1alpha1.Explain.ExprStep.serializeBinaryToWriter
    );
  }
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
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.Explain.ExprStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.Explain.ExprStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
valueIndex: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.api.expr.v1alpha1.Explain.ExprStep}
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.Explain.ExprStep;
  return proto.google.api.expr.v1alpha1.Explain.ExprStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.Explain.ExprStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.Explain.ExprStep}
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValueIndex(value);
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
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.Explain.ExprStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.Explain.ExprStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValueIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.expr.v1alpha1.Explain.ExprStep} returns this
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 value_index = 2;
 * @return {number}
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.getValueIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.expr.v1alpha1.Explain.ExprStep} returns this
 */
proto.google.api.expr.v1alpha1.Explain.ExprStep.prototype.setValueIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Value values = 1;
 * @return {!Array<!proto.google.api.expr.v1alpha1.Value>}
 */
proto.google.api.expr.v1alpha1.Explain.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.api.expr.v1alpha1.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_expr_v1alpha1_value_pb.Value, 1));
};


/**
 * @param {!Array<!proto.google.api.expr.v1alpha1.Value>} value
 * @return {!proto.google.api.expr.v1alpha1.Explain} returns this
*/
proto.google.api.expr.v1alpha1.Explain.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.expr.v1alpha1.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.expr.v1alpha1.Value}
 */
proto.google.api.expr.v1alpha1.Explain.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.expr.v1alpha1.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.Explain} returns this
 */
proto.google.api.expr.v1alpha1.Explain.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


/**
 * repeated ExprStep expr_steps = 2;
 * @return {!Array<!proto.google.api.expr.v1alpha1.Explain.ExprStep>}
 */
proto.google.api.expr.v1alpha1.Explain.prototype.getExprStepsList = function() {
  return /** @type{!Array<!proto.google.api.expr.v1alpha1.Explain.ExprStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.expr.v1alpha1.Explain.ExprStep, 2));
};


/**
 * @param {!Array<!proto.google.api.expr.v1alpha1.Explain.ExprStep>} value
 * @return {!proto.google.api.expr.v1alpha1.Explain} returns this
*/
proto.google.api.expr.v1alpha1.Explain.prototype.setExprStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.api.expr.v1alpha1.Explain.ExprStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.expr.v1alpha1.Explain.ExprStep}
 */
proto.google.api.expr.v1alpha1.Explain.prototype.addExprSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.api.expr.v1alpha1.Explain.ExprStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.Explain} returns this
 */
proto.google.api.expr.v1alpha1.Explain.prototype.clearExprStepsList = function() {
  return this.setExprStepsList([]);
};


goog.object.extend(exports, proto.google.api.expr.v1alpha1);
