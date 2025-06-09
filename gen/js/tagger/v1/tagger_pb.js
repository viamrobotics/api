// source: tagger/v1/tagger.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.tagger.v1.oneofTags', null, global);
goog.exportSymbol('proto.tagger.v1.tags', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `tags`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.tagger.v1.tags = new jspb.ExtensionFieldInfo(
    847939,
    {tags: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[847939] = new jspb.ExtensionFieldBinaryInfo(
    proto.tagger.v1.tags,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[847939] = proto.tagger.v1.tags;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofTags`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.tagger.v1.oneofTags = new jspb.ExtensionFieldInfo(
    847939,
    {oneofTags: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.OneofOptions.extensionsBinary[847939] = new jspb.ExtensionFieldBinaryInfo(
    proto.tagger.v1.oneofTags,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.OneofOptions.extensions[847939] = proto.tagger.v1.oneofTags;

goog.object.extend(exports, proto.tagger.v1);
