// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: component/encoder/v1/encoder.proto

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
	EncoderService_GetPosition_FullMethodName   = "/viam.component.encoder.v1.EncoderService/GetPosition"
	EncoderService_ResetPosition_FullMethodName = "/viam.component.encoder.v1.EncoderService/ResetPosition"
	EncoderService_GetProperties_FullMethodName = "/viam.component.encoder.v1.EncoderService/GetProperties"
	EncoderService_DoCommand_FullMethodName     = "/viam.component.encoder.v1.EncoderService/DoCommand"
	EncoderService_GetGeometries_FullMethodName = "/viam.component.encoder.v1.EncoderService/GetGeometries"
)

// EncoderServiceClient is the client API for EncoderService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EncoderServiceClient interface {
	// Returns position of the encoder which can either be ticks since last
	// zeroing for an incremental encoder or degrees for an absolute encoder.
	GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error)
	ResetPosition(ctx context.Context, in *ResetPositionRequest, opts ...grpc.CallOption) (*ResetPositionResponse, error)
	// Returns a list of all the methods that are
	// supported by a given robot.
	GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error)
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
	// GetGeometries returns the geometries of the component in their current configuration
	GetGeometries(ctx context.Context, in *v1.GetGeometriesRequest, opts ...grpc.CallOption) (*v1.GetGeometriesResponse, error)
}

type encoderServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEncoderServiceClient(cc grpc.ClientConnInterface) EncoderServiceClient {
	return &encoderServiceClient{cc}
}

func (c *encoderServiceClient) GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetPositionResponse)
	err := c.cc.Invoke(ctx, EncoderService_GetPosition_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *encoderServiceClient) ResetPosition(ctx context.Context, in *ResetPositionRequest, opts ...grpc.CallOption) (*ResetPositionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ResetPositionResponse)
	err := c.cc.Invoke(ctx, EncoderService_ResetPosition_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *encoderServiceClient) GetProperties(ctx context.Context, in *GetPropertiesRequest, opts ...grpc.CallOption) (*GetPropertiesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetPropertiesResponse)
	err := c.cc.Invoke(ctx, EncoderService_GetProperties_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *encoderServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, EncoderService_DoCommand_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *encoderServiceClient) GetGeometries(ctx context.Context, in *v1.GetGeometriesRequest, opts ...grpc.CallOption) (*v1.GetGeometriesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.GetGeometriesResponse)
	err := c.cc.Invoke(ctx, EncoderService_GetGeometries_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EncoderServiceServer is the server API for EncoderService service.
// All implementations must embed UnimplementedEncoderServiceServer
// for forward compatibility.
type EncoderServiceServer interface {
	// Returns position of the encoder which can either be ticks since last
	// zeroing for an incremental encoder or degrees for an absolute encoder.
	GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error)
	ResetPosition(context.Context, *ResetPositionRequest) (*ResetPositionResponse, error)
	// Returns a list of all the methods that are
	// supported by a given robot.
	GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error)
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	// GetGeometries returns the geometries of the component in their current configuration
	GetGeometries(context.Context, *v1.GetGeometriesRequest) (*v1.GetGeometriesResponse, error)
	mustEmbedUnimplementedEncoderServiceServer()
}

// UnimplementedEncoderServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedEncoderServiceServer struct{}

func (UnimplementedEncoderServiceServer) GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPosition not implemented")
}
func (UnimplementedEncoderServiceServer) ResetPosition(context.Context, *ResetPositionRequest) (*ResetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResetPosition not implemented")
}
func (UnimplementedEncoderServiceServer) GetProperties(context.Context, *GetPropertiesRequest) (*GetPropertiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProperties not implemented")
}
func (UnimplementedEncoderServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedEncoderServiceServer) GetGeometries(context.Context, *v1.GetGeometriesRequest) (*v1.GetGeometriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGeometries not implemented")
}
func (UnimplementedEncoderServiceServer) mustEmbedUnimplementedEncoderServiceServer() {}
func (UnimplementedEncoderServiceServer) testEmbeddedByValue()                        {}

// UnsafeEncoderServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EncoderServiceServer will
// result in compilation errors.
type UnsafeEncoderServiceServer interface {
	mustEmbedUnimplementedEncoderServiceServer()
}

func RegisterEncoderServiceServer(s grpc.ServiceRegistrar, srv EncoderServiceServer) {
	// If the following call pancis, it indicates UnimplementedEncoderServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&EncoderService_ServiceDesc, srv)
}

func _EncoderService_GetPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EncoderServiceServer).GetPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EncoderService_GetPosition_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EncoderServiceServer).GetPosition(ctx, req.(*GetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EncoderService_ResetPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResetPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EncoderServiceServer).ResetPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EncoderService_ResetPosition_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EncoderServiceServer).ResetPosition(ctx, req.(*ResetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EncoderService_GetProperties_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPropertiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EncoderServiceServer).GetProperties(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EncoderService_GetProperties_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EncoderServiceServer).GetProperties(ctx, req.(*GetPropertiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EncoderService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EncoderServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EncoderService_DoCommand_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EncoderServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EncoderService_GetGeometries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.GetGeometriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EncoderServiceServer).GetGeometries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EncoderService_GetGeometries_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EncoderServiceServer).GetGeometries(ctx, req.(*v1.GetGeometriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EncoderService_ServiceDesc is the grpc.ServiceDesc for EncoderService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EncoderService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.component.encoder.v1.EncoderService",
	HandlerType: (*EncoderServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPosition",
			Handler:    _EncoderService_GetPosition_Handler,
		},
		{
			MethodName: "ResetPosition",
			Handler:    _EncoderService_ResetPosition_Handler,
		},
		{
			MethodName: "GetProperties",
			Handler:    _EncoderService_GetProperties_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _EncoderService_DoCommand_Handler,
		},
		{
			MethodName: "GetGeometries",
			Handler:    _EncoderService_GetGeometries_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "component/encoder/v1/encoder.proto",
}
