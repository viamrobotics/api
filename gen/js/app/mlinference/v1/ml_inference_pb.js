// source: app/mlinference/v1/ml_inference.proto
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

var app_data_v1_data_pb = require('../../../app/data/v1/data_pb.js');
goog.object.extend(proto, app_data_v1_data_pb);
goog.exportSymbol('proto.viam.app.mlinference.v1.GetInferenceRequest', null, global);
goog.exportSymbol('proto.viam.app.mlinference.v1.GetInferenceResponse', null, global);
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
proto.viam.app.mlinference.v1.GetInferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.mlinference.v1.GetInferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.mlinference.v1.GetInferenceRequest.displayName = 'proto.viam.app.mlinference.v1.GetInferenceRequest';
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
proto.viam.app.mlinference.v1.GetInferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.mlinference.v1.GetInferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.mlinference.v1.GetInferenceResponse.displayName = 'proto.viam.app.mlinference.v1.GetInferenceResponse';
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
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.mlinference.v1.GetInferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
registryItemId: jspb.Message.getFieldWithDefault(msg, 1, ""),
registryItemVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
binaryId: (f = msg.getBinaryId()) && app_data_v1_data_pb.BinaryID.toObject(includeInstance, f),
organizationId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.mlinference.v1.GetInferenceRequest;
  return proto.viam.app.mlinference.v1.GetInferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistryItemId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistryItemVersion(value);
      break;
    case 3:
      var value = new app_data_v1_data_pb.BinaryID;
      reader.readMessage(value,app_data_v1_data_pb.BinaryID.deserializeBinaryFromReader);
      msg.setBinaryId(value);
      break;
    case 4:
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
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.mlinference.v1.GetInferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.mlinference.v1.GetInferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegistryItemId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistryItemVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBinaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      app_data_v1_data_pb.BinaryID.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string registry_item_id = 1;
 * @return {string}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.getRegistryItemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest} returns this
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.setRegistryItemId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registry_item_version = 2;
 * @return {string}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.getRegistryItemVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest} returns this
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.setRegistryItemVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional viam.app.data.v1.BinaryID binary_id = 3;
 * @return {?proto.viam.app.data.v1.BinaryID}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.getBinaryId = function() {
  return /** @type{?proto.viam.app.data.v1.BinaryID} */ (
    jspb.Message.getWrapperField(this, app_data_v1_data_pb.BinaryID, 3));
};


/**
 * @param {?proto.viam.app.data.v1.BinaryID|undefined} value
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest} returns this
*/
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.setBinaryId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest} returns this
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.clearBinaryId = function() {
  return this.setBinaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.hasBinaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string organization_id = 4;
 * @return {string}
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.mlinference.v1.GetInferenceRequest} returns this
 */
proto.viam.app.mlinference.v1.GetInferenceRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.viam.app.mlinference.v1.GetInferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.mlinference.v1.GetInferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.mlinference.v1.GetInferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.mlinference.v1.GetInferenceResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.app.mlinference.v1.GetInferenceResponse}
 */
proto.viam.app.mlinference.v1.GetInferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.mlinference.v1.GetInferenceResponse;
  return proto.viam.app.mlinference.v1.GetInferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.mlinference.v1.GetInferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.mlinference.v1.GetInferenceResponse}
 */
proto.viam.app.mlinference.v1.GetInferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.app.mlinference.v1.GetInferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.mlinference.v1.GetInferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.mlinference.v1.GetInferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.mlinference.v1.GetInferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.viam.app.mlinference.v1);
