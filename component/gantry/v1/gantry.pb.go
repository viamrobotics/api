// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: component/gantry/v1/gantry.proto

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

type GetPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GetPositionRequest) Reset() {
	*x = GetPositionRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionRequest) ProtoMessage() {}

func (x *GetPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[0]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{0}
}

func (x *GetPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
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

	PositionsMm []float64 `protobuf:"fixed64,1,rep,packed,name=positions_mm,json=positionsMm,proto3" json:"positions_mm,omitempty"`
}

func (x *GetPositionResponse) Reset() {
	*x = GetPositionResponse{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionResponse) ProtoMessage() {}

func (x *GetPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[1]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{1}
}

func (x *GetPositionResponse) GetPositionsMm() []float64 {
	if x != nil {
		return x.PositionsMm
	}
	return nil
}

type MoveToPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Number of millimeters to move the gantry by respective to each axis.
	PositionsMm []float64 `protobuf:"fixed64,2,rep,packed,name=positions_mm,json=positionsMm,proto3" json:"positions_mm,omitempty"`
	// Speeds to move each gantry axis must match length and order of positions_mm.
	SpeedsMmPerSec []float64 `protobuf:"fixed64,3,rep,packed,name=speeds_mm_per_sec,json=speedsMmPerSec,proto3" json:"speeds_mm_per_sec,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *MoveToPositionRequest) Reset() {
	*x = MoveToPositionRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *MoveToPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveToPositionRequest) ProtoMessage() {}

func (x *MoveToPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveToPositionRequest.ProtoReflect.Descriptor instead.
func (*MoveToPositionRequest) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{2}
}

func (x *MoveToPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MoveToPositionRequest) GetPositionsMm() []float64 {
	if x != nil {
		return x.PositionsMm
	}
	return nil
}

func (x *MoveToPositionRequest) GetSpeedsMmPerSec() []float64 {
	if x != nil {
		return x.SpeedsMmPerSec
	}
	return nil
}

func (x *MoveToPositionRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type MoveToPositionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MoveToPositionResponse) Reset() {
	*x = MoveToPositionResponse{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *MoveToPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveToPositionResponse) ProtoMessage() {}

func (x *MoveToPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveToPositionResponse.ProtoReflect.Descriptor instead.
func (*MoveToPositionResponse) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{3}
}

type HomeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *HomeRequest) Reset() {
	*x = HomeRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *HomeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HomeRequest) ProtoMessage() {}

func (x *HomeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HomeRequest.ProtoReflect.Descriptor instead.
func (*HomeRequest) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{4}
}

func (x *HomeRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *HomeRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type HomeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A bool describing whether the gantry has completed homing
	Homed bool `protobuf:"varint,1,opt,name=homed,proto3" json:"homed,omitempty"`
}

func (x *HomeResponse) Reset() {
	*x = HomeResponse{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *HomeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HomeResponse) ProtoMessage() {}

func (x *HomeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HomeResponse.ProtoReflect.Descriptor instead.
func (*HomeResponse) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{5}
}

func (x *HomeResponse) GetHomed() bool {
	if x != nil {
		return x.Homed
	}
	return false
}

type GetLengthsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GetLengthsRequest) Reset() {
	*x = GetLengthsRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetLengthsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLengthsRequest) ProtoMessage() {}

func (x *GetLengthsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLengthsRequest.ProtoReflect.Descriptor instead.
func (*GetLengthsRequest) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{6}
}

func (x *GetLengthsRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetLengthsRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type GetLengthsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	LengthsMm []float64 `protobuf:"fixed64,1,rep,packed,name=lengths_mm,json=lengthsMm,proto3" json:"lengths_mm,omitempty"`
}

func (x *GetLengthsResponse) Reset() {
	*x = GetLengthsResponse{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetLengthsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLengthsResponse) ProtoMessage() {}

func (x *GetLengthsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLengthsResponse.ProtoReflect.Descriptor instead.
func (*GetLengthsResponse) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{7}
}

func (x *GetLengthsResponse) GetLengthsMm() []float64 {
	if x != nil {
		return x.LengthsMm
	}
	return nil
}

type StopRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a gantry
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *StopRequest) Reset() {
	*x = StopRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *StopRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRequest) ProtoMessage() {}

func (x *StopRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[8]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{8}
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
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *StopResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopResponse) ProtoMessage() {}

func (x *StopResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[9]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{9}
}

type Status struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PositionsMm []float64 `protobuf:"fixed64,1,rep,packed,name=positions_mm,json=positionsMm,proto3" json:"positions_mm,omitempty"`
	LengthsMm   []float64 `protobuf:"fixed64,2,rep,packed,name=lengths_mm,json=lengthsMm,proto3" json:"lengths_mm,omitempty"`
	IsMoving    bool      `protobuf:"varint,3,opt,name=is_moving,json=isMoving,proto3" json:"is_moving,omitempty"`
}

func (x *Status) Reset() {
	*x = Status{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Status) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Status) ProtoMessage() {}

func (x *Status) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[10]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Status.ProtoReflect.Descriptor instead.
func (*Status) Descriptor() ([]byte, []int) {
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{10}
}

func (x *Status) GetPositionsMm() []float64 {
	if x != nil {
		return x.PositionsMm
	}
	return nil
}

func (x *Status) GetLengthsMm() []float64 {
	if x != nil {
		return x.LengthsMm
	}
	return nil
}

func (x *Status) GetIsMoving() bool {
	if x != nil {
		return x.IsMoving
	}
	return false
}

type IsMovingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *IsMovingRequest) Reset() {
	*x = IsMovingRequest{}
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *IsMovingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingRequest) ProtoMessage() {}

func (x *IsMovingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[11]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{11}
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
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[12]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *IsMovingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingResponse) ProtoMessage() {}

func (x *IsMovingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_gantry_v1_gantry_proto_msgTypes[12]
	if x != nil {
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
	return file_component_gantry_v1_gantry_proto_rawDescGZIP(), []int{12}
}

func (x *IsMovingResponse) GetIsMoving() bool {
	if x != nil {
		return x.IsMoving
	}
	return false
}

var File_component_gantry_v1_gantry_proto protoreflect.FileDescriptor

var file_component_gantry_v1_gantry_proto_rawDesc = []byte{
	0x0a, 0x20, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e, 0x74,
	0x72, 0x79, 0x2f, 0x76, 0x31, 0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x18, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x57, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78,
	0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75,
	0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x38, 0x0a, 0x13, 0x47, 0x65, 0x74,
	0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x21, 0x0a, 0x0c, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x6d, 0x6d,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x01, 0x52, 0x0b, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x4d, 0x6d, 0x22, 0xa8, 0x01, 0x0a, 0x15, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x50, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x6d,
	0x6d, 0x18, 0x02, 0x20, 0x03, 0x28, 0x01, 0x52, 0x0b, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x4d, 0x6d, 0x12, 0x29, 0x0a, 0x11, 0x73, 0x70, 0x65, 0x65, 0x64, 0x73, 0x5f, 0x6d,
	0x6d, 0x5f, 0x70, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x63, 0x18, 0x03, 0x20, 0x03, 0x28, 0x01, 0x52,
	0x0e, 0x73, 0x70, 0x65, 0x65, 0x64, 0x73, 0x4d, 0x6d, 0x50, 0x65, 0x72, 0x53, 0x65, 0x63, 0x12,
	0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x18,
	0x0a, 0x16, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x50, 0x0a, 0x0b, 0x48, 0x6f, 0x6d, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65,
	0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72,
	0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x24, 0x0a, 0x0c, 0x48, 0x6f,
	0x6d, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x68, 0x6f,
	0x6d, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x68, 0x6f, 0x6d, 0x65, 0x64,
	0x22, 0x56, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x4c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74,
	0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63,
	0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x33, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x4c,
	0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d,
	0x0a, 0x0a, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x5f, 0x6d, 0x6d, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x01, 0x52, 0x09, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x4d, 0x6d, 0x22, 0x50, 0x0a,
	0x0b, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22,
	0x0e, 0x0a, 0x0c, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x67, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x6f, 0x73,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x6d, 0x6d, 0x18, 0x01, 0x20, 0x03, 0x28, 0x01, 0x52,
	0x0b, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x4d, 0x6d, 0x12, 0x1d, 0x0a, 0x0a,
	0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x5f, 0x6d, 0x6d, 0x18, 0x02, 0x20, 0x03, 0x28, 0x01,
	0x52, 0x09, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x4d, 0x6d, 0x12, 0x1b, 0x0a, 0x09, 0x69,
	0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08,
	0x69, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x22, 0x25, 0x0a, 0x0f, 0x49, 0x73, 0x4d, 0x6f,
	0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22,
	0x2f, 0x0a, 0x10, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67,
	0x32, 0xda, 0x09, 0x0a, 0x0d, 0x47, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0xa1, 0x01, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x2c, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65,
	0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x2d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x50,
	0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x35, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2f, 0x12, 0x2d, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f,
	0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x70, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0xae, 0x01, 0x0a, 0x0e, 0x4d, 0x6f, 0x76, 0x65, 0x54,
	0x6f, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2f, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72,
	0x79, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74,
	0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x50, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x39, 0xa0, 0x92,
	0x29, 0x01, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2f, 0x1a, 0x2d, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74,
	0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x70,
	0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x88, 0x01, 0x0a, 0x04, 0x48, 0x6f, 0x6d, 0x65,
	0x12, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x6f, 0x6d, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63,
	0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e,
	0x76, 0x31, 0x2e, 0x48, 0x6f, 0x6d, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x31, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2b, 0x1a, 0x29, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f,
	0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x68, 0x6f,
	0x6d, 0x65, 0x12, 0x9d, 0x01, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x4c, 0x65, 0x6e, 0x67, 0x74, 0x68,
	0x73, 0x12, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74,
	0x4c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e,
	0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4c, 0x65, 0x6e,
	0x67, 0x74, 0x68, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x34, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x2e, 0x12, 0x2c, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e,
	0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x6c, 0x65, 0x6e, 0x67, 0x74,
	0x68, 0x73, 0x12, 0x88, 0x01, 0x0a, 0x04, 0x53, 0x74, 0x6f, 0x70, 0x12, 0x25, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e,
	0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74,
	0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x31, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x2b, 0x22, 0x29, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72,
	0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x74, 0x6f, 0x70, 0x12, 0x99, 0x01,
	0x0a, 0x08, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x12, 0x29, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74,
	0x72, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31,
	0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x36, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x30, 0x12, 0x2e, 0x2f, 0x76, 0x69, 0x61, 0x6d,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f,
	0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x12, 0x89, 0x01, 0x0a, 0x09, 0x44, 0x6f,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61,
	0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x37, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x31, 0x22, 0x2f, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e,
	0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x64, 0x6f, 0x5f, 0x63, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x95, 0x01, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f,
	0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x12, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d,
	0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47,
	0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x37, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x12, 0x2f, 0x2f, 0x76,
	0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f, 0x7b, 0x6e, 0x61, 0x6d,
	0x65, 0x7d, 0x2f, 0x67, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x42, 0x43, 0x0a,
	0x1c, 0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2e, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x76, 0x31, 0x5a, 0x23, 0x67,
	0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63,
	0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x61, 0x6e, 0x74, 0x72, 0x79, 0x2f,
	0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_component_gantry_v1_gantry_proto_rawDescOnce sync.Once
	file_component_gantry_v1_gantry_proto_rawDescData = file_component_gantry_v1_gantry_proto_rawDesc
)

func file_component_gantry_v1_gantry_proto_rawDescGZIP() []byte {
	file_component_gantry_v1_gantry_proto_rawDescOnce.Do(func() {
		file_component_gantry_v1_gantry_proto_rawDescData = protoimpl.X.CompressGZIP(file_component_gantry_v1_gantry_proto_rawDescData)
	})
	return file_component_gantry_v1_gantry_proto_rawDescData
}

var file_component_gantry_v1_gantry_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_component_gantry_v1_gantry_proto_goTypes = []any{
	(*GetPositionRequest)(nil),       // 0: viam.component.gantry.v1.GetPositionRequest
	(*GetPositionResponse)(nil),      // 1: viam.component.gantry.v1.GetPositionResponse
	(*MoveToPositionRequest)(nil),    // 2: viam.component.gantry.v1.MoveToPositionRequest
	(*MoveToPositionResponse)(nil),   // 3: viam.component.gantry.v1.MoveToPositionResponse
	(*HomeRequest)(nil),              // 4: viam.component.gantry.v1.HomeRequest
	(*HomeResponse)(nil),             // 5: viam.component.gantry.v1.HomeResponse
	(*GetLengthsRequest)(nil),        // 6: viam.component.gantry.v1.GetLengthsRequest
	(*GetLengthsResponse)(nil),       // 7: viam.component.gantry.v1.GetLengthsResponse
	(*StopRequest)(nil),              // 8: viam.component.gantry.v1.StopRequest
	(*StopResponse)(nil),             // 9: viam.component.gantry.v1.StopResponse
	(*Status)(nil),                   // 10: viam.component.gantry.v1.Status
	(*IsMovingRequest)(nil),          // 11: viam.component.gantry.v1.IsMovingRequest
	(*IsMovingResponse)(nil),         // 12: viam.component.gantry.v1.IsMovingResponse
	(*structpb.Struct)(nil),          // 13: google.protobuf.Struct
	(*v1.DoCommandRequest)(nil),      // 14: viam.common.v1.DoCommandRequest
	(*v1.GetGeometriesRequest)(nil),  // 15: viam.common.v1.GetGeometriesRequest
	(*v1.DoCommandResponse)(nil),     // 16: viam.common.v1.DoCommandResponse
	(*v1.GetGeometriesResponse)(nil), // 17: viam.common.v1.GetGeometriesResponse
}
var file_component_gantry_v1_gantry_proto_depIdxs = []int32{
	13, // 0: viam.component.gantry.v1.GetPositionRequest.extra:type_name -> google.protobuf.Struct
	13, // 1: viam.component.gantry.v1.MoveToPositionRequest.extra:type_name -> google.protobuf.Struct
	13, // 2: viam.component.gantry.v1.HomeRequest.extra:type_name -> google.protobuf.Struct
	13, // 3: viam.component.gantry.v1.GetLengthsRequest.extra:type_name -> google.protobuf.Struct
	13, // 4: viam.component.gantry.v1.StopRequest.extra:type_name -> google.protobuf.Struct
	0,  // 5: viam.component.gantry.v1.GantryService.GetPosition:input_type -> viam.component.gantry.v1.GetPositionRequest
	2,  // 6: viam.component.gantry.v1.GantryService.MoveToPosition:input_type -> viam.component.gantry.v1.MoveToPositionRequest
	4,  // 7: viam.component.gantry.v1.GantryService.Home:input_type -> viam.component.gantry.v1.HomeRequest
	6,  // 8: viam.component.gantry.v1.GantryService.GetLengths:input_type -> viam.component.gantry.v1.GetLengthsRequest
	8,  // 9: viam.component.gantry.v1.GantryService.Stop:input_type -> viam.component.gantry.v1.StopRequest
	11, // 10: viam.component.gantry.v1.GantryService.IsMoving:input_type -> viam.component.gantry.v1.IsMovingRequest
	14, // 11: viam.component.gantry.v1.GantryService.DoCommand:input_type -> viam.common.v1.DoCommandRequest
	15, // 12: viam.component.gantry.v1.GantryService.GetGeometries:input_type -> viam.common.v1.GetGeometriesRequest
	1,  // 13: viam.component.gantry.v1.GantryService.GetPosition:output_type -> viam.component.gantry.v1.GetPositionResponse
	3,  // 14: viam.component.gantry.v1.GantryService.MoveToPosition:output_type -> viam.component.gantry.v1.MoveToPositionResponse
	5,  // 15: viam.component.gantry.v1.GantryService.Home:output_type -> viam.component.gantry.v1.HomeResponse
	7,  // 16: viam.component.gantry.v1.GantryService.GetLengths:output_type -> viam.component.gantry.v1.GetLengthsResponse
	9,  // 17: viam.component.gantry.v1.GantryService.Stop:output_type -> viam.component.gantry.v1.StopResponse
	12, // 18: viam.component.gantry.v1.GantryService.IsMoving:output_type -> viam.component.gantry.v1.IsMovingResponse
	16, // 19: viam.component.gantry.v1.GantryService.DoCommand:output_type -> viam.common.v1.DoCommandResponse
	17, // 20: viam.component.gantry.v1.GantryService.GetGeometries:output_type -> viam.common.v1.GetGeometriesResponse
	13, // [13:21] is the sub-list for method output_type
	5,  // [5:13] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_component_gantry_v1_gantry_proto_init() }
func file_component_gantry_v1_gantry_proto_init() {
	if File_component_gantry_v1_gantry_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_component_gantry_v1_gantry_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_gantry_v1_gantry_proto_goTypes,
		DependencyIndexes: file_component_gantry_v1_gantry_proto_depIdxs,
		MessageInfos:      file_component_gantry_v1_gantry_proto_msgTypes,
	}.Build()
	File_component_gantry_v1_gantry_proto = out.File
	file_component_gantry_v1_gantry_proto_rawDesc = nil
	file_component_gantry_v1_gantry_proto_goTypes = nil
	file_component_gantry_v1_gantry_proto_depIdxs = nil
}
