// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: service/slam/v1/slam.proto

package v1

import (
	v1 "go.viam.com/api/common/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

type GetPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of slam service
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetPositionRequest) Reset() {
	*x = GetPositionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_slam_v1_slam_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionRequest) ProtoMessage() {}

func (x *GetPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_service_slam_v1_slam_proto_msgTypes[0]
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
	return file_service_slam_v1_slam_proto_rawDescGZIP(), []int{0}
}

func (x *GetPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type GetPositionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Current position of the robot within the World frame.
	Pose *v1.PoseInFrame `protobuf:"bytes,1,opt,name=pose,proto3" json:"pose,omitempty"`
}

func (x *GetPositionResponse) Reset() {
	*x = GetPositionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_slam_v1_slam_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionResponse) ProtoMessage() {}

func (x *GetPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_service_slam_v1_slam_proto_msgTypes[1]
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
	return file_service_slam_v1_slam_proto_rawDescGZIP(), []int{1}
}

func (x *GetPositionResponse) GetPose() *v1.PoseInFrame {
	if x != nil {
		return x.Pose
	}
	return nil
}

type GetMapRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of slam service
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Requested MIME type of response (image/jpeg or image/pcd)
	MimeType string `protobuf:"bytes,2,opt,name=mime_type,json=mimeType,proto3" json:"mime_type,omitempty"`
	// Optional parameter for image/jpeg mime_type, used to project point
	// cloud into a 2D image.
	CameraPosition *v1.Pose `protobuf:"bytes,3,opt,name=camera_position,json=cameraPosition,proto3,oneof" json:"camera_position,omitempty"`
	// Optional parameter for image/jpeg mime_type, defaults to false.
	// Tells us whether to include the robot position on the 2D image.
	IncludeRobotMarker bool `protobuf:"varint,4,opt,name=include_robot_marker,json=includeRobotMarker,proto3" json:"include_robot_marker,omitempty"`
}

func (x *GetMapRequest) Reset() {
	*x = GetMapRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_slam_v1_slam_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMapRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMapRequest) ProtoMessage() {}

func (x *GetMapRequest) ProtoReflect() protoreflect.Message {
	mi := &file_service_slam_v1_slam_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMapRequest.ProtoReflect.Descriptor instead.
func (*GetMapRequest) Descriptor() ([]byte, []int) {
	return file_service_slam_v1_slam_proto_rawDescGZIP(), []int{2}
}

func (x *GetMapRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetMapRequest) GetMimeType() string {
	if x != nil {
		return x.MimeType
	}
	return ""
}

func (x *GetMapRequest) GetCameraPosition() *v1.Pose {
	if x != nil {
		return x.CameraPosition
	}
	return nil
}

func (x *GetMapRequest) GetIncludeRobotMarker() bool {
	if x != nil {
		return x.IncludeRobotMarker
	}
	return false
}

type GetMapResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Image or point cloud of mime_type.
	//
	// Types that are assignable to Map:
	//	*GetMapResponse_PointCloud
	//	*GetMapResponse_Image
	Map isGetMapResponse_Map `protobuf_oneof:"map"`
	// Actual MIME type of response (image/jpeg or image/pcd)
	MimeType string `protobuf:"bytes,3,opt,name=mime_type,json=mimeType,proto3" json:"mime_type,omitempty"`
}

func (x *GetMapResponse) Reset() {
	*x = GetMapResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_slam_v1_slam_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMapResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMapResponse) ProtoMessage() {}

