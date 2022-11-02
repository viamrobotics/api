// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: module/v1/module.proto

package v1

import (
	v1 "go.viam.com/api/app/v1"
	v11 "go.viam.com/api/robot/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type AddComponentRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Config       *v1.ComponentConfig `protobuf:"bytes,1,opt,name=config,proto3" json:"config,omitempty"`
	Dependencies []string            `protobuf:"bytes,2,rep,name=dependencies,proto3" json:"dependencies,omitempty"`
}

func (x *AddComponentRequest) Reset() {
	*x = AddComponentRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddComponentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddComponentRequest) ProtoMessage() {}

func (x *AddComponentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddComponentRequest.ProtoReflect.Descriptor instead.
func (*AddComponentRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{0}
}

func (x *AddComponentRequest) GetConfig() *v1.ComponentConfig {
	if x != nil {
		return x.Config
	}
	return nil
}

func (x *AddComponentRequest) GetDependencies() []string {
	if x != nil {
		return x.Dependencies
	}
	return nil
}

type AddComponentResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AddComponentResponse) Reset() {
	*x = AddComponentResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddComponentResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddComponentResponse) ProtoMessage() {}

func (x *AddComponentResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddComponentResponse.ProtoReflect.Descriptor instead.
func (*AddComponentResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{1}
}

type ReconfigureComponentRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Config       *v1.ComponentConfig `protobuf:"bytes,1,opt,name=config,proto3" json:"config,omitempty"`
	Dependencies []string            `protobuf:"bytes,2,rep,name=dependencies,proto3" json:"dependencies,omitempty"`
}

func (x *ReconfigureComponentRequest) Reset() {
	*x = ReconfigureComponentRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReconfigureComponentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReconfigureComponentRequest) ProtoMessage() {}

func (x *ReconfigureComponentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReconfigureComponentRequest.ProtoReflect.Descriptor instead.
func (*ReconfigureComponentRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{2}
}

func (x *ReconfigureComponentRequest) GetConfig() *v1.ComponentConfig {
	if x != nil {
		return x.Config
	}
	return nil
}

func (x *ReconfigureComponentRequest) GetDependencies() []string {
	if x != nil {
		return x.Dependencies
	}
	return nil
}

type ReconfigureComponentResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ReconfigureComponentResponse) Reset() {
	*x = ReconfigureComponentResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReconfigureComponentResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReconfigureComponentResponse) ProtoMessage() {}

func (x *ReconfigureComponentResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReconfigureComponentResponse.ProtoReflect.Descriptor instead.
func (*ReconfigureComponentResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{3}
}

type AddServiceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Config *v1.ServiceConfig `protobuf:"bytes,1,opt,name=config,proto3" json:"config,omitempty"`
}

func (x *AddServiceRequest) Reset() {
	*x = AddServiceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddServiceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddServiceRequest) ProtoMessage() {}

func (x *AddServiceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddServiceRequest.ProtoReflect.Descriptor instead.
func (*AddServiceRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{4}
}

func (x *AddServiceRequest) GetConfig() *v1.ServiceConfig {
	if x != nil {
		return x.Config
	}
	return nil
}

type AddServiceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AddServiceResponse) Reset() {
	*x = AddServiceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddServiceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddServiceResponse) ProtoMessage() {}

func (x *AddServiceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddServiceResponse.ProtoReflect.Descriptor instead.
func (*AddServiceResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{5}
}

type ReconfigureServiceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Config *v1.ServiceConfig `protobuf:"bytes,1,opt,name=config,proto3" json:"config,omitempty"`
}

func (x *ReconfigureServiceRequest) Reset() {
	*x = ReconfigureServiceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReconfigureServiceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReconfigureServiceRequest) ProtoMessage() {}

func (x *ReconfigureServiceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReconfigureServiceRequest.ProtoReflect.Descriptor instead.
func (*ReconfigureServiceRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{6}
}

func (x *ReconfigureServiceRequest) GetConfig() *v1.ServiceConfig {
	if x != nil {
		return x.Config
	}
	return nil
}

type ReconfigureServiceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ReconfigureServiceResponse) Reset() {
	*x = ReconfigureServiceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReconfigureServiceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReconfigureServiceResponse) ProtoMessage() {}

func (x *ReconfigureServiceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReconfigureServiceResponse.ProtoReflect.Descriptor instead.
func (*ReconfigureServiceResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{7}
}

type RemoveResourceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *RemoveResourceRequest) Reset() {
	*x = RemoveResourceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RemoveResourceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RemoveResourceRequest) ProtoMessage() {}

