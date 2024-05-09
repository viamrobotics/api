// source: google/bytestream/bytestream.proto
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

goog.exportSymbol('proto.google.bytestream.QueryWriteStatusRequest', null, global);
goog.exportSymbol('proto.google.bytestream.QueryWriteStatusResponse', null, global);
goog.exportSymbol('proto.google.bytestream.ReadRequest', null, global);
goog.exportSymbol('proto.google.bytestream.ReadResponse', null, global);
goog.exportSymbol('proto.google.bytestream.WriteRequest', null, global);
goog.exportSymbol('proto.google.bytestream.WriteResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.bytestream.ReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.ReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.ReadRequest.displayName = 'proto.google.bytestream.ReadRequest';
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
proto.google.bytestream.ReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.ReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.ReadResponse.displayName = 'proto.google.bytestream.ReadResponse';
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
proto.google.bytestream.WriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.WriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.WriteRequest.displayName = 'proto.google.bytestream.WriteRequest';
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
proto.google.bytestream.WriteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.WriteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.WriteResponse.displayName = 'proto.google.bytestream.WriteResponse';
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
proto.google.bytestream.QueryWriteStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.QueryWriteStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.QueryWriteStatusRequest.displayName = 'proto.google.bytestream.QueryWriteStatusRequest';
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
proto.google.bytestream.QueryWriteStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.bytestream.QueryWriteStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.bytestream.QueryWriteStatusResponse.displayName = 'proto.google.bytestream.QueryWriteStatusResponse';
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
proto.google.bytestream.ReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.ReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.ReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.ReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    readLimit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.bytestream.ReadRequest}
 */
proto.google.bytestream.ReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.ReadRequest;
  return proto.google.bytestream.ReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.ReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.ReadRequest}
 */
proto.google.bytestream.ReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadLimit(value);
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
proto.google.bytestream.ReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.ReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.ReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.ReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReadOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReadLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.bytestream.ReadRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.bytestream.ReadRequest} returns this
 */
proto.google.bytestream.ReadRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 read_offset = 2;
 * @return {number}
 */
proto.google.bytestream.ReadRequest.prototype.getReadOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.bytestream.ReadRequest} returns this
 */
proto.google.bytestream.ReadRequest.prototype.setReadOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 read_limit = 3;
 * @return {number}
 */
proto.google.bytestream.ReadRequest.prototype.getReadLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.bytestream.ReadRequest} returns this
 */
proto.google.bytestream.ReadRequest.prototype.setReadLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.google.bytestream.ReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.ReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.ReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.ReadResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.bytestream.ReadResponse}
 */
proto.google.bytestream.ReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.ReadResponse;
  return proto.google.bytestream.ReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.ReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.ReadResponse}
 */
proto.google.bytestream.ReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.bytestream.ReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.ReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.ReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.ReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional bytes data = 10;
 * @return {string}
 */
proto.google.bytestream.ReadResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes data = 10;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.google.bytestream.ReadResponse.prototype.getData_asB64 = function() {
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
proto.google.bytestream.ReadResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.bytestream.ReadResponse} returns this
 */
proto.google.bytestream.ReadResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
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
proto.google.bytestream.WriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.WriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.WriteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.WriteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    writeOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    finishWrite: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
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
 * @return {!proto.google.bytestream.WriteRequest}
 */
proto.google.bytestream.WriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.WriteRequest;
  return proto.google.bytestream.WriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.WriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.WriteRequest}
 */
proto.google.bytestream.WriteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWriteOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinishWrite(value);
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
proto.google.bytestream.WriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.WriteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.WriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.WriteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWriteOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFinishWrite();
  if (f) {
    writer.writeBool(
      3,
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
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.bytestream.WriteRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.bytestream.WriteRequest} returns this
 */
proto.google.bytestream.WriteRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 write_offset = 2;
 * @return {number}
 */
proto.google.bytestream.WriteRequest.prototype.getWriteOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.bytestream.WriteRequest} returns this
 */
proto.google.bytestream.WriteRequest.prototype.setWriteOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool finish_write = 3;
 * @return {boolean}
 */
proto.google.bytestream.WriteRequest.prototype.getFinishWrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.bytestream.WriteRequest} returns this
 */
proto.google.bytestream.WriteRequest.prototype.setFinishWrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bytes data = 10;
 * @return {string}
 */
proto.google.bytestream.WriteRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes data = 10;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.google.bytestream.WriteRequest.prototype.getData_asB64 = function() {
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
proto.google.bytestream.WriteRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.bytestream.WriteRequest} returns this
 */
proto.google.bytestream.WriteRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
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
proto.google.bytestream.WriteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.WriteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.WriteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.WriteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    committedSize: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.bytestream.WriteResponse}
 */
proto.google.bytestream.WriteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.WriteResponse;
  return proto.google.bytestream.WriteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.WriteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.WriteResponse}
 */
proto.google.bytestream.WriteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommittedSize(value);
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
proto.google.bytestream.WriteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.WriteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.WriteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.WriteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommittedSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 committed_size = 1;
 * @return {number}
 */
proto.google.bytestream.WriteResponse.prototype.getCommittedSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.bytestream.WriteResponse} returns this
 */
proto.google.bytestream.WriteResponse.prototype.setCommittedSize = function(value) {
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
proto.google.bytestream.QueryWriteStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.QueryWriteStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.QueryWriteStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.QueryWriteStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.bytestream.QueryWriteStatusRequest}
 */
proto.google.bytestream.QueryWriteStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.QueryWriteStatusRequest;
  return proto.google.bytestream.QueryWriteStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.QueryWriteStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.QueryWriteStatusRequest}
 */
proto.google.bytestream.QueryWriteStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
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
proto.google.bytestream.QueryWriteStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.QueryWriteStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.QueryWriteStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.QueryWriteStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.bytestream.QueryWriteStatusRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.bytestream.QueryWriteStatusRequest} returns this
 */
proto.google.bytestream.QueryWriteStatusRequest.prototype.setResourceName = function(value) {
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
proto.google.bytestream.QueryWriteStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.bytestream.QueryWriteStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.bytestream.QueryWriteStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.QueryWriteStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    committedSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    complete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.bytestream.QueryWriteStatusResponse}
 */
proto.google.bytestream.QueryWriteStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.bytestream.QueryWriteStatusResponse;
  return proto.google.bytestream.QueryWriteStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.bytestream.QueryWriteStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.bytestream.QueryWriteStatusResponse}
 */
proto.google.bytestream.QueryWriteStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommittedSize(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComplete(value);
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
proto.google.bytestream.QueryWriteStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.bytestream.QueryWriteStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.bytestream.QueryWriteStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.bytestream.QueryWriteStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommittedSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getComplete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 committed_size = 1;
 * @return {number}
 */
proto.google.bytestream.QueryWriteStatusResponse.prototype.getCommittedSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.bytestream.QueryWriteStatusResponse} returns this
 */
proto.google.bytestream.QueryWriteStatusResponse.prototype.setCommittedSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool complete = 2;
 * @return {boolean}
 */
proto.google.bytestream.QueryWriteStatusResponse.prototype.getComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.bytestream.QueryWriteStatusResponse} returns this
 */
proto.google.bytestream.QueryWriteStatusResponse.prototype.setComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.google.bytestream);
