// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: app/agent/v1/agent.proto

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

// AgentAppServiceClient is the client API for AgentAppService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AgentAppServiceClient interface {
	// GetAgentConfig is for retrieving config in App.
	GetAgentConfig(ctx context.Context, in *GetAgentConfigRequest, opts ...grpc.CallOption) (*GetAgentConfigResponse, error)
	// UpdateAgentConfig is for editing config in App.
	UpdateAgentConfig(ctx context.Context, in *UpdateAgentConfigRequest, opts ...grpc.CallOption) (*UpdateAgentConfigResponse, error)
}

type agentAppServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAgentAppServiceClient(cc grpc.ClientConnInterface) AgentAppServiceClient {
	return &agentAppServiceClient{cc}
}

func (c *agentAppServiceClient) GetAgentConfig(ctx context.Context, in *GetAgentConfigRequest, opts ...grpc.CallOption) (*GetAgentConfigResponse, error) {
	out := new(GetAgentConfigResponse)
	err := c.cc.Invoke(ctx, "/viam.app.agent.v1.AgentAppService/GetAgentConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *agentAppServiceClient) UpdateAgentConfig(ctx context.Context, in *UpdateAgentConfigRequest, opts ...grpc.CallOption) (*UpdateAgentConfigResponse, error) {
	out := new(UpdateAgentConfigResponse)
	err := c.cc.Invoke(ctx, "/viam.app.agent.v1.AgentAppService/UpdateAgentConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AgentAppServiceServer is the server API for AgentAppService service.
// All implementations must embed UnimplementedAgentAppServiceServer
// for forward compatibility
type AgentAppServiceServer interface {
	// GetAgentConfig is for retrieving config in App.
	GetAgentConfig(context.Context, *GetAgentConfigRequest) (*GetAgentConfigResponse, error)
	// UpdateAgentConfig is for editing config in App.
	UpdateAgentConfig(context.Context, *UpdateAgentConfigRequest) (*UpdateAgentConfigResponse, error)
	mustEmbedUnimplementedAgentAppServiceServer()
}

// UnimplementedAgentAppServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAgentAppServiceServer struct {
}

func (UnimplementedAgentAppServiceServer) GetAgentConfig(context.Context, *GetAgentConfigRequest) (*GetAgentConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAgentConfig not implemented")
}
func (UnimplementedAgentAppServiceServer) UpdateAgentConfig(context.Context, *UpdateAgentConfigRequest) (*UpdateAgentConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAgentConfig not implemented")
}
func (UnimplementedAgentAppServiceServer) mustEmbedUnimplementedAgentAppServiceServer() {}

// UnsafeAgentAppServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AgentAppServiceServer will
// result in compilation errors.
type UnsafeAgentAppServiceServer interface {
	mustEmbedUnimplementedAgentAppServiceServer()
}

func RegisterAgentAppServiceServer(s grpc.ServiceRegistrar, srv AgentAppServiceServer) {
	s.RegisterService(&AgentAppService_ServiceDesc, srv)
}

func _AgentAppService_GetAgentConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAgentConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentAppServiceServer).GetAgentConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.agent.v1.AgentAppService/GetAgentConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentAppServiceServer).GetAgentConfig(ctx, req.(*GetAgentConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AgentAppService_UpdateAgentConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAgentConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentAppServiceServer).UpdateAgentConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.agent.v1.AgentAppService/UpdateAgentConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentAppServiceServer).UpdateAgentConfig(ctx, req.(*UpdateAgentConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AgentAppService_ServiceDesc is the grpc.ServiceDesc for AgentAppService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AgentAppService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.agent.v1.AgentAppService",
	HandlerType: (*AgentAppServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAgentConfig",
			Handler:    _AgentAppService_GetAgentConfig_Handler,
		},
		{
			MethodName: "UpdateAgentConfig",
			Handler:    _AgentAppService_UpdateAgentConfig_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app/agent/v1/agent.proto",
}

// AgentDeviceServiceClient is the client API for AgentDeviceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AgentDeviceServiceClient interface {
	// DeviceAgentConfig is for retrieving config by the on-device agent.
	DeviceAgentConfig(ctx context.Context, in *DeviceAgentConfigRequest, opts ...grpc.CallOption) (*DeviceAgentConfigResponse, error)
}

type agentDeviceServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAgentDeviceServiceClient(cc grpc.ClientConnInterface) AgentDeviceServiceClient {
	return &agentDeviceServiceClient{cc}
}

func (c *agentDeviceServiceClient) DeviceAgentConfig(ctx context.Context, in *DeviceAgentConfigRequest, opts ...grpc.CallOption) (*DeviceAgentConfigResponse, error) {
	out := new(DeviceAgentConfigResponse)
	err := c.cc.Invoke(ctx, "/viam.app.agent.v1.AgentDeviceService/DeviceAgentConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AgentDeviceServiceServer is the server API for AgentDeviceService service.
// All implementations must embed UnimplementedAgentDeviceServiceServer
// for forward compatibility
type AgentDeviceServiceServer interface {
	// DeviceAgentConfig is for retrieving config by the on-device agent.
	DeviceAgentConfig(context.Context, *DeviceAgentConfigRequest) (*DeviceAgentConfigResponse, error)
	mustEmbedUnimplementedAgentDeviceServiceServer()
}

// UnimplementedAgentDeviceServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAgentDeviceServiceServer struct {
}

func (UnimplementedAgentDeviceServiceServer) DeviceAgentConfig(context.Context, *DeviceAgentConfigRequest) (*DeviceAgentConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeviceAgentConfig not implemented")
}
func (UnimplementedAgentDeviceServiceServer) mustEmbedUnimplementedAgentDeviceServiceServer() {}

// UnsafeAgentDeviceServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AgentDeviceServiceServer will
// result in compilation errors.
type UnsafeAgentDeviceServiceServer interface {
	mustEmbedUnimplementedAgentDeviceServiceServer()
}

func RegisterAgentDeviceServiceServer(s grpc.ServiceRegistrar, srv AgentDeviceServiceServer) {
	s.RegisterService(&AgentDeviceService_ServiceDesc, srv)
}

func _AgentDeviceService_DeviceAgentConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeviceAgentConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentDeviceServiceServer).DeviceAgentConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.agent.v1.AgentDeviceService/DeviceAgentConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentDeviceServiceServer).DeviceAgentConfig(ctx, req.(*DeviceAgentConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AgentDeviceService_ServiceDesc is the grpc.ServiceDesc for AgentDeviceService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AgentDeviceService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.agent.v1.AgentDeviceService",
	HandlerType: (*AgentDeviceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DeviceAgentConfig",
			Handler:    _AgentDeviceService_DeviceAgentConfig_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app/agent/v1/agent.proto",
}
