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

// ShellServiceClient is the client API for ShellService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ShellServiceClient interface {
	// Shell starts a shell with an input and output pipe.
	Shell(ctx context.Context, opts ...grpc.CallOption) (ShellService_ShellClient, error)
}

type shellServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewShellServiceClient(cc grpc.ClientConnInterface) ShellServiceClient {
	return &shellServiceClient{cc}
}

func (c *shellServiceClient) Shell(ctx context.Context, opts ...grpc.CallOption) (ShellService_ShellClient, error) {
	stream, err := c.cc.NewStream(ctx, &ShellService_ServiceDesc.Streams[0], "/viam.service.shell.v1.ShellService/Shell", opts...)
	if err != nil {
		return nil, err
	}
	x := &shellServiceShellClient{stream}
	return x, nil
}

type ShellService_ShellClient interface {
	Send(*ShellRequest) error
	Recv() (*ShellResponse, error)
	grpc.ClientStream
}

type shellServiceShellClient struct {
	grpc.ClientStream
}

func (x *shellServiceShellClient) Send(m *ShellRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *shellServiceShellClient) Recv() (*ShellResponse, error) {
	m := new(ShellResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ShellServiceServer is the server API for ShellService service.
// All implementations must embed UnimplementedShellServiceServer
// for forward compatibility
type ShellServiceServer interface {
	// Shell starts a shell with an input and output pipe.
	Shell(ShellService_ShellServer) error
	mustEmbedUnimplementedShellServiceServer()
}

// UnimplementedShellServiceServer must be embedded to have forward compatible implementations.
type UnimplementedShellServiceServer struct {
}

func (UnimplementedShellServiceServer) Shell(ShellService_ShellServer) error {
	return status.Errorf(codes.Unimplemented, "method Shell not implemented")
}
func (UnimplementedShellServiceServer) mustEmbedUnimplementedShellServiceServer() {}

// UnsafeShellServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ShellServiceServer will
// result in compilation errors.
type UnsafeShellServiceServer interface {
	mustEmbedUnimplementedShellServiceServer()
}

func RegisterShellServiceServer(s grpc.ServiceRegistrar, srv ShellServiceServer) {
	s.RegisterService(&ShellService_ServiceDesc, srv)
}

func _ShellService_Shell_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ShellServiceServer).Shell(&shellServiceShellServer{stream})
}

type ShellService_ShellServer interface {
	Send(*ShellResponse) error
	Recv() (*ShellRequest, error)
	grpc.ServerStream
}

type shellServiceShellServer struct {
	grpc.ServerStream
}

func (x *shellServiceShellServer) Send(m *ShellResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *shellServiceShellServer) Recv() (*ShellRequest, error) {
	m := new(ShellRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ShellService_ServiceDesc is the grpc.ServiceDesc for ShellService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ShellService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.shell.v1.ShellService",
	HandlerType: (*ShellServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Shell",
			Handler:       _ShellService_Shell_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "service/shell/v1/shell.proto",
}
