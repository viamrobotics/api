// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: app/mltraining/v1/ml_training.proto

package v1

import (
	v1 "go.viam.com/api/app/data/v1"
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

type ModelType int32

const (
	ModelType_MODEL_TYPE_UNSPECIFIED                ModelType = 0
	ModelType_MODEL_TYPE_MULTI_CLASS_CLASSIFICATION ModelType = 1
	ModelType_MODEL_TYPE_MULTI_LABEL_CLASSIFICATION ModelType = 2
)

// Enum value maps for ModelType.
var (
	ModelType_name = map[int32]string{
		0: "MODEL_TYPE_UNSPECIFIED",
		1: "MODEL_TYPE_MULTI_CLASS_CLASSIFICATION",
		2: "MODEL_TYPE_MULTI_LABEL_CLASSIFICATION",
	}
	ModelType_value = map[string]int32{
		"MODEL_TYPE_UNSPECIFIED":                0,
		"MODEL_TYPE_MULTI_CLASS_CLASSIFICATION": 1,
		"MODEL_TYPE_MULTI_LABEL_CLASSIFICATION": 2,
	}
)

func (x ModelType) Enum() *ModelType {
	p := new(ModelType)
	*p = x
	return p
}

func (x ModelType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ModelType) Descriptor() protoreflect.EnumDescriptor {
	return file_app_mltraining_v1_ml_training_proto_enumTypes[0].Descriptor()
}

func (ModelType) Type() protoreflect.EnumType {
	return &file_app_mltraining_v1_ml_training_proto_enumTypes[0]
}

func (x ModelType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ModelType.Descriptor instead.
func (ModelType) EnumDescriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{0}
}

type TrainingStatus int32

const (
	TrainingStatus_TRAINING_STATUS_UNSPECIFIED TrainingStatus = 0
	TrainingStatus_TRAINING_STATUS_PENDING     TrainingStatus = 1
	TrainingStatus_TRAINING_STATUS_IN_PROGRESS TrainingStatus = 2
	TrainingStatus_TRAINING_STATUS_COMPLETED   TrainingStatus = 3
	TrainingStatus_TRAINING_STATUS_FAILED      TrainingStatus = 4
)

// Enum value maps for TrainingStatus.
var (
	TrainingStatus_name = map[int32]string{
		0: "TRAINING_STATUS_UNSPECIFIED",
		1: "TRAINING_STATUS_PENDING",
		2: "TRAINING_STATUS_IN_PROGRESS",
		3: "TRAINING_STATUS_COMPLETED",
		4: "TRAINING_STATUS_FAILED",
	}
	TrainingStatus_value = map[string]int32{
		"TRAINING_STATUS_UNSPECIFIED": 0,
		"TRAINING_STATUS_PENDING":     1,
		"TRAINING_STATUS_IN_PROGRESS": 2,
		"TRAINING_STATUS_COMPLETED":   3,
		"TRAINING_STATUS_FAILED":      4,
	}
)

func (x TrainingStatus) Enum() *TrainingStatus {
	p := new(TrainingStatus)
	*p = x
	return p
}

func (x TrainingStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TrainingStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_app_mltraining_v1_ml_training_proto_enumTypes[1].Descriptor()
}

func (TrainingStatus) Type() protoreflect.EnumType {
	return &file_app_mltraining_v1_ml_training_proto_enumTypes[1]
}

func (x TrainingStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TrainingStatus.Descriptor instead.
func (TrainingStatus) EnumDescriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{1}
}

type SubmitTrainingJobRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Filter         *v1.Filter `protobuf:"bytes,1,opt,name=filter,proto3" json:"filter,omitempty"`
	OrganizationId string     `protobuf:"bytes,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ModelName      string     `protobuf:"bytes,3,opt,name=model_name,json=modelName,proto3" json:"model_name,omitempty"`
	ModelVersion   string     `protobuf:"bytes,4,opt,name=model_version,json=modelVersion,proto3" json:"model_version,omitempty"`
	ModelType      ModelType  `protobuf:"varint,5,opt,name=model_type,json=modelType,proto3,enum=viam.app.mltraining.v1.ModelType" json:"model_type,omitempty"`
	TrainingLabels []string   `protobuf:"bytes,6,rep,name=training_labels,json=trainingLabels,proto3" json:"training_labels,omitempty"`
}

func (x *SubmitTrainingJobRequest) Reset() {
	*x = SubmitTrainingJobRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitTrainingJobRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitTrainingJobRequest) ProtoMessage() {}

func (x *SubmitTrainingJobRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitTrainingJobRequest.ProtoReflect.Descriptor instead.
func (*SubmitTrainingJobRequest) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{0}
}

func (x *SubmitTrainingJobRequest) GetFilter() *v1.Filter {
	if x != nil {
		return x.Filter
	}
	return nil
}

func (x *SubmitTrainingJobRequest) GetOrganizationId() string {
	if x != nil {
		return x.OrganizationId
	}
	return ""
}

func (x *SubmitTrainingJobRequest) GetModelName() string {
	if x != nil {
		return x.ModelName
	}
	return ""
}

func (x *SubmitTrainingJobRequest) GetModelVersion() string {
	if x != nil {
		return x.ModelVersion
	}
	return ""
}

func (x *SubmitTrainingJobRequest) GetModelType() ModelType {
	if x != nil {
		return x.ModelType
	}
	return ModelType_MODEL_TYPE_UNSPECIFIED
}

func (x *SubmitTrainingJobRequest) GetTrainingLabels() []string {
	if x != nil {
		return x.TrainingLabels
	}
	return nil
}

type SubmitTrainingJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *SubmitTrainingJobResponse) Reset() {
	*x = SubmitTrainingJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitTrainingJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitTrainingJobResponse) ProtoMessage() {}

func (x *SubmitTrainingJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitTrainingJobResponse.ProtoReflect.Descriptor instead.
func (*SubmitTrainingJobResponse) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{1}
}

func (x *SubmitTrainingJobResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTrainingJobRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTrainingJobRequest) Reset() {
	*x = GetTrainingJobRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTrainingJobRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTrainingJobRequest) ProtoMessage() {}

func (x *GetTrainingJobRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTrainingJobRequest.ProtoReflect.Descriptor instead.
func (*GetTrainingJobRequest) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{2}
}

func (x *GetTrainingJobRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTrainingJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Metadata *TrainingJobMetadata `protobuf:"bytes,2,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *GetTrainingJobResponse) Reset() {
	*x = GetTrainingJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTrainingJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTrainingJobResponse) ProtoMessage() {}

