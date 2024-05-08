// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: service/vision/v1/vision.proto

package v1

import (
	context "context"
	v1 "go.viam.com/api/common/v1"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// VisionServiceClient is the client API for VisionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type VisionServiceClient interface {
	// GetDetectionsFromCamera will return a list of detections in the next image given a camera and a detector
	GetDetectionsFromCamera(ctx context.Context, in *GetDetectionsFromCameraRequest, opts ...grpc.CallOption) (*GetDetectionsFromCameraResponse, error)
	// GetDetections will return a list of detections in the next image given the image bytes and a detector
	GetDetections(ctx context.Context, in *GetDetectionsRequest, opts ...grpc.CallOption) (*GetDetectionsResponse, error)
	// GetClassificationsFromCamera will return a list of classifications in the next image given a camera and a classifier
	GetClassificationsFromCamera(ctx context.Context, in *GetClassificationsFromCameraRequest, opts ...grpc.CallOption) (*GetClassificationsFromCameraResponse, error)
	// GetClassifications will return a list of classifications in the next image given the image bytes and a classifier
	GetClassifications(ctx context.Context, in *GetClassificationsRequest, opts ...grpc.CallOption) (*GetClassificationsResponse, error)
	// GetObjectPointClouds returns all the found objects in a pointcloud from a camera of the underlying robot,
	// as well as the 3-vector center of each of the found objects.
	// A specific MIME type can be requested but may not necessarily be the same one returned.
	GetObjectPointClouds(ctx context.Context, in *GetObjectPointCloudsRequest, opts ...grpc.CallOption) (*GetObjectPointCloudsResponse, error)
	// GetProperties will return the properties as booleans given the name of the vision service
	GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type visionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewVisionServiceClient(cc grpc.ClientConnInterface) VisionServiceClient {
	return &visionServiceClient{cc}
}

func (c *visionServiceClient) GetDetectionsFromCamera(ctx context.Context, in *GetDetectionsFromCameraRequest, opts ...grpc.CallOption) (*GetDetectionsFromCameraResponse, error) {
	out := new(GetDetectionsFromCameraResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetDetectionsFromCamera", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) GetDetections(ctx context.Context, in *GetDetectionsRequest, opts ...grpc.CallOption) (*GetDetectionsResponse, error) {
	out := new(GetDetectionsResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetDetections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) GetClassificationsFromCamera(ctx context.Context, in *GetClassificationsFromCameraRequest, opts ...grpc.CallOption) (*GetClassificationsFromCameraResponse, error) {
	out := new(GetClassificationsFromCameraResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetClassificationsFromCamera", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) GetClassifications(ctx context.Context, in *GetClassificationsRequest, opts ...grpc.CallOption) (*GetClassificationsResponse, error) {
	out := new(GetClassificationsResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetClassifications", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) GetObjectPointClouds(ctx context.Context, in *GetObjectPointCloudsRequest, opts ...grpc.CallOption) (*GetObjectPointCloudsResponse, error) {
	out := new(GetObjectPointCloudsResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetObjectPointClouds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error) {
	out := new(GetPropertiesResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/GetProperties", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *visionServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, "/viam.service.vision.v1.VisionService/DoCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VisionServiceServer is the server API for VisionService service.
// All implementations must embed UnimplementedVisionServiceServer
// for forward compatibility
type VisionServiceServer interface {
	// GetDetectionsFromCamera will return a list of detections in the next image given a camera and a detector
	GetDetectionsFromCamera(context.Context, *GetDetectionsFromCameraRequest) (*GetDetectionsFromCameraResponse, error)
	// GetDetections will return a list of detections in the next image given the image bytes and a detector
	GetDetections(context.Context, *GetDetectionsRequest) (*GetDetectionsResponse, error)
	// GetClassificationsFromCamera will return a list of classifications in the next image given a camera and a classifier
	GetClassificationsFromCamera(context.Context, *GetClassificationsFromCameraRequest) (*GetClassificationsFromCameraResponse, error)
	// GetClassifications will return a list of classifications in the next image given the image bytes and a classifier
	GetClassifications(context.Context, *GetClassificationsRequest) (*GetClassificationsResponse, error)
	// GetObjectPointClouds returns all the found objects in a pointcloud from a camera of the underlying robot,
	// as well as the 3-vector center of each of the found objects.
	// A specific MIME type can be requested but may not necessarily be the same one returned.
	GetObjectPointClouds(context.Context, *GetObjectPointCloudsRequest) (*GetObjectPointCloudsResponse, error)
	// GetProperties will return the properties as booleans given the name of the vision service
	GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedVisionServiceServer()
}

// UnimplementedVisionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedVisionServiceServer struct {
}

func (UnimplementedVisionServiceServer) GetDetectionsFromCamera(context.Context, *GetDetectionsFromCameraRequest) (*GetDetectionsFromCameraResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDetectionsFromCamera not implemented")
}
func (UnimplementedVisionServiceServer) GetDetections(context.Context, *GetDetectionsRequest) (*GetDetectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDetections not implemented")
}
func (UnimplementedVisionServiceServer) GetClassificationsFromCamera(context.Context, *GetClassificationsFromCameraRequest) (*GetClassificationsFromCameraResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetClassificationsFromCamera not implemented")
}
func (UnimplementedVisionServiceServer) GetClassifications(context.Context, *GetClassificationsRequest) (*GetClassificationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetClassifications not implemented")
}
func (UnimplementedVisionServiceServer) GetObjectPointClouds(context.Context, *GetObjectPointCloudsRequest) (*GetObjectPointCloudsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetObjectPointClouds not implemented")
}
func (UnimplementedVisionServiceServer) GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProperties not implemented")
}
func (UnimplementedVisionServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedVisionServiceServer) mustEmbedUnimplementedVisionServiceServer() {}

// UnsafeVisionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to VisionServiceServer will
// result in compilation errors.
type UnsafeVisionServiceServer interface {
	mustEmbedUnimplementedVisionServiceServer()
}

func RegisterVisionServiceServer(s grpc.ServiceRegistrar, srv VisionServiceServer) {
	s.RegisterService(&VisionService_ServiceDesc, srv)
}

func _VisionService_GetDetectionsFromCamera_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDetectionsFromCameraRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetDetectionsFromCamera(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetDetectionsFromCamera",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetDetectionsFromCamera(ctx, req.(*GetDetectionsFromCameraRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_GetDetections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDetectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetDetections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetDetections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetDetections(ctx, req.(*GetDetectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_GetClassificationsFromCamera_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetClassificationsFromCameraRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetClassificationsFromCamera(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetClassificationsFromCamera",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetClassificationsFromCamera(ctx, req.(*GetClassificationsFromCameraRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_GetClassifications_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetClassificationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetClassifications(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetClassifications",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetClassifications(ctx, req.(*GetClassificationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_GetObjectPointClouds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetObjectPointCloudsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetObjectPointClouds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetObjectPointClouds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetObjectPointClouds(ctx, req.(*GetObjectPointCloudsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_GetProperties_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPropertiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).GetProperties(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/GetProperties",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).GetProperties(ctx, req.(*GetPropertiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VisionService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VisionServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.vision.v1.VisionService/DoCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VisionServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// VisionService_ServiceDesc is the grpc.ServiceDesc for VisionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var VisionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.vision.v1.VisionService",
	HandlerType: (*VisionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDetectionsFromCamera",
			Handler:    _VisionService_GetDetectionsFromCamera_Handler,
		},
		{
			MethodName: "GetDetections",
			Handler:    _VisionService_GetDetections_Handler,
		},
		{
			MethodName: "GetClassificationsFromCamera",
			Handler:    _VisionService_GetClassificationsFromCamera_Handler,
		},
		{
			MethodName: "GetClassifications",
			Handler:    _VisionService_GetClassifications_Handler,
		},
		{
			MethodName: "GetObjectPointClouds",
			Handler:    _VisionService_GetObjectPointClouds_Handler,
		},
		{
			MethodName: "GetProperties",
			Handler:    _VisionService_GetProperties_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _VisionService_DoCommand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service/vision/v1/vision.proto",
}