func (x *RemoveResourceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RemoveResourceRequest.ProtoReflect.Descriptor instead.
func (*RemoveResourceRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{8}
}

func (x *RemoveResourceRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type RemoveResourceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *RemoveResourceResponse) Reset() {
	*x = RemoveResourceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RemoveResourceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RemoveResourceResponse) ProtoMessage() {}

func (x *RemoveResourceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RemoveResourceResponse.ProtoReflect.Descriptor instead.
func (*RemoveResourceResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{9}
}

type HandlerDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Subtype *v11.ResourceRPCSubtype `protobuf:"bytes,1,opt,name=subtype,proto3" json:"subtype,omitempty"`
	Models  []string                `protobuf:"bytes,2,rep,name=models,proto3" json:"models,omitempty"`
}

func (x *HandlerDefinition) Reset() {
	*x = HandlerDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandlerDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandlerDefinition) ProtoMessage() {}

func (x *HandlerDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandlerDefinition.ProtoReflect.Descriptor instead.
func (*HandlerDefinition) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{10}
}

func (x *HandlerDefinition) GetSubtype() *v11.ResourceRPCSubtype {
	if x != nil {
		return x.Subtype
	}
	return nil
}

func (x *HandlerDefinition) GetModels() []string {
	if x != nil {
		return x.Models
	}
	return nil
}

type HandlerMap struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Handlers []*HandlerDefinition `protobuf:"bytes,1,rep,name=handlers,proto3" json:"handlers,omitempty"`
}

func (x *HandlerMap) Reset() {
	*x = HandlerMap{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandlerMap) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandlerMap) ProtoMessage() {}

func (x *HandlerMap) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandlerMap.ProtoReflect.Descriptor instead.
func (*HandlerMap) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{11}
}

func (x *HandlerMap) GetHandlers() []*HandlerDefinition {
	if x != nil {
		return x.Handlers
	}
	return nil
}

type ReadyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ParentAddress string `protobuf:"bytes,1,opt,name=parent_address,json=parentAddress,proto3" json:"parent_address,omitempty"`
}

func (x *ReadyRequest) Reset() {
	*x = ReadyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadyRequest) ProtoMessage() {}

func (x *ReadyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadyRequest.ProtoReflect.Descriptor instead.
func (*ReadyRequest) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{12}
}

func (x *ReadyRequest) GetParentAddress() string {
	if x != nil {
		return x.ParentAddress
	}
	return ""
}

type ReadyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ready      bool        `protobuf:"varint,1,opt,name=ready,proto3" json:"ready,omitempty"`
	Handlermap *HandlerMap `protobuf:"bytes,2,opt,name=handlermap,proto3" json:"handlermap,omitempty"`
}

func (x *ReadyResponse) Reset() {
	*x = ReadyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_module_v1_module_proto_msgTypes[13]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadyResponse) ProtoMessage() {}