func (x *GetTrainingJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTrainingJobResponse.ProtoReflect.Descriptor instead.
func (*GetTrainingJobResponse) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{3}
}

func (x *GetTrainingJobResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetTrainingJobResponse) GetMetadata() *TrainingJobMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type TrainingJobMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Request       *SubmitTrainingJobRequest `protobuf:"bytes,1,opt,name=request,proto3" json:"request,omitempty"`
	Status        TrainingStatus            `protobuf:"varint,2,opt,name=status,proto3,enum=viam.app.mltraining.v1.TrainingStatus" json:"status,omitempty"`
	CreatedOn     *timestamppb.Timestamp    `protobuf:"bytes,3,opt,name=created_on,json=createdOn,proto3" json:"created_on,omitempty"`
	LastModified  *timestamppb.Timestamp    `protobuf:"bytes,4,opt,name=last_modified,json=lastModified,proto3" json:"last_modified,omitempty"`
	SyncedModelId string                    `protobuf:"bytes,5,opt,name=synced_model_id,json=syncedModelId,proto3" json:"synced_model_id,omitempty"`
}

func (x *TrainingJobMetadata) Reset() {
	*x = TrainingJobMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrainingJobMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrainingJobMetadata) ProtoMessage() {}

func (x *TrainingJobMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrainingJobMetadata.ProtoReflect.Descriptor instead.
func (*TrainingJobMetadata) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{4}
}

func (x *TrainingJobMetadata) GetRequest() *SubmitTrainingJobRequest {
	if x != nil {
		return x.Request
	}
	return nil
}

func (x *TrainingJobMetadata) GetStatus() TrainingStatus {
	if x != nil {
		return x.Status
	}
	return TrainingStatus_TRAINING_STATUS_UNSPECIFIED
}

func (x *TrainingJobMetadata) GetCreatedOn() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedOn
	}
	return nil
}

func (x *TrainingJobMetadata) GetLastModified() *timestamppb.Timestamp {
	if x != nil {
		return x.LastModified
	}
	return nil
}

