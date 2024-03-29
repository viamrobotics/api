// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: app/build/v1/build.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
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

type JobStatus int32

const (
	JobStatus_JOB_STATUS_UNSPECIFIED JobStatus = 0
	// IN_PROGRESS = pending or executing on cloud infra. Artifact has not been uploaded.
	JobStatus_JOB_STATUS_IN_PROGRESS JobStatus = 1
	JobStatus_JOB_STATUS_FAILED      JobStatus = 2
	JobStatus_JOB_STATUS_DONE        JobStatus = 3
)

// Enum value maps for JobStatus.
var (
	JobStatus_name = map[int32]string{
		0: "JOB_STATUS_UNSPECIFIED",
		1: "JOB_STATUS_IN_PROGRESS",
		2: "JOB_STATUS_FAILED",
		3: "JOB_STATUS_DONE",
	}
	JobStatus_value = map[string]int32{
		"JOB_STATUS_UNSPECIFIED": 0,
		"JOB_STATUS_IN_PROGRESS": 1,
		"JOB_STATUS_FAILED":      2,
		"JOB_STATUS_DONE":        3,
	}
)

func (x JobStatus) Enum() *JobStatus {
	p := new(JobStatus)
	*p = x
	return p
}

func (x JobStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (JobStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_app_build_v1_build_proto_enumTypes[0].Descriptor()
}

func (JobStatus) Type() protoreflect.EnumType {
	return &file_app_build_v1_build_proto_enumTypes[0]
}

func (x JobStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use JobStatus.Descriptor instead.
func (JobStatus) EnumDescriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{0}
}

type StartBuildRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// repo to build
	Repo string `protobuf:"bytes,1,opt,name=repo,proto3" json:"repo,omitempty"`
	// optional git ref; defaults to 'main'
	Ref *string `protobuf:"bytes,2,opt,name=ref,proto3,oneof" json:"ref,omitempty"`
	// list of platforms to build
	Platforms []string `protobuf:"bytes,3,rep,name=platforms,proto3" json:"platforms,omitempty"`
	// module_id as prefix:name pair
	ModuleId string `protobuf:"bytes,4,opt,name=module_id,json=moduleId,proto3" json:"module_id,omitempty"`
	// version of the module to publish
	// must be valid semver2.0 string (ex: 1.2.3-rc0)
	ModuleVersion string `protobuf:"bytes,5,opt,name=module_version,json=moduleVersion,proto3" json:"module_version,omitempty"`
}

func (x *StartBuildRequest) Reset() {
	*x = StartBuildRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StartBuildRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StartBuildRequest) ProtoMessage() {}

func (x *StartBuildRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StartBuildRequest.ProtoReflect.Descriptor instead.
func (*StartBuildRequest) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{0}
}

func (x *StartBuildRequest) GetRepo() string {
	if x != nil {
		return x.Repo
	}
	return ""
}

func (x *StartBuildRequest) GetRef() string {
	if x != nil && x.Ref != nil {
		return *x.Ref
	}
	return ""
}

func (x *StartBuildRequest) GetPlatforms() []string {
	if x != nil {
		return x.Platforms
	}
	return nil
}

func (x *StartBuildRequest) GetModuleId() string {
	if x != nil {
		return x.ModuleId
	}
	return ""
}

func (x *StartBuildRequest) GetModuleVersion() string {
	if x != nil {
		return x.ModuleVersion
	}
	return ""
}

type StartBuildResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BuildId string `protobuf:"bytes,1,opt,name=build_id,json=buildId,proto3" json:"build_id,omitempty"`
}

func (x *StartBuildResponse) Reset() {
	*x = StartBuildResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StartBuildResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StartBuildResponse) ProtoMessage() {}

func (x *StartBuildResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StartBuildResponse.ProtoReflect.Descriptor instead.
func (*StartBuildResponse) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{1}
}

func (x *StartBuildResponse) GetBuildId() string {
	if x != nil {
		return x.BuildId
	}
	return ""
}

type GetLogsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BuildId  string `protobuf:"bytes,1,opt,name=build_id,json=buildId,proto3" json:"build_id,omitempty"`
	Platform string `protobuf:"bytes,2,opt,name=platform,proto3" json:"platform,omitempty"`
}

func (x *GetLogsRequest) Reset() {
	*x = GetLogsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetLogsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLogsRequest) ProtoMessage() {}

func (x *GetLogsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLogsRequest.ProtoReflect.Descriptor instead.
func (*GetLogsRequest) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{2}
}

func (x *GetLogsRequest) GetBuildId() string {
	if x != nil {
		return x.BuildId
	}
	return ""
}

func (x *GetLogsRequest) GetPlatform() string {
	if x != nil {
		return x.Platform
	}
	return ""
}

