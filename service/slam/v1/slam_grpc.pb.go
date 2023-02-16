// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// SLAMServiceClient is the client API for SLAMService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SLAMServiceClient interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to the "origin" of the map.
	GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error)
	// GetMap returns the latest map image or point cloud generated by the
	// SLAM library
	GetMap(ctx context.Context, in *GetMapRequest, opts ...grpc.CallOption) (*GetMapResponse, error)
	// GetPositionNew returns the current estimated position of the robot with
	// respect to a returned component reference. Note: this function will be
	// renamed to GetPosition and replace the existing one in the near future
	GetPositionNew(ctx context.Context, in *GetPositionNewRequest, opts ...grpc.CallOption) (*GetPositionNewResponse, error)
	// DEPRECATED
	// GetPointCloudMap returns the latest point cloud map generated by the
	// SLAM library
	GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (*GetPointCloudMapResponse, error)
	// DEPRECATED
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing. This endpoint is not
	// intended for end user usage
	GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (*GetInternalStateResponse, error)
	// TODO (RSDK-1066): This will soon be renamed to GetPointCloudMap
	// GetPointCloudMap returns the latest point cloud map generated by the
	// SLAM library
	GetPointCloudMapStream(ctx context.Context, in *GetPointCloudMapStreamRequest, opts ...grpc.CallOption) (SLAMService_GetPointCloudMapStreamClient, error)
	// TODO (RSDK-1066): This will be renamed to GetInternalState
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing. This endpoint is not
	// intended for end user usage
	GetInternalStateStream(ctx context.Context, in *GetInternalStateStreamRequest, opts ...grpc.CallOption) (SLAMService_GetInternalStateStreamClient, error)
}

type sLAMServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSLAMServiceClient(cc grpc.ClientConnInterface) SLAMServiceClient {
	return &sLAMServiceClient{cc}
}