func (x *GetMapResponse) ProtoReflect() protoreflect.Message {
	mi := &file_service_slam_v1_slam_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMapResponse.ProtoReflect.Descriptor instead.
func (*GetMapResponse) Descriptor() ([]byte, []int) {
	return file_service_slam_v1_slam_proto_rawDescGZIP(), []int{3}
}

func (m *GetMapResponse) GetMap() isGetMapResponse_Map {
	if m != nil {
		return m.Map
	}
	return nil
}

func (x *GetMapResponse) GetPointCloud() *v1.PointCloudObject {
	if x, ok := x.GetMap().(*GetMapResponse_PointCloud); ok {
		return x.PointCloud
	}
	return nil
}

func (x *GetMapResponse) GetImage() []byte {
	if x, ok := x.GetMap().(*GetMapResponse_Image); ok {
		return x.Image
	}
	return nil
}

func (x *GetMapResponse) GetMimeType() string {
	if x != nil {
		return x.MimeType
	}
	return ""
}

type isGetMapResponse_Map interface {
	isGetMapResponse_Map()
}

type GetMapResponse_PointCloud struct {
	PointCloud *v1.PointCloudObject `protobuf:"bytes,1,opt,name=point_cloud,json=pointCloud,proto3,oneof"`
}

type GetMapResponse_Image struct {
	Image []byte `protobuf:"bytes,2,opt,name=image,proto3,oneof"`
}

func (*GetMapResponse_PointCloud) isGetMapResponse_Map() {}

func (*GetMapResponse_Image) isGetMapResponse_Map() {}

var File_service_slam_v1_slam_proto protoreflect.FileDescriptor

var file_service_slam_v1_slam_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73, 0x6c, 0x61, 0x6d, 0x2f, 0x76,
	0x31, 0x2f, 0x73, 0x6c, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x73, 0x6c, 0x61, 0x6d, 0x2e,
	0x76, 0x31, 0x1a, 0x16, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x28, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x50,
	0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x46, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x04, 0x70, 0x6f, 0x73,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x6f, 0x73, 0x65, 0x49, 0x6e, 0x46,
	0x72, 0x61, 0x6d, 0x65, 0x52, 0x04, 0x70, 0x6f, 0x73, 0x65, 0x22, 0xca, 0x01, 0x0a, 0x0d, 0x47,
	0x65, 0x74, 0x4d, 0x61, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x69, 0x6d, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x69, 0x6d, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x42, 0x0a,
	0x0f, 0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x6f, 0x73, 0x65, 0x48, 0x00, 0x52, 0x0e,
	0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x88, 0x01,
	0x01, 0x12, 0x30, 0x0a, 0x14, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x5f, 0x72, 0x6f, 0x62,
	0x6f, 0x74, 0x5f, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x12, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x52, 0x6f, 0x62, 0x6f, 0x74, 0x4d, 0x61, 0x72,
	0x6b, 0x65, 0x72, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x5f, 0x70,
	0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x91, 0x01, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x4d,
	0x61, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x43, 0x0a, 0x0b, 0x70, 0x6f,
	0x69, 0x6e, 0x74, 0x5f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31,
	0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x4f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x48, 0x00, 0x52, 0x0a, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x12,
	0x16, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00,
	0x52, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x69, 0x6d, 0x65, 0x5f,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x69, 0x6d, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x42, 0x05, 0x0a, 0x03, 0x6d, 0x61, 0x70, 0x32, 0xa9, 0x02, 0x0a, 0x0b,
	0x53, 0x4c, 0x41, 0x4d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x95, 0x01, 0x0a, 0x0b,
	0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x28, 0x2e, 0x76, 0x69,
	0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x73, 0x6c, 0x61, 0x6d, 0x2e,
	0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x73, 0x6c, 0x61, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74,
	0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x31, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2b, 0x12, 0x29, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73,
	0x6c, 0x61, 0x6d, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x70, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x81, 0x01, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x4d, 0x61, 0x70, 0x12, 0x23,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x73, 0x6c,
	0x61, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x61, 0x70, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x73, 0x6c, 0x61, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x61,
	0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2c, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x26, 0x12, 0x24, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73, 0x6c, 0x61, 0x6d, 0x2f, 0x7b, 0x6e, 0x61,
	0x6d, 0x65, 0x7d, 0x2f, 0x6d, 0x61, 0x70, 0x42, 0x3b, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x76,
	0x69, 0x61, 0x6d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x73, 0x6c, 0x61, 0x6d,
	0x2e, 0x76, 0x31, 0x5a, 0x1f, 0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73, 0x6c, 0x61,
	0x6d, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_service_slam_v1_slam_proto_rawDescOnce sync.Once
	file_service_slam_v1_slam_proto_rawDescData = file_service_slam_v1_slam_proto_rawDesc
)

func file_service_slam_v1_slam_proto_rawDescGZIP() []byte {
	file_service_slam_v1_slam_proto_rawDescOnce.Do(func() {
		file_service_slam_v1_slam_proto_rawDescData = protoimpl.X.CompressGZIP(file_service_slam_v1_slam_proto_rawDescData)
	})
	return file_service_slam_v1_slam_proto_rawDescData
}

var file_service_slam_v1_slam_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_service_slam_v1_slam_proto_goTypes = []interface{}{
	(*GetPositionRequest)(nil),  // 0: viam.service.slam.v1.GetPositionRequest
	(*GetPositionResponse)(nil), // 1: viam.service.slam.v1.GetPositionResponse
	(*GetMapRequest)(nil),       // 2: viam.service.slam.v1.GetMapRequest
	(*GetMapResponse)(nil),      // 3: viam.service.slam.v1.GetMapResponse
	(*v1.PoseInFrame)(nil),      // 4: viam.common.v1.PoseInFrame
	(*v1.Pose)(nil),             // 5: viam.common.v1.Pose
	(*v1.PointCloudObject)(nil), // 6: viam.common.v1.PointCloudObject
}
var file_service_slam_v1_slam_proto_depIdxs = []int32{
	4, // 0: viam.service.slam.v1.GetPositionResponse.pose:type_name -> viam.common.v1.PoseInFrame
	5, // 1: viam.service.slam.v1.GetMapRequest.camera_position:type_name -> viam.common.v1.Pose
	6, // 2: viam.service.slam.v1.GetMapResponse.point_cloud:type_name -> viam.common.v1.PointCloudObject
	0, // 3: viam.service.slam.v1.SLAMService.GetPosition:input_type -> viam.service.slam.v1.GetPositionRequest
	2, // 4: viam.service.slam.v1.SLAMService.GetMap:input_type -> viam.service.slam.v1.GetMapRequest
	1, // 5: viam.service.slam.v1.SLAMService.GetPosition:output_type -> viam.service.slam.v1.GetPositionResponse
	3, // 6: viam.service.slam.v1.SLAMService.GetMap:output_type -> viam.service.slam.v1.GetMapResponse
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_service_slam_v1_slam_proto_init() }
func file_service_slam_v1_slam_proto_init() {
	if File_service_slam_v1_slam_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_service_slam_v1_slam_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_service_slam_v1_slam_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
		file_service_slam_v1_slam_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMapRequest); i {
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
		file_service_slam_v1_slam_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMapResponse); i {
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
	file_service_slam_v1_slam_proto_msgTypes[2].OneofWrappers = []interface{}{}
	file_service_slam_v1_slam_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*GetMapResponse_PointCloud)(nil),
		(*GetMapResponse_Image)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_service_slam_v1_slam_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_service_slam_v1_slam_proto_goTypes,
		DependencyIndexes: file_service_slam_v1_slam_proto_depIdxs,
		MessageInfos:      file_service_slam_v1_slam_proto_msgTypes,
	}.Build()
	File_service_slam_v1_slam_proto = out.File
	file_service_slam_v1_slam_proto_rawDesc = nil
	file_service_slam_v1_slam_proto_goTypes = nil
	file_service_slam_v1_slam_proto_depIdxs = nil
}