// GetLogsResponse is a streaming endpoint that may have multiple messages that belong
// to the same build_step if there are too many bytes to fit into a single gRPC
// response.
type GetLogsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BuildStep string `protobuf:"bytes,1,opt,name=build_step,json=buildStep,proto3" json:"build_step,omitempty"`
	// includes multiple lines delimited by \n\r
	Data string `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *GetLogsResponse) Reset() {
	*x = GetLogsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetLogsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLogsResponse) ProtoMessage() {}

func (x *GetLogsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLogsResponse.ProtoReflect.Descriptor instead.
func (*GetLogsResponse) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{3}
}

func (x *GetLogsResponse) GetBuildStep() string {
	if x != nil {
		return x.BuildStep
	}
	return ""
}

func (x *GetLogsResponse) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

type JobInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BuildId   string                 `protobuf:"bytes,1,opt,name=build_id,json=buildId,proto3" json:"build_id,omitempty"`
	Platform  string                 `protobuf:"bytes,2,opt,name=platform,proto3" json:"platform,omitempty"`
	Version   string                 `protobuf:"bytes,3,opt,name=version,proto3" json:"version,omitempty"`
	Status    JobStatus              `protobuf:"varint,4,opt,name=status,proto3,enum=viam.app.build.v1.JobStatus" json:"status,omitempty"`
	StartTime *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=start_time,json=startTime,proto3" json:"start_time,omitempty"`
	EndTime   *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=end_time,json=endTime,proto3,oneof" json:"end_time,omitempty"`
}

func (x *JobInfo) Reset() {
	*x = JobInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JobInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JobInfo) ProtoMessage() {}

func (x *JobInfo) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JobInfo.ProtoReflect.Descriptor instead.
func (*JobInfo) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{4}
}

func (x *JobInfo) GetBuildId() string {
	if x != nil {
		return x.BuildId
	}
	return ""
}

func (x *JobInfo) GetPlatform() string {
	if x != nil {
		return x.Platform
	}
	return ""
}

func (x *JobInfo) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *JobInfo) GetStatus() JobStatus {
	if x != nil {
		return x.Status
	}
	return JobStatus_JOB_STATUS_UNSPECIFIED
}

func (x *JobInfo) GetStartTime() *timestamppb.Timestamp {
	if x != nil {
		return x.StartTime
	}
	return nil
}

func (x *JobInfo) GetEndTime() *timestamppb.Timestamp {
	if x != nil {
		return x.EndTime
	}
	return nil
}

type ListJobsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// module_id as prefix:name pair
	ModuleId string `protobuf:"bytes,1,opt,name=module_id,json=moduleId,proto3" json:"module_id,omitempty"`
	// don't return more than max_jobs_length jobs
	// if not present, return all jobs.
	MaxJobsLength *int32 `protobuf:"varint,2,opt,name=max_jobs_length,json=maxJobsLength,proto3,oneof" json:"max_jobs_length,omitempty"`
	// only return jobs that match this build id
	// if not present, return all jobs.
	BuildId *string `protobuf:"bytes,3,opt,name=build_id,json=buildId,proto3,oneof" json:"build_id,omitempty"`
}

func (x *ListJobsRequest) Reset() {
	*x = ListJobsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListJobsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListJobsRequest) ProtoMessage() {}

func (x *ListJobsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListJobsRequest.ProtoReflect.Descriptor instead.
func (*ListJobsRequest) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{5}
}

func (x *ListJobsRequest) GetModuleId() string {
	if x != nil {
		return x.ModuleId
	}
	return ""
}

func (x *ListJobsRequest) GetMaxJobsLength() int32 {
	if x != nil && x.MaxJobsLength != nil {
		return *x.MaxJobsLength
	}
	return 0
}

func (x *ListJobsRequest) GetBuildId() string {
	if x != nil && x.BuildId != nil {
		return *x.BuildId
	}
	return ""
}

type ListJobsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// jobs is ordered by (build start time, alphabetical platform).
	Jobs []*JobInfo `protobuf:"bytes,1,rep,name=jobs,proto3" json:"jobs,omitempty"`
}

func (x *ListJobsResponse) Reset() {
	*x = ListJobsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_build_v1_build_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListJobsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListJobsResponse) ProtoMessage() {}

