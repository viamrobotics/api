// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: component/base/v1/base.proto

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

type MoveStraightRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a base
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Desired travel distance in millimeters
	DistanceMm int64 `protobuf:"varint,2,opt,name=distance_mm,json=distanceMm,proto3" json:"distance_mm,omitempty"`
	// Desired travel velocity in millimeters/second
	MmPerSec float64 `protobuf:"fixed64,3,opt,name=mm_per_sec,json=mmPerSec,proto3" json:"mm_per_sec,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *MoveStraightRequest) Reset() {
	*x = MoveStraightRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MoveStraightRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveStraightRequest) ProtoMessage() {}

func (x *MoveStraightRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveStraightRequest.ProtoReflect.Descriptor instead.
func (*MoveStraightRequest) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{0}
}

func (x *MoveStraightRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MoveStraightRequest) GetDistanceMm() int64 {
	if x != nil {
		return x.DistanceMm
	}
	return 0
}

func (x *MoveStraightRequest) GetMmPerSec() float64 {
	if x != nil {
		return x.MmPerSec
	}
	return 0
}

func (x *MoveStraightRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type MoveStraightResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MoveStraightResponse) Reset() {
	*x = MoveStraightResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MoveStraightResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveStraightResponse) ProtoMessage() {}

func (x *MoveStraightResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveStraightResponse.ProtoReflect.Descriptor instead.
func (*MoveStraightResponse) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{1}
}

type SpinRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a base
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Desired angle
	AngleDeg float64 `protobuf:"fixed64,2,opt,name=angle_deg,json=angleDeg,proto3" json:"angle_deg,omitempty"`
	// Desired angular velocity
	DegsPerSec float64 `protobuf:"fixed64,3,opt,name=degs_per_sec,json=degsPerSec,proto3" json:"degs_per_sec,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *SpinRequest) Reset() {
	*x = SpinRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpinRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpinRequest) ProtoMessage() {}

func (x *SpinRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpinRequest.ProtoReflect.Descriptor instead.
func (*SpinRequest) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{2}
}

func (x *SpinRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SpinRequest) GetAngleDeg() float64 {
	if x != nil {
		return x.AngleDeg
	}
	return 0
}

func (x *SpinRequest) GetDegsPerSec() float64 {
	if x != nil {
		return x.DegsPerSec
	}
	return 0
}

func (x *SpinRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type SpinResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SpinResponse) Reset() {
	*x = SpinResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpinResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpinResponse) ProtoMessage() {}

func (x *SpinResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpinResponse.ProtoReflect.Descriptor instead.
func (*SpinResponse) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{3}
}

type StopRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a base
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *StopRequest) Reset() {
	*x = StopRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRequest) ProtoMessage() {}

func (x *StopRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopRequest.ProtoReflect.Descriptor instead.
func (*StopRequest) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{4}
}

func (x *StopRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *StopRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type StopResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *StopResponse) Reset() {
	*x = StopResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopResponse) ProtoMessage() {}

func (x *StopResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopResponse.ProtoReflect.Descriptor instead.
func (*StopResponse) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{5}
}

type SetPowerRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a base
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Desired linear power percentage as -1 -> 1
	Linear *v1.Vector3 `protobuf:"bytes,2,opt,name=linear,proto3" json:"linear,omitempty"`
	// Desired angular power percentage % as -1 -> 1
	Angular *v1.Vector3 `protobuf:"bytes,3,opt,name=angular,proto3" json:"angular,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *SetPowerRequest) Reset() {
	*x = SetPowerRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SetPowerRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetPowerRequest) ProtoMessage() {}

func (x *SetPowerRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetPowerRequest.ProtoReflect.Descriptor instead.
func (*SetPowerRequest) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{6}
}

func (x *SetPowerRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SetPowerRequest) GetLinear() *v1.Vector3 {
	if x != nil {
		return x.Linear
	}
	return nil
}

func (x *SetPowerRequest) GetAngular() *v1.Vector3 {
	if x != nil {
		return x.Angular
	}
	return nil
}

func (x *SetPowerRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type SetPowerResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SetPowerResponse) Reset() {
	*x = SetPowerResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SetPowerResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetPowerResponse) ProtoMessage() {}

func (x *SetPowerResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetPowerResponse.ProtoReflect.Descriptor instead.
func (*SetPowerResponse) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{7}
}

type SetVelocityRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a base
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Desired linear velocity in mm per second
	Linear *v1.Vector3 `protobuf:"bytes,2,opt,name=linear,proto3" json:"linear,omitempty"`
	// Desired angular velocity in degrees per second
	Angular *v1.Vector3 `protobuf:"bytes,3,opt,name=angular,proto3" json:"angular,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *SetVelocityRequest) Reset() {
	*x = SetVelocityRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SetVelocityRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetVelocityRequest) ProtoMessage() {}

