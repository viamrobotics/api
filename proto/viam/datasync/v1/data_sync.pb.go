// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.1
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

type DataType int32

const (
	DataType_BINARY  DataType = 0
	DataType_TABULAR DataType = 1
)

// Enum value maps for DataType.
var (
	DataType_name = map[int32]string{
		0: "BINARY",
		1: "TABULAR",
	}
	DataType_value = map[string]int32{
		"BINARY":  0,
		"TABULAR": 1,
	}
)

func (x DataType) Enum() *DataType {
	p := new(DataType)
	*p = x
	return p
}

func (x DataType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (DataType) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_viam_datasync_v1_data_sync_proto_enumTypes[0].Descriptor()
}

func (DataType) Type() protoreflect.EnumType {
	return &file_proto_viam_datasync_v1_data_sync_proto_enumTypes[0]
}

func (x DataType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use DataType.Descriptor instead.
func (DataType) EnumDescriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{0}
}

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

	Metadata *SensorMetadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	// Deprecated: Do not use.
	DeprecatedData *structpb.Struct `protobuf:"bytes,2,opt,name=deprecated_data,json=deprecatedData,proto3" json:"deprecated_data,omitempty"`
	Type           DataType         `protobuf:"varint,3,opt,name=type,proto3,enum=proto.viam.datasync.v1.DataType" json:"type,omitempty"`
	// Types that are assignable to Data:
	//	*SensorData_Struct
	//	*SensorData_Binary
	Data isSensorData_Data `protobuf_oneof:"data"`
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

// Deprecated: Do not use.
func (x *SensorData) GetDeprecatedData() *structpb.Struct {
	if x != nil {
		return x.DeprecatedData
	}
	return nil
}

func (x *SensorData) GetType() DataType {
	if x != nil {
		return x.Type
	}
	return DataType_BINARY
}

func (m *SensorData) GetData() isSensorData_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (x *SensorData) GetStruct() *structpb.Struct {
	if x, ok := x.GetData().(*SensorData_Struct); ok {
		return x.Struct
	}
	return nil
}

func (x *SensorData) GetBinary() []byte {
	if x, ok := x.GetData().(*SensorData_Binary); ok {
		return x.Binary
	}
	return nil
}

type isSensorData_Data interface {
	isSensorData_Data()
}

type SensorData_Struct struct {
	Struct *structpb.Struct `protobuf:"bytes,4,opt,name=struct,proto3,oneof"`
}

type SensorData_Binary struct {
	Binary []byte `protobuf:"bytes,5,opt,name=binary,proto3,oneof"`
}

func (*SensorData_Struct) isSensorData_Data() {}

func (*SensorData_Binary) isSensorData_Data() {}

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

type SyncedFile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Start          *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=start,proto3" json:"start,omitempty"`
	End            *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=end,proto3" json:"end,omitempty"`
	OrgId          string                 `protobuf:"bytes,3,opt,name=org_id,json=orgId,proto3" json:"org_id,omitempty"`
	RobotId        string                 `protobuf:"bytes,4,opt,name=robot_id,json=robotId,proto3" json:"robot_id,omitempty"`
	PartId         string                 `protobuf:"bytes,5,opt,name=part_id,json=partId,proto3" json:"part_id,omitempty"`
	ComponentName  string                 `protobuf:"bytes,6,opt,name=component_name,json=componentName,proto3" json:"component_name,omitempty"`
	ComponentType  string                 `protobuf:"bytes,7,opt,name=component_type,json=componentType,proto3" json:"component_type,omitempty"`
	ComponentModel string                 `protobuf:"bytes,8,opt,name=component_model,json=componentModel,proto3" json:"component_model,omitempty"`
	MethodName     string                 `protobuf:"bytes,9,opt,name=method_name,json=methodName,proto3" json:"method_name,omitempty"`
	BlobPath       string                 `protobuf:"bytes,10,opt,name=blob_path,json=blobPath,proto3" json:"blob_path,omitempty"`
	DataType       DataType               `protobuf:"varint,11,opt,name=data_type,json=dataType,proto3,enum=proto.viam.datasync.v1.DataType" json:"data_type,omitempty"`
	// Only DataType.TABULAR data has column_names
	ColumnNames []string `protobuf:"bytes,12,rep,name=column_names,json=columnNames,proto3" json:"column_names,omitempty"`
}

func (x *SyncedFile) Reset() {
	*x = SyncedFile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SyncedFile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SyncedFile) ProtoMessage() {}