func (x *ListJobsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_build_v1_build_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListJobsResponse.ProtoReflect.Descriptor instead.
func (*ListJobsResponse) Descriptor() ([]byte, []int) {
	return file_app_build_v1_build_proto_rawDescGZIP(), []int{6}
}

func (x *ListJobsResponse) GetJobs() []*JobInfo {
	if x != nil {
		return x.Jobs
	}
	return nil
}

var File_app_build_v1_build_proto protoreflect.FileDescriptor

var file_app_build_v1_build_proto_rawDesc = []byte{
	0x0a, 0x18, 0x61, 0x70, 0x70, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x76, 0x31, 0x2f, 0x62,
	0x75, 0x69, 0x6c, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x11, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x1a, 0x1f, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa8,
	0x01, 0x0a, 0x11, 0x53, 0x74, 0x61, 0x72, 0x74, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x65, 0x70, 0x6f, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x72, 0x65, 0x70, 0x6f, 0x12, 0x15, 0x0a, 0x03, 0x72, 0x65, 0x66, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x03, 0x72, 0x65, 0x66, 0x88, 0x01, 0x01, 0x12,
	0x1c, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x73, 0x18, 0x03, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x09, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x73, 0x12, 0x1b, 0x0a,
	0x09, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x6d, 0x6f,
	0x64, 0x75, 0x6c, 0x65, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0d, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x42, 0x06, 0x0a, 0x04, 0x5f, 0x72, 0x65, 0x66, 0x22, 0x2f, 0x0a, 0x12, 0x53, 0x74, 0x61,
	0x72, 0x74, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x19, 0x0a, 0x08, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x49, 0x64, 0x22, 0x47, 0x0a, 0x0e, 0x47, 0x65,
	0x74, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08,
	0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x62, 0x75, 0x69, 0x6c, 0x64, 0x49, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6c, 0x61, 0x74, 0x66,
	0x6f, 0x72, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x74, 0x66,
	0x6f, 0x72, 0x6d, 0x22, 0x44, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f,
	0x73, 0x74, 0x65, 0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62, 0x75, 0x69, 0x6c,
	0x64, 0x53, 0x74, 0x65, 0x70, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x94, 0x02, 0x0a, 0x07, 0x4a, 0x6f,
	0x62, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x19, 0x0a, 0x08, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x49, 0x64,
	0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x12, 0x18, 0x0a, 0x07,
	0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70,
	0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x4a, 0x6f, 0x62, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x39, 0x0a, 0x0a,
	0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x73, 0x74,
	0x61, 0x72, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3a, 0x0a, 0x08, 0x65, 0x6e, 0x64, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x48, 0x00, 0x52, 0x07, 0x65, 0x6e, 0x64, 0x54, 0x69, 0x6d, 0x65,
	0x88, 0x01, 0x01, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x65, 0x6e, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x22, 0x9c, 0x01, 0x0a, 0x0f, 0x4c, 0x69, 0x73, 0x74, 0x4a, 0x6f, 0x62, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x49,
	0x64, 0x12, 0x2b, 0x0a, 0x0f, 0x6d, 0x61, 0x78, 0x5f, 0x6a, 0x6f, 0x62, 0x73, 0x5f, 0x6c, 0x65,
	0x6e, 0x67, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x0d, 0x6d, 0x61,
	0x78, 0x4a, 0x6f, 0x62, 0x73, 0x4c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x88, 0x01, 0x01, 0x12, 0x1e,
	0x0a, 0x08, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x01, 0x52, 0x07, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x49, 0x64, 0x88, 0x01, 0x01, 0x42, 0x12,
	0x0a, 0x10, 0x5f, 0x6d, 0x61, 0x78, 0x5f, 0x6a, 0x6f, 0x62, 0x73, 0x5f, 0x6c, 0x65, 0x6e, 0x67,
	0x74, 0x68, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x5f, 0x69, 0x64, 0x22,
	0x42, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x4a, 0x6f, 0x62, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x04, 0x6a, 0x6f, 0x62, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69,
	0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x4a, 0x6f, 0x62, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x6a,
	0x6f, 0x62, 0x73, 0x2a, 0x6f, 0x0a, 0x09, 0x4a, 0x6f, 0x62, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x1a, 0x0a, 0x16, 0x4a, 0x4f, 0x42, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1a, 0x0a, 0x16,
	0x4a, 0x4f, 0x42, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x5f, 0x50, 0x52,
	0x4f, 0x47, 0x52, 0x45, 0x53, 0x53, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x4a, 0x4f, 0x42, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x46, 0x41, 0x49, 0x4c, 0x45, 0x44, 0x10, 0x02, 0x12,
	0x13, 0x0a, 0x0f, 0x4a, 0x4f, 0x42, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x44, 0x4f,
	0x4e, 0x45, 0x10, 0x03, 0x32, 0x92, 0x02, 0x0a, 0x0c, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59, 0x0a, 0x0a, 0x53, 0x74, 0x61, 0x72, 0x74, 0x42, 0x75,
	0x69, 0x6c, 0x64, 0x12, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62,
	0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x61, 0x72, 0x74, 0x42, 0x75, 0x69,
	0x6c, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74,
	0x61, 0x72, 0x74, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x52, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x73, 0x12, 0x21, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e,
	0x47, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e,
	0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x30, 0x01, 0x12, 0x53, 0x0a, 0x08, 0x4c, 0x69, 0x73, 0x74, 0x4a, 0x6f, 0x62, 0x73,
	0x12, 0x22, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x62, 0x75, 0x69, 0x6c,
	0x64, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4a, 0x6f, 0x62, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e,
	0x62, 0x75, 0x69, 0x6c, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4a, 0x6f, 0x62,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x1e, 0x5a, 0x1c, 0x67, 0x6f, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x70, 0x70,
	0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_app_build_v1_build_proto_rawDescOnce sync.Once
	file_app_build_v1_build_proto_rawDescData = file_app_build_v1_build_proto_rawDesc
)

func file_app_build_v1_build_proto_rawDescGZIP() []byte {
	file_app_build_v1_build_proto_rawDescOnce.Do(func() {
		file_app_build_v1_build_proto_rawDescData = protoimpl.X.CompressGZIP(file_app_build_v1_build_proto_rawDescData)
	})
	return file_app_build_v1_build_proto_rawDescData
}

var file_app_build_v1_build_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_app_build_v1_build_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_app_build_v1_build_proto_goTypes = []interface{}{
	(JobStatus)(0),                // 0: viam.app.build.v1.JobStatus
	(*StartBuildRequest)(nil),     // 1: viam.app.build.v1.StartBuildRequest
	(*StartBuildResponse)(nil),    // 2: viam.app.build.v1.StartBuildResponse
	(*GetLogsRequest)(nil),        // 3: viam.app.build.v1.GetLogsRequest
	(*GetLogsResponse)(nil),       // 4: viam.app.build.v1.GetLogsResponse
	(*JobInfo)(nil),               // 5: viam.app.build.v1.JobInfo
	(*ListJobsRequest)(nil),       // 6: viam.app.build.v1.ListJobsRequest
	(*ListJobsResponse)(nil),      // 7: viam.app.build.v1.ListJobsResponse
	(*timestamppb.Timestamp)(nil), // 8: google.protobuf.Timestamp
}
var file_app_build_v1_build_proto_depIdxs = []int32{
	0, // 0: viam.app.build.v1.JobInfo.status:type_name -> viam.app.build.v1.JobStatus
	8, // 1: viam.app.build.v1.JobInfo.start_time:type_name -> google.protobuf.Timestamp
	8, // 2: viam.app.build.v1.JobInfo.end_time:type_name -> google.protobuf.Timestamp
	5, // 3: viam.app.build.v1.ListJobsResponse.jobs:type_name -> viam.app.build.v1.JobInfo
	1, // 4: viam.app.build.v1.BuildService.StartBuild:input_type -> viam.app.build.v1.StartBuildRequest
	3, // 5: viam.app.build.v1.BuildService.GetLogs:input_type -> viam.app.build.v1.GetLogsRequest
	6, // 6: viam.app.build.v1.BuildService.ListJobs:input_type -> viam.app.build.v1.ListJobsRequest
	2, // 7: viam.app.build.v1.BuildService.StartBuild:output_type -> viam.app.build.v1.StartBuildResponse
	4, // 8: viam.app.build.v1.BuildService.GetLogs:output_type -> viam.app.build.v1.GetLogsResponse
	7, // 9: viam.app.build.v1.BuildService.ListJobs:output_type -> viam.app.build.v1.ListJobsResponse
	7, // [7:10] is the sub-list for method output_type
	4, // [4:7] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_app_build_v1_build_proto_init() }
func file_app_build_v1_build_proto_init() {
	if File_app_build_v1_build_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_app_build_v1_build_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StartBuildRequest); i {
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
		file_app_build_v1_build_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StartBuildResponse); i {
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
		file_app_build_v1_build_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetLogsRequest); i {
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
		file_app_build_v1_build_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetLogsResponse); i {
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
		file_app_build_v1_build_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JobInfo); i {
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
		file_app_build_v1_build_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListJobsRequest); i {
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
		file_app_build_v1_build_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListJobsResponse); i {
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
	file_app_build_v1_build_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_app_build_v1_build_proto_msgTypes[4].OneofWrappers = []interface{}{}
	file_app_build_v1_build_proto_msgTypes[5].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_app_build_v1_build_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_app_build_v1_build_proto_goTypes,
		DependencyIndexes: file_app_build_v1_build_proto_depIdxs,
		EnumInfos:         file_app_build_v1_build_proto_enumTypes,
		MessageInfos:      file_app_build_v1_build_proto_msgTypes,
	}.Build()
	File_app_build_v1_build_proto = out.File
	file_app_build_v1_build_proto_rawDesc = nil
	file_app_build_v1_build_proto_goTypes = nil
	file_app_build_v1_build_proto_depIdxs = nil
}
