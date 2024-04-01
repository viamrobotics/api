// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: component/encoder/v1/encoder.proto

package v1

import (
	v1 "go.viam.com/api/common/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type PositionType int32

const (
	PositionType_POSITION_TYPE_UNSPECIFIED PositionType = 0
	// Return type for relative encoders that report
	// how far they've gone from a start position
	PositionType_POSITION_TYPE_TICKS_COUNT PositionType = 1
	// Return type for absolute encoders that report
	// their position in degrees along the radial axis
	PositionType_POSITION_TYPE_ANGLE_DEGREES PositionType = 2
)

// Enum value maps for PositionType.
var (
	PositionType_name = map[int32]string{
		0: "POSITION_TYPE_UNSPECIFIED",
		1: "POSITION_TYPE_TICKS_COUNT",
		2: "POSITION_TYPE_ANGLE_DEGREES",
	}
	PositionType_value = map[string]int32{
		"POSITION_TYPE_UNSPECIFIED":   0,
		"POSITION_TYPE_TICKS_COUNT":   1,
		"POSITION_TYPE_ANGLE_DEGREES": 2,
	}
)

func (x PositionType) Enum() *PositionType {
	p := new(PositionType)
	*p = x
	return p
}

func (x PositionType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PositionType) Descriptor() protoreflect.EnumDescriptor {
	return file_component_encoder_v1_encoder_proto_enumTypes[0].Descriptor()
}

func (PositionType) Type() protoreflect.EnumType {
	return &file_component_encoder_v1_encoder_proto_enumTypes[0]
}

func (x PositionType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PositionType.Descriptor instead.
func (PositionType) EnumDescriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{0}
}

type GetPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of encoder
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// If supplied, the response will return the specified
	// position type. If the driver does not implement
	// the requested type, this call will return an error.
	// If position type is not specified, the response
	// will return a default according to the driver.
	PositionType *PositionType `protobuf:"varint,2,opt,name=position_type,json=positionType,proto3,enum=viam.component.encoder.v1.PositionType,oneof" json:"position_type,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GetPositionRequest) Reset() {
	*x = GetPositionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionRequest) ProtoMessage() {}

func (x *GetPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPositionRequest.ProtoReflect.Descriptor instead.
func (*GetPositionRequest) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{0}
}

func (x *GetPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetPositionRequest) GetPositionType() PositionType {
	if x != nil && x.PositionType != nil {
		return *x.PositionType
	}
	return PositionType_POSITION_TYPE_UNSPECIFIED
}

func (x *GetPositionRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type GetPositionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value        float32      `protobuf:"fixed32,1,opt,name=value,proto3" json:"value,omitempty"`
	PositionType PositionType `protobuf:"varint,2,opt,name=position_type,json=positionType,proto3,enum=viam.component.encoder.v1.PositionType" json:"position_type,omitempty"`
}

func (x *GetPositionResponse) Reset() {
	*x = GetPositionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionResponse) ProtoMessage() {}

func (x *GetPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPositionResponse.ProtoReflect.Descriptor instead.
func (*GetPositionResponse) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{1}
}

func (x *GetPositionResponse) GetValue() float32 {
	if x != nil {
		return x.Value
	}
	return 0
}

func (x *GetPositionResponse) GetPositionType() PositionType {
	if x != nil {
		return x.PositionType
	}
	return PositionType_POSITION_TYPE_UNSPECIFIED
}

type ResetPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of an encoder
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *ResetPositionRequest) Reset() {
	*x = ResetPositionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResetPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResetPositionRequest) ProtoMessage() {}

func (x *ResetPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResetPositionRequest.ProtoReflect.Descriptor instead.
func (*ResetPositionRequest) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{2}
}

func (x *ResetPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ResetPositionRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type ResetPositionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ResetPositionResponse) Reset() {
	*x = ResetPositionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResetPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResetPositionResponse) ProtoMessage() {}

func (x *ResetPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResetPositionResponse.ProtoReflect.Descriptor instead.
func (*ResetPositionResponse) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{3}
}

type GetPropertiesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the encoder
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GetPropertiesRequest) Reset() {
	*x = GetPropertiesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPropertiesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPropertiesRequest) ProtoMessage() {}

func (x *GetPropertiesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPropertiesRequest.ProtoReflect.Descriptor instead.
func (*GetPropertiesRequest) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{4}
}

func (x *GetPropertiesRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetPropertiesRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type GetPropertiesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TicksCountSupported   bool `protobuf:"varint,1,opt,name=ticks_count_supported,json=ticksCountSupported,proto3" json:"ticks_count_supported,omitempty"`
	AngleDegreesSupported bool `protobuf:"varint,2,opt,name=angle_degrees_supported,json=angleDegreesSupported,proto3" json:"angle_degrees_supported,omitempty"`
}

func (x *GetPropertiesResponse) Reset() {
	*x = GetPropertiesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_encoder_v1_encoder_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPropertiesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPropertiesResponse) ProtoMessage() {}

func (x *GetPropertiesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_encoder_v1_encoder_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPropertiesResponse.ProtoReflect.Descriptor instead.
func (*GetPropertiesResponse) Descriptor() ([]byte, []int) {
	return file_component_encoder_v1_encoder_proto_rawDescGZIP(), []int{5}
}

func (x *GetPropertiesResponse) GetTicksCountSupported() bool {
	if x != nil {
		return x.TicksCountSupported
	}
	return false
}

func (x *GetPropertiesResponse) GetAngleDegreesSupported() bool {
	if x != nil {
		return x.AngleDegreesSupported
	}
	return false
}

var File_component_encoder_v1_encoder_proto protoreflect.FileDescriptor

var file_component_encoder_v1_encoder_proto_rawDesc = []byte{
	0x0a, 0x22, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f,
	0x64, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x1a,
	0x16, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xbc, 0x01, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x51,
	0x0a, 0x0d, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76,
	0x31, 0x2e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x48, 0x00,
	0x52, 0x0c, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x88, 0x01,
	0x01, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61,
	0x42, 0x10, 0x0a, 0x0e, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79,
	0x70, 0x65, 0x22, 0x79, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12,
	0x4c, 0x0a, 0x0d, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x0c, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x59, 0x0a,
	0x14, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74,
	0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63,
	0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x17, 0x0a, 0x15, 0x52, 0x65, 0x73, 0x65,
	0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x59, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69,
	0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a,
	0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53,
	0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x83, 0x01, 0x0a,
	0x15, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x32, 0x0a, 0x15, 0x74, 0x69, 0x63, 0x6b, 0x73, 0x5f,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x13, 0x74, 0x69, 0x63, 0x6b, 0x73, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x12, 0x36, 0x0a, 0x17, 0x61, 0x6e,
	0x67, 0x6c, 0x65, 0x5f, 0x64, 0x65, 0x67, 0x72, 0x65, 0x65, 0x73, 0x5f, 0x73, 0x75, 0x70, 0x70,
	0x6f, 0x72, 0x74, 0x65, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x15, 0x61, 0x6e, 0x67,
	0x6c, 0x65, 0x44, 0x65, 0x67, 0x72, 0x65, 0x65, 0x73, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74,
	0x65, 0x64, 0x2a, 0x6d, 0x0a, 0x0c, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x1d, 0x0a, 0x19, 0x50, 0x4f, 0x53, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10,
	0x00, 0x12, 0x1d, 0x0a, 0x19, 0x50, 0x4f, 0x53, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x54, 0x49, 0x43, 0x4b, 0x53, 0x5f, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x10, 0x01,
	0x12, 0x1f, 0x0a, 0x1b, 0x50, 0x4f, 0x53, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x41, 0x4e, 0x47, 0x4c, 0x45, 0x5f, 0x44, 0x45, 0x47, 0x52, 0x45, 0x45, 0x53, 0x10,
	0x02, 0x32, 0xc7, 0x06, 0x0a, 0x0e, 0x45, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0xa8, 0x01, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31,
	0x2e, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e,
	0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x3a, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x34, 0x12, 0x32, 0x2f, 0x76, 0x69,
	0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d,
	0x65, 0x7d, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0xb0, 0x01, 0x0a, 0x0d, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x2f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65,
	0x73, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x30, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x52,
	0x65, 0x73, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x3c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x36, 0x12, 0x34, 0x2f, 0x76,
	0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61,
	0x6d, 0x65, 0x7d, 0x2f, 0x72, 0x65, 0x73, 0x65, 0x74, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0xb0, 0x01, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72,
	0x74, 0x69, 0x65, 0x73, 0x12, 0x2f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31,
	0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76,
	0x31, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x3c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x36, 0x22,
	0x34, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2f,
	0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x70, 0x65,
	0x72, 0x74, 0x69, 0x65, 0x73, 0x12, 0x8a, 0x01, 0x0a, 0x09, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x12, 0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x38, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x32,
	0x22, 0x30, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63,
	0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72,
	0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x64, 0x6f, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61,
	0x6e, 0x64, 0x12, 0x96, 0x01, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x65, 0x73, 0x12, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72,
	0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47,
	0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x38, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x32, 0x12, 0x30, 0x2f, 0x76, 0x69, 0x61, 0x6d,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d,
	0x2f, 0x67, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x42, 0x45, 0x0a, 0x1d, 0x63,
	0x6f, 0x6d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x5a, 0x24, 0x67, 0x6f,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x2f,
	0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_component_encoder_v1_encoder_proto_rawDescOnce sync.Once
	file_component_encoder_v1_encoder_proto_rawDescData = file_component_encoder_v1_encoder_proto_rawDesc
)

func file_component_encoder_v1_encoder_proto_rawDescGZIP() []byte {
	file_component_encoder_v1_encoder_proto_rawDescOnce.Do(func() {
		file_component_encoder_v1_encoder_proto_rawDescData = protoimpl.X.CompressGZIP(file_component_encoder_v1_encoder_proto_rawDescData)
	})
	return file_component_encoder_v1_encoder_proto_rawDescData
}

var file_component_encoder_v1_encoder_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_component_encoder_v1_encoder_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_component_encoder_v1_encoder_proto_goTypes = []interface{}{
	(PositionType)(0),                // 0: viam.component.encoder.v1.PositionType
	(*GetPositionRequest)(nil),       // 1: viam.component.encoder.v1.GetPositionRequest
	(*GetPositionResponse)(nil),      // 2: viam.component.encoder.v1.GetPositionResponse
	(*ResetPositionRequest)(nil),     // 3: viam.component.encoder.v1.ResetPositionRequest
	(*ResetPositionResponse)(nil),    // 4: viam.component.encoder.v1.ResetPositionResponse
	(*GetPropertiesRequest)(nil),     // 5: viam.component.encoder.v1.GetPropertiesRequest
	(*GetPropertiesResponse)(nil),    // 6: viam.component.encoder.v1.GetPropertiesResponse
	(*structpb.Struct)(nil),          // 7: google.protobuf.Struct
	(*v1.DoCommandRequest)(nil),      // 8: viam.common.v1.DoCommandRequest
	(*v1.GetGeometriesRequest)(nil),  // 9: viam.common.v1.GetGeometriesRequest
	(*v1.DoCommandResponse)(nil),     // 10: viam.common.v1.DoCommandResponse
	(*v1.GetGeometriesResponse)(nil), // 11: viam.common.v1.GetGeometriesResponse
}
var file_component_encoder_v1_encoder_proto_depIdxs = []int32{
	0,  // 0: viam.component.encoder.v1.GetPositionRequest.position_type:type_name -> viam.component.encoder.v1.PositionType
	7,  // 1: viam.component.encoder.v1.GetPositionRequest.extra:type_name -> google.protobuf.Struct
	0,  // 2: viam.component.encoder.v1.GetPositionResponse.position_type:type_name -> viam.component.encoder.v1.PositionType
	7,  // 3: viam.component.encoder.v1.ResetPositionRequest.extra:type_name -> google.protobuf.Struct
	7,  // 4: viam.component.encoder.v1.GetPropertiesRequest.extra:type_name -> google.protobuf.Struct
	1,  // 5: viam.component.encoder.v1.EncoderService.GetPosition:input_type -> viam.component.encoder.v1.GetPositionRequest
	3,  // 6: viam.component.encoder.v1.EncoderService.ResetPosition:input_type -> viam.component.encoder.v1.ResetPositionRequest
	5,  // 7: viam.component.encoder.v1.EncoderService.GetProperties:input_type -> viam.component.encoder.v1.GetPropertiesRequest
	8,  // 8: viam.component.encoder.v1.EncoderService.DoCommand:input_type -> viam.common.v1.DoCommandRequest
	9,  // 9: viam.component.encoder.v1.EncoderService.GetGeometries:input_type -> viam.common.v1.GetGeometriesRequest
	2,  // 10: viam.component.encoder.v1.EncoderService.GetPosition:output_type -> viam.component.encoder.v1.GetPositionResponse
	4,  // 11: viam.component.encoder.v1.EncoderService.ResetPosition:output_type -> viam.component.encoder.v1.ResetPositionResponse
	6,  // 12: viam.component.encoder.v1.EncoderService.GetProperties:output_type -> viam.component.encoder.v1.GetPropertiesResponse
	10, // 13: viam.component.encoder.v1.EncoderService.DoCommand:output_type -> viam.common.v1.DoCommandResponse
	11, // 14: viam.component.encoder.v1.EncoderService.GetGeometries:output_type -> viam.common.v1.GetGeometriesResponse
	10, // [10:15] is the sub-list for method output_type
	5,  // [5:10] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_component_encoder_v1_encoder_proto_init() }
func file_component_encoder_v1_encoder_proto_init() {
	if File_component_encoder_v1_encoder_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_component_encoder_v1_encoder_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPositionRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_encoder_v1_encoder_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPositionResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_encoder_v1_encoder_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResetPositionRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_encoder_v1_encoder_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResetPositionResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_encoder_v1_encoder_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPropertiesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_encoder_v1_encoder_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPropertiesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_component_encoder_v1_encoder_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_component_encoder_v1_encoder_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_encoder_v1_encoder_proto_goTypes,
		DependencyIndexes: file_component_encoder_v1_encoder_proto_depIdxs,
		EnumInfos:         file_component_encoder_v1_encoder_proto_enumTypes,
		MessageInfos:      file_component_encoder_v1_encoder_proto_msgTypes,
	}.Build()
	File_component_encoder_v1_encoder_proto = out.File
	file_component_encoder_v1_encoder_proto_rawDesc = nil
	file_component_encoder_v1_encoder_proto_goTypes = nil
	file_component_encoder_v1_encoder_proto_depIdxs = nil
}
