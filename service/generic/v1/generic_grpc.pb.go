// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: service/generic/v1/generic.proto

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
	GenericService_DoCommand_FullMethodName = "/viam.service.generic.v1.GenericService/DoCommand"
)

// GenericServiceClient is the client API for GenericService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// GenericService services all generic services associated with a robot
type GenericServiceClient interface {
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type genericServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGenericServiceClient(cc grpc.ClientConnInterface) GenericServiceClient {
	return &genericServiceClient{cc}
}

func (c *genericServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, GenericService_DoCommand_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GenericServiceServer is the server API for GenericService service.
// All implementations must embed UnimplementedGenericServiceServer
// for forward compatibility.
//
// GenericService services all generic services associated with a robot
type GenericServiceServer interface {
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedGenericServiceServer()
}

// UnimplementedGenericServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedGenericServiceServer struct{}

func (UnimplementedGenericServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedGenericServiceServer) mustEmbedUnimplementedGenericServiceServer() {}
func (UnimplementedGenericServiceServer) testEmbeddedByValue()                        {}

// UnsafeGenericServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GenericServiceServer will
// result in compilation errors.
type UnsafeGenericServiceServer interface {
	mustEmbedUnimplementedGenericServiceServer()
}

func RegisterGenericServiceServer(s grpc.ServiceRegistrar, srv GenericServiceServer) {
	// If the following call pancis, it indicates UnimplementedGenericServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&GenericService_ServiceDesc, srv)
}

func _GenericService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GenericServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GenericService_DoCommand_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GenericServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GenericService_ServiceDesc is the grpc.ServiceDesc for GenericService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GenericService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.generic.v1.GenericService",
	HandlerType: (*GenericServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DoCommand",
			Handler:    _GenericService_DoCommand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service/generic/v1/generic.proto",
}