func (c *sLAMServiceClient) GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error) {
	out := new(GetPositionResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetPosition", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetMap(ctx context.Context, in *GetMapRequest, opts ...grpc.CallOption) (*GetMapResponse, error) {
	out := new(GetMapResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetMap", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetPositionNew(ctx context.Context, in *GetPositionNewRequest, opts ...grpc.CallOption) (*GetPositionNewResponse, error) {
	out := new(GetPositionNewResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetPositionNew", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (*GetPointCloudMapResponse, error) {
	out := new(GetPointCloudMapResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetPointCloudMap", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (*GetInternalStateResponse, error) {
	out := new(GetInternalStateResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetInternalState", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetPointCloudMapStream(ctx context.Context, in *GetPointCloudMapStreamRequest, opts ...grpc.CallOption) (SLAMService_GetPointCloudMapStreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[0], "/viam.service.slam.v1.SLAMService/GetPointCloudMapStream", opts...)
	if err != nil {
		return nil, err
	}
	x := &sLAMServiceGetPointCloudMapStreamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type SLAMService_GetPointCloudMapStreamClient interface {
	Recv() (*GetPointCloudMapStreamResponse, error)
	grpc.ClientStream
}

type sLAMServiceGetPointCloudMapStreamClient struct {
	grpc.ClientStream
}

func (x *sLAMServiceGetPointCloudMapStreamClient) Recv() (*GetPointCloudMapStreamResponse, error) {
	m := new(GetPointCloudMapStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *sLAMServiceClient) GetInternalStateStream(ctx context.Context, in *GetInternalStateStreamRequest, opts ...grpc.CallOption) (SLAMService_GetInternalStateStreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[1], "/viam.service.slam.v1.SLAMService/GetInternalStateStream", opts...)
	if err != nil {
		return nil, err
	}
	x := &sLAMServiceGetInternalStateStreamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type SLAMService_GetInternalStateStreamClient interface {
	Recv() (*GetInternalStateStreamResponse, error)
	grpc.ClientStream
}

type sLAMServiceGetInternalStateStreamClient struct {
	grpc.ClientStream
}

func (x *sLAMServiceGetInternalStateStreamClient) Recv() (*GetInternalStateStreamResponse, error) {
	m := new(GetInternalStateStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// SLAMServiceServer is the server API for SLAMService service.
// All implementations must embed UnimplementedSLAMServiceServer
// for forward compatibility
type SLAMServiceServer interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to the "origin" of the map.
	GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error)
	// GetMap returns the latest map image or point cloud generated by the
	// SLAM library
	GetMap(context.Context, *GetMapRequest) (*GetMapResponse, error)
	// GetPositionNew returns the current estimated position of the robot with
	// respect to a returned component reference. Note: this function will be
	// renamed to GetPosition and replace the existing one in the near future
	GetPositionNew(context.Context, *GetPositionNewRequest) (*GetPositionNewResponse, error)
	// DEPRECATED
	// GetPointCloudMap returns the latest point cloud map generated by the
	// SLAM library
	GetPointCloudMap(context.Context, *GetPointCloudMapRequest) (*GetPointCloudMapResponse, error)
	// DEPRECATED
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing. This endpoint is not
	// intended for end user usage
	GetInternalState(context.Context, *GetInternalStateRequest) (*GetInternalStateResponse, error)
	// TODO (RSDK-1066): This will soon be renamed to GetPointCloudMap
	// GetPointCloudMap returns the latest point cloud map generated by the
	// SLAM library
	GetPointCloudMapStream(*GetPointCloudMapStreamRequest, SLAMService_GetPointCloudMapStreamServer) error
	// TODO (RSDK-1066): This will be renamed to GetInternalState
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing. This endpoint is not
	// intended for end user usage
	GetInternalStateStream(*GetInternalStateStreamRequest, SLAMService_GetInternalStateStreamServer) error
	mustEmbedUnimplementedSLAMServiceServer()
}

// UnimplementedSLAMServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSLAMServiceServer struct {
}

func (UnimplementedSLAMServiceServer) GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPosition not implemented")
}
func (UnimplementedSLAMServiceServer) GetMap(context.Context, *GetMapRequest) (*GetMapResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMap not implemented")
}
func (UnimplementedSLAMServiceServer) GetPositionNew(context.Context, *GetPositionNewRequest) (*GetPositionNewResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPositionNew not implemented")
}
func (UnimplementedSLAMServiceServer) GetPointCloudMap(context.Context, *GetPointCloudMapRequest) (*GetPointCloudMapResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPointCloudMap not implemented")
}
func (UnimplementedSLAMServiceServer) GetInternalState(context.Context, *GetInternalStateRequest) (*GetInternalStateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInternalState not implemented")
}
func (UnimplementedSLAMServiceServer) GetPointCloudMapStream(*GetPointCloudMapStreamRequest, SLAMService_GetPointCloudMapStreamServer) error {
	return status.Errorf(codes.Unimplemented, "method GetPointCloudMapStream not implemented")
}
func (UnimplementedSLAMServiceServer) GetInternalStateStream(*GetInternalStateStreamRequest, SLAMService_GetInternalStateStreamServer) error {
	return status.Errorf(codes.Unimplemented, "method GetInternalStateStream not implemented")
}
func (UnimplementedSLAMServiceServer) mustEmbedUnimplementedSLAMServiceServer() {}

// UnsafeSLAMServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SLAMServiceServer will
// result in compilation errors.
type UnsafeSLAMServiceServer interface {
	mustEmbedUnimplementedSLAMServiceServer()
}

func RegisterSLAMServiceServer(s grpc.ServiceRegistrar, srv SLAMServiceServer) {
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
		FullMethod: "/viam.service.slam.v1.SLAMService/GetPosition",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetPosition(ctx, req.(*GetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetMap_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMapRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetMap(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/GetMap",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetMap(ctx, req.(*GetMapRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetPositionNew_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPositionNewRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetPositionNew(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/GetPositionNew",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetPositionNew(ctx, req.(*GetPositionNewRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetPointCloudMap_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPointCloudMapRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetPointCloudMap(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/GetPointCloudMap",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetPointCloudMap(ctx, req.(*GetPointCloudMapRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetInternalState_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInternalStateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetInternalState(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/GetInternalState",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetInternalState(ctx, req.(*GetInternalStateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetPointCloudMapStream_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetPointCloudMapStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetPointCloudMapStream(m, &sLAMServiceGetPointCloudMapStreamServer{stream})
}

type SLAMService_GetPointCloudMapStreamServer interface {
	Send(*GetPointCloudMapStreamResponse) error
	grpc.ServerStream
}

type sLAMServiceGetPointCloudMapStreamServer struct {
	grpc.ServerStream
}

func (x *sLAMServiceGetPointCloudMapStreamServer) Send(m *GetPointCloudMapStreamResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _SLAMService_GetInternalStateStream_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetInternalStateStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetInternalStateStream(m, &sLAMServiceGetInternalStateStreamServer{stream})
}

type SLAMService_GetInternalStateStreamServer interface {
	Send(*GetInternalStateStreamResponse) error
	grpc.ServerStream
}

type sLAMServiceGetInternalStateStreamServer struct {
	grpc.ServerStream
}

func (x *sLAMServiceGetInternalStateStreamServer) Send(m *GetInternalStateStreamResponse) error {
	return x.ServerStream.SendMsg(m)
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
			MethodName: "GetMap",
			Handler:    _SLAMService_GetMap_Handler,
		},
		{
			MethodName: "GetPositionNew",
			Handler:    _SLAMService_GetPositionNew_Handler,
		},
		{
			MethodName: "GetPointCloudMap",
			Handler:    _SLAMService_GetPointCloudMap_Handler,
		},
		{
			MethodName: "GetInternalState",
			Handler:    _SLAMService_GetInternalState_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetPointCloudMapStream",
			Handler:       _SLAMService_GetPointCloudMapStream_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetInternalStateStream",
			Handler:       _SLAMService_GetInternalStateStream_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "service/slam/v1/slam.proto",
}