func (x *TrainingJobMetadata) GetSyncedModelId() string {
	if x != nil {
		return x.SyncedModelId
	}
	return ""
}

type TrainingJob struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Metadata   *TrainingJobMetadata `protobuf:"bytes,2,opt,name=metadata,proto3" json:"metadata,omitempty"`
	OutputPath string               `protobuf:"bytes,3,opt,name=output_path,json=outputPath,proto3" json:"output_path,omitempty"`
	// The vertex_job_id is the id of the Vertex AI custom training job
	// backing our concept of a TrainingJob.
	VertexJobId   string           `protobuf:"bytes,4,opt,name=vertex_job_id,json=vertexJobId,proto3" json:"vertex_job_id,omitempty"`
	ModelMetadata *structpb.Struct `protobuf:"bytes,5,opt,name=model_metadata,json=modelMetadata,proto3" json:"model_metadata,omitempty"`
}

func (x *TrainingJob) Reset() {
	*x = TrainingJob{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrainingJob) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrainingJob) ProtoMessage() {}

func (x *TrainingJob) ProtoReflect() protoreflect.Message {
	mi := &file_app_mltraining_v1_ml_training_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrainingJob.ProtoReflect.Descriptor instead.
func (*TrainingJob) Descriptor() ([]byte, []int) {
	return file_app_mltraining_v1_ml_training_proto_rawDescGZIP(), []int{5}
}

func (x *TrainingJob) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TrainingJob) GetMetadata() *TrainingJobMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *TrainingJob) GetOutputPath() string {
	if x != nil {
		return x.OutputPath
	}
	return ""
}

func (x *TrainingJob) GetVertexJobId() string {
	if x != nil {
		return x.VertexJobId
	}
	return ""
}

func (x *TrainingJob) GetModelMetadata() *structpb.Struct {
	if x != nil {
		return x.ModelMetadata
	}
	return nil
}

var File_app_mltraining_v1_ml_training_proto protoreflect.FileDescriptor

