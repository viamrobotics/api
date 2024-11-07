// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: service/slam/v1/slam.proto

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
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	SLAMService_GetPosition_FullMethodName      = "/viam.service.slam.v1.SLAMService/GetPosition"
	SLAMService_GetPointCloudMap_FullMethodName = "/viam.service.slam.v1.SLAMService/GetPointCloudMap"
	SLAMService_GetInternalState_FullMethodName = "/viam.service.slam.v1.SLAMService/GetInternalState"
	SLAMService_GetProperties_FullMethodName    = "/viam.service.slam.v1.SLAMService/GetProperties"
	SLAMService_DoCommand_FullMethodName        = "/viam.service.slam.v1.SLAMService/DoCommand"
)

// SLAMServiceClient is the client API for SLAMService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// A SlamService declares the gRPC contract for a slam service
type SLAMServiceClient interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to a returned component reference.
	GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error)
	// GetPointCloudMap returns the latest pointcloud map available where XY is the ground
	// plane and positive Z is up, following the Right Hand Rule.
	GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetPointCloudMapResponse], error)
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing.
	// This endpoint is not intended for end users.
	GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetInternalStateResponse], error)
	// GetProperties returns properties of the current slam service including mapping_mode
	// and cloud_slam, where mapping_mode is the type of mapping/localizing being performed
	// and cloud_slam is a boolean representing if this SLAM service is being run in the cloud.
	GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error)
	// DoCommand sends/receives arbitrary commands.
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type sLAMServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSLAMServiceClient(cc grpc.ClientConnInterface) SLAMServiceClient {
	return &sLAMServiceClient{cc}
}

func (c *sLAMServiceClient) GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetPositionResponse)
	err := c.cc.Invoke(ctx, SLAMService_GetPosition_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetPointCloudMapResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[0], SLAMService_GetPointCloudMap_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[GetPointCloudMapRequest, GetPointCloudMapResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type SLAMService_GetPointCloudMapClient = grpc.ServerStreamingClient[GetPointCloudMapResponse]

func (c *sLAMServiceClient) GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetInternalStateResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[1], SLAMService_GetInternalState_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[GetInternalStateRequest, GetInternalStateResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type SLAMService_GetInternalStateClient = grpc.ServerStreamingClient[GetInternalStateResponse]

func (c *sLAMServiceClient) GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetPropertiesResponse)
	err := c.cc.Invoke(ctx, SLAMService_GetProperties_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, SLAMService_DoCommand_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SLAMServiceServer is the server API for SLAMService service.
// All implementations must embed UnimplementedSLAMServiceServer
// for forward compatibility.
//
// A SlamService declares the gRPC contract for a slam service
type SLAMServiceServer interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to a returned component reference.
	GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error)
	// GetPointCloudMap returns the latest pointcloud map available where XY is the ground
	// plane and positive Z is up, following the Right Hand Rule.
	GetPointCloudMap(*GetPointCloudMapRequest, grpc.ServerStreamingServer[GetPointCloudMapResponse]) error
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing.
	// This endpoint is not intended for end users.
	GetInternalState(*GetInternalStateRequest, grpc.ServerStreamingServer[GetInternalStateResponse]) error
	// GetProperties returns properties of the current slam service including mapping_mode
	// and cloud_slam, where mapping_mode is the type of mapping/localizing being performed
	// and cloud_slam is a boolean representing if this SLAM service is being run in the cloud.
	GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error)
	// DoCommand sends/receives arbitrary commands.
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedSLAMServiceServer()
}

// UnimplementedSLAMServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedSLAMServiceServer struct{}

func (UnimplementedSLAMServiceServer) GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPosition not implemented")
}
func (UnimplementedSLAMServiceServer) GetPointCloudMap(*GetPointCloudMapRequest, grpc.ServerStreamingServer[GetPointCloudMapResponse]) error {
	return status.Errorf(codes.Unimplemented, "method GetPointCloudMap not implemented")
}
func (UnimplementedSLAMServiceServer) GetInternalState(*GetInternalStateRequest, grpc.ServerStreamingServer[GetInternalStateResponse]) error {
	return status.Errorf(codes.Unimplemented, "method GetInternalState not implemented")
}
func (UnimplementedSLAMServiceServer) GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProperties not implemented")
}
func (UnimplementedSLAMServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedSLAMServiceServer) mustEmbedUnimplementedSLAMServiceServer() {}
func (UnimplementedSLAMServiceServer) testEmbeddedByValue()                     {}

// UnsafeSLAMServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SLAMServiceServer will
// result in compilation errors.
type UnsafeSLAMServiceServer interface {
	mustEmbedUnimplementedSLAMServiceServer()
}

func RegisterSLAMServiceServer(s grpc.ServiceRegistrar, srv SLAMServiceServer) {
	// If the following call pancis, it indicates UnimplementedSLAMServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&SLAMService_ServiceDesc, srv)
}

func _SLAMService_GetPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SLAMService_GetPosition_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetPosition(ctx, req.(*GetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetPointCloudMap_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetPointCloudMapRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetPointCloudMap(m, &grpc.GenericServerStream[GetPointCloudMapRequest, GetPointCloudMapResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type SLAMService_GetPointCloudMapServer = grpc.ServerStreamingServer[GetPointCloudMapResponse]

func _SLAMService_GetInternalState_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetInternalStateRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetInternalState(m, &grpc.GenericServerStream[GetInternalStateRequest, GetInternalStateResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type SLAMService_GetInternalStateServer = grpc.ServerStreamingServer[GetInternalStateResponse]

func _SLAMService_GetProperties_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPropertiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetProperties(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SLAMService_GetProperties_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetProperties(ctx, req.(*GetPropertiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SLAMService_DoCommand_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// SLAMService_ServiceDesc is the grpc.ServiceDesc for SLAMService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SLAMService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.slam.v1.SLAMService",
	HandlerType: (*SLAMServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPosition",
			Handler:    _SLAMService_GetPosition_Handler,
		},
		{
			MethodName: "GetProperties",
			Handler:    _SLAMService_GetProperties_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _SLAMService_DoCommand_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetPointCloudMap",
			Handler:       _SLAMService_GetPointCloudMap_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetInternalState",
			Handler:       _SLAMService_GetInternalState_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "service/slam/v1/slam.proto",
}
