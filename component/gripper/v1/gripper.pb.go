// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: component/gripper/v1/gripper.proto

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

type OpenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string           `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *OpenRequest) Reset() {
	*x = OpenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OpenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OpenRequest) ProtoMessage() {}

func (x *OpenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OpenRequest.ProtoReflect.Descriptor instead.
func (*OpenRequest) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{0}
}

func (x *OpenRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *OpenRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type OpenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *OpenResponse) Reset() {
	*x = OpenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OpenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OpenResponse) ProtoMessage() {}

func (x *OpenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OpenResponse.ProtoReflect.Descriptor instead.
func (*OpenResponse) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{1}
}

type GrabRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string           `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GrabRequest) Reset() {
	*x = GrabRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GrabRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GrabRequest) ProtoMessage() {}

func (x *GrabRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GrabRequest.ProtoReflect.Descriptor instead.
func (*GrabRequest) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{2}
}

func (x *GrabRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GrabRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type GrabResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool             `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	Extra   *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GrabResponse) Reset() {
	*x = GrabResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GrabResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GrabResponse) ProtoMessage() {}

func (x *GrabResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GrabResponse.ProtoReflect.Descriptor instead.
func (*GrabResponse) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{3}
}

func (x *GrabResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

func (x *GrabResponse) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type StopRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a gripper
	Name  string           `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *StopRequest) Reset() {
	*x = StopRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRequest) ProtoMessage() {}

func (x *StopRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[4]
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
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{4}
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
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopResponse) ProtoMessage() {}

func (x *StopResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[5]
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
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{5}
}

type IsMovingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *IsMovingRequest) Reset() {
	*x = IsMovingRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsMovingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingRequest) ProtoMessage() {}

func (x *IsMovingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsMovingRequest.ProtoReflect.Descriptor instead.
func (*IsMovingRequest) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{6}
}

func (x *IsMovingRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type IsMovingResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IsMoving bool `protobuf:"varint,1,opt,name=is_moving,json=isMoving,proto3" json:"is_moving,omitempty"`
}

func (x *IsMovingResponse) Reset() {
	*x = IsMovingResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_gripper_v1_gripper_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsMovingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingResponse) ProtoMessage() {}