var file_app_mltraining_v1_ml_training_proto_rawDesc = []byte{
	0x0a, 0x23, 0x61, 0x70, 0x70, 0x2f, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67,
	0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x6c, 0x5f, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e,
	0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x61,
	0x70, 0x70, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4, 0x02, 0x0a, 0x18, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54,
	0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x30, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x18, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x76, 0x31, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x52, 0x06, 0x66, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x6f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x40, 0x0a, 0x0a, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e,
	0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f,
	0x64, 0x65, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x52, 0x09, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x5f, 0x6c,
	0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0e, 0x74, 0x72, 0x61,
	0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x22, 0x2b, 0x0a, 0x19, 0x53,
	0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x27, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x54,
	0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x22, 0x71, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67,
	0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x47, 0x0a, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e,
	0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a,
	0x6f, 0x62, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x22, 0xc5, 0x02, 0x0a, 0x13, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e,
	0x67, 0x4a, 0x6f, 0x62, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x4a, 0x0a, 0x07,
	0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x30, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e,
	0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x72, 0x61,
	0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52,
	0x07, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76,
	0x31, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x5f, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x4f, 0x6e, 0x12, 0x3f, 0x0a, 0x0d, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0c, 0x6c, 0x61, 0x73, 0x74, 0x4d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x65, 0x64, 0x12, 0x26, 0x0a, 0x0f, 0x73, 0x79, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x73,
	0x79, 0x6e, 0x63, 0x65, 0x64, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x49, 0x64, 0x22, 0xeb, 0x01, 0x0a,
	0x0b, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x47, 0x0a, 0x08,
	0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69,
	0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67,
	0x4a, 0x6f, 0x62, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1f, 0x0a, 0x0b, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x5f,
	0x70, 0x61, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6f, 0x75, 0x74, 0x70,
	0x75, 0x74, 0x50, 0x61, 0x74, 0x68, 0x12, 0x22, 0x0a, 0x0d, 0x76, 0x65, 0x72, 0x74, 0x65, 0x78,
	0x5f, 0x6a, 0x6f, 0x62, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x76,
	0x65, 0x72, 0x74, 0x65, 0x78, 0x4a, 0x6f, 0x62, 0x49, 0x64, 0x12, 0x3e, 0x0a, 0x0e, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x0d, 0x6d, 0x6f, 0x64,
	0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2a, 0x7d, 0x0a, 0x09, 0x4d, 0x6f,
	0x64, 0x65, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x4d, 0x4f, 0x44, 0x45, 0x4c,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x29, 0x0a, 0x25, 0x4d, 0x4f, 0x44, 0x45, 0x4c, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x4d, 0x55, 0x4c, 0x54, 0x49, 0x5f, 0x43, 0x4c, 0x41, 0x53, 0x53, 0x5f, 0x43, 0x4c,
	0x41, 0x53, 0x53, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x01, 0x12, 0x29,
	0x0a, 0x25, 0x4d, 0x4f, 0x44, 0x45, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4d, 0x55, 0x4c,
	0x54, 0x49, 0x5f, 0x4c, 0x41, 0x42, 0x45, 0x4c, 0x5f, 0x43, 0x4c, 0x41, 0x53, 0x53, 0x49, 0x46,
	0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x02, 0x2a, 0xaa, 0x01, 0x0a, 0x0e, 0x54, 0x72,
	0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1f, 0x0a, 0x1b,
	0x54, 0x52, 0x41, 0x49, 0x4e, 0x49, 0x4e, 0x47, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f,
	0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a,
	0x17, 0x54, 0x52, 0x41, 0x49, 0x4e, 0x49, 0x4e, 0x47, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53,
	0x5f, 0x50, 0x45, 0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x12, 0x1f, 0x0a, 0x1b, 0x54, 0x52,
	0x41, 0x49, 0x4e, 0x49, 0x4e, 0x47, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e,
	0x5f, 0x50, 0x52, 0x4f, 0x47, 0x52, 0x45, 0x53, 0x53, 0x10, 0x02, 0x12, 0x1d, 0x0a, 0x19, 0x54,
	0x52, 0x41, 0x49, 0x4e, 0x49, 0x4e, 0x47, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x43,
	0x4f, 0x4d, 0x50, 0x4c, 0x45, 0x54, 0x45, 0x44, 0x10, 0x03, 0x12, 0x1a, 0x0a, 0x16, 0x54, 0x52,
	0x41, 0x49, 0x4e, 0x49, 0x4e, 0x47, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x46, 0x41,
	0x49, 0x4c, 0x45, 0x44, 0x10, 0x04, 0x32, 0xfe, 0x01, 0x0a, 0x11, 0x4d, 0x4c, 0x54, 0x72, 0x61,
	0x69, 0x6e, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x78, 0x0a, 0x11,
	0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f,
	0x62, 0x12, 0x30, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74,
	0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69,
	0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x31, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x6d,
	0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x75, 0x62,
	0x6d, 0x69, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6f, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x12, 0x2d, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x61, 0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76,
	0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61,
	0x70, 0x70, 0x2e, 0x6d, 0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31,
	0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x4a, 0x6f, 0x62, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x23, 0x5a, 0x21, 0x67, 0x6f, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x70, 0x70, 0x2f, 0x6d,
	0x6c, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_app_mltraining_v1_ml_training_proto_rawDescOnce sync.Once
	file_app_mltraining_v1_ml_training_proto_rawDescData = file_app_mltraining_v1_ml_training_proto_rawDesc
)

func file_app_mltraining_v1_ml_training_proto_rawDescGZIP() []byte {
	file_app_mltraining_v1_ml_training_proto_rawDescOnce.Do(func() {
		file_app_mltraining_v1_ml_training_proto_rawDescData = protoimpl.X.CompressGZIP(file_app_mltraining_v1_ml_training_proto_rawDescData)
	})
	return file_app_mltraining_v1_ml_training_proto_rawDescData
}