func (x *SetVelocityRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetVelocityRequest.ProtoReflect.Descriptor instead.
func (*SetVelocityRequest) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{8}
}

func (x *SetVelocityRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SetVelocityRequest) GetLinear() *v1.Vector3 {
	if x != nil {
		return x.Linear
	}
	return nil
}

func (x *SetVelocityRequest) GetAngular() *v1.Vector3 {
	if x != nil {
		return x.Angular
	}
	return nil
}

func (x *SetVelocityRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type SetVelocityResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SetVelocityResponse) Reset() {
	*x = SetVelocityResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_base_v1_base_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SetVelocityResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetVelocityResponse) ProtoMessage() {}

func (x *SetVelocityResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_base_v1_base_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetVelocityResponse.ProtoReflect.Descriptor instead.
func (*SetVelocityResponse) Descriptor() ([]byte, []int) {
	return file_component_base_v1_base_proto_rawDescGZIP(), []int{9}
}

var File_component_base_v1_base_proto protoreflect.FileDescriptor

var file_component_base_v1_base_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x73, 0x65,
	0x2f, 0x76, 0x31, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74,
	0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x97, 0x01, 0x0a, 0x13, 0x4d,
	0x6f, 0x76, 0x65, 0x53, 0x74, 0x72, 0x61, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x69, 0x73, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x5f, 0x6d, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x64, 0x69, 0x73,
	0x74, 0x61, 0x6e, 0x63, 0x65, 0x4d, 0x6d, 0x12, 0x1c, 0x0a, 0x0a, 0x6d, 0x6d, 0x5f, 0x70, 0x65,
	0x72, 0x5f, 0x73, 0x65, 0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x6d, 0x6d, 0x50,
	0x65, 0x72, 0x53, 0x65, 0x63, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65,
	0x78, 0x74, 0x72, 0x61, 0x22, 0x16, 0x0a, 0x14, 0x4d, 0x6f, 0x76, 0x65, 0x53, 0x74, 0x72, 0x61,
	0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x8f, 0x01, 0x0a,
	0x0b, 0x53, 0x70, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x1b, 0x0a, 0x09, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x5f, 0x64, 0x65, 0x67, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x08, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x44, 0x65, 0x67, 0x12, 0x20, 0x0a,
	0x0c, 0x64, 0x65, 0x67, 0x73, 0x5f, 0x70, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x63, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x0a, 0x64, 0x65, 0x67, 0x73, 0x50, 0x65, 0x72, 0x53, 0x65, 0x63, 0x12,
	0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x0e,
	0x0a, 0x0c, 0x53, 0x70, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x50,
	0x0a, 0x0b, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61,
	0x22, 0x0e, 0x0a, 0x0c, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0xb8, 0x01, 0x0a, 0x0f, 0x53, 0x65, 0x74, 0x50, 0x6f, 0x77, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2f, 0x0a, 0x06, 0x6c, 0x69, 0x6e, 0x65,
	0x61, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x33, 0x52, 0x06, 0x6c, 0x69, 0x6e, 0x65, 0x61, 0x72, 0x12, 0x31, 0x0a, 0x07, 0x61, 0x6e, 0x67,
	0x75, 0x6c, 0x61, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x33, 0x52, 0x07, 0x61, 0x6e, 0x67, 0x75, 0x6c, 0x61, 0x72, 0x12, 0x2d, 0x0a, 0x05,
	0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74,
	0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x12, 0x0a, 0x10, 0x53,
	0x65, 0x74, 0x50, 0x6f, 0x77, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0xbb, 0x01, 0x0a, 0x12, 0x53, 0x65, 0x74, 0x56, 0x65, 0x6c, 0x6f, 0x63, 0x69, 0x74, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2f, 0x0a, 0x06, 0x6c, 0x69,
	0x6e, 0x65, 0x61, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x33, 0x52, 0x06, 0x6c, 0x69, 0x6e, 0x65, 0x61, 0x72, 0x12, 0x31, 0x0a, 0x07, 0x61,
	0x6e, 0x67, 0x75, 0x6c, 0x61, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65,
	0x63, 0x74, 0x6f, 0x72, 0x33, 0x52, 0x07, 0x61, 0x6e, 0x67, 0x75, 0x6c, 0x61, 0x72, 0x12, 0x2d,
	0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x15, 0x0a,
	0x13, 0x53, 0x65, 0x74, 0x56, 0x65, 0x6c, 0x6f, 0x63, 0x69, 0x74, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x32, 0xf5, 0x05, 0x0a, 0x0b, 0x42, 0x61, 0x73, 0x65, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0xa3, 0x01, 0x0a, 0x0c, 0x4d, 0x6f, 0x76, 0x65, 0x53, 0x74, 0x72,
	0x61, 0x69, 0x67, 0x68, 0x74, 0x12, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4d,
	0x6f, 0x76, 0x65, 0x53, 0x74, 0x72, 0x61, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x65,
	0x53, 0x74, 0x72, 0x61, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x38, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x32, 0x22, 0x30, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74,
	0x2f, 0x62, 0x61, 0x73, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x6d, 0x6f, 0x76,
	0x65, 0x5f, 0x73, 0x74, 0x72, 0x61, 0x69, 0x67, 0x68, 0x74, 0x12, 0x82, 0x01, 0x0a, 0x04, 0x53,
	0x70, 0x69, 0x6e, 0x12, 0x23, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x70, 0x69,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x53, 0x70, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2f,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x29, 0x22, 0x27, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x62,
	0x61, 0x73, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x70, 0x69, 0x6e, 0x12,
	0x93, 0x01, 0x0a, 0x08, 0x53, 0x65, 0x74, 0x50, 0x6f, 0x77, 0x65, 0x72, 0x12, 0x27, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x74, 0x50, 0x6f, 0x77, 0x65, 0x72, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x65, 0x74, 0x50, 0x6f, 0x77, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x34, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2e, 0x22, 0x2c, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f,
	0x62, 0x61, 0x73, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x65, 0x74, 0x5f,
	0x70, 0x6f, 0x77, 0x65, 0x72, 0x12, 0x9f, 0x01, 0x0a, 0x0b, 0x53, 0x65, 0x74, 0x56, 0x65, 0x6c,
	0x6f, 0x63, 0x69, 0x74, 0x79, 0x12, 0x2a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x65, 0x74, 0x56, 0x65, 0x6c, 0x6f, 0x63, 0x69, 0x74, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x74, 0x56, 0x65,
	0x6c, 0x6f, 0x63, 0x69, 0x74, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x37,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x22, 0x2f, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x62,
	0x61, 0x73, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x65, 0x74, 0x5f, 0x76,
	0x65, 0x6c, 0x6f, 0x63, 0x69, 0x74, 0x79, 0x12, 0x82, 0x01, 0x0a, 0x04, 0x53, 0x74, 0x6f, 0x70,
	0x12, 0x23, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2f, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x29, 0x22, 0x27, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x73, 0x65,
	0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x74, 0x6f, 0x70, 0x42, 0x3f, 0x0a, 0x1a,
	0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x5a, 0x21, 0x67, 0x6f, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_component_base_v1_base_proto_rawDescOnce sync.Once
	file_component_base_v1_base_proto_rawDescData = file_component_base_v1_base_proto_rawDesc
)