func (x *SyncedFile) ProtoReflect() protoreflect.Message {
	mi := &file_proto_viam_datasync_v1_data_sync_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SyncedFile.ProtoReflect.Descriptor instead.
func (*SyncedFile) Descriptor() ([]byte, []int) {
	return file_proto_viam_datasync_v1_data_sync_proto_rawDescGZIP(), []int{5}
}

func (x *SyncedFile) GetStart() *timestamppb.Timestamp {
	if x != nil {
		return x.Start
	}
	return nil
}

func (x *SyncedFile) GetEnd() *timestamppb.Timestamp {
	if x != nil {
		return x.End
	}
	return nil
}

func (x *SyncedFile) GetOrgId() string {
	if x != nil {
		return x.OrgId
	}
	return ""
}

func (x *SyncedFile) GetRobotId() string {
	if x != nil {
		return x.RobotId
	}
	return ""
}

func (x *SyncedFile) GetPartId() string {
	if x != nil {
		return x.PartId
	}
	return ""
}

func (x *SyncedFile) GetComponentName() string {
	if x != nil {
		return x.ComponentName
	}
	return ""
}

func (x *SyncedFile) GetComponentType() string {
	if x != nil {
		return x.ComponentType
	}
	return ""
}

func (x *SyncedFile) GetComponentModel() string {
	if x != nil {
		return x.ComponentModel
	}
	return ""
}

func (x *SyncedFile) GetMethodName() string {
	if x != nil {
		return x.MethodName
	}
	return ""
}

func (x *SyncedFile) GetBlobPath() string {
	if x != nil {
		return x.BlobPath
	}
	return ""
}

func (x *SyncedFile) GetDataType() DataType {
	if x != nil {
		return x.DataType
	}
	return DataType_BINARY
}

func (x *SyncedFile) GetColumnNames() []string {
	if x != nil {
		return x.ColumnNames
	}
	return nil
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
	0x63, 0x65, 0x69, 0x76, 0x65, 0x64, 0x22, 0xa1, 0x02, 0x0a, 0x0a, 0x53, 0x65, 0x6e, 0x73, 0x6f,
	0x72, 0x44, 0x61, 0x74, 0x61, 0x12, 0x42, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31,
	0x2e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x44, 0x0a, 0x0f, 0x64, 0x65, 0x70,
	0x72, 0x65, 0x63, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x42, 0x02, 0x18, 0x01, 0x52,
	0x0e, 0x64, 0x65, 0x70, 0x72, 0x65, 0x63, 0x61, 0x74, 0x65, 0x64, 0x44, 0x61, 0x74, 0x61, 0x12,
	0x34, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73,
	0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x31, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x48, 0x00,
	0x52, 0x06, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x12, 0x18, 0x0a, 0x06, 0x62, 0x69, 0x6e, 0x61,
	0x72, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x06, 0x62, 0x69, 0x6e, 0x61,
	0x72, 0x79, 0x42, 0x06, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x75, 0x0a, 0x0e, 0x55, 0x70,
	0x6c, 0x6f, 0x61, 0x64, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1b, 0x0a, 0x09,
	0x70, 0x61, 0x72, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x70, 0x61, 0x72, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6d,
	0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x1f, 0x0a, 0x0b, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4e, 0x61, 0x6d,
	0x65, 0x22, 0xa8, 0x01, 0x0a, 0x0d, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x44, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x55,
	0x70, 0x6c, 0x6f, 0x61, 0x64, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x48, 0x00, 0x52,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x40, 0x0a, 0x08, 0x63, 0x6f, 0x6e,
	0x74, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e,
	0x63, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x44, 0x61, 0x74, 0x61, 0x48,
	0x00, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x73, 0x42, 0x0f, 0x0a, 0x0d, 0x75,
	0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x10, 0x0a, 0x0e,
	0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xce,
	0x03, 0x0a, 0x0a, 0x53, 0x79, 0x6e, 0x63, 0x65, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x30, 0x0a,
	0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x12,
	0x2c, 0x0a, 0x03, 0x65, 0x6e, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x03, 0x65, 0x6e, 0x64, 0x12, 0x15, 0x0a,
	0x06, 0x6f, 0x72, 0x67, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6f,
	0x72, 0x67, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x5f, 0x69, 0x64,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x49, 0x64, 0x12,
	0x17, 0x0a, 0x07, 0x70, 0x61, 0x72, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x70, 0x61, 0x72, 0x74, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12,
	0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x5f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x12,
	0x1f, 0x0a, 0x0b, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x1b, 0x0a, 0x09, 0x62, 0x6c, 0x6f, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x6c, 0x6f, 0x62, 0x50, 0x61, 0x74, 0x68, 0x12, 0x3d, 0x0a,
	0x09, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61,
	0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x08, 0x64, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x12, 0x21, 0x0a, 0x0c,
	0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x0c, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x2a,
	0x23, 0x0a, 0x08, 0x44, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0a, 0x0a, 0x06, 0x42,
	0x49, 0x4e, 0x41, 0x52, 0x59, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x54, 0x41, 0x42, 0x55, 0x4c,
	0x41, 0x52, 0x10, 0x01, 0x32, 0x6c, 0x0a, 0x0f, 0x44, 0x61, 0x74, 0x61, 0x53, 0x79, 0x6e, 0x63,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59, 0x0a, 0x06, 0x55, 0x70, 0x6c, 0x6f, 0x61,
	0x64, 0x12, 0x25, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64,
	0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2e, 0x76,
	0x31, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x28, 0x01, 0x42, 0x28, 0x5a, 0x26, 0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x76, 0x69, 0x61, 0x6d,
	0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x79, 0x6e, 0x63, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
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

var file_proto_viam_datasync_v1_data_sync_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_viam_datasync_v1_data_sync_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_proto_viam_datasync_v1_data_sync_proto_goTypes = []interface{}{
	(DataType)(0),                 // 0: proto.viam.datasync.v1.DataType
	(*SensorMetadata)(nil),        // 1: proto.viam.datasync.v1.SensorMetadata
	(*SensorData)(nil),            // 2: proto.viam.datasync.v1.SensorData
	(*UploadMetadata)(nil),        // 3: proto.viam.datasync.v1.UploadMetadata
	(*UploadRequest)(nil),         // 4: proto.viam.datasync.v1.UploadRequest
	(*UploadResponse)(nil),        // 5: proto.viam.datasync.v1.UploadResponse
	(*SyncedFile)(nil),            // 6: proto.viam.datasync.v1.SyncedFile
	(*timestamppb.Timestamp)(nil), // 7: google.protobuf.Timestamp
	(*structpb.Struct)(nil),       // 8: google.protobuf.Struct
}
var file_proto_viam_datasync_v1_data_sync_proto_depIdxs = []int32{
	7,  // 0: proto.viam.datasync.v1.SensorMetadata.time_requested:type_name -> google.protobuf.Timestamp
	7,  // 1: proto.viam.datasync.v1.SensorMetadata.time_received:type_name -> google.protobuf.Timestamp
	1,  // 2: proto.viam.datasync.v1.SensorData.metadata:type_name -> proto.viam.datasync.v1.SensorMetadata
	8,  // 3: proto.viam.datasync.v1.SensorData.deprecated_data:type_name -> google.protobuf.Struct
	0,  // 4: proto.viam.datasync.v1.SensorData.type:type_name -> proto.viam.datasync.v1.DataType
	8,  // 5: proto.viam.datasync.v1.SensorData.struct:type_name -> google.protobuf.Struct
	3,  // 6: proto.viam.datasync.v1.UploadRequest.metadata:type_name -> proto.viam.datasync.v1.UploadMetadata
	2,  // 7: proto.viam.datasync.v1.UploadRequest.contents:type_name -> proto.viam.datasync.v1.SensorData
	7,  // 8: proto.viam.datasync.v1.SyncedFile.start:type_name -> google.protobuf.Timestamp
	7,  // 9: proto.viam.datasync.v1.SyncedFile.end:type_name -> google.protobuf.Timestamp
	0,  // 10: proto.viam.datasync.v1.SyncedFile.data_type:type_name -> proto.viam.datasync.v1.DataType
	4,  // 11: proto.viam.datasync.v1.DataSyncService.Upload:input_type -> proto.viam.datasync.v1.UploadRequest
	5,  // 12: proto.viam.datasync.v1.DataSyncService.Upload:output_type -> proto.viam.datasync.v1.UploadResponse
	12, // [12:13] is the sub-list for method output_type
	11, // [11:12] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
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
		file_proto_viam_datasync_v1_data_sync_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SyncedFile); i {
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
	file_proto_viam_datasync_v1_data_sync_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*SensorData_Struct)(nil),
		(*SensorData_Binary)(nil),
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
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_viam_datasync_v1_data_sync_proto_goTypes,
		DependencyIndexes: file_proto_viam_datasync_v1_data_sync_proto_depIdxs,
		EnumInfos:         file_proto_viam_datasync_v1_data_sync_proto_enumTypes,
		MessageInfos:      file_proto_viam_datasync_v1_data_sync_proto_msgTypes,
	}.Build()
	File_proto_viam_datasync_v1_data_sync_proto = out.File
	file_proto_viam_datasync_v1_data_sync_proto_rawDesc = nil
	file_proto_viam_datasync_v1_data_sync_proto_goTypes = nil
	file_proto_viam_datasync_v1_data_sync_proto_depIdxs = nil
}
