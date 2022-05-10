// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: proto/viam/datasync/v1/data_sync.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SensorMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TimeRequested *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=time_requested,json=timeRequested,proto3" json:"time_requested,omitempty"`
	TimeReceived  *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=time_received,json=timeReceived,proto3" json:"time_received,omitempty"`
}

func (x *SensorMetadata) Reset() {
	*x = SensorMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SensorMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SensorMetadata) ProtoMessage() {}

func (x *SensorMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SensorMetadata.ProtoReflect.Descriptor instead.
func (*SensorMetadata) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{0}
}

func (x *SensorMetadata) GetTimeRequested() *timestamppb.Timestamp {
	if x != nil {
		return x.TimeRequested
	}
	return nil
}

func (x *SensorMetadata) GetTimeReceived() *timestamppb.Timestamp {
	if x != nil {
		return x.TimeReceived
	}
	return nil
}

type SensorData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *SensorMetadata  `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Data     *structpb.Struct `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *SensorData) Reset() {
	*x = SensorData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SensorData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SensorData) ProtoMessage() {}

func (x *SensorData) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SensorData.ProtoReflect.Descriptor instead.
func (*SensorData) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{1}
}

func (x *SensorData) GetMetadata() *SensorMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *SensorData) GetData() *structpb.Struct {
	if x != nil {
		return x.Data
	}
	return nil
}

type UploadMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PartName      string `protobuf:"bytes,1,opt,name=part_name,json=partName,proto3" json:"part_name,omitempty"`
	ComponentName string `protobuf:"bytes,2,opt,name=component_name,json=componentName,proto3" json:"component_name,omitempty"`
	MethodName    string `protobuf:"bytes,3,opt,name=method_name,json=methodName,proto3" json:"method_name,omitempty"`
}

func (x *UploadMetadata) Reset() {
	*x = UploadMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadMetadata) ProtoMessage() {}

func (x *UploadMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadMetadata.ProtoReflect.Descriptor instead.
func (*UploadMetadata) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{2}
}

func (x *UploadMetadata) GetPartName() string {
	if x != nil {
		return x.PartName
	}
	return ""
}

func (x *UploadMetadata) GetComponentName() string {
	if x != nil {
		return x.ComponentName
	}
	return ""
}

func (x *UploadMetadata) GetMethodName() string {
	if x != nil {
		return x.MethodName
	}
	return ""
}

type UploadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to UploadPacket:
	//	*UploadRequest_Metadata
	//	*UploadRequest_Contents
	UploadPacket isUploadRequest_UploadPacket `protobuf_oneof:"upload_packet"`
}

func (x *UploadRequest) Reset() {
	*x = UploadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadRequest) ProtoMessage() {}

func (x *UploadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadRequest.ProtoReflect.Descriptor instead.
func (*UploadRequest) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{3}
}

func (m *UploadRequest) GetUploadPacket() isUploadRequest_UploadPacket {
	if m != nil {
		return m.UploadPacket
	}
	return nil
}

func (x *UploadRequest) GetMetadata() *UploadMetadata {
	if x, ok := x.GetUploadPacket().(*UploadRequest_Metadata); ok {
		return x.Metadata
	}
	return nil
}

func (x *UploadRequest) GetContents() *SensorData {
	if x, ok := x.GetUploadPacket().(*UploadRequest_Contents); ok {
		return x.Contents
	}
	return nil
}

type isUploadRequest_UploadPacket interface {
	isUploadRequest_UploadPacket()
}

type UploadRequest_Metadata struct {
	Metadata *UploadMetadata `protobuf:"bytes,1,opt,name=metadata,proto3,oneof"`
}

type UploadRequest_Contents struct {
	Contents *SensorData `protobuf:"bytes,2,opt,name=contents,proto3,oneof"`
}

func (*UploadRequest_Metadata) isUploadRequest_UploadPacket() {}

func (*UploadRequest_Contents) isUploadRequest_UploadPacket() {}

type UploadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *UploadResponse) Reset() {
	*x = UploadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadResponse) ProtoMessage() {}

func (x *UploadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadResponse.ProtoReflect.Descriptor instead.
func (*UploadResponse) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{4}
}

var File_proto_viam_datasync_v1_data_sync_proto protoreflect.FileDescriptor

