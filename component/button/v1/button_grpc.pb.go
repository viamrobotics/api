// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: component/button/v1/button.proto

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

// ButtonServiceClient is the client API for ButtonService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ButtonServiceClient interface {
	// Pushes a button
	Push(ctx context.Context, in *PushRequest, opts ...grpc.CallOption) (*PushResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type buttonServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewButtonServiceClient(cc grpc.ClientConnInterface) ButtonServiceClient {
	return &buttonServiceClient{cc}
}

func (c *buttonServiceClient) Push(ctx context.Context, in *PushRequest, opts ...grpc.CallOption) (*PushResponse, error) {
	out := new(PushResponse)
	err := c.cc.Invoke(ctx, "/viam.component.button.v1.ButtonService/Push", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buttonServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, "/viam.component.button.v1.ButtonService/DoCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ButtonServiceServer is the server API for ButtonService service.
// All implementations must embed UnimplementedButtonServiceServer
// for forward compatibility
type ButtonServiceServer interface {
	// Pushes a button
	Push(context.Context, *PushRequest) (*PushResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedButtonServiceServer()
}

// UnimplementedButtonServiceServer must be embedded to have forward compatible implementations.
type UnimplementedButtonServiceServer struct {
}

func (UnimplementedButtonServiceServer) Push(context.Context, *PushRequest) (*PushResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Push not implemented")
}
func (UnimplementedButtonServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedButtonServiceServer) mustEmbedUnimplementedButtonServiceServer() {}

// UnsafeButtonServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ButtonServiceServer will
// result in compilation errors.
type UnsafeButtonServiceServer interface {
	mustEmbedUnimplementedButtonServiceServer()
}

func RegisterButtonServiceServer(s grpc.ServiceRegistrar, srv ButtonServiceServer) {
	s.RegisterService(&ButtonService_ServiceDesc, srv)
}

func _ButtonService_Push_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ButtonServiceServer).Push(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.button.v1.ButtonService/Push",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ButtonServiceServer).Push(ctx, req.(*PushRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ButtonService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ButtonServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.button.v1.ButtonService/DoCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ButtonServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ButtonService_ServiceDesc is the grpc.ServiceDesc for ButtonService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ButtonService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.component.button.v1.ButtonService",
	HandlerType: (*ButtonServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Push",
			Handler:    _ButtonService_Push_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _ButtonService_DoCommand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "component/button/v1/button.proto",
}