var file_app_mltraining_v1_ml_training_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_app_mltraining_v1_ml_training_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_app_mltraining_v1_ml_training_proto_goTypes = []interface{}{
	(ModelType)(0),                    // 0: viam.app.mltraining.v1.ModelType
	(TrainingStatus)(0),               // 1: viam.app.mltraining.v1.TrainingStatus
	(*SubmitTrainingJobRequest)(nil),  // 2: viam.app.mltraining.v1.SubmitTrainingJobRequest
	(*SubmitTrainingJobResponse)(nil), // 3: viam.app.mltraining.v1.SubmitTrainingJobResponse
	(*GetTrainingJobRequest)(nil),     // 4: viam.app.mltraining.v1.GetTrainingJobRequest
	(*GetTrainingJobResponse)(nil),    // 5: viam.app.mltraining.v1.GetTrainingJobResponse
	(*TrainingJobMetadata)(nil),       // 6: viam.app.mltraining.v1.TrainingJobMetadata
	(*TrainingJob)(nil),               // 7: viam.app.mltraining.v1.TrainingJob
	(*v1.Filter)(nil),                 // 8: viam.app.data.v1.Filter
	(*timestamppb.Timestamp)(nil),     // 9: google.protobuf.Timestamp
	(*structpb.Struct)(nil),           // 10: google.protobuf.Struct
}
var file_app_mltraining_v1_ml_training_proto_depIdxs = []int32{
	8,  // 0: viam.app.mltraining.v1.SubmitTrainingJobRequest.filter:type_name -> viam.app.data.v1.Filter
	0,  // 1: viam.app.mltraining.v1.SubmitTrainingJobRequest.model_type:type_name -> viam.app.mltraining.v1.ModelType
	6,  // 2: viam.app.mltraining.v1.GetTrainingJobResponse.metadata:type_name -> viam.app.mltraining.v1.TrainingJobMetadata
	2,  // 3: viam.app.mltraining.v1.TrainingJobMetadata.request:type_name -> viam.app.mltraining.v1.SubmitTrainingJobRequest
	1,  // 4: viam.app.mltraining.v1.TrainingJobMetadata.status:type_name -> viam.app.mltraining.v1.TrainingStatus
	9,  // 5: viam.app.mltraining.v1.TrainingJobMetadata.created_on:type_name -> google.protobuf.Timestamp
	9,  // 6: viam.app.mltraining.v1.TrainingJobMetadata.last_modified:type_name -> google.protobuf.Timestamp
	6,  // 7: viam.app.mltraining.v1.TrainingJob.metadata:type_name -> viam.app.mltraining.v1.TrainingJobMetadata
	10, // 8: viam.app.mltraining.v1.TrainingJob.model_metadata:type_name -> google.protobuf.Struct
	2,  // 9: viam.app.mltraining.v1.MLTrainingService.SubmitTrainingJob:input_type -> viam.app.mltraining.v1.SubmitTrainingJobRequest
	4,  // 10: viam.app.mltraining.v1.MLTrainingService.GetTrainingJob:input_type -> viam.app.mltraining.v1.GetTrainingJobRequest
	3,  // 11: viam.app.mltraining.v1.MLTrainingService.SubmitTrainingJob:output_type -> viam.app.mltraining.v1.SubmitTrainingJobResponse
	5,  // 12: viam.app.mltraining.v1.MLTrainingService.GetTrainingJob:output_type -> viam.app.mltraining.v1.GetTrainingJobResponse
	11, // [11:13] is the sub-list for method output_type
	9,  // [9:11] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_app_mltraining_v1_ml_training_proto_init() }
func file_app_mltraining_v1_ml_training_proto_init() {
	if File_app_mltraining_v1_ml_training_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_app_mltraining_v1_ml_training_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitTrainingJobRequest); i {
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
		file_app_mltraining_v1_ml_training_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitTrainingJobResponse); i {
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
		file_app_mltraining_v1_ml_training_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTrainingJobRequest); i {
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
		file_app_mltraining_v1_ml_training_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTrainingJobResponse); i {
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
		file_app_mltraining_v1_ml_training_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrainingJobMetadata); i {
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
		file_app_mltraining_v1_ml_training_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrainingJob); i {
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
			RawDescriptor: file_app_mltraining_v1_ml_training_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_app_mltraining_v1_ml_training_proto_goTypes,
		DependencyIndexes: file_app_mltraining_v1_ml_training_proto_depIdxs,
		EnumInfos:         file_app_mltraining_v1_ml_training_proto_enumTypes,
		MessageInfos:      file_app_mltraining_v1_ml_training_proto_msgTypes,
	}.Build()
	File_app_mltraining_v1_ml_training_proto = out.File
	file_app_mltraining_v1_ml_training_proto_rawDesc = nil
	file_app_mltraining_v1_ml_training_proto_goTypes = nil
	file_app_mltraining_v1_ml_training_proto_depIdxs = nil
}