var file_proto_viam_datasync_v1_data_sync_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x64, 0x61, 0x74,
	0x61, 0x73, 0x79, 0x6e, 0x63, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x73, 0x79,
	0x6e, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31,
	0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x94, 0x01, 0x0a, 0x0e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x12, 0x41, 0x0a, 0x0e, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0d, 0x74, 0x69, 0x6d, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x65, 0x64, 0x12, 0x3f, 0x0a, 0x0d, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x72, 0x65,
	0x63, 0x65, 0x69, 0x76, 0x65, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0c, 0x74, 0x69, 0x6d, 0x65, 0x52, 0x65,
	0x63, 0x65, 0x69, 0x76, 0x65, 0x64, 0x22, 0x7d, 0x0a, 0x0a, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72,
	0x44, 0x61, 0x74, 0x61, 0x12, 0x42, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08,
	0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x2b, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x75, 0x0a, 0x0e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x72, 0x74,
	0x4e, 0x61, 0x6d, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x6d,
	0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0xa8, 0x01, 0x0a,
	0x0d, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x44,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61,
	0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x48, 0x00, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x12, 0x40, 0x0a, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x44, 0x61, 0x74, 0x61, 0x48, 0x00, 0x52, 0x08, 0x63, 0x6f,
	0x6e, 0x74, 0x65, 0x6e, 0x74, 0x73, 0x42, 0x0f, 0x0a, 0x0d, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x10, 0x0a, 0x0e, 0x55, 0x70, 0x6c, 0x6f, 0x61,
	0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0x6c, 0x0a, 0x0f, 0x44, 0x61, 0x74,
	0x61, 0x53, 0x79, 0x6e, 0x63, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59, 0x0a, 0x06,
	0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x25, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e,
	0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73,
	0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x42, 0x28, 0x5a, 0x26, 0x67, 0x6f, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2f, 0x76,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_viam_datasync_v1_data_sync_proto_rawDescOnce sync.Once
	file_proto_viam_datasync_v1_data_sync_proto_rawDescData = file_proto_viam_datasync_v1_data_sync_proto_rawDesc
)

func file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP() []byte {
	file_proto_viam_datasync_v1_data_sync_proto_rawDescOnce.Do(func() {
		file_proto_viam_datasync_v1_data_sync_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_viam_datasync_v1_data_sync_proto_rawDescData)
	})
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescData
}

var file_proto_viam_datasync_v1_data_sync_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_proto_viam_datasync_v1_data_sync_proto_goTypes = []interface{}{
	(*SensorMetadata)(nil),        // 0: proto.viam.datasync.v1.SensorMetadata
	(*SensorData)(nil),            // 1: proto.viam.datasync.v1.SensorData
	(*UploadMetadata)(nil),        // 2: proto.viam.datasync.v1.UploadMetadata
	(*UploadRequest)(nil),         // 3: proto.viam.datasync.v1.UploadRequest
	(*UploadResponse)(nil),        // 4: proto.viam.datasync.v1.UploadResponse
	(*timestamppb.Timestamp)(nil), // 5: google.protobuf.Timestamp
	(*structpb.Struct)(nil),       // 6: google.protobuf.Struct
}
var file_proto_viam_datasync_v1_data_sync_proto_depIdxs = []int32{
	5, // 0: proto.viam.datasync.v1.SensorMetadata.time_requested:type_name -> google.protobuf.Timestamp
	5, // 1: proto.viam.datasync.v1.SensorMetadata.time_received:type_name -> google.protobuf.Timestamp
	0, // 2: proto.viam.datasync.v1.SensorData.metadata:type_name -> proto.viam.datasync.v1.SensorMetadata
	6, // 3: proto.viam.datasync.v1.SensorData.data:type_name -> google.protobuf.Struct
	2, // 4: proto.viam.datasync.v1.UploadRequest.metadata:type_name -> proto.viam.datasync.v1.UploadMetadata
	1, // 5: proto.viam.datasync.v1.UploadRequest.contents:type_name -> proto.viam.datasync.v1.SensorData
	3, // 6: proto.viam.datasync.v1.DataSyncService.Upload:input_type -> proto.viam.datasync.v1.UploadRequest
	4, // 7: proto.viam.datasync.v1.DataSyncService.Upload:output_type -> proto.viam.datasync.v1.UploadResponse
	7, // [7:8] is the sub-list for method output_type
	6, // [6:7] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_proto_viam_datasync_v1_data_sync_proto_init() }
func file_proto_viam_datasync_v1_data_sync_proto_init() {
	if File_proto_viam_datasync_v1_data_sync_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SensorMetadata); i {
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
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SensorData); i {
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
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadMetadata); i {
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
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadRequest); i {
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
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadResponse); i {
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
	file_proto_viam_datasync_v1_data_sync_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*UploadRequest_Metadata)(nil),
		(*UploadRequest_Contents)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_viam_datasync_v1_data_sync_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_viam_datasync_v1_data_sync_proto_goTypes,
		DependencyIndexes: file_proto_viam_datasync_v1_data_sync_proto_depIdxs,
		MessageInfos:      file_proto_viam_datasync_v1_data_sync_proto_msgTypes,
	}.Build()
	File_proto_viam_datasync_v1_data_sync_proto = out.File
	file_proto_viam_datasync_v1_data_sync_proto_rawDesc = nil
	file_proto_viam_datasync_v1_data_sync_proto_goTypes = nil
	file_proto_viam_datasync_v1_data_sync_proto_depIdxs = nil
}