func (x *ReadyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_module_v1_module_proto_msgTypes[13]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadyResponse.ProtoReflect.Descriptor instead.
func (*ReadyResponse) Descriptor() ([]byte, []int) {
	return file_module_v1_module_proto_rawDescGZIP(), []int{13}
}

func (x *ReadyResponse) GetReady() bool {
	if x != nil {
		return x.Ready
	}
	return false
}

func (x *ReadyResponse) GetHandlermap() *HandlerMap {
	if x != nil {
		return x.Handlermap
	}
	return nil
}

var File_module_v1_module_proto protoreflect.FileDescriptor

var file_module_v1_module_proto_rawDesc = []byte{
	0x0a, 0x16, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x6f, 0x64, 0x75,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d,
	0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x12, 0x61, 0x70, 0x70, 0x2f, 0x76, 0x31,
	0x2f, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x72, 0x6f,
	0x62, 0x6f, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x6f, 0x0a, 0x13, 0x41, 0x64, 0x64, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x34, 0x0a, 0x06, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12,
	0x22, 0x0a, 0x0c, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x63, 0x69, 0x65, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x63,
	0x69, 0x65, 0x73, 0x22, 0x16, 0x0a, 0x14, 0x41, 0x64, 0x64, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x77, 0x0a, 0x1b, 0x52,
	0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x34, 0x0a, 0x06, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x12, 0x22, 0x0a, 0x0c, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x63, 0x69, 0x65, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e,
	0x63, 0x69, 0x65, 0x73, 0x22, 0x1e, 0x0a, 0x1c, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x75, 0x72, 0x65, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x47, 0x0a, 0x11, 0x41, 0x64, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x32, 0x0a, 0x06, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43,
	0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x22, 0x14, 0x0a,
	0x12, 0x41, 0x64, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x4f, 0x0a, 0x19, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75,
	0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x32, 0x0a, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x06, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x22, 0x1c, 0x0a, 0x1a, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x75, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x2b, 0x0a, 0x15, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22,
	0x18, 0x0a, 0x16, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x68, 0x0a, 0x11, 0x48, 0x61, 0x6e,
	0x64, 0x6c, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3b,
	0x0a, 0x07, 0x73, 0x75, 0x62, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x50, 0x43, 0x53, 0x75, 0x62, 0x74, 0x79,
	0x70, 0x65, 0x52, 0x07, 0x73, 0x75, 0x62, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x6f, 0x64,
	0x65, 0x6c, 0x73, 0x22, 0x4b, 0x0a, 0x0a, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x4d, 0x61,
	0x70, 0x12, 0x3d, 0x0a, 0x08, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69,
	0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x08, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x73,
	0x22, 0x35, 0x0a, 0x0c, 0x52, 0x65, 0x61, 0x64, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74,
	0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x61, 0x0a, 0x0d, 0x52, 0x65, 0x61, 0x64, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x65, 0x61, 0x64,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x72, 0x65, 0x61, 0x64, 0x79, 0x12, 0x3a,
	0x0a, 0x0a, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x6d, 0x61, 0x70, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x4d, 0x61, 0x70, 0x52, 0x0a,
	0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x6d, 0x61, 0x70, 0x32, 0xc6, 0x04, 0x0a, 0x0d, 0x4d,
	0x6f, 0x64, 0x75, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59, 0x0a, 0x0c,
	0x41, 0x64, 0x64, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x12, 0x23, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x64,
	0x64, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x41, 0x64, 0x64, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x71, 0x0a, 0x14, 0x52, 0x65, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x12,
	0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31,
	0x2e, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x43, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65,
	0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x53, 0x0a, 0x0a, 0x41, 0x64,
	0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x64, 0x64, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x64, 0x64,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x6b, 0x0a, 0x12, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x29, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64,
	0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75,
	0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x2a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x52, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x65, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5f, 0x0a, 0x0e,
	0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x25,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64,
	0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x44, 0x0a,
	0x05, 0x52, 0x65, 0x61, 0x64, 0x79, 0x12, 0x1c, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f,
	0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x6d, 0x6f, 0x64, 0x75,
	0x6c, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x42, 0x1b, 0x5a, 0x19, 0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2f, 0x76, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_module_v1_module_proto_rawDescOnce sync.Once
	file_module_v1_module_proto_rawDescData = file_module_v1_module_proto_rawDesc
)

func file_module_v1_module_proto_rawDescGZIP() []byte {
	file_module_v1_module_proto_rawDescOnce.Do(func() {
		file_module_v1_module_proto_rawDescData = protoimpl.X.CompressGZIP(file_module_v1_module_proto_rawDescData)
	})
	return file_module_v1_module_proto_rawDescData
}

var file_module_v1_module_proto_msgTypes = make([]protoimpl.MessageInfo, 14)
var file_module_v1_module_proto_goTypes = []interface{}{
	(*AddComponentRequest)(nil),          // 0: viam.module.v1.AddComponentRequest
	(*AddComponentResponse)(nil),         // 1: viam.module.v1.AddComponentResponse
	(*ReconfigureComponentRequest)(nil),  // 2: viam.module.v1.ReconfigureComponentRequest
	(*ReconfigureComponentResponse)(nil), // 3: viam.module.v1.ReconfigureComponentResponse
	(*AddServiceRequest)(nil),            // 4: viam.module.v1.AddServiceRequest
	(*AddServiceResponse)(nil),           // 5: viam.module.v1.AddServiceResponse
	(*ReconfigureServiceRequest)(nil),    // 6: viam.module.v1.ReconfigureServiceRequest
	(*ReconfigureServiceResponse)(nil),   // 7: viam.module.v1.ReconfigureServiceResponse
	(*RemoveResourceRequest)(nil),        // 8: viam.module.v1.RemoveResourceRequest
	(*RemoveResourceResponse)(nil),       // 9: viam.module.v1.RemoveResourceResponse
	(*HandlerDefinition)(nil),            // 10: viam.module.v1.HandlerDefinition
	(*HandlerMap)(nil),                   // 11: viam.module.v1.HandlerMap
	(*ReadyRequest)(nil),                 // 12: viam.module.v1.ReadyRequest
	(*ReadyResponse)(nil),                // 13: viam.module.v1.ReadyResponse
	(*v1.ComponentConfig)(nil),           // 14: viam.app.v1.ComponentConfig
	(*v1.ServiceConfig)(nil),             // 15: viam.app.v1.ServiceConfig
	(*v11.ResourceRPCSubtype)(nil),       // 16: viam.robot.v1.ResourceRPCSubtype
}
var file_module_v1_module_proto_depIdxs = []int32{
	14, // 0: viam.module.v1.AddComponentRequest.config:type_name -> viam.app.v1.ComponentConfig
	14, // 1: viam.module.v1.ReconfigureComponentRequest.config:type_name -> viam.app.v1.ComponentConfig
	15, // 2: viam.module.v1.AddServiceRequest.config:type_name -> viam.app.v1.ServiceConfig
	15, // 3: viam.module.v1.ReconfigureServiceRequest.config:type_name -> viam.app.v1.ServiceConfig
	16, // 4: viam.module.v1.HandlerDefinition.subtype:type_name -> viam.robot.v1.ResourceRPCSubtype
	10, // 5: viam.module.v1.HandlerMap.handlers:type_name -> viam.module.v1.HandlerDefinition
	11, // 6: viam.module.v1.ReadyResponse.handlermap:type_name -> viam.module.v1.HandlerMap
	0,  // 7: viam.module.v1.ModuleService.AddComponent:input_type -> viam.module.v1.AddComponentRequest
	2,  // 8: viam.module.v1.ModuleService.ReconfigureComponent:input_type -> viam.module.v1.ReconfigureComponentRequest
	4,  // 9: viam.module.v1.ModuleService.AddService:input_type -> viam.module.v1.AddServiceRequest
	6,  // 10: viam.module.v1.ModuleService.ReconfigureService:input_type -> viam.module.v1.ReconfigureServiceRequest
	8,  // 11: viam.module.v1.ModuleService.RemoveResource:input_type -> viam.module.v1.RemoveResourceRequest
	12, // 12: viam.module.v1.ModuleService.Ready:input_type -> viam.module.v1.ReadyRequest
	1,  // 13: viam.module.v1.ModuleService.AddComponent:output_type -> viam.module.v1.AddComponentResponse
	3,  // 14: viam.module.v1.ModuleService.ReconfigureComponent:output_type -> viam.module.v1.ReconfigureComponentResponse
	5,  // 15: viam.module.v1.ModuleService.AddService:output_type -> viam.module.v1.AddServiceResponse
	7,  // 16: viam.module.v1.ModuleService.ReconfigureService:output_type -> viam.module.v1.ReconfigureServiceResponse
	9,  // 17: viam.module.v1.ModuleService.RemoveResource:output_type -> viam.module.v1.RemoveResourceResponse
	13, // 18: viam.module.v1.ModuleService.Ready:output_type -> viam.module.v1.ReadyResponse
	13, // [13:19] is the sub-list for method output_type
	7,  // [7:13] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_module_v1_module_proto_init() }
func file_module_v1_module_proto_init() {
	if File_module_v1_module_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_module_v1_module_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddComponentRequest); i {
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
		file_module_v1_module_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddComponentResponse); i {
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
		file_module_v1_module_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReconfigureComponentRequest); i {
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
		file_module_v1_module_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReconfigureComponentResponse); i {
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
		file_module_v1_module_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddServiceRequest); i {
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
		file_module_v1_module_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddServiceResponse); i {
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
		file_module_v1_module_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReconfigureServiceRequest); i {
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
		file_module_v1_module_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReconfigureServiceResponse); i {
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
		file_module_v1_module_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RemoveResourceRequest); i {
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
		file_module_v1_module_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RemoveResourceResponse); i {
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
		file_module_v1_module_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandlerDefinition); i {
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
		file_module_v1_module_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandlerMap); i {
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
		file_module_v1_module_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadyRequest); i {
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
		file_module_v1_module_proto_msgTypes[13].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadyResponse); i {
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
			RawDescriptor: file_module_v1_module_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   14,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_module_v1_module_proto_goTypes,
		DependencyIndexes: file_module_v1_module_proto_depIdxs,
		MessageInfos:      file_module_v1_module_proto_msgTypes,
	}.Build()
	File_module_v1_module_proto = out.File
	file_module_v1_module_proto_rawDesc = nil
	file_module_v1_module_proto_goTypes = nil
	file_module_v1_module_proto_depIdxs = nil
}