func (x *IsMovingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gripper_v1_gripper_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsMovingResponse.ProtoReflect.Descriptor instead.
func (*IsMovingResponse) Descriptor() ([]byte, []int) {
	return file_component_gripper_v1_gripper_proto_rawDescGZIP(), []int{7}
}

func (x *IsMovingResponse) GetIsMoving() bool {
	if x != nil {
		return x.IsMoving
	}
	return false
}

var File_component_gripper_v1_gripper_proto protoreflect.FileDescriptor

var file_component_gripper_v1_gripper_proto_rawDesc = []byte{
	0x0a, 0x22, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72, 0x69, 0x70,
	0x70, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x1a,
	0x16, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x50, 0x0a, 0x0b, 0x4f, 0x70, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18,
	0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05,
	0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x0e, 0x0a, 0x0c, 0x4f, 0x70, 0x65, 0x6e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x50, 0x0a, 0x0b, 0x47, 0x72, 0x61, 0x62, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72,
	0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74,
	0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x57, 0x0a, 0x0c, 0x47, 0x72, 0x61, 0x62, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61,
	0x22, 0x50, 0x0a, 0x0b, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74,
	0x72, 0x61, 0x22, 0x0e, 0x0a, 0x0c, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x25, 0x0a, 0x0f, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x2f, 0x0a, 0x10, 0x49, 0x73, 0x4d,
	0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a,
	0x09, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x08, 0x69, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x32, 0xee, 0x05, 0x0a, 0x0e, 0x47,
	0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x8f, 0x01,
	0x0a, 0x04, 0x4f, 0x70, 0x65, 0x6e, 0x12, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e,
	0x76, 0x31, 0x2e, 0x4f, 0x70, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e,
	0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x70, 0x65, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x36, 0xa0, 0x92, 0x29, 0x01, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x2c, 0x1a, 0x2a, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72, 0x69, 0x70,
	0x70, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x6f, 0x70, 0x65, 0x6e, 0x12,
	0x8f, 0x01, 0x0a, 0x04, 0x47, 0x72, 0x61, 0x62, 0x12, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65,
	0x72, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x72, 0x61, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x27, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x72, 0x61,
	0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x36, 0xa0, 0x92, 0x29, 0x01, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x2c, 0x1a, 0x2a, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72,
	0x69, 0x70, 0x70, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x67, 0x72, 0x61,
	0x62, 0x12, 0x8b, 0x01, 0x0a, 0x04, 0x53, 0x74, 0x6f, 0x70, 0x12, 0x26, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70,
	0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x27, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x32, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x2c, 0x22, 0x2a, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72, 0x69, 0x70,
	0x70, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x74, 0x6f, 0x70, 0x12,
	0x9c, 0x01, 0x0a, 0x08, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x12, 0x2a, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72,
	0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e,
	0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65,
	0x72, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x37, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x12, 0x2f, 0x2f,
	0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2f, 0x7b, 0x6e,
	0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x12, 0x8a,
	0x01, 0x0a, 0x09, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x20, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e,
	0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x38, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x32, 0x22, 0x30, 0x2f, 0x76, 0x69, 0x61, 0x6d,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2f, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d,
	0x2f, 0x64, 0x6f, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x42, 0x45, 0x0a, 0x1d, 0x63,
	0x6f, 0x6d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x5a, 0x24, 0x67, 0x6f,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x72, 0x69, 0x70, 0x70, 0x65, 0x72, 0x2f,
	0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_component_gripper_v1_gripper_proto_rawDescOnce sync.Once
	file_component_gripper_v1_gripper_proto_rawDescData = file_component_gripper_v1_gripper_proto_rawDesc
)

func file_component_gripper_v1_gripper_proto_rawDescGZIP() []byte {
	file_component_gripper_v1_gripper_proto_rawDescOnce.Do(func() {
		file_component_gripper_v1_gripper_proto_rawDescData = protoimpl.X.CompressGZIP(file_component_gripper_v1_gripper_proto_rawDescData)
	})
	return file_component_gripper_v1_gripper_proto_rawDescData
}

var file_component_gripper_v1_gripper_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_component_gripper_v1_gripper_proto_goTypes = []interface{}{
	(*OpenRequest)(nil),          // 0: viam.component.gripper.v1.OpenRequest
	(*OpenResponse)(nil),         // 1: viam.component.gripper.v1.OpenResponse
	(*GrabRequest)(nil),          // 2: viam.component.gripper.v1.GrabRequest
	(*GrabResponse)(nil),         // 3: viam.component.gripper.v1.GrabResponse
	(*StopRequest)(nil),          // 4: viam.component.gripper.v1.StopRequest
	(*StopResponse)(nil),         // 5: viam.component.gripper.v1.StopResponse
	(*IsMovingRequest)(nil),      // 6: viam.component.gripper.v1.IsMovingRequest
	(*IsMovingResponse)(nil),     // 7: viam.component.gripper.v1.IsMovingResponse
	(*structpb.Struct)(nil),      // 8: google.protobuf.Struct
	(*v1.DoCommandRequest)(nil),  // 9: viam.common.v1.DoCommandRequest
	(*v1.DoCommandResponse)(nil), // 10: viam.common.v1.DoCommandResponse
}
var file_component_gripper_v1_gripper_proto_depIdxs = []int32{
	8,  // 0: viam.component.gripper.v1.OpenRequest.extra:type_name -> google.protobuf.Struct
	8,  // 1: viam.component.gripper.v1.GrabRequest.extra:type_name -> google.protobuf.Struct
	8,  // 2: viam.component.gripper.v1.GrabResponse.extra:type_name -> google.protobuf.Struct
	8,  // 3: viam.component.gripper.v1.StopRequest.extra:type_name -> google.protobuf.Struct
	0,  // 4: viam.component.gripper.v1.GripperService.Open:input_type -> viam.component.gripper.v1.OpenRequest
	2,  // 5: viam.component.gripper.v1.GripperService.Grab:input_type -> viam.component.gripper.v1.GrabRequest
	4,  // 6: viam.component.gripper.v1.GripperService.Stop:input_type -> viam.component.gripper.v1.StopRequest
	6,  // 7: viam.component.gripper.v1.GripperService.IsMoving:input_type -> viam.component.gripper.v1.IsMovingRequest
	9,  // 8: viam.component.gripper.v1.GripperService.DoCommand:input_type -> viam.common.v1.DoCommandRequest
	1,  // 9: viam.component.gripper.v1.GripperService.Open:output_type -> viam.component.gripper.v1.OpenResponse
	3,  // 10: viam.component.gripper.v1.GripperService.Grab:output_type -> viam.component.gripper.v1.GrabResponse
	5,  // 11: viam.component.gripper.v1.GripperService.Stop:output_type -> viam.component.gripper.v1.StopResponse
	7,  // 12: viam.component.gripper.v1.GripperService.IsMoving:output_type -> viam.component.gripper.v1.IsMovingResponse
	10, // 13: viam.component.gripper.v1.GripperService.DoCommand:output_type -> viam.common.v1.DoCommandResponse
	9,  // [9:14] is the sub-list for method output_type
	4,  // [4:9] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_component_gripper_v1_gripper_proto_init() }
func file_component_gripper_v1_gripper_proto_init() {
	if File_component_gripper_v1_gripper_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_component_gripper_v1_gripper_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OpenRequest); i {
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
		file_component_gripper_v1_gripper_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OpenResponse); i {
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
		file_component_gripper_v1_gripper_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GrabRequest); i {
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
		file_component_gripper_v1_gripper_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GrabResponse); i {
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
		file_component_gripper_v1_gripper_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
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
		file_component_gripper_v1_gripper_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
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
		file_component_gripper_v1_gripper_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsMovingRequest); i {
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
		file_component_gripper_v1_gripper_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsMovingResponse); i {
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
			RawDescriptor: file_component_gripper_v1_gripper_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_gripper_v1_gripper_proto_goTypes,
		DependencyIndexes: file_component_gripper_v1_gripper_proto_depIdxs,
		MessageInfos:      file_component_gripper_v1_gripper_proto_msgTypes,
	}.Build()
	File_component_gripper_v1_gripper_proto = out.File
	file_component_gripper_v1_gripper_proto_rawDesc = nil
	file_component_gripper_v1_gripper_proto_goTypes = nil
	file_component_gripper_v1_gripper_proto_depIdxs = nil
}
