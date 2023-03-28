// source: service/slam/v1/slam.proto
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
goog.exportSymbol('proto.viam.service.slam.v1.GetInternalStateStreamRequest', null, global);
goog.exportSymbol('proto.viam.service.slam.v1.GetInternalStateStreamResponse', null, global);
goog.exportSymbol('proto.viam.service.slam.v1.GetPointCloudMapStreamRequest', null, global);
goog.exportSymbol('proto.viam.service.slam.v1.GetPointCloudMapStreamResponse', null, global);
goog.exportSymbol('proto.viam.service.slam.v1.GetPositionNewRequest', null, global);
goog.exportSymbol('proto.viam.service.slam.v1.GetPositionNewResponse', null, global);
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
proto.viam.service.slam.v1.GetPositionNewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetPositionNewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetPositionNewRequest.displayName = 'proto.viam.service.slam.v1.GetPositionNewRequest';
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
proto.viam.service.slam.v1.GetPositionNewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetPositionNewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetPositionNewResponse.displayName = 'proto.viam.service.slam.v1.GetPositionNewResponse';
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
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetPointCloudMapStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.displayName = 'proto.viam.service.slam.v1.GetPointCloudMapStreamRequest';
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
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetPointCloudMapStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.displayName = 'proto.viam.service.slam.v1.GetPointCloudMapStreamResponse';
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
proto.viam.service.slam.v1.GetInternalStateStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetInternalStateStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetInternalStateStreamRequest.displayName = 'proto.viam.service.slam.v1.GetInternalStateStreamRequest';
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
proto.viam.service.slam.v1.GetInternalStateStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.service.slam.v1.GetInternalStateStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.service.slam.v1.GetInternalStateStreamResponse.displayName = 'proto.viam.service.slam.v1.GetInternalStateStreamResponse';
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
proto.viam.service.slam.v1.GetPositionNewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetPositionNewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPositionNewRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.slam.v1.GetPositionNewRequest}
 */
proto.viam.service.slam.v1.GetPositionNewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetPositionNewRequest;
  return proto.viam.service.slam.v1.GetPositionNewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetPositionNewRequest}
 */
proto.viam.service.slam.v1.GetPositionNewRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.slam.v1.GetPositionNewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetPositionNewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPositionNewRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.service.slam.v1.GetPositionNewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.slam.v1.GetPositionNewRequest} returns this
 */
proto.viam.service.slam.v1.GetPositionNewRequest.prototype.setName = function(value) {
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
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetPositionNewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetPositionNewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPositionNewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pose: (f = msg.getPose()) && common_v1_common_pb.Pose.toObject(includeInstance, f),
    componentReference: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetPositionNewResponse;
  return proto.viam.service.slam.v1.GetPositionNewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetPositionNewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentReference(value);
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
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetPositionNewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetPositionNewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPositionNewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_v1_common_pb.Pose.serializeBinaryToWriter
    );
  }
  f = message.getComponentReference();
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
 * optional viam.common.v1.Pose pose = 1;
 * @return {?proto.viam.common.v1.Pose}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.getPose = function() {
  return /** @type{?proto.viam.common.v1.Pose} */ (
    jspb.Message.getWrapperField(this, common_v1_common_pb.Pose, 1));
};


/**
 * @param {?proto.viam.common.v1.Pose|undefined} value
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse} returns this
*/
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse} returns this
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string component_reference = 2;
 * @return {string}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.getComponentReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse} returns this
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.setComponentReference = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct extra = 99;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.getExtra = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 99));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse} returns this
*/
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.setExtra = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.service.slam.v1.GetPositionNewResponse} returns this
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.clearExtra = function() {
  return this.setExtra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.service.slam.v1.GetPositionNewResponse.prototype.hasExtra = function() {
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
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetPointCloudMapStreamRequest;
  return proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamRequest} returns this
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamRequest.prototype.setName = function(value) {
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
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointCloudPcdChunk: msg.getPointCloudPcdChunk_asB64()
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
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetPointCloudMapStreamResponse;
  return proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPointCloudPcdChunk(value);
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
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointCloudPcdChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes point_cloud_pcd_chunk = 1;
 * @return {string}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.getPointCloudPcdChunk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes point_cloud_pcd_chunk = 1;
 * This is a type-conversion wrapper around `getPointCloudPcdChunk()`
 * @return {string}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.getPointCloudPcdChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPointCloudPcdChunk()));
};


/**
 * optional bytes point_cloud_pcd_chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPointCloudPcdChunk()`
 * @return {!Uint8Array}
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.getPointCloudPcdChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPointCloudPcdChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.service.slam.v1.GetPointCloudMapStreamResponse} returns this
 */
proto.viam.service.slam.v1.GetPointCloudMapStreamResponse.prototype.setPointCloudPcdChunk = function(value) {
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
proto.viam.service.slam.v1.GetInternalStateStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetInternalStateStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetInternalStateStreamRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamRequest}
 */
proto.viam.service.slam.v1.GetInternalStateStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetInternalStateStreamRequest;
  return proto.viam.service.slam.v1.GetInternalStateStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamRequest}
 */
proto.viam.service.slam.v1.GetInternalStateStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.viam.service.slam.v1.GetInternalStateStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetInternalStateStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetInternalStateStreamRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.viam.service.slam.v1.GetInternalStateStreamRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamRequest} returns this
 */
proto.viam.service.slam.v1.GetInternalStateStreamRequest.prototype.setName = function(value) {
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
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.service.slam.v1.GetInternalStateStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalStateChunk: msg.getInternalStateChunk_asB64()
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
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamResponse}
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.service.slam.v1.GetInternalStateStreamResponse;
  return proto.viam.service.slam.v1.GetInternalStateStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamResponse}
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInternalStateChunk(value);
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
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.service.slam.v1.GetInternalStateStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.service.slam.v1.GetInternalStateStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalStateChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes internal_state_chunk = 1;
 * @return {string}
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.getInternalStateChunk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes internal_state_chunk = 1;
 * This is a type-conversion wrapper around `getInternalStateChunk()`
 * @return {string}
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.getInternalStateChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInternalStateChunk()));
};


/**
 * optional bytes internal_state_chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInternalStateChunk()`
 * @return {!Uint8Array}
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.getInternalStateChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInternalStateChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.service.slam.v1.GetInternalStateStreamResponse} returns this
 */
proto.viam.service.slam.v1.GetInternalStateStreamResponse.prototype.setInternalStateChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.viam.service.slam.v1);