func file_component_base_v1_base_proto_rawDescGZIP() []byte {
	file_component_base_v1_base_proto_rawDescOnce.Do(func() {
		file_component_base_v1_base_proto_rawDescData = protoimpl.X.CompressGZIP(file_component_base_v1_base_proto_rawDescData)
	})
	return file_component_base_v1_base_proto_rawDescData
}

var file_component_base_v1_base_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_component_base_v1_base_proto_goTypes = []interface{}{
	(*MoveStraightRequest)(nil),  // 0: viam.component.base.v1.MoveStraightRequest
	(*MoveStraightResponse)(nil), // 1: viam.component.base.v1.MoveStraightResponse
	(*SpinRequest)(nil),          // 2: viam.component.base.v1.SpinRequest
	(*SpinResponse)(nil),         // 3: viam.component.base.v1.SpinResponse
	(*StopRequest)(nil),          // 4: viam.component.base.v1.StopRequest
	(*StopResponse)(nil),         // 5: viam.component.base.v1.StopResponse
	(*SetPowerRequest)(nil),      // 6: viam.component.base.v1.SetPowerRequest
	(*SetPowerResponse)(nil),     // 7: viam.component.base.v1.SetPowerResponse
	(*SetVelocityRequest)(nil),   // 8: viam.component.base.v1.SetVelocityRequest
	(*SetVelocityResponse)(nil),  // 9: viam.component.base.v1.SetVelocityResponse
	(*structpb.Struct)(nil),      // 10: google.protobuf.Struct
	(*v1.Vector3)(nil),           // 11: viam.common.v1.Vector3
}
var file_component_base_v1_base_proto_depIdxs = []int32{
	10, // 0: viam.component.base.v1.MoveStraightRequest.extra:type_name -> google.protobuf.Struct
	10, // 1: viam.component.base.v1.SpinRequest.extra:type_name -> google.protobuf.Struct
	10, // 2: viam.component.base.v1.StopRequest.extra:type_name -> google.protobuf.Struct
	11, // 3: viam.component.base.v1.SetPowerRequest.linear:type_name -> viam.common.v1.Vector3
	11, // 4: viam.component.base.v1.SetPowerRequest.angular:type_name -> viam.common.v1.Vector3
	10, // 5: viam.component.base.v1.SetPowerRequest.extra:type_name -> google.protobuf.Struct
	11, // 6: viam.component.base.v1.SetVelocityRequest.linear:type_name -> viam.common.v1.Vector3
	11, // 7: viam.component.base.v1.SetVelocityRequest.angular:type_name -> viam.common.v1.Vector3
	10, // 8: viam.component.base.v1.SetVelocityRequest.extra:type_name -> google.protobuf.Struct
	0,  // 9: viam.component.base.v1.BaseService.MoveStraight:input_type -> viam.component.base.v1.MoveStraightRequest
	2,  // 10: viam.component.base.v1.BaseService.Spin:input_type -> viam.component.base.v1.SpinRequest
	6,  // 11: viam.component.base.v1.BaseService.SetPower:input_type -> viam.component.base.v1.SetPowerRequest
	8,  // 12: viam.component.base.v1.BaseService.SetVelocity:input_type -> viam.component.base.v1.SetVelocityRequest
	4,  // 13: viam.component.base.v1.BaseService.Stop:input_type -> viam.component.base.v1.StopRequest
	1,  // 14: viam.component.base.v1.BaseService.MoveStraight:output_type -> viam.component.base.v1.MoveStraightResponse
	3,  // 15: viam.component.base.v1.BaseService.Spin:output_type -> viam.component.base.v1.SpinResponse
	7,  // 16: viam.component.base.v1.BaseService.SetPower:output_type -> viam.component.base.v1.SetPowerResponse
	9,  // 17: viam.component.base.v1.BaseService.SetVelocity:output_type -> viam.component.base.v1.SetVelocityResponse
	5,  // 18: viam.component.base.v1.BaseService.Stop:output_type -> viam.component.base.v1.StopResponse
	14, // [14:19] is the sub-list for method output_type
	9,  // [9:14] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_component_base_v1_base_proto_init() }
func file_component_base_v1_base_proto_init() {
	if File_component_base_v1_base_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_component_base_v1_base_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MoveStraightRequest); i {
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
		file_component_base_v1_base_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MoveStraightResponse); i {
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
		file_component_base_v1_base_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpinRequest); i {
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
		file_component_base_v1_base_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpinResponse); i {
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
		file_component_base_v1_base_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopRequest); i {
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
		file_component_base_v1_base_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopResponse); i {
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
		file_component_base_v1_base_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SetPowerRequest); i {
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
		file_component_base_v1_base_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SetPowerResponse); i {
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
		file_component_base_v1_base_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SetVelocityRequest); i {
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
		file_component_base_v1_base_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SetVelocityResponse); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_component_base_v1_base_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_base_v1_base_proto_goTypes,
		DependencyIndexes: file_component_base_v1_base_proto_depIdxs,
		MessageInfos:      file_component_base_v1_base_proto_msgTypes,
	}.Build()
	File_component_base_v1_base_proto = out.File
	file_component_base_v1_base_proto_rawDesc = nil
	file_component_base_v1_base_proto_goTypes = nil
	file_component_base_v1_base_proto_depIdxs = nil
}
